import { type ReactNode } from "react";
import { ArrowLeft, ArrowRight, CalendarDays, Clock } from "lucide-react";

import { PageShell, PrimaryCTA } from "../components/site";
import { MarkdownContent } from "../lib/markdown";
import {
  formatDate,
  getAllPosts,
  getPost,
  getPostsByCategory,
  getRelatedPosts,
  type Post,
} from "../lib/posts";
import { Link } from "../lib/router";
import { usePageMeta } from "../lib/seo";
import {
  absoluteUrl,
  blogCategoryPath,
  findBlogCategory,
  siteData,
  type BlogCategory,
} from "../lib/site-data";

function JsonLd({ data }: { data: object }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

function BlogLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-gold/35 bg-gold/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-gold">
      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
      {children}
    </span>
  );
}

function PostMeta({ post }: { post: Post }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
      <span className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 font-medium uppercase tracking-[0.18em] text-gold">
        {post.category || post.tag}
      </span>
      {post.date && (
        <span className="inline-flex items-center gap-1.5">
          <CalendarDays className="h-3.5 w-3.5" />
          {formatDate(post.date)}
        </span>
      )}
      <span className="inline-flex items-center gap-1.5">
        <Clock className="h-3.5 w-3.5" />
        {post.readingMinutes} min de lectura
      </span>
    </div>
  );
}

