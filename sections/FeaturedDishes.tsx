"use client";

import { useTranslations } from "next-intl";
import { MenuCard, type MenuItemData } from "@/components/ui/MenuCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export function FeaturedDishes({ items }: { items: MenuItemData[] }) {
  const t = useTranslations("popular");
  const ref = useGsapReveal<HTMLElement>();

  return (
    <section ref={ref} className="section-pad">
      <div className="container-luxury">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("text")}
        />
        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.id} data-reveal>
              <MenuCard item={item} />
            </div>
          ))}
        </div>
        <div className="mt-10 text-center sm:mt-12" data-reveal>
          <Button href="/menu" variant="secondary">
            {t("cta")}
          </Button>
        </div>
      </div>
    </section>
  );
}
