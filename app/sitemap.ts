import { MetadataRoute } from 'next'
import { getAllLocationSlugs } from '@/lib/locations'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://egepetmezarligi.com'
  const locationSlugs = getAllLocationSlugs()

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/genis-bolge-hizmeti`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  const locationPages: MetadataRoute.Sitemap = locationSlugs
    .filter((slug) => slug && slug.trim().length > 0)
    .map((slug) => ({
      url: `${baseUrl}/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    }))

  return [...staticPages, ...locationPages]
}
