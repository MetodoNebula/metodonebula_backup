# Analítica de Método Nebula

La integración de GA4 está preparada, pero permanece desactivada mientras no exista un identificador real y consentimiento explícito.

## Configuración

1. Definir `VITE_GA_MEASUREMENT_ID` durante el build.
2. Solicitar consentimiento antes de llamar a `setAnalyticsConsent(true)`.
3. Sin ID o sin consentimiento no se descarga `gtag.js`, no se crean cookies y `trackEvent` no hace nada.

## Eventos activos

- `request_diagnosis`
- `click_service_cta`
- `view_service_page`
- `view_blog_article`
- `scroll_75`

Solo se envían datos técnicos como ruta, categoría, slug o ubicación del CTA. Nunca se deben enviar nombre, email, teléfono, mensaje, asignatura concreta ni información académica personal.

## Contacto

La web muestra el número de WhatsApp y el correo electrónico como texto informativo. No incluye formulario, botones de envío directo ni eventos de clic para esos canales.
