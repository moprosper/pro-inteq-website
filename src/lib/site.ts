/**
 * Site-wide configuration shared by metadata, sitemap, robots and navigation.
 *
 * The public URL is read from NEXT_PUBLIC_SITE_URL. On Vercel the production
 * domain is used automatically when that variable is not set. Local builds fall
 * back to localhost so canonical URLs never point at a guessed domain.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/+$/, "");

  const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercelProduction) return `https://${vercelProduction}`;

  return "http://localhost:3000";
}

export const SITE_URL = resolveSiteUrl();

export interface NavLink {
  href: string;
  label: string;
}

export const MAIN_NAV: readonly NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/industries", label: "Industries" },
  { href: "/hse", label: "HSE" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];
