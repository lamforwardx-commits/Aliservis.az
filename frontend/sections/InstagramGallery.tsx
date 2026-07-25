"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GALLERY_IMAGES, RESTAURANT } from "@/lib/constants";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export function InstagramGallery() {
  const t = useTranslations("instagram");
  const ref = useGsapReveal<HTMLElement>();

  return (
    <section ref={ref} className="section-pad">
      <div className="container-luxury">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("text")}
        />
        <div className="mt-10 grid grid-cols-2 gap-2 sm:mt-14 sm:gap-3 md:grid-cols-3 lg:grid-cols-6">
          {GALLERY_IMAGES.slice(0, 6).map((image) => (
            <a
              key={image.id}
              href={RESTAURANT.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-xl border border-border focus-ring sm:rounded-2xl"
              data-reveal
            >
              <Image
                src={image.src}
                alt="Araz Terrace Instagram"
                fill
                sizes="(max-width: 768px) 50vw, 16vw"
                className="object-cover transition duration-700 group-hover:scale-110"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
