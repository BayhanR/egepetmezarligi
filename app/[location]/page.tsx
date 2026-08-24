import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { getLocationBySlug, getAllLocationSlugs, type Location } from "@/lib/locations"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ScrollToTop } from "@/components/scroll-to-top"
import { MapPin, Clock, Phone, Navigation2, CheckCircle, ShieldCheck } from "lucide-react"
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
  const title = `${location.name} Evcil Hayvan Mezarlığı | Ege Pet - 7/24 Cenaze Nakil ve Defin`
  const description = `${location.name} evcil hayvan mezarlığı ve 7/24 cenaze nakil hizmeti. Kemalpaşa Huzur Bahçesi'ne ${location.distance} (${location.duration}) mesafede, saygılı defin ve anı bahçesi.`

  return {
    title,
    description,
    keywords: [
      `${location.name} evcil hayvan mezarlığı`,
      `${location.name} pet mezarlığı`,
      `${location.name} hayvan defin`,
      `${location.name} evcil hayvan defin`,
      `${location.name} cenaze nakil`,
      `Kemalpaşa ${location.name} hayvan mezarlığı`,
    ],
    openGraph: {
      title,
      description,
      url: `https://egepetmezarligi.com/${location.slug}`,
      siteName: "Ege Pet Hayvan Mezarlığı",
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

function generateLocationSchema(location: Location) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://egepetmezarligi.com/${location.slug}#organization`,
    name: `Ege Pet Hayvan Mezarlığı - ${location.name} Hizmeti`,
    description: `${location.name} bölgesine 7/24 cenaze nakil ve Kemalpaşa Huzur Bahçesi'nde ebedi defin hizmeti.`,
    url: `https://egepetmezarligi.com/${location.slug}`,
    logo: "https://egepetmezarligi.com/toplogo.png",
    image: "https://egepetmezarligi.com/bgimage.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kemalpaşa",
      addressRegion: "İzmir",
      addressCountry: "TR",
      streetAddress: "Dereköy Mah., Kemalpaşa, İzmir",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "38.4250",
      longitude: "27.3500",
    },
    telephone: "+90-546-735-3162",
    email: "murat-35-10@hotmail.com",
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
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { location: slug } = await params
  const location = getLocationBySlug(slug)

  if (!location) {
    return {
      title: "Sayfa Bulunamadı | Ege Pet Hayvan Mezarlığı",
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

  const schema = generateLocationSchema(location)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main className="min-h-screen bg-[var(--brand-warm)] dark:bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-16 sm:py-24 bg-[#191716] text-white overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-4xl text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[rgba(249,54,68,0.2)] text-[--brand-primary] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4">
              7/24 Kesintisiz Cenaze Nakil & Defin
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {location.name} Evcil Hayvan Mezarlığı & Defin Hizmeti
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto">
              {location.name} bölgesindeki evinizden veya veteriner kliniğinizden 7/24 evden alım yaparak, Kemalpaşa Huzur Bahçesi'ndeki huzurlu kabristanımızda ebedi istirahatini sağlıyoruz.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-[--brand-primary] text-white hover:bg-[--brand-primary-hover] font-semibold" asChild>
                <a href="tel:+905467353162">
                  <Phone className="w-4 h-4 mr-2" />
                  0546 735 31 62 (7/24 Ara)
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/30 bg-white/10 hover:bg-white/20" asChild>
                <a href="https://wa.me/905467353162" target="_blank" rel="noopener noreferrer">
                  WhatsApp ile Ulaşın
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Location Specific Transit Info Box */}
        <section className="py-12 container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="border rounded-2xl shadow-sm bg-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(249,54,68,0.1)] flex items-center justify-center text-[--brand-primary]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Kemalpaşa'ya Mesafe</p>
                    <p className="text-lg font-bold font-serif text-foreground">{location.distance}</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  {location.name} adresinizden kabristanımıza doğrudan karayolu mesafesi.
                </p>
              </CardContent>
            </Card>

            <Card className="border rounded-2xl shadow-sm bg-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(249,54,68,0.1)] flex items-center justify-center text-[--brand-primary]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Ortalama Ulaşım Süresi</p>
                    <p className="text-lg font-bold font-serif text-foreground">{location.duration}</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Acil cenaze nakil aracımızın {location.name} bölgesine intikal süresi.
                </p>
              </CardContent>
            </Card>

            <Card className="border rounded-2xl shadow-sm bg-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(249,54,68,0.1)] flex items-center justify-center text-[--brand-primary]">
                    <Navigation2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Ana Güzergah</p>
                    <p className="text-sm font-semibold text-foreground truncate">{location.routeDesc.split(' ')[0]} Aksı</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  {location.routeDesc}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Unique Content Section */}
          <div className="bg-card border rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
              {location.name} Bölgesinde Evcil Hayvan Defin Süreci
            </h2>
            <div className="text-foreground/80 leading-relaxed space-y-4 text-base">
              <p className="p-4 rounded-xl bg-[rgba(249,54,68,0.04)] border border-[rgba(249,54,68,0.15)] font-medium text-foreground">
                📍 <strong>{location.name} Özel Bilgilendirme:</strong> {location.localContext}
              </p>
              <p>
                {location.name} ve çevre mahallelerinde yaşayan evcil hayvan sahipleri için en acı günlerinde yanlarında oluyoruz. Can dostunuzun vefatı durumunda <strong>Murat Yılmaz (+90 546 735 31 62)</strong> ile iletişime geçtiğiniz anda, özel donanımlı nakil aracımız {location.duration} içerisinde adresinize yönlendirilir.
              </p>
              <p>
                Tesisimiz, İzmir Kemalpaşa Dereköy mevkiinde 2 dönümlük tapulu ve korunaklı bir doğa alanı içerisinde yer almaktadır. Kabristanımız şehre ve dış etkenlere kapalı olup, yalnızca can dostlarının ebedi istirahatini ziyaret etmek isteyen ailelerimize açıktır.
              </p>
            </div>

            <div className="pt-6 border-t">
              <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                {location.name} Hizmet Standartları
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl border bg-background/50">
                  <div className="flex items-center gap-2 text-foreground font-semibold mb-2">
                    <CheckCircle className="w-4 h-4 text-[--brand-primary]" />
                    <span>7/24 Evden Alım & Güvenli Nakil</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {location.name} adresinizden veya veteriner kliniğinden iklimlendirmeli özel araçla güvenli transfer.
                  </p>
                </div>
                <div className="p-4 rounded-2xl border bg-background/50">
                  <div className="flex items-center gap-2 text-foreground font-semibold mb-2">
                    <ShieldCheck className="w-4 h-4 text-[--brand-primary]" />
                    <span>Saygılı Defin & Anı Bahçesi Tahsisi</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Huzur Bahçesi'nde can dostunuza özel tahsis edilen ebedi defin alanı, anı plaketi ve düzenli bakım.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Farklı bir şehir veya 100 km üzeri mesafe için bilgi almak istiyorsanız:
              </p>
              <Button variant="outline" asChild className="rounded-xl">
                <Link href="/genis-bolge-hizmeti">
                  Şehirlerarası & Geniş Bölge Hizmet Detayları →
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </main>
    </>
  )
}
