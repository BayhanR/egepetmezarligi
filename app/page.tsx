import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { MemorialGallery } from "@/components/memorial-gallery"
import { PricingSection } from "@/components/pricing-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ScrollToTop } from "@/components/scroll-to-top"
import { SchemaMarkup } from "@/components/schema-markup"
import { LocationLinksSection } from "@/components/location-links-section"

export default function Home() {
  return (
    <>
      <SchemaMarkup />
      <main className="min-h-screen bg-[var(--brand-warm)] dark:bg-transparent">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <LocationLinksSection />
        <MemorialGallery />
        <PricingSection />
        
        <ContactSection />
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </main>
    </>
  )
}