export function BlogIndex() {
  const posts = getAllPosts();
  const page = siteData.corePages.find((item) => item.kind === "blog")!;
  usePageMeta({ title: page.title, description: page.description, path: page.path });

  return (
    <PageShell>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: page.h1,
          description: page.description,
          url: absoluteUrl(page.path),
          publisher: { "@type": "EducationalOrganization", name: siteData.site.displayName },
        }}
      />
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="nebula-aurora pointer-events-none absolute inset-0 opacity-60" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px blog-title-line opacity-70" />
        <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-14 md:pt-24 md:pb-16">
          <div className="max-w-3xl">
            <BlogLabel>Blog</BlogLabel>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] text-foreground md:text-6xl">
              {page.h1}
            </h1>
            <p className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
              {page.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <h2 className="font-display text-2xl font-semibold text-foreground">Categorías</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {siteData.blogCategories.map((category) => (
                <Link
                  key={category.slug}
                  to={blogCategoryPath(category.slug)}
                  className="rounded-2xl border border-white/8 bg-white/[0.02] p-4 transition-colors hover:border-gold/35 hover:bg-gold/5"
                >
                  <span className="text-sm font-semibold text-gold">{category.name}</span>
                  <span className="mt-1 block text-xs text-muted-foreground">
                    {category.description}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {posts.length === 0 ? (
            <p className="text-muted-foreground">Todavía no hay entradas publicadas.</p>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}/`}
                  className="nebula-card group flex h-full flex-col rounded-3xl p-7 transition-transform hover:-translate-y-1"
                >
                  <PostMeta post={post} />
                  <h2 className="mt-5 font-display text-xl font-semibold leading-snug text-foreground transition-colors group-hover:text-gold">
                    {post.title}
                  </h2>
                  <p className="mt-3 grow text-sm leading-relaxed text-muted-foreground">
                    {post.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold">
                    Leer entrada
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </PageShell>
  );
}

export function BlogCategoryPage({ slug }: { slug: string }) {
  const category = findBlogCategory(slug);

  if (!category) {
    return <PostNotFound />;
  }

  return <BlogCategoryView category={category} />;
}

function BlogCategoryView({ category }: { category: BlogCategory }) {
  const posts = getPostsByCategory(category.name);
  const path = blogCategoryPath(category.slug);
  const title = `${category.name}: artículos y guías | ${siteData.site.displayName}`;
  const description = `${category.description} Artículos prácticos de Método Nebula para estudiar con más estructura.`;
  usePageMeta({ title, description, path });

  return (
    <PageShell>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: title,
          description,
          url: absoluteUrl(path),
          isPartOf: {
            "@type": "Blog",
            name: siteData.corePages.find((item) => item.kind === "blog")?.h1,
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog/") },
            { "@type": "ListItem", position: 3, name: category.name, item: absoluteUrl(path) },
          ],
        }}
      />
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="nebula-aurora pointer-events-none absolute inset-0 opacity-50" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px blog-title-line opacity-70" />
        <div className="relative mx-auto max-w-7xl px-6 pt-12 pb-12 md:pt-16">
          <Link
            to="/blog/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Todas las categorías
          </Link>
          <div className="mt-8">
            <BlogLabel>Categoría</BlogLabel>
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] text-foreground md:text-6xl">
            {category.name}
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
            {category.description}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          {posts.length === 0 ? (
            <p className="text-muted-foreground">Todavía no hay entradas en esta categoría.</p>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}/`}
                  className="nebula-card group flex h-full flex-col rounded-3xl p-7 transition-transform hover:-translate-y-1"
                >
                  <PostMeta post={post} />
                  <h2 className="mt-5 font-display text-xl font-semibold leading-snug text-foreground transition-colors group-hover:text-gold">
                    {post.title}
                  </h2>
                  <p className="mt-3 grow text-sm leading-relaxed text-muted-foreground">
                    {post.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold">
                    Leer entrada
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </PageShell>
  );
}

export function BlogPost({ slug }: { slug: string }) {
  const post = getPost(slug);

  if (!post) {
    return <PostNotFound />;
  }

  return <PostView post={post} />;
}

function PostView({ post }: { post: Post }) {
  const path = `/blog/${post.slug}/`;
  const related = getRelatedPosts(post, 3);
  usePageMeta({
    title: `${post.title} | ${siteData.site.displayName}`,
    description: post.description,
    path,
    type: "article",
    image: post.image,
  });

  return (
    <PageShell>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          author: {
            "@type": "EducationalOrganization",
            name: siteData.site.displayName,
            url: absoluteUrl("/"),
          },
          datePublished: post.date,
          dateModified: post.updated,
          mainEntityOfPage: absoluteUrl(path),
          image: absoluteUrl(post.image),
          publisher: {
            "@type": "EducationalOrganization",
            name: siteData.site.displayName,
            logo: { "@type": "ImageObject", url: absoluteUrl(siteData.site.logo) },
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog/") },
            { "@type": "ListItem", position: 3, name: post.title, item: absoluteUrl(path) },
          ],
        }}
      />
      <article>
        <header className="relative overflow-hidden border-b border-white/5">
          <div className="nebula-aurora pointer-events-none absolute inset-0 opacity-50" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px blog-title-line opacity-70" />
          <div className="relative mx-auto max-w-3xl px-6 pt-12 pb-12 md:pt-16">
            <Link
              to="/blog/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Todas las entradas
            </Link>
            <div className="mt-8">
              <PostMeta post={post} />
            </div>
            <h1 className="mt-5 font-display text-3xl font-bold leading-[1.1] text-foreground md:text-5xl">
              {post.title}
            </h1>
            {post.description && (
              <p className="mt-5 text-lg text-muted-foreground">{post.description}</p>
            )}
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-6 py-14 text-[1.05rem]">
          <MarkdownContent markdown={post.body} />

          <div className="mt-14 rounded-3xl border border-white/10 bg-white/[0.02] p-8 text-center">
            <h2 className="font-display text-2xl font-semibold text-foreground">
              ¿Quieres aplicar esto a tu caso?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
              Empezamos con una llamada de diagnóstico para entender tu objetivo, tu punto de
              partida y tu fecha. Sin compromiso.
            </p>
            <div className="mt-6 flex justify-center">
              <PrimaryCTA href={post.relatedService}>Ver apoyo relacionado</PrimaryCTA>
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-white/5 py-16">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="font-display text-2xl font-semibold text-foreground">Seguir leyendo</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}/`}
                  className="nebula-card group flex h-full flex-col rounded-3xl p-7 transition-transform hover:-translate-y-1"
                >
                  <PostMeta post={p} />
                  <h3 className="mt-4 font-display text-lg font-semibold text-foreground transition-colors group-hover:text-gold">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageShell>
  );
}

function PostNotFound() {
  usePageMeta({
    title: `Entrada no encontrada | ${siteData.site.displayName}`,
    description: "No encontramos esta entrada del blog de Método Nebula.",
    path: "/blog/",
    robots: "noindex,follow",
  });
  return (
    <PageShell>
      <section className="mx-auto max-w-3xl px-6 py-28 text-center">
        <BlogLabel>Blog</BlogLabel>
        <h1 className="mt-5 font-display text-3xl font-bold md:text-4xl">
          No encontramos esta entrada
        </h1>
        <p className="mt-4 text-muted-foreground">
          Puede que el enlace haya cambiado o que la entrada ya no exista.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            to="/blog/"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-6 py-3 text-sm font-medium transition-colors hover:border-white/30 hover:bg-white/[0.05]"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al blog
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
