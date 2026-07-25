import type { Metadata } from "next";
import { RESTAURANT, SITE_URL } from "./constants";
import type { AppLocale } from "@/i18n/routing";

export function pageMetadata(
  locale: AppLocale,
  title: string,
  description: string,
  path: string,
): Metadata {
  const url = `${SITE_URL}/${locale}${path}`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        az: `${SITE_URL}/az${path}`,
        tr: `${SITE_URL}/tr${path}`,
        "x-default": `${SITE_URL}/az${path}`,
      },
    },
    openGraph: {
      title: `${title} | ${RESTAURANT.name}`,
      description,
      url,
      images: ["/images/hero/hero-1.webp"],
    },
    twitter: {
      title: `${title} | ${RESTAURANT.name}`,
      description,
      images: ["/images/hero/hero-1.webp"],
    },
  };
}
