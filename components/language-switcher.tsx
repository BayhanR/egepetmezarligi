"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Globe, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { languages } from "@/lib/translations"

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage } = useLanguage()

  const currentLanguage = languages.find((l) => l.code === language) || languages[0]

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 text-white hover:bg-white/10 rounded-xl border border-white/15"
        aria-label="Dil Seçimi / Change Language"
      >
        <span className="text-base">{currentLanguage.flag}</span>
        <span className="text-xs font-semibold uppercase tracking-wider text-white/90">
          {currentLanguage.code}
        </span>
        <ChevronDown className={`w-3 h-3 text-white/70 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -6, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.96 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 mt-2 w-36 bg-[#252322] border border-white/20 rounded-2xl shadow-2xl z-50 overflow-hidden py-1"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code)
                    setIsOpen(false)
                  }}
                  className={`w-full px-3 py-2.5 text-left transition-colors flex items-center gap-2.5 text-sm ${
                    language === lang.code
                      ? "bg-[rgba(249,54,68,0.18)] text-[--brand-primary] font-semibold"
                      : "text-white/80 hover:bg-white/10"
                  }`}
                >
                  <span className="text-base">{lang.flag}</span>
                  <span>{lang.name}</span>
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
