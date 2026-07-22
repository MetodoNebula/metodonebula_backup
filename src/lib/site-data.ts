import rawSiteData from "../content/site.json";

export type SiteAuthor = {
  name: string;
  path: string;
  jobTitle: string;
  profileUrl?: string;
  knowsAbout: string[];
};

export type CorePage = {
  path: string;
  kind: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  priority: string;
};

export type BlogCategory = {
  name: string;
  slug: string;
  description: string;
  relatedService: string;
  pillarPost: string;
};

export type ServicePage = {
  path: string;
  title: string;
  description: string;
  h1: string;
  audience: string;
  problems: string[];
  topics: string[];
  method: string[];
  profile: string;
  differentiator: string;
  studentInput: string;
  reasonableOutcomes: string;
  nextStep: string;
  faq: Array<{ q: string; a: string }>;
  relatedPosts: string[];
  parentPath?: string;
  parentLabel?: string;
  modality?: string;
  sessionStructure?: string[];
  relatedServices?: string[];
  priority: string;
};

export type CommercialHub = CorePage & {
  label: string;
  sections: Array<{
    title: string;
    description: string;
    paths: string[];
  }>;
  faq: Array<{ q: string; a: string }>;
};

export type SiteData = {
  site: {
    name: string;
    displayName: string;
    url: string;
    language: string;
    logo: string;
    socialImage: string;
    social: string[];
    contact: {
      whatsapp: string;
      email: string;
      instagram: string;
    };
    author: SiteAuthor;
  };
  corePages: CorePage[];
  blogCategories: BlogCategory[];
  commercialHubs: CommercialHub[];
  serviceOverview: CorePage;
  servicePages: ServicePage[];
};

export const siteData = rawSiteData as SiteData;
export const SITE_URL = siteData.site.url;
export const SITE_NAME = siteData.site.displayName;

export function stripTrailingSlash(path: string): string {
  if (path === "/") return "/";
  return path.replace(/\/+$/, "");
}

export function withTrailingSlash(path: string): string {
  if (path === "/") return "/";
  const [cleanPath, hash = ""] = path.split("#");
  const normal = `${cleanPath.replace(/\/+$/, "")}/`;
  return hash ? `${normal}#${hash}` : normal;
}

export function absoluteUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (/\/[^/?#]+\.[^/?#]+(?:[?#].*)?$/.test(normalized)) {
    return `${SITE_URL}${normalized}`;
  }
  return `${SITE_URL}${withTrailingSlash(normalized) === "/" ? "/" : withTrailingSlash(normalized)}`;
}

export function findCorePage(path: string): CorePage | undefined {
  const normal = withTrailingSlash(path);
  return [...siteData.corePages, ...siteData.commercialHubs, siteData.serviceOverview].find(
    (page) => page.path === normal,
  );
}

export function findCommercialHub(path: string): CommercialHub | undefined {
  const normal = withTrailingSlash(path);
  return siteData.commercialHubs.find((page) => page.path === normal);
}

export function blogCategoryPath(slug: string): string {
  return `/blog/categoria/${slug}/`;
}

export function blogPagePath(page: number): string {
  return page <= 1 ? "/blog/" : `/blog/pagina/${page}/`;
}

export function blogCategoryPagePath(slug: string, page: number): string {
  return page <= 1 ? blogCategoryPath(slug) : `/blog/categoria/${slug}/pagina/${page}/`;
}

export function findBlogCategory(slug: string): BlogCategory | undefined {
  return siteData.blogCategories.find((category) => category.slug === slug);
}

export function findServicePage(path: string): ServicePage | undefined {
  const normal = withTrailingSlash(path);
  return siteData.servicePages.find((page) => page.path === normal);
}
