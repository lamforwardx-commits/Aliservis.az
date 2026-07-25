import fs from "fs";
import path from "path";
import sharp from "sharp";

const root = path.join(process.cwd(), "public", "images");

const sources = [
  {
    out: "hero/hero-2.webp",
    url: "https://triplira.com/api/image?url=" +
      encodeURIComponent(
        "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGDwWr0musjR60I880hbgiB7W5_eXiS4-9OqxMgANwmQdsGHAfrbVdG4BVpd2lN-OLcVJf3OPxna8wIB1B_KswUe0nVvK-UOibWyKOjwfJ6GpL2kIAAZV6KnDFT37lECM__m-zRKXe8iNnj=w1600-h1200",
      ),
  },
  {
    out: "exterior/exterior-1.webp",
    url: "https://triplira.com/api/image?url=" +
      encodeURIComponent(
        "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFCFsSNDjThX83dIM388Llvmfo1FcK5QhFd-ALxxR-xe5ghFc6jsYZ6Vj71TzgZOoLB3wqH94lVibPxnUIavBA5pS6fTiF1dgEUsLg946MMCZNggKm2V8JqkeCeWfvSaI7lPRRN=w1600-h1200",
      ),
  },
  {
    out: "exterior/exterior-2.webp",
    url: "https://triplira.com/api/image?url=" +
      encodeURIComponent(
        "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGeTk3fjfZKMbK3xEO5PsPKOG2Nklx-Up6dFVyoraPg17xqOJC7yzeN5SieSxB0ienbVAtSOU2hOTL6RPj-WRwd531dy3XscpzDLTJKv7tuB97B8NQ4xIIhPXPVQvNYaPJG3fwVyc0_rIqw=w1600-h1200",
      ),
  },
  {
    out: "gallery/gallery-1.webp",
    url: "https://triplira.com/api/image?url=" +
      encodeURIComponent(
        "https://lh3.googleusercontent.com/gps-cs-s/APNQkAF81UTuHHibVGhIX02zsAHpcvSspNYX2WksgalYMXOXoczZL4e0oCpU6MlS9Ljh9KgW8qVZhK0bAG7RSY9NtCYpRzKS4fOSLWvaIy0yzGqOet9lpTQeoeuyeX4aicA6ijuTl2MKjcX3xB8E=w1600-h1200",
      ),
  },
  {
    out: "gallery/gallery-3.webp",
    url: "https://triplira.com/api/image?url=" +
      encodeURIComponent(
        "https://lh3.googleusercontent.com/gps-cs-s/APNQkAG2OVVbQEJYjdKs44JW2a5LwPu4mgPofjYYa1nfNfz6-Km-k8B6yFAuWTO9QWSKlWsYYtjAUW3SbNYdBpa0-rDnhScjUHzNnViKJuBP2M0EEuj-DUSSusS7Y_AKJ3lvWrr91wRoMG_sooE=w1600-h1200",
      ),
  },
  {
    out: "gallery/gallery-4.webp",
    url: "https://triplira.com/api/image?url=" +
      encodeURIComponent(
        "https://lh3.googleusercontent.com/gps-cs-s/APNQkAH0NYLeZJOrudH7cJrBYK4nxlt3iPCWIOy2dTXb55GbyH-ab3IFHW7yFZwocNalRXH2poTBHHIyHukPW32bQ-tQBlejHvSykmOHq_uJyeGm5zAWi1Ldrrr47rtQNcyQHIP3gfcov7vr0t5Y=w1600-h1200",
      ),
  },
  {
    out: "menu/food-breakfast.webp",
    url: "https://triplira.com/api/image?url=" +
      encodeURIComponent(
        "https://lh3.googleusercontent.com/p/AF1QipM_BfTS6e1H9n5BtGFwWPYYsByk056moKYq89ZF=w1600-h1200",
      ),
  },
  {
    out: "events/events-1.webp",
    url: "https://triplira.com/api/image?url=" +
      encodeURIComponent(
        "https://lh3.googleusercontent.com/p/AF1QipM3P16QlmWFkxS2Rw2rgWP76pkMBSId9X8TTdby=w1600-h1200",
      ),
  },
  // Additional Yandex Maps photos of Araz Terrace
  {
    out: "gallery/gallery-5.webp",
    url: "https://avatars.mds.yandex.net/get-altay/15288852/2a000001971749296b813006bafb37d6395d/XXXL",
  },
  {
    out: "menu/food-plov.webp",
    url: "https://avatars.mds.yandex.net/get-altay/15288852/2a000001971749296b813006bafb37d6395d/XXL",
  },
];

async function fetchBuffer(url) {
  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
      Accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
      Referer: "https://triplira.com/",
    },
  });
  if (!res.ok) throw new Error(`${res.status} ${url.slice(0, 80)}`);
  return Buffer.from(await res.arrayBuffer());
}

for (const item of sources) {
  try {
    const buf = await fetchBuffer(item.url);
    const outPath = path.join(root, item.out);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    await sharp(buf)
      .rotate()
      .resize({ width: 1920, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(outPath);
    console.log("OK", item.out, `${Math.round(fs.statSync(outPath).size / 1024)}KB`);
  } catch (err) {
    console.error("FAIL", item.out, err.message);
  }
}
