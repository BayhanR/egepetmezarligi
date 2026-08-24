"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Sparkles, PhoneCall } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function PricingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const shouldReduceMotion = useReducedMotion()
  const { t } = useLanguage()

  const packages = [
    {
      name: t.pricing.basic.name,
      description: t.pricing.basic.description,
      features: t.pricing.basic.features,
      isPopular: false,
    },
    {
      name: t.pricing.special.name,
      description: t.pricing.special.description,
      features: t.pricing.special.features,
      isPopular: true,
    },
    {
      name: t.pricing.premium.name,
      description: t.pricing.premium.description,
      features: t.pricing.premium.features,
      isPopular: false,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: shouldReduceMotion
      ? { opacity: 1 }
      : {
          opacity: 0,
          y: 40,
          clipPath: "inset(15% 0% 0% 0% round 1.5rem)",
        },
    visible: {
      opacity: 1,
      y: 0,
      clipPath: "inset(0% 0% 0% 0% round 1.5rem)",
      transition: {
        duration: shouldReduceMotion ? 0 : 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section id="pricing" ref={ref} className="py-12 sm:py-16 md:py-20 lg:py-24 bg-muted/30 dark:bg-transparent relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : shouldReduceMotion ? { opacity: 1 } : {}}
          transition={{ duration: shouldReduceMotion ? 0 : 0.7 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[rgba(249,54,68,0.1)] text-[--brand-primary] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3">
            Hizmet Paketleri
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 px-2">
            {t.pricing.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto px-4">
            {t.pricing.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : shouldReduceMotion ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto px-2 sm:px-4 items-stretch"
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.name}
              variants={cardVariants}
              whileHover={shouldReduceMotion ? undefined : { y: -8, transition: { duration: 0.25 } }}
              className="flex"
            >
              <Card
                className={`relative w-full flex flex-col justify-between rounded-3xl shadow-lg transition-all duration-300 bg-card overflow-hidden ${
                  pkg.isPopular
                    ? "border-2 border-[--brand-primary] shadow-[0_20px_50px_rgba(249,54,68,0.15)] ring-1 ring-[--brand-primary]/30"
                    : "border-2 border-[--brand-gray] dark:border-[--border]"
                }`}
              >
                {pkg.isPopular && (
                  <div className="absolute top-0 right-0 bg-[--brand-primary] text-white text-xs font-semibold px-4 py-1.5 rounded-bl-2xl shadow-md flex items-center gap-1.5 uppercase tracking-wide">
                    <Sparkles className="w-3.5 h-3.5" />
                    {t.pricing.popular}
                  </div>
                )}

                <CardHeader className="text-left pb-4 sm:pb-5 pt-7 sm:pt-8 px-5 sm:px-7 border-b border-border/40">
                  <CardTitle className="font-serif text-2xl sm:text-3xl mb-2 text-foreground">
                    {pkg.name}
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="px-5 sm:px-7 py-6 sm:py-7 flex-1 flex flex-col justify-between">
                  <div className="mb-6 sm:mb-8 flex-1">
                    <p className="text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-4">
                      Pakete Dahil Olanlar:
                    </p>
                    <ul className="space-y-3">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-[rgba(249,54,68,0.1)] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5 text-[--brand-primary]" />
                          </div>
                          <span className="text-sm sm:text-base text-foreground/85 leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    size="lg"
                    className={`w-full rounded-2xl py-5 sm:py-6 text-base font-semibold transition-all flex items-center justify-center gap-2 ${
                      pkg.isPopular
                        ? "bg-[--brand-primary] hover:bg-[--brand-primary-hover] text-white shadow-md"
                        : "bg-[rgba(249,54,68,0.1)] hover:bg-[rgba(249,54,68,0.18)] text-foreground border border-[--brand-primary]/40"
                    }`}
                    asChild
                  >
                    <a href="tel:+905467353162">
                      <PhoneCall className="w-4 h-4 text-[--brand-primary]" />
                      <span>{t.pricing.callBtn}</span>
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
