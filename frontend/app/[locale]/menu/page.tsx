"use client";

import { useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import menuData from "@/data/menu.json";
import { PageHero } from "@/sections/PageHero";
import { MenuCard, type MenuItemData } from "@/components/ui/MenuCard";
import { tLocal } from "@/lib/i18n-helpers";
import { cn } from "@/lib/utils";
import type { AppLocale } from "@/i18n/routing";

export default function MenuPage() {
  const t = useTranslations("menuPage");
  const locale = useLocale() as AppLocale;
  const categories = menuData.categories;
  const [active, setActive] = useState(categories[0]?.id ?? "breakfast");

  const current = useMemo(
    () => categories.find((c) => c.id === active) ?? categories[0],
    [active, categories],
  );

  return (
    <>
      <PageHero
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("text")}
      />

      <section className="section-pad pt-0">
        <div className="container-luxury">
          <div
            className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-2 scrollbar-thin"
            role="tablist"
            aria-label="Menu categories"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={active === category.id}
                onClick={() => setActive(category.id)}
                className={cn(
                  "min-h-11 shrink-0 rounded-full border px-4 py-2.5 text-[11px] uppercase tracking-[0.16em] transition focus-ring sm:px-5 sm:text-xs",
                  active === category.id
                    ? "border-gold bg-gold text-[#0a0a0a]"
                    : "border-border text-muted-foreground hover:text-foreground",
                )}
              >
                {tLocal(category.name, locale)}
              </button>
            ))}
          </div>

          <div className="mt-8 sm:mt-10">
            <h2 className="font-display text-3xl sm:text-4xl">
              {tLocal(current.name, locale)}
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
              {tLocal(current.description, locale)}
            </p>
            <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {(current.items as MenuItemData[]).map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
