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

function findFilesByExtension(dir, extension) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const filePath = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...findFilesByExtension(filePath, extension));
    else if (entry.name.endsWith(extension)) out.push(filePath);
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
const pagesWithKatex = [];

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
    /<img\s+[^>]*src=["']([^"']*\/assets\/latex\/[^"']+\.svg)["'][^>]*>/gi,
  )) {
    const beforeImage = html.slice(Math.max(0, match.index - 260), match.index);
    if (!beforeImage.includes('data-graph="latex"')) {
      fail(`${relative}: LaTeX graph ${match[1]} is missing the production graph wrapper`);
    }
    if (!match[0].includes("max-h-[420px]") || !match[0].includes("object-contain")) {
      fail(`${relative}: LaTeX graph ${match[1]} is missing size-safe image classes`);
    }
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
      const assetPath = path.join(DIST, targetPath.replace(/^\//, ""));
      if (!fs.existsSync(assetPath)) {
        fail(`${relative}: missing asset ${targetPath}`);
      } else if (targetPath.startsWith("/assets/latex/") && targetPath.endsWith(".svg")) {
        const svg = fs.readFileSync(assetPath, "utf8");
        if (!svg.includes("<svg")) fail(`${relative}: invalid LaTeX SVG asset ${targetPath}`);
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

const blogSourceDir = path.join(ROOT, "src/content/blog");
for (const file of findFilesByExtension(blogSourceDir, ".md")) {
  const source = fs.readFileSync(file, "utf8");
  if (!/(\\\(|\\\[|\$\$|\$[^$\n]+\$)/.test(source)) continue;
  const slug = path.basename(file, ".md");
  const htmlPath = routeToFile(`/blog/${slug}/`);
  if (!fs.existsSync(htmlPath)) {
    fail(`${path.relative(ROOT, file)}: math source has no generated HTML`);
    continue;
  }
  const html = fs.readFileSync(htmlPath, "utf8");
  if (!html.includes('class="katex')) {
    fail(`${path.relative(DIST, htmlPath).replace(/\\/g, "/")}: math was not rendered with KaTeX`);
  } else {
    pagesWithKatex.push(htmlPath);
  }
}

if (pagesWithKatex.length) {
  const cssFiles = findFilesByExtension(path.join(DIST, "assets"), ".css");
  const hasKatexCss = cssFiles.some((file) => fs.readFileSync(file, "utf8").includes(".katex"));
  if (!hasKatexCss) fail("KaTeX HTML generated, but no published CSS asset contains .katex");
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
