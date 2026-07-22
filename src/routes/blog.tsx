import { useEffect, type ReactNode } from "react";
import { ArrowLeft, ArrowRight, CalendarDays, Clock } from "lucide-react";

import { PageShell, PrimaryCTA } from "../components/site";
import { trackEvent } from "../lib/analytics";
import { MarkdownContent } from "../lib/markdown";
import {
  formatDate,
  getAllPosts,
  getPageItems,
  getPost,
  getPostsByCategory,
  getRelatedPosts,
  getTotalPages,
  type Post,
} from "../lib/posts";
import { Link } from "../lib/router";
import { usePageMeta } from "../lib/seo";
import {
  absoluteUrl,
  blogCategoryPagePath,
  blogCategoryPath,
  blogPagePath,
  findBlogCategory,
  siteData,
  type BlogCategory,
} from "../lib/site-data";

const FEATURED_POST_SLUGS = [
  "que-prueba-estadistica-utilizar-guia-test-correcto",
  "como-aprobar-calculo-i-ingenieria-seis-semanas",
  "preparar-selectividad-con-calendario",
];

function JsonLd({ data }: { data: object }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

function BlogLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-spark/35 bg-spark/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-spark">
      <span className="h-1.5 w-1.5 rounded-full bg-spark" />
      {children}
    </span>
  );
}

