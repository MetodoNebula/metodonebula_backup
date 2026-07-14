import fs from "node:fs";
import path from "node:path";
import katex from "katex";

const ROOT = process.cwd();
const DIST = path.join(ROOT, "dist");
const SITE_DATA = JSON.parse(fs.readFileSync(path.join(ROOT, "src/content/site.json"), "utf8"));
const SITE_URL = SITE_DATA.site.url;

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

function withTrailingSlash(route) {
  if (route === "/") return "/";
  return `${route.replace(/\/+$/, "")}/`;
}

function absoluteUrl(route) {
  if (/^https?:\/\//.test(route)) return route;
  return `${SITE_URL}${withTrailingSlash(route) === "/" ? "/" : withTrailingSlash(route)}`;
}

function blogCategoryPath(slug) {
  return `/blog/categoria/${slug}/`;
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
  return `<div class="nebula-math my-7 overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-5 text-center">${renderKatex(tex, true)}</div>`;
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
        `<a class="font-medium text-gold underline underline-offset-4 transition-colors hover:text-foreground" href="${escapeHtml(parts[2])}">${escapeHtml(parts[1])}</a>`,
      );
    } else if (token.startsWith("`")) {
      out.push(
        `<code class="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[0.85em] text-gold">${escapeHtml(token.slice(1, -1))}</code>`,
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
          `<li class="flex items-start gap-3 text-foreground/85"><span class="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"></span><span>${inlineMarkdown(lines[i].replace(/^\s*[-*]\s+/, ""))}</span></li>`,
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
          `<li class="flex items-start gap-3 text-foreground/85"><span class="font-display text-sm font-semibold text-gold">${items.length + 1}.</span><span>${inlineMarkdown(lines[i].replace(/^\s*\d+\.\s+/, ""))}</span></li>`,
        );
        i++;
      }
      out.push(`<ol class="my-5 space-y-2">${items.join("")}</ol>`);
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
        `<blockquote class="my-6 border-l-2 border-gold/70 bg-white/[0.02] py-2 pr-4 pl-5 text-foreground/80 italic">${inlineMarkdown(quote.join(" "))}</blockquote>`,
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
  image = "/favicon.svg",
  robots = "index,follow",
  jsonLd = [],
}) {
  const url = absoluteUrl(route);
  const imageUrl = absoluteUrl(image);
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
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${escapeHtml(title)}">`,
    `<meta name="twitter:description" content="${escapeHtml(description)}">`,
    `<meta name="twitter:image" content="${escapeHtml(imageUrl)}">`,
    ...jsonLd.map(
      (item) =>
        `<script type="application/ld+json">${JSON.stringify(item).replace(/</g, "\\u003c")}</script>`,
    ),
  ].join("\n    ");
}

