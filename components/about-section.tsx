"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { useLanguage } from "@/lib/language-context"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLanguage()
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 })

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDimensions({ width: window.innerWidth, height: window.innerHeight })
    }
  }, [])

  return (
    <section id="about" ref={ref} className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background dark:bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center px-2 sm:px-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-[1.5rem] overflow-hidden shadow-[var(--shadow-md)] border border-[--brand-gray]">
              <img
                src="/peaceful-pet-memorial-garden-with-flowers-and-tree.jpg"
                alt="EGE PET Hayvan Mezarlığı - Doğayla iç içe huzurlu anı bahçesi, çiçekler ve ağaçlarla çevrili pet mezarlığı alanı"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">{t.about.title}</h2>
            <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-foreground/75 leading-relaxed">
              <p>{t.about.paragraph1}</p>
              <p>{t.about.paragraph2}</p>
              <p>{t.about.paragraph3}</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Leaf Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl"
            initial={{
              x: Math.random() * dimensions.width,
              y: -50,
              rotate: 0,
            }}
            animate={{
              y: dimensions.height + 50,
              x: Math.random() * dimensions.width,
              rotate: 360,
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          >
            🍃
          </motion.div>
        ))}
      </div>
    </section>
  )
}
