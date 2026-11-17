import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronDown,
  GraduationCap,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import "katex/dist/katex.min.css";
import { Footer, Navbar, PrimaryCTA } from "../components/site";
import { EMAIL, WHATSAPP_NUMBER } from "../lib/contact";
import { bayesEquationHtml, bayesResultHtml } from "../lib/landing-math";
import { siteData } from "../lib/site-data";
import { usePageMeta } from "../lib/seo";

const subjects = [
  {
    symbol: "ƒ",
    title: "Clases particulares",
    detail: "Matemáticas, Física, Estadística, Química, Economía y Programación.",
    href: "/clases-particulares/",
    tag: "ESO · Bachillerato · Universidad",
  },
  {
    symbol: "↗",
    title: "Preparación de exámenes",
    detail: "Prioridades, calendario y simulacros para llegar preparado a tu fecha.",
    href: "/preparacion-examenes/",
    tag: "PAU · Recuperaciones · IB · GCSE",
  },
  {
    symbol: "σ",
    title: "Formación IT",
    detail: "Python, SQL, datos e IA. Una ruta práctica con proyectos y criterio técnico.",
    href: "/formacion-it/",
    tag: "Aprender · Construir · Explicar",
  },
  {
    symbol: "{ }",
    title: "Preparación de entrevistas",
    detail: "Simulacros técnicos, revisión de CV y defensa de tus proyectos.",
    href: "#entrevistas",
    tag: "Técnica · Comunicación · Confianza",
  },
];

const faqs = [
  [
    "¿También preparáis entrevistas y TFG/TFM?",
    "Sí. Preparamos entrevistas técnicas, proyectos, CV y comunicación profesional. En TFG/TFM ofrecemos orientación metodológica, revisión y preparación de la defensa para que desarrolles y expliques tu propio trabajo.",
  ],
  [
    "¿Las clases incluyen material?",
    "Sí. Trabajamos con apuntes, ejercicios, esquemas y simulacros adaptados al objetivo. El campus reúne teoría y práctica de Matemáticas, Física y Química para continuar estudiando.",
  ],
  [
    "¿Para qué niveles son las clases?",
    "Desde ESO y Bachillerato hasta Universidad. También preparamos Selectividad / PAU, IB, GCSE e IGCSE. El diagnóstico permite adaptar el nivel y el material a cada caso.",
  ],
  [
    "¿Cómo funcionan las clases online?",
    "Trabajamos con explicación, resolución guiada y práctica adaptada a tu asignatura. El plan combina las sesiones con material propio, ejercicios y revisión del progreso.",
  ],
  [
    "¿Puedo preparar un examen con poco tiempo?",
    "Sí, pero primero valoramos qué es realista según tu nivel, el temario y la fecha. Priorizamos contenidos y práctica para aprovechar el tiempo disponible.",
  ],
  [
    "¿Cuánto cuestan las clases?",
    "La propuesta se personaliza según objetivo, nivel, alcance y calendario. Tras el diagnóstico te explicamos el plan y su precio antes de empezar.",
  ],
  [
    "¿Tengo que saber qué plan necesito?",
    "No. Cuéntanos qué estudias, qué te está costando y cuándo necesitas estar preparado. Con esa información te recomendamos cómo trabajar.",
  ],
];

