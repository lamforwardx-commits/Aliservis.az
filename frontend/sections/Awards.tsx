"use client";

import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { Award } from "lucide-react";

export function Awards() {
  const t = useTranslations("awards");
  const tRoot = useTranslations();
  const ref = useGsapReveal<HTMLElement>();
  const awards = tRoot.raw("awardsList") as Array<{
    title: string;
    year: string;
    issuer: string;
    description: string;
  }>;

  return (
    <section ref={ref} className="section-pad bg-muted/30">
      <div className="container-luxury">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
        <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {awards.map((award) => (
            <article
              key={award.title}
              data-reveal
              className="glass rounded-[1.5rem] p-5 transition duration-300 hover:-translate-y-1 sm:rounded-[1.75rem] sm:p-6"
            >
              <Award className="mb-4 h-6 w-6 text-gold" aria-hidden />
              <p className="text-xs uppercase tracking-[0.25em] text-gold">
                {award.year}
              </p>
              <h3 className="mt-2 font-display text-xl sm:text-2xl">
                {award.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{award.issuer}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {award.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
