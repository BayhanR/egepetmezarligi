const BAYHAN_API_URL = process.env.NEXT_PUBLIC_BAYHAN_API_URL || 'https://bayhan.tech'
const BAYHAN_API_TOKEN = process.env.BAYHAN_API_TOKEN

export interface Memorial {
  id: string
  name: string
  description: string | null
  images: string[]
}

const fallbackMemorials: Memorial[] = [
  {
    id: "real-1",
    name: "Luna",
    description: "Huzur içinde uyu can dostumuz",
    images: ["/peaceful-pet-memorial-stone-with-flowers-in-garden.jpg"],
  },
  {
    id: "real-2",
    name: "Milo",
    description: "Kalbimizde daima yaşayacaksın",
    images: ["/elegant-pet-grave-marker-with-candles-at-sunset.jpg"],
  },
  {
    id: "real-3",
    name: "Bella",
    description: "Sonsuz sevgi ve özlemle",
    images: ["/serene-pet-cemetery-with-white-memorial-stones-and.jpg"],
  },
  {
    id: "real-4",
    name: "Max",
    description: "Sadık dostumuz, anın ölümsüz",
    images: ["/beautiful-pet-memorial-plaque-with-roses-in-peacef.jpg"],
  },
  {
    id: "real-5",
    name: "Charlie",
    description: "Doğanın kucağında huzurla uyu",
    images: ["/pet-grave-with-flowers-and-peaceful-natural-settin.jpg"],
  },
  {
    id: "real-6",
    name: "Daisy",
    description: "Bize kattığın tüm güzellikler için teşekkürler",
    images: ["/tranquil-pet-memorial-garden-with-stone-markers-an.jpg"],
  },
]

function deduplicateMemorials(list: Memorial[]): Memorial[] {
  const seenImages = new Set<string>()
  const seenIds = new Set<string>()
  const result: Memorial[] = []

  for (const item of list) {
    if (!item) continue
    const img = item.images?.[0]
    const id = item.id || img

    if (id && seenIds.has(id)) continue
    if (img && seenImages.has(img)) continue

    if (id) seenIds.add(id)
    if (img) seenImages.add(img)

    result.push(item)
  }

  return result
}

export async function getMemorials(): Promise<Memorial[]> {
  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 3500)

    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    }

    if (BAYHAN_API_TOKEN) {
      headers['Authorization'] = `Bearer ${BAYHAN_API_TOKEN}`
    }

    const response = await fetch(`${BAYHAN_API_URL}/api/memorials`, {
      headers,
      signal: controller.signal,
      next: { revalidate: 60 },
    }).catch(() => null)

    clearTimeout(timeoutId)

    if (response && response.ok) {
      const data = await response.json().catch(() => null)
      const rawList: Memorial[] = Array.isArray(data)
        ? data
        : data?.memorials && Array.isArray(data.memorials)
        ? data.memorials
        : []

      const deduped = deduplicateMemorials(rawList)
      if (deduped.length > 0) {
        return deduped
      }
    }

    return fallbackMemorials
  } catch (error) {
    console.error('Memorials API error, using original customer memorials:', error)
    return fallbackMemorials
  }
}
