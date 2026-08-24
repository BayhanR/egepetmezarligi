"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useMemo } from "react"
import { Flame as Candle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Memorial } from "@/lib/api"

export function MemorialGallery({ memorials = [] }: { memorials?: Memorial[] }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const shouldReduceMotion = useReducedMotion()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const { t } = useLanguage()

  // Sadece aynı görsel setinin tekrar etmesini engelleyen tekilleştirme
  const uniqueMemorials = useMemo(() => {
    const seen = new Set<string>()
    return memorials.filter((m) => {
      const key = m.images?.[0] || m.id || m.name
      if (!key || seen.has(key)) return false
      seen.add(key)
      return true
    })
  }, [memorials])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  }

  const cardVariants = {
    hidden: shouldReduceMotion
      ? { opacity: 1 }
      : {
          opacity: 0,
          y: 35,
          clipPath: "inset(12% 0% 0% 0% round 1rem)",
        },
    visible: {
      opacity: 1,
      y: 0,
      clipPath: "inset(0% 0% 0% 0% round 1rem)",
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section id="gallery" ref={ref} className="py-16 md:py-24 bg-background dark:bg-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : shouldReduceMotion ? { opacity: 1 } : {}}
          transition={{ duration: shouldReduceMotion ? 0 : 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 px-2">
            {t.gallery.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto px-4">
            {t.gallery.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : shouldReduceMotion ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-5 md:gap-6 px-2 sm:px-4 max-w-6xl mx-auto"
        >
          {uniqueMemorials.map((memorial, index) => (
            <motion.div
              key={memorial.id || memorial.name || `memorial-${index}`}
              variants={cardVariants}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg border border-border/40 aspect-[4/3]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.img
                src={memorial.images[0] || "/placeholder.svg"}
                alt={`${memorial.name} - Ege Pet Hayvan Mezarlığı anı görseli`}
                className="w-full h-full object-cover"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.08 }}
                transition={{ duration: 0.4 }}
                loading="lazy"
              />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent flex flex-col items-center justify-center transition-opacity duration-300 px-3 text-center"
              >
                <Candle className="w-7 h-7 text-amber-300 mb-2 drop-shadow-md" />
                <p className="text-white font-serif text-xl sm:text-2xl font-bold">{memorial.name}</p>
                {memorial.description && (
                  <p className="text-white/80 text-xs mt-1 max-w-[200px] truncate">{memorial.description}</p>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
