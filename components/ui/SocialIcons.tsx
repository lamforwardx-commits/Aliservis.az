import { MapPin } from "lucide-react";
import { RESTAURANT } from "@/lib/constants";
import { cn } from "@/lib/utils";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z" />
    </svg>
  );
}

const links = [
  {
    href: RESTAURANT.social.instagram,
    label: "Instagram",
    icon: InstagramIcon,
  },
  {
    href: RESTAURANT.social.facebook,
    label: "Facebook",
    icon: FacebookIcon,
  },
  {
    href: RESTAURANT.mapsUrl,
    label: "Google Maps",
    icon: MapPin,
  },
];

export function SocialIcons({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {links.map(({ href, label, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-gold transition hover:bg-gold/10 focus-ring"
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}
