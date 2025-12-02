"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { useState, useEffect } from "react"
import { locations } from "@/lib/locations"

export function Footer() {
  const { t } = useLanguage()
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 })

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDimensions({ width: window.innerWidth, height: window.innerHeight })
    }
  }, [])

  const navLinks = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.gallery, href: "#gallery" },
    { label: t.nav.pricing, href: "#pricing" },
    { label: t.nav.contact, href: "#contact" },
  ]

  return (
    <footer className="relative bg-[#191716] py-8 sm:py-12 md:py-16 overflow-hidden text-white">
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * dimensions.width,
              y: -50,
              opacity: 0,
            }}
            animate={{
              y: dimensions.height,
              x: Math.random() * dimensions.width,
              opacity: 1,
            }}
            transition={{
              duration: 25 + Math.random() * 15,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 10,
            }}
          >
            <div className="w-1 h-10 rounded-full bg-white/10" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center text-center gap-6 sm:gap-8">
          <div className="flex flex-col items-center gap-4 text-center">
            <Image
              src="/toplogo.png"
              alt="EGE PET Hayvan Mezarlığı logosu - Evcil hayvan mezarlığı ve kremasyon hizmetleri"
              width={200}
              height={80}
              className="h-12 sm:h-14 md:h-16 w-auto object-contain"
              priority
            />
            <div>
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white/70">Ege Pet</p>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold">Hayvan Mezarlığı</h3>
            </div>
            <p className="text-sm sm:text-base text-white/70 max-w-2xl italic px-4">"{t.footer.quote}"</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-white/60 px-4">
            {navLinks.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-[--brand-primary] transition-colors duration-200">
                {item.label}
              </a>
            ))}
          </div>

          <div className="h-px w-full max-w-3xl bg-white/10" />

          {/* Hizmet Verilen Bölgeler */}
          <div className="w-full max-w-6xl">
            <h4 className="font-serif text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">Hizmet Verdiğimiz Bölgeler</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 text-xs sm:text-sm">
              {locations.slice(0, 30).map((location) => (
                <a
                  key={location.slug}
                  href={`/${location.slug}`}
                  className="text-white/60 hover:text-[--brand-primary] transition-colors duration-200 text-center"
                >
                  {location.name}
                </a>
              ))}
            </div>
            <div className="mt-4">
              <a
                href="/#contact"
                className="text-[--brand-primary] hover:text-[--brand-primary-hover] transition-colors text-sm font-medium"
              >
                Tüm bölgeleri görüntüle →
              </a>
            </div>
          </div>

          <div className="h-px w-full max-w-3xl bg-white/10" />

          <div className="flex flex-col gap-2 text-white/50 text-xs sm:text-sm px-4 text-center">
            <div>© 2025 Huzur Bahçesi. {t.footer.rights}</div>
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <span>{t.footer.developedBy}</span>
              <a
                href="https://bayhan.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/bayhan.tech.png"
                  alt="BayhanTech - Web geliştirme ve dijital çözümler"
                  width={120}
                  height={30}
                  className="h-6 w-auto object-contain"
                />
                <span className="text-[--brand-primary] hover:text-[--brand-primary-hover] transition-colors font-medium">bayhan.tech</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
