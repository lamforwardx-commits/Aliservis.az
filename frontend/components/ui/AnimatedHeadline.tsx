"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  lines: string[];
  className?: string;
  as?: "h1" | "h2";
};

export function AnimatedHeadline({ lines, className, as = "h1" }: Props) {
  const Tag = as;

  return (
    <Tag className={cn("font-display overflow-hidden", className)}>
      {lines.map((line, index) => (
        <motion.span
          key={line}
          className="block"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.12 * index,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {line}
        </motion.span>
      ))}
    </Tag>
  );
}
