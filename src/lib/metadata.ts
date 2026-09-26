import type { Metadata } from "next";
import { COMPANY } from "@/lib/company";

interface PageMetadataInput {
  title: string;
  description: string;
  path: `/${string}`;
}

// Served from app/opengraph-image.jpg.
const SHARE_IMAGE = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: `${COMPANY.shortName} Engineering and Consulting logo`,
};

/**
 * Per-page metadata with a canonical URL and matching Open Graph / Twitter
 * fields. A page-level `openGraph` object replaces the inherited one entirely
 * (including the file-based share image), so the image is set explicitly here.
 */
export function pageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const socialTitle = `${title} | ${COMPANY.shortName} Engineering and Consulting`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: COMPANY.name,
      locale: "en_TZ",
      title: socialTitle,
      description,
      url: path,
      images: [SHARE_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [SHARE_IMAGE.url],
    },
  };
}
