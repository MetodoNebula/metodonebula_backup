import { useEffect } from "react";
import { ArrowLeft, ArrowRight, CalendarDays, Clock } from "lucide-react";

import { Footer, Navbar, PrimaryCTA, SectionLabel, WhatsAppFloat } from "../components/site";
import { MarkdownContent } from "../lib/markdown";
import { formatDate, getAllPosts, getPost, type Post } from "../lib/posts";
import { Link } from "../lib/router";

const SITE_NAME = "Nebula";

function useDocumentMeta(title: string, description?: string) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = meta?.getAttribute("content") ?? null;
    if (meta && description) meta.setAttribute("content", description);

    return () => {
      document.title = previousTitle;
      if (meta && previousDescription !== null) {
        meta.setAttribute("content", previousDescription);
      }
    };
  }, [title, description]);
}

function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

function PostMeta({ post }: { post: Post }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
      <span className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 font-medium uppercase tracking-[0.18em] text-gold">
        {post.tag}
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

/* -------------------------------------------------------------------------- */
/*  Blog index                                                                */
/* -------------------------------------------------------------------------- */

export function BlogIndex() {
  const posts = getAllPosts();
  useDocumentMeta(
    `Blog — ${SITE_NAME}`,
    "Ideas, método y guías sobre estudio, exámenes y transición al sector IT del equipo de Nebula.",
  );

  return (
    <PageShell>
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="nebula-aurora pointer-events-none absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-14 md:pt-24 md:pb-16">
          <div className="max-w-3xl">
            <SectionLabel>Blog</SectionLabel>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] md:text-6xl">
              Aprender con <span className="nebula-gradient-text">método</span>, no a ciegas
            </h1>
            <p className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
              Guías prácticas sobre estudio, preparación de exámenes y transición al sector IT. Lo
              mismo que aplicamos con nuestros alumnos, por escrito.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          {posts.length === 0 ? (
            <p className="text-muted-foreground">Todavía no hay entradas publicadas.</p>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="nebula-card group flex h-full flex-col rounded-3xl p-7 transition-transform hover:-translate-y-1"
                >
                  <PostMeta post={post} />
                  <h2 className="mt-5 font-display text-xl font-semibold leading-snug group-hover:text-gold">
                    {post.title}
                  </h2>
                  <p className="mt-3 grow text-sm leading-relaxed text-muted-foreground">
                    {post.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-electric">
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

/* -------------------------------------------------------------------------- */
/*  Single post                                                               */
/* -------------------------------------------------------------------------- */

export function BlogPost({ slug }: { slug: string }) {
  const post = getPost(slug);

  if (!post) {
    return <PostNotFound />;
  }

  return <PostView post={post} />;
}

function PostView({ post }: { post: Post }) {
  useDocumentMeta(`${post.title} — ${SITE_NAME}`, post.description);
  const related = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <PageShell>
      <article>
        <header className="relative overflow-hidden border-b border-white/5">
          <div className="nebula-aurora pointer-events-none absolute inset-0 opacity-50" />
          <div className="relative mx-auto max-w-3xl px-6 pt-12 pb-12 md:pt-16">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Todas las entradas
            </Link>
            <div className="mt-8">
              <PostMeta post={post} />
            </div>
            <h1 className="mt-5 font-display text-3xl font-bold leading-[1.1] md:text-5xl">
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
            <h2 className="font-display text-2xl font-semibold">
              ¿Quieres aplicar esto a tu caso?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
              Empezamos con una llamada de diagnóstico para entender tu objetivo, tu punto de
              partida y tu fecha. Sin compromiso.
            </p>
            <div className="mt-6 flex justify-center">
              <PrimaryCTA href="/#contacto">Reservar diagnóstico</PrimaryCTA>
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-white/5 py-16">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="font-display text-2xl font-semibold">Seguir leyendo</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="nebula-card group flex h-full flex-col rounded-3xl p-7 transition-transform hover:-translate-y-1"
                >
                  <PostMeta post={p} />
                  <h3 className="mt-4 font-display text-lg font-semibold group-hover:text-gold">
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
  useDocumentMeta(`Entrada no encontrada — ${SITE_NAME}`);
  return (
    <PageShell>
      <section className="mx-auto max-w-3xl px-6 py-28 text-center">
        <SectionLabel>Blog</SectionLabel>
        <h1 className="mt-5 font-display text-3xl font-bold md:text-4xl">
          No encontramos esta entrada
        </h1>
        <p className="mt-4 text-muted-foreground">
          Puede que el enlace haya cambiado o que la entrada ya no exista.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            to="/blog"
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
