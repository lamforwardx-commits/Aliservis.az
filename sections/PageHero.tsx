"use client";

import { motion } from "framer-motion";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHero({ eyebrow, title, description }: Props) {
  return (
    <section className="relative overflow-hidden pt-32 section-pad pb-12 md:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(201,169,98,0.14),transparent_40%)]" />
      <div className="container-luxury relative max-w-4xl">
        {eyebrow ? (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-xs uppercase tracking-[0.35em] text-gold"
          >
            {eyebrow}
          </motion.p>
        ) : null}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="font-display text-5xl md:text-6xl lg:text-7xl"
        >
          {title}
        </motion.h1>
        {description ? (
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg"
          >
            {description}
          </motion.p>
        ) : null}
      </div>
    </section>
  );
}
