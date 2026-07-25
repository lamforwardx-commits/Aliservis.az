import menuData from "@/data/menu.json";
import { Hero } from "@/sections/Hero";
import { ChefSection } from "@/sections/ChefSection";
import { FeaturedDishes } from "@/sections/FeaturedDishes";
import { Stats } from "@/sections/Stats";
import { GoogleReviews } from "@/sections/GoogleReviews";
import { HomeGallery } from "@/sections/HomeGallery";
import { InstagramGallery } from "@/sections/InstagramGallery";
import { Awards } from "@/sections/Awards";
import { FAQ } from "@/sections/FAQ";
import { ReservationCTA } from "@/sections/ReservationCTA";
import type { MenuItemData } from "@/components/ui/MenuCard";
import { setRequestLocale } from "next-intl/server";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const allItems = menuData.categories.flatMap(
    (category) => category.items as MenuItemData[],
  );
  const featured = allItems.filter((i) => i.featured).slice(0, 6);

  return (
    <>
      <Hero />
      <ChefSection />
      <FeaturedDishes items={featured} />
      <Stats />
      <GoogleReviews />
      <HomeGallery />
      <InstagramGallery />
      <Awards />
      <FAQ />
      <ReservationCTA />
    </>
  );
}
