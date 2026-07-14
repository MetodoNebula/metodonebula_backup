import { spawn } from "node:child_process";
import fs from "node:fs";
import http from "node:http";
import os from "node:os";
import path from "node:path";

const ROOT = process.cwd();
const DIST_DIR = path.join(ROOT, "dist");
const BLOG_DIR = path.join(ROOT, "src/content/blog");
const DEBUG_PORT = 12000 + Math.floor(Math.random() * 1000);

const chromeCandidates = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  path.join(process.env.LOCALAPPDATA || "", "Google/Chrome/Application/chrome.exe"),
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
].filter(Boolean);

const chromePath = chromeCandidates.find((candidate) => fs.existsSync(candidate));

if (!chromePath) {
  throw new Error("No Chrome or Edge executable found for visual blog audit.");
}

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
};

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function serveDist() {
  const server = http.createServer((request, response) => {
    const url = new URL(request.url || "/", "http://127.0.0.1");
    let relativePath = decodeURIComponent(url.pathname).replace(/^\/+/, "");
    let filePath = path.join(DIST_DIR, relativePath);

    if (url.pathname.endsWith("/")) {
      filePath = path.join(DIST_DIR, relativePath, "index.html");
    } else if (
      !path.extname(filePath) &&
      fs.existsSync(filePath) &&
      fs.statSync(filePath).isDirectory()
    ) {
      filePath = path.join(filePath, "index.html");
    }

    if (!filePath.startsWith(DIST_DIR)) {
      response.writeHead(403);
      response.end("Forbidden");
      return;
    }

    fs.readFile(filePath, (error, data) => {
      if (error) {
        response.writeHead(404);
        response.end("Not found");
        return;
      }

      response.writeHead(200, {
        "content-type":
          contentTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream",
      });
      response.end(data);
    });
  });

  return new Promise((resolve) => {
    server.listen(0, "127.0.0.1", () => resolve(server));
  });
}

