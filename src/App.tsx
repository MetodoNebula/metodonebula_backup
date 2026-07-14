import NebulaLanding from "./routes";
import { BlogCategoryPage, BlogIndex, BlogPost } from "./routes/blog";
import {
  AboutPage,
  ContactPage,
  MethodologyPage,
  NotFoundPage,
  ServiceDetailPage,
  ServiceOverviewPage,
} from "./routes/pages";
import { usePathname } from "./lib/router";
import { findServicePage } from "./lib/site-data";

export default function App() {
  const pathname = usePathname();
  const path = pathname.replace(/\/+$/, "") || "/";

  if (path === "/blog") return <BlogIndex />;
  if (path.startsWith("/blog/categoria/")) {
    return <BlogCategoryPage slug={decodeURIComponent(path.slice("/blog/categoria/".length))} />;
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
  if (path === "/") return <NebulaLanding />;
  if (path === "/404") return <NotFoundPage />;
  return <NotFoundPage />;
}
