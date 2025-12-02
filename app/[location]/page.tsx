import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getLocationBySlug, getAllLocationSlugs, type Location } from "@/lib/locations"
import { MapPin, Clock, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface PageProps {
  params: Promise<{ location: string }>
}

export async function generateStaticParams() {
  const slugs = getAllLocationSlugs()
  return slugs.map((slug) => ({
    location: slug,
  }))
}

function generateLocationMetadata(location: Location): Metadata {
  const isMuğla = location.parent === "Muğla"
  const serviceType = isMuğla ? "Defin Hizmeti" : "Evcil Hayvan Mezarlığı"
  const title = `${location.name} ${serviceType} | EGE PET - 7/24 Cenaze Nakil ve Defin Hizmeti`
  const description = `${location.name} evcil hayvan mezarlığı hizmeti. ${location.distance} mesafedeki Kemalpaşa'daki huzurlu kabristanımızda, evcil dostlarınız için saygılı defin ve cenaze nakil hizmeti. 7/24 hizmet.`

  return {
    title,
    description,
    keywords: [
      `${location.name} evcil hayvan mezarlığı`,
      `${location.name} pet mezarlığı`,
      `${location.name} hayvan defin`,
      `${location.name} evcil hayvan defin`,
      `${location.name} cenaze nakil`,
      `${location.name} pet gömü`,
      `Kemalpaşa ${location.name} hayvan mezarlığı`,
    ],
    openGraph: {
      title,
      description,
      url: `https://egepetmezarligi.com/${location.slug}`,
      siteName: "EGE PET Hayvan Mezarlığı",
      images: [
        {
          url: "/bgimage.png",
          width: 1200,
          height: 630,
          alt: `${location.name} Evcil Hayvan Mezarlığı`,
        },
      ],
      locale: "tr_TR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/bgimage.png"],
    },
    alternates: {
      canonical: `/${location.slug}`,
    },
  }
}

function generateLocationContent(location: Location): string {
  const isMuğla = location.parent === "Muğla"
  const serviceType = isMuğla ? "defin hizmeti" : "evcil hayvan mezarlığı"
  const parentText = location.parent ? `${location.parent} iline bağlı ` : ""
  
  return `
${location.name} ${serviceType} arayışında olan aileler için, EGE PET Hayvan Mezarlığı olarak ${parentText}${location.name} bölgesinden ${location.distance} mesafedeki Kemalpaşa'daki huzurlu kabristanımızda hizmet veriyoruz.

${location.name} bölgesinde yaşayan evcil hayvan sahipleri, sevgili dostlarını kaybettiklerinde saygılı ve huzurlu bir veda için bize ulaşabilirler. ${location.distance} uzaklıktaki tesisimiz, doğayla iç içe, şehir gürültüsünden uzak, sadece ailelere ayrılmış özel bir alandır.

${location.name} evcil hayvan mezarlığı hizmetimiz kapsamında, 7/24 cenaze nakil hizmeti sunuyoruz. ${location.name} bölgesinden evinizden alım yaparak, sevgili dostunuzu Kemalpaşa'daki anı bahçemize güvenle getiriyoruz. Profesyonel ekibimiz, bu zorlu süreçte yanınızda olarak size destek sağlıyor.

${location.name} bölgesinden gelen aileler için özel olarak hazırladığımız defin alanlarımız, her evcil dost için saygılı bir şekilde düzenlenmiştir. 2 dönümlük doğal alanımızda, her dostun anısına özel bir yer ayrılmaktadır.

${location.name} evcil hayvan mezarlığı hizmetimizde, sadece defin ve gömü işlemleri yapılmaktadır. Cenaze nakil sürecinden defin işlemine kadar tüm aşamalarda profesyonel destek sunuyoruz. ${location.name} bölgesinden gelen aileler, bu zorlu dönemde yalnız kalmıyor, deneyimli ekibimiz her adımda yanlarında oluyor.

${location.name} bölgesindeki evcil hayvan sahipleri, 7/24 hizmet veren çağrı merkezimizden bize ulaşabilir. ${location.distance} mesafedeki tesisimize ulaşım kolaydır ve ${location.name} bölgesinden düzenli olarak cenaze nakil hizmeti vermekteyiz.

${location.name} evcil hayvan mezarlığı olarak, sadece defin hizmeti sunmaktayız. Her evcil dost için özel olarak hazırlanan defin alanlarımız, doğayla uyumlu, huzurlu bir ortam sunmaktadır. ${location.name} bölgesinden gelen aileler, sevgili dostlarını bu özel alanda sonsuzluğa uğurlayabilirler.
  `.trim()
}

