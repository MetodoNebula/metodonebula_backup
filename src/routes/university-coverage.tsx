import { useMemo, useState } from "react";
import { CheckCircle2, Search, Send } from "lucide-react";

import rawCoverage from "../content/university-coverage.json";
import { PageShell, PrimaryCTA, SectionLabel } from "../components/site";
import { usePageMeta } from "../lib/seo";
import { Link } from "../lib/router";

type Subject = {
  asignatura: string;
  codigo?: string;
  ects?: number | null;
  tipo?: string | null;
};

type Degree = { nombre: string; asignaturas: Subject[] };
type University = { universidad: string; carreras: Degree[] };
type CourseMatch = Subject & { university: string; degree: string };

const normalise = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

const catalog = (rawCoverage as University[])
  .map((university) => ({
    ...university,
    carreras: university.carreras
      .map((degree) => ({
        ...degree,
        asignaturas: degree.asignaturas.filter(
          (subject) => subject.asignatura && !/^GD_[A-Z]_\d+/.test(subject.asignatura),
        ),
      }))
      .filter((degree) => degree.asignaturas.length > 0),
  }))
  .filter((university) => university.carreras.length > 0)
  .sort((a, b) => a.universidad.localeCompare(b.universidad, "es"));

const allSubjects = catalog.flatMap((university) =>
  university.carreras.flatMap((degree) =>
    degree.asignaturas.map((subject) => ({
      ...subject,
      university: university.universidad,
      degree: degree.nombre,
    })),
  ),
);