export default function NebulaLanding() {
  const page = siteData.corePages.find((item) => item.kind === "home")!;
  usePageMeta({ title: page.title, description: page.description, path: page.path });
  return (
    <div className="landing min-h-screen bg-background text-foreground">
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <Navbar />
      <main id="contenido">
        <section className="landing-hero">
          <div className="landing-wrap hero-layout">
            <div className="hero-copy">
              <p className="editorial-label">
                <span /> CLASES PARTICULARES · PREPARACIÓN ACADÉMICA
              </p>
              <h1>
                Entender cambia
                <br />
                la forma de <em>avanzar.</em>
              </h1>
              <p className="hero-intro">Clases particulares con rigor académico y atención real.</p>
              <div className="hero-authority" aria-label="Formación y experiencia docente">
                <p>FORMACIÓN Y EXPERIENCIA DETRÁS DE CADA CLASE</p>
                <div className="hero-authority-grid">
                  <span>
                    <GraduationCap size={17} aria-hidden="true" /> Graduado en Matemáticas
                  </span>
                  <span>
                    <GraduationCap size={17} aria-hidden="true" /> Máster en Big Data e IA
                  </span>
                  <span>
                    <ShieldCheck size={17} aria-hidden="true" /> Más de 6 años enseñando
                  </span>
                </div>
              </div>
              <div className="hero-actions">
                <PrimaryCTA href="/contacto/">Solicitar diagnóstico</PrimaryCTA>
                <a className="editorial-link" href="#asignaturas">
                  Explorar los programas <ArrowRight size={16} />
                </a>
              </div>
              <a
                className="hero-review-link"
                href="https://www.tusclasesparticulares.com/profesores/nebula-lambda.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Leer opiniones de alumnos <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
            <StudyNotebook />
          </div>
          <div className="landing-wrap trust-strip">
            <div>
              <strong>Diagnóstico inicial</strong>
              <span>entendemos el punto de partida</span>
            </div>
            <div>
              <strong>Material y práctica</strong>
              <span>ejercicios adaptados a cada objetivo</span>
            </div>
            <div>
              <strong>Seguimiento continuo</strong>
              <span>revisamos el progreso y ajustamos el plan</span>
            </div>
          </div>
        </section>

        <a className="campus-promo landing-wrap" href="/campus/">
          <BookOpen size={24} />
          <div>
            <span className="editorial-label">NOVEDAD · CAMPUS PARA GCSE, IB Y UNIVERSIDAD</span>
            <p>
              Rutas de Maths, Physics y Chemistry para GCSE, IGCSE e IB, y nuevos recorridos
              universitarios de Ciencias, Ingeniería, Economía y ADE.
            </p>
          </div>
          <span className="campus-promo-link">
            Ver el Campus <ArrowUpRight size={18} />
          </span>
        </a>

        <section id="asignaturas" className="landing-section landing-wrap">
          <div className="section-heading">
            <div>
              <p className="editorial-label">01 / TU PUNTO DE PARTIDA</p>
              <h2>
                Tu objetivo marca el camino.
                <br />
                <span>El método permanece.</span>
              </h2>
            </div>
            <p>
              Del apoyo académico al siguiente paso profesional. Elige tu punto de partida; nosotros
              te ayudamos a ordenar el camino.
            </p>
          </div>
          <div className="subject-grid">
            {subjects.map((s) => (
              <a className="subject-card" href={s.href} key={s.title}>
                <div className="subject-card-top">
                  <span className="subject-symbol" aria-hidden="true">
                    {s.symbol}
                  </span>
                  <ArrowUpRight size={20} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.detail}</p>
                <span className="subject-tag">{s.tag}</span>
              </a>
            ))}
          </div>
          <div className="subject-more">
            <p>
              Clases de <a href="/clases-particulares/matematicas-universidad/">Matemáticas</a>,{" "}
              <a href="/clases-particulares/fisica-ingenieria/">Física</a>,{" "}
              <a href="/clases-particulares/estadistica-universidad/">Estadística</a>,{" "}
              <a href="/clases-particulares/quimica/">Química</a>,{" "}
              <a href="/clases-particulares/economia-ade/">Economía</a> y{" "}
              <a href="/clases-particulares/programacion-universidad/">Programación</a>.
            </p>
            <a className="editorial-link" href="/clases-particulares/">
              Ver todos los niveles <ArrowRight size={16} />
            </a>
          </div>
          <a className="exam-band" href="/preparacion-examenes/">
            <div className="exam-band-icon">
              <GraduationCap size={27} />
            </div>
            <div>
              <span className="editorial-label">¿TIENES UNA FECHA EN EL CALENDARIO?</span>
              <h3>Prepara tu próximo examen con un plan.</h3>
              <p>Selectividad / PAU · Recuperaciones · Universidad · IB · GCSE</p>
            </div>
            <ArrowUpRight className="exam-band-arrow" size={24} />
          </a>
        </section>

        <section id="metodo" className="method-section landing-section">
          <div className="landing-wrap method-layout">
            <div>
              <p className="editorial-label">02 / EL MÉTODO NEBULA</p>
              <h2>
                No son horas sueltas.
                <br />
                <span>Es una dirección clara.</span>
              </h2>
              <p className="section-description">
                Cada clase responde a una pregunta: ¿qué necesitas comprender y practicar ahora para
                acercarte a tu objetivo?
              </p>
              <a className="editorial-link" href="/metodologia/">
                Conoce el método <ArrowRight size={16} />
              </a>
              <div className="method-note">
                <BookOpen size={20} />
                <p>
                  Material propio.
                  <br />
                  <strong>Aprendizaje que continúa entre clases.</strong>
                </p>
              </div>
            </div>
            <ol className="method-timeline">
              {[
                [
                  "01",
                  "Entendemos tu punto de partida",
                  "Revisamos nivel, temario y bloqueos. Antes de empezar, sabemos qué necesita atención.",
                ],
                [
                  "02",
                  "Trazamos un plan contigo",
                  "Ordenamos prioridades, contenidos y calendario. Cada sesión tiene un objetivo concreto.",
                ],
                [
                  "03",
                  "Practicamos con sentido",
                  "Explicaciones claras, problemas guiados y ejercicios que ayudan a pensar por cuenta propia.",
                ],
                [
                  "04",
                  "Revisamos y ajustamos",
                  "Analizamos errores y avances. El plan evoluciona contigo, semana a semana.",
                ],
              ].map(([number, title, description]) => (
                <li key={number}>
                  <span className="step-number">{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="landing-section landing-wrap mentor-layout">
          <div className="mentor-card">
            <div className="mentor-monogram" aria-hidden="true">
              N<span>·</span>
            </div>
            <p className="editorial-label">DETRÁS DE MÉTODO NEBULA</p>
            <h3>
              Rigor al enseñar.
              <br />
              <span>Cercanía al acompañar.</span>
            </h3>
            <div className="mentor-credentials">
              <p>
                <Check size={16} /> Graduado en Matemáticas
              </p>
              <p>
                <Check size={16} /> Máster en Big Data e Inteligencia Artificial
              </p>
              <p>
                <Check size={16} /> Experiencia profesional en tecnología
              </p>
            </div>
          </div>
          <div>
            <p className="editorial-label">03 / ACOMPAÑAMIENTO REAL</p>
            <h2>
              Exigencia con el método.
              <br />
              <span>Paciencia contigo.</span>
            </h2>
            <p className="section-description">
              A veces no necesitas más teoría, sino una explicación que encaje. Otras, una base más
              sólida y alguien que te ayude a ordenar el camino.
            </p>
            <p className="section-description">
              Más de seis años trabajando con alumnos de ESO, Bachillerato y Universidad, con
              material adaptado y atención al razonamiento detrás de cada respuesta.
            </p>
            <a className="editorial-link" href="/sobre-nebula/">
              Conoce quién te acompaña <ArrowRight size={16} />
            </a>
          </div>
        </section>

        <section className="testimonial-section landing-section">
          <div className="landing-wrap">
            <div className="section-heading">
              <div>
                <p className="editorial-label">04 / EN SUS PALABRAS</p>
                <h2>
                  Cuando empiezas a entender,
                  <br />
                  <span>algo cambia.</span>
                </h2>
              </div>
              <a
                className="editorial-link"
                href="https://www.tusclasesparticulares.com/profesores/nebula-lambda.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Leer las opiniones <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="review-grid">
              <figure className="review-featured">
                <span className="quote-mark" aria-hidden="true">
                  “
                </span>
                <blockquote>
                  Muy buen profesor, da muy buenos apuntes y su modelo de trabajo a largo plazo me
                  ha servido mucho más que clases sueltas.
                </blockquote>
                <figcaption>
                  <span className="review-avatar" aria-hidden="true">
                    I
                  </span>
                  <div>
                    <strong>Iván</strong>
                    <span>Alumno universitario · Junio de 2026</span>
                  </div>
                </figcaption>
              </figure>
              <figure className="review-secondary">
                <span className="quote-mark" aria-hidden="true">
                  “
                </span>
                <blockquote>
                  Muy buena experiencia con Nebula. Explican los conceptos de forma clara y
                  ordenada, incluso los temas más complejos. Hay paciencia para resolver dudas y se
                  nota el dominio de la materia.
                </blockquote>
                <figcaption>
                  <span className="review-avatar" aria-hidden="true">
                    Á
                  </span>
                  <div>
                    <strong>Álvaro Cebrián Sierra</strong>
                    <span>Alumno universitario · Extracto de su opinión</span>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section id="programas" className="landing-section landing-wrap">
          <div className="section-heading">
            <div>
              <p className="editorial-label">UN PLAN, NO CLASES AISLADAS</p>
              <h2>
                La estructura que necesitas.
                <br />
                <span>La atención que mereces.</span>
              </h2>
            </div>
            <p>
              Diagnóstico individual, material adaptado y seguimiento. Elegimos el plan después de
              conocer tu situación.
            </p>
          </div>
          <div className="plan-grid">
            {[
              {
                title: "Plan Asignatura",
                text: "Comprender y ganar autonomía durante el curso.",
                items: [
                  "Clases semanales con objetivo claro",
                  "Material propio y práctica corregida",
                  "Problemas de examen y revisión final",
                ],
              },
              {
                title: "Plan Examen",
                text: "Un calendario para una fecha que ya está marcada.",
                items: [
                  "Priorización del temario y simulacros",
                  "Seguimiento semanal del progreso",
                  "Estrategia y revisión antes de la prueba",
                ],
              },
              {
                title: "Plan Tecnología",
                text: "Una ruta técnica con un proyecto que puedas defender.",
                items: [
                  "Python, SQL, datos e inteligencia artificial",
                  "Proyecto para GitHub y portfolio",
                  "CV, LinkedIn y simulacros de entrevistas",
                ],
              },
            ].map((plan) => (
              <article key={plan.title}>
                <h3>{plan.title}</h3>
                <p>{plan.text}</p>
                <ul>
                  {plan.items.map((item) => (
                    <li key={item}>
                      <Check size={15} />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="plan-footnote">
            Planes personalizados según objetivo, nivel y calendario.{" "}
            <a href="/contacto/">
              Solicitar diagnóstico <ArrowRight size={14} />
            </a>
          </p>
        </section>

        <section id="entrevistas" className="landing-wrap professional-band">
          <div>
            <p className="editorial-label">TU SIGUIENTE PASO PROFESIONAL</p>
            <h2>
              Sabes hacerlo.
              <br />
              <span>Aprende a demostrarlo.</span>
            </h2>
            <p>
              Preparación de entrevistas técnicas: algoritmos, SQL, diseño de sistemas, casos de
              datos e IA. Simulacros, comunicación y defensa de proyectos para explicar con claridad
              cómo piensas.
            </p>
            <a className="editorial-link" href="/contacto/">
              Preparar mi entrevista <ArrowRight size={16} />
            </a>
          </div>
          <div>
            <p className="editorial-label">ACOMPAÑAMIENTO TFG / TFM</p>
            <h3>De la idea a una defensa sólida.</h3>
            <p>
              Orientación en metodología, análisis y revisión para trabajos de áreas cuantitativas,
              ingeniería, economía, datos e IA. Acompañamiento para desarrollar tu propio trabajo y
              defenderlo con criterio.
            </p>
            <a className="editorial-link" href="/tfg-tfm/">
              Ver acompañamiento TFG / TFM <ArrowRight size={16} />
            </a>
          </div>
        </section>

        <section className="landing-wrap resource-band">
          <div className="resource-icon">
            <BookOpen size={28} />
          </div>
          <div>
            <p className="editorial-label">EL APRENDIZAJE SIGUE AQUÍ</p>
            <h2>Un campus para seguir practicando.</h2>
            <p>
              Teoría, ejercicios y exámenes resueltos de Matemáticas, Física y Química. Disponible
              para GCSE, IB y Universidad: Ciencias, Ingeniería, Economía y ADE.
            </p>
          </div>
          <a className="editorial-link" href="/campus/">
            Explorar el campus <ArrowRight size={16} />
          </a>
        </section>

        <section className="landing-section landing-wrap faq-layout">
          <div>
            <p className="editorial-label">ANTES DE EMPEZAR</p>
            <h2>
              Las cosas claras.
              <br />
              <span>Desde el principio.</span>
            </h2>
            <p className="section-description">
              Lo que conviene saber antes de dar el primer paso.
            </p>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>
                  {question}
                  <ChevronDown size={18} />
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="contacto" className="landing-wrap contact-section">
          <div className="contact-orbit" aria-hidden="true" />
          <div className="contact-copy">
            <p className="editorial-label">TU SIGUIENTE PASO</p>
            <h2>
              El primer paso no es otra clase.
              <br />
              <span>Es entender qué necesitas.</span>
            </h2>
            <p>
              Cuéntanos tu asignatura, tu nivel y tu fecha.
              <br />A partir de ahí, construimos un plan contigo.
            </p>
            <div className="hero-actions">
              <PrimaryCTA href="/contacto/">Solicitar diagnóstico inicial</PrimaryCTA>
              <a
                className="editorial-link"
                href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={18} /> Hablemos por WhatsApp
              </a>
            </div>
            <a className="contact-email" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
          </div>
        </section>
        <div className="landing-wrap specialist-links">
          <span>¿Buscas otro tipo de acompañamiento?</span>
          <a href="/tfg-tfm/">
            TFG / TFM <ArrowUpRight size={14} />
          </a>
          <a href="/formacion-it/">
            Formación tecnológica <ArrowUpRight size={14} />
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function StudyNotebook() {
  return (
    <div
      className="learning-lab"
      aria-label="Ejemplo de probabilidad condicionada explicado paso a paso"
    >
      <div className="lab-topline">
        <span className="lab-signal" /> MÉTODO NEBULA <span>CASO RESUELTO / ESTADÍSTICA</span>
      </div>
      <div className="lab-content">
        <div className="lab-case">
          <span>
            PROBABILIDAD CONDICIONADA <b>01 / 01</b>
          </span>
          <strong>Una alerta no siempre significa un defecto.</strong>
          <p>
            Un detector acierta en el 95 % de las piezas defectuosas, pero da falsas alarmas en el
            10 % de las piezas sin defecto. Si el 2 % de la producción tiene defectos, ¿qué
            significa una alerta?
          </p>
        </div>
        <div className="lab-population">
          <div className="lab-population-top">
            <span>DE 1.000 PIEZAS</span>
            <span>MODELO ILUSTRATIVO</span>
          </div>
          <div className="lab-population-row">
            <span className="lab-population-good" />
            <span className="lab-population-bad" />
          </div>
          <div className="lab-population-legend">
            <span>
              <i className="good" />
              980 sin defecto
            </span>
            <span>
              <i className="bad" />
              20 con defecto
            </span>
          </div>
        </div>
        <div className="lab-branches">
          <div>
            <span>20 CON DEFECTO</span>
            <strong>19 alertas reales</strong>
            <small>95 % de 20</small>
          </div>
          <div>
            <span>980 SIN DEFECTO</span>
            <strong>98 falsas alarmas</strong>
            <small>10 % de 980</small>
          </div>
        </div>
        <div className="lab-bayes" aria-label="Cálculo con el teorema de Bayes">
          <span>TEOREMA DE BAYES</span>
          <div dangerouslySetInnerHTML={{ __html: bayesEquationHtml }} />
        </div>
        <div className="lab-result">
          <span className="lab-result-icon">
            <Check size={17} />
          </span>
          <div>
            <span>PROBABILIDAD AL RECIBIR UNA ALERTA</span>
            <strong dangerouslySetInnerHTML={{ __html: bayesResultHtml }} />
          </div>
        </div>
      </div>
      <div className="lab-foot">
        <span>El dato decisivo es la tasa de defectos inicial.</span>
        <span>RAZONAMIENTO &gt; FÓRMULA</span>
      </div>
    </div>
  );
}
