"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatedHeadline } from "@/components/ui/AnimatedHeadline";
import { Button } from "@/components/ui/Button";
import { HERO_IMAGES } from "@/lib/constants";

export function Hero() {
  const t = useTranslations("hero");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % HERO_IMAGES.length),
      5500,
    );
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={HERO_IMAGES[index]}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1 }}
        >
          <Image
            src={HERO_IMAGES[index]}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div
        className="absolute inset-0"
        style={{ background: "var(--hero-overlay)" }}
        aria-hidden
      />

      <div className="relative z-10 flex min-h-[100svh] items-end pb-16 pt-28 section-pad md:items-center md:pb-0">
        <div className="container-luxury max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-[11px] uppercase tracking-[0.35em] text-gold-soft sm:text-xs"
          >
            {t("eyebrow")}
          </motion.p>

          <AnimatedHeadline
            lines={[t("title"), t("subtitle")]}
            className="text-[2.6rem] leading-[0.95] text-white xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl [&>span:first-child]:gold-text [&>span:last-child]:mt-3 [&>span:last-child]:text-2xl [&>span:last-child]:text-white/90 sm:[&>span:last-child]:text-3xl md:[&>span:last-child]:text-4xl lg:[&>span:last-child]:text-5xl"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-6 max-w-xl text-sm text-white/75 sm:text-base md:text-lg"
          >
            {t("text")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4"
          >
            <Button href="/reservations">{t("reserve")}</Button>
            <Button href="/menu" variant="secondary">
              {t("menu")}
            </Button>
          </motion.div>

          <div className="mt-8 flex gap-2" aria-hidden>
            {HERO_IMAGES.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-8 bg-gold" : "w-3 bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
