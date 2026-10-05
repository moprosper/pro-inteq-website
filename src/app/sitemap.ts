import type { MetadataRoute } from "next";
import { SITE_URL, SITEMAP_PATHS } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return SITEMAP_PATHS.map((path) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    priority: path === "/" ? 1 : 0.8,
  }));
}
