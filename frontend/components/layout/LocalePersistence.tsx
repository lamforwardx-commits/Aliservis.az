"use client";

import { useEffect } from "react";
import { useLocale } from "next-intl";

export function LocalePersistence() {
  const locale = useLocale();

  useEffect(() => {
    try {
      localStorage.setItem("NEXT_LOCALE", locale);
      document.cookie = `NEXT_LOCALE=${locale};path=/;max-age=31536000;samesite=lax`;
    } catch {
      /* ignore */
    }
  }, [locale]);

  return null;
}
