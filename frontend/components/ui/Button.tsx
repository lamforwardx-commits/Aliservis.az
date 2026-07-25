"use client";

import { Link } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

type Common = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
};

type ButtonAsButton = Common &
  Omit<ComponentProps<"button">, "className" | "children"> & {
    href?: undefined;
  };

type ButtonAsLink = Common & {
  href: string;
  className?: string;
};

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-[#0a0a0a] hover:bg-gold-soft shadow-[0_10px_30px_rgba(201,169,98,0.25)]",
  secondary:
    "border border-gold/50 text-gold-soft hover:bg-gold/10 backdrop-blur-md",
  ghost: "text-gold-soft hover:text-gold hover:bg-gold/5",
};

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { children, className, variant = "primary", ...rest } = props;
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-[0.08em] uppercase transition-all duration-300 focus-ring touch-manipulation",
    "hover:-translate-y-0.5 active:translate-y-0",
    variants[variant],
    className,
  );

  if ("href" in rest && rest.href) {
    return (
      <Link href={rest.href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonAsButton)}>
      {children}
    </button>
  );
}
