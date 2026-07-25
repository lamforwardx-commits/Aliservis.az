"use client";

import { useTranslations } from "next-intl";
import { RESTAURANT } from "@/lib/constants";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Stats() {
  const t = useTranslations("stats");
  const ref = useGsapReveal<HTMLElement>();

  const items = [
    { value: RESTAURANT.rating.value.toFixed(1), label: t("rating") },
    {
      value: `${Math.round(RESTAURANT.rating.count / 100) * 100}+`,
      label: t("reviews"),
    },
    { value: String(RESTAURANT.stats.dishes), label: t("dishes") },
    { value: RESTAURANT.stats.serviceHours, label: t("hours") },
  ];

  return (
    <section ref={ref} className="section-pad bg-muted/30">
      <div className="container-luxury">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {items.map((item) => (
            <div
              key={item.label}
              data-reveal
              className="glass rounded-2xl px-4 py-6 text-center sm:rounded-3xl sm:py-8"
            >
              <p className="font-display text-3xl text-gold sm:text-4xl md:text-5xl">
                {item.value}
              </p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
