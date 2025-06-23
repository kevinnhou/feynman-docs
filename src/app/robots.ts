import type { MetadataRoute } from "next"

import { site } from "@/config/site"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      allow: "/",
      userAgent: "*",
    },
    sitemap: `${site.links.baseUrl}/sitemap.xml`,
  }
}
