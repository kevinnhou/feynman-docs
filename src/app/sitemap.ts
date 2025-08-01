import { site } from "@/config/site"
import { source } from "@/lib/source"
import type { MetadataRoute } from "next"

export const revalidate = false

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = (path: string): string =>
    new URL(path, site.links.baseUrl).toString()

  return [
    {
      url: url("/"),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...(await Promise.all(
      source.getPages().map(async (page) => {
        return {
          url: url(page.url),
          lastModified: page.data.lastModified
            ? new Date(page.data.lastModified)
            : undefined,
          changeFrequency: "weekly",
          priority: 0.5,
        } as MetadataRoute.Sitemap[number]
      }),
    )),
  ]
}
