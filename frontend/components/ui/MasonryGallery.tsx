"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type ImageItem = {
  id: string;
  src: string;
  alt: string;
  span?: string;
};

export function MasonryGallery({ images }: { images: ImageItem[] }) {
  return (
    <div className="masonry">
      {images.map((image, index) => (
        <motion.figure
          key={image.id}
          className="masonry-item group relative overflow-hidden rounded-3xl border border-border"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: index * 0.04, duration: 0.5 }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={image.span === "wide" ? 1100 : 800}
            height={image.span === "tall" ? 1100 : image.span === "wide" ? 700 : 800}
            className="h-auto w-full object-cover transition duration-700 group-hover:scale-105"
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-sm text-white opacity-0 transition group-hover:opacity-100">
            {image.alt}
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}
