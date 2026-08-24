"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Home, TreePine } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const shouldReduceMotion = useReducedMotion()
  const { t } = useLanguage()

  const services = [
    {
      icon: TreePine,
      title: t.services.burial.title,
      description: t.services.burial.description,
    },
    {
      icon: Home,
      title: t.services.pickup.title,
      description: t.services.pickup.description,
    },
    {
      icon: Heart,
      title: t.services.memorial.title,
      description: t.services.memorial.description,
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
          clipPath: "inset(20% 0% 0% 0% round 1.5rem)",
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
    <section id="services" ref={ref} className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[var(--brand-warm)] dark:bg-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : shouldReduceMotion ? { opacity: 1 } : {}}
          transition={{ duration: shouldReduceMotion ? 0 : 0.7 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <span className="inline-block px-3.5 py-1 rounded-full bg-[rgba(249,54,68,0.1)] text-[--brand-primary] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3">
            Hizmetlerimiz
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 px-2">
            {t.services.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto px-4">
            {t.services.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : shouldReduceMotion ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 sm:px-4 max-w-6xl mx-auto items-stretch"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={shouldReduceMotion ? undefined : { y: -6, transition: { duration: 0.25 } }}
              className="flex"
            >
              <Card className="w-full flex flex-col justify-between border border-[--brand-gray] dark:border-border rounded-[1.5rem] bg-card hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardHeader className="p-6">
                  <div className="w-14 h-14 rounded-2xl bg-[rgba(249,54,68,0.1)] flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-[--brand-primary]" />
                  </div>
                  <CardTitle className="font-serif text-xl sm:text-2xl text-foreground mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base leading-relaxed text-foreground/75 dark:text-foreground/75">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-6 pb-6 pt-0">
                  <div className="h-1 w-10 bg-[--brand-primary]/20 rounded-full" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
