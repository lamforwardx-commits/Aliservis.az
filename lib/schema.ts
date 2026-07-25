import { RESTAURANT, SITE_URL } from "./constants";
import type { AppLocale } from "@/i18n/routing";

export function getRestaurantJsonLd(locale: AppLocale = "az") {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${SITE_URL}/#restaurant`,
    name: RESTAURANT.name,
    image: [
      `${SITE_URL}/images/hero/hero-1.webp`,
      `${SITE_URL}/images/interior/interior-1.webp`,
      `${SITE_URL}/images/exterior/exterior-1.webp`,
    ],
    url: `${SITE_URL}/${locale}`,
    telephone: RESTAURANT.phone,
    email: RESTAURANT.email,
    description: RESTAURANT.description[locale],
    servesCuisine: [...RESTAURANT.cuisine],
    priceRange: RESTAURANT.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: RESTAURANT.address.street,
      addressLocality: RESTAURANT.address.city,
      addressRegion: RESTAURANT.address.region,
      postalCode: RESTAURANT.address.postalCode,
      addressCountry: RESTAURANT.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: RESTAURANT.geo.latitude,
      longitude: RESTAURANT.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: RESTAURANT.hours.opens,
        closes: RESTAURANT.hours.closes,
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: RESTAURANT.rating.value,
      reviewCount: RESTAURANT.rating.count,
      bestRating: 5,
      worstRating: 1,
    },
    acceptsReservations: true,
    menu: `${SITE_URL}/${locale}/menu`,
    sameAs: [
      RESTAURANT.social.instagram,
      RESTAURANT.social.facebook,
      RESTAURANT.social.tripadvisor,
    ],
    inLanguage: locale,
  };
}
