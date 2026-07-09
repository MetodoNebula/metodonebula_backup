import NebulaLanding from "./routes";
import { BlogIndex, BlogPost } from "./routes/blog";
import { usePathname } from "./lib/router";

export default function App() {
  const pathname = usePathname();
  const path = pathname.replace(/\/+$/, "") || "/";

  if (path === "/blog") return <BlogIndex />;
  if (path.startsWith("/blog/")) {
    return <BlogPost slug={decodeURIComponent(path.slice("/blog/".length))} />;
  }
  return <NebulaLanding />;
}
