import type { Metadata } from "next";
import { OG_IMAGE, SITE_NAME } from "@/data/project";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

// Page metadata with a canonical URL and matching Open Graph / Twitter tags.
// Relative paths resolve against metadataBase (SITE_URL), set in the root layout.
export function pageMetadata({ title, description, path, keywords }: PageMetadataInput): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "en_IN",
      type: "website",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
