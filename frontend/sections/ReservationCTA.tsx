"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export function ReservationCTA() {
  const t = useTranslations("cta");
  const ref = useGsapReveal<HTMLElement>();

  return (
    <section ref={ref} className="section-pad">
      <div
        className="container-luxury relative overflow-hidden rounded-[1.75rem] border border-border px-6 py-14 text-center sm:rounded-[2rem] sm:px-10 md:py-20"
        data-reveal
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,169,98,0.2),transparent_55%)]" />
        <h2 className="relative font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          {t("title")}
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
          {t("text")}
        </p>
        <div className="relative mt-8">
          <Button href="/reservations">{t("button")}</Button>
        </div>
      </div>
    </section>
  );
}
