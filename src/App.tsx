import { lazy, Suspense } from "react";

import NebulaLanding from "./routes";
import { usePathname } from "./lib/navigation";
import { findCommercialHub, findServicePage } from "./lib/site-data";

const BlogCategoryPage = lazy(() =>
  import("./routes/blog").then((module) => ({ default: module.BlogCategoryPage })),
);
const BlogIndex = lazy(() =>
  import("./routes/blog").then((module) => ({ default: module.BlogIndex })),
);
const BlogPost = lazy(() =>
  import("./routes/blog").then((module) => ({ default: module.BlogPost })),
);
const pagesModule = () => import("./routes/pages");
const AboutPage = lazy(() => pagesModule().then((module) => ({ default: module.AboutPage })));
const CommercialHubPage = lazy(() =>
  pagesModule().then((module) => ({ default: module.CommercialHubPage })),
);
const ContactPage = lazy(() => pagesModule().then((module) => ({ default: module.ContactPage })));
const MethodologyPage = lazy(() =>
  pagesModule().then((module) => ({ default: module.MethodologyPage })),
);
const NotFoundPage = lazy(() => pagesModule().then((module) => ({ default: module.NotFoundPage })));
const ServiceDetailPage = lazy(() =>
  pagesModule().then((module) => ({ default: module.ServiceDetailPage })),
);
const ServiceOverviewPage = lazy(() =>
  pagesModule().then((module) => ({ default: module.ServiceOverviewPage })),
);
const SitemapPage = lazy(() => pagesModule().then((module) => ({ default: module.SitemapPage })));

export default function App() {
  const pathname = usePathname();
  const path = pathname.replace(/\/+$/, "") || "/";

  const content = (() => {
    if (path === "/blog") return <BlogIndex />;
    if (path.startsWith("/blog/pagina/")) {
      const match = /^\/blog\/pagina\/(\d+)$/.exec(path);
      if (!match) return <NotFoundPage />;
      const pageNumber = Number.parseInt(match[1], 10);
      return <BlogIndex pageNumber={pageNumber} />;
    }
    if (path.startsWith("/blog/categoria/")) {
      const rest = path.slice("/blog/categoria/".length);
      const match = /^([^/]+)(?:\/pagina\/(\d+))?$/.exec(rest);
      if (!match) return <NotFoundPage />;
      return (
        <BlogCategoryPage
          slug={decodeURIComponent(match[1])}
          pageNumber={match[2] ? Number.parseInt(match[2], 10) : 1}
        />
      );
    }
    if (path.startsWith("/blog/")) {
      return <BlogPost slug={decodeURIComponent(path.slice("/blog/".length))} />;
    }
    if (path === "/clases-particulares/universidad") return <ServiceOverviewPage />;
    const hub = findCommercialHub(path);
    if (hub) return <CommercialHubPage page={hub} />;
    const service = findServicePage(path);
    if (service) return <ServiceDetailPage page={service} />;
    if (path === "/sobre-nebula") return <AboutPage />;
    if (path === "/metodologia") return <MethodologyPage />;
    if (path === "/contacto") return <ContactPage />;
    if (path === "/mapa-del-sitio") return <SitemapPage />;
    if (path === "/") return <NebulaLanding />;
    if (path === "/404") return <NotFoundPage />;
    return <NotFoundPage />;
  })();

  return <Suspense fallback={<div className="min-h-screen bg-background" />}>{content}</Suspense>;
}
