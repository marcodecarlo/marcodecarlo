import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
        disallow: ["/cookiepolicy"],
      },
    ],
    sitemap: [
      "https://marcodecarlo.com/sitemap.xml",
      "https://marcodecarlo.com/progetti/sitemap.xml",
    ],
  };
}
