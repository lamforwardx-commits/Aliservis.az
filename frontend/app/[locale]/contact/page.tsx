import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/sections/PageHero";
import { GoogleMap } from "@/components/ui/GoogleMap";
import { SocialIcons } from "@/components/ui/SocialIcons";
import { GlassCard } from "@/components/ui/GlassCard";
import { RESTAURANT, SITE_URL } from "@/lib/constants";
import type { AppLocale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("contactTitle"),
    description: t("contactDescription"),
    alternates: {
      canonical: `${SITE_URL}/${locale}/contact`,
      languages: {
        az: `${SITE_URL}/az/contact`,
        tr: `${SITE_URL}/tr/contact`,
        "x-default": `${SITE_URL}/az/contact`,
      },
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");
  const loc = locale as AppLocale;

  const cards = [
    {
      icon: MapPin,
      label: t("address"),
      value: `${RESTAURANT.address.street}, ${RESTAURANT.address.city}`,
      href: RESTAURANT.mapsUrl,
    },
    {
      icon: Phone,
      label: t("phone"),
      value: RESTAURANT.phone,
      href: `tel:${RESTAURANT.phone.replace(/\s/g, "")}`,
    },
    {
      icon: Mail,
      label: t("email"),
      value: RESTAURANT.email,
      href: `mailto:${RESTAURANT.email}`,
    },
    {
      icon: Clock,
      label: t("hours"),
      value: RESTAURANT.hours.label[loc],
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("text")}
      />
      <section className="section-pad pt-0">
        <div className="container-luxury space-y-8 sm:space-y-10">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {cards.map((card) => {
              const Icon = card.icon;
              const content = (
                <>
                  <Icon className="mb-4 h-5 w-5 text-gold" aria-hidden />
                  <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    {card.label}
                  </p>
                  <p className="mt-2 text-sm text-foreground md:text-base">
                    {card.value}
                  </p>
                </>
              );
              return (
                <GlassCard key={card.label} className="h-full">
                  {card.href ? (
                    <a
                      href={card.href}
                      target={card.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        card.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="block focus-ring"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </GlassCard>
              );
            })}
          </div>

          <div className="flex flex-col items-start justify-between gap-4 rounded-[1.5rem] border border-border px-5 py-5 sm:flex-row sm:items-center sm:rounded-[2rem] sm:px-6">
            <p className="text-sm text-muted-foreground">{t("follow")}</p>
            <SocialIcons />
          </div>

          <div className="overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]">
            <GoogleMap />
          </div>
        </div>
      </section>
    </>
  );
}
