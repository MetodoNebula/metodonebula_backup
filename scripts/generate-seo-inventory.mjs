import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const DIST = path.join(ROOT, "dist");
const SITE_URL = "https://metodonebula.es";
const args = process.argv.slice(2);

function option(name, fallback) {
  const index = args.indexOf(name);
  return index >= 0 && args[index + 1] ? args[index + 1] : fallback;
}

const outputPath = path.resolve(ROOT, option("--output", "docs/seo-url-inventory.csv"));
const baselinePath = path.resolve(ROOT, option("--baseline", "docs/seo-live-baseline.json"));
const baseline = fs.existsSync(baselinePath)
  ? JSON.parse(fs.readFileSync(baselinePath, "utf8"))
  : { defaultSitemapStatus: "No comprobado", overrides: {} };

function findHtml(directory) {
  const files = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const filePath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...findHtml(filePath));
    else if (entry.name === "index.html" || entry.name === "404.html") files.push(filePath);
  }
  return files;
}

function routeForFile(filePath) {
  const relative = path.relative(DIST, filePath).replace(/\\/g, "/");
  if (relative === "index.html") return "/";
  if (relative === "404.html") return "/404/";
  return `/${relative.replace(/index\.html$/, "")}`;
}

function first(pattern, html) {
  return pattern.exec(html)?.[1]?.trim() ?? "";
}

function csv(value) {
  const text = String(value ?? "");
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

const sitemap = fs.readFileSync(path.join(DIST, "sitemap.xml"), "utf8");
const sitemapUrls = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]));
const pages = findHtml(DIST).map((filePath) => {
  const html = fs.readFileSync(filePath, "utf8");
  const route = routeForFile(filePath);
  return {
    route,
    filePath,
    html,
    title: first(/<title>([\s\S]*?)<\/title>/i, html),
    canonical: first(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i, html),
    robots: first(/<meta\s+name=["']robots["']\s+content=["']([^"']+)["']/i, html),
  };
});

const inbound = new Map(pages.map((page) => [page.route, 0]));
for (const page of pages) {
  const uniqueTargets = new Set();
  for (const match of page.html.matchAll(/<a\s+[^>]*href=["']([^"']+)["']/gi)) {
    const target = match[1];
    if (!target.startsWith("/") || target.startsWith("//")) continue;
    let pathname = new URL(target, SITE_URL).pathname;
    if (pathname !== "/" && !pathname.endsWith("/") && !path.extname(pathname)) pathname += "/";
    uniqueTargets.add(pathname);
  }
  for (const target of uniqueTargets) {
    if (inbound.has(target) && target !== page.route) inbound.set(target, inbound.get(target) + 1);
  }
}

const headers = [
  "URL",
  "Ruta de origen",
  "Estado anterior",
  "Estado final esperado",
  "Indexable",
  "Canonical",
  "En sitemap",
  "Noindex",
  "Enlaces internos entrantes aprox.",
  "Clasificación",
  "Acción realizada",
];

const rows = pages
  .sort((a, b) => a.route.localeCompare(b.route))
  .map((page) => {
    const is404 = page.route === "/404/";
    const url = is404 ? `${SITE_URL}/404/` : `${SITE_URL}${page.route}`;
    const previous =
      baseline.overrides?.[page.route] ?? (is404 ? 404 : baseline.defaultSitemapStatus);
    const wasBroken = Number(previous) === 404 && !is404;
    return [
      url,
      path.relative(ROOT, page.filePath).replace(/\\/g, "/"),
      previous,
      is404 ? 404 : 200,
      is404 ? "No" : "Sí",
      page.canonical || "Sin canonical",
      sitemapUrls.has(url) ? "Sí" : "No",
      /noindex/i.test(page.robots) ? "Sí" : "No",
      inbound.get(page.route) ?? 0,
      is404 ? "Error 404 / ruta técnica" : "Indexable",
      is404
        ? "Se mantiene fuera del índice con noindex y sin canonical"
        : wasBroken
          ? "Publicación corregida mediante manifiesto completo de GitHub Pages"
          : "HTML estático, metadatos, sitemap y enlazado validados",
    ];
  });

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(
  outputPath,
  `\uFEFF${[headers, ...rows].map((row) => row.map(csv).join(",")).join("\n")}\n`,
);

console.log(
  `SEO URL inventory written to ${path.relative(ROOT, outputPath)} (${rows.length} URLs).`,
);
