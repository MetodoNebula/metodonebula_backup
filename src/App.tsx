import NebulaLanding from "./routes";
import { BlogCategoryPage, BlogIndex, BlogPost } from "./routes/blog";
import {
  AboutPage,
  ContactPage,
  MethodologyPage,
  NotFoundPage,
  ServiceDetailPage,
  ServiceOverviewPage,
  SitemapPage,
} from "./routes/pages";
import { usePathname } from "./lib/router";
import { findServicePage } from "./lib/site-data";

export default function App() {
  const pathname = usePathname();
  const path = pathname.replace(/\/+$/, "") || "/";

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
  const service = findServicePage(path);
  if (service) return <ServiceDetailPage page={service} />;
  if (path === "/sobre-nebula") return <AboutPage />;
  if (path === "/metodologia") return <MethodologyPage />;
  if (path === "/contacto") return <ContactPage />;
  if (path === "/mapa-del-sitio") return <SitemapPage />;
  if (path === "/") return <NebulaLanding />;
  if (path === "/404") return <NotFoundPage />;
  return <NotFoundPage />;
}
