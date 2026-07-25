import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Providers } from "@/components/layout/Providers";
import { SkipToContent } from "@/components/layout/SkipToContent";
import { LocalePersistence } from "@/components/layout/LocalePersistence";
import { routing, type AppLocale } from "@/i18n/routing";
import { getRestaurantJsonLd } from "@/lib/schema";
import { RESTAURANT, SITE_URL } from "@/lib/constants";

const display = Cormorant_Garamond({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Outfit({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#070707" },
    { media: "(prefers-color-scheme: light)", color: "#f7f4ef" },
  ],
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  const languages = {
    az: `${SITE_URL}/az`,
    tr: `${SITE_URL}/tr`,
    "x-default": `${SITE_URL}/az`,
  };

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t("homeTitle"),
      template: `%s | ${RESTAURANT.name}`,
    },
    description: t("homeDescription"),
    keywords: t("keywords"),
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages,
    },
    openGraph: {
      type: "website",
      locale: locale === "tr" ? "tr_TR" : "az_AZ",
      url: `${SITE_URL}/${locale}`,
      siteName: RESTAURANT.name,
      title: t("homeTitle"),
      description: t("homeDescription"),
      images: [
        {
          url: "/images/hero/hero-1.webp",
          width: 1200,
          height: 630,
          alt: RESTAURANT.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("homeTitle"),
      description: t("homeDescription"),
      images: ["/images/hero/hero-1.webp"],
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
      apple: [{ url: "/icons/apple-touch-icon.svg" }],
    },
    manifest: "/manifest.webmanifest",
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as AppLocale)) notFound();

  setRequestLocale(locale);
  const messages = await getMessages();
  const jsonLd = getRestaurantJsonLd(locale as AppLocale);

  return (
    <html lang={locale} suppressHydrationWarning className="dark">
      <body className={`${display.variable} ${body.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <LocalePersistence />
            <SkipToContent />
            <Header />
            <main id="main-content">{children}</main>
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
