import { MetadataRoute } from 'next'
import { getAllLocationSlugs } from '@/lib/locations'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://egepetmezarligi.com'
  const locationSlugs = getAllLocationSlugs()

  // Ana sayfa
  const mainPage = {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 1.0,
  }

  // Location sayfaları - boş slug'ları filtrele
  const locationPages = locationSlugs
    .filter((slug) => slug && slug.trim().length > 0) // Boş slug'ları filtrele
    .map((slug) => ({
      url: `${baseUrl}/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))
    .filter((page) => page.url && page.url.length > baseUrl.length + 1) // Geçerli URL kontrolü

  console.log(`[Sitemap] Generating sitemap with ${locationPages.length} location pages`)

  return [mainPage, ...locationPages]
}

