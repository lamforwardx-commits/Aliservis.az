"use client";

import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { MasonryGallery } from "@/components/ui/MasonryGallery";
import { GALLERY_IMAGES } from "@/lib/constants";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export function HomeGallery() {
  const t = useTranslations("gallery");
  const ref = useGsapReveal<HTMLElement>();

  return (
    <section ref={ref} className="section-pad">
      <div className="container-luxury">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("text")}
        />
        <div className="mt-10 sm:mt-14" data-reveal>
          <MasonryGallery
            images={GALLERY_IMAGES.slice(0, 8).map((img) => ({
              ...img,
              alt: "Araz Terrace",
            }))}
          />
        </div>
        <div className="mt-10 text-center">
          <Button href="/gallery" variant="secondary">
            {t("cta")}
          </Button>
        </div>
      </div>
    </section>
  );
}
