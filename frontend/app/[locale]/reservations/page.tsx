import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/sections/PageHero";
import { ReservationForm } from "@/components/forms/ReservationForm";
import { RESTAURANT, SITE_URL } from "@/lib/constants";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("reservationsTitle"),
    description: t("reservationsDescription"),
    alternates: {
      canonical: `${SITE_URL}/${locale}/reservations`,
      languages: {
        az: `${SITE_URL}/az/reservations`,
        tr: `${SITE_URL}/tr/reservations`,
        "x-default": `${SITE_URL}/az/reservations`,
      },
    },
  };
}

export default async function ReservationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("reservations");

  return (
    <>
      <PageHero
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("text")}
      />
      <section className="section-pad pt-0">
        <div className="container-luxury max-w-4xl">
          <ReservationForm />
          <p className="mt-6 text-center text-sm text-muted-foreground">
            {t("call")}{" "}
            <a
              href={`tel:${RESTAURANT.phone.replace(/\s/g, "")}`}
              className="text-gold hover:text-gold-soft focus-ring"
            >
              {RESTAURANT.phone}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