function PostMeta({ post }: { post: Post }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
      <span className="rounded-full border border-spark/40 bg-spark/10 px-3 py-1 font-medium uppercase tracking-[0.18em] text-spark">
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

function PostCard({ post, headingLevel = 2 }: { post: Post; headingLevel?: 2 | 3 }) {
  const Heading = `h${headingLevel}` as const;
  return (
    <Link
      to={`/blog/${post.slug}/`}
      className="nebula-card group flex h-full flex-col rounded-3xl p-7 transition-colors hover:border-action/35 hover:bg-action/5"
    >
      <PostMeta post={post} />
      <Heading className="mt-5 font-display text-xl font-semibold leading-snug text-foreground transition-colors group-hover:text-spark">
        {post.title}
      </Heading>
      <p className="mt-3 grow text-sm leading-relaxed text-muted-foreground">{post.description}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-link">
        Leer entrada
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}

function getPostHeadings(body: string): Array<{ id: string; text: string }> {
  return Array.from(body.matchAll(/^##\s+(.+)$/gm))
    .slice(0, 8)
    .map((match) => {
      const text = match[1].replace(/\*\*/g, "").trim();
      const id = text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
      return { id, text };
    });
}

function PaginationNav({
  currentPage,
  totalPages,
  pathForPage,
  label = "Paginación del blog",
}: {
  currentPage: number;
  totalPages: number;
  pathForPage: (page: number) => string;
  label?: string;
}) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  const linkClass =
    "inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-white/10 px-3 text-sm font-medium text-link transition-colors hover:border-action/35 hover:bg-action/5";
  const activeClass =
    "inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-action/50 bg-action px-3 text-sm font-semibold text-primary-foreground";

  return (
    <nav className="mt-12 flex flex-wrap items-center justify-center gap-2" aria-label={label}>
      {currentPage > 1 && (
        <Link to={pathForPage(currentPage - 1)} className={linkClass} rel="prev">
          Anterior
        </Link>
      )}
      {pages.map((page) =>
        page === currentPage ? (
          <span key={page} className={activeClass} aria-current="page">
            {page}
          </span>
        ) : (
          <Link key={page} to={pathForPage(page)} className={linkClass}>
            {page}
          </Link>
        ),
      )}
      {currentPage < totalPages && (
        <Link to={pathForPage(currentPage + 1)} className={linkClass} rel="next">
          Siguiente
        </Link>
      )}
    </nav>
  );
}

export function BlogIndex({ pageNumber = 1 }: { pageNumber?: number }) {
  const posts = getAllPosts();
  const totalPages = getTotalPages(posts);
  const currentPage = Number.isInteger(pageNumber) ? pageNumber : 1;
  if (currentPage < 1 || currentPage > totalPages) {
    return <PostNotFound />;
  }
  return <BlogIndexView posts={posts} currentPage={currentPage} totalPages={totalPages} />;
}

function BlogIndexView({
  posts,
  currentPage,
  totalPages,
}: {
  posts: Post[];
  currentPage: number;
  totalPages: number;
}) {
  const page = siteData.corePages.find((item) => item.kind === "blog")!;
  const path = blogPagePath(currentPage);
  const paginatedPosts = getPageItems(posts, currentPage);
  const featuredPosts = FEATURED_POST_SLUGS.map((slug) => getPost(slug)).filter(
    (post): post is Post => Boolean(post),
  );
  const pillarPosts = siteData.blogCategories
    .map((category) => getPost(category.pillarPost))
    .filter((post): post is Post => Boolean(post));
  usePageMeta({
    title:
      currentPage === 1
        ? page.title
        : `${page.h1}, página ${currentPage} | ${siteData.site.displayName}`,
    description:
      currentPage === 1
        ? page.description
        : `Página ${currentPage} del blog de Método Nebula: guías académicas, problemas resueltos y estrategias de estudio.`,
    path,
    prevPath: currentPage > 1 ? blogPagePath(currentPage - 1) : undefined,
    nextPath: currentPage < totalPages ? blogPagePath(currentPage + 1) : undefined,
  });

  return (
    <PageShell>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: page.h1,
          description: page.description,
          url: absoluteUrl(path),
          publisher: { "@type": "EducationalOrganization", name: siteData.site.displayName },
        }}
      />
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="nebula-aurora pointer-events-none absolute inset-0 opacity-60" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px blog-title-line opacity-70" />
        <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-14 md:pt-24 md:pb-16">
          <div className="max-w-3xl">
            <BlogLabel>Blog</BlogLabel>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] nebula-gradient-text md:text-6xl">
              {page.h1}
            </h1>
            <p className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
              {currentPage === 1
                ? page.intro
                : `Página ${currentPage} de ${totalPages} del archivo del blog.`}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          {currentPage === 1 && (
            <div className="mb-14 space-y-14">
              <section>
                <h2 className="font-display text-2xl font-semibold nebula-heading-text">
                  Contenidos destacados
                </h2>
                <div className="mt-6 grid gap-5 lg:grid-cols-3">
                  {featuredPosts.map((post) => (
                    <PostCard key={post.slug} post={post} />
                  ))}
                </div>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold nebula-heading-text">
                  Guías principales
                </h2>
                <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                  {pillarPosts.map((post) => (
                    <PostCard key={post.slug} post={post} headingLevel={3} />
                  ))}
                </div>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold nebula-heading-text">
                  Categorías
                </h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {siteData.blogCategories.map((category) => (
                    <Link
                      key={category.slug}
                      to={blogCategoryPath(category.slug)}
                      className="rounded-2xl border border-white/8 bg-white/[0.02] p-4 transition-colors hover:border-action/35 hover:bg-action/5"
                    >
                      <span className="text-sm font-semibold text-link">{category.name}</span>
                      <span className="mt-1 block text-xs text-muted-foreground">
                        {category.description}
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            </div>
          )}

          {posts.length === 0 ? (
            <p className="text-muted-foreground">Todavía no hay entradas publicadas.</p>
          ) : (
            <>
              <h2 className="font-display text-2xl font-semibold nebula-heading-text">
                {currentPage === 1 ? "Artículos recientes" : `Archivo, página ${currentPage}`}
              </h2>
              <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {paginatedPosts.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
              <PaginationNav
                currentPage={currentPage}
                totalPages={totalPages}
                pathForPage={blogPagePath}
              />
            </>
          )}
        </div>
      </section>
    </PageShell>
  );
}

export function BlogCategoryPage({ slug, pageNumber = 1 }: { slug: string; pageNumber?: number }) {
  const category = findBlogCategory(slug);
  if (!category) {
    return <PostNotFound />;
  }

  const posts = getPostsByCategory(category.name);
  const totalPages = getTotalPages(posts);
  const currentPage = Number.isInteger(pageNumber) ? pageNumber : 1;
  if (currentPage < 1 || currentPage > totalPages) {
    return <PostNotFound />;
  }

  return (
    <BlogCategoryView
      category={category}
      posts={posts}
      currentPage={currentPage}
      totalPages={totalPages}
    />
  );
}

function BlogCategoryView({
  category,
  posts,
  currentPage,
  totalPages,
}: {
  category: BlogCategory;
  posts: Post[];
  currentPage: number;
  totalPages: number;
}) {
  const path = blogCategoryPagePath(category.slug, currentPage);
  const paginatedPosts = getPageItems(posts, currentPage);
  const pillarPost = getPost(category.pillarPost);
  const relatedService = siteData.servicePages.find(
    (service) => service.path === category.relatedService,
  );
  const title =
    currentPage === 1
      ? `${category.name}: artículos y guías | ${siteData.site.displayName}`
      : `${category.name}: artículos y guías, página ${currentPage} | ${siteData.site.displayName}`;
  const description =
    currentPage === 1
      ? `${category.description} Artículos prácticos de Método Nebula para estudiar con más estructura.`
      : `Página ${currentPage} de la categoría ${category.name}: artículos prácticos de Método Nebula para estudiar con más estructura.`;

  usePageMeta({
    title,
    description,
    path,
    prevPath: currentPage > 1 ? blogCategoryPagePath(category.slug, currentPage - 1) : undefined,
    nextPath:
      currentPage < totalPages ? blogCategoryPagePath(category.slug, currentPage + 1) : undefined,
  });

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
            className="inline-flex items-center gap-2 text-sm text-link transition-colors hover:text-link"
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
            {currentPage === 1
              ? category.description
              : `Página ${currentPage} de ${totalPages} de esta categoría.`}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          {currentPage === 1 && (
            <div className="mb-12 grid gap-5 lg:grid-cols-[1fr_0.8fr]">
              {pillarPost && (
                <section>
                  <h2 className="font-display text-2xl font-semibold nebula-heading-text">
                    Guía principal
                  </h2>
                  <div className="mt-5">
                    <PostCard post={pillarPost} />
                  </div>
                </section>
              )}
              {relatedService && (
                <aside className="rounded-3xl border border-white/8 bg-white/[0.02] p-7">
                  <h2 className="font-display text-2xl font-semibold nebula-heading-text">
                    Apoyo relacionado
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Si esta categoría conecta con una asignatura o examen real, la página de
                    servicio explica el acompañamiento, los contenidos y el siguiente paso.
                  </p>
                  <Link
                    to={relatedService.path}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-link underline-offset-4 hover:underline"
                  >
                    {relatedService.h1}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </aside>
              )}
            </div>
          )}
          {posts.length === 0 ? (
            <p className="text-muted-foreground">Todavía no hay entradas en esta categoría.</p>
          ) : (
            <>
              <h2 className="font-display text-2xl font-semibold nebula-heading-text">
                Artículos de {category.name}
              </h2>
              <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {paginatedPosts.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
              <PaginationNav
                currentPage={currentPage}
                totalPages={totalPages}
                pathForPage={(page) => blogCategoryPagePath(category.slug, page)}
                label={`Paginación de ${category.name}`}
              />
            </>
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
  const category = siteData.blogCategories.find((item) => item.name === post.category);
  const relatedService = siteData.servicePages.find(
    (service) => service.path === post.relatedService,
  );
  const headings = getPostHeadings(post.body);
  const blogPosting = {
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
    publisher: {
      "@type": "EducationalOrganization",
      name: siteData.site.displayName,
      logo: { "@type": "ImageObject", url: absoluteUrl(siteData.site.logo) },
    },
    ...(post.image && post.image !== siteData.site.logo ? { image: absoluteUrl(post.image) } : {}),
  };
  usePageMeta({
    title: `${post.title} | ${siteData.site.displayName}`,
    description: post.description,
    path,
    type: "article",
    image: post.image,
  });
  useEffect(() => {
    trackEvent("view_blog_article", { slug: post.slug, category: post.category });
  }, [post.category, post.slug]);

  return (
    <PageShell>
      <JsonLd data={blogPosting} />
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
              className="inline-flex items-center gap-2 text-sm text-link transition-colors hover:text-link"
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
          {headings.length >= 4 && (
            <nav
              aria-label="Índice del artículo"
              className="mb-10 rounded-3xl border border-white/8 bg-white/[0.02] p-6 text-sm"
            >
              <p className="font-display font-semibold text-foreground">Índice</p>
              <ol className="mt-4 space-y-2">
                {headings.map((heading) => (
                  <li key={heading.id}>
                    <a
                      href={`#${heading.id}`}
                      className="text-link underline-offset-4 hover:underline"
                    >
                      {heading.text}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}
          <MarkdownContent markdown={post.body} />

          <aside
            className="mt-12 rounded-3xl border border-white/10 bg-white/[0.02] p-6"
            aria-label="Autor del artículo"
          >
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-spark">Autoría</p>
            <h2 className="mt-2 font-display text-xl font-semibold text-foreground">
              Método Nebula
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Contenido revisado por el responsable docente de Método Nebula, graduado en
              Matemáticas, con formación de máster en Big Data e Inteligencia Artificial y
              experiencia docente y tecnológica.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              <Link to="/sobre-nebula/" className="text-link underline-offset-4 hover:underline">
                Conocer el método y el perfil docente
              </Link>
              {siteData.site.author.profileUrl && (
                <a
                  href={siteData.site.author.profileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-link underline-offset-4 hover:underline"
                >
                  Ver perfil profesional
                </a>
              )}
            </div>
          </aside>

          <div className="mt-14 rounded-3xl border border-white/10 bg-white/[0.02] p-8 text-center">
            <h2 className="font-display text-2xl font-semibold nebula-heading-text">
              ¿Quieres aplicar esto a tu asignatura o examen?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
              Empezamos con una llamada de diagnóstico para entender tu objetivo, tu punto de
              partida y tu fecha. El servicio relacionado ayuda a aterrizarlo en un plan concreto.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <PrimaryCTA href="/contacto/">Solicitar diagnóstico</PrimaryCTA>
              {relatedService && (
                <Link
                  to={relatedService.path}
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-link transition-colors hover:border-white/30 hover:bg-white/[0.05]"
                >
                  Ver apoyo relacionado
                </Link>
              )}
            </div>
          </div>
        </div>
      </article>

      {category && (
        <section className="border-t border-white/5 py-12">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-muted-foreground">
              Este artículo forma parte del clúster de{" "}
              <Link to={blogCategoryPath(category.slug)} className="text-link hover:underline">
                {category.name}
              </Link>
              .
            </p>
            {relatedService && (
              <Link
                to={relatedService.path}
                className="text-sm font-medium text-link underline-offset-4 hover:underline"
              >
                Servicio relacionado: {relatedService.h1}
              </Link>
            )}
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="border-t border-white/5 py-16">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="font-display text-2xl font-semibold nebula-heading-text">
              Seguir leyendo
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}/`}
                  className="nebula-card group flex h-full flex-col rounded-3xl p-7 transition-transform hover:-translate-y-1"
                >
                  <PostMeta post={p} />
                  <h3 className="mt-4 font-display text-lg font-semibold text-foreground transition-colors group-hover:text-spark">
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
