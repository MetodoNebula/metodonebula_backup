type AnalyticsEvent =
  | "request_diagnosis"
  | "click_service_cta"
  | "view_service_page"
  | "view_blog_article"
  | "scroll_75";

type SafeParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();
const consentKey = "nebula_analytics_consent";
let initialized = false;

export function hasAnalyticsConfig(): boolean {
  return Boolean(measurementId);
}

export function setAnalyticsConsent(granted: boolean) {
  localStorage.setItem(consentKey, granted ? "granted" : "denied");
  if (granted) initAnalytics();
}

export function initAnalytics() {
  if (!measurementId || initialized || localStorage.getItem(consentKey) !== "granted") return;
  initialized = true;
  window.dataLayer = window.dataLayer ?? [];
  window.gtag = (...args: unknown[]) => window.dataLayer?.push(args);
  window.gtag("js", new Date());
  window.gtag("config", measurementId, { anonymize_ip: true, send_page_view: false });
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(script);
}

export function trackEvent(name: AnalyticsEvent, params: SafeParams = {}) {
  if (!measurementId || !initialized || !window.gtag) return;
  window.gtag("event", name, params);
}

export function trackScroll75() {
  let sent = false;
  const onScroll = () => {
    if (sent) return;
    const available = document.documentElement.scrollHeight - window.innerHeight;
    if (available > 0 && window.scrollY / available >= 0.75) {
      sent = true;
      trackEvent("scroll_75", { path: window.location.pathname });
      window.removeEventListener("scroll", onScroll);
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
}
