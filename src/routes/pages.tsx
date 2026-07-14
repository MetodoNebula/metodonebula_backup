import { ArrowRight, BookOpen, CheckCircle2, Mail, MessageCircle } from "lucide-react";

import { EMAIL, EMAIL_URL, WHATSAPP_NUMBER, useCopyPhone } from "../lib/contact";
import { absoluteUrl, siteData, type CorePage, type ServicePage } from "../lib/site-data";
import { usePageMeta } from "../lib/seo";
import { getPost } from "../lib/posts";
import { Footer, PageShell, PrimaryCTA, SectionLabel } from "../components/site";
import { Link } from "../lib/router";

function Breadcrumbs({ items }: { items: Array<{ label: string; href: string }> }) {
  return (
    <nav aria-label="Migas de pan" className="text-xs text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link to="/" className="hover:text-foreground">
            Inicio
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            {index === items.length - 1 ? (
              <span className="text-foreground/80">{item.label}</span>
            ) : (
              <Link to={item.href} className="hover:text-foreground">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function PageHero({
  label,
  page,
  breadcrumbs,
}: {
  label: string;
  page: Pick<CorePage, "h1" | "intro">;
  breadcrumbs: Array<{ label: string; href: string }>;
}) {
  return (
    <header className="relative overflow-hidden border-b border-white/5">
      <div className="nebula-aurora pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-6 pt-12 pb-14 md:pt-20 md:pb-18">
        <Breadcrumbs items={breadcrumbs} />
        <div className="mt-8 max-w-3xl">
          <SectionLabel>{label}</SectionLabel>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] md:text-6xl">
            {page.h1}
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">{page.intro}</p>
        </div>
      </div>
    </header>
  );
}

function JsonLd({ data }: { data: object }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

export function ServiceOverviewPage() {
  const page = siteData.serviceOverview;
  usePageMeta({ title: page.title, description: page.description, path: page.path });

  return (
    <PageShell>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: page.h1,
          provider: { "@type": "EducationalOrganization", name: siteData.site.displayName },
          areaServed: "España",
          url: absoluteUrl(page.path),
        }}
      />
      <PageHero
        label="Clases universitarias"
        page={page}
        breadcrumbs={[{ label: "Clases universitarias", href: page.path }]}
      />
      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-display text-3xl font-semibold">
              Un mapa para asignaturas difíciles
            </h2>
            <p className="mt-4 text-muted-foreground">
              La página de universidad centraliza las materias que suelen exigir más estructura:
              matemáticas, estadística, programación, física, química y economía. Cada itinerario se
              adapta al temario real del alumno y a la fecha de examen.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {siteData.servicePages.map((service) => (
              <Link
                key={service.path}
                to={service.path}
                className="nebula-card group rounded-2xl p-5 transition-transform hover:-translate-y-1"
              >
                <h3 className="font-display text-lg font-semibold group-hover:text-gold">
                  {service.h1}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm text-electric">
                  Ver programa <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export function ServiceDetailPage({ page }: { page: ServicePage }) {
  usePageMeta({ title: page.title, description: page.description, path: page.path });
  const relatedPosts = page.relatedPosts.map((slug) => getPost(slug)).filter(Boolean);

  return (
    <PageShell>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: page.h1,
          description: page.description,
          provider: { "@type": "EducationalOrganization", name: siteData.site.displayName },
          url: absoluteUrl(page.path),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: absoluteUrl("/") },
            {
              "@type": "ListItem",
              position: 2,
              name: "Clases universitarias",
              item: absoluteUrl(siteData.serviceOverview.path),
            },
            { "@type": "ListItem", position: 3, name: page.h1, item: absoluteUrl(page.path) },
          ],
        }}
      />
      <PageHero
        label="Servicio"
        page={{ h1: page.h1, intro: page.audience }}
        breadcrumbs={[
          { label: "Clases universitarias", href: siteData.serviceOverview.path },
          { label: page.h1, href: page.path },
        ]}
      />
      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_0.75fr]">
          <div className="space-y-10">
            <ContentBlock title="Problemas habituales" items={page.problems} />
            <ContentBlock title="Bloques que podemos trabajar" items={page.topics} />
            <ContentBlock title="Cómo funciona el método" items={page.method} ordered />
            <section>
              <h2 className="font-display text-2xl font-semibold">Perfil docente</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{page.profile}</p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-semibold">Preguntas frecuentes</h2>
              <div className="mt-5 divide-y divide-white/8 rounded-2xl border border-white/8 bg-white/[0.02]">
                {page.faq.map((item) => (
                  <div key={item.q} className="p-5">
                    <h3 className="font-semibold">{item.q}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
          <aside className="space-y-5">
            <div className="nebula-card rounded-3xl p-6">
              <h2 className="font-display text-xl font-semibold">Diagnóstico inicial</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Cuéntanos asignatura, universidad, fecha y punto de partida. Te devolvemos una
                propuesta de trabajo ajustada al caso.
              </p>
              <PrimaryCTA href="/contacto/" className="mt-5 w-full">
                Contactar
              </PrimaryCTA>
            </div>
            {relatedPosts.length > 0 && (
              <div className="rounded-3xl border border-white/8 bg-white/[0.02] p-6">
                <h2 className="font-display text-xl font-semibold">Lecturas relacionadas</h2>
                <div className="mt-4 space-y-3">
                  {relatedPosts.map((post) =>
                    post ? (
                      <Link
                        key={post.slug}
                        to={`/blog/${post.slug}/`}
                        className="block rounded-2xl border border-white/8 p-4 text-sm hover:border-white/20"
                      >
                        <span className="text-gold">{post.category}</span>
                        <span className="mt-1 block font-medium">{post.title}</span>
                      </Link>
                    ) : null,
                  )}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>
    </PageShell>
  );
}

function ContentBlock({
  title,
  items,
  ordered,
}: {
  title: string;
  items: string[];
  ordered?: boolean;
}) {
  const List = ordered ? "ol" : "ul";
  return (
    <section>
      <h2 className="font-display text-2xl font-semibold">{title}</h2>
      <List className="mt-5 grid gap-3 sm:grid-cols-2">
        {items.map((item, index) => (
          <li key={item} className="flex items-start gap-3 rounded-2xl border border-white/8 p-4">
            {ordered ? (
              <span className="font-display text-sm font-semibold text-gold">{index + 1}.</span>
            ) : (
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            )}
            <span className="text-sm text-foreground/85">{item}</span>
          </li>
        ))}
      </List>
    </section>
  );
}

export function AboutPage() {
  const page = siteData.corePages.find((item) => item.kind === "about")!;
  usePageMeta({ title: page.title, description: page.description, path: page.path });
  return (
    <PageShell>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: siteData.site.author.name,
          jobTitle: siteData.site.author.jobTitle,
          knowsAbout: siteData.site.author.knowsAbout,
          url: absoluteUrl(page.path),
        }}
      />
      <PageHero
        label="Autoridad"
        page={page}
        breadcrumbs={[{ label: "Sobre Nebula", href: page.path }]}
      />
      <SimpleContent
        sections={[
          {
            title: "Qué aporta Nebula",
            text: "El proyecto nace para alumnos que necesitan algo más exigente que una clase suelta: diagnóstico, estructura, explicación profunda y seguimiento. El foco está en entender el razonamiento para poder aplicarlo en exámenes, prácticas y decisiones profesionales.",
          },
          {
            title: "Sobre Roberto Hernández",
            text: "Roberto Hernández aparece como mentor académico y profesional de Nebula. Las áreas de trabajo visibles en el proyecto son matemáticas, física, química, estadística, programación, economía e inteligencia artificial. Cualquier credencial adicional deberá añadirse solo cuando esté verificada.",
          },
          {
            title: "Principio editorial",
            text: "El blog se publica para aclarar decisiones de estudio, no para llenar palabras clave. Cada guía debe incluir pasos aplicables, límites del consejo y enlaces internos útiles.",
          },
        ]}
      />
    </PageShell>
  );
}

export function MethodologyPage() {
  const page = siteData.corePages.find((item) => item.kind === "method")!;
  usePageMeta({ title: page.title, description: page.description, path: page.path });
  return (
    <PageShell>
      <PageHero
        label="Método"
        page={page}
        breadcrumbs={[{ label: "Metodología", href: page.path }]}
      />
      <SimpleContent
        sections={[
          {
            title: "1. Diagnóstico",
            text: "Antes de proponer clases se revisan nivel, asignatura, fecha, temario, materiales y tipo de examen. El objetivo es detectar el cuello de botella real.",
          },
          {
            title: "2. Plan",
            text: "El trabajo se ordena en bloques semanales. Cada bloque tiene una prioridad, una práctica y una evidencia de progreso.",
          },
          {
            title: "3. Clase y material",
            text: "La sesión combina explicación, resolución guiada y práctica. El material se adapta al objetivo, evitando PDFs genéricos sin conexión con el examen.",
          },
          {
            title: "4. Seguimiento",
            text: "El plan se revisa cuando aparecen errores repetidos, retrasos o cambios de calendario. La personalización ocurre durante todo el proceso.",
          },
        ]}
      />
    </PageShell>
  );
}

export function ContactPage() {
  const page = siteData.corePages.find((item) => item.kind === "contact")!;
  const { copied, copy } = useCopyPhone();
  usePageMeta({ title: page.title, description: page.description, path: page.path });
  return (
    <PageShell>
      <PageHero
        label="Contacto"
        page={page}
        breadcrumbs={[{ label: "Contacto", href: page.path }]}
      />
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-4">
            <button
              onClick={copy}
              className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left transition-colors hover:border-white/25"
            >
              <span className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-electric" />
                <span>
                  <span className="block font-semibold">WhatsApp</span>
                  <span className="text-sm text-muted-foreground">{WHATSAPP_NUMBER}</span>
                </span>
              </span>
              <span className="text-sm text-gold">{copied ? "Copiado" : "Copiar"}</span>
            </button>
            <a
              href={EMAIL_URL}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-white/25"
            >
              <span className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>
                  <span className="block font-semibold">Email</span>
                  <span className="text-sm text-muted-foreground">{EMAIL}</span>
                </span>
              </span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
            Datos legales pendientes: si se publican aviso legal, privacidad o cookies, deberán
            completarse con NIF, domicilio y responsable real. No se han inventado esos datos.
          </p>
        </div>
      </section>
    </PageShell>
  );
}

function SimpleContent({ sections }: { sections: Array<{ title: string; text: string }> }) {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto grid max-w-5xl gap-5 px-6 md:grid-cols-2">
        {sections.map((section) => (
          <article key={section.title} className="nebula-card rounded-3xl p-7">
            <h2 className="font-display text-2xl font-semibold">{section.title}</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">{section.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function NotFoundPage() {
  usePageMeta({
    title: "Página no encontrada | Método Nebula",
    description:
      "La página solicitada no existe. Vuelve al inicio, consulta el blog o contacta con Método Nebula.",
    path: "/404/",
    robots: "noindex,follow",
  });
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <main className="mx-auto max-w-3xl px-6 py-28 text-center">
        <SectionLabel>404</SectionLabel>
        <h1 className="mt-5 font-display text-4xl font-bold">Página no encontrada</h1>
        <p className="mt-4 text-muted-foreground">
          El enlace puede haber cambiado. Puedes volver al inicio, revisar las clases universitarias
          o contactar para explicar tu caso.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <PrimaryCTA href="/">Inicio</PrimaryCTA>
          <a
            href="/blog/"
            className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium"
          >
            Blog
          </a>
          <a
            href="/clases-particulares/universidad/"
            className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium"
          >
            Clases universitarias
          </a>
          <a
            href="/contacto/"
            className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium"
          >
            Contacto
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
