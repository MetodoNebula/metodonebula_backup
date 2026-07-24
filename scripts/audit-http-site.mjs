import fs from "node:fs";
import http from "node:http";
import path from "node:path";

const ROOT = process.cwd();
const DIST = path.join(ROOT, "dist");
const SITE_URL = "https://metodonebula.es";
const failures = [];

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml; charset=utf-8",
  ".ttf": "font/ttf",
  ".txt": "text/plain; charset=utf-8",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".xml": "application/xml; charset=utf-8",
};

function safeFilePath(urlPath) {
  const decoded = decodeURIComponent(urlPath);
  const candidate = path.resolve(DIST, decoded.replace(/^\/+/, ""));
  return candidate === DIST || candidate.startsWith(`${DIST}${path.sep}`) ? candidate : undefined;
}

function createServer() {
  return http.createServer((request, response) => {
    const url = new URL(request.url || "/", "http://127.0.0.1");
    let filePath = safeFilePath(url.pathname);
    if (!filePath) {
      response.writeHead(403);
      response.end("Forbidden");
      return;
    }

    if (url.pathname.endsWith("/")) {
      filePath = path.join(filePath, "index.html");
    } else if (
      !path.extname(filePath) &&
      fs.existsSync(filePath) &&
      fs.statSync(filePath).isDirectory()
    ) {
      response.writeHead(301, { location: `${url.pathname}/${url.search}` });
      response.end();
      return;
    }

    if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
      const notFound = fs.readFileSync(path.join(DIST, "404.html"));
      response.writeHead(404, { "content-type": "text/html; charset=utf-8" });
      response.end(notFound);
      return;
    }

    response.writeHead(200, {
      "content-type":
        contentTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream",
    });
    response.end(fs.readFileSync(filePath));
  });
}

function fail(message) {
  failures.push(message);
}

if (!fs.existsSync(path.join(DIST, "sitemap.xml"))) {
  throw new Error("Missing dist/sitemap.xml. Run npm run build first.");
}

const server = createServer();
await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const { port } = server.address();
const localOrigin = `http://127.0.0.1:${port}`;

try {
  const sitemapResponse = await fetch(`${localOrigin}/sitemap.xml`);
  const sitemap = await sitemapResponse.text();
  const publicUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  const requiredRoutes = new Set([
    "/preparacion-examenes/",
    "/formacion-it/",
    "/preparacion-examenes/matematicas-selectividad/",
    "/preparacion-examenes/ib-mathematics/",
    "/formacion-it/python-sql-data-engineering/",
  ]);
  const linkedPaths = new Set();
  const resourcePaths = new Set(["/favicon.svg", "/og-nebula.png", "/robots.txt", "/rss.xml"]);

  for (const publicUrl of publicUrls) {
    const parsed = new URL(publicUrl);
    if (parsed.origin !== SITE_URL) fail(`unexpected sitemap origin: ${publicUrl}`);
    requiredRoutes.delete(parsed.pathname);
    const response = await fetch(`${localOrigin}${parsed.pathname}`, { redirect: "manual" });
    const html = await response.text();
    if (response.status !== 200)
      fail(`${parsed.pathname}: expected HTTP 200, got ${response.status}`);
    if (!response.headers.get("content-type")?.startsWith("text/html")) {
      fail(`${parsed.pathname}: expected HTML content type`);
    }
    if (!html.includes("<title>") || !html.includes("<h1")) {
      fail(`${parsed.pathname}: rendered response is missing title or H1`);
    }

    for (const match of html.matchAll(/\s(?:href|src)=["']([^"'#]+)["']/gi)) {
      const target = match[1];
      if (!target.startsWith("/") || target.startsWith("//")) continue;
      const targetPath = new URL(target, SITE_URL).pathname;
      if (/\.[a-z0-9]+$/i.test(targetPath)) resourcePaths.add(targetPath);
      else linkedPaths.add(targetPath);
    }
  }

  for (const route of requiredRoutes) fail(`required route missing from sitemap: ${route}`);

  for (const linkedPath of linkedPaths) {
    const response = await fetch(`${localOrigin}${linkedPath}`, { redirect: "manual" });
    if (![200, 301].includes(response.status)) {
      fail(`linked route ${linkedPath}: expected HTTP 200/301, got ${response.status}`);
    }
  }

  for (const resourcePath of resourcePaths) {
    const response = await fetch(`${localOrigin}${resourcePath}`, { redirect: "manual" });
    if (response.status !== 200) {
      fail(`resource ${resourcePath}: expected HTTP 200, got ${response.status}`);
    }
  }

  const unknown = await fetch(`${localOrigin}/esta-ruta-no-existe-seo-audit/`, {
    redirect: "manual",
  });
  const unknownHtml = await unknown.text();
  if (unknown.status !== 404) fail(`unknown route: expected HTTP 404, got ${unknown.status}`);
  if (!/name=["']robots["'][^>]+noindex/i.test(unknownHtml)) {
    fail("404 response is missing noindex");
  }
  if (/<link\s+rel=["']canonical["']/i.test(unknownHtml)) {
    fail("404 response must not include a canonical");
  }

  const slashRedirect = await fetch(`${localOrigin}/contacto`, { redirect: "manual" });
  if (slashRedirect.status !== 301 || slashRedirect.headers.get("location") !== "/contacto/") {
    fail("directory route without trailing slash does not redirect to /contacto/");
  }
} finally {
  await new Promise((resolve) => server.close(resolve));
}

if (failures.length) {
  console.error("HTTP SEO audit failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("HTTP SEO audit passed for every sitemap URL, discovered internal route and asset.");
