"use client";

import { useTranslations } from "next-intl";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export function FAQ() {
  const t = useTranslations("faq");
  const tRoot = useTranslations();
  const ref = useGsapReveal<HTMLElement>();

  const items = (
    tRoot.raw("faqItems") as Array<{ q: string; a: string }>
  ).map((item) => ({ question: item.q, answer: item.a }));

  return (
    <section ref={ref} className="section-pad bg-muted/30">
      <div className="container-luxury grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <SectionHeading
          align="left"
          eyebrow={t("eyebrow")}
          title={t("title")}
        />
        <div data-reveal>
          <FAQAccordion items={items} />
        </div>
      </div>
    </section>
  );
}
