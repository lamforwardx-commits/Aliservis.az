"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export function ChefSection() {
  const t = useTranslations("chef");
  const ref = useGsapReveal<HTMLElement>();

  return (
    <section ref={ref} className="section-pad">
      <div className="container-luxury grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div
          className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]"
          data-reveal
        >
          <Image
            src="/images/interior/interior-1.webp"
            alt="Araz Terrace kitchen atmosphere"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <SectionHeading
            align="left"
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("text")}
          />
          <ul className="mt-8 space-y-4">
            {(["p1", "p2", "p3"] as const).map((key) => (
              <li
                key={key}
                data-reveal
                className="border-l border-gold/40 pl-4 text-sm text-muted-foreground sm:pl-5 sm:text-base"
              >
                {t(`points.${key}`)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
