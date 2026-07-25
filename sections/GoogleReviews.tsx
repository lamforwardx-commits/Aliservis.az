"use client";

import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarRating } from "@/components/ui/StarRating";
import { GlassCard } from "@/components/ui/GlassCard";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { RESTAURANT } from "@/lib/constants";

export function GoogleReviews() {
  const t = useTranslations("reviews");
  const tRoot = useTranslations();
  const ref = useGsapReveal<HTMLElement>();
  const items = tRoot.raw("testimonials") as Array<{
    quote: string;
    author: string;
    role: string;
  }>;

  return (
    <section ref={ref} className="section-pad">
      <div className="container-luxury">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("text")}
        />

        <div
          className="mx-auto mt-10 flex max-w-xl flex-col items-center gap-3 text-center"
          data-reveal
        >
          <p className="font-display text-5xl text-gold sm:text-6xl">
            {RESTAURANT.rating.value.toFixed(1)}
          </p>
          <StarRating rating={RESTAURANT.rating.value} />
          <p className="text-sm text-muted-foreground">
            {RESTAURANT.rating.count.toLocaleString()}+ Google
          </p>
          <a
            href={RESTAURANT.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.25em] text-gold hover:text-gold-soft focus-ring"
          >
            {t("viewMaps")}
          </a>
        </div>

        <div className="mt-12 grid gap-4 sm:mt-14 sm:gap-5 md:grid-cols-3">
          {items.map((review) => (
            <GlassCard key={review.author} className="h-full" data-reveal>
              <p className="font-display text-lg leading-relaxed sm:text-xl">
                “{review.quote}”
              </p>
              <div className="mt-6">
                <p className="text-sm font-medium text-gold">{review.author}</p>
                <p className="text-xs text-muted-foreground">{review.role}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
