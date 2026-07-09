import fs from "node:fs";
import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";

const SITE_URL = "https://metodonebula.es";

/**
 * Static-hosting helpers for GitHub Pages:
 *  - emit a `404.html` copy of `index.html` so client-side routes (e.g.
 *    /blog/mi-entrada) resolve on hard navigation / refresh;
 *  - generate `sitemap.xml` from the blog Markdown files.
 */
function staticPagesPlugin(): Plugin {
  return {
    name: "nebula-static-pages",
    apply: "build",
    closeBundle() {
      const dist = path.resolve(__dirname, "dist");
      const indexHtml = path.join(dist, "index.html");
      if (fs.existsSync(indexHtml)) {
        fs.copyFileSync(indexHtml, path.join(dist, "404.html"));
      }

      const blogDir = path.resolve(__dirname, "src/content/blog");
      const slugs = fs.existsSync(blogDir)
        ? fs
            .readdirSync(blogDir)
            .filter((file) => file.endsWith(".md"))
            .map((file) => file.replace(/\.md$/, ""))
        : [];

      const urls = [
        { loc: `${SITE_URL}/`, changefreq: "weekly", priority: "1.0" },
        { loc: `${SITE_URL}/blog`, changefreq: "weekly", priority: "0.8" },
        ...slugs.map((slug) => ({
          loc: `${SITE_URL}/blog/${slug}`,
          changefreq: "monthly",
          priority: "0.6",
        })),
      ];

      const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) =>
      `  <url>\n    <loc>${url.loc}</loc>\n    <changefreq>${url.changefreq}</changefreq>\n    <priority>${url.priority}</priority>\n  </url>`,
  )
  .join("\n")}
</urlset>
`;
      fs.writeFileSync(path.join(dist, "sitemap.xml"), xml);
    },
  };
}

export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss(), staticPagesPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
