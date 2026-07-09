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
  description: string;
  tag: string;
  readingMinutes: number;
  body: string;
};

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
      description: data.description ?? "",
      tag: data.tag ?? "Blog",
      readingMinutes: readingMinutes(body),
      body,
    };
  })
  .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

export function getAllPosts(): Post[] {
  return posts;
}

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
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
