"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { locations } from "@/lib/locations"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, ArrowRight, Truck } from "lucide-react"

export function LocationLinksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const shouldReduceMotion = useReducedMotion()

  const featuredLocations = locations.slice(0, 10)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.06,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  }

  const cardVariants = {
    hidden: shouldReduceMotion
      ? { opacity: 1 }
      : {
          opacity: 0,
          y: 25,
          clipPath: "inset(15% 0% 0% 0% round 1rem)",
        },
    visible: {
      opacity: 1,
      y: 0,
      clipPath: "inset(0% 0% 0% 0% round 1rem)",
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-20 bg-muted/30 dark:bg-transparent">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : shouldReduceMotion ? { opacity: 1 } : {}}
          transition={{ duration: shouldReduceMotion ? 0 : 0.7 }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="inline-block px-3.5 py-1 rounded-full bg-[rgba(249,54,68,0.1)] text-[--brand-primary] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3">
            Hizmet Ağımız
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 px-2">
            Hizmet Verdiğimiz Bölgeler
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto px-4">
            İzmir ve yakın ilçelerinde 7/24 acil cenaze nakil ve Kemalpaşa Huzur Bahçesi'nde ebedi defin hizmeti sunuyoruz.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : shouldReduceMotion ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-5 max-w-6xl mx-auto"
        >
          {featuredLocations.map((location) => (
            <motion.div key={location.slug} variants={cardVariants}>
              <Link href={`/${location.slug}`} className="group block h-full">
                <Card className="h-full border rounded-2xl shadow-sm bg-card hover:shadow-md hover:border-[--brand-primary] transition-all duration-300">
                  <CardContent className="p-4 text-center flex flex-col items-center justify-center h-full">
                    <div className="w-10 h-10 rounded-xl bg-[rgba(249,54,68,0.1)] flex items-center justify-center mb-2.5 group-hover:bg-[rgba(249,54,68,0.2)] transition-colors">
                      <MapPin className="w-5 h-5 text-[--brand-primary]" />
                    </div>
                    <h3 className="font-serif text-base sm:text-lg font-bold mb-1 group-hover:text-[--brand-primary] transition-colors">
                      {location.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">{location.distance} ({location.duration})</p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Distant regions banner */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : shouldReduceMotion ? { opacity: 1 } : {}}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.35 }}
          className="mt-8 sm:mt-10 max-w-4xl mx-auto p-4 sm:p-5 rounded-2xl border border-border bg-card shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[rgba(249,54,68,0.1)] flex items-center justify-center text-[--brand-primary] flex-shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <p className="font-serif font-bold text-foreground text-sm sm:text-base">
                Muğla, Aydın, Balıkesir, Denizli veya Uşak'tan mı ulaşıyorsunuz?
              </p>
              <p className="text-xs text-muted-foreground">
                100 km ve üzeri mesafeler için randevulu geniş bölge ve şehirlerarası transfer hizmetimiz mevcuttur.
              </p>
            </div>
          </div>
          <Link
            href="/genis-bolge-hizmeti"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[--brand-primary] hover:text-[--brand-primary-hover] whitespace-nowrap"
          >
            Detayları İnceleyin <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