async function getJson(url, tries = 100) {
  let lastError;
  for (let index = 0; index < tries; index += 1) {
    try {
      const response = await fetch(url);
      if (response.ok) return response.json();
      lastError = new Error(`HTTP ${response.status} for ${url}`);
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
    new Promise((_, reject) => {
      setTimeout(() => reject(new Error(`${label} timed out`)), ms);
    }),
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

async function waitForPageLoad(ws) {
  return withTimeout(
    new Promise((resolve) => {
      const onMessage = (event) => {
        const message = JSON.parse(event.data);
        if (message.method === "Page.loadEventFired") {
          ws.removeEventListener("message", onMessage);
          resolve();
        }
      };
      ws.addEventListener("message", onMessage);
    }),
    20000,
    "Page.loadEventFired",
  );
}

const inspectionExpression = String.raw`
(async () => {
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  for (const image of Array.from(document.images)) {
    image.scrollIntoView({ block: "center", inline: "nearest" });
    for (let index = 0; index < 40 && (!image.complete || image.naturalWidth === 0); index += 1) {
      await wait(100);
    }
  }

  window.scrollTo(0, 0);
  await wait(100);

  const article = document.querySelector("article");
  const articleWidth = article?.getBoundingClientRect().width || innerWidth;

  const overflowElements = Array.from(document.querySelectorAll("article *"))
    .filter((element) => {
      if (element.closest(".katex")) return false;
      const style = getComputedStyle(element);
      if (style.display === "none" || style.visibility === "hidden") return false;
      if (element.scrollWidth - element.clientWidth <= 2) return false;
      const text = (element.textContent || "").trim();
      return text.length > 0 && !["svg", "path"].includes(element.tagName.toLowerCase());
    })
    .slice(0, 5)
    .map((element) => element.tagName + ":" + (element.textContent || "").trim().slice(0, 80));

  const graphIssues = Array.from(document.querySelectorAll('figure[data-graph="latex"]')).map((figure) => {
    const image = figure.querySelector("img");
    const caption = figure.querySelector("figcaption");
    const figureRect = figure.getBoundingClientRect();
    const imageRect = image.getBoundingClientRect();
    const captionRect = caption ? caption.getBoundingClientRect() : null;
    const imageStyle = getComputedStyle(image);
    return {
      src: image.getAttribute("src"),
      complete: image.complete,
      naturalWidth: image.naturalWidth,
      figureWidth: Math.round(figureRect.width),
      imageWidth: Math.round(imageRect.width),
      imageHeight: Math.round(imageRect.height),
      objectFit: imageStyle.objectFit,
      maxHeight: imageStyle.maxHeight,
      fitsViewport: figureRect.width <= innerWidth + 1 && imageRect.width <= innerWidth + 1,
      captionBelow: !captionRect || imageRect.bottom <= captionRect.top + 1,
      heightCapped: imageRect.height <= 420,
    };
  });

  const katexIssues = Array.from(document.querySelectorAll(".katex"))
    .filter((element) => {
      const rect = element.getBoundingClientRect();
      return rect.width > Math.min(innerWidth, articleWidth) + 4;
    })
    .slice(0, 5)
    .map((element) => (element.textContent || "").trim().slice(0, 100));

  return {
    hasArticle: Boolean(article),
    title: document.querySelector("h1")?.textContent?.trim() || "",
    scrollWidth: document.documentElement.scrollWidth,
    viewportWidth: innerWidth,
    horizontalOverflow: document.documentElement.scrollWidth > innerWidth + 2,
    incompleteImages: Array.from(document.images)
      .filter((image) => !image.complete || image.naturalWidth === 0)
      .map((image) => image.getAttribute("src")),
    overflowElements,
    graphIssues,
    katexIssues,
  };
})()
`;

async function inspectViewport(ws, label, width, height, url) {
  await send(ws, "Emulation.setDeviceMetricsOverride", {
    width,
    height,
    deviceScaleFactor: 1,
    mobile: width < 600,
  });
  const loaded = waitForPageLoad(ws);
  await send(ws, "Page.navigate", { url });
  await loaded;
  await wait(500);

  const result = await send(ws, "Runtime.evaluate", {
    expression: inspectionExpression,
    awaitPromise: true,
    returnByValue: true,
  });

  const value = result.result.value;
  const badGraphs = value.graphIssues.filter(
    (graph) =>
      !graph.complete ||
      !graph.naturalWidth ||
      !graph.fitsViewport ||
      !graph.captionBelow ||
      !graph.heightCapped ||
      graph.objectFit !== "contain",
  );

  const failures = [];
  if (!value.hasArticle) failures.push("missing article");
  if (!value.title) failures.push("missing h1");
  if (value.horizontalOverflow)
    failures.push(`page overflow ${value.scrollWidth}/${value.viewportWidth}`);
  if (value.incompleteImages.length)
    failures.push(`incomplete images ${value.incompleteImages.join(", ")}`);
  if (value.overflowElements.length)
    failures.push(`element overflow ${value.overflowElements.join(" | ")}`);
  if (badGraphs.length) failures.push(`graph issues ${JSON.stringify(badGraphs)}`);
  if (value.katexIssues.length) failures.push(`katex overflow ${value.katexIssues.join(" | ")}`);
  if (failures.length) throw new Error(`${label} ${url}: ${failures.join("; ")}`);

  return { graphs: value.graphIssues.length, title: value.title };
}

const slugs = fs
  .readdirSync(BLOG_DIR)
  .filter((file) => file.endsWith(".md"))
  .map((file) => file.replace(/\.md$/, ""))
  .sort();

let chrome;
let server;

try {
  server = await serveDist();
  const sitePort = server.address().port;
  const profileDir = fs.mkdtempSync(path.join(os.tmpdir(), "nebula-chrome-"));

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
  const ws = new WebSocket(target.webSocketDebuggerUrl);
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

  const summary = [];
  for (const slug of slugs) {
    const url = `http://127.0.0.1:${sitePort}/blog/${slug}/`;
    const desktop = await inspectViewport(ws, `${slug} desktop`, 1280, 900, url);
    const mobile = await inspectViewport(ws, `${slug} mobile`, 390, 900, url);
    summary.push(`${slug}: graphs ${desktop.graphs}/${mobile.graphs}`);
  }

  console.log(`Visual blog audit passed for ${slugs.length} posts.`);
  console.log(summary.join("\n"));
  ws.close();
} finally {
  if (chrome && !chrome.killed) chrome.kill();
  if (server) server.close();
}
