import { MetadataRoute } from 'next'
import { getAllLocationSlugs } from '@/lib/locations'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://egepetmezarligi.com'
  const locationSlugs = getAllLocationSlugs()

  const locationPages = locationSlugs.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...locationPages,
  ]
}

