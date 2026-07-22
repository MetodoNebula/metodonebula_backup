import { useEffect, useState } from "react";
import { ArrowRight, Instagram, Mail, MessageCircle } from "lucide-react";

import { trackEvent, trackScroll75 } from "../lib/analytics";
import { EMAIL, INSTAGRAM_URL, WHATSAPP_NUMBER } from "../lib/contact";
import { Link } from "../lib/router";

/* -------------------------------------------------------------------------- */
/*  Shared building blocks                                                    */
/* -------------------------------------------------------------------------- */

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-spark/30 bg-spark/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-spark">
      <span className="h-1.5 w-1.5 rounded-full bg-spark" />
      {children}
    </span>
  );
}

export function PrimaryCTA({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      onClick={() => {
        if (href === "/contacto/") {
          trackEvent("click_service_cta", { path: window.location.pathname });
          trackEvent("request_diagnosis", { path: window.location.pathname });
        }
      }}
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-action px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_10px_40px_-10px_oklch(0.62_0.22_265/0.7)] transition-all hover:translate-y-[-1px] hover:bg-action/90 ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}

export function GhostCTA({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-white/30 hover:bg-white/[0.05] ${className}`}
    >
      {children}
    </a>
  );
}

export function NebulaLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="ng" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2F6BFF" />
          <stop offset="60%" stopColor="#7C5CFF" />
          <stop offset="100%" stopColor="#D6B15E" />
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="14" fill="none" stroke="url(#ng)" strokeWidth="1.2" />
      <circle cx="16" cy="16" r="3" fill="url(#ng)" />
      <circle cx="26" cy="10" r="1.5" fill="#D6B15E" />
      <circle cx="6" cy="22" r="1" fill="#2CEBFF" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  Navbar                                                                    */
/* -------------------------------------------------------------------------- */

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/clases-particulares/", label: "Clases" },
  { href: "/preparacion-examenes/", label: "Exámenes" },
  { href: "/formacion-it/", label: "Formación IT" },
  { href: "/metodologia/", label: "Método" },
  { href: "/blog/", label: "Blog" },
  { href: "/contacto/", label: "Contacto" },
];

export function PageShell({ children }: { children: React.ReactNode }) {
  useEffect(() => trackScroll75(), []);
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <Navbar />
      <main id="contenido">{children}</main>
      <Footer />
    </div>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex min-h-11 items-center gap-2">
          <NebulaLogo className="h-7 w-7" />
          <span className="font-display text-lg font-semibold tracking-tight">Método Nebula</span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-link"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <PrimaryCTA href="/contacto/">Solicitar diagnóstico inicial</PrimaryCTA>
        </div>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex min-h-11 min-w-11 flex-col items-center justify-center rounded-md border border-white/10 p-2 lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          <div className="h-0.5 w-5 bg-foreground" />
          <div className="mt-1 h-0.5 w-5 bg-foreground" />
          <div className="mt-1 h-0.5 w-5 bg-foreground" />
        </button>
      </div>
      {open && (
        <div id="mobile-navigation" className="border-t border-white/5 bg-background/95 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground transition-colors hover:text-link"
              >
                {l.label}
              </Link>
            ))}
            <PrimaryCTA href="/contacto/" className="w-full">
              Solicitar diagnóstico inicial
            </PrimaryCTA>
          </div>
        </div>
      )}
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/*  Footer                                                                    */
/* -------------------------------------------------------------------------- */

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <NebulaLogo className="h-7 w-7" />
              <span className="font-display text-lg font-semibold">Método Nebula</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Enseñanza privada con diagnóstico, planificación, materiales y seguimiento desde ESO
              hasta Universidad.
            </p>
            <p className="mt-6 text-xs text-muted-foreground">
              Rigor académico con visión tecnológica.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Navegación</p>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ["/metodologia/", "Método"],
                ["/clases-particulares/", "Clases particulares"],
                ["/preparacion-examenes/", "Preparación de exámenes"],
                ["/formacion-it/", "Formación IT"],
                ["/sobre-nebula/", "Sobre Nebula"],
                ["/blog/", "Blog"],
                ["/mapa-del-sitio/", "Mapa del sitio"],
                ["/contacto/", "Contacto"],
              ].map(([h, l]) => (
                <li key={h}>
                  <Link to={h} className="text-link transition-colors hover:text-link">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Servicios</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/clases-particulares/calculo-universitario/" className="text-link">
                  Cálculo universitario
                </Link>
              </li>
              <li>
                <Link to="/clases-particulares/estadistica-psicologia-ade/" className="text-link">
                  Estadística aplicada
                </Link>
              </li>
              <li>
                <Link to="/clases-particulares/fisica-ingenieria/" className="text-link">
                  Física para Ingeniería
                </Link>
              </li>
              <li>
                <Link to="/preparacion-examenes/matematicas-selectividad/" className="text-link">
                  Matemáticas PAU
                </Link>
              </li>
              <li>
                <Link to="/formacion-it/python-sql-data-engineering/" className="text-link">
                  Python, SQL y datos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Contacto</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-link transition-colors hover:text-link"
                >
                  <Instagram className="h-4 w-4 text-action" />
                  @nebula.lambda
                </a>
              </li>
              <li>
                <span className="inline-flex items-center gap-2 text-muted-foreground">
                  <MessageCircle className="h-4 w-4 text-action" />
                  {WHATSAPP_NUMBER}
                </span>
              </li>
              <li>
                <span className="inline-flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4 text-action" />
                  {EMAIL}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Método Nebula. Todos los derechos reservados.</p>
          <a
            href="https://metodonebula.es/"
            className="text-link transition-colors hover:text-link"
          >
            metodonebula.es
          </a>
        </div>
      </div>
    </footer>
  );
}
