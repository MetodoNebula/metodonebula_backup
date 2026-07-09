import {
  useSyncExternalStore,
  type AnchorHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from "react";

/**
 * Tiny History-API router. The whole site is a static SPA served from the
 * domain root, so a route is just `window.location.pathname`. Deep links work
 * because the build emits a `404.html` copy of `index.html` (GitHub Pages
 * fallback), which boots the app and lets it read the path.
 */

function subscribe(callback: () => void) {
  window.addEventListener("popstate", callback);
  return () => window.removeEventListener("popstate", callback);
}

function getSnapshot() {
  return window.location.pathname;
}

export function usePathname(): string {
  return useSyncExternalStore(subscribe, getSnapshot, () => "/");
}

export function navigate(to: string) {
  if (to === window.location.pathname + window.location.hash) return;
  window.history.pushState(null, "", to);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo({ top: 0, left: 0 });
}

type LinkProps = {
  to: string;
  children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

/**
 * Internal link. Intercepts plain left-clicks on same-origin path links to do
 * client-side navigation; hash links, external links and modified clicks fall
 * back to normal browser behaviour.
 */
export function Link({ to, children, onClick, ...rest }: LinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
      return;
    }
    if (!to.startsWith("/") || to.includes("#")) return;
    e.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
