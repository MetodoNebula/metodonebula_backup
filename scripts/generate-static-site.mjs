import fs from "node:fs";
import path from "node:path";
import katex from "katex";

const ROOT = process.cwd();
const DIST = path.join(ROOT, "dist");
const SITE_DATA = JSON.parse(fs.readFileSync(path.join(ROOT, "src/content/site.json"), "utf8"));
const SITE_URL = SITE_DATA.site.url;
const BLOG_PAGE_SIZE = 9;
const FEATURED_POST_SLUGS = [
  "que-prueba-estadistica-utilizar-guia-test-correcto",
  "como-aprobar-calculo-i-ingenieria-seis-semanas",
  "preparar-selectividad-con-calendario",
];

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function stripTags(html = "") {
  return html.replace(/<[^>]+>/g, "");
}

function headingId(text = "") {
  return stripTags(text)
    .replace(/[*_`]/g, "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function withTrailingSlash(route) {
  if (route === "/") return "/";
  return `${route.replace(/\/+$/, "")}/`;
}

function absoluteUrl(route) {
  if (/^https?:\/\//.test(route)) return route;
  const normalized = route.startsWith("/") ? route : `/${route}`;
  if (/\/[^/?#]+\.[^/?#]+(?:[?#].*)?$/.test(normalized)) {
    return `${SITE_URL}${normalized}`;
  }
  return `${SITE_URL}${withTrailingSlash(normalized) === "/" ? "/" : withTrailingSlash(normalized)}`;
}

function blogCategoryPath(slug) {
  return `/blog/categoria/${slug}/`;
}

function blogPagePath(page) {
  return page <= 1 ? "/blog/" : `/blog/pagina/${page}/`;
}

function blogCategoryPagePath(slug, page) {
  return page <= 1 ? blogCategoryPath(slug) : `/blog/categoria/${slug}/pagina/${page}/`;
}

function totalPages(items, pageSize = BLOG_PAGE_SIZE) {
  return Math.max(1, Math.ceil(items.length / pageSize));
}

function pageItems(items, page, pageSize = BLOG_PAGE_SIZE) {
  const start = (page - 1) * pageSize;
  return items.slice(start, start + pageSize);
}

function pageNumbers(count) {
  return Array.from({ length: count }, (_, index) => index + 1);
}

function outputFileForRoute(route) {
  const clean = withTrailingSlash(route);
  if (clean === "/") return path.join(DIST, "index.html");
  return path.join(DIST, clean.replace(/^\//, ""), "index.html");
}

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function parseFrontmatter(raw) {
  const match = /^---\s*\n([\s\S]*?)\n---\s*\n?/.exec(raw);
  if (!match) return { data: {}, body: raw.trim() };
  const data = {};
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (key) data[key] = value;
  }
  return { data, body: raw.slice(match[0].length).trim() };
}

function readingMinutes(body) {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

function loadPosts() {
  const dir = path.join(ROOT, "src/content/blog");
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data, body } = parseFrontmatter(raw);
      const slug = file.replace(/\.md$/, "");
      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "",
        updated: data.updated ?? data.date ?? "",
        description: data.description ?? "",
        tag: data.tag ?? "Blog",
        category: data.category ?? data.tag ?? "Blog",
        image: data.image ?? "/favicon.svg",
        relatedService: data.relatedService ?? "/contacto/",
        relatedPosts: data.relatedPosts
          ? data.relatedPosts
              .split(",")
              .map((item) => item.trim())
              .filter(Boolean)
          : [],
        readingMinutes: readingMinutes(body),
        body,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

function findPost(posts, slug) {
  return posts.find((post) => post.slug === slug);
}

function findService(route) {
  return SITE_DATA.servicePages.find((service) => service.path === route);
}

function findHub(route) {
  return SITE_DATA.commercialHubs.find((hub) => hub.path === route);
}

const INLINE_PATTERN =
  /(\\\([\s\S]+?\\\))|(\$[^$\n]+\$)|(!\[[^\]]*\]\([^)]+\))|(\[[^\]]+\]\([^)]+\))|(`[^`]+`)|(\*\*[^*]+\*\*)|(__[^_]+__)|(\*[^*]+\*)|(_[^_]+_)/g;

function renderKatex(tex, displayMode = false) {
  return katex.renderToString(tex, {
    displayMode,
    throwOnError: false,
    strict: false,
    trust: false,
  });
}

function displayMathHtml(tex) {
  return `<div role="group" aria-label="Fórmula matemática: ${escapeHtml(tex)}" class="nebula-math my-7 overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-5 text-center">${renderKatex(tex, true)}</div>`;
}

function isLatexGraph(src) {
  return src.startsWith("/assets/latex/") && src.endsWith(".svg");
}

function imageHtml(src, alt) {
  const safeSrc = escapeHtml(src);
  const safeAlt = escapeHtml(alt);
  if (isLatexGraph(src)) {
    return `<figure data-graph="latex" class="mx-auto my-8 max-w-2xl rounded-2xl border border-white/10 bg-white p-4 shadow-[0_10px_40px_-10px_oklch(0.62_0.22_265/0.35)]"><img src="${safeSrc}" alt="${safeAlt}" loading="lazy" class="mx-auto max-h-[420px] w-full object-contain"><figcaption class="mt-3 text-center text-xs leading-relaxed text-slate-700">${safeAlt}</figcaption></figure>`;
  }
  return `<img src="${safeSrc}" alt="${safeAlt}" loading="lazy" class="my-6 w-full rounded-2xl border border-white/10">`;
}

function inlineMarkdown(text) {
  const out = [];
  let lastIndex = 0;
  let match;

  while ((match = INLINE_PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) {
      out.push(escapeHtml(text.slice(lastIndex, match.index)));
    }
    const token = match[0];

    if (token.startsWith("\\(")) {
      out.push(renderKatex(token.slice(2, -2)));
    } else if (token.startsWith("$")) {
      out.push(renderKatex(token.slice(1, -1)));
    } else if (token.startsWith("![")) {
      const parts = /!\[([^\]]*)\]\(([^)]+)\)/.exec(token);
      out.push(imageHtml(parts[2], parts[1]));
    } else if (token.startsWith("[")) {
      const parts = /\[([^\]]+)\]\(([^)]+)\)/.exec(token);
      out.push(
        `<a class="font-medium text-link underline underline-offset-4 transition-colors hover:text-link" href="${escapeHtml(parts[2])}">${escapeHtml(parts[1])}</a>`,
      );
    } else if (token.startsWith("`")) {
      out.push(
        `<code class="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[0.85em] text-foreground">${escapeHtml(token.slice(1, -1))}</code>`,
      );
    } else if (token.startsWith("**") || token.startsWith("__")) {
      out.push(`<strong>${escapeHtml(token.slice(2, -2))}</strong>`);
    } else {
      out.push(`<em>${escapeHtml(token.slice(1, -1))}</em>`);
    }

    lastIndex = INLINE_PATTERN.lastIndex;
  }

  if (lastIndex < text.length) out.push(escapeHtml(text.slice(lastIndex)));
  return out.join("");
}

