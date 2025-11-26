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
    <section id="testimonials" ref={ref} className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">{t.testimonials.title}</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">{t.testimonials.subtitle}</p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-none shadow-xl rounded-3xl bg-card">
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <img
                      src={"/ceholder-svg-key-oziul.jpg?key=oziul&height=96&width=96"}
                      alt={testimonials[currentIndex].name}
                      className="w-24 h-24 rounded-full object-cover shadow-lg"
                    />
                    <div className="flex-1 text-center md:text-left">
                      <p className="text-lg md:text-xl text-foreground/80 mb-6 leading-relaxed italic">
                        "{testimonials[currentIndex].message}"
                      </p>
                      <div>
                        <p className="font-serif text-xl font-bold text-foreground">
                          {testimonials[currentIndex].name}
                        </p>
                        <p className="text-foreground/60">
                          {testimonials[currentIndex].pet} {t.testimonials.family}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full w-12 h-12 border-2 border-[--brand-primary] text-[--brand-primary] hover:bg-[--brand-primary] hover:text-white bg-transparent"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full w-12 h-12 border-2 border-[--brand-primary] text-[--brand-primary] hover:bg-[--brand-primary] hover:text-white bg-transparent"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-[--brand-primary] w-8" : "bg-[rgba(249,55,69,0.3)]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
