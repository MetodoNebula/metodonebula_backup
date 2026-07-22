import { useEffect, type ReactNode } from "react";
import { ArrowRight, BookOpen, CheckCircle2, Mail, MessageCircle } from "lucide-react";

import { EMAIL, WHATSAPP_NUMBER } from "../lib/contact";
import { trackEvent } from "../lib/analytics";
import {
  absoluteUrl,
  blogCategoryPath,
  siteData,
  type CommercialHub,
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

function faqJsonLd(faq: Array<{ q: string; a: string }>) {
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
      title: "Matemáticas universitarias",
      text: "Cálculo, Álgebra Lineal y asignaturas matemáticas con problemas del programa real.",
      paths: [
        "/clases-particulares/matematicas-universidad/",
        "/clases-particulares/calculo-universitario/",
        "/clases-particulares/algebra-lineal-universidad/",
      ],
    },
    {
      title: "Ciencias y Estadística",
      text: "Preparación cuantitativa para Ingeniería, Psicología, ADE y Ciencias Sociales.",
      paths: [
        "/clases-particulares/fisica-ingenieria/",
        "/clases-particulares/estadistica-universidad/",
        "/clases-particulares/estadistica-psicologia-ade/",
        "/clases-particulares/quimica/",
      ],
    },
    {
      title: "Economía y Programación académica",
      text: "Apoyo para asignaturas universitarias aplicadas, prácticas y exámenes.",
      paths: [
        "/clases-particulares/economia-ade/",
        "/clases-particulares/programacion-universidad/",
      ],
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
        label="Universidad"
        page={page}
        breadcrumbs={[{ label: "Preparación universitaria", href: page.path }]}
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

export function CommercialHubPage({ page }: { page: CommercialHub }) {
  usePageMeta({ title: page.title, description: page.description, path: page.path });
  const entryForPath = (path: string) => {
    const service = siteData.servicePages.find((item) => item.path === path);
    if (service) return { title: service.h1, description: service.description };
    const hub = siteData.commercialHubs.find((item) => item.path === path);
    if (hub) return { title: hub.h1, description: hub.description };
    const core = [siteData.serviceOverview, ...siteData.corePages].find(
      (item) => item.path === path,
    );
    if (core) return { title: core.h1, description: core.description };
    const post = getAllPosts().find((item) => `/blog/${item.slug}/` === path);
    return post ? { title: post.title, description: post.description } : undefined;
  };

  return (
    <PageShell>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: page.h1,
          description: page.description,
          url: absoluteUrl(page.path),
          provider: { "@type": "EducationalOrganization", name: siteData.site.displayName },
        }}
      />
      <JsonLd data={faqJsonLd(page.faq)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name: page.h1, item: absoluteUrl(page.path) },
          ],
        }}
      />
      <PageHero
        label={page.label}
        page={page}
        breadcrumbs={[{ label: page.label, href: page.path }]}
      />
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {page.sections.map((section) => (
              <section key={section.title} className="nebula-card rounded-3xl p-7">
                <h2 className="font-display text-2xl font-semibold nebula-heading-text">
                  {section.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {section.description}
                </p>
                <ul className="mt-6 space-y-4">
                  {section.paths.map((path) => {
                    const entry = entryForPath(path);
                    if (!entry) return null;
                    return (
                      <li key={path}>
                        <Link
                          to={path}
                          className="group block rounded-2xl border border-white/8 p-4 hover:border-action/35"
                        >
                          <span className="font-semibold text-link group-hover:underline">
                            {entry.title}
                          </span>
                          <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                            {entry.description}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </section>
            ))}
          </div>
          <section className="mx-auto mt-16 max-w-3xl">
            <AccentHeading className="text-2xl">Preguntas frecuentes</AccentHeading>
            <FAQList items={page.faq} />
          </section>
          <div className="mt-12 text-center">
            <PrimaryCTA href="/contacto/">Solicitar diagnóstico inicial</PrimaryCTA>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export function ServiceDetailPage({ page }: { page: ServicePage }) {
  usePageMeta({ title: page.title, description: page.description, path: page.path });
  const relatedPosts = page.relatedPosts.map((slug) => getPost(slug)).filter(Boolean);
  const parentPath = page.parentPath ?? "/clases-particulares/";
  const parentLabel = page.parentLabel ?? "Clases particulares";
  const relatedServices = (page.relatedServices ?? [])
    .map((path) => siteData.servicePages.find((item) => item.path === path))
    .filter((item): item is ServicePage => Boolean(item));

  useEffect(() => {
    trackEvent("view_service_page", { path: page.path });
  }, [page.path]);

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
      <JsonLd data={faqJsonLd(page.faq)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: absoluteUrl("/") },
            {
              "@type": "ListItem",
              position: 2,
              name: parentLabel,
              item: absoluteUrl(parentPath),
            },
            { "@type": "ListItem", position: 3, name: page.h1, item: absoluteUrl(page.path) },
          ],
        }}
      />
      <PageHero
        label="Servicio"
        page={{ h1: page.h1, intro: page.audience }}
        breadcrumbs={[
          { label: parentLabel, href: parentPath },
          { label: page.h1, href: page.path },
        ]}
      />
      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_0.75fr]">
          <div className="space-y-10">
            <ContentBlock title="Problemas habituales" items={page.problems} />
            <ContentBlock title="Bloques que podemos trabajar" items={page.topics} />
            <ContentBlock title="Cómo funciona el método" items={page.method} ordered />
            {page.modality && (
              <section>
                <AccentHeading className="text-2xl">Modalidad online</AccentHeading>
                <p className="mt-3 leading-relaxed text-muted-foreground">{page.modality}</p>
              </section>
            )}
            {page.sessionStructure && (
              <ContentBlock
                title="Cómo se organiza una sesión"
                items={page.sessionStructure}
                ordered
              />
            )}
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
              <FAQList items={page.faq} />
            </section>
            {relatedServices.length > 0 && (
              <section>
                <AccentHeading className="text-2xl">Servicios relacionados</AccentHeading>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {relatedServices.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="rounded-2xl border border-white/8 p-5 hover:border-action/35"
                    >
                      <span className="font-semibold text-link">{service.h1}</span>
                      <span className="mt-2 block text-sm text-muted-foreground">
                        {service.description}
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
          <aside className="space-y-5">
            <div className="nebula-card rounded-3xl p-6">
              <AccentHeading className="text-xl">Diagnóstico inicial</AccentHeading>
              <p className="mt-3 text-sm text-muted-foreground">{page.nextStep}</p>
              <PrimaryCTA href="/contacto/" className="mt-5 w-full">
                Solicitar diagnóstico inicial
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

function FAQList({ items }: { items: Array<{ q: string; a: string }> }) {
  return (
    <div className="mt-5 divide-y divide-white/8 rounded-2xl border border-white/8 bg-white/[0.02]">
      {items.map((item) => (
        <details key={item.q} className="group p-5">
          <summary className="cursor-pointer font-semibold text-foreground marker:text-action">
            {item.q}
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
        </details>
      ))}
    </div>
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
          <AccentHeading>Opciones de contacto</AccentHeading>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Si quieres solicitar un diagnóstico inicial, puedes contactar por WhatsApp o por correo
            electrónico. Los datos se muestran únicamente como información: no hay formulario ni
            enlaces de envío automático.
          </p>

          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="nebula-card rounded-2xl p-5">
              <dt className="flex items-center gap-3 text-sm font-semibold">
                <MessageCircle className="h-5 w-5 text-action" aria-hidden="true" />
                WhatsApp
              </dt>
              <dd className="mt-3 text-base text-muted-foreground">{WHATSAPP_NUMBER}</dd>
            </div>
            <div className="nebula-card rounded-2xl p-5">
              <dt className="flex items-center gap-3 text-sm font-semibold">
                <Mail className="h-5 w-5 text-action" aria-hidden="true" />
                Correo electrónico
              </dt>
              <dd className="mt-3 break-all text-base text-muted-foreground">{EMAIL}</dd>
            </div>
          </dl>

          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Copia el dato que prefieras y abre tu aplicación habitual para escribir el mensaje.
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
              {siteData.commercialHubs.map((hub) => (
                <li key={hub.path}>
                  <Link to={hub.path} className="text-link transition-colors hover:text-link">
                    {hub.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/clases-particulares/universidad/" className="text-link">
                  Preparación universitaria
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
          El enlace puede haber cambiado. Puedes volver al inicio o elegir una de las áreas
          principales de Método Nebula.
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
            href="/clases-particulares/"
            className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium"
          >
            Clases particulares
          </a>
          <a
            href="/preparacion-examenes/"
            className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium"
          >
            Exámenes
          </a>
          <a
            href="/formacion-it/"
            className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium"
          >
            Formación IT
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
