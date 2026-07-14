/**
 * Blog content loader. Each entry is a Markdown file in `src/content/blog/`
 * with a small YAML-ish frontmatter block:
 *
 *   ---
 *   title: Título de la entrada
 *   date: 2026-07-09
 *   description: Resumen corto para la tarjeta y el SEO.
 *   tag: Método
 *   ---
 *
 *   Cuerpo en **Markdown**...
 *
 * The files are bundled at build time (no runtime fetch), so adding a post is
 * just dropping a new `.md` file in that folder and rebuilding.
 */

export type Post = {
  slug: string;
  title: string;
  date: string;
  updated: string;
  description: string;
  tag: string;
  category: string;
  image: string;
  relatedService: string;
  relatedPosts: string[];
  readingMinutes: number;
  body: string;
};

export const BLOG_PAGE_SIZE = 9;

type Frontmatter = Record<string, string>;

function parseFrontmatter(raw: string): { data: Frontmatter; body: string } {
  const match = /^---\s*\n([\s\S]*?)\n---\s*\n?/.exec(raw);
  if (!match) return { data: {}, body: raw.trim() };

  const data: Frontmatter = {};
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

function readingMinutes(body: string): number {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

const modules = import.meta.glob("../content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const posts: Post[] = Object.entries(modules)
  .map(([filePath, raw]) => {
    const slug = filePath.split("/").pop()!.replace(/\.md$/, "");
    const { data, body } = parseFrontmatter(raw);
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
            .map((slug) => slug.trim())
            .filter(Boolean)
        : [],
      readingMinutes: readingMinutes(body),
      body,
    };
  })
  .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

export function getAllPosts(): Post[] {
  return posts;
}

export function getTotalPages(items: unknown[], pageSize = BLOG_PAGE_SIZE): number {
  return Math.max(1, Math.ceil(items.length / pageSize));
}

export function getPageItems<T>(items: T[], page: number, pageSize = BLOG_PAGE_SIZE): T[] {
  const start = (page - 1) * pageSize;
  return items.slice(start, start + pageSize);
}

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getPostsByCategory(categoryName: string): Post[] {
  return posts.filter((post) => post.category === categoryName);
}

export function getRelatedPosts(post: Post, limit = 3): Post[] {
  const explicit = post.relatedPosts
    .map((slug) => getPost(slug))
    .filter((candidate): candidate is Post => Boolean(candidate));
  const fallback = posts.filter(
    (candidate) =>
      candidate.slug !== post.slug && !explicit.some((item) => item.slug === candidate.slug),
  );
  return [...explicit, ...fallback].slice(0, limit);
}

export function formatDate(date: string): string {
  if (!date) return "";
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
