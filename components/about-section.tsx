"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { useLanguage } from "@/lib/language-context"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const shouldReduceMotion = useReducedMotion()
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-14 items-center px-2 sm:px-4 max-w-6xl mx-auto">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 40, clipPath: "inset(12% 0% 0% 0% round 1.5rem)" }}
            animate={isInView ? { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0% round 1.5rem)" } : shouldReduceMotion ? { opacity: 1 } : {}}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative rounded-[1.5rem] overflow-hidden shadow-xl border border-[--brand-gray] dark:border-border">
              <img
                src="/peaceful-pet-memorial-garden-with-flowers-and-tree.jpg"
                alt="Ege Pet Hayvan Mezarlığı - Kemalpaşa Huzur Bahçesi doğal anı alanı"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : shouldReduceMotion ? { opacity: 1 } : {}}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block px-3.5 py-1 rounded-full bg-[rgba(249,54,68,0.1)] text-[--brand-primary] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3">
              Huzur Bahçesi
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              {t.about.title}
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-foreground/80 leading-relaxed">
              <p>{t.about.paragraph1}</p>
              <p>{t.about.paragraph2}</p>
              <p>{t.about.paragraph3}</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Leaf Animation (disabled on reduced motion) */}
      {!shouldReduceMotion && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-3xl"
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
                duration: 16 + Math.random() * 8,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 4,
              }}
            >
              🍃
            </motion.div>
          ))}
        </div>
      )}
    </section>
  )
}
