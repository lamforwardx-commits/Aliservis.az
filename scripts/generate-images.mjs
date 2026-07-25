import fs from "fs";
import path from "path";

function dishSvg(title, accent) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600" role="img" aria-label="${title}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0d0d0d"/>
      <stop offset="50%" stop-color="#161210"/>
      <stop offset="100%" stop-color="#0a0a0a"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="40%" r="50%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#000" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="800" height="600" fill="url(#bg)"/>
  <rect width="800" height="600" fill="url(#glow)"/>
  <circle cx="400" cy="260" r="120" fill="none" stroke="${accent}" stroke-width="1.5" opacity="0.55"/>
  <circle cx="400" cy="260" r="78" fill="${accent}" opacity="0.12"/>
  <ellipse cx="400" cy="270" rx="95" ry="28" fill="${accent}" opacity="0.18"/>
  <path d="M300 270c40-55 160-55 200 0" fill="none" stroke="${accent}" stroke-width="2" opacity="0.7"/>
  <text x="400" y="430" text-anchor="middle" fill="#E8D5A3" font-family="Georgia, serif" font-size="28" letter-spacing="2">${title}</text>
  <text x="400" y="470" text-anchor="middle" fill="#C9A962" font-family="Arial, sans-serif" font-size="12" letter-spacing="4" opacity="0.8">ARAZ TERRACE</text>
</svg>`;
}

function gallerySvg(title, w, h) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${title}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#111"/>
      <stop offset="100%" stop-color="#1a1510"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)"/>
  <rect x="8%" y="8%" width="84%" height="84%" fill="none" stroke="#C9A962" stroke-opacity="0.35"/>
  <circle cx="50%" cy="42%" r="18%" fill="#C9A962" fill-opacity="0.12"/>
  <text x="50%" y="78%" text-anchor="middle" fill="#E8D5A3" font-family="Georgia, serif" font-size="22">${title}</text>
</svg>`;
}

const dishes = [
  ["breakfast-platter", "Breakfast"],
  ["menemen", "Menemen"],
  ["omelette", "Omelette"],
  ["pancakes", "Pancakes"],
  ["plov", "Shah Plov"],
  ["dolma", "Dolma"],
  ["kutab", "Kutab"],
  ["dushbara", "Dushbara"],
  ["piti", "Piti"],
  ["lyulya", "Lyulya"],
  ["tika", "Lamb Tika"],
  ["chicken-kebab", "Chicken"],
  ["mixed-grill", "Mixed Grill"],
  ["ribeye", "Ribeye"],
  ["filet", "Filet"],
  ["tomahawk", "Tomahawk"],
  ["salmon", "Salmon"],
  ["prawns", "Prawns"],
  ["sea-bass", "Sea Bass"],
  ["pakhlava", "Pakhlava"],
  ["shekerbura", "Shekerbura"],
  ["honey-cake", "Honey Cake"],
  ["tea", "Thyme Tea"],
  ["pomegranate", "Pomegranate"],
  ["ayran", "Ayran"],
  ["mocktail", "Mocktail"],
];

const galleries = [
  ["terrace-evening", "Terrace Evening", 800, 1100],
  ["plov-table", "Shah Plov", 1100, 700],
  ["grill-fire", "Charcoal Grill", 800, 800],
  ["interior-gold", "Golden Interior", 800, 1100],
  ["tea-service", "Tea Service", 800, 800],
  ["seafood-plate", "Seafood", 1100, 700],
  ["dessert-board", "Desserts", 800, 800],
  ["vip-hall", "VIP Hall", 800, 1100],
  ["breakfast", "Breakfast", 1100, 700],
  ["city-night", "Baku Nights", 800, 800],
  ["steak-cut", "Steak", 800, 1100],
  ["cheers", "Celebration", 800, 800],
];

const dishDir = path.join("public", "images", "dishes");
const galDir = path.join("public", "images", "gallery");
fs.mkdirSync(dishDir, { recursive: true });
fs.mkdirSync(galDir, { recursive: true });
fs.mkdirSync(path.join("public", "icons"), { recursive: true });

dishes.forEach(([file, title], i) => {
  const accent = ["#C9A962", "#D4AF37", "#B8954A", "#E8D5A3"][i % 4];
  fs.writeFileSync(path.join(dishDir, `${file}.svg`), dishSvg(title, accent));
});

galleries.forEach(([file, title, w, h]) => {
  fs.writeFileSync(path.join(galDir, `${file}.svg`), gallerySvg(title, w, h));
});

const hero = `<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080" viewBox="0 0 1920 1080">
  <defs>
    <linearGradient id="h" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0b0b0b"/>
      <stop offset="55%" stop-color="#17120c"/>
      <stop offset="100%" stop-color="#050505"/>
    </linearGradient>
    <radialGradient id="gold" cx="70%" cy="35%" r="45%">
      <stop offset="0%" stop-color="#C9A962" stop-opacity="0.28"/>
      <stop offset="100%" stop-color="#000" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1920" height="1080" fill="url(#h)"/>
  <rect width="1920" height="1080" fill="url(#gold)"/>
  <path d="M0 780 Q480 680 960 760 T1920 720 L1920 1080 L0 1080 Z" fill="#C9A962" fill-opacity="0.06"/>
  <text x="160" y="860" fill="#E8D5A3" font-family="Georgia, serif" font-size="64" letter-spacing="8">ARAZ TERRACE</text>
</svg>`;
fs.writeFileSync(path.join("public", "images", "hero.svg"), hero);

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0a0a0a"/>
  <circle cx="980" cy="160" r="220" fill="#C9A962" fill-opacity="0.18"/>
  <text x="80" y="300" fill="#E8D5A3" font-family="Georgia, serif" font-size="72">Araz Terrace</text>
  <text x="80" y="360" fill="#C9A962" font-family="Arial, sans-serif" font-size="24" letter-spacing="4">LUXURY DINING IN BAKU</text>
</svg>`;
fs.writeFileSync(path.join("public", "images", "og-cover.svg"), og);

const fav = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#0a0a0a"/><text x="32" y="42" text-anchor="middle" fill="#C9A962" font-family="Georgia, serif" font-size="28" font-weight="700">A</text></svg>`;
fs.writeFileSync(path.join("public", "favicon.svg"), fav);
fs.writeFileSync(path.join("public", "icons", "apple-touch-icon.svg"), fav);

console.log("Generated", dishes.length, "dishes and", galleries.length, "gallery images");
