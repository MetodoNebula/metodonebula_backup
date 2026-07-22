# Nebula

Landing React preparada para desarrollo local con Vite y despliegue estático en Cloudflare Pages.

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

La comprobación integral ejecuta TypeScript, ESLint, el build estático y la validación SEO:

```bash
npm run check
```

## Analítica y contacto

GA4 solo se carga si existe `VITE_GA_MEASUREMENT_ID` y la aplicación ha recibido consentimiento explícito. La configuración y la lista de eventos están en `docs/analytics.md`.

El teléfono/WhatsApp y el correo se muestran como texto informativo. La web no incluye formulario ni botones que abran esos canales.

## Cloudflare Pages

- Build command: `npm run build`
- Build output directory: `dist`
- Node.js: 20 o superior

El archivo `public/_redirects` deja lista la app para rutas SPA en Cloudflare Pages.

El workflow de GitHub Pages continúa publicando el contenido generado de `dist` en la raíz de la rama de despliegue.
