"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" ref={ref} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">{t.contact.title}</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">{t.contact.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Card className="border-none shadow-xl rounded-3xl bg-card h-full">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold mb-6">{t.contact.formTitle}</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder={t.contact.namePlaceholder}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="rounded-xl border-2"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder={t.contact.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="rounded-xl border-2"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder={t.contact.phonePlaceholder}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="rounded-xl border-2"
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder={t.contact.messagePlaceholder}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="rounded-xl border-2 min-h-32"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full rounded-xl py-6 text-lg font-semibold tracking-wide text-[--brand-dark] bg-[--brand-primary] hover:bg-[--brand-primary-hover]"
                  >
                    <span className="text-[--brand-dark]">{t.contact.submitBtn}</span>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <Card className="border-none shadow-xl rounded-3xl bg-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[rgba(249,55,69,0.12)] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[--brand-primary]" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold mb-2">{t.contact.phone.title}</h4>
                    <p className="text-foreground/70">{t.contact.phone.number}</p>
                    <p className="text-foreground/70">{t.contact.phone.availability}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl rounded-3xl bg-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[rgba(249,55,69,0.12)] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[--brand-primary]" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold mb-2">{t.contact.email.title}</h4>
                    <p className="text-foreground/70">{t.contact.email.info}</p>
                    <p className="text-foreground/70">{t.contact.email.support}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl rounded-3xl bg-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[rgba(249,55,69,0.12)] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[--brand-primary]" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold mb-2">{t.contact.address.title}</h4>
                    <p className="text-foreground/70">{t.contact.address.line1}</p>
                    <p className="text-foreground/70">{t.contact.address.line2}</p>
                    <p className="text-foreground/70">{t.contact.address.line3}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="rounded-3xl overflow-hidden shadow-xl h-64 md:h-72 md:col-span-2"
          >
            <iframe
            src="https://www.google.com/maps?q=Derek%C3%B6y%2C%20Kemalpa%C5%9Fa%2C%20%C4%B0zmir&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ege Pet Hayvan Mezarlığı Konumu"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
