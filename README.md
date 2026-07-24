# Nebula

Sitio React preparado para desarrollo local con Vite y despliegue estático en GitHub Pages.

## Desarrollo local

```bash
npm install
npm run dev
```

## Producción

```bash
npm run build
npm run preview
```

La comprobación integral ejecuta TypeScript, ESLint, el build estático, la validación SEO y un
rastreo HTTP local:

```bash
npm run check
```

## Analítica y contacto

GA4 solo se carga si existe `VITE_GA_MEASUREMENT_ID` y la aplicación ha recibido consentimiento explícito. La configuración y la lista de eventos están en `docs/analytics.md`.

El teléfono/WhatsApp y el correo se muestran como texto informativo. La web no incluye formulario ni botones que abran esos canales.

La comprobación opcional en Chrome o Edge recorre todas las URLs indexables y detecta fallos de
renderizado, metadatos cliente, imágenes y errores de consola:

```bash
npm run seo:browser
```

El inventario reproducible de URLs se actualiza con:

```bash
npm run seo:inventory
```

## GitHub Pages

- Build command: `npm run build`
- Build output directory: `dist`
- Node.js: 20 o superior
- Dominio canónico: `https://metodonebula.es/`

El workflow publica el contenido generado de `dist` en la raíz de `main`. El archivo
`.static-output-manifest` garantiza que se añadan rutas nuevas y se retiren artefactos antiguos sin
mantener una lista manual de directorios. Cada URL pública se genera como
`dist/<ruta>/index.html`; las rutas desconocidas usan `404.html` con estado 404 y `noindex`.
