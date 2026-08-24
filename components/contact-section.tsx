"use client"

import type React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { GoogleMapsLocator } from "@/components/google-maps-locator"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const shouldReduceMotion = useReducedMotion()
  const { t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" ref={ref} className="py-12 sm:py-16 md:py-20 lg:py-24 bg-muted/30 dark:bg-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : shouldReduceMotion ? { opacity: 1 } : {}}
          transition={{ duration: shouldReduceMotion ? 0 : 0.7 }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="inline-block px-3.5 py-1 rounded-full bg-[rgba(249,54,68,0.1)] text-[--brand-primary] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3">
            7/24 Kesintisiz Destek
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 px-2">
            {t.contact.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto px-4">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 max-w-6xl mx-auto px-2 sm:px-4">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 35, clipPath: "inset(12% 0% 0% 0% round 1.5rem)" }}
            animate={isInView ? { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0% round 1.5rem)" } : shouldReduceMotion ? { opacity: 1 } : {}}
            transition={{ duration: shouldReduceMotion ? 0 : 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card className="border shadow-xl rounded-3xl bg-card h-full overflow-hidden">
              <CardContent className="p-5 sm:p-7 md:p-8">
                <h3 className="font-serif text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-foreground">
                  {t.contact.formTitle}
                </h3>
                {submitted ? (
                  <div className="py-12 text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto" />
                    <p className="font-serif text-xl font-bold text-foreground">Mesajınız Alındı</p>
                    <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                      Talebiniz ekibimize iletildi. En kısa sürede sizinle iletişime geçeceğiz.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    <div>
                      <Input
                        placeholder={t.contact.namePlaceholder}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="rounded-xl border"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder={t.contact.emailPlaceholder}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="rounded-xl border"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="tel"
                        placeholder={t.contact.phonePlaceholder}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="rounded-xl border"
                        required
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder={t.contact.messagePlaceholder}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="rounded-xl border min-h-24 sm:min-h-32"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full rounded-xl py-5 sm:py-6 text-base font-semibold text-white bg-[--brand-primary] hover:bg-[--brand-primary-hover]"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      <span>{t.contact.submitBtn}</span>
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 35, clipPath: "inset(12% 0% 0% 0% round 1.5rem)" }}
            animate={isInView ? { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0% round 1.5rem)" } : shouldReduceMotion ? { opacity: 1 } : {}}
            transition={{ duration: shouldReduceMotion ? 0 : 0.75, delay: shouldReduceMotion ? 0 : 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4 sm:space-y-5 flex flex-col justify-between"
          >
            {/* Phone Card */}
            <Card className="border shadow-md rounded-2xl bg-card hover:border-[--brand-primary]/40 transition-colors">
              <CardContent className="p-5">
                <a href="tel:+905467353162" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-[rgba(249,54,68,0.12)] flex items-center justify-center flex-shrink-0 group-hover:bg-[rgba(249,54,68,0.2)] transition-colors">
                    <Phone className="w-6 h-6 text-[--brand-primary]" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-foreground mb-1 group-hover:text-[--brand-primary] transition-colors">
                      {t.contact.phone.title}
                    </h4>
                    <p className="text-base font-semibold text-foreground">{t.contact.phone.number}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{t.contact.phone.availability}</p>
                  </div>
                </a>
              </CardContent>
            </Card>

            {/* Email Card */}
            <Card className="border shadow-md rounded-2xl bg-card hover:border-[--brand-primary]/40 transition-colors">
              <CardContent className="p-5">
                <a href="mailto:murat-35-10@hotmail.com" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-[rgba(249,54,68,0.12)] flex items-center justify-center flex-shrink-0 group-hover:bg-[rgba(249,54,68,0.2)] transition-colors">
                    <Mail className="w-6 h-6 text-[--brand-primary]" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-foreground mb-1 group-hover:text-[--brand-primary] transition-colors">
                      {t.contact.email.title}
                    </h4>
                    <p className="text-sm sm:text-base font-medium text-foreground">{t.contact.email.info}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{t.contact.email.support}</p>
                  </div>
                </a>
              </CardContent>
            </Card>

            {/* Address Card */}
            <Card className="border shadow-md rounded-2xl bg-card">
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[rgba(249,54,68,0.12)] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[--brand-primary]" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-foreground mb-1">{t.contact.address.title}</h4>
                    <p className="text-sm text-foreground/90 font-medium">{t.contact.address.line1}</p>
                    <p className="text-xs text-muted-foreground">{t.contact.address.line2}, {t.contact.address.line3}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={isInView ? { opacity: 1 } : shouldReduceMotion ? { opacity: 1 } : {}}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.3 }}
            className="lg:col-span-2 mt-4"
          >
            <GoogleMapsLocator 
              height="380px"
              locations={[
                {
                  title: "Ege Pet Hayvan Mezarlığı",
                  address1: "Dereköy Kemalpaşa İzmir",
                  address2: "Kemalpaşa, İzmir, Türkiye",
                  coords: { lat: 38.3423087, lng: 27.4372834 },
                  placeId: "ChIJLeh-5u5vuRQR0-0LLcSB3wg"
                }
              ]}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
