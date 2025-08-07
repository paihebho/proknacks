import { Metadata } from "next";
import { SITE_CONFIG } from "./constants";

export function generateMetadata({
  title,
  description,
  keywords = [],
  path = "",
}: {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
}): Metadata {
  const fullTitle =
    title === SITE_CONFIG.name ? title : `${title} | ${SITE_CONFIG.name}`;
  const url = `${SITE_CONFIG.url}${path}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      "home improvement",
      "construction",
      "renovation",
      "repair services",
      "craftsmanship",
      ...keywords,
    ].join(", "),
    authors: [{ name: SITE_CONFIG.name }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      title: fullTitle,
      description,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: `${SITE_CONFIG.url}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${SITE_CONFIG.url}/og-image.jpg`],
    },
    alternates: {
      canonical: url,
    },
  };
}
