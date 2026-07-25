import type { Metadata } from "next";
import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";
import { SITE_URL } from "@/lib/constants";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("menuTitle"),
    description: t("menuDescription"),
    alternates: {
      canonical: `${SITE_URL}/${locale}/menu`,
      languages: {
        az: `${SITE_URL}/az/menu`,
        tr: `${SITE_URL}/tr/menu`,
        "x-default": `${SITE_URL}/az/menu`,
      },
    },
  };
}

export default function MenuLayout({ children }: { children: ReactNode }) {
  return children;
}