function generateLocationSchema(location: Location) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://egepetmezarligi.com/${location.slug}#organization`,
    name: `EGE PET Hayvan Mezarlığı - ${location.name} Hizmeti`,
    description: `${location.name} evcil hayvan mezarlığı ve defin hizmeti. ${location.distance} mesafedeki Kemalpaşa'daki huzurlu kabristan.`,
    url: `https://egepetmezarligi.com/${location.slug}`,
    logo: "https://egepetmezarligi.com/toplogo.png",
    image: "https://egepetmezarligi.com/bgimage.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kemalpaşa",
      addressRegion: "İzmir",
      addressCountry: "TR",
      streetAddress: "Dereköy, Kemalpaşa, İzmir",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "38.4250",
      longitude: "27.3500",
    },
    telephone: "+90-555-000-0000",
    email: "info@egepetmezarligi.com",
    priceRange: "₺₺",
    areaServed: {
      "@type": location.type === "il" ? "City" : "AdministrativeArea",
      name: location.name,
      containedIn: location.parent
        ? {
            "@type": "City",
            name: location.parent,
          }
        : undefined,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${location.name} Evcil Hayvan Mezarlığı Hizmetleri`,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cenaze Nakil Hizmeti",
            description: `${location.name} bölgesinden evden alım ve cenaze nakil hizmeti`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Defin ve Gömü Hizmeti",
            description: `${location.name} evcil hayvan defin ve gömü hizmeti`,
          },
        },
      ],
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { location: slug } = await params
  const location = getLocationBySlug(slug)

  if (!location) {
    return {
      title: "Sayfa Bulunamadı",
      description: "Aradığınız sayfa bulunamadı.",
    }
  }

  return generateLocationMetadata(location)
}

export default async function LocationPage({ params }: PageProps) {
  const { location: slug } = await params
  const location = getLocationBySlug(slug)

  if (!location) {
    notFound()
  }

  const isMuğla = location.parent === "Muğla"
  const serviceType = isMuğla ? "Defin Hizmeti" : "Evcil Hayvan Mezarlığı"
  const content = generateLocationContent(location)
  const schema = generateLocationSchema(location)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main className="min-h-screen bg-background dark:bg-transparent">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[rgba(55,40,35,0.95)] to-[rgba(25,23,22,1)] dark:from-[rgba(55,40,35,0.98)] dark:to-[rgba(25,23,22,1)]">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {location.name} {serviceType} – Kemalpaşa'daki Huzurlu Kabristan
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8">
                {location.name} bölgesinden {location.distance} mesafedeki tesisimizde, evcil dostlarınız için saygılı defin ve cenaze nakil hizmeti
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <a href="#iletisim">Hemen İletişime Geçin</a>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-white/40" asChild>
                  <a href="/#pricing">Paketleri İnceleyin</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <div className="text-foreground/90 leading-relaxed space-y-6 text-base sm:text-lg">
                  {content.split("\n\n").map((paragraph, index) => (
                    <p key={index}>{paragraph.trim()}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-muted/30 dark:bg-transparent">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-8 sm:mb-12 text-center">
              {location.name} İçin Sunduğumuz Hizmetler
            </h2>
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              <Card className="border-2 rounded-3xl shadow-lg bg-card">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-16 h-16 rounded-2xl bg-[rgba(249,54,68,0.1)] dark:bg-[rgba(249,54,68,0.15)] flex items-center justify-center mb-4">
                    <MapPin className="w-8 h-8 text-[--brand-primary]" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-3">Cenaze Nakil Hizmeti</h3>
                  <p className="text-foreground/80">
                    {location.name} bölgesinden evinizden alım yaparak, sevgili dostunuzu Kemalpaşa'daki tesisimize güvenle getiriyoruz.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 rounded-3xl shadow-lg bg-card">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-16 h-16 rounded-2xl bg-[rgba(249,54,68,0.1)] dark:bg-[rgba(249,54,68,0.15)] flex items-center justify-center mb-4">
                    <Clock className="w-8 h-8 text-[--brand-primary]" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-3">7/24 Hizmet</h3>
                  <p className="text-foreground/80">
                    {location.name} bölgesinden 7 gün 24 saat hizmet veriyoruz. Acil durumlarda hemen ulaşabilirsiniz.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 rounded-3xl shadow-lg bg-card">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-16 h-16 rounded-2xl bg-[rgba(249,54,68,0.1)] dark:bg-[rgba(249,54,68,0.15)] flex items-center justify-center mb-4">
                    <Phone className="w-8 h-8 text-[--brand-primary]" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-3">Defin ve Gömü</h3>
                  <p className="text-foreground/80">
                    Doğayla iç içe, huzurlu anı bahçemizde saygılı bir şekilde defin ve gömü işlemi gerçekleştiriyoruz.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Map & Contact Section */}
        <section id="iletisim" className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-8 sm:mb-12 text-center">
                {location.name} Bölgesinden Nasıl Ulaşılır?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 sm:gap-12 mb-8">
                <Card className="border-none shadow-xl rounded-3xl bg-card">
                  <CardContent className="p-6 sm:p-8">
                    <h3 className="font-serif text-2xl font-bold mb-4">Yol Tarifi</h3>
                    <p className="text-foreground/80 mb-4">
                      <strong>Mesafe:</strong> {location.name} bölgesinden Kemalpaşa'ya {location.distance}
                    </p>
                    <p className="text-foreground/80 mb-4">
                      <strong>Adres:</strong> Dereköy, Kemalpaşa, İzmir
                    </p>
                    <p className="text-foreground/80">
                      {location.name} bölgesinden çıktıktan sonra İzmir yönüne doğru ilerleyin. Kemalpaşa ilçesine ulaştıktan sonra Dereköy mahallesine yönelin. Tesisimiz doğayla iç içe, huzurlu bir konumda yer almaktadır.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-xl rounded-3xl bg-card">
                  <CardContent className="p-6 sm:p-8">
                    <h3 className="font-serif text-2xl font-bold mb-4">İletişim</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Phone className="w-6 h-6 text-[--brand-primary] flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold">Telefon</p>
                          <p className="text-foreground/70">7/24 Hizmet Hattı</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Mail className="w-6 h-6 text-[--brand-primary] flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold">E-posta</p>
                          <p className="text-foreground/70">info@egepetmezarligi.com</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="w-6 h-6 text-[--brand-primary] flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold">Adres</p>
                          <p className="text-foreground/70">Dereköy, Kemalpaşa, İzmir</p>
                        </div>
                      </div>
                    </div>
                    <Button className="w-full mt-6" size="lg" asChild>
                      <a href="/#contact">İletişim Formu</a>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="rounded-3xl overflow-hidden shadow-xl h-64 sm:h-80 md:h-96">
                <iframe
                  src={`https://www.google.com/maps?q=Derek%C3%B6y%2C+Kemalpa%C5%9Fa%2C+%C4%B0zmir&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${location.name} Bölgesinden EGE PET Hayvan Mezarlığı Konumu - Google Maps`}
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-[--brand-primary]/10 dark:bg-[--brand-primary]/5">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
                {location.name} Bölgesinden Hemen Ulaşın
              </h2>
              <p className="text-lg sm:text-xl text-foreground/80 mb-8">
                7/24 hizmet veren ekibimiz, {location.name} bölgesinden cenaze nakil ve defin hizmeti için hazır.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <a href="/#contact">İletişime Geçin</a>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                  <a href="/#pricing">Paketleri İnceleyin</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

