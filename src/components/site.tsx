import { useState } from "react";
import { ArrowRight, Instagram, Mail, MessageCircle } from "lucide-react";

import { EMAIL, EMAIL_URL, INSTAGRAM_URL, WHATSAPP_NUMBER, useCopyPhone } from "../lib/contact";
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
  { href: "/metodologia/", label: "Método" },
  { href: "/clases-particulares/universidad/", label: "Servicios" },
  { href: "/sobre-nebula/", label: "Sobre Nebula" },
  { href: "/blog/", label: "Blog" },
  { href: "/contacto/", label: "Contacto" },
];

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <NebulaLogo className="h-7 w-7" />
          <span className="font-display text-lg font-semibold tracking-tight">Nebula</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
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
        <div className="hidden md:block">
          <PrimaryCTA href="/contacto/">Reservar diagnóstico</PrimaryCTA>
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-md border border-white/10 p-2 md:hidden"
          aria-label="Menu"
        >
          <div className="h-0.5 w-5 bg-foreground" />
          <div className="mt-1 h-0.5 w-5 bg-foreground" />
          <div className="mt-1 h-0.5 w-5 bg-foreground" />
        </button>
      </div>
      {open && (
        <div className="border-t border-white/5 bg-background/95 md:hidden">
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
              Reservar diagnóstico
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
  const { copy } = useCopyPhone();
  return (
    <footer className="border-t border-white/5 bg-background py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <NebulaLogo className="h-7 w-7" />
              <span className="font-display text-lg font-semibold">Nebula</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Enseñanza privada premium desde ESO hasta Universidad y objetivos profesionales
              exigentes.
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
                ["/clases-particulares/universidad/", "Clases desde ESO"],
                ["/sobre-nebula/", "Sobre Nebula"],
                ["/blog/", "Blog"],
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
                <button
                  onClick={copy}
                  className="inline-flex items-center gap-2 text-link transition-colors hover:text-link"
                >
                  <MessageCircle className="h-4 w-4 text-action" />
                  {WHATSAPP_NUMBER}
                </button>
              </li>
              <li>
                <a
                  href={EMAIL_URL}
                  className="inline-flex items-center gap-2 text-link transition-colors hover:text-link"
                >
                  <Mail className="h-4 w-4 text-action" />
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Nebula. Todos los derechos reservados.</p>
          <div className="flex gap-5">
            <a href="/contacto/" className="text-link transition-colors hover:text-link">
              Aviso legal
            </a>
            <a href="/contacto/" className="text-link transition-colors hover:text-link">
              Privacidad
            </a>
            <a href="/contacto/" className="text-link transition-colors hover:text-link">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* -------------------------------------------------------------------------- */
/*  Floating WhatsApp                                                         */
/* -------------------------------------------------------------------------- */

export function WhatsAppFloat() {
  const { copied, copy } = useCopyPhone();
  return (
    <button
      onClick={copy}
      aria-label="Copiar número de WhatsApp"
      className="fixed bottom-6 right-6 z-40 inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/15 bg-background/80 px-4 py-3 text-sm font-medium shadow-[0_10px_40px_-10px_oklch(0.62_0.22_265/0.8)] backdrop-blur-md transition-all hover:translate-y-[-1px] hover:border-white/30"
    >
      <MessageCircle className="h-4 w-4 text-action" />
      {copied ? "Copiado" : "Copiar teléfono"}
    </button>
  );
}
