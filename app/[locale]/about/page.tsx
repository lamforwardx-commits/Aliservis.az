import Image from "next/image";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { SITE_URL } from "@/lib/constants";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("aboutTitle"),
    description: t("aboutDescription"),
    alternates: {
      canonical: `${SITE_URL}/${locale}/about`,
      languages: {
        az: `${SITE_URL}/az/about`,
        tr: `${SITE_URL}/tr/about`,
        "x-default": `${SITE_URL}/az/about`,
      },
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");
  const tNav = await getTranslations("nav");

  return (
    <>
      <PageHero
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("p1")}
      />
      <section className="section-pad pt-0">
        <div className="container-luxury grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]">
            <Image
              src="/images/exterior/exterior-1.webp"
              alt="Araz Terrace exterior and terrace"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              {t("p2")}
            </p>
            <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {(["f1", "f2", "f3", "f4"] as const).map((key) => (
                <li
                  key={key}
                  className="glass rounded-2xl px-4 py-3 text-sm text-foreground"
                >
                  {t(`features.${key}`)}
                </li>
              ))}
            </ul>
            <Button href="/reservations">{tNav("reserve")}</Button>
          </div>
        </div>
      </section>
    </>
  );
}
