"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Flame, Home, TreePine } from "lucide-react"
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
      icon: Flame,
      title: t.services.cremation.title,
      description: t.services.cremation.description,
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
    <section id="services" ref={ref} className="py-24 bg-[var(--brand-warm)]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[var(--brand-dark)] mb-4">{t.services.title}</h2>
          <p className="text-xl text-[rgba(25,23,22,0.7)] max-w-2xl mx-auto">{t.services.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <Card className="h-full border border-[--brand-gray] rounded-[1.5rem] bg-white/95 hover:shadow-[var(--shadow-md)] transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-[rgba(249,55,69,0.1)] flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-[--brand-primary]" />
                  </div>
                  <CardTitle className="font-serif text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-[rgba(25,23,22,0.75)]">
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
