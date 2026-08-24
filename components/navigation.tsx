"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "./language-switcher"
import { useLanguage } from "@/lib/language-context"
import { useTheme } from "next-themes"

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const { t } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { label: t.nav.home, href: "/#hero" },
    { label: t.nav.about, href: "/#about" },
    { label: t.nav.services, href: "/#services" },
    { label: t.nav.gallery, href: "/#gallery" },
    { label: t.nav.pricing, href: "/#pricing" },
    { label: t.nav.contact, href: "/#contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="sticky top-0 left-0 right-0 z-50 bg-[rgba(25,23,22,0.97)] dark:bg-[rgba(25,23,22,0.98)] border-b border-white/10 dark:border-white/20 shadow-[0_12px_30px_rgba(0,0,0,0.45)] backdrop-blur"
    >
      <div className="container mx-auto px-3 sm:px-4 py-2 sm:py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
            <Image
              src="/toplogo.png"
              alt="Ege Pet Hayvan Mezarlığı logosu"
              width={150}
              height={60}
              priority
              className="h-8 w-auto sm:h-10 md:h-11 object-contain"
            />
            <div className="text-left leading-tight hidden sm:block">
              <span className="text-xs uppercase tracking-[0.25em] text-white/70 block">Ege Pet</span>
              <p className="font-serif text-lg sm:text-xl font-semibold text-white group-hover:text-[--brand-primary] transition-colors">
                Hayvan Mezarlığı
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-7">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="text-white/85 hover:text-[--brand-primary] transition-colors duration-200 font-medium text-sm"
              >
                {item.label}
              </motion.a>
            ))}
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-white/80 hover:text-white hover:bg-white/10 rounded-xl w-9 h-9"
                aria-label="Tema değiştir"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            )}
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Actions */}
          <div className="lg:hidden flex items-center gap-2">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-white/80 hover:text-white hover:bg-white/10 rounded-xl w-9 h-9"
                aria-label="Tema değiştir"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            )}
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10 rounded-xl w-9 h-9"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Gezinme menüsü"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-3 pb-4 rounded-2xl bg-white/5 p-4 backdrop-blur-xl border border-white/10"
            >
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded-xl text-white/85 hover:text-[--brand-primary] hover:bg-white/5 transition-colors font-medium text-sm"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
