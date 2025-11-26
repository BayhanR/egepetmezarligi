"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Cable as Candle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const memorials = [
  { name: "Luna", image: "/peaceful-pet-memorial-stone-with-flowers-in-garden.jpg" },
  { name: "Milo", image: "/elegant-pet-grave-marker-with-candles-at-sunset.jpg" },
  { name: "Bella", image: "/serene-pet-cemetery-with-white-memorial-stones-and.jpg" },
  { name: "Max", image: "/beautiful-pet-memorial-plaque-with-roses-in-peacef.jpg" },
  { name: "Charlie", image: "/pet-grave-with-flowers-and-peaceful-natural-settin.jpg" },
  { name: "Daisy", image: "/tranquil-pet-memorial-garden-with-stone-markers-an.jpg" },
]

export function MemorialGallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const { t } = useLanguage()

  return (
    <section id="gallery" ref={ref} className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">{t.gallery.title}</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">{t.gallery.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {memorials.map((memorial, index) => (
            <motion.div
              key={memorial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.img
                src={memorial.image}
                alt={memorial.name}
                className="w-full h-64 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col items-center justify-center"
              >
                <Candle className="w-8 h-8 text-amber-300 mb-2" />
                <p className="text-white font-serif text-2xl font-bold">{memorial.name}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
