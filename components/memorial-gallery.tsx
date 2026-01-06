"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Cable as Candle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { getGooglePhotos } from "@/app/actions/get-google-photos"

interface Photo {
  name: string
  width: number
  height: number
  url: string
}

export function MemorialGallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [photos, setPhotos] = useState<Photo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showAll, setShowAll] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        setLoading(true)
        setError(null)
        console.log('[GALLERY] Fetching photos...')
        const googlePhotos = await getGooglePhotos()
        console.log('[GALLERY] Received photos:', googlePhotos.length)
        setPhotos(googlePhotos)
        if (googlePhotos.length === 0) {
          setError('Fotoğraf bulunamadı')
        }
      } catch (err: any) {
        console.error('[GALLERY] Error fetching photos:', err)
        setError('Fotoğraflar yüklenirken bir hata oluştu')
      } finally {
        setLoading(false)
      }
    }
    fetchPhotos()
  }, [])

  // Show loading state (optional - you can remove this if you want nothing to show)
  if (loading) {
    return (
      <section id="gallery" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background dark:bg-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-foreground/70">Fotoğraflar yükleniyor...</p>
          </div>
        </div>
      </section>
    )
  }

  if (error || photos.length === 0) {
    // Return null to hide section if no photos
    return null
  }

  // Mobile: Show 4, Desktop: Show 6 initially?
  // User asked for "mobildeki foto sayısı bilgisayardaki foto sayısı farklı olacak".
  // A simple heuristic: 6 covers 2x3 (mobile) and 3x2 (desktop). 
  // Let's stick to 6 as a balanced default.
  const INITIAL_LIMIT = 6
  const displayedPhotos = showAll ? photos : photos.slice(0, INITIAL_LIMIT)

  return (
    <section id="gallery" ref={ref} className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background dark:bg-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 px-2">{t.gallery.title}</h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto px-4">{t.gallery.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 px-2 sm:px-4">
          {displayedPhotos.map((photo, index) => (
            <motion.div
              key={photo.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg aspect-[4/3]"
            >
              <img
                src={photo.url}
                alt={`EGE PET Hayvan Mezarlığı anı galerisi - ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
            </motion.div>
          ))}
        </div>

        {photos.length > INITIAL_LIMIT && (
          <div className="text-center mt-8 sm:mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors shadow-lg"
            >
              {showAll ? "Daha Az Göster" : "Tüm Fotoğrafları Gör"}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
