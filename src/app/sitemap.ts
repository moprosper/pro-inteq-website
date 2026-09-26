import type { MetadataRoute } from "next";
import { MAIN_NAV, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [...MAIN_NAV.map((link) => link.href), "/about/organization"];

  return paths.map((path) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    priority: path === "/" ? 1 : 0.8,
  }));
}
