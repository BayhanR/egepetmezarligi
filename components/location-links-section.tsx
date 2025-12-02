"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { locations } from "@/lib/locations"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"

export function LocationLinksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // İlleri ve önemli ilçeleri göster
  const mainLocations = locations.filter(
    (loc) => loc.type === "il" || ["Kuşadası", "Bodrum", "Fethiye", "Marmaris", "Manisa", "Aydın", "Salihli", "Turgutlu"].includes(loc.name)
  )

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-20 lg:py-24 bg-muted/30 dark:bg-transparent">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 px-2">
            Hizmet Verdiğimiz Bölgeler
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto px-4">
            İzmir, Manisa, Aydın, Balıkesir, Denizli, Uşak ve Muğla bölgelerinde evcil hayvan mezarlığı ve defin hizmeti sunuyoruz
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {mainLocations.map((location, index) => (
            <motion.a
              key={location.slug}
              href={`/${location.slug}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <Card className="h-full border-2 rounded-2xl shadow-lg bg-card hover:shadow-xl hover:border-[--brand-primary] transition-all duration-300">
                <CardContent className="p-4 sm:p-5 text-center">
                  <div className="w-12 h-12 rounded-xl bg-[rgba(249,54,68,0.1)] dark:bg-[rgba(249,54,68,0.15)] flex items-center justify-center mx-auto mb-3 group-hover:bg-[rgba(249,54,68,0.2)] transition-colors">
                    <MapPin className="w-6 h-6 text-[--brand-primary]" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold mb-1 group-hover:text-[--brand-primary] transition-colors">
                    {location.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/60">{location.distance}</p>
                </CardContent>
              </Card>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-8 sm:mt-12"
        >
          <a
            href="/#contact"
            className="text-[--brand-primary] hover:text-[--brand-primary-hover] transition-colors text-base sm:text-lg font-semibold"
          >
            Tüm bölgeleri görüntüle ve iletişime geçin →
          </a>
        </motion.div>
      </div>
    </section>
  )
}

