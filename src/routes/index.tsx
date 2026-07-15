import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Compass,
  Calendar,
  Code2,
  Copy,
  GraduationCap,
  LineChart,
  Atom,
  FlaskConical,
  BrainCircuit,
  Target,
  ClipboardList,
  BookOpen,
  Repeat,
  ShieldCheck,
  Star,
  MessageCircle,
  Instagram,
  Mail,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";

import { EMAIL, EMAIL_URL, INSTAGRAM_URL, WHATSAPP_NUMBER, useCopyPhone } from "../lib/contact";
import { usePageMeta } from "../lib/seo";
import { siteData } from "../lib/site-data";
import {
  Footer,
  GhostCTA,
  Navbar,
  NebulaLogo,
  PrimaryCTA,
  SectionLabel,
  WhatsAppFloat,
} from "../components/site";

export default function NebulaLanding() {
  const page = siteData.corePages.find((item) => item.kind === "home")!;
  usePageMeta({ title: page.title, description: page.description, path: page.path });

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <Navbar />
      <main id="contenido">
        <Hero />
        <Positioning />
        <Services />
        <Method />
        <Authority />
        <Comparison />
        <Testimonials />
        <Programs />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Hero                                                                      */
/* -------------------------------------------------------------------------- */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 nebula-aurora pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 pt-10 pb-20 md:pt-14 md:pb-24">
        <div className="mx-auto max-w-5xl text-center">
          <SectionLabel>Bienvenido a Nebula</SectionLabel>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
            Cuando la asignatura, el examen o la entrevista{" "}
            <span className="block nebula-gradient-text">no admite improvisación.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Enseñanza privada desde ESO y Bachillerato hasta Universidad, exámenes internacionales,
            Selectividad y transición al sector IT. Diagnóstico claro, plan de trabajo con fechas y
            un mentor que sostiene el proceso de principio a fin.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <PrimaryCTA href="/contacto/">Reservar diagnóstico</PrimaryCTA>
            <GhostCTA href="/clases-particulares/universidad/">Ver programas</GhostCTA>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <AuthorityChip label="Matemático" />
            <span aria-hidden="true" className="opacity-30">
              ·
            </span>
            <AuthorityChip label="+6 años enseñando" />
            <span aria-hidden="true" className="opacity-30">
              ·
            </span>
            <AuthorityChip label="Profesional del sector tecnológico" />
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: BookOpen, label: "ESO · Bachillerato" },
            { icon: Calendar, label: "PAU · IB · GCSE" },
            { icon: GraduationCap, label: "Universidad" },
            { icon: Code2, label: "Programación · IA" },
          ].map((it) => (
            <div
              key={it.label}
              className="nebula-card flex items-center gap-3 rounded-2xl px-4 py-3"
            >
              <it.icon className="h-5 w-5 text-action" />
              <span className="text-sm text-foreground/90">{it.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AuthorityChip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <ShieldCheck className="h-3.5 w-3.5 text-action" />
      {label}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*  Positioning                                                               */
/* -------------------------------------------------------------------------- */

function Positioning() {
  const cards = [
    {
      icon: Compass,
      title: "Diagnóstico antes de empezar",
      text: "Antes de la primera clase entendemos tu nivel real, tus lagunas y la distancia exacta hasta el objetivo. Nada de empezar a ciegas.",
    },
    {
      icon: ClipboardList,
      title: "Plan con fechas",
      text: "Cada sesión tiene un porqué dentro de un calendario claro: aprobar, subir nota, llegar al examen o cerrar un cambio profesional.",
    },
    {
      icon: Repeat,
      title: "Seguimiento que sostiene",
      text: "Material propio, ejercicios, simulacros y revisión semanal de progreso. No te quedas solo entre clase y clase.",
    },
  ];
  return (
    <section className="relative border-y border-white/5 bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <SectionLabel>Diferencia de Método Nebula</SectionLabel>
          <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
            No vendemos horas. <span className="nebula-gradient-text">Diseñamos planes.</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            El acompañamiento empieza entendiendo el punto de partida, continúa con un calendario y
            se revisa con evidencias de progreso. La clase no es una hora aislada: es una decisión
            dentro de un plan.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className="nebula-card group rounded-3xl p-7 transition-transform hover:-translate-y-1"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-action/15 ring-1 ring-action/30">
                <c.icon className="h-5 w-5 text-action" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Services                                                                  */
/* -------------------------------------------------------------------------- */

type Accent = "primary" | "gold" | "electric";

type Service = {
  tag: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  href: string;
  list: {
    label: string;
    items: string[];
  };
  pain: string[];
  promise: string;
  cta: string;
  accent: Accent;
  mini?: string[];
};

function Services() {
  const services: Service[] = [
    {
      tag: "Línea principal",
      icon: Atom,
      title: "Clases particulares",
      subtitle:
        "Para alumnos que necesitan ordenar una asignatura concreta y ganar criterio al resolver problemas.",
      href: "/clases-particulares/universidad/",
      list: {
        label: "Asignaturas",
        items: ["Matemáticas", "Física", "Estadística", "Química", "Economía", "Programación"],
      },
      pain: [
        "El alumno entiende partes sueltas, pero no sabe elegir el método.",
        "Los ejercicios cambian un poco y aparece el bloqueo.",
        "La asignatura necesita práctica corregida, no solo más teoría.",
      ],
      promise:
        "Se construye un mapa de la asignatura: qué entra, cómo se razona y qué tipos de problema conviene dominar primero.",
      cta: "Solicitar diagnóstico",
      accent: "primary",
    },
    {
      tag: "Con fecha cerrada",
      icon: Calendar,
      title: "Preparación con calendario",
      subtitle:
        "Para Selectividad, recuperaciones, exámenes universitarios e internacionales con una fecha que condiciona el plan.",
      href: "/clases-particulares/selectividad/",
      list: {
        label: "Procesos",
        items: [
          "Selectividad / PAU",
          "Exámenes universitarios",
          "Recuperaciones",
          "IB",
          "GCSE / IGCSE",
          "Pruebas de acceso",
        ],
      },
      pain: [
        "Hay mucho temario y pocas semanas reales.",
        "Faltan simulacros, prioridades y revisión de errores.",
        "El alumno necesita saber qué estudiar esta semana y qué dejar para después.",
      ],
      promise:
        "El calendario se convierte en una hoja de ruta con bloques, simulacros y ajustes semanales según progreso.",
      mini: [
        "Diagnóstico",
        "Calendario",
        "Bloques de contenido",
        "Simulacros",
        "Revisión",
        "Ajuste final",
      ],
      cta: "Solicitar diagnóstico",
      accent: "gold",
    },
    {
      tag: "Línea independiente",
      icon: BrainCircuit,
      title: "Formación tecnológica",
      subtitle:
        "Para programación académica, Python, SQL, datos, IA y transición IT con una ruta diferenciada.",
      href: "/clases-particulares/programacion-universidad/",
      list: {
        label: "Áreas",
        items: [
          "Python",
          "SQL",
          "Datos",
          "Inteligencia Artificial",
          "Git y APIs",
          "Proyectos",
          "Entrevistas técnicas",
        ],
      },
      pain: [
        "Hay demasiados cursos y poca secuencia.",
        "El código se copia, pero cuesta depurar y explicarlo.",
        "La transición profesional necesita proyecto, criterio y defensa técnica.",
      ],
      promise:
        "La formación tecnológica queda separada del apoyo académico general y se trabaja como ruta técnica con objetivos propios.",
      cta: "Solicitar diagnóstico",
      accent: "electric",
    },
  ];

  return (
    <section id="servicios" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <SectionLabel>Oferta organizada</SectionLabel>
            <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
              Tres entradas para no mezclar{" "}
              <span className="nebula-gradient-text">objetivos distintos</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            La formación académica mantiene prioridad visual. La línea tecnológica aparece como una
            ruta independiente cuando el objetivo es programación, datos o transición profesional.
          </p>
        </div>

        <div className="mt-14 space-y-6">
          {services.map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function accentClasses(a: Accent) {
  switch (a) {
    case "gold":
      return {
        dot: "bg-action",
        text: "text-action",
        ring: "ring-action/30",
        soft: "bg-action/10",
      };
    case "electric":
      return {
        dot: "bg-action",
        text: "text-action",
        ring: "ring-action/30",
        soft: "bg-action/10",
      };
    default:
      return {
        dot: "bg-action",
        text: "text-action",
        ring: "ring-action/30",
        soft: "bg-action/10",
      };
  }
}

function ServiceCard({ service }: { service: Service }) {
  const a = accentClasses(service.accent);
  const Icon = service.icon;
  return (
    <article className="nebula-card relative overflow-hidden rounded-3xl p-7 md:p-10">
      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-gradient-to-br from-primary/20 via-violet/10 to-transparent blur-3xl" />
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {service.tag}
            </span>
            <span className={`h-1.5 w-1.5 rounded-full ${a.dot}`} />
          </div>
          <div className="mt-4 flex items-start gap-4">
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${a.soft} ring-1 ${a.ring}`}
            >
              <Icon className={`h-6 w-6 ${a.text}`} />
            </div>
            <div className="min-w-0">
              <h3 className="font-display text-2xl font-semibold md:text-3xl">{service.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground md:text-base">{service.subtitle}</p>
            </div>
          </div>

          <div className="mt-7">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              {service.list.label}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {service.list.items.map((it: string) => (
                <span
                  key={it}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-foreground/85"
                >
                  {it}
                </span>
              ))}
            </div>
          </div>

          {service.mini && (
            <div className="mt-7">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Proceso
              </p>
              <ol className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {service.mini.map((m: string, i: number) => (
                  <li
                    key={m}
                    className="flex items-center gap-2 rounded-xl border border-white/8 bg-white/[0.02] px-3 py-2 text-xs"
                  >
                    <span className={`font-display text-sm font-semibold ${a.text}`}>0{i + 1}</span>
                    <span className="text-foreground/85">{m}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Encaje típico
            </p>
            <ul className="mt-3 space-y-2">
              {service.pain.map((p: string) => (
                <li key={p} className="flex items-start gap-2 text-sm text-foreground/80">
                  <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${a.text}`} />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Cómo trabajamos contigo
            </p>
            <p className="mt-2 text-base text-foreground">{service.promise}</p>
          </div>

          <div className="mt-auto">
            <PrimaryCTA href="/contacto/">{service.cta}</PrimaryCTA>
            <a
              href={service.href}
              className="ml-4 inline-flex items-center gap-2 text-sm font-medium text-link underline-offset-4 hover:underline"
            >
              Ver detalle
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/*  Method                                                                    */
/* -------------------------------------------------------------------------- */

function Method() {
  const steps = [
    {
      n: "01",
      icon: Compass,
      title: "Diagnóstico",
      text: "Revisión de nivel, temario, materiales, fecha y tipo de evaluación.",
    },
    {
      n: "02",
      icon: Target,
      title: "Objetivo",
      text: "Definición de prioridad: aprobar, subir nota, recuperar base o preparar una prueba.",
    },
    {
      n: "03",
      icon: ClipboardList,
      title: "Plan por bloques",
      text: "Orden semanal de contenidos, práctica y evidencias de progreso.",
    },
    {
      n: "04",
      icon: BookOpen,
      title: "Trabajo guiado",
      text: "Explicación, resolución acompañada y lectura de errores frecuentes.",
    },
    {
      n: "05",
      icon: LineChart,
      title: "Práctica y seguimiento",
      text: "Ejercicios, simulacros o tareas revisables entre sesiones.",
    },
    {
      n: "06",
      icon: Repeat,
      title: "Revisión",
      text: "Ajuste del plan cuando aparecen errores repetidos o cambios de calendario.",
    },
  ];
  return (
    <section id="metodo" className="relative border-y border-white/5 py-24">
      <div className="absolute inset-0 nebula-aurora opacity-60 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <SectionLabel>Cómo trabajamos</SectionLabel>
          <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
            El método de <span className="nebula-gradient-text">Método Nebula</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            El proceso se mantiene estable para que el alumno sepa qué se está trabajando y por qué.
            Lo que cambia es la intensidad, la materia y el calendario.
          </p>
        </div>

        <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => (
            <li key={s.n} className="nebula-card group relative rounded-3xl p-7">
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl font-bold text-action/80">{s.n}</span>
                <s.icon className="h-5 w-5 text-action" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              <div className="mt-6 nebula-hairline h-px w-full" />
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:flex-row md:items-center">
          <p className="text-sm text-muted-foreground">
            <span className="text-foreground">Preparación sin improvisación.</span> Método,
            calendario y seguimiento.
          </p>
          <PrimaryCTA href="/contacto/">Solicitar diagnóstico</PrimaryCTA>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Authority                                                                 */
/* -------------------------------------------------------------------------- */

function Authority() {
  const bullets = [
    "Graduado en Matemáticas.",
    "Máster en Big Data e Inteligencia Artificial.",
    "Experiencia profesional en tecnología.",
    "Más de 6 años dando clases.",
    "Alumnos desde ESO y Bachillerato hasta Universidad, exámenes internacionales y perfiles técnicos.",
    "Especialización en asignaturas difíciles y procesos exigentes.",
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <SectionLabel>Perfil de Método Nebula</SectionLabel>
            <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
              Formación con <span className="nebula-gradient-text">rigor académico</span> y visión
              real del sector tecnológico
            </h2>
            <p className="mt-5 text-base text-muted-foreground md:text-lg">
              No es lo mismo aprender con alguien que solo explica la asignatura que con alguien que
              la usa todos los días en el trabajo. Aquí entran la matemática, la ciencia, la
              programación y cómo se aplican de verdad fuera del aula.
            </p>
          </div>

          <div className="nebula-card nebula-glow relative overflow-hidden rounded-3xl p-8 md:p-10">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-to-br from-primary/30 via-violet/20 to-transparent blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-violet ring-1 ring-white/20">
                  <span className="font-display text-xl font-bold text-white">N</span>
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Perfil</p>
                  <p className="font-display text-lg font-semibold">
                    Mentor académico & profesional
                  </p>
                </div>
              </div>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-action" />
                    <span className="text-foreground/90">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-2">
                {["Matemáticas", "Física", "Química", "Python", "IA", "Cloud", "GMAT", "IB"].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-foreground/80"
                    >
                      {t}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Comparison                                                                */
/* -------------------------------------------------------------------------- */

function Comparison() {
  const academy = [
    "Grupos grandes",
    "Ritmo estándar",
    "Mismo material para todos",
    "Poca personalización",
    "Foco en cubrir temario",
    "Difícil seguimiento individual",
  ];
  const nebula = [
    "Enseñanza privada",
    "Diagnóstico individual",
    "Plan adaptado",
    "Material personalizado",
    "Foco en el objetivo",
    "Seguimiento y calendario",
    "Explicación profunda y práctica",
  ];
  return (
    <section className="border-y border-white/5 bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <SectionLabel>Método Nebula vs lo habitual</SectionLabel>
          <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
            ¿Por qué Método Nebula no funciona como una{" "}
            <span className="text-muted-foreground line-through decoration-action/40">
              academia
            </span>
            ?
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-white/8 bg-white/[0.02] p-7">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Academia tradicional
            </p>
            <h3 className="mt-2 font-display text-xl font-semibold text-foreground/70">
              Modelo de masas
            </h3>
            <ul className="mt-6 space-y-3">
              {academy.map((a) => (
                <li key={a} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/40" />
                  {a}
                </li>
              ))}
            </ul>
          </div>

          <div className="nebula-card nebula-glow rounded-3xl p-7">
            <div className="flex items-center gap-2">
              <NebulaLogo className="h-5 w-5" />
              <p className="text-xs uppercase tracking-[0.2em] text-spark">Modelo Método Nebula</p>
            </div>
            <h3 className="mt-2 font-display text-xl font-semibold">Enseñanza privada premium</h3>
            <ul className="mt-6 space-y-3">
              {nebula.map((n) => (
                <li key={n} className="flex items-start gap-3 text-sm text-foreground/90">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-action" />
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Testimonials                                                              */
/* -------------------------------------------------------------------------- */

function Testimonials() {
  const items = [
    {
      quote:
        "Contactamos con Nebula para ayudar a nuestro hijo Igor. Empezó ingeniería informática y no lo llevaba nada bien. Nos presentaron un método para aprender desde cero y han conseguido que Igor se interese mucho en la carrera. Contaremos con ellos para este curso y el siguiente. 100% recomendable.",
      name: "Luis",
      date: "Junio de 2026",
      meta: "Padre de alumno · Ingeniería Informática",
    },
    {
      quote:
        "Muy buen profesor, da muy buenos apuntes y su modelo de trabajo a largo plazo me ha servido mucho más que clases sueltas.",
      name: "Iván",
      date: "Junio de 2026",
      meta: "Alumno universitario",
    },
    {
      quote:
        "Contacté con Nebula para repaso de matemáticas de mi hija; la experiencia ha sido muy muy satisfactoria. Mi hija ha mejorado mucho con la asignatura y ahora disfruta y le gusta la materia. Saben transmitir bien al alumno, aportan los recursos necesarios y explican con paciencia los contenidos hasta asegurar su comprensión. Se preocupan por sus resultados. Lo recomiendo 100%.",
      name: "Cristina H L",
      date: "Junio de 2026",
      meta: "Madre de alumna · Matemáticas",
    },
    {
      quote:
        "Muy buena experiencia con Nebula. Explican los conceptos de forma clara y ordenada, incluso los temas más complejos. Hay paciencia para resolver dudas y se nota el dominio de la materia. Sus clases y material me han ayudado para preparar los exámenes de la uni y he ganado más confianza al hacer ejercicios y proyectos. Recomiendo totalmente sus clases.",
      name: "Álvaro Cebrián Sierra",
      date: "Junio de 2026",
      meta: "Alumno universitario",
    },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <SectionLabel>Resultados reales</SectionLabel>
            <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
              Historias de <span className="nebula-gradient-text">progreso</span>
            </h2>
          </div>
          <a
            href="https://www.tusclasesparticulares.com/profesores/nebula-lambda.htm"
            target="_blank"
            rel="noreferrer"
            className="text-xs uppercase tracking-[0.18em] text-muted-foreground underline-offset-4 transition-colors hover:text-link hover:underline"
          >
            Opiniones verificadas en TusClasesParticulares
          </a>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {items.map((t) => (
            <figure
              key={t.name}
              className="nebula-card flex h-full flex-col justify-between rounded-3xl p-7"
            >
              <div>
                <div className="flex items-center gap-1 text-spark">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">
                  "{t.quote}"
                </blockquote>
              </div>
              <figcaption className="mt-6 flex items-center justify-between gap-4">
                <span className="font-display text-sm font-semibold">{t.name}</span>
                <span className="text-xs text-muted-foreground">
                  {t.date} · {t.meta}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Programs                                                                  */
/* -------------------------------------------------------------------------- */

function Programs() {
  const programs = [
    {
      name: "Plan Asignatura",
      tagline:
        "Para dejar de ir a remolque de una asignatura y llegar al examen con criterio propio.",
      icon: FlaskConical,
      items: [
        "Diagnóstico inicial de la asignatura",
        "Clases semanales con objetivo claro",
        "Material y ejercicios propios",
        "Repaso de problemas tipo de examen",
        "Revisión final antes de la prueba",
      ],
      accent: "primary" as Accent,
    },
    {
      name: "Plan Examen",
      tagline: "Para IB, GCSE, Selectividad, GMAT o TFG/TFM cuando la fecha ya no se mueve.",
      icon: Calendar,
      items: [
        "Calendario realista hasta el día del examen",
        "Simulacros con corrección",
        "Seguimiento semanal escrito",
        "Priorización de temario por impacto",
        "Estrategia final y gestión del día D",
      ],
      accent: "gold" as Accent,
      featured: true,
    },
    {
      name: "Plan Tecnología",
      tagline: "Para programación académica, datos o transición IT con una ruta ordenada.",
      icon: BrainCircuit,
      items: [
        "Ruta personalizada a 3-6 meses",
        "Formación técnica enfocada (Python, SQL, Data, IA)",
        "Proyecto real para GitHub y portfolio",
        "Revisión de CV y LinkedIn",
        "Simulacros de entrevistas técnicas",
        "Soft skills y storytelling profesional",
      ],
      accent: "electric" as Accent,
    },
  ];
  return (
    <section id="programas" className="border-y border-white/5 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <SectionLabel>Elige tu camino</SectionLabel>
          <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
            Planes personalizados según{" "}
            <span className="nebula-gradient-text">objetivo, nivel y calendario</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            Tres marcos de trabajo. Uno se elige tras la llamada de diagnóstico, no antes: primero
            entendemos tu caso, luego proponemos el plan.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {programs.map((p) => {
            const a = accentClasses(p.accent);
            return (
              <article
                key={p.name}
                className={`nebula-card relative flex h-full flex-col overflow-hidden rounded-3xl p-8 ${p.featured ? "nebula-glow ring-1 ring-action/30" : ""}`}
              >
                {p.featured && (
                  <span className="absolute right-5 top-5 rounded-full border border-spark/40 bg-spark/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-spark">
                    Con fecha
                  </span>
                )}
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${a.soft} ring-1 ${a.ring}`}
                >
                  <p.icon className={`h-6 w-6 ${a.text}`} />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.tagline}</p>

                <ul className="mt-6 grow space-y-2.5">
                  {p.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm text-foreground/90">
                      <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${a.text}`} />
                      {it}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto border-t border-white/8 pt-6">
                  <p className="text-xs text-muted-foreground">
                    Planes personalizados según objetivo, nivel y calendario.
                  </p>
                  <a
                    href="/contacto/"
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-medium transition-colors hover:border-white/30 hover:bg-white/[0.06]"
                  >
                    Solicitar diagnóstico
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Contact                                                                   */
/* -------------------------------------------------------------------------- */

function Contact() {
  const { copied, copy } = useCopyPhone();
  return (
    <section id="contacto" className="relative py-24">
      <div className="absolute inset-0 nebula-aurora opacity-60 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl">
          <SectionLabel>Hablemos</SectionLabel>
          <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
            Empieza con una <span className="nebula-gradient-text">llamada de diagnóstico</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            Una conversación corta para entender tu objetivo, tu punto de partida y tu fecha. Si
            Método Nebula encaja, te enviamos una propuesta concreta. Si no, te decimos qué haríamos
            en tu lugar.
          </p>

          <div className="mt-8 space-y-3">
            <button
              type="button"
              onClick={copy}
              className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left transition-colors hover:border-white/25 hover:bg-white/[0.06]"
            >
              <div className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-action" />
                <div>
                  <p className="text-sm font-semibold">Copiar número de WhatsApp</p>
                  <p className="text-xs text-muted-foreground">
                    {WHATSAPP_NUMBER} · respuesta el mismo día
                  </p>
                </div>
              </div>
              {copied ? (
                <Check className="h-4 w-4 text-green-400" />
              ) : (
                <Copy className="h-4 w-4 text-muted-foreground" />
              )}
            </button>
            <a
              href={EMAIL_URL}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-white/25 hover:bg-white/[0.06]"
            >
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-action" />
                <div>
                  <p className="text-sm font-semibold">Email de admisiones</p>
                  <p className="text-xs text-muted-foreground">{EMAIL}</p>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-white/25 hover:bg-white/[0.06]"
            >
              <div className="flex items-center gap-3">
                <Instagram className="h-5 w-5 text-action" />
                <div>
                  <p className="text-sm font-semibold">@nebula.lambda</p>
                  <p className="text-xs text-muted-foreground">Instagram</p>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  FAQ                                                                       */
/* -------------------------------------------------------------------------- */

function FAQ() {
  const faqs = [
    {
      q: "¿Das clases online o presenciales?",
      a: "Trabajamos principalmente online para flexibilidad y eficiencia. Sesiones presenciales puntuales según ubicación y necesidad.",
    },
    {
      q: "¿Desde qué curso das clase?",
      a: "Trabajamos desde ESO en adelante: ESO, Bachillerato, Selectividad, programas internacionales, FP, Universidad y perfiles técnicos.",
    },
    {
      q: "¿Puedo preparar un examen con poco tiempo?",
      a: "Sí, pero el diagnóstico decide qué es realista. Diseñamos un plan honesto según fecha, nivel y temario.",
    },
    {
      q: "¿Ayudas con TFG/TFM?",
      a: "Sí, especialmente en TFG/TFM de áreas cuantitativas, data, IA, ingeniería o economía aplicada.",
    },
    {
      q: "¿Preparas entrevistas técnicas?",
      a: "Sí. Algoritmos, SQL, system design, casos de data/IA, comportamiento y simulacros completos.",
    },
    {
      q: "¿Las clases incluyen material?",
      a: "Sí. Apuntes, ejercicios, esquemas, simulacros y guías adaptadas a tu objetivo.",
    },
    {
      q: "¿Cómo sé qué plan necesito?",
      a: "La llamada de diagnóstico lo resuelve. Te proponemos el plan tras entender tu contexto.",
    },
    {
      q: "¿Cuánto cuesta?",
      a: "Los planes se personalizan según objetivo, alcance y calendario. Te enviamos una propuesta tras el diagnóstico.",
    },
    {
      q: "¿Puedo hacer una primera llamada de diagnóstico?",
      a: "Sí. Es el punto de partida. Es donde definimos si Método Nebula encaja con tu objetivo.",
    },
  ];
  return (
    <section className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-5 text-3xl font-semibold md:text-5xl">Preguntas frecuentes</h2>
        </div>

        <div className="mt-12 divide-y divide-white/8 overflow-hidden rounded-3xl border border-white/8 bg-white/[0.02]">
          {faqs.map((f, i) => (
            <FaqItem key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <PrimaryCTA href="/contacto/">Solicitar diagnóstico</PrimaryCTA>
        </div>
      </div>
    </section>
  );
}

function FaqItem({ q, a, defaultOpen }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-white/[0.02]"
      >
        <span className="text-base font-medium text-foreground">{q}</span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <div className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{a}</div>}
    </div>
  );
}
