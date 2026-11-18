const BAYHAN_API_URL = process.env.NEXT_PUBLIC_BAYHAN_API_URL || 'https://bayhan.tech'
const BAYHAN_API_TOKEN = process.env.BAYHAN_API_TOKEN

export interface Memorial {
  id: string
  name: string
  description: string | null
  images: string[]
}

const localMemorials: Memorial[] = [
  {
    "id": "egepet-huzur-bahcesi-genel-01",
    "name": "Huzur Bahçesi — genel görünüm",
    "description": null,
    "images": [
      "/gallery/huzur-bahcesi-genel-01.jpg"
    ]
  },
  {
    "id": "egepet-sakir-ani-plaketi",
    "name": "Şakir",
    "description": null,
    "images": [
      "/gallery/sakir-ani-plaketi.jpg"
    ]
  },
  {
    "id": "egepet-bobo-ani-plaketi",
    "name": "Bobo",
    "description": null,
    "images": [
      "/gallery/bobo-ani-plaketi.jpg"
    ]
  },
  {
    "id": "egepet-kuki-ani-plaketi",
    "name": "Kuki — anı plaketi",
    "description": null,
    "images": [
      "/gallery/kuki-ani-plaketi.jpg"
    ]
  },
  {
    "id": "egepet-milky-ani-plaketi",
    "name": "Milky",
    "description": null,
    "images": [
      "/gallery/milky-ani-plaketi.jpg"
    ]
  },
  {
    "id": "egepet-maya-ani-plaketi",
    "name": "Maya — anı plaketi",
    "description": null,
    "images": [
      "/gallery/maya-ani-plaketi.jpg"
    ]
  },
  {
    "id": "egepet-lucky-ani-alani",
    "name": "Lucky",
    "description": null,
    "images": [
      "/gallery/lucky-ani-alani.jpg"
    ]
  },
  {
    "id": "egepet-maya-ani-alani",
    "name": "Maya — anı alanı",
    "description": null,
    "images": [
      "/gallery/maya-ani-alani.jpg"
    ]
  },
  {
    "id": "egepet-kuki-ani-alani",
    "name": "Kuki — anı alanı",
    "description": null,
    "images": [
      "/gallery/kuki-ani-alani.jpg"
    ]
  },
  {
    "id": "egepet-serlok-dumy-ani-alanlari",
    "name": "Şerlok ve Dumy",
    "description": null,
    "images": [
      "/gallery/serlok-dumy-ani-alanlari.jpg"
    ]
  },
  {
    "id": "egepet-lilly-ani-alani-01",
    "name": "Lilly — anı alanı",
    "description": null,
    "images": [
      "/gallery/lilly-ani-alani-01.jpg"
    ]
  },
  {
    "id": "egepet-lilly-ani-alani-02",
    "name": "Lilly — anı alanından bir görünüm",
    "description": null,
    "images": [
      "/gallery/lilly-ani-alani-02.jpg"
    ]
  },
  {
    "id": "egepet-huzur-bahcesi-genel-02",
    "name": "Huzur Bahçesi — anı alanları",
    "description": null,
    "images": [
      "/gallery/huzur-bahcesi-genel-02.jpg"
    ]
  },
  {
    "id": "egepet-huzur-bahcesi-genel-03",
    "name": "Huzur Bahçesi — doğayla iç içe",
    "description": null,
    "images": [
      "/gallery/huzur-bahcesi-genel-03.jpg"
    ]
  },
  {
    "id": "egepet-huzur-bahcesi-genel-04",
    "name": "Huzur Bahçesi — bahçeden bir görünüm",
    "description": null,
    "images": [
      "/gallery/huzur-bahcesi-genel-04.jpg"
    ]
  },
  {
    "id": "egepet-huzur-bahcesi-genel-05",
    "name": "Huzur Bahçesi — genel görünüm",
    "description": null,
    "images": [
      "/gallery/huzur-bahcesi-genel-05.jpg"
    ]
  },
  {
    "id": "egepet-sakir-ani-fotografi",
    "name": "Şakir — anı fotoğrafı",
    "description": null,
    "images": [
      "/gallery/sakir-ani-fotografi.jpg"
    ]
  }
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
        return deduplicateMemorials([...localMemorials, ...deduped])
      }
    }

    return localMemorials
  } catch (error) {
    console.error('Memorials API error, using original customer memorials:', error)
    return localMemorials
  }
}