function cleanHead(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>\s*/i, "")
    .replace(/<meta\s+name=["']description["'][^>]*>\s*/gi, "")
    .replace(/<meta\s+name=["']author["'][^>]*>\s*/gi, "")
    .replace(/<meta\s+name=["']robots["'][^>]*>\s*/gi, "")
    .replace(/<link\s+rel=["']canonical["'][^>]*>\s*/gi, "")
    .replace(/<meta\s+property=["']og:[^"']+["'][^>]*>\s*/gi, "")
    .replace(/<meta\s+name=["']twitter:[^"']+["'][^>]*>\s*/gi, "")
    .replace(/<script\s+type=["']application\/ld\+json["'][\s\S]*?<\/script>\s*/gi, "");
}

function renderPage(template, page) {
  const html = cleanHead(template).replace("</head>", `    ${headMarkup(page)}\n  </head>`);
  const withRoot = html.replace(/<div id="root"><\/div>/, `<div id="root">${page.body}</div>`);
  const outFile =
    page.route === "/404/" ? path.join(DIST, "404.html") : outputFileForRoute(page.route);
  ensureDir(outFile);
  fs.writeFileSync(outFile, withRoot);
}

function shell({ label, h1, intro, children, breadcrumbs = [], theme = "nebula" }) {
  const isBlog = theme === "blog";
  const titleLineClass = isBlog ? "blog-title-line" : "nebula-title-line";
  const labelClass = isBlog
    ? "border-gold/35 bg-gold/10 text-gold"
    : "border-violet/30 bg-violet/10 text-violet";
  const h1Class = isBlog ? "text-foreground" : "nebula-gradient-text";
  const crumbs = [
    `<a href="/">Inicio</a>`,
    ...breadcrumbs.map((item, index) =>
      index === breadcrumbs.length - 1
        ? `<span>${escapeHtml(item.label)}</span>`
        : `<a href="${item.href}">${escapeHtml(item.label)}</a>`,
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
          <h1 class="mt-5 max-w-4xl font-display text-4xl font-bold ${h1Class}">${escapeHtml(h1)}</h1>
          <p class="mt-5 max-w-2xl text-lg text-muted-foreground">${escapeHtml(intro)}</p>
        </div>
      </section>
      <section class="px-6 py-14">
        <div class="mx-auto max-w-7xl">${children}</div>
      </section>
    </main>
  `;
}

function styledHeading(title, level = 2, variant = "content", theme = "nebula") {
  const tag = `h${level}`;
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
        ? `${spacing}border-l-2 border-gold pl-4 font-display font-semibold text-foreground`
        : level === 3
          ? `${spacing}font-display font-semibold text-gold`
          : `${spacing}font-display font-semibold text-muted-foreground`
      : level <= 2
        ? `${spacing}border-l-2 border-violet pl-4 font-display font-semibold nebula-heading-text`
        : level === 3
          ? `${spacing}font-display font-semibold nebula-subheading-text`
          : `${spacing}font-display font-semibold text-muted-foreground`;
  return `<${tag} class="${className}">${title}</${tag}>`;
}

function coreSectionHtml(title, text, index) {
  const cleanTitle = title.replace(/^\d+\.\s*/, "");
  return `
    <article class="nebula-card relative overflow-hidden rounded-3xl p-7">
      <span class="absolute inset-x-0 top-0 h-1 nebula-title-line"></span>
      <span class="font-display text-sm font-semibold text-violet">${String(index + 1).padStart(2, "0")}</span>
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
    ? `<span class="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 font-medium uppercase tracking-[0.18em] text-gold">${escapeHtml(post.category)}</span>`
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
  const headingClass = headingLevel === 2 ? "text-foreground text-xl" : "text-foreground text-lg";
  return `
    <a href="/blog/${post.slug}/" class="nebula-card group flex h-full flex-col rounded-3xl p-7 transition-transform hover:-translate-y-1">
      ${blogMetaHtml(post)}
      <${tag} class="mt-5 font-display font-semibold leading-snug ${headingClass} transition-colors group-hover:text-gold">${escapeHtml(post.title)}</${tag}>
      <p class="mt-3 grow text-sm leading-relaxed text-muted-foreground">${escapeHtml(post.description)}</p>
      <span class="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold">Leer entrada</span>
    </a>
  `;
}

function blogCategoryCardHtml(category) {
  return `
    <a href="${blogCategoryPath(category.slug)}" class="rounded-2xl border border-white/8 bg-white/[0.02] p-4 transition-colors hover:border-gold/35 hover:bg-gold/5">
      <span class="text-sm font-semibold text-gold">${escapeHtml(category.name)}</span>
      <span class="mt-1 block text-xs text-muted-foreground">${escapeHtml(category.description)}</span>
    </a>
  `;
}

function homePage() {
  const page = SITE_DATA.corePages.find((item) => item.kind === "home");
  const serviceLinks = SITE_DATA.servicePages
    .map((item) => `<li><a href="${item.path}">${escapeHtml(item.h1)}</a></li>`)
    .join("");
  return {
    ...page,
    route: page.path,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        name: SITE_DATA.site.displayName,
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
    ],
    body: shell({
      label: "Método Nebula",
      h1: page.h1,
      intro: page.intro,
      children: `
        <h2>Servicios principales</h2>
        <ul>${serviceLinks}</ul>
        <p><a href="/blog/">Leer el blog</a> · <a href="/contacto/">Reservar diagnóstico</a></p>
      `,
    }),
  };
}

function blogIndexPage(posts) {
  const page = SITE_DATA.corePages.find((item) => item.kind === "blog");
  const categories = SITE_DATA.blogCategories
    .map((category) => blogCategoryCardHtml(category))
    .join("");
  const postCards = posts.map((post) => blogCardHtml(post)).join("");
  return {
    ...page,
    route: page.path,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: page.h1,
        description: page.description,
        url: absoluteUrl(page.path),
      },
    ],
    body: shell({
      label: "Blog",
      h1: page.h1,
      intro: page.intro,
      theme: "blog",
      breadcrumbs: [{ label: "Blog", href: page.path }],
      children: `
        ${styledHeading("Categorías", 2, "content", "blog")}
        <div class="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">${categories}</div>
        ${styledHeading("Artículos recientes", 2, "content", "blog")}
        <div class="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">${postCards}</div>
      `,
    }),
  };
}

function blogCategoryPage(category, posts) {
  const route = blogCategoryPath(category.slug);
  const categoryPosts = posts.filter((post) => post.category === category.name);
  const postCards = categoryPosts.map((post) => blogCardHtml(post)).join("");
  const title = `${category.name}: artículos y guías | ${SITE_DATA.site.displayName}`;
  const description = `${category.description} Artículos prácticos de Método Nebula para estudiar con más estructura.`;
  return {
    title,
    description,
    route,
    priority: "0.6",
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
      intro: category.description,
      theme: "blog",
      breadcrumbs: [
        { label: "Blog", href: "/blog/" },
        { label: category.name, href: route },
      ],
      children: categoryPosts.length
        ? `${styledHeading(`Artículos de ${escapeHtml(category.name)}`, 2, "content", "blog")}<div class="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">${postCards}</div>`
        : `<p>Todavía no hay entradas en esta categoría.</p>`,
    }),
  };
}

function postPage(post, posts) {
  const route = `/blog/${post.slug}/`;
  const related = [
    ...post.relatedPosts,
    ...posts.filter((candidate) => candidate.slug !== post.slug).map((candidate) => candidate.slug),
  ]
    .filter((slug, index, arr) => arr.indexOf(slug) === index)
    .slice(0, 3)
    .map((slug) => posts.find((candidate) => candidate.slug === slug))
    .filter(Boolean);
  const relatedHtml = related.map((item) => blogCardHtml(item, 3)).join("");
  return {
    title: `${post.title} | ${SITE_DATA.site.displayName}`,
    description: post.description,
    route,
    type: "article",
    image: post.image,
    lastmod: post.updated || post.date,
    jsonLd: [
      {
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
        image: absoluteUrl(post.image),
        publisher: {
          "@type": "EducationalOrganization",
          name: SITE_DATA.site.displayName,
          logo: { "@type": "ImageObject", url: absoluteUrl(SITE_DATA.site.logo) },
        },
      },
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
        <article>${markdownToHtml(post.body)}</article>
        <section class="mt-14 rounded-3xl border border-white/10 bg-white/[0.02] p-8 text-center">
          <h2 class="font-display text-2xl font-semibold text-foreground">¿Quieres aplicar esto a tu caso?</h2>
          <p class="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">Empezamos con una llamada de diagnóstico para entender tu objetivo, tu punto de partida y tu fecha. Sin compromiso.</p>
          <p class="mt-6"><a class="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground" href="${post.relatedService}">Ver apoyo relacionado</a></p>
        </section>
        ${relatedHtml ? `${styledHeading("Lecturas relacionadas", 2, "content", "blog")}<div class="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">${relatedHtml}</div>` : ""}
      `,
    }),
  };
}

function serviceOverviewPage() {
  const page = SITE_DATA.serviceOverview;
  const links = SITE_DATA.servicePages
    .map(
      (service) =>
        `<li><a href="${service.path}">${escapeHtml(service.h1)}</a>: ${escapeHtml(service.description)}</li>`,
    )
    .join("");
  return {
    ...page,
    route: page.path,
    jsonLd: [serviceJsonLd(page)],
    body: shell({
      label: "Clases universitarias",
      h1: page.h1,
      intro: page.intro,
      breadcrumbs: [{ label: "Clases universitarias", href: page.path }],
      children: `<h2>Materias</h2><ul>${links}</ul><p><a href="/contacto/">Solicitar diagnóstico</a></p>`,
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
      breadcrumbJsonLd([
        ["Inicio", "/"],
        ["Clases universitarias", SITE_DATA.serviceOverview.path],
        [page.h1, page.path],
      ]),
    ],
    body: shell({
      label: "Servicio",
      h1: page.h1,
      intro: page.audience,
      breadcrumbs: [
        { label: "Clases universitarias", href: SITE_DATA.serviceOverview.path },
        { label: page.h1, href: page.path },
      ],
      children: `
        <h2>Problemas habituales</h2>${cardList(page.problems)}
        <h2>Bloques que podemos trabajar</h2>${cardList(page.topics)}
        <h2>Cómo funciona el método</h2>${cardList(page.method, true)}
        <h2>Perfil docente</h2><p>${escapeHtml(page.profile)}</p>
        <h2>Preguntas frecuentes</h2>${page.faq
          .map((item) => `<h3>${escapeHtml(item.q)}</h3><p>${escapeHtml(item.a)}</p>`)
          .join("")}
        <h2>Lecturas relacionadas</h2><ul>${related}</ul>
        <p><a href="/contacto/">Solicitar diagnóstico</a></p>
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
        "Graduado en Matemáticas, máster en Big Data e Inteligencia Artificial, experiencia profesional en tecnología y más de 6 años dando clases a estudiantes universitarios, bachillerato, exámenes internacionales y perfiles técnicos.",
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
      ["WhatsApp", "Canal directo para explicar tu asignatura, examen o cambio profesional."],
      ["Email", "Una vía cómoda para enviar temario, fechas y contexto antes del diagnóstico."],
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
      intro: "El enlace puede haber cambiado. Estas rutas siguen disponibles.",
      children: `
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/blog/">Blog</a></li>
          <li><a href="/clases-particulares/universidad/">Clases universitarias</a></li>
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
const pages = [
  homePage(),
  blogIndexPage(posts),
  ...SITE_DATA.blogCategories.map((category) => blogCategoryPage(category, posts)),
  ...posts.map((post) => postPage(post, posts)),
  serviceOverviewPage(),
  ...SITE_DATA.servicePages.map((page) => servicePage(page, posts)),
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
