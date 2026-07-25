"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { formatPrice } from "@/lib/utils";
import { tLocal } from "@/lib/i18n-helpers";
import type { AppLocale } from "@/i18n/routing";
import type { LocalizedString } from "@/lib/i18n-helpers";

export type MenuItemData = {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  price: number;
  image: string;
  featured?: boolean;
  chefPick?: boolean;
};

type Props = {
  item: MenuItemData;
};

export function MenuCard({ item }: Props) {
  const locale = useLocale() as AppLocale;
  const t = useTranslations("popular");

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="group relative overflow-hidden rounded-[1.5rem] border border-border bg-surface-elevated sm:rounded-[1.75rem]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.image}
          alt={tLocal(item.title, locale)}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        {item.chefPick ? (
          <span className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0a0a0a] sm:left-4 sm:top-4">
            Chef
          </span>
        ) : null}
      </div>
      <div className="space-y-2 p-4 sm:space-y-3 sm:p-5 md:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl text-foreground sm:text-2xl">
            {tLocal(item.title, locale)}
          </h3>
          <p className="shrink-0 text-sm font-medium tracking-wide text-gold">
            {formatPrice(item.price)}
          </p>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {tLocal(item.description, locale)}
        </p>
        <span className="sr-only">{t("title")}</span>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100 shimmer-border" />
    </motion.article>
  );
}
