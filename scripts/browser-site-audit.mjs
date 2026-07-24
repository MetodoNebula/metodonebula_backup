import { spawn } from "node:child_process";
import fs from "node:fs";
import http from "node:http";
import os from "node:os";
import path from "node:path";

const ROOT = process.cwd();
const DIST = path.join(ROOT, "dist");
const SITE_URL = "https://metodonebula.es";
const DEBUG_PORT = 14000 + Math.floor(Math.random() * 1000);
const failures = [];

const chromeCandidates = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  path.join(process.env.LOCALAPPDATA || "", "Google/Chrome/Application/chrome.exe"),
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
].filter(Boolean);
const chromePath = chromeCandidates.find((candidate) => fs.existsSync(candidate));

if (!chromePath) throw new Error("No Chrome or Edge executable found for browser SEO audit.");

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml; charset=utf-8",
  ".ttf": "font/ttf",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".xml": "application/xml; charset=utf-8",
};

function serveDist() {
  return http.createServer((request, response) => {
    const url = new URL(request.url || "/", "http://127.0.0.1");
    const relative = decodeURIComponent(url.pathname).replace(/^\/+/, "");
    let filePath = path.resolve(DIST, relative);
    if (filePath !== DIST && !filePath.startsWith(`${DIST}${path.sep}`)) {
      response.writeHead(403);
      response.end("Forbidden");
      return;
    }
    if (url.pathname.endsWith("/")) filePath = path.join(filePath, "index.html");
    if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
      response.writeHead(404, { "content-type": "text/html; charset=utf-8" });
      response.end(fs.readFileSync(path.join(DIST, "404.html")));
      return;
    }
    response.writeHead(200, {
      "content-type":
        contentTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream",
    });
    response.end(fs.readFileSync(filePath));
  });
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getJson(url, tries = 100) {
  let lastError;
  for (let index = 0; index < tries; index += 1) {
    try {
      const response = await fetch(url);
      if (response.ok) return response.json();
    } catch (error) {
      lastError = error;
    }
    await wait(100);
  }
  throw lastError || new Error(`Timed out waiting for ${url}`);
}

function withTimeout(promise, ms, label) {
  return Promise.race([
    promise,
    new Promise((_, reject) => setTimeout(() => reject(new Error(`${label} timed out`)), ms)),
  ]);
}

let commandId = 0;

async function send(ws, method, params = {}) {
  const id = (commandId += 1);
  ws.send(JSON.stringify({ id, method, params }));
  return withTimeout(
    new Promise((resolve, reject) => {
      const onMessage = (event) => {
        const message = JSON.parse(event.data);
        if (message.id !== id) return;
        ws.removeEventListener("message", onMessage);
        if (message.error) reject(new Error(JSON.stringify(message.error)));
        else resolve(message.result || {});
      };
      ws.addEventListener("message", onMessage);
    }),
    15000,
    method,
  );
}

function waitForLoad(ws) {
  return withTimeout(
    new Promise((resolve) => {
      const onMessage = (event) => {
        const message = JSON.parse(event.data);
        if (message.method !== "Page.loadEventFired") return;
        ws.removeEventListener("message", onMessage);
        resolve();
      };
      ws.addEventListener("message", onMessage);
    }),
    20000,
    "Page.loadEventFired",
  );
}

const sitemap = fs.readFileSync(path.join(DIST, "sitemap.xml"), "utf8");
const routes = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
  (match) => new URL(match[1]).pathname,
);
let server;
let chrome;
let ws;

try {
  server = serveDist();
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const sitePort = server.address().port;
  const profileDir = fs.mkdtempSync(path.join(os.tmpdir(), "nebula-browser-audit-"));
  chrome = spawn(
    chromePath,
    [
      "--headless=new",
      "--disable-gpu",
      "--no-first-run",
      "--no-default-browser-check",
      `--remote-debugging-port=${DEBUG_PORT}`,
      `--user-data-dir=${profileDir}`,
      "about:blank",
    ],
    { stdio: ["ignore", "ignore", "ignore"] },
  );

  await getJson(`http://127.0.0.1:${DEBUG_PORT}/json/version`);
  const targets = await getJson(`http://127.0.0.1:${DEBUG_PORT}/json/list`);
  const target = targets.find((item) => item.type === "page") || targets[0];
  ws = new WebSocket(target.webSocketDebuggerUrl);
  await withTimeout(
    new Promise((resolve, reject) => {
      ws.addEventListener("open", resolve, { once: true });
      ws.addEventListener("error", reject, { once: true });
    }),
    10000,
    "WebSocket open",
  );

  await send(ws, "Page.enable");
  await send(ws, "Runtime.enable");
  await send(ws, "Log.enable");

  let activeRoute = "";
  ws.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    if (message.method === "Runtime.exceptionThrown") {
      failures.push(`${activeRoute}: ${message.params.exceptionDetails.text}`);
    }
    if (message.method === "Runtime.consoleAPICalled" && message.params.type === "error") {
      const text = message.params.args
        .map((argument) => argument.value || argument.description)
        .join(" ");
      failures.push(`${activeRoute}: console error ${text}`);
    }
    if (message.method === "Log.entryAdded" && message.params.entry.level === "error") {
      failures.push(`${activeRoute}: log error ${message.params.entry.text}`);
    }
  });

  for (const route of routes) {
    activeRoute = route;
    const loaded = waitForLoad(ws);
    await send(ws, "Page.navigate", { url: `http://127.0.0.1:${sitePort}${route}` });
    await loaded;
    await wait(700);
    const result = await send(ws, "Runtime.evaluate", {
      expression: `({
        title: document.title,
        h1Count: document.querySelectorAll("h1").length,
        canonical: document.querySelector('link[rel="canonical"]')?.href || "",
        robots: document.querySelector('meta[name="robots"]')?.content || "",
        bodyText: document.body.innerText.trim().length,
        brokenImages: Array.from(document.images)
          .filter((image) => image.complete && image.naturalWidth === 0)
          .map((image) => image.src)
      })`,
      returnByValue: true,
    });
    const page = result.result.value;
    const expectedCanonical = `${SITE_URL}${route}`;
    if (!page.title || page.h1Count !== 1 || page.bodyText < 100) {
      failures.push(
        `${route}: incomplete client render (title=${Boolean(page.title)}, h1=${page.h1Count}, text=${page.bodyText})`,
      );
    }
    if (page.canonical !== expectedCanonical) {
      failures.push(`${route}: client canonical mismatch (${page.canonical})`);
    }
    if (/noindex/i.test(page.robots)) failures.push(`${route}: unexpected client noindex`);
    if (page.brokenImages.length) {
      failures.push(`${route}: broken client images ${page.brokenImages.join(", ")}`);
    }
  }
} finally {
  ws?.close();
  if (chrome && !chrome.killed) chrome.kill();
  if (server) await new Promise((resolve) => server.close(resolve));
}

if (failures.length) {
  console.error("Browser SEO audit failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Browser SEO audit passed for ${routes.length} indexable URLs with no console errors.`);
