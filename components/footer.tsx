"use client"

import Image from "next/image"
import Link from "next/link"
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
    { label: t.nav.home, href: "/#hero" },
    { label: t.nav.about, href: "/#about" },
    { label: t.nav.services, href: "/#services" },
    { label: t.nav.gallery, href: "/#gallery" },
    { label: t.nav.pricing, href: "/#pricing" },
    { label: t.nav.contact, href: "/#contact" },
  ]

  return (
    <footer className="relative bg-[#191716] py-12 sm:py-16 overflow-hidden text-white border-t border-white/10">
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(8)].map((_, i) => (
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
        <div className="flex flex-col items-center text-center gap-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <Link href="/" className="inline-block">
              <Image
                src="/toplogo.png"
                alt="Ege Pet Hayvan Mezarlığı logosu"
                width={200}
                height={80}
                className="h-12 sm:h-14 w-auto object-contain"
                priority
              />
            </Link>
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-white/70 block">Ege Pet</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold">Hayvan Mezarlığı</h3>
            </div>
            <p className="text-sm sm:text-base text-white/70 max-w-2xl italic px-4">
              "{t.footer.quote}"
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-5 text-sm text-white/70 px-4">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-[--brand-primary] transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="h-px w-full max-w-4xl bg-white/10" />

          {/* Hizmet Verilen Bölgeler */}
          <div className="w-full max-w-5xl">
            <h4 className="font-serif text-lg sm:text-xl font-bold mb-4 text-white">
              Hizmet Verdiğimiz Öncelikli Bölgeler (İzmir & Yakın İlçeler)
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 sm:gap-3 text-xs sm:text-sm">
              {locations.map((location) => (
                <Link
                  key={location.slug}
                  href={`/${location.slug}`}
                  className="text-white/60 hover:text-[--brand-primary] transition-colors duration-200 py-1"
                >
                  {location.name} Pet Mezarlığı
                </Link>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap justify-center items-center gap-4 text-sm">
              <Link
                href="/genis-bolge-hizmeti"
                className="text-[--brand-primary] hover:text-[--brand-primary-hover] font-semibold underline underline-offset-4 transition-colors"
              >
                Muğla, Aydın, Balıkesir, Denizli, Uşak (Geniş Bölge Hizmeti) →
              </Link>
            </div>
          </div>

          <div className="h-px w-full max-w-4xl bg-white/10" />

          <div className="flex flex-col gap-2 text-white/60 text-xs sm:text-sm px-4 text-center">
            <div>© 2025 Ege Pet Hayvan Mezarlığı. {t.footer.rights}</div>
            <div className="flex items-center justify-center gap-2 flex-wrap mt-1">
              <span>{t.footer.developedBy}</span>
              <a
                href="https://bayhan.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:opacity-85 transition-opacity"
              >
                <Image
                  src="/bayhan.tech.png"
                  alt="BayhanTech Logo"
                  width={100}
                  height={24}
                  className="h-5 w-auto object-contain"
                />
                <span className="text-[--brand-primary] font-semibold">bayhan.tech</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
