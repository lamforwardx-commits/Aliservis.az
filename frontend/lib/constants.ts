export const SITE_URL = "https://arazterrace.az";

export const RESTAURANT = {
  name: "Araz Terrace",
  legalName: "Araz Terrace Restaurant",
  tagline: {
    az: "Bakının ürəyində lüks terras mətbəxi",
    tr: "Bakü'nün kalbinde lüks teras mutfağı",
  },
  description: {
    az: "Araz Terrace Bakının mərkəzində yerləşən lüks restoran və yay terrasıdır. Azərbaycan mətbəxi, kömür kababları, Şah plov və isti qonaqpərvərlik təklif edir.",
    tr: "Araz Terrace, Bakü merkezinde yer alan lüks restoran ve yaz terasıdır. Azerbaycan mutfağı, köz kebapları, Şah pilav ve sıcak misafirperverlik sunar.",
  },
  address: {
    street: "İslam Səfərli küçəsi 1",
    city: "Bakı",
    region: "Səbail",
    postalCode: "1000",
    country: "AZ",
    countryName: { az: "Azərbaycan", tr: "Azerbaycan" },
  },
  geo: {
    latitude: 40.3705272,
    longitude: 49.8357624,
  },
  phone: "+994 50 318 02 07",
  phoneSecondary: "+994 12 492 48 46",
  email: "hello@arazterrace.az",
  hours: {
    label: { az: "Hər gün 10:00 – 01:45", tr: "Her gün 10:00 – 01:45" },
    opens: "10:00",
    closes: "01:45",
  },
  priceRange: "$$",
  cuisine: ["Azerbaijani", "Grill", "Seafood", "International"],
  rating: {
    value: 4.6,
    count: 2981,
  },
  social: {
    instagram: "https://instagram.com/arazterrace",
    facebook: "https://facebook.com/arazterrace",
    tripadvisor: "https://www.tripadvisor.com/Search?q=Araz%20Terrace%20Baku",
  },
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.2!2d49.8357624!3d40.3705272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307db731c578f5%3A0x9daba3c986c09810!2sAraz%20Terrace!5e0!3m2!1sen!2saz!4v1700000000000!5m2!1sen!2saz",
  mapsUrl: "https://maps.google.com/?q=Araz+Terrace+Baku",
  stats: {
    dishes: 167,
    serviceHours: "15+",
  },
} as const;

export const NAV_KEYS = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/menu", key: "menu" },
  { href: "/gallery", key: "gallery" },
  { href: "/events", key: "events" },
  { href: "/reservations", key: "reservations" },
  { href: "/contact", key: "contact" },
] as const;

export const HERO_IMAGES = [
  "/images/hero/hero-1.webp",
  "/images/hero/hero-2.webp",
  "/images/exterior/exterior-1.webp",
] as const;

export const GALLERY_IMAGES = [
  { id: "g1", src: "/images/gallery/gallery-1.webp", span: "tall" },
  { id: "g2", src: "/images/gallery/gallery-2.webp", span: "wide" },
  { id: "g3", src: "/images/gallery/gallery-3.webp", span: "square" },
  { id: "g4", src: "/images/gallery/gallery-4.webp", span: "tall" },
  { id: "g5", src: "/images/gallery/gallery-5.webp", span: "square" },
  { id: "g6", src: "/images/gallery/gallery-6.webp", span: "wide" },
  { id: "g7", src: "/images/gallery/gallery-7.webp", span: "square" },
  { id: "g8", src: "/images/gallery/gallery-8.webp", span: "tall" },
  { id: "g9", src: "/images/interior/interior-1.webp", span: "wide" },
  { id: "g10", src: "/images/interior/interior-2.webp", span: "square" },
  { id: "g11", src: "/images/exterior/exterior-1.webp", span: "tall" },
  { id: "g12", src: "/images/exterior/exterior-2.webp", span: "square" },
] as const;
