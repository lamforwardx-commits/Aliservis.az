"use client";

import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV_KEYS, RESTAURANT } from "@/lib/constants";
import { Link, usePathname } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        scrolled || open
          ? "border-b border-border bg-background/75 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="container-luxury flex items-center justify-between gap-3 px-4 py-3 sm:px-6 md:px-10 lg:px-16">
        <Link
          href="/"
          className="font-display text-xl tracking-wide text-foreground focus-ring sm:text-2xl md:text-3xl"
          aria-label={`${RESTAURANT.name} home`}
        >
          <span className="gold-text">{RESTAURANT.name}</span>
        </Link>

        <nav
          className="hidden items-center gap-5 xl:flex 2xl:gap-7"
          aria-label="Primary"
        >
          {NAV_KEYS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-[11px] uppercase tracking-[0.18em] transition-colors focus-ring",
                pathname === link.href
                  ? "text-gold"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <LanguageSwitcher />
          <ThemeToggle />
          <Button href="/reservations" className="px-4 py-2.5 text-[11px]">
            {t("reserve")}
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground focus-ring"
            aria-label={open ? t("closeMenu") : t("openMenu")}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="border-t border-border bg-background/95 px-5 py-8 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-5" aria-label="Mobile">
              {NAV_KEYS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "min-h-11 font-display text-3xl",
                    pathname === link.href ? "text-gold" : "text-foreground",
                  )}
                >
                  {t(link.key)}
                </Link>
              ))}
              <Button href="/reservations" className="mt-4 w-full min-h-12">
                {t("reserve")}
              </Button>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
