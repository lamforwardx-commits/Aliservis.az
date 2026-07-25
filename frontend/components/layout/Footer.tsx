"use client";

import { useLocale, useTranslations } from "next-intl";
import { NAV_KEYS, RESTAURANT } from "@/lib/constants";
import { Link } from "@/lib/navigation";
import { SocialIcons } from "@/components/ui/SocialIcons";
import type { AppLocale } from "@/i18n/routing";

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const locale = useLocale() as AppLocale;

  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="container-luxury section-pad grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div className="lg:col-span-2">
          <p className="font-display text-3xl gold-text sm:text-4xl">
            {RESTAURANT.name}
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            {t("tagline")}
          </p>
          <SocialIcons className="mt-6" />
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold">
            {t("explore")}
          </p>
          <ul className="space-y-3">
            {NAV_KEYS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition hover:text-foreground focus-ring"
                >
                  {tNav(link.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold">
            {t("visit")}
          </p>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>{RESTAURANT.address.street}</li>
            <li>
              {RESTAURANT.address.city}, {RESTAURANT.address.countryName[locale]}
            </li>
            <li>
              <a
                href={`tel:${RESTAURANT.phone.replace(/\s/g, "")}`}
                className="hover:text-foreground focus-ring"
              >
                {RESTAURANT.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${RESTAURANT.email}`}
                className="hover:text-foreground focus-ring"
              >
                {RESTAURANT.email}
              </a>
            </li>
            <li>{RESTAURANT.hours.label[locale]}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border px-5 py-6 text-center text-xs text-muted-foreground sm:px-8">
        © {new Date().getFullYear()} {RESTAURANT.name}. {t("rights")}
      </div>
    </footer>
  );
}
