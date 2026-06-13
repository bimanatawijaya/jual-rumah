import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jualrumahdramaga.web.id"

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: [
        `${baseUrl}/images/images.jpeg`,
        `${baseUrl}/images/images_r_tamu.jpeg`,
        `${baseUrl}/images/images_dapur.jpeg`,
        `${baseUrl}/images/images_kamar_mandi.jpeg`,
        `${baseUrl}/images/images_halaman.jpeg`,
        `${baseUrl}/images/images2.jpeg`,
      ],
    },
  ]
}
