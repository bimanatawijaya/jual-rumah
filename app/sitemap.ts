import type { MetadataRoute } from "next"
import { property } from "@/data/property"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jualrumahdramaga.web.id"

  return [
    {
      url: baseUrl,
      lastModified: new Date(property.updated_at),
      changeFrequency: "weekly",
      priority: 1,
      images: property.images.map((img) => `${baseUrl}${img.url}`),
    },
  ]
}
