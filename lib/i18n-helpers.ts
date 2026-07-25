import type { AppLocale } from "@/i18n/routing";

export type LocalizedString = string | { az: string; tr: string };

export function tLocal(value: LocalizedString, locale: AppLocale): string {
  if (typeof value === "string") return value;
  return value[locale] ?? value.az;
}
