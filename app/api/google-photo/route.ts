import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const photoName = searchParams.get('photoName')
  const photoReference = searchParams.get('photoReference')
  const apiKey = process.env.GOOGLE_PLACES_API_KEY

  console.log('[PHOTO PROXY] Request params:', { photoName, photoReference })

  if (!apiKey) {
    console.error('[PHOTO PROXY] Missing API Key')
    return new NextResponse('Missing API Key', { status: 500 })
  }

  if (!photoName && !photoReference) {
    console.error('[PHOTO PROXY] Missing photoName or photoReference')
    return new NextResponse('Missing photoName or photoReference', { status: 400 })
  }

  try {
    let imageUrl: string
    let headers: Record<string, string> = {}

    if (photoReference) {
      // Legacy Places API Photo endpoint
      console.log('[PHOTO PROXY] Using legacy API for photo_reference:', photoReference.substring(0, 20))
      imageUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${photoReference}&key=${apiKey}`
    } else if (photoName) {
      // Places API (New) - Try multiple approaches
      console.log('[PHOTO PROXY] Using new API for photo:', photoName)
      
      // Try with API key in query parameter
      imageUrl = `https://places.googleapis.com/v1/${photoName}/media?maxHeightPx=800&maxWidthPx=800&key=${apiKey}`
      
      // Also try with header approach
      headers = {
        'X-Goog-Api-Key': apiKey
      }
    } else {
      return new NextResponse('Invalid request', { status: 400 })
    }

    console.log('[PHOTO PROXY] Fetching from:', imageUrl.substring(0, 100) + '...')

    const googleResponse = await fetch(imageUrl, {
      headers: Object.keys(headers).length > 0 ? headers : undefined,
      redirect: 'follow'
    })

    console.log('[PHOTO PROXY] Response status:', googleResponse.status, googleResponse.statusText)
    console.log('[PHOTO PROXY] Response headers:', Object.fromEntries(googleResponse.headers.entries()))

    if (!googleResponse.ok) {
      const errorText = await googleResponse.text().catch(() => 'Could not read error')
      console.error(`[PHOTO PROXY] Error ${googleResponse.status}:`, errorText)
      return new NextResponse(`Failed to fetch image: ${googleResponse.status}`, { 
        status: googleResponse.status 
      })
    }

    const imageBuffer = await googleResponse.arrayBuffer()
    const contentType = googleResponse.headers.get('content-type') || 'image/jpeg'
    
    console.log('[PHOTO PROXY] Success! Image size:', imageBuffer.byteLength, 'bytes, Content-Type:', contentType)

    return new NextResponse(Buffer.from(imageBuffer), {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=3600, s-maxage=3600'
      }
    })
  } catch (error: any) {
    console.error('[PHOTO PROXY] Exception:', error.message, error.stack)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
