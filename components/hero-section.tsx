"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useState, useEffect } from "react"

export function HeroSection() {
  const { t } = useLanguage()
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 })
  const highlights = [
    {
      label: t.hero.highlights?.garden ?? "Doğal Anı Bahçesi",
      value: "2 dönüm",
      detail: t.hero.highlights?.gardenDetail ?? "şehre kapalı, sadece ailelere ayrılmış doğal alan",
    },
    {
      label: t.hero.highlights?.ceremony ?? "Özel Tören Desteği",
      value: t.hero.highlights?.ceremonyValue ?? "Kişisel ritüeller",
      detail: t.hero.highlights?.ceremonyDetail ?? "her dost için özelleştirilmiş anma planlaması",
    },
    {
      label: t.hero.highlights?.support ?? "7/24 Destek",
      value: "365 gün",
      detail: t.hero.highlights?.supportDetail ?? "tüm süreç boyunca yanınızda profesyonel ekip",
    },
  ]

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDimensions({ width: window.innerWidth, height: window.innerHeight })
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-[100vh] sm:min-h-[110vh] flex items-center justify-center overflow-hidden section-dark pb-8 sm:pb-12 md:pb-14 -mt-16 sm:-mt-20"
    >
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/bgimage.png)",
          backgroundSize: "110%",
          backgroundPosition: "bottom center",
        }}
        aria-label="EGE PET Hayvan Mezarlığı - Doğayla iç içe huzurlu anı bahçesi arka plan görseli"
      >
        <div className="absolute inset-0 hero-overlay" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-20 sm:pt-28 md:pt-32 lg:pt-36 pb-4 text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white mb-4 sm:mb-6 max-w-4xl leading-tight mx-auto md:mx-0 px-2 sm:px-0"
        >
          {t.hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.3 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto md:mx-0 px-2 sm:px-0"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 2.6,
            type: "spring",
            stiffness: 100,
          }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start items-center px-2 sm:px-0"
        >
          <Button size="lg" className="px-6 sm:px-8 md:px-10 w-full sm:w-auto" asChild>
            <a href="#services">
              {t.hero.servicesBtn}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-6 sm:px-8 md:px-10 w-full sm:w-auto text-white border-white/40 hover:text-[--brand-primary] hover:border-[--brand-primary] bg-transparent"
            asChild
          >
            <a href="#contact">{t.hero.contactBtn}</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3 }}
          className="mt-12 sm:mt-14 md:mt-16 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-2 sm:px-0"
        >
          {highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-[1.4rem] border border-white/20 bg-white/10 p-4 sm:p-5 md:p-6 text-left text-white/90 backdrop-blur-3xl shadow-[0_25px_60px_rgba(0,0,0,0.25)] overflow-hidden"
              style={{ wordBreak: "break-word" }}
            >
              <p className="text-xs md:text-sm uppercase tracking-[0.18em] text-white/70 break-words">{item.label}</p>
              <p className="text-3xl sm:text-4xl font-serif font-semibold my-2">{item.value}</p>
              <p className="text-white/70 text-sm leading-relaxed break-words">{item.detail}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            initial={{
              x: Math.random() * dimensions.width,
              y: -20,
            }}
            animate={{
              y: dimensions.height + 20,
              x: Math.random() * dimensions.width,
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </section>
  )
}
