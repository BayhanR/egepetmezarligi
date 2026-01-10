const BAYHAN_API_URL = process.env.NEXT_PUBLIC_BAYHAN_API_URL || 'https://bayhan.tech'
const BAYHAN_API_TOKEN = process.env.BAYHAN_API_TOKEN

export interface Memorial {
    id: string
    name: string
    description: string | null
    images: string[]
}

export async function getMemorials(): Promise<Memorial[]> {
    try {
        const headers: HeadersInit = {
            'Content-Type': 'application/json',
        }

        if (BAYHAN_API_TOKEN) {
            headers['Authorization'] = `Bearer ${BAYHAN_API_TOKEN}`
        }

        // Use the memorials specific endpoint I created
        const response = await fetch(`${BAYHAN_API_URL}/api/memorials`, {
            headers,
            next: { revalidate: 60 } // Revalidate every minute
        })

        if (!response.ok) {
            console.error(`Bayhan API error: ${response.status}`)
            return []
        }

        const data = await response.json()
        return data.memorials || Array.isArray(data) ? data : []
    } catch (error) {
        console.error('Bayhan memorials fetch error:', error)
        return []
    }
}
