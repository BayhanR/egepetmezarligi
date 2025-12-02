"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)
  const { t } = useLanguage()

  const testimonials = t.testimonials.items

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" ref={ref} className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background dark:bg-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 px-2">{t.testimonials.title}</h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto px-4">{t.testimonials.subtitle}</p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative px-2 sm:px-4">
          <div className="overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-none shadow-xl rounded-3xl bg-card">
                <CardContent className="p-4 sm:p-6 md:p-8 lg:p-12">
                  <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8">
                    <img
                      src={"/ceholder-svg-key-oziul.jpg?key=oziul&height=96&width=96"}
                      alt={`${testimonials[currentIndex].name} - EGE PET Hayvan Mezarlığı müşteri referansı`}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover shadow-lg"
                      loading="lazy"
                    />
                    <div className="flex-1 text-center md:text-left">
                      <p className="text-base sm:text-lg md:text-xl text-foreground/80 mb-4 sm:mb-6 leading-relaxed italic px-2 sm:px-0">
                        "{testimonials[currentIndex].message}"
                      </p>
                      <div>
                        <p className="font-serif text-lg sm:text-xl font-bold text-foreground">
                          {testimonials[currentIndex].name}
                        </p>
                        <p className="text-sm sm:text-base text-foreground/60">
                          {testimonials[currentIndex].pet} {t.testimonials.family}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="flex justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full w-10 h-10 sm:w-12 sm:h-12 border-2 border-[--brand-primary] text-[--brand-primary] hover:bg-[--brand-primary] hover:text-white bg-transparent"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full w-10 h-10 sm:w-12 sm:h-12 border-2 border-[--brand-primary] text-[--brand-primary] hover:bg-[--brand-primary] hover:text-white bg-transparent"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-[--brand-primary] w-8" : "bg-[rgba(249,54,68,0.3)]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