function markdownToHtml(md) {
  const lines = md.replace(/\r\n/g, "\n").split("\n");
  const out = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) {
      i++;
      continue;
    }
    if (line.trim().startsWith("```")) {
      const code = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        code.push(lines[i]);
        i++;
      }
      i++;
      out.push(
        `<pre class="my-6 w-full max-w-full overflow-x-auto rounded-2xl border border-white/10 bg-black/40 p-5 text-sm"><code class="block min-w-0 whitespace-pre-wrap break-words font-mono text-foreground/90">${escapeHtml(code.join("\n"))}</code></pre>`,
      );
      continue;
    }
    if (
      /^\s*\|.+\|\s*$/.test(line) &&
      /^\s*\|(?:\s*:?-{3,}:?\s*\|)+\s*$/.test(lines[i + 1] ?? "")
    ) {
      const cells = (value) =>
        value
          .trim()
          .replace(/^\||\|$/g, "")
          .split("|")
          .map((cell) => cell.trim());
      const headers = cells(line);
      i += 2;
      const rows = [];
      while (i < lines.length && /^\s*\|.+\|\s*$/.test(lines[i])) {
        rows.push(cells(lines[i]));
        i++;
      }
      out.push(
        `<div role="region" aria-label="Tabla de datos del artículo" tabindex="0" class="my-7 max-w-full overflow-x-auto rounded-2xl border border-white/10"><table class="w-full min-w-[620px] border-collapse text-left text-sm"><thead class="bg-white/[0.07]"><tr>${headers.map((cell) => `<th scope="col" class="border-b border-white/10 px-4 py-3 font-semibold">${inlineMarkdown(cell)}</th>`).join("")}</tr></thead><tbody>${rows.map((row) => `<tr class="border-b border-white/8 last:border-0">${row.map((cell) => `<td class="px-4 py-3 align-top">${inlineMarkdown(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`,
      );
      continue;
    }
    if (line.trim().startsWith("$$") || line.trim().startsWith("\\[")) {
      const opener = line.trim().startsWith("$$") ? "$$" : "\\[";
      const closer = opener === "$$" ? "$$" : "\\]";
      const math = [];
      let current = line.trim().slice(opener.length);
      if (current.endsWith(closer) && current.length > closer.length) {
        math.push(current.slice(0, -closer.length));
        i++;
      } else {
        if (current) math.push(current);
        i++;
        while (i < lines.length) {
          current = lines[i].trim();
          if (current.endsWith(closer)) {
            math.push(current.slice(0, -closer.length));
            i++;
            break;
          }
          math.push(lines[i]);
          i++;
        }
      }
      out.push(displayMathHtml(math.join("\n").trim()));
      continue;
    }
    const image = /^!\[([^\]]*)\]\(([^)]+)\)\s*$/.exec(line.trim());
    if (image) {
      out.push(imageHtml(image[2], image[1]));
      i++;
      continue;
    }
    const heading = /^(#{1,6})\s+(.*)$/.exec(line);
    if (heading) {
      const level = Math.min(6, Math.max(2, heading[1].length));
      out.push(styledHeading(inlineMarkdown(heading[2].trim()), level, "content", "blog"));
      i++;
      continue;
    }
    if (/^\s*[-*]\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^\s*[-*]\s+/.test(lines[i])) {
        items.push(
          `<li class="flex items-start gap-3 text-foreground/85"><span class="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-action"></span><span>${inlineMarkdown(lines[i].replace(/^\s*[-*]\s+/, ""))}</span></li>`,
        );
        i++;
      }
      out.push(`<ul class="my-5 space-y-2 pl-1">${items.join("")}</ul>`);
      continue;
    }
    if (/^\s*\d+\.\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i])) {
        items.push(
          `<li class="flex items-start gap-3 text-foreground/85"><span class="font-display text-sm font-semibold text-action">${items.length + 1}.</span><span>${inlineMarkdown(lines[i].replace(/^\s*\d+\.\s+/, ""))}</span></li>`,
        );
        i++;
      }
      out.push(`<ol class="my-5 list-none space-y-2 pl-0">${items.join("")}</ol>`);
      continue;
    }
    if (/^---+$/.test(line.trim())) {
      out.push("<hr>");
      i++;
      continue;
    }
    if (line.trim().startsWith(">")) {
      const quote = [];
      while (i < lines.length && lines[i].trim().startsWith(">")) {
        quote.push(lines[i].replace(/^\s*>\s?/, ""));
        i++;
      }
      out.push(
        `<blockquote class="my-6 border-l-2 border-action/70 bg-white/[0.02] py-2 pr-4 pl-5 text-foreground/80 italic">${inlineMarkdown(quote.join(" "))}</blockquote>`,
      );
      continue;
    }
    const para = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !/^#{1,6}\s+/.test(lines[i]) &&
      !lines[i].trim().startsWith("```") &&
      !/^\s*[-*]\s+/.test(lines[i]) &&
      !/^\s*\d+\.\s+/.test(lines[i]) &&
      !(
        /^\s*\|.+\|\s*$/.test(lines[i]) &&
        /^\s*\|(?:\s*:?-{3,}:?\s*\|)+\s*$/.test(lines[i + 1] ?? "")
      ) &&
      !lines[i].trim().startsWith(">")
    ) {
      para.push(lines[i]);
      i++;
    }
    out.push(`<p>${inlineMarkdown(para.join(" "))}</p>`);
  }
  return out.join("\n");
}

function headMarkup({
  title,
  description,
  route,
  type = "website",
  image,
  robots = "index,follow",
  jsonLd = [],
  prev,
  next,
}) {
  const url = absoluteUrl(route);
  const imageUrl = absoluteUrl(
    image && image !== SITE_DATA.site.logo ? image : SITE_DATA.site.socialImage,
  );
  return [
    `<title>${escapeHtml(title)}</title>`,
    `<meta name="description" content="${escapeHtml(description)}">`,
    `<meta name="robots" content="${escapeHtml(robots)}">`,
    `<link rel="canonical" href="${escapeHtml(url)}">`,
    `<meta property="og:title" content="${escapeHtml(title)}">`,
    `<meta property="og:description" content="${escapeHtml(description)}">`,
    `<meta property="og:type" content="${escapeHtml(type)}">`,
    `<meta property="og:url" content="${escapeHtml(url)}">`,
    `<meta property="og:image" content="${escapeHtml(imageUrl)}">`,
    `<meta property="og:image:width" content="1200">`,
    `<meta property="og:image:height" content="630">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${escapeHtml(title)}">`,
    `<meta name="twitter:description" content="${escapeHtml(description)}">`,
    `<meta name="twitter:image" content="${escapeHtml(imageUrl)}">`,
    prev ? `<link rel="prev" href="${escapeHtml(absoluteUrl(prev))}">` : "",
    next ? `<link rel="next" href="${escapeHtml(absoluteUrl(next))}">` : "",
    ...jsonLd.map(
      (item) =>
        `<script type="application/ld+json">${JSON.stringify(item).replace(/</g, "\\u003c")}</script>`,
    ),
  ]
    .filter(Boolean)
    .join("\n    ");
}

