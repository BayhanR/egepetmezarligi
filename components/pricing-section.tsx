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
      popular: true,
    },
    {
      name: t.pricing.premium.name,
      price: t.pricing.premium.price,
      description: t.pricing.premium.description,
      features: t.pricing.premium.features,
    },
  ]

  return (
    <section id="pricing" ref={ref} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">{t.pricing.title}</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">{t.pricing.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                boxShadow: pkg.popular ? "0 25px 50px rgba(139, 195, 74, 0.3)" : "0 25px 50px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 },
              }}
            >
              <Card
                className={`h-full border-2 rounded-3xl shadow-lg ${
                  pkg.popular
                    ? "border-[--brand-primary] bg-[rgba(249,55,69,0.08)] relative"
                    : "border-[--brand-gray] bg-white/95"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[--brand-primary] text-white px-4 py-1 rounded-full text-sm font-semibold shadow-[var(--shadow-sm)]">
                    {t.pricing.popular}
                  </div>
                )}
                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="font-serif text-3xl mb-2">{pkg.name}</CardTitle>
                  <CardDescription className="text-base mb-4">{pkg.description}</CardDescription>
                  <div className="text-5xl font-bold text-[--brand-primary] font-serif">{pkg.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[--brand-primary] flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full rounded-2xl py-6 text-lg ${
                      pkg.popular
                        ? "bg-[--brand-primary] hover:bg-[--brand-primary-hover] text-white"
                        : "bg-[rgba(249,55,69,0.08)] text-[--brand-primary] hover:bg-[rgba(249,55,69,0.15)]"
                    }`}
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