export default function UniversityCoveragePage() {
  usePageMeta({
    title: "Comprueba tu asignatura universitaria | Campus Método Nebula",
    description:
      "Busca tu universidad, grado y asignatura para comprobar si está cubierta por el Campus universitario de Método Nebula.",
    path: "/campus/universidad/",
  });

  const [universityName, setUniversityName] = useState("");
  const [degreeName, setDegreeName] = useState("");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<CourseMatch | null>(null);

  const university = catalog.find((item) => item.universidad === universityName);
  const degree = university?.carreras.find((item) => item.nombre === degreeName);
  const scopedSubjects = useMemo<CourseMatch[]>(() => {
    if (degree && university) {
      return degree.asignaturas.map((subject) => ({
        ...subject,
        university: university.universidad,
        degree: degree.nombre,
      }));
    }
    return allSubjects;
  }, [degree, university]);

  const matches = useMemo(() => {
    const terms = normalise(query).trim();
    const source = degree || terms.length >= 2 ? scopedSubjects : [];
    return source
      .filter((subject) => !terms || normalise(subject.asignatura).includes(terms))
      .slice(0, 30);
  }, [degree, query, scopedSubjects]);

  const choose = (subject: CourseMatch) => {
    setSelected(subject);
    setQuery(subject.asignatura);
  };

  return (
    <PageShell>
      <header className="relative overflow-hidden border-b border-white/5">
        <div className="nebula-aurora pointer-events-none absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-7xl px-6 py-14 md:py-20">
          <nav aria-label="Migas de pan" className="text-xs text-muted-foreground">
            <Link to="/" className="text-link hover:text-link">Inicio</Link>
            <span className="mx-2">/</span>
            <Link to="/campus/" className="text-link hover:text-link">Campus</Link>
            <span className="mx-2">/</span>
            <span>Universidad</span>
          </nav>
          <div className="mt-8 max-w-4xl">
            <SectionLabel tone="gold">Campus universitario</SectionLabel>
            <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight md:text-6xl">
              Comprueba si tu asignatura está cubierta
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Busca por universidad, grado o asignatura. El catálogo reúne las materias
              universitarias disponibles en el Campus de Ciencias, Ingeniería, Economía y ADE.
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="nebula-card rounded-3xl p-6 md:p-8">
            <h2 className="font-display text-2xl font-semibold">Encuentra tu asignatura</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Puedes seleccionar tu universidad y grado, o escribir el nombre de la materia.
            </p>
            <div className="mt-7 grid gap-4 md:grid-cols-2">
              <label className="text-sm font-medium text-foreground">
                Universidad
                <select
                  value={universityName}
                  onChange={(event) => {
                    setUniversityName(event.target.value);
                    setDegreeName("");
                    setSelected(null);
                  }}
                  className="mt-2 w-full rounded-xl border border-white/15 bg-background px-3 py-3 text-sm text-foreground"
                >
                  <option value="">Selecciona una universidad</option>
                  {catalog.map((item) => <option key={item.universidad}>{item.universidad}</option>)}
                </select>
              </label>
              <label className="text-sm font-medium text-foreground">
                Grado
                <select
                  value={degreeName}
                  disabled={!university}
                  onChange={(event) => {
                    setDegreeName(event.target.value);
                    setSelected(null);
                  }}
                  className="mt-2 w-full rounded-xl border border-white/15 bg-background px-3 py-3 text-sm text-foreground disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">{university ? "Selecciona un grado" : "Elige antes universidad"}</option>
                  {university?.carreras.map((item) => <option key={item.nombre}>{item.nombre}</option>)}
                </select>
              </label>
            </div>
            <label className="mt-4 block text-sm font-medium text-foreground">
              Asignatura
              <span className="relative mt-2 block">
                <Search className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <input
                  value={query}
                  onChange={(event) => {
                    setQuery(event.target.value);
                    setSelected(null);
                  }}
                  placeholder="Ej.: Cálculo, Estadística, Microeconomía…"
                  className="w-full rounded-xl border border-white/15 bg-background py-3 pr-3 pl-10 text-sm text-foreground placeholder:text-muted-foreground"
                />
              </span>
            </label>

            <div className="mt-6" aria-live="polite">
              {!degree && query.trim().length < 2 ? (
                <p className="text-sm text-muted-foreground">Selecciona un grado o escribe al menos dos letras para buscar.</p>
              ) : matches.length ? (
                <ul className="divide-y divide-white/8 overflow-hidden rounded-2xl border border-white/8">
                  {matches.map((subject) => (
                    <li key={`${subject.university}-${subject.degree}-${subject.codigo}-${subject.asignatura}`}>
                      <button
                        type="button"
                        onClick={() => choose(subject)}
                        className="w-full px-4 py-4 text-left transition-colors hover:bg-spark/10"
                      >
                        <span className="block font-medium text-foreground">{subject.asignatura}</span>
                        <span className="mt-1 block text-xs text-muted-foreground">
                          {subject.degree} · {subject.university}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-muted-foreground">No hay coincidencias en el catálogo con esos filtros.</p>
              )}
            </div>
          </section>

          <aside className="rounded-3xl border border-spark/25 bg-spark/[0.06] p-6 md:p-8">
            {selected ? (
              <>
                <CheckCircle2 className="h-8 w-8 text-spark" />
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-spark">Asignatura cubierta</p>
                <h2 className="mt-3 font-display text-2xl font-semibold">{selected.asignatura}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Esta asignatura figura en el catálogo actual del Campus universitario.
                </p>
                <dl className="mt-6 space-y-3 text-sm">
                  <div><dt className="text-muted-foreground">Universidad</dt><dd className="mt-1 font-medium">{selected.university}</dd></div>
                  <div><dt className="text-muted-foreground">Grado</dt><dd className="mt-1 font-medium">{selected.degree}</dd></div>
                  {selected.codigo ? <div><dt className="text-muted-foreground">Código</dt><dd className="mt-1 font-medium">{selected.codigo}</dd></div> : null}
                  {selected.ects ? <div><dt className="text-muted-foreground">Créditos</dt><dd className="mt-1 font-medium">{selected.ects} ECTS</dd></div> : null}
                </dl>
              </>
            ) : (
              <>
                <CheckCircle2 className="h-8 w-8 text-spark" />
                <h2 className="mt-5 font-display text-2xl font-semibold">Tu búsqueda, en un clic</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Al elegir una asignatura verás si figura en la cobertura actual del Campus y sus datos de referencia.
                </p>
              </>
            )}
            <div className="mt-8 border-t border-spark/20 pt-6">
              <p className="text-sm leading-relaxed text-muted-foreground">
                ¿No aparece tu asignatura o tienes dudas sobre el encaje? Indica grado, materia y convocatoria para revisarlo contigo.
              </p>
              <PrimaryCTA href="/contacto/" className="mt-5 w-full">
                Solicitar revisión <Send className="h-4 w-4" />
              </PrimaryCTA>
            </div>
          </aside>
        </div>
      </main>
    </PageShell>
  );
}
