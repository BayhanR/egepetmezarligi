"use client"

import { useEffect, useRef } from "react"

interface Location {
  title: string
  address1: string
  address2: string
  coords: {
    lat: number
    lng: number
  }
  placeId: string
}

interface GoogleMapsLocatorProps {
  locations?: Location[]
  apiKey?: string
  height?: string
}

export function GoogleMapsLocator({ 
  locations = [
    {
      title: "Ege Pet Mezarlığı",
      address1: "Dereköy Kemalpaşa İzmir",
      address2: "Kemalpaşa, İzmir, Türkiye",
      coords: { lat: 38.3423087, lng: 27.4372834 },
      placeId: "ChIJLeh-5u5vuRQR0-0LLcSB3wg"
    }
  ],
  apiKey,
  height = "400px"
}: GoogleMapsLocatorProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const initializedRef = useRef(false)

  useEffect(() => {
    if (!containerRef.current || initializedRef.current) return

    const mapsApiKey = apiKey || process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "AIzaSyBySceinQih7qB1nkawTXWmB48Hj4l6NMs"
    
    // Script yüklü mü kontrol et
    const existingScript = document.querySelector('script[src*="extended-component-library"]')
    
    const initMap = () => {
      if (initializedRef.current) return
      
      // Ortalama koordinatları hesapla
      const avgLat = locations.reduce((sum, loc) => sum + loc.coords.lat, 0) / locations.length
      const avgLng = locations.reduce((sum, loc) => sum + loc.coords.lng, 0) / locations.length

      const configuration = {
        locations: locations,
        mapOptions: {
          center: { lat: avgLat, lng: avgLng },
          fullscreenControl: true,
          mapTypeControl: false,
          streetViewControl: false,
          zoom: 12,
          zoomControl: true,
          maxZoom: 17,
          mapId: ""
        },
        mapsApiKey: mapsApiKey,
        capabilities: {
          input: false,
          autocomplete: false,
          directions: false,
          distanceMatrix: false,
          details: false,
          actions: false
        }
      }

      // Component'ler yüklendikten sonra configure et
      customElements.whenDefined("gmpx-store-locator").then(() => {
        const locator = containerRef.current?.querySelector("gmpx-store-locator") as any
        if (locator && !initializedRef.current) {
          locator.configureFromQuickBuilder(configuration)
          initializedRef.current = true
        }
      }).catch(() => {
        // Fallback: Eğer component yüklenemezse iframe kullan
        console.warn("Google Maps Extended Component Library yüklenemedi, iframe kullanılıyor")
        if (containerRef.current) {
          containerRef.current.innerHTML = `
            <iframe
              src="https://www.google.com/maps?q=${encodeURIComponent(locations[0].address1)}&output=embed"
              width="100%"
              height="100%"
              style="border: 0; border-radius: 1.5rem;"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="EGE PET Hayvan Mezarlığı Konumu - Google Maps"
            />
          `
        }
      })
    }

    if (existingScript) {
      // Script zaten yüklü, direkt init et
      initMap()
    } else {
      // Script'i yükle
      const script = document.createElement("script")
      script.type = "module"
      script.src = "https://ajax.googleapis.com/ajax/libs/@googlemaps/extended-component-library/0.6.11/index.min.js"
      script.async = true
      
      script.onload = initMap
      script.onerror = () => {
        console.error("Google Maps script yüklenemedi")
        // Fallback iframe
        if (containerRef.current) {
          containerRef.current.innerHTML = `
            <iframe
              src="https://www.google.com/maps?q=${encodeURIComponent(locations[0].address1)}&output=embed"
              width="100%"
              height="100%"
              style="border: 0; border-radius: 1.5rem;"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="EGE PET Hayvan Mezarlığı Konumu - Google Maps"
            />
          `
        }
      }

      document.head.appendChild(script)
    }
  }, [locations, apiKey])

  const mapsApiKey = apiKey || process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "AIzaSyBySceinQih7qB1nkawTXWmB48Hj4l6NMs"

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        gmpx-store-locator {
          width: 100%;
          height: 100%;
          --gmpx-color-surface: #fff;
          --gmpx-color-on-surface: #212121;
          --gmpx-color-on-surface-variant: #757575;
          --gmpx-color-primary: #f93644;
          --gmpx-color-outline: #e0e0e0;
          --gmpx-fixed-panel-width-row-layout: 28.5em;
          --gmpx-fixed-panel-height-column-layout: 65%;
          --gmpx-font-family-base: "Roboto", sans-serif;
          --gmpx-font-family-headings: "Roboto", sans-serif;
          --gmpx-font-size-base: 0.875rem;
          --gmpx-hours-color-open: #188038;
          --gmpx-hours-color-closed: #d50000;
          --gmpx-rating-color: #ffb300;
          --gmpx-rating-color-empty: #e0e0e0;
        }
      `}} />
      <div 
        ref={containerRef}
        style={{ 
          width: "100%", 
          height,
          minHeight: "400px",
          borderRadius: "1.5rem",
          overflow: "hidden"
        }}
        className="shadow-xl bg-white"
        dangerouslySetInnerHTML={{
          __html: `
            <gmpx-api-loader 
              key="${mapsApiKey}" 
              solution-channel="GMP_QB_locatorplus_v11_c"
            ></gmpx-api-loader>
            <gmpx-store-locator map-id="DEMO_MAP_ID"></gmpx-store-locator>
          `
        }}
      />
    </>
  )
}
