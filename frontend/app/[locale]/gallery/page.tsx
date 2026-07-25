import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/sections/PageHero";
import { MasonryGallery } from "@/components/ui/MasonryGallery";
import { GALLERY_IMAGES, SITE_URL } from "@/lib/constants";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("galleryTitle"),
    description: t("galleryDescription"),
    alternates: {
      canonical: `${SITE_URL}/${locale}/gallery`,
      languages: {
        az: `${SITE_URL}/az/gallery`,
        tr: `${SITE_URL}/tr/gallery`,
        "x-default": `${SITE_URL}/az/gallery`,
      },
    },
  };
}

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("galleryPage");

  return (
    <>
      <PageHero
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("text")}
      />
      <section className="section-pad pt-0">
        <div className="container-luxury">
          <MasonryGallery
            images={GALLERY_IMAGES.map((img) => ({
              ...img,
              alt: "Araz Terrace Baku",
            }))}
          />
        </div>
      </section>
    </>
  );
}
