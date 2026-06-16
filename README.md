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

## Cloudflare Pages

- Build command: `npm run build`
- Build output directory: `dist`
- Node.js: 20 o superior

El archivo `public/_redirects` deja lista la app para rutas SPA en Cloudflare Pages.
