import Image from "next/image";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { SITE_URL } from "@/lib/constants";

const EVENT_IMAGES = [
  "/images/events/events-1.webp",
  "/images/events/events-2.webp",
  "/images/events/events-3.webp",
  "/images/exterior/exterior-2.webp",
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("eventsTitle"),
    description: t("eventsDescription"),
    alternates: {
      canonical: `${SITE_URL}/${locale}/events`,
      languages: {
        az: `${SITE_URL}/az/events`,
        tr: `${SITE_URL}/tr/events`,
        "x-default": `${SITE_URL}/az/events`,
      },
    },
  };
}

export default async function EventsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("eventsPage");
  const tRoot = await getTranslations();
  const events = tRoot.raw("events") as Array<{
    title: string;
    date: string;
    time: string;
    description: string;
  }>;

  return (
    <>
      <PageHero
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("text")}
      />
      <section className="section-pad pt-0">
        <div className="container-luxury grid gap-5 md:grid-cols-2 md:gap-6">
          {events.map((event, index) => (
            <article
              key={event.title}
              className="glass overflow-hidden rounded-[1.5rem] transition hover:-translate-y-1 sm:rounded-[2rem]"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={EVENT_IMAGES[index % EVENT_IMAGES.length]}
                  alt={event.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="space-y-3 p-5 sm:p-6 md:p-8">
                <p className="text-xs uppercase tracking-[0.25em] text-gold">
                  {event.date} · {event.time}
                </p>
                <h2 className="font-display text-2xl sm:text-3xl">{event.title}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  {event.description}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center sm:mt-12">
          <Button href="/reservations">{t("cta")}</Button>
        </div>
      </section>
    </>
  );
}
