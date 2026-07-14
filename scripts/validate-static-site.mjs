import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const DIST = path.join(ROOT, "dist");
const SITE_DATA = JSON.parse(fs.readFileSync(path.join(ROOT, "src/content/site.json"), "utf8"));
const SITE_URL = SITE_DATA.site.url;

function withTrailingSlash(route) {
  if (route === "/") return "/";
  return `${route.replace(/\/+$/, "")}/`;
}

function routeToFile(route) {
  const clean = withTrailingSlash(route);
  if (clean === "/") return path.join(DIST, "index.html");
  return path.join(DIST, clean.replace(/^\//, ""), "index.html");
}

function routeFromUrl(url) {
  if (url.startsWith(SITE_URL)) return new URL(url).pathname;
  return url;
}

function findFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const filePath = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...findFiles(filePath));
    else if (entry.name === "index.html" || entry.name === "404.html") out.push(filePath);
  }
  return out;
}

function getFirst(pattern, html) {
  return pattern.exec(html)?.[1]?.trim() ?? "";
}

function fail(message) {
  failures.push(message);
}

const failures = [];
const htmlFiles = findFiles(DIST);
const titleMap = new Map();
const generatedRoutes = new Set(["/404/"]);

for (const file of htmlFiles) {
  const relative = path.relative(DIST, file).replace(/\\/g, "/");
  if (relative === "404.html") continue;
  const route = relative === "index.html" ? "/" : `/${relative.replace(/index\.html$/, "")}`;
  generatedRoutes.add(withTrailingSlash(route));
}

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  const relative = path.relative(DIST, file).replace(/\\/g, "/");
  const is404 = relative === "404.html";
  const route = is404
    ? "/404/"
    : relative === "index.html"
      ? "/"
      : `/${relative.replace(/index\.html$/, "")}`;
  const title = getFirst(/<title>([\s\S]*?)<\/title>/i, html);
  const description = getFirst(
    /<meta\s+name=["']description["']\s+content=["']([^"']+)["'][^>]*>/i,
    html,
  );
  const canonical = getFirst(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["'][^>]*>/i, html);
  const h1Count = (html.match(/<h1[\s>]/gi) ?? []).length;

  if (!title) fail(`${relative}: missing title`);
  if (!description) fail(`${relative}: missing meta description`);
  if (
    !is404 &&
    canonical !== `${SITE_URL}${withTrailingSlash(route) === "/" ? "/" : withTrailingSlash(route)}`
  ) {
    fail(`${relative}: canonical mismatch (${canonical})`);
  }
  if (h1Count !== 1) fail(`${relative}: expected exactly one H1, found ${h1Count}`);
  if (!is404) {
    if (titleMap.has(title))
      fail(`${relative}: duplicate title also used by ${titleMap.get(title)}`);
    titleMap.set(title, relative);
  }

  for (const match of html.matchAll(
    /<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,
  )) {
    try {
      JSON.parse(match[1]);
    } catch (error) {
      fail(`${relative}: invalid JSON-LD (${error.message})`);
    }
  }

  for (const match of html.matchAll(/\s(?:href|src)=["']([^"']+)["']/gi)) {
    const target = match[1];
    if (
      target.startsWith("http") ||
      target.startsWith("mailto:") ||
      target.startsWith("tel:") ||
      target.startsWith("#") ||
      target.startsWith("data:")
    ) {
      continue;
    }
    const [targetPath] = target.split("#");
    if (!targetPath || targetPath === "/") continue;
    if (targetPath.startsWith("/assets/")) {
      if (!fs.existsSync(path.join(DIST, targetPath.replace(/^\//, "")))) {
        fail(`${relative}: missing asset ${targetPath}`);
      }
      continue;
    }
    const normalized = withTrailingSlash(targetPath);
    if (
      !generatedRoutes.has(normalized) &&
      !fs.existsSync(path.join(DIST, targetPath.replace(/^\//, "")))
    ) {
      fail(`${relative}: broken internal link ${target}`);
    }
  }
}

const sitemapPath = path.join(DIST, "sitemap.xml");
if (!fs.existsSync(sitemapPath)) {
  fail("missing sitemap.xml");
} else {
  const sitemap = fs.readFileSync(sitemapPath, "utf8");
  for (const match of sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    const route = withTrailingSlash(routeFromUrl(match[1]));
    if (!generatedRoutes.has(route)) fail(`sitemap loc has no generated file: ${match[1]}`);
  }
}

for (const required of ["CNAME", ".nojekyll", "robots.txt", "rss.xml", "404.html"]) {
  if (!fs.existsSync(path.join(DIST, required))) fail(`missing ${required}`);
}

if (failures.length) {
  console.error("SEO validation failed:");
  for (const item of failures) console.error(`- ${item}`);
  process.exit(1);
}

console.log(`SEO validation passed for ${htmlFiles.length} HTML files.`);
