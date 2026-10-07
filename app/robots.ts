import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/fit/"],
    },
    sitemap: "https://muhammadawais.dev/sitemap.xml",
  };
}
