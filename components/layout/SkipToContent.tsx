"use client";

import { useTranslations } from "next-intl";

export function SkipToContent() {
  const t = useTranslations("common");
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[120] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#0a0a0a]"
    >
      {t("skip")}
    </a>
  );
}
