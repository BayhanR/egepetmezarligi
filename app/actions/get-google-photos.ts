'use server'

export async function getGooglePhotos() {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY
    const placeId = process.env.GOOGLE_PLACE_ID

    console.log('[DEBUG] ========== Fetching Google Photos ==========')
    console.log('[DEBUG] Place ID:', placeId)
    console.log('[DEBUG] API Key present:', !!apiKey, apiKey?.substring(0, 5) + '...')

    if (!apiKey || !placeId) {
        console.error('[ERROR] Missing Google Places API credentials')
        console.error('[ERROR] GOOGLE_PLACES_API_KEY:', !!apiKey)
        console.error('[ERROR] GOOGLE_PLACE_ID:', !!placeId)
        return []
    }

    try {
        // Try Google Places API (New) first
        console.log('[DEBUG] Attempting Places API (New)...')
        const response = await fetch(
            `https://places.googleapis.com/v1/places/${placeId}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'X-Goog-Api-Key': apiKey,
                    'X-Goog-FieldMask': 'photos'
                },
                next: { revalidate: 3600 }
            }
        )

        console.log('[DEBUG] Response status:', response.status, response.statusText)

        if (!response.ok) {
            const text = await response.text()
            console.error(`[ERROR] Google Places API (New) error: ${response.status} ${response.statusText}`)
            console.error(`[ERROR] Response body:`, text)
            
            // Try alternative: Places API (Legacy) - Text Search or Place Details
            console.log('[DEBUG] Trying legacy Places API as fallback...')
            return await tryLegacyPlacesAPI(apiKey, placeId)
        }

        const data = await response.json()
        console.log('[DEBUG] API Response keys:', Object.keys(data))
        
        // Log photos structure
        if (data.photos) {
            console.log(`[DEBUG] Found ${data.photos.length} photos`)
            if (data.photos.length > 0) {
                console.log('[DEBUG] First photo structure:', JSON.stringify(data.photos[0], null, 2))
            }
        } else {
            console.log('[DEBUG] No photos property in response')
            console.log('[DEBUG] Full response:', JSON.stringify(data, null, 2))
        }

        if (!data.photos || data.photos.length === 0) {
            console.log('[DEBUG] No photos found, trying legacy API...')
            return await tryLegacyPlacesAPI(apiKey, placeId)
        }

        // Map photos and return with proxy URL
        const photos = data.photos.map((photo: any, index: number) => {
            console.log(`[DEBUG] Photo ${index}:`, {
                name: photo.name,
                widthPx: photo.widthPx,
                heightPx: photo.heightPx,
                authorAttributions: photo.authorAttributions
            })
            
            return {
                name: photo.name,
                width: photo.widthPx || 800,
                height: photo.heightPx || 600,
                url: `/api/google-photo?photoName=${encodeURIComponent(photo.name)}`
            }
        })

        console.log('[DEBUG] Successfully processed', photos.length, 'photos')
        return photos
    } catch (error: any) {
        console.error('[ERROR] Error fetching Google photos:', error)
        console.error('[ERROR] Error details:', error.message, error.stack)
        return []
    }
}

// Fallback: Try legacy Places API
async function tryLegacyPlacesAPI(apiKey: string, placeId: string) {
    try {
        console.log('[DEBUG] Trying legacy Places API...')
        // Legacy API uses photo_reference, but we need to get it from Place Details
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=photos&key=${apiKey}`,
            {
                next: { revalidate: 3600 }
            }
        )

        if (!response.ok) {
            console.error(`[ERROR] Legacy API error: ${response.status}`)
            return []
        }

        const data = await response.json()
        console.log('[DEBUG] Legacy API response status:', data.status)
        
        if (data.status === 'OK' && data.result?.photos) {
            console.log(`[DEBUG] Found ${data.result.photos.length} photos via legacy API`)
            return data.result.photos.map((photo: any, index: number) => ({
                name: `legacy_${photo.photo_reference}`,
                width: photo.width || 800,
                height: photo.height || 600,
                photoReference: photo.photo_reference,
                url: `/api/google-photo?photoReference=${encodeURIComponent(photo.photo_reference)}`
            }))
        }

        console.log('[DEBUG] Legacy API returned no photos')
        return []
    } catch (error: any) {
        console.error('[ERROR] Legacy API error:', error)
        return []
    }
}

