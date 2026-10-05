/**
 * Site-wide configuration shared by metadata, sitemap, robots and navigation.
 *
 * The public URL comes only from NEXT_PUBLIC_SITE_URL (for example
 * https://www.example.co.tz), so the site is not tied to any hosting provider.
 * Without it, URLs fall back to localhost for local development, and
 * next.config.ts warns during production builds.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/+$/, "");
  return "http://localhost:3000";
}

export const SITE_URL = resolveSiteUrl();

export interface NavLink {
  href: string;
  label: string;
}

export const MAIN_NAV: readonly NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/supply-procurement", label: "Supply & Procurement" },
  { href: "/projects", label: "Projects" },
  { href: "/hse-quality", label: "HSE & Quality" },
  { href: "/company-profile", label: "Company Profile" },
  { href: "/contact", label: "Contact" },
];

export const QUOTE_HREF = "/contact#quote";

/** Every indexable route, for the sitemap. */
export const SITEMAP_PATHS = [...MAIN_NAV.map((link) => link.href), "/about/organization", "/privacy"];
