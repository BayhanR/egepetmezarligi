"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, PhoneCall } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useState, useEffect } from "react"

export function HeroSection() {
  const { t } = useLanguage()
  const shouldReduceMotion = useReducedMotion()
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 })

  const highlights = [
    {
      label: t.hero.highlights?.garden ?? "Doğal Anı Bahçesi",
      value: "2 dönüm",
      detail: t.hero.highlights?.gardenDetail ?? "Şehre kapalı, Kemalpaşa Dereköy'de yalnızca ailelere ayrılmış alan",
    },
    {
      label: t.hero.highlights?.ceremony ?? "Özel Veda ve Defin",
      value: t.hero.highlights?.ceremonyValue ?? "Kişisel Tören",
      detail: t.hero.highlights?.ceremonyDetail ?? "Her can dostumuz için özenle hazırlanan veda süreci",
    },
    {
      label: t.hero.highlights?.support ?? "7/24 Cenaze Nakil",
      value: "365 gün",
      detail: t.hero.highlights?.supportDetail ?? "Murat Yılmaz liderliğinde profesyonel ve saygılı ekip",
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
      className="relative min-h-[100vh] sm:min-h-[105vh] flex items-center justify-center overflow-hidden section-dark pb-10 sm:pb-14 md:pb-16 -mt-16 sm:-mt-20"
    >
      <motion.div
        initial={shouldReduceMotion ? { scale: 1 } : { scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: shouldReduceMotion ? 0 : 1.2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/bgimage.png)",
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
        }}
        aria-label="Ege Pet Hayvan Mezarlığı - Kemalpaşa Huzur Bahçesi arka plan görseli"
      >
        <div className="absolute inset-0 hero-overlay" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-24 sm:pt-32 md:pt-36 lg:pt-40 pb-6 text-center md:text-left max-w-6xl">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.1 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs sm:text-sm font-medium mb-4"
        >
          <span className="w-2 h-2 rounded-full bg-[--brand-primary] animate-pulse" />
          <span>İzmir & Ege Bölgesi 7/24 Kesintisiz Hizmet</span>
        </motion.div>

        <motion.h1
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.75,
            delay: shouldReduceMotion ? 0 : 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white mb-4 sm:mb-6 max-w-4xl leading-tight mx-auto md:mx-0 px-2 sm:px-0"
        >
          {t.hero.title}
        </motion.h1>

        <motion.p
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.7,
            delay: shouldReduceMotion ? 0 : 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/85 mb-8 sm:mb-10 max-w-3xl mx-auto md:mx-0 px-2 sm:px-0 leading-relaxed font-light"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.65,
            delay: shouldReduceMotion ? 0 : 0.65,
            type: shouldReduceMotion ? "tween" : "spring",
            stiffness: 120,
          }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start items-center px-2 sm:px-0"
        >
          <Button size="lg" className="px-7 sm:px-9 w-full sm:w-auto bg-[--brand-primary] hover:bg-[--brand-primary-hover] text-white shadow-xl" asChild>
            <a href="#services">
              {t.hero.servicesBtn}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-7 sm:px-9 w-full sm:w-auto text-white border-white/40 hover:bg-white/10 hover:border-white bg-transparent backdrop-blur-sm"
            asChild
          >
            <a href="tel:+905467353162">
              <PhoneCall className="mr-2 h-4 w-4 text-[--brand-primary]" />
              {t.hero.contactBtn}
            </a>
          </Button>
        </motion.div>

        <div className="mt-12 sm:mt-14 md:mt-16 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-2 sm:px-0">
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 35, clipPath: "inset(20% 0% 0% 0% round 1.4rem)" }}
              animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0% round 1.4rem)" }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.7,
                delay: shouldReduceMotion ? 0 : 0.85 + index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-[1.4rem] border border-white/20 bg-white/10 p-5 sm:p-6 text-left text-white/90 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden"
              style={{ wordBreak: "break-word" }}
            >
              <p className="text-xs uppercase tracking-[0.18em] text-white/70 break-words font-semibold">{item.label}</p>
              <p className="text-3xl sm:text-4xl font-serif font-semibold my-2 text-white">{item.value}</p>
              <p className="text-white/75 text-sm leading-relaxed break-words">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Particles (disabled on reduced motion) */}
      {!shouldReduceMotion && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/25 rounded-full"
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
                delay: Math.random() * 4,
              }}
            />
          ))}
        </div>
      )}
    </section>
  )
}
