import { type ReactNode } from "react";
import { ArrowRight, BookOpen, CheckCircle2, Mail, MessageCircle } from "lucide-react";

import { EMAIL, EMAIL_URL, WHATSAPP_NUMBER, useCopyPhone } from "../lib/contact";
import {
  absoluteUrl,
  blogCategoryPath,
  siteData,
  type CorePage,
  type ServicePage,
} from "../lib/site-data";
import { usePageMeta } from "../lib/seo";
import { getAllPosts, getPost } from "../lib/posts";
import { Footer, PageShell, PrimaryCTA, SectionLabel } from "../components/site";
import { Link } from "../lib/router";

function Breadcrumbs({ items }: { items: Array<{ label: string; href: string }> }) {
  return (
    <nav aria-label="Migas de pan" className="text-xs text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link to="/" className="text-link transition-colors hover:text-link">
            Inicio
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            {index === items.length - 1 ? (
              <span className="text-foreground/80">{item.label}</span>
            ) : (
              <Link to={item.href} className="text-link transition-colors hover:text-link">
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
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px nebula-title-line opacity-70" />
      <div className="relative mx-auto max-w-7xl px-6 pt-12 pb-14 md:pt-20 md:pb-18">
        <Breadcrumbs items={breadcrumbs} />
        <div className="mt-8 max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-spark/30 bg-spark/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-spark">
            <BookOpen className="h-3.5 w-3.5" />
            {label}
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] nebula-gradient-text md:text-6xl">
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

function AccentHeading({
  children,
  className = "text-3xl",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div>
      <span className="block h-1 w-14 rounded-full nebula-title-line" />
      <h2 className={`mt-3 font-display font-semibold nebula-heading-text ${className}`}>
        {children}
      </h2>
    </div>
  );
}

export function ServiceOverviewPage() {
  const page = siteData.serviceOverview;
  usePageMeta({ title: page.title, description: page.description, path: page.path });
  const groups = [
    {
      title: "Clases particulares",
      text: "Asignaturas concretas con diagnóstico, práctica guiada y seguimiento.",
      paths: [
        "/clases-particulares/matematicas-universidad/",
        "/clases-particulares/fisica-ingenieria/",
        "/clases-particulares/estadistica-universidad/",
        "/clases-particulares/quimica/",
        "/clases-particulares/economia-ade/",
      ],
    },
    {
      title: "Preparación con fecha",
      text: "Selectividad, recuperaciones y programas internacionales con calendario inverso.",
      paths: ["/clases-particulares/selectividad/", "/clases-particulares/gcse-ib/"],
    },
    {
      title: "Formación tecnológica",
      text: "Programación académica, Python, SQL, datos e itinerarios técnicos diferenciados.",
      paths: ["/clases-particulares/programacion-universidad/"],
    },
  ];

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
        label="Clases desde ESO"
        page={page}
        breadcrumbs={[{ label: "Clases desde ESO", href: page.path }]}
      />
      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <AccentHeading>Un mapa para cada objetivo</AccentHeading>
            <p className="mt-4 text-muted-foreground">
              La oferta se separa para que un alumno de asignatura, una preparación con fecha y una
              ruta tecnológica no compitan por la misma atención. Cada entrada conserva diagnóstico,
              plan y seguimiento.
            </p>
            <PrimaryCTA href="/contacto/" className="mt-6">
              Solicitar diagnóstico
            </PrimaryCTA>
          </div>
          <div className="space-y-5">
            {groups.map((group) => (
              <section
                key={group.title}
                className="border-t border-white/8 pt-6 first:border-t-0 first:pt-0"
              >
                <h2 className="font-display text-xl font-semibold nebula-heading-text">
                  {group.title}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">{group.text}</p>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {group.paths.map((servicePath) => {
                    const service = siteData.servicePages.find((item) => item.path === servicePath);
                    if (!service) return null;
                    return (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="group rounded-2xl border border-white/8 p-5 transition-colors hover:border-action/35 hover:bg-action/5"
                      >
                        <h3 className="font-display text-lg font-semibold group-hover:text-link">
                          {service.h1}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
                        <span className="mt-4 inline-flex items-center gap-2 text-sm text-link">
                          Ver programa <ArrowRight className="h-4 w-4" />
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </section>
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
              name: "Clases desde ESO",
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
          { label: "Clases desde ESO", href: siteData.serviceOverview.path },
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
              <AccentHeading className="text-2xl">Qué diferencia este acompañamiento</AccentHeading>
              <p className="mt-3 leading-relaxed text-muted-foreground">{page.differentiator}</p>
            </section>
            <div className="grid gap-5 md:grid-cols-2">
              <section className="rounded-2xl border border-white/8 bg-white/[0.02] p-5">
                <AccentHeading className="text-xl">Qué debe aportar el alumno</AccentHeading>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {page.studentInput}
                </p>
              </section>
              <section className="rounded-2xl border border-white/8 bg-white/[0.02] p-5">
                <AccentHeading className="text-xl">Resultados razonables</AccentHeading>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {page.reasonableOutcomes}
                </p>
              </section>
            </div>
            <section>
              <AccentHeading className="text-2xl">Perfil docente</AccentHeading>
              <p className="mt-3 leading-relaxed text-muted-foreground">{page.profile}</p>
            </section>
            <section>
              <AccentHeading className="text-2xl">Preguntas frecuentes</AccentHeading>
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
              <AccentHeading className="text-xl">Diagnóstico inicial</AccentHeading>
              <p className="mt-3 text-sm text-muted-foreground">{page.nextStep}</p>
              <PrimaryCTA href="/contacto/" className="mt-5 w-full">
                Solicitar diagnóstico
              </PrimaryCTA>
            </div>
            {relatedPosts.length > 0 && (
              <div className="rounded-3xl border border-white/8 bg-white/[0.02] p-6">
                <AccentHeading className="text-xl">Lecturas relacionadas</AccentHeading>
                <div className="mt-4 space-y-3">
                  {relatedPosts.map((post) =>
                    post ? (
                      <Link
                        key={post.slug}
                        to={`/blog/${post.slug}/`}
                        className="block rounded-2xl border border-white/8 p-4 text-sm hover:border-white/20"
                      >
                        <span className="inline-flex rounded-full border border-spark/35 bg-spark/10 px-2.5 py-1 text-xs font-medium uppercase tracking-[0.16em] text-spark">
                          {post.category}
                        </span>
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
      <AccentHeading className="text-2xl">{title}</AccentHeading>
      <List className="mt-5 grid gap-3 sm:grid-cols-2">
        {items.map((item, index) => (
          <li key={item} className="flex items-start gap-3 rounded-2xl border border-white/8 p-4">
            {ordered ? (
              <span className="font-display text-sm font-semibold text-action">{index + 1}.</span>
            ) : (
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-action" />
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
  const highlights = [
    "Graduado en Matemáticas.",
    "Máster en Big Data e Inteligencia Artificial.",
    "Experiencia profesional en tecnología.",
    "Más de 6 años dando clases.",
    "Trabajo desde ESO y Bachillerato hasta Universidad, exámenes internacionales y perfiles técnicos.",
  ];
  const method = [
    {
      title: "Primero entiendo el bloqueo",
      text: "Antes de llenar una clase de ejercicios, reviso qué falta: base matemática, método de estudio, lectura del enunciado, práctica real o calendario.",
    },
    {
      title: "Después ordeno el camino",
      text: "Cada sesión tiene una función dentro del plan: explicar, practicar, corregir errores, preparar examen o construir autonomía.",
    },
    {
      title: "Finalmente medimos progreso",
      text: "No basta con salir de clase con buena sensación. El objetivo es que puedas resolver, justificar y repetir el razonamiento sin depender de una solución delante.",
    },
  ];

  usePageMeta({ title: page.title, description: page.description, path: page.path });
  return (
    <PageShell>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: page.h1,
          description: page.description,
          about: {
            "@type": "EducationalOrganization",
            name: siteData.site.displayName,
            knowsAbout: siteData.site.author.knowsAbout,
          },
          url: absoluteUrl(page.path),
        }}
      />
      <PageHero
        label="Sobre Método Nebula"
        page={page}
        breadcrumbs={[{ label: "Sobre Nebula", href: page.path }]}
      />
      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_0.85fr]">
          <div className="space-y-8">
            <section>
              <AccentHeading>Quién soy</AccentHeading>
              <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  Método Nebula es un proyecto de mentoría académica y profesional. El trabajo está
                  en la intersección entre la matemática, la ciencia, la programación y la forma en
                  que una persona aprende cuando tiene una fecha, un examen o una decisión
                  importante delante.
                </p>
                <p>
                  Método Nebula nace de una idea sencilla: muchas veces el alumno no necesita solo
                  más horas, sino un diagnóstico honesto, una explicación clara y una estructura que
                  convierta el esfuerzo en progreso.
                </p>
              </div>
            </section>

            <section>
              <AccentHeading>Cómo entiendo la enseñanza</AccentHeading>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Enseñar no es resolver por el alumno. Es ayudarle a ver el mapa: qué pregunta
                plantea el problema, qué herramientas sirven, por qué aparece cada paso y cómo
                comprobar si el resultado tiene sentido.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {method.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-white/8 bg-white/[0.02] p-5"
                  >
                    <h3 className="font-semibold nebula-subheading-text">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-5">
            <div className="nebula-card rounded-3xl p-6">
              <AccentHeading className="text-2xl">En pocas líneas</AccentHeading>
              <ul className="mt-5 space-y-3">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-action" />
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-white/8 bg-white/[0.02] p-6">
              <AccentHeading className="text-xl">Áreas de trabajo</AccentHeading>
              <div className="mt-4 flex flex-wrap gap-2">
                {siteData.site.author.knowsAbout.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-foreground/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <PrimaryCTA href="/contacto/" className="mt-6 w-full">
                Solicitar diagnóstico
              </PrimaryCTA>
            </div>
          </aside>
        </div>
      </section>
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
              type="button"
              onClick={copy}
              className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left transition-colors hover:border-white/25"
            >
              <span className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-action" />
                <span>
                  <span className="block font-semibold">WhatsApp</span>
                  <span className="text-sm text-muted-foreground">{WHATSAPP_NUMBER}</span>
                </span>
              </span>
              <span className="text-sm text-action">{copied ? "Copiado" : "Copiar"}</span>
            </button>
            <a
              href={EMAIL_URL}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-white/25"
            >
              <span className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-action" />
                <span>
                  <span className="block font-semibold">Email</span>
                  <span className="text-sm text-muted-foreground">{EMAIL}</span>
                </span>
              </span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
            Cuéntanos asignatura, fecha de examen, temario y punto de partida. Con esa información
            revisamos si Método Nebula encaja y qué plan tendría más sentido.
          </p>
        </div>
      </section>
    </PageShell>
  );
}

export function SitemapPage() {
  const posts = getAllPosts();
  const postsByCategory = siteData.blogCategories.map((category) => ({
    category,
    posts: posts.filter((post) => post.category === category.name),
  }));
  const page = {
    h1: "Mapa del sitio",
    intro:
      "Todas las páginas principales de Método Nebula organizadas para encontrar servicios, categorías y artículos.",
  };

  usePageMeta({
    title: `Mapa del sitio | ${siteData.site.displayName}`,
    description:
      "Mapa HTML de Método Nebula con enlaces a servicios, categorías del blog y artículos publicados.",
    path: "/mapa-del-sitio/",
  });

  return (
    <PageShell>
      <PageHero
        label="Índice"
        page={page}
        breadcrumbs={[{ label: "Mapa del sitio", href: "/mapa-del-sitio/" }]}
      />
      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-3">
          <section className="rounded-3xl border border-white/8 bg-white/[0.02] p-6">
            <AccentHeading className="text-2xl">Páginas principales</AccentHeading>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link to="/" className="text-link transition-colors hover:text-link">
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/clases-particulares/universidad/"
                  className="text-link transition-colors hover:text-link"
                >
                  Clases desde ESO
                </Link>
              </li>
              <li>
                <Link to="/metodologia/" className="text-link transition-colors hover:text-link">
                  Metodología
                </Link>
              </li>
              <li>
                <Link to="/sobre-nebula/" className="text-link transition-colors hover:text-link">
                  Sobre Nebula
                </Link>
              </li>
              <li>
                <Link to="/contacto/" className="text-link transition-colors hover:text-link">
                  Contacto
                </Link>
              </li>
            </ul>
          </section>

          <section className="rounded-3xl border border-white/8 bg-white/[0.02] p-6">
            <AccentHeading className="text-2xl">Servicios</AccentHeading>
            <ul className="mt-5 space-y-3 text-sm">
              {siteData.servicePages.map((service) => (
                <li key={service.path}>
                  <Link to={service.path} className="text-link transition-colors hover:text-link">
                    {service.h1}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl border border-white/8 bg-white/[0.02] p-6">
            <AccentHeading className="text-2xl">Categorías</AccentHeading>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link to="/blog/" className="text-link transition-colors hover:text-link">
                  Blog
                </Link>
              </li>
              {siteData.blogCategories.map((category) => (
                <li key={category.slug}>
                  <Link
                    to={blogCategoryPath(category.slug)}
                    className="text-link transition-colors hover:text-link"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="mx-auto mt-8 max-w-7xl px-6">
          <section className="rounded-3xl border border-white/8 bg-white/[0.02] p-6">
            <AccentHeading className="text-2xl">Artículos por categoría</AccentHeading>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              {postsByCategory.map(({ category, posts: categoryPosts }) => (
                <section
                  key={category.slug}
                  className="border-t border-white/8 pt-5 first:border-t-0 first:pt-0 lg:first:border-t lg:first:pt-5"
                >
                  <h3 className="font-display text-lg font-semibold nebula-subheading-text">
                    {category.name}
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm">
                    {categoryPosts.map((post) => (
                      <li key={post.slug}>
                        <Link
                          to={`/blog/${post.slug}/`}
                          className="text-link underline-offset-4 hover:underline"
                        >
                          {post.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </section>
        </div>
      </section>
    </PageShell>
  );
}

function SimpleContent({ sections }: { sections: Array<{ title: string; text: string }> }) {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto grid max-w-5xl gap-5 px-6 md:grid-cols-2">
        {sections.map((section, index) => (
          <article
            key={section.title}
            className="nebula-card relative overflow-hidden rounded-3xl p-7"
          >
            <span className="absolute inset-x-0 top-0 h-1 nebula-title-line" />
            <span className="font-display text-sm font-semibold text-violet-soft">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h2 className="mt-3 font-display text-2xl font-semibold nebula-heading-text">
              {section.title.replace(/^\d+\.\s*/, "")}
            </h2>
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
          El enlace puede haber cambiado. Puedes volver al inicio, revisar las clases desde ESO o
          contactar para explicar tu caso.
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
            Clases desde ESO
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
