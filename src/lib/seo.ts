import { useEffect } from "react";

import { absoluteUrl, siteData } from "./site-data";

type MetaInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  image?: string;
  robots?: string;
  prevPath?: string;
  nextPath?: string;
};

function upsertMeta(selector: string, attrs: Record<string, string>) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    document.head.appendChild(el);
  }
  for (const [name, value] of Object.entries(attrs)) {
    el.setAttribute(name, value);
  }
}

function removeMeta(selector: string) {
  document.head.querySelector(selector)?.remove();
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertOptionalLink(rel: string, href?: string) {
  const el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!href) {
    el?.remove();
    return;
  }
  upsertLink(rel, href);
}

export function usePageMeta({
  title,
  description,
  path,
  type = "website",
  image,
  robots = "index,follow",
  prevPath,
  nextPath,
}: MetaInput) {
  useEffect(() => {
    const url = absoluteUrl(path);
    const imageUrl = image && image !== siteData.site.logo ? absoluteUrl(image) : undefined;
    document.title = title;
    document.documentElement.lang = siteData.site.language;
    upsertMeta('meta[name="description"]', { name: "description", content: description });
    upsertMeta('meta[name="robots"]', { name: "robots", content: robots });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: title });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: url });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: type });
    if (imageUrl) {
      upsertMeta('meta[property="og:image"]', { property: "og:image", content: imageUrl });
    } else {
      removeMeta('meta[property="og:image"]');
    }
    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: imageUrl ? "summary_large_image" : "summary",
    });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: description,
    });
    if (imageUrl) {
      upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: imageUrl });
    } else {
      removeMeta('meta[name="twitter:image"]');
    }
    upsertLink("canonical", url);
    upsertOptionalLink("prev", prevPath ? absoluteUrl(prevPath) : undefined);
    upsertOptionalLink("next", nextPath ? absoluteUrl(nextPath) : undefined);
  }, [description, image, nextPath, path, prevPath, robots, title, type]);
}
