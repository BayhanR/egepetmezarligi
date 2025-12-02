"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function PricingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLanguage()

  const packages = [
    {
      name: t.pricing.basic.name,
      price: t.pricing.basic.price,
      description: t.pricing.basic.description,
      features: t.pricing.basic.features,
    },
    {
      name: t.pricing.special.name,
      price: t.pricing.special.price,
      description: t.pricing.special.description,
      features: t.pricing.special.features,
    },
    {
      name: t.pricing.premium.name,
      price: t.pricing.premium.price,
      description: t.pricing.premium.description,
      features: t.pricing.premium.features,
    },
  ]

  return (
    <section id="pricing" ref={ref} className="py-12 sm:py-16 md:py-20 lg:py-24 bg-muted/30 dark:bg-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 px-2">{t.pricing.title}</h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto px-4">{t.pricing.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto px-2 sm:px-4">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                y: -10,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 },
              }}
            >
              <Card
                className="h-full border-2 rounded-3xl shadow-lg border-[--brand-gray] dark:border-[--border] bg-card"
              >
                <CardHeader className="text-center pb-6 sm:pb-8 pt-6 sm:pt-8 px-4 sm:px-6">
                  <CardTitle className="font-serif text-2xl sm:text-3xl mb-2">{pkg.name}</CardTitle>
                  <CardDescription className="text-sm sm:text-base mb-4">{pkg.description}</CardDescription>
                  <div className="text-4xl sm:text-5xl font-bold text-[--brand-primary] font-serif">{pkg.price}</div>
                </CardHeader>
                <CardContent className="px-4 sm:px-6">
                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[--brand-primary] flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full rounded-2xl py-4 sm:py-5 md:py-6 text-base sm:text-lg bg-[rgba(249,54,68,0.1)] dark:bg-[rgba(249,54,68,0.15)] hover:bg-[rgba(249,54,68,0.2)] dark:hover:bg-[rgba(249,54,68,0.25)] text-foreground dark:text-foreground font-semibold border-2 border-[--brand-primary]"
                    asChild
                  >
                    <a href="#contact">{t.pricing.contactBtn}</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
