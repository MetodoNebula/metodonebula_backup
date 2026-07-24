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

function findAllFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const filePath = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...findAllFiles(filePath));
    else out.push(filePath);
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
const descriptionMap = new Map();
const generatedRoutes = new Set(["/404/"]);
const linkedRoutes = new Set(["/"]);
const pagesWithKatex = [];
const indexableCanonicals = new Set();

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
  const robots = getFirst(/<meta\s+name=["']robots["']\s+content=["']([^"']+)["'][^>]*>/i, html);
  const h1Count = (html.match(/<h1[\s>]/gi) ?? []).length;
  const ogTitle = getFirst(
    /<meta\s+property=["']og:title["']\s+content=["']([^"']+)["'][^>]*>/i,
    html,
  );
  const ogDescription = getFirst(
    /<meta\s+property=["']og:description["']\s+content=["']([^"']+)["'][^>]*>/i,
    html,
  );
  const ogUrl = getFirst(/<meta\s+property=["']og:url["']\s+content=["']([^"']+)["'][^>]*>/i, html);
  const ogImage = getFirst(
    /<meta\s+property=["']og:image["']\s+content=["']([^"']+)["'][^>]*>/i,
    html,
  );
  const twitterCard = getFirst(
    /<meta\s+name=["']twitter:card["']\s+content=["']([^"']+)["'][^>]*>/i,
    html,
  );
  const titleCount = (html.match(/<title>[\s\S]*?<\/title>/gi) ?? []).length;
  const descriptionCount = (html.match(/<meta\s+name=["']description["'][^>]*>/gi) ?? []).length;
  const canonicalCount = (html.match(/<link\s+rel=["']canonical["'][^>]*>/gi) ?? []).length;
  const robotsCount = (html.match(/<meta\s+name=["']robots["'][^>]*>/gi) ?? []).length;
  const htmlLang = getFirst(/<html\s+[^>]*lang=["']([^"']+)["']/i, html);
  const hasVisibleBreadcrumbs = /<nav\s+[^>]*aria-label=["']Migas de pan["']/i.test(html);
  const hasBreadcrumbJsonLd = /"@type":"BreadcrumbList"/.test(html);

  if (!title) fail(`${relative}: missing title`);
  if (!description) fail(`${relative}: missing meta description`);
  if (titleCount !== 1) fail(`${relative}: expected exactly one title, found ${titleCount}`);
  if (descriptionCount !== 1) {
    fail(`${relative}: expected exactly one meta description, found ${descriptionCount}`);
  }
  if (robotsCount !== 1)
    fail(`${relative}: expected exactly one robots meta, found ${robotsCount}`);
  if (htmlLang !== SITE_DATA.site.language) {
    fail(`${relative}: expected html lang="${SITE_DATA.site.language}", found "${htmlLang}"`);
  }
  if (!/<meta\s+name=["']viewport["'][^>]*>/i.test(html)) {
    fail(`${relative}: missing viewport meta`);
  }
  if (!/<link\s+rel=["']icon["'][^>]*href=["']\/favicon\.svg["']/i.test(html)) {
    fail(`${relative}: missing favicon link`);
  }
  if (
    !is404 &&
    canonical !== `${SITE_URL}${withTrailingSlash(route) === "/" ? "/" : withTrailingSlash(route)}`
  ) {
    fail(`${relative}: canonical mismatch (${canonical})`);
  }
  if (!is404 && canonicalCount !== 1) {
    fail(`${relative}: expected exactly one canonical, found ${canonicalCount}`);
  }
  if (is404) {
    if (!/noindex/i.test(robots)) fail(`${relative}: 404 must use noindex`);
    if (canonicalCount !== 0) fail(`${relative}: 404 must not include a canonical`);
  } else if (/noindex/i.test(robots)) {
    fail(`${relative}: indexable page contains noindex`);
  }
  if (route === "/") {
    if (hasVisibleBreadcrumbs || hasBreadcrumbJsonLd) {
      fail(`${relative}: home page must not include breadcrumbs`);
    }
  } else if (!is404 && (!hasVisibleBreadcrumbs || !hasBreadcrumbJsonLd)) {
    fail(`${relative}: internal page requires visible and structured breadcrumbs`);
  }
  if (h1Count !== 1) fail(`${relative}: expected exactly one H1, found ${h1Count}`);
  if (!is404) {
    if (titleMap.has(title))
      fail(`${relative}: duplicate title also used by ${titleMap.get(title)}`);
    titleMap.set(title, relative);
    if (descriptionMap.has(description))
      fail(`${relative}: duplicate description also used by ${descriptionMap.get(description)}`);
    descriptionMap.set(description, relative);
    if (!ogTitle || !ogDescription || !ogUrl || !ogImage || !twitterCard) {
      fail(`${relative}: incomplete Open Graph or Twitter metadata`);
    }
    if (canonical && !/noindex/i.test(robots)) indexableCanonicals.add(canonical);
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

  for (const match of html.matchAll(/<img\s+[^>]*>/gi)) {
    if (!/\salt=["'][^"']*["']/i.test(match[0])) {
      fail(`${relative}: image is missing alt`);
    }
    if (!/\swidth=["']?\d+/i.test(match[0]) || !/\sheight=["']?\d+/i.test(match[0])) {
      fail(`${relative}: image is missing intrinsic width/height`);
    }
  }

  for (const match of html.matchAll(/<a\s+[^>]*target=["']_blank["'][^>]*>/gi)) {
    const rel = getFirst(/\srel=["']([^"']+)["']/i, match[0]).split(/\s+/);
    if (!rel.includes("noopener") || !rel.includes("noreferrer")) {
      fail(`${relative}: target="_blank" link is missing noopener noreferrer`);
    }
  }

  if (html.includes('class="katex') && !html.includes("<math")) {
    fail(`${relative}: KaTeX content is missing accessible MathML`);
  }
  for (const table of html.matchAll(/<table[\s\S]*?<\/table>/gi)) {
    if (!table[0].includes("<th") || !table[0].includes('scope="col"')) {
      fail(`${relative}: table is missing semantic column headers`);
    }
    const before = html.slice(Math.max(0, (table.index ?? 0) - 300), table.index);
    if (!before.includes('role="region"') || !before.includes('tabindex="0"')) {
      fail(`${relative}: table is missing a keyboard-scrollable region`);
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
    if (target.startsWith("http://") && !target.startsWith("http://127.0.0.1")) {
      fail(`${relative}: insecure HTTP resource or link ${target}`);
      continue;
    }
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
    linkedRoutes.add(normalized);
    if (
      !generatedRoutes.has(normalized) &&
      !fs.existsSync(path.join(DIST, targetPath.replace(/^\//, "")))
    ) {
      fail(`${relative}: broken internal link ${target}`);
    }
  }

  if (ogImage.startsWith(SITE_URL)) {
    const ogImagePath = path.join(DIST, new URL(ogImage).pathname.replace(/^\//, ""));
    if (!fs.existsSync(ogImagePath)) fail(`${relative}: missing local Open Graph image ${ogImage}`);
  }
}

for (const route of generatedRoutes) {
  if (route !== "/404/" && !linkedRoutes.has(route)) fail(`orphan generated page: ${route}`);
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
  const sitemapUrls = new Set();
  for (const match of sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    sitemapUrls.add(match[1]);
    const route = withTrailingSlash(routeFromUrl(match[1]));
    if (!generatedRoutes.has(route)) fail(`sitemap loc has no generated file: ${match[1]}`);
  }
  if (sitemapUrls.size !== [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].length) {
    fail("sitemap contains duplicate URLs");
  }
  for (const block of sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
    const lastmod = getFirst(/<lastmod>([^<]+)<\/lastmod>/i, block[1]);
    if (lastmod && !/^\d{4}-\d{2}-\d{2}$/.test(lastmod)) {
      fail(`sitemap contains invalid lastmod: ${lastmod}`);
    }
  }
  for (const canonical of indexableCanonicals) {
    if (!sitemapUrls.has(canonical)) fail(`canonical URL missing from sitemap: ${canonical}`);
  }
  for (const url of sitemapUrls) {
    if (!indexableCanonicals.has(url)) fail(`sitemap URL is not an indexable canonical: ${url}`);
  }
}

for (const required of [
  "CNAME",
  ".nojekyll",
  ".static-output-manifest",
  "robots.txt",
  "rss.xml",
  "404.html",
  "og-nebula.png",
]) {
  if (!fs.existsSync(path.join(DIST, required))) fail(`missing ${required}`);
}

const robotsPath = path.join(DIST, "robots.txt");
if (fs.existsSync(robotsPath)) {
  const robots = fs.readFileSync(robotsPath, "utf8");
  if (!/^User-agent:\s*\*\s*$/im.test(robots) || !/^Allow:\s*\/\s*$/im.test(robots)) {
    fail("robots.txt does not explicitly allow crawling");
  }
  if (/^Disallow:/im.test(robots)) fail("robots.txt contains an unexpected Disallow rule");
  if (!robots.includes(`Sitemap: ${SITE_URL}/sitemap.xml`)) {
    fail("robots.txt is missing the canonical sitemap URL");
  }
}

const cnamePath = path.join(DIST, "CNAME");
if (fs.existsSync(cnamePath) && fs.readFileSync(cnamePath, "utf8").trim() !== "metodonebula.es") {
  fail("CNAME does not contain the canonical domain");
}

if (fs.existsSync(path.join(DIST, "_redirects"))) {
  fail("unexpected _redirects fallback could create soft 404 responses");
}

const manifestPath = path.join(DIST, ".static-output-manifest");
if (fs.existsSync(manifestPath)) {
  const manifestEntries = fs.readFileSync(manifestPath, "utf8").split(/\r?\n/).filter(Boolean);
  const actualFiles = findAllFiles(DIST)
    .map((file) => path.relative(DIST, file).replace(/\\/g, "/"))
    .sort();
  if (manifestEntries.some((entry) => entry.startsWith("/") || entry.includes(".."))) {
    fail("static output manifest contains an unsafe path");
  }
  if (manifestEntries.join("\n") !== actualFiles.join("\n")) {
    fail("static output manifest does not exactly match dist");
  }
}

if (failures.length) {
  console.error("SEO validation failed:");
  for (const item of failures) console.error(`- ${item}`);
  process.exit(1);
}

console.log(`SEO validation passed for ${htmlFiles.length} HTML files.`);
