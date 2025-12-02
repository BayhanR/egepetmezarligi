"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Home, TreePine } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
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

  return (
    <section id="services" ref={ref} className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[var(--brand-warm)] dark:bg-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--brand-dark)] dark:text-foreground mb-3 sm:mb-4 px-2">{t.services.title}</h2>
          <p className="text-base sm:text-lg md:text-xl text-[rgba(25,23,22,0.7)] dark:text-foreground/70 max-w-2xl mx-auto px-4">{t.services.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 },
              }}
            >
              <Card className="h-full border border-[--brand-gray] dark:border-[--border] rounded-[1.5rem] bg-card hover:shadow-[var(--shadow-md)] transition-shadow duration-300">
                <CardHeader className="p-4 sm:p-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-[rgba(249,54,68,0.1)] flex items-center justify-center mb-3 sm:mb-4">
                    <service.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[--brand-primary]" />
                  </div>
                  <CardTitle className="font-serif text-xl sm:text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <CardDescription className="text-sm sm:text-base leading-relaxed text-[rgba(25,23,22,0.75)] dark:text-foreground/75">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
