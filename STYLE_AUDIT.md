# Auditoria de estilo, UX y accesibilidad

Fecha: 15 de julio de 2026.

## Jerarquia

Estado actual:
- La home tiene un H1 academico y unico.
- Las paginas core, servicios, categorias y articulos mantienen H1 unico.
- La oferta de la home se separa en clases particulares, preparacion con calendario y formacion tecnologica.

Mejora aplicada:
- Menos ruido de etiquetas.
- Titulares orientados a intencion de busqueda y decision.
- Tecnologia separada de la promesa academica principal.

Pendiente:
- Anadir capturas, esquemas reales o recursos visuales si se crean activos propios.

## Tipografia

Estado actual:
- Se introducen reglas globales con `clamp` para H1, H2 y H3.
- Se evita escalar texto directamente con el ancho de viewport.
- Se mantiene legibilidad en 320, 375, 390, 768, 1024, 1280 y 1440 px.

Pendiente:
- Revisar densidad de articulos largos con datos de comportamiento real.

## Color y foco

Estado actual:
- Se conserva la identidad visual existente.
- Se refuerza `:focus-visible` con outline claro.
- Se evita depender solo del hover.

Pendiente:
- Medir contraste final si se incorporan nuevos colores o activos.

## Espaciado y tarjetas

Estado actual:
- Se reducen tarjetas repetidas y tarjetas anidadas en servicios.
- Las agrupaciones se presentan como bloques de contenido mas directos.
- Los elementos de accion mantienen tamanos estables.

Pendiente:
- Simplificar mas las listas si futuras analiticas muestran baja interaccion.

## Navegacion

Estado actual:
- Navegacion breve: Inicio, Clases, Examenes, Metodo, Sobre Nebula, Blog, Contacto.
- Marca visible como `Metodo Nebula`.
- Menu movil con `aria-controls`, `aria-expanded`, cierre con Escape y bloqueo de scroll.
- El breakpoint de navegacion se ajusta a `lg` para evitar overflow en 768 px.

Pendiente:
- Evaluar si `Examenes` debe apuntar a un hub propio si crece la oferta.

## CTA

Estado actual:
- CTA principal unificado: `Solicitar diagnostico`.
- Se usa en home, servicios, blog, articulos, header y footer.
- La accion de contacto evita promesas no verificables.

Pendiente:
- Medir conversion por ubicacion cuando haya analitica.

## Responsive

Revision ejecutada:
- 56 combinaciones con Playwright.
- Rutas: home, hub de servicios, servicio de matematicas, blog, categoria estadistica, articulo pilar, mapa del sitio y contacto.
- Anchos: 320, 375, 390, 768, 1024, 1280 y 1440 px.
- Resultado: 0 fallos, sin overflow horizontal.

## Accesibilidad

Mejoras aplicadas:
- Skip link al contenido.
- Foco visible global.
- Menu movil operable con teclado.
- Botones con `type="button"` donde corresponde.
- Respeto de `prefers-reduced-motion`.
- H1 unico validado en todas las paginas estaticas.

Pendiente:
- Auditoria manual con lector de pantalla si se quiere ir mas alla de la comprobacion estructural.