function cleanHead(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>\s*/i, "")
    .replace(/<meta\s+name=["']description["'][^>]*>\s*/gi, "")
    .replace(/<meta\s+name=["']author["'][^>]*>\s*/gi, "")
    .replace(/<meta\s+name=["']robots["'][^>]*>\s*/gi, "")
    .replace(/<link\s+rel=["']canonical["'][^>]*>\s*/gi, "")
    .replace(/<link\s+rel=["']prev["'][^>]*>\s*/gi, "")
    .replace(/<link\s+rel=["']next["'][^>]*>\s*/gi, "")
    .replace(/<meta\s+property=["']og:[^"']+["'][^>]*>\s*/gi, "")
    .replace(/<meta\s+name=["']twitter:[^"']+["'][^>]*>\s*/gi, "")
    .replace(/<script\s+type=["']application\/ld\+json["'][\s\S]*?<\/script>\s*/gi, "");
}

function renderPage(template, page) {
  const html = cleanHead(template).replace("</head>", `    ${headMarkup(page)}\n  </head>`);
  const rootPattern = /<div id="root">[\s\S]*<\/div>\s*(?=<\/body>)/;
  if (!rootPattern.test(html)) {
    throw new Error("Unable to locate #root in Vite template.");
  }
  const withRoot = html.replace(rootPattern, `<div id="root">${page.body}</div>\n  `);
  const outFile =
    page.route === "/404/" ? path.join(DIST, "404.html") : outputFileForRoute(page.route);
  ensureDir(outFile);
  fs.writeFileSync(outFile, withRoot);
}

function shell({ label, h1, intro, children, breadcrumbs = [], theme = "nebula", h1Class }) {
  const isBlog = theme === "blog";
  const titleLineClass = isBlog ? "blog-title-line" : "nebula-title-line";
  const labelClass = "border-spark/35 bg-spark/10 text-spark";
  const resolvedH1Class = h1Class ?? (isBlog ? "text-foreground" : "nebula-gradient-text");
  const crumbLinkClass = "text-link transition-colors hover:text-link";
  const crumbs = [
    `<a class="${crumbLinkClass}" href="/">Inicio</a>`,
    ...breadcrumbs.map((item, index) =>
      index === breadcrumbs.length - 1
        ? `<span>${escapeHtml(item.label)}</span>`
        : `<a class="${crumbLinkClass}" href="${item.href}">${escapeHtml(item.label)}</a>`,
    ),
  ].join(" / ");
  return `
    <main class="min-h-screen bg-background text-foreground antialiased">
      <section class="relative overflow-hidden border-b border-white/5 px-6 py-16">
        <div class="nebula-aurora pointer-events-none absolute inset-0 opacity-60"></div>
        <div class="pointer-events-none absolute inset-x-0 bottom-0 h-px ${titleLineClass} opacity-70"></div>
        <div class="relative mx-auto max-w-7xl">
          <nav aria-label="Migas de pan" class="text-sm text-muted-foreground">${crumbs}</nav>
          <p class="mt-8 inline-flex rounded-full border px-3 py-1 text-sm uppercase tracking-[0.18em] ${labelClass}">${escapeHtml(label)}</p>
          <h1 class="mt-5 max-w-4xl font-display text-4xl font-bold ${resolvedH1Class}">${escapeHtml(h1)}</h1>
          <p class="mt-5 max-w-2xl text-lg text-muted-foreground">${escapeHtml(intro)}</p>
        </div>
      </section>
      <section class="px-6 py-14">
        <div class="mx-auto max-w-7xl [&_a]:font-medium [&_a]:text-link [&_a]:underline-offset-4 [&_a]:transition-colors [&_a:hover]:text-link">${children}</div>
      </section>
      <footer class="border-t border-white/5 px-6 py-8 text-sm text-muted-foreground">
        <nav class="mx-auto flex max-w-7xl flex-wrap gap-x-5 gap-y-2" aria-label="Navegación secundaria">
          <a class="text-link transition-colors hover:text-link" href="/mapa-del-sitio/">Mapa del sitio</a>
          <a class="text-link transition-colors hover:text-link" href="/blog/">Blog</a>
          <a class="text-link transition-colors hover:text-link" href="/clases-particulares/universidad/">Clases desde ESO</a>
          <a class="text-link transition-colors hover:text-link" href="/contacto/">Contacto</a>
        </nav>
      </footer>
    </main>
  `;
}

function styledHeading(title, level = 2, variant = "content", theme = "nebula") {
  const tag = `h${level}`;
  const id = level <= 3 ? ` id="${escapeHtml(headingId(title))}"` : "";
  const spacing =
    variant === "card"
      ? ""
      : level <= 2
        ? "mt-12 mb-4 "
        : level === 3
          ? "mt-10 mb-3 "
          : "mt-8 mb-2 ";
  const className =
    theme === "blog"
      ? level <= 2
        ? `${spacing}border-l-2 border-action pl-4 font-display font-semibold nebula-heading-text`
        : level === 3
          ? `${spacing}font-display font-semibold nebula-subheading-text`
          : `${spacing}font-display font-semibold text-muted-foreground`
      : level <= 2
        ? `${spacing}border-l-2 border-action pl-4 font-display font-semibold nebula-heading-text`
        : level === 3
          ? `${spacing}font-display font-semibold nebula-subheading-text`
          : `${spacing}font-display font-semibold text-muted-foreground`;
  return `<${tag}${id} class="${className}">${title}</${tag}>`;
}

function coreSectionHtml(title, text, index) {
  const cleanTitle = title.replace(/^\d+\.\s*/, "");
  return `
    <article class="nebula-card relative overflow-hidden rounded-3xl p-7">
      <span class="absolute inset-x-0 top-0 h-1 nebula-title-line"></span>
      <span class="font-display text-sm font-semibold text-violet-soft">${String(index + 1).padStart(2, "0")}</span>
      ${styledHeading(escapeHtml(cleanTitle), 2, "card")}
      <p class="mt-3 leading-relaxed text-muted-foreground">${escapeHtml(text)}</p>
    </article>
  `;
}

function cardList(items, ordered = false) {
  const tag = ordered ? "ol" : "ul";
  return `<${tag}>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</${tag}>`;
}

function blogMetaHtml(post, includeCategory = true) {
  const category = includeCategory
    ? `<span class="rounded-full border border-spark/40 bg-spark/10 px-3 py-1 font-medium uppercase tracking-[0.18em] text-spark">${escapeHtml(post.category)}</span>`
    : "";
  return `
    <div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
      ${category}
      <span>${escapeHtml(post.date)}</span>
      <span>${post.readingMinutes} min de lectura</span>
    </div>
  `;
}

function blogCardHtml(post, headingLevel = 2) {
  const tag = `h${headingLevel}`;
  const headingClass = headingLevel === 2 ? "text-xl" : "text-lg";
  return `
    <a href="/blog/${post.slug}/" class="nebula-card group flex h-full flex-col rounded-3xl p-7 transition-transform hover:-translate-y-1">
      ${blogMetaHtml(post)}
      <${tag} class="mt-5 font-display font-semibold leading-snug text-foreground ${headingClass} transition-colors group-hover:text-spark">${escapeHtml(post.title)}</${tag}>
      <p class="mt-3 grow text-sm leading-relaxed text-muted-foreground">${escapeHtml(post.description)}</p>
      <span class="mt-6 inline-flex items-center gap-2 text-sm font-medium text-link">Leer entrada</span>
    </a>
  `;
}

function postHeadings(body) {
  return Array.from(body.matchAll(/^##\s+(.+)$/gm))
    .slice(0, 8)
    .map((match) => {
      const text = match[1].replace(/\*\*/g, "").trim();
      return { id: headingId(text), text };
    });
}

function tocHtml(post) {
  const headings = postHeadings(post.body);
  if (headings.length < 4) return "";
  return `
    <nav aria-label="Índice del artículo" class="mb-10 rounded-3xl border border-white/8 bg-white/[0.02] p-6 text-sm">
      <p class="font-display font-semibold text-foreground">Índice</p>
      <ol class="mt-4 space-y-2">
        ${headings
          .map(
            (heading) =>
              `<li><a class="text-link underline-offset-4 hover:underline" href="#${escapeHtml(heading.id)}">${escapeHtml(heading.text)}</a></li>`,
          )
          .join("")}
      </ol>
    </nav>
  `;
}

function blogCategoryCardHtml(category) {
  return `
    <a href="${blogCategoryPath(category.slug)}" class="rounded-2xl border border-white/8 bg-white/[0.02] p-4 transition-colors hover:border-action/35 hover:bg-action/5">
      <span class="text-sm font-semibold text-link">${escapeHtml(category.name)}</span>
      <span class="mt-1 block text-xs text-muted-foreground">${escapeHtml(category.description)}</span>
    </a>
  `;
}

function paginationHtml(currentPage, total, pathForPage, label = "Paginación del blog") {
  if (total <= 1) return "";
  const links = [];
  if (currentPage > 1) {
    links.push(
      `<a rel="prev" href="${pathForPage(currentPage - 1)}" class="inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-white/10 px-3 text-sm font-medium text-link transition-colors hover:border-action/35 hover:bg-action/5">Anterior</a>`,
    );
  }
  for (const page of pageNumbers(total)) {
    links.push(
      page === currentPage
        ? `<span aria-current="page" class="inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-action/50 bg-action px-3 text-sm font-semibold text-primary-foreground">${page}</span>`
        : `<a href="${pathForPage(page)}" class="inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-white/10 px-3 text-sm font-medium text-link transition-colors hover:border-action/35 hover:bg-action/5">${page}</a>`,
    );
  }
  if (currentPage < total) {
    links.push(
      `<a rel="next" href="${pathForPage(currentPage + 1)}" class="inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-white/10 px-3 text-sm font-medium text-link transition-colors hover:border-action/35 hover:bg-action/5">Siguiente</a>`,
    );
  }
  return `<nav class="mt-12 flex flex-wrap items-center justify-center gap-2" aria-label="${escapeHtml(label)}">${links.join("")}</nav>`;
}

function homePage() {
  const page = SITE_DATA.corePages.find((item) => item.kind === "home");
  const serviceGroups = [
    {
      title: "Clases particulares",
      href: "/clases-particulares/",
      text: "Matemáticas, Física, Estadística, Química, Economía y Programación con diagnóstico y seguimiento.",
      links: [
        "/clases-particulares/matematicas-universidad/",
        "/clases-particulares/fisica-ingenieria/",
        "/clases-particulares/estadistica-universidad/",
        "/clases-particulares/quimica/",
        "/clases-particulares/economia-ade/",
        "/clases-particulares/programacion-universidad/",
      ],
    },
    {
      title: "Preparación con fecha",
      href: "/preparacion-examenes/",
      text: "Selectividad, recuperaciones, exámenes universitarios, IB, GCSE, IGCSE y pruebas de acceso.",
      links: ["/clases-particulares/selectividad/", "/clases-particulares/gcse-ib/"],
    },
    {
      title: "Formación tecnológica",
      href: "/formacion-it/",
      text: "Python, SQL, datos, IA, proyectos y entrevistas técnicas como línea independiente.",
      links: ["/clases-particulares/programacion-universidad/"],
    },
  ];
  const serviceHtml = serviceGroups
    .map((group) => {
      const links = group.links
        .map((route) => findService(route))
        .filter(Boolean)
        .map((service) => `<li><a href="${service.path}">${escapeHtml(service.h1)}</a></li>`)
        .join("");
      return `
        <section class="border-t border-white/8 pt-6">
          ${styledHeading(escapeHtml(group.title), 2, "card")}
          <p class="mt-2 text-sm text-muted-foreground">${escapeHtml(group.text)}</p>
          <p class="mt-3"><a href="${group.href}">Ver ${escapeHtml(group.title.toLowerCase())}</a></p>
          <ul class="mt-4 grid gap-2 text-sm sm:grid-cols-2">${links}</ul>
        </section>
      `;
    })
    .join("");
  return {
    ...page,
    route: page.path,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        name: SITE_DATA.site.displayName,
        description: page.description,
        url: SITE_URL,
        logo: absoluteUrl(SITE_DATA.site.logo),
        sameAs: SITE_DATA.site.social,
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: SITE_DATA.site.displayName,
        url: SITE_URL,
      },
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: `${SITE_DATA.site.displayName} - Enseñanza privada`,
        description: page.description,
        url: SITE_URL,
      },
    ],
    body: shell({
      label: "Bienvenido a Nebula",
      h1: page.h1,
      intro: page.intro,
      children: `
        ${styledHeading("No vendemos horas. Diseñamos planes.", 2)}
        <div class="grid gap-5 md:grid-cols-3">
          <article class="rounded-2xl border border-white/8 p-5"><h3>Diagnóstico</h3><p>Revisión de nivel, temario, fecha y bloqueo principal.</p></article>
          <article class="rounded-2xl border border-white/8 p-5"><h3>Planificación</h3><p>Bloques de trabajo con prioridades y calendario.</p></article>
          <article class="rounded-2xl border border-white/8 p-5"><h3>Seguimiento</h3><p>Práctica, revisión de errores y ajustes semanales.</p></article>
        </div>
        ${styledHeading("Oferta organizada", 2)}
        <div class="space-y-6">${serviceHtml}</div>
        ${styledHeading("Siguiente paso", 2)}
        <p><a href="/contacto/">Solicitar diagnóstico</a> · <a href="/blog/">Leer guías académicas</a> · <a href="/metodologia/">Ver el método</a></p>
      `,
    }),
  };
}

function blogIndexPage(posts, pageNumber = 1) {
  const page = SITE_DATA.corePages.find((item) => item.kind === "blog");
  const pages = totalPages(posts);
  const route = blogPagePath(pageNumber);
  const categories =
    pageNumber === 1
      ? SITE_DATA.blogCategories.map((category) => blogCategoryCardHtml(category)).join("")
      : "";
  const featuredCards =
    pageNumber === 1
      ? FEATURED_POST_SLUGS.map((slug) => findPost(posts, slug))
          .filter(Boolean)
          .map((post) => blogCardHtml(post))
          .join("")
      : "";
  const guideCards =
    pageNumber === 1
      ? SITE_DATA.blogCategories
          .map((category) => findPost(posts, category.pillarPost))
          .filter(Boolean)
          .map((post) => blogCardHtml(post, 3))
          .join("")
      : "";
  const postCards = pageItems(posts, pageNumber)
    .map((post) => blogCardHtml(post))
    .join("");
  const title =
    pageNumber === 1
      ? page.title
      : `${page.h1}, página ${pageNumber} | ${SITE_DATA.site.displayName}`;
  const description =
    pageNumber === 1
      ? page.description
      : `Página ${pageNumber} del blog de Método Nebula: guías académicas, problemas resueltos y estrategias de estudio.`;
  return {
    ...page,
    title,
    description,
    route,
    priority: pageNumber === 1 ? page.priority : "0.5",
    prev: pageNumber > 1 ? blogPagePath(pageNumber - 1) : undefined,
    next: pageNumber < pages ? blogPagePath(pageNumber + 1) : undefined,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: page.h1,
        description,
        url: absoluteUrl(route),
      },
    ],
    body: shell({
      label: "Blog",
      h1: page.h1,
      intro:
        pageNumber === 1 ? page.intro : `Página ${pageNumber} de ${pages} del archivo del blog.`,
      theme: "blog",
      h1Class: "nebula-gradient-text",
      breadcrumbs: [{ label: "Blog", href: page.path }],
      children: `
        ${
          pageNumber === 1
            ? `${styledHeading("Contenidos destacados", 2, "content", "blog")}
        <div class="mt-6 grid gap-5 lg:grid-cols-3">${featuredCards}</div>
        ${styledHeading("Guías principales", 2, "content", "blog")}
        <div class="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">${guideCards}</div>
        ${styledHeading("Categorías", 2, "content", "blog")}
        <div class="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">${categories}</div>`
            : ""
        }
        ${styledHeading(pageNumber === 1 ? "Artículos recientes" : `Archivo, página ${pageNumber}`, 2, "content", "blog")}
        <div class="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">${postCards}</div>
        ${paginationHtml(pageNumber, pages, blogPagePath)}
      `,
    }),
  };
}

function blogCategoryPage(category, posts, pageNumber = 1) {
  const categoryPosts = posts.filter((post) => post.category === category.name);
  const pages = totalPages(categoryPosts);
  const route = blogCategoryPagePath(category.slug, pageNumber);
  const pillarPost = findPost(posts, category.pillarPost);
  const relatedService = findService(category.relatedService);
  const clusterIntro =
    pageNumber === 1
      ? `
        <div class="mb-12 grid gap-5 lg:grid-cols-[1fr_0.8fr]">
          ${
            pillarPost
              ? `<section>${styledHeading("Guía principal", 2, "content", "blog")}<div class="mt-5">${blogCardHtml(pillarPost)}</div></section>`
              : ""
          }
          ${
            relatedService
              ? `<aside class="rounded-3xl border border-white/8 bg-white/[0.02] p-7">${styledHeading("Apoyo relacionado", 2, "card", "blog")}<p class="mt-3 text-sm leading-relaxed text-muted-foreground">Si esta categoría conecta con una asignatura o examen real, la página de servicio explica el acompañamiento, los contenidos y el siguiente paso.</p><a class="mt-6 inline-flex text-sm font-medium text-link underline-offset-4 hover:underline" href="${relatedService.path}">${escapeHtml(relatedService.h1)}</a></aside>`
              : ""
          }
        </div>
      `
      : "";
  const postCards = pageItems(categoryPosts, pageNumber)
    .map((post) => blogCardHtml(post))
    .join("");
  const title =
    pageNumber === 1
      ? `${category.name}: artículos y guías | ${SITE_DATA.site.displayName}`
      : `${category.name}: artículos y guías, página ${pageNumber} | ${SITE_DATA.site.displayName}`;
  const description =
    pageNumber === 1
      ? `${category.description} Artículos prácticos de Método Nebula para estudiar con más estructura.`
      : `Página ${pageNumber} de la categoría ${category.name}: artículos prácticos de Método Nebula para estudiar con más estructura.`;
  return {
    title,
    description,
    route,
    priority: pageNumber === 1 ? "0.6" : "0.5",
    prev: pageNumber > 1 ? blogCategoryPagePath(category.slug, pageNumber - 1) : undefined,
    next: pageNumber < pages ? blogCategoryPagePath(category.slug, pageNumber + 1) : undefined,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: title,
        description,
        url: absoluteUrl(route),
        isPartOf: {
          "@type": "Blog",
          name: SITE_DATA.corePages.find((item) => item.kind === "blog").h1,
        },
      },
      breadcrumbJsonLd([
        ["Inicio", "/"],
        ["Blog", "/blog/"],
        [category.name, route],
      ]),
    ],
    body: shell({
      label: "Categoría",
      h1: category.name,
      intro:
        pageNumber === 1
          ? category.description
          : `Página ${pageNumber} de ${pages} de esta categoría.`,
      theme: "blog",
      breadcrumbs: [
        { label: "Blog", href: "/blog/" },
        { label: category.name, href: route },
      ],
      children: categoryPosts.length
        ? `${clusterIntro}${styledHeading(`Artículos de ${escapeHtml(category.name)}`, 2, "content", "blog")}<div class="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">${postCards}</div>${paginationHtml(pageNumber, pages, (page) => blogCategoryPagePath(category.slug, page), `Paginación de ${category.name}`)}`
        : `<p>Todavía no hay entradas en esta categoría.</p>`,
    }),
  };
}

function postPage(post, posts) {
  const route = `/blog/${post.slug}/`;
  const relatedService = findService(post.relatedService);
  const category = SITE_DATA.blogCategories.find((item) => item.name === post.category);
  const related = [
    ...post.relatedPosts,
    ...posts.filter((candidate) => candidate.slug !== post.slug).map((candidate) => candidate.slug),
  ]
    .filter((slug, index, arr) => arr.indexOf(slug) === index)
    .slice(0, 3)
    .map((slug) => posts.find((candidate) => candidate.slug === slug))
    .filter(Boolean);
  const relatedHtml = related.map((item) => blogCardHtml(item, 3)).join("");
  const blogPosting = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "EducationalOrganization",
      name: SITE_DATA.site.displayName,
      url: absoluteUrl("/"),
    },
    datePublished: post.date,
    dateModified: post.updated,
    mainEntityOfPage: absoluteUrl(route),
    publisher: {
      "@type": "EducationalOrganization",
      name: SITE_DATA.site.displayName,
      logo: { "@type": "ImageObject", url: absoluteUrl(SITE_DATA.site.logo) },
    },
    image: absoluteUrl(
      post.image && post.image !== SITE_DATA.site.logo ? post.image : SITE_DATA.site.socialImage,
    ),
  };
  return {
    title: `${post.title} | ${SITE_DATA.site.displayName}`,
    description: post.description,
    route,
    type: "article",
    image: post.image,
    lastmod: post.updated || post.date,
    jsonLd: [
      blogPosting,
      breadcrumbJsonLd([
        ["Inicio", "/"],
        ["Blog", "/blog/"],
        [post.title, route],
      ]),
    ],
    body: shell({
      label: post.category,
      h1: post.title,
      intro: post.description,
      theme: "blog",
      breadcrumbs: [
        { label: "Blog", href: "/blog/" },
        { label: post.title, href: route },
      ],
      children: `
        ${blogMetaHtml(post, false)}
        ${tocHtml(post)}
        <article>${markdownToHtml(post.body)}</article>
        <aside aria-label="Autor del artículo" class="mt-12 rounded-3xl border border-white/10 bg-white/[0.02] p-6">
          <p class="text-xs font-medium uppercase tracking-[0.18em] text-spark">Autoría</p>
          <h2 class="mt-2 font-display text-xl font-semibold">Método Nebula</h2>
          <p class="mt-2 text-sm text-muted-foreground">Contenido revisado por el responsable docente de Método Nebula, graduado en Matemáticas, con formación de máster en Big Data e Inteligencia Artificial y experiencia docente y tecnológica.</p>
          <p class="mt-4"><a href="/sobre-nebula/">Conocer el método y el perfil docente</a>${SITE_DATA.site.author.profileUrl ? ` · <a href="${escapeHtml(SITE_DATA.site.author.profileUrl)}">Ver perfil profesional</a>` : ""}</p>
        </aside>
        <section class="mt-14 rounded-3xl border border-white/10 bg-white/[0.02] p-8 text-center">
          <h2 class="font-display text-2xl font-semibold text-foreground">¿Quieres aplicar esto a tu asignatura o examen?</h2>
          <p class="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">Empezamos con una llamada de diagnóstico para entender tu objetivo, tu punto de partida y tu fecha. El servicio relacionado ayuda a aterrizarlo en un plan concreto.</p>
          <p class="mt-6 flex flex-col justify-center gap-3 sm:flex-row"><a class="inline-flex items-center justify-center gap-2 rounded-full bg-action px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-action/90" href="/contacto/">Solicitar diagnóstico</a>${
            relatedService
              ? `<a class="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-link transition-colors hover:border-white/30 hover:bg-white/[0.05]" href="${relatedService.path}">Ver apoyo relacionado</a>`
              : ""
          }</p>
        </section>
        ${
          category
            ? `<section class="mt-12 border-t border-white/5 pt-8 text-sm text-muted-foreground">Este artículo forma parte del clúster de <a href="${blogCategoryPath(category.slug)}">${escapeHtml(category.name)}</a>.${
                relatedService
                  ? ` Servicio relacionado: <a href="${relatedService.path}">${escapeHtml(relatedService.h1)}</a>.`
                  : ""
              }</section>`
            : ""
        }
        ${relatedHtml ? `${styledHeading("Lecturas relacionadas", 2, "content", "blog")}<div class="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">${relatedHtml}</div>` : ""}
      `,
    }),
  };
}

function serviceOverviewPage() {
  const page = SITE_DATA.serviceOverview;
  const groups = [
    [
      "Clases particulares",
      [
        "/clases-particulares/matematicas-universidad/",
        "/clases-particulares/fisica-ingenieria/",
        "/clases-particulares/estadistica-universidad/",
        "/clases-particulares/quimica/",
        "/clases-particulares/economia-ade/",
      ],
    ],
    [
      "Preparación con fecha",
      ["/clases-particulares/selectividad/", "/clases-particulares/gcse-ib/"],
    ],
    ["Formación tecnológica", ["/clases-particulares/programacion-universidad/"]],
  ];
  const links = groups
    .map(([title, routes]) => {
      const serviceLinks = routes
        .map((route) => findService(route))
        .filter(Boolean)
        .map(
          (service) =>
            `<li><a href="${service.path}">${escapeHtml(service.h1)}</a>: ${escapeHtml(service.description)}</li>`,
        )
        .join("");
      return `${styledHeading(escapeHtml(title), 2)}<ul>${serviceLinks}</ul>`;
    })
    .join("");
  return {
    ...page,
    route: page.path,
    jsonLd: [serviceJsonLd(page)],
    body: shell({
      label: "Clases desde ESO",
      h1: page.h1,
      intro: page.intro,
      breadcrumbs: [{ label: "Clases desde ESO", href: page.path }],
      children: `<h2>Un mapa para cada objetivo</h2><p>La oferta se separa para que un alumno de asignatura, una preparación con fecha y una ruta tecnológica no compitan por la misma atención.</p>${links}<p><a href="/contacto/">Solicitar diagnóstico</a></p>`,
    }),
  };
}

function commercialHubPage(page, posts) {
  const entryForPath = (route) => {
    const service = findService(route);
    if (service) return { title: service.h1, description: service.description };
    const hub = findHub(route);
    if (hub) return { title: hub.h1, description: hub.description };
    const core = [...SITE_DATA.corePages, SITE_DATA.serviceOverview].find(
      (candidate) => candidate.path === route,
    );
    if (core) return { title: core.h1, description: core.description };
    const post = posts.find((candidate) => `/blog/${candidate.slug}/` === route);
    return post ? { title: post.title, description: post.description } : undefined;
  };
  const sections = page.sections
    .map((section) => {
      const links = section.paths
        .map((route) => [route, entryForPath(route)])
        .filter(([, entry]) => Boolean(entry))
        .map(
          ([route, entry]) =>
            `<li><a href="${route}">${escapeHtml(entry.title)}</a><span class="mt-1 block text-xs text-muted-foreground">${escapeHtml(entry.description)}</span></li>`,
        )
        .join("");
      return `<section class="rounded-3xl border border-white/8 bg-white/[0.02] p-7"><h2>${escapeHtml(section.title)}</h2><p>${escapeHtml(section.description)}</p><ul class="mt-5 space-y-4">${links}</ul></section>`;
    })
    .join("");
  const faq = page.faq
    .map(
      (item) =>
        `<details class="border-t border-white/8 p-5"><summary class="cursor-pointer font-semibold">${escapeHtml(item.q)}</summary><p>${escapeHtml(item.a)}</p></details>`,
    )
    .join("");
  return {
    ...page,
    route: page.path,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: page.h1,
        description: page.description,
        url: absoluteUrl(page.path),
      },
      faqJsonLd(page.faq),
      breadcrumbJsonLd([
        ["Inicio", "/"],
        [page.h1, page.path],
      ]),
    ],
    body: shell({
      label: page.label,
      h1: page.h1,
      intro: page.intro,
      breadcrumbs: [{ label: page.label, href: page.path }],
      children: `<div class="grid gap-6 lg:grid-cols-3">${sections}</div><h2>Preguntas frecuentes</h2><div class="rounded-2xl border border-white/8">${faq}</div><p class="mt-8"><a href="/contacto/">Solicitar diagnóstico inicial</a></p>`,
    }),
  };
}

function servicePage(page, posts) {
  const related = page.relatedPosts
    .map((slug) => posts.find((post) => post.slug === slug))
    .filter(Boolean)
    .map((post) => `<li><a href="/blog/${post.slug}/">${escapeHtml(post.title)}</a></li>`)
    .join("");
  return {
    ...page,
    route: page.path,
    jsonLd: [
      serviceJsonLd(page),
      faqJsonLd(page.faq),
      breadcrumbJsonLd([
        ["Inicio", "/"],
        [page.parentLabel ?? "Clases particulares", page.parentPath ?? "/clases-particulares/"],
        [page.h1, page.path],
      ]),
    ],
    body: shell({
      label: "Servicio",
      h1: page.h1,
      intro: page.audience,
      breadcrumbs: [
        {
          label: page.parentLabel ?? "Clases particulares",
          href: page.parentPath ?? "/clases-particulares/",
        },
        { label: page.h1, href: page.path },
      ],
      children: `
        <h2>Problemas habituales</h2>${cardList(page.problems)}
        <h2>Bloques que podemos trabajar</h2>${cardList(page.topics)}
        <h2>Cómo funciona el método</h2>${cardList(page.method, true)}
        ${page.modality ? `<h2>Modalidad online</h2><p>${escapeHtml(page.modality)}</p>` : ""}
        ${page.sessionStructure ? `<h2>Cómo se organiza una sesión</h2>${cardList(page.sessionStructure, true)}` : ""}
        <h2>Qué diferencia este acompañamiento</h2><p>${escapeHtml(page.differentiator)}</p>
        <h2>Qué debe aportar el alumno</h2><p>${escapeHtml(page.studentInput)}</p>
        <h2>Resultados razonables</h2><p>${escapeHtml(page.reasonableOutcomes)}</p>
        <h2>Perfil docente</h2><p>${escapeHtml(page.profile)}</p>
        <h2>Preguntas frecuentes</h2>${page.faq
          .map(
            (item) =>
              `<details class="border-t border-white/8 p-5"><summary class="cursor-pointer font-semibold">${escapeHtml(item.q)}</summary><p>${escapeHtml(item.a)}</p></details>`,
          )
          .join("")}
        <h2>Lecturas relacionadas</h2><ul>${related}</ul>
        ${
          page.relatedServices?.length
            ? `<h2>Servicios relacionados</h2><ul>${page.relatedServices
                .map((route) => findService(route))
                .filter(Boolean)
                .map(
                  (service) => `<li><a href="${service.path}">${escapeHtml(service.h1)}</a></li>`,
                )
                .join("")}</ul>`
            : ""
        }
        <h2>Siguiente paso</h2><p>${escapeHtml(page.nextStep)}</p>
        <p><a href="/contacto/">Solicitar diagnóstico</a></p>
      `,
    }),
  };
}

function htmlSitemapPage(posts) {
  const mainLinks = [
    ["/", "Inicio"],
    ...SITE_DATA.commercialHubs.map((hub) => [hub.path, hub.label]),
    [SITE_DATA.serviceOverview.path, "Preparación universitaria"],
    ["/metodologia/", "Metodología"],
    ["/sobre-nebula/", "Sobre Nebula"],
    ["/contacto/", "Contacto"],
  ]
    .map(([href, label]) => `<li><a href="${href}">${escapeHtml(label)}</a></li>`)
    .join("");
  const serviceLinks = SITE_DATA.servicePages
    .map((service) => `<li><a href="${service.path}">${escapeHtml(service.h1)}</a></li>`)
    .join("");
  const categoryLinks = SITE_DATA.blogCategories
    .map(
      (category) =>
        `<li><a href="${blogCategoryPath(category.slug)}">${escapeHtml(category.name)}</a></li>`,
    )
    .join("");
  const articleGroups = SITE_DATA.blogCategories
    .map((category) => {
      const links = posts
        .filter((post) => post.category === category.name)
        .map((post) => `<li><a href="/blog/${post.slug}/">${escapeHtml(post.title)}</a></li>`)
        .join("");
      return `<section class="border-t border-white/8 pt-5"><h3 class="font-display text-lg font-semibold text-violet-soft">${escapeHtml(category.name)}</h3><ul class="mt-3 space-y-2 text-sm">${links}</ul></section>`;
    })
    .join("");

  return {
    title: `Mapa del sitio | ${SITE_DATA.site.displayName}`,
    description:
      "Mapa HTML de Método Nebula con enlaces a servicios, categorías del blog y artículos publicados.",
    route: "/mapa-del-sitio/",
    priority: "0.5",
    body: shell({
      label: "Índice",
      h1: "Mapa del sitio",
      intro:
        "Todas las páginas principales de Método Nebula organizadas para encontrar servicios, categorías y artículos.",
      breadcrumbs: [{ label: "Mapa del sitio", href: "/mapa-del-sitio/" }],
      children: `
        <div class="grid gap-8 lg:grid-cols-3">
          <section class="rounded-3xl border border-white/8 bg-white/[0.02] p-6">
            ${styledHeading("Páginas principales", 2, "card")}
            <ul class="mt-5 space-y-3 text-sm">${mainLinks}</ul>
          </section>
          <section class="rounded-3xl border border-white/8 bg-white/[0.02] p-6">
            ${styledHeading("Servicios", 2, "card")}
            <ul class="mt-5 space-y-3 text-sm">${serviceLinks}</ul>
          </section>
          <section class="rounded-3xl border border-white/8 bg-white/[0.02] p-6">
            ${styledHeading("Categorías", 2, "card")}
            <ul class="mt-5 space-y-3 text-sm"><li><a href="/blog/">Blog</a></li>${categoryLinks}</ul>
          </section>
        </div>
        <section class="mt-8 rounded-3xl border border-white/8 bg-white/[0.02] p-6">
          ${styledHeading("Artículos por categoría", 2, "card")}
          <div class="mt-6 grid gap-6 lg:grid-cols-2">${articleGroups}</div>
        </section>
      `,
    }),
  };
}

function corePage(kind) {
  const page = SITE_DATA.corePages.find((item) => item.kind === kind);
  const sectionMap = {
    about: [
      [
        "Quién soy",
        "Método Nebula es un proyecto de mentoría académica y profesional. El trabajo está en la intersección entre la matemática, la ciencia, la programación y la forma en que una persona aprende cuando tiene una fecha, un examen o una decisión importante delante.",
      ],
      [
        "Cómo entiendo la enseñanza",
        "Enseñar no es resolver por el alumno. Es ayudarle a ver el mapa: qué pregunta plantea el problema, qué herramientas sirven, por qué aparece cada paso y cómo comprobar si el resultado tiene sentido.",
      ],
      [
        "Formación y experiencia",
        "Graduado en Matemáticas, máster en Big Data e Inteligencia Artificial, experiencia profesional en tecnología y más de 6 años dando clases a alumnos desde ESO y Bachillerato hasta Universidad, exámenes internacionales y perfiles técnicos.",
      ],
    ],
    method: [
      ["Diagnóstico", "Revisión de nivel, objetivo, fecha, temario y tipo de examen."],
      ["Plan", "Bloques semanales con prioridad, práctica y evidencia de progreso."],
      ["Clase y material", "Explicación, práctica guiada y material conectado con el objetivo."],
      [
        "Seguimiento",
        "Ajustes cuando aparecen errores repetidos, retrasos o cambios de calendario.",
      ],
    ],
    contact: [
      ["WhatsApp", SITE_DATA.site.contact.whatsapp],
      ["Correo electrónico", SITE_DATA.site.contact.email],
      [
        "Primer diagnóstico",
        "Revisamos objetivo, punto de partida y calendario antes de proponer un plan de trabajo.",
      ],
    ],
  };
  const sections = sectionMap[kind]
    .map(([title, text], index) => coreSectionHtml(title, text, index))
    .join("");
  const jsonLd =
    kind === "about"
      ? [
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: page.h1,
            description: page.description,
            about: {
              "@type": "EducationalOrganization",
              name: SITE_DATA.site.displayName,
              knowsAbout: SITE_DATA.site.author.knowsAbout,
            },
            url: absoluteUrl(page.path),
          },
        ]
      : [];
  return {
    ...page,
    route: page.path,
    jsonLd,
    body: shell({
      label: page.kind,
      h1: page.h1,
      intro: page.intro,
      breadcrumbs: [{ label: page.h1, href: page.path }],
      children: `<div class="grid gap-5 md:grid-cols-2">${sections}</div>`,
    }),
  };
}

function notFoundPage() {
  return {
    title: "Página no encontrada | Método Nebula",
    description:
      "La página solicitada no existe. Vuelve al inicio, consulta el blog o contacta con Método Nebula.",
    route: "/404/",
    robots: "noindex,follow",
    body: shell({
      label: "404",
      h1: "Página no encontrada",
      intro:
        "El enlace puede haber cambiado. Puedes volver al inicio o elegir una de las áreas principales de Método Nebula.",
      children: `
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/clases-particulares/">Clases particulares</a></li>
          <li><a href="/preparacion-examenes/">Preparación de exámenes</a></li>
          <li><a href="/formacion-it/">Formación IT</a></li>
          <li><a href="/blog/">Blog</a></li>
          <li><a href="/contacto/">Contacto</a></li>
        </ul>
      `,
    }),
  };
}

function serviceJsonLd(page) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.h1,
    description: page.description,
    provider: { "@type": "EducationalOrganization", name: SITE_DATA.site.displayName },
    areaServed: "España",
    url: absoluteUrl(page.path),
  };
}

function faqJsonLd(faq) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(([name, route], index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item: absoluteUrl(route),
    })),
  };
}

