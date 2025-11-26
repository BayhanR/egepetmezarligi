"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { useState, useEffect } from "react"

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
    <footer className="relative bg-[#191716] py-16 overflow-hidden text-white">
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

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center gap-8">
          <div className="flex flex-col items-center gap-4 text-center">
            <Image
              src="/toplogo.png"
              alt="Ege Pet logosu"
              width={200}
              height={80}
              className="h-16 w-auto object-contain"
              priority
            />
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/70">Ege Pet</p>
              <h3 className="font-serif text-3xl font-semibold">Hayvan Mezarlığı</h3>
            </div>
            <p className="text-white/70 max-w-2xl italic">"{t.footer.quote}"</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60">
            {navLinks.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-[--brand-primary] transition-colors duration-200">
                {item.label}
              </a>
            ))}
          </div>

          <div className="h-px w-full max-w-3xl bg-white/10" />

          <div className="flex flex-col gap-2 text-white/50 text-sm">
            <div>© 2025 Huzur Bahçesi. {t.footer.rights}</div>
            <div>
              {t.footer.developedBy}{" "}
              <a
                href="https://bayhantech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[--brand-primary] hover:text-[--brand-primary-hover] transition-colors font-medium"
              >
                BayhanTech
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
