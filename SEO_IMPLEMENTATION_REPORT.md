# Informe de implementacion SEO

Fecha de revision: 15 de julio de 2026.

## Resumen ejecutivo

Se ha completado la optimizacion SEO, estructura editorial, estilo, accesibilidad y conversion sobre el Vite/React estatico existente. No se ha rehecho la web, no se han creado imagenes ni videos nuevos y no se ha publicado ni hecho push.

El sitemap correcto para Google Search Console es:

`https://metodonebula.es/sitemap.xml`

En Search Console conviene retirar el envio incorrecto de `https://metodonebula.es/` como sitemap. La raiz es una pagina HTML, no un sitemap.

## Problemas encontrados

- Search Console tenia enviado al menos un sitemap incorrecto: `https://metodonebula.es/`.
- El sitemap real existe en `/sitemap.xml`, pero habia que dejar la generacion estatica, robots y metadatos alineados para que GSC lo lea sin ambiguedad.
- El SEO dependia de varios puntos dispersos: `site.json`, frontmatter Markdown, generador estatico y preview React.
- `og:image` podia terminar apuntando al favicon, lo que no aporta una imagen social real.
- La home necesitaba un H1 mas academico y una oferta mas jerarquizada.
- Servicios y categorias necesitaban mas contexto de decision: para quien es, problema, metodo, diferencial, aportacion del alumno, resultados razonables y siguiente paso.
- En 768 px la navegacion de escritorio podia provocar overflow; se ajusto el breakpoint.
- La home no usaba `PageShell`, asi que faltaba el skip link global.
- `/index.html` sigue resolviendo con `200 OK` en produccion; sin servidor no puede redirigirse de forma fiable desde el codigo estatico de GitHub Pages.

## Cambios realizados

### SEO tecnico

- `src/content/site.json` queda como fuente principal para paginas core, servicios y categorias.
- El frontmatter Markdown se mantiene como fuente de verdad para articulos.
- `src/lib/seo.ts` ya no fuerza `og:image` ni Twitter image si no hay una imagen real.
- `twitter:card` pasa a `summary` cuando no hay imagen social valida.
- `absoluteUrl` en `src/lib/site-data.ts` y `scripts/generate-static-site.mjs` ya no anade barra final a assets como `/favicon.svg`.
- Canonical, robots, JSON-LD, RSS, sitemap y HTML prerenderizado se regeneran de forma coherente.

### Home y conversion

- H1 recuperado con el enfoque de marca original: `Cuando la asignatura, el examen o la entrevista no admite improvisacion.`
- Oferta reordenada en tres lineas: clases particulares, preparacion con calendario y formacion tecnologica.
- CTA principal unificado: `Solicitar diagnostico`.
- Tecnologia separada de la linea academica para no mezclar promesas de servicio.

### Servicios

- Se anadieron campos estructurados: `differentiator`, `studentInput`, `reasonableOutcomes`, `nextStep`.
- Cada pagina de servicio muestra ahora problema, contenidos, metodo, diferencial, aportacion esperada del alumno, resultados razonables, lecturas relacionadas y siguiente paso.
- La pagina de servicios agrupa la oferta por clases particulares, preparacion con fecha y formacion tecnologica.

### Blog

- `/blog/` queda reorganizado con destacados manuales, guias pilar, categorias y articulos recientes.
- Cada categoria incluye H1, introduccion, metadatos, guia pilar y servicio relacionado.
- Los articulos enlazan a categoria, servicio relacionado y guia pilar cuando aplica.
- Los articulos largos incorporan indice interno basado en H2.

### Sitemap HTML y enlazado interno

- `/mapa-del-sitio/` agrupa paginas principales, servicios, categorias y articulos por categoria.
- Categorias apuntan a servicio relacionado y guia pilar.
- Articulos apuntan a categoria, servicio relacionado y contenido pilar.

### Estilo y accesibilidad

- Marca unificada como `Metodo Nebula` en navegacion y puntos clave.
- Navegacion mas breve.
- Menu movil con `aria-expanded`, cierre con Escape y bloqueo de scroll cuando esta abierto.
- Skip link visible al foco.
- Foco visible global.
- Tipografia con `clamp` para titulares principales.
- Respeto de `prefers-reduced-motion`.
- Reduccion de tarjetas anidadas y agrupaciones mas limpias.

## Archivos modificados

- `index.source.html`
- `scripts/generate-static-site.mjs`
- `src/components/site.tsx`
- `src/content/site.json`
- `src/lib/contact.ts`
- `src/lib/markdown.tsx`
- `src/lib/seo.ts`
- `src/lib/site-data.ts`
- `src/routes/blog.tsx`
- `src/routes/index.tsx`
- `src/routes/pages.tsx`
- `src/styles.css`

## Sitemap, robots y redirecciones

- Sitemap local generado: `dist/sitemap.xml`.
- URLs indexables en sitemap local: 55.
- Primer URL del sitemap: `https://metodonebula.es/`.
- Ultimo URL del sitemap: `https://metodonebula.es/contacto/`.
- Robots local generado: `dist/robots.txt`.
- Robots incluye: `Sitemap: https://metodonebula.es/sitemap.xml`.
- Produccion verificada:
  - `https://metodonebula.es/` -> `200 OK`.
  - `https://metodonebula.es/sitemap.xml` -> `200 OK`.
  - `https://metodonebula.es/robots.txt` -> `200 OK`.
  - `https://www.metodonebula.es/` -> `301` hacia `https://metodonebula.es/` y despues `200 OK`.
  - `https://metodonebula.es/index.html` -> `200 OK`.

## Validacion ejecutada

- `npm run lint` -> correcto, con 2 avisos existentes de Fast Refresh en `src/lib/router.tsx`.
- `npm run build` -> correcto, 56 paginas estaticas generadas.
- `npm run seo:validate` -> correcto, 56 HTML validados.
- Preview local `http://127.0.0.1:4173/` -> `200 OK`.
- Revision responsive con Playwright:
  - Rutas: `/`, `/clases-particulares/universidad/`, `/clases-particulares/matematicas-universidad/`, `/blog/`, `/blog/categoria/estadistica/`, `/blog/que-prueba-estadistica-utilizar-guia-test-correcto/`, `/mapa-del-sitio/`, `/contacto/`.
  - Anchos: 320, 375, 390, 768, 1024, 1280 y 1440 px.
  - Resultado: 56 combinaciones comprobadas, 0 fallos.
  - Comprobado: sin overflow horizontal, H1 unico, skip link presente, CTA visible y menu movil con Escape.

## Limitaciones y pendientes

- No se ha publicado. Para que produccion refleje estos cambios hace falta commit, push y despliegue.
- El bundle JS principal queda por encima de 500 kB minificado; no bloquea, pero conviene estudiar code splitting.
- `/index.html` no se puede redirigir limpiamente sin control de servidor; queda documentado como limitacion de GitHub Pages.
- Las recomendaciones de fusion, ampliacion o reenfoque editorial quedan documentadas en `SEO_CONTENT_AUDIT.md`; no se ha aplicado `noindex`, eliminacion ni redireccion automatica.
- El conector de navegador integrado no pudo ejecutarse por un error de entorno MCP (`missing field sandboxPolicy`); la comprobacion visual se hizo con Playwright local usando Microsoft Edge.