function writeSitemap(pages) {
  const urls = pages
    .filter((page) => page.robots !== "noindex,follow")
    .map((page) => {
      const lastmod = page.lastmod ? `\n    <lastmod>${page.lastmod}</lastmod>` : "";
      const priority = page.priority ? `\n    <priority>${page.priority}</priority>` : "";
      return `  <url>\n    <loc>${absoluteUrl(page.route)}</loc>${lastmod}${priority}\n  </url>`;
    })
    .join("\n");
  fs.writeFileSync(
    path.join(DIST, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
  );
}

function writeRobots() {
  fs.writeFileSync(
    path.join(DIST, "robots.txt"),
    `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
  );
}

function writeRss(posts) {
  const items = posts
    .map(
      (post) => `
    <item>
      <title>${escapeHtml(post.title)}</title>
      <link>${absoluteUrl(`/blog/${post.slug}/`)}</link>
      <guid>${absoluteUrl(`/blog/${post.slug}/`)}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${escapeHtml(post.description)}</description>
    </item>`,
    )
    .join("");
  fs.writeFileSync(
    path.join(DIST, "rss.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0"><channel><title>Blog de Método Nebula</title><link>${SITE_URL}/blog/</link><description>Guías académicas y de carrera de Método Nebula.</description>${items}\n</channel></rss>\n`,
  );
}

function copyStaticFiles() {
  fs.writeFileSync(path.join(DIST, "CNAME"), "metodonebula.es\n");
  fs.writeFileSync(path.join(DIST, ".nojekyll"), "");
  fs.writeFileSync(path.join(DIST, "_redirects"), "/* /index.html 200\n");
}

const templatePath = path.join(DIST, "index.html");
if (!fs.existsSync(templatePath)) {
  throw new Error("Run vite build before generate-static-site.");
}
const template = fs.readFileSync(templatePath, "utf8");
const posts = loadPosts();
const blogPages = pageNumbers(totalPages(posts)).map((page) => blogIndexPage(posts, page));
const categoryPages = SITE_DATA.blogCategories.flatMap((category) => {
  const categoryPosts = posts.filter((post) => post.category === category.name);
  return pageNumbers(totalPages(categoryPosts)).map((page) =>
    blogCategoryPage(category, posts, page),
  );
});
const pages = [
  homePage(),
  ...blogPages,
  ...categoryPages,
  ...posts.map((post) => postPage(post, posts)),
  ...SITE_DATA.commercialHubs.map((page) => commercialHubPage(page, posts)),
  serviceOverviewPage(),
  ...SITE_DATA.servicePages.map((page) => servicePage(page, posts)),
  htmlSitemapPage(posts),
  corePage("about"),
  corePage("method"),
  corePage("contact"),
  notFoundPage(),
];

for (const page of pages) {
  renderPage(template, page);
}
writeSitemap(pages);
writeRobots();
writeRss(posts);
copyStaticFiles();

console.log(
  `Generated ${pages.length} static pages, sitemap.xml, rss.xml, robots.txt and 404.html.`,
);
