import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { distantRegions } from "@/lib/locations"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Phone, ShieldCheck, Truck, HeartHandshake, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Geniş Bölge & Şehirlerarası Evcil Hayvan Defin Hizmeti | Ege Pet Hayvan Mezarlığı",
  description:
    "Muğla (Bodrum, Marmaris, Fethiye, Datça), Aydın, Balıkesir, Denizli ve Uşak bölgelerinden randevulu evden alım, özel cenaze nakil ve Kemalpaşa Huzur Bahçesi'nde saygılı defin hizmeti.",
  alternates: {
    canonical: "/genis-bolge-hizmeti",
  },
}

export default function GenisBolgeHizmetiPage() {
  return (
    <main className="min-h-screen bg-[var(--brand-warm)] dark:bg-background">
      <Navigation />

      {/* Hero Header */}
      <div className="relative py-16 sm:py-24 bg-[#191716] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/bgimage.png"
            alt="Ege Pet Hayvan Mezarlığı Arka Plan"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[rgba(249,54,68,0.2)] text-[--brand-primary] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4">
            Ege Bölgesi Geneli Özel Nakil
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Şehirlerarası & Geniş Bölge Evcil Hayvan Cenaze Nakil ve Defin Hizmeti
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl mx-auto">
            Kemalpaşa'daki 2 dönümlük Huzur Bahçesi tesisimize 100 km ve üzeri mesafede bulunan Muğla, Aydın, Balıkesir, Denizli ve Uşak illerimizden önceden randevulu özel donanımlı araçlarımızla evden alım ve saygılı defin hizmeti sunuyoruz.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-[--brand-primary] text-white hover:bg-[--brand-primary-hover] font-semibold" asChild>
              <a href="tel:+905467353162">
                <Phone className="w-4 h-4 mr-2" />
                Hemen Bilgi Alın: 0546 735 31 62
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white/30 bg-white/10 hover:bg-white/20" asChild>
              <a href="https://wa.me/905467353162" target="_blank" rel="noopener noreferrer">
                WhatsApp ile Yazın
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Process & Transparency Section */}
      <section className="py-12 sm:py-16 container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Uzak Mesafeler İçin Nasıl Bir Süreç İşliyor?
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            100 km ve üzeri lokasyonlarda dostunuzun güvenliği, hijyeni ve defin süreci için profesyonel bir protokol yürütüyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="border rounded-2xl shadow-sm bg-card">
            <CardHeader className="pb-3">
              <div className="w-12 h-12 rounded-xl bg-[rgba(249,54,68,0.1)] flex items-center justify-center text-[--brand-primary] mb-3">
                <Truck className="w-6 h-6" />
              </div>
              <CardTitle className="text-lg font-serif">1. Özel Araç Tahsisi</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              İklimlendirmeli ve steril koşullara sahip özel nakil aracımız, belirtilen adresten can dostunuzu almak üzere yola çıkar.
            </CardContent>
          </Card>

          <Card className="border rounded-2xl shadow-sm bg-card">
            <CardHeader className="pb-3">
              <div className="w-12 h-12 rounded-xl bg-[rgba(249,54,68,0.1)] flex items-center justify-center text-[--brand-primary] mb-3">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <CardTitle className="text-lg font-serif">2. Güvenli & Saygılı Nakil</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              Mesafe ve yol durumuna göre ailemiz anlık bilgilendirilir. Dostumuz Kemalpaşa Dereköy'deki kabristanımıza özenle ulaştırılır.
            </CardContent>
          </Card>

          <Card className="border rounded-2xl shadow-sm bg-card">
            <CardHeader className="pb-3">
              <div className="w-12 h-12 rounded-xl bg-[rgba(249,54,68,0.1)] flex items-center justify-center text-[--brand-primary] mb-3">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <CardTitle className="text-lg font-serif">3. Defin ve Canlı Paylaşım</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              Ailenin katılımıyla veya ailenin uzakta olduğu durumlarda video/fotoğraflı kayıt eşliğinde defin işlemi tamamlanır.
            </CardContent>
          </Card>
        </div>

        {/* Regions Table */}
        <div className="bg-card border rounded-3xl p-6 sm:p-8 shadow-sm">
          <h3 className="font-serif text-xl sm:text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
            <MapPin className="text-[--brand-primary] w-6 h-6" />
            Önceden Randevulu Hizmet Verilen Şehir ve Bölgeler
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {distantRegions.map((region) => (
              <div
                key={region.name}
                className="border border-border/80 rounded-2xl p-4 bg-background/50 hover:border-[--brand-primary]/50 transition-colors"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-serif font-bold text-base text-foreground">{region.name}</h4>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-muted text-muted-foreground">
                    {region.city}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                  <MapPin className="w-3.5 h-3.5 text-[--brand-primary]" />
                  <span>Kemalpaşa'ya Mesafe: <strong>{region.distance}</strong></span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <Clock className="w-3.5 h-3.5 text-[--brand-primary]" />
                  <span>Ort. Ulaşım Süresi: <strong>{region.estDuration}</strong></span>
                </div>
                <p className="text-xs text-foreground/75 border-t pt-2 mt-2 leading-relaxed">
                  {region.note}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 sm:p-6 rounded-2xl bg-[rgba(249,54,68,0.06)] border border-[rgba(249,54,68,0.2)] text-sm text-foreground/80 leading-relaxed">
            <p className="font-semibold text-foreground mb-1 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[--brand-primary]" />
              Geniş Bölge Ücretlendirme ve Randevu Bilgisi:
            </p>
            100 km üzeri mesafelerde sabit defin paket ücretlerimize ek olarak kilometre ve yol gideri bazında şeffaf bir transfer bedeli hesaplanmaktadır. Detaylı süre ve araç müsaitliği için lütfen doğrudan Murat Yılmaz (+90 546 735 31 62) ile iletişime geçiniz.
          </div>
        </div>

        {/* Back Link */}
        <div className="text-center mt-10">
          <Button variant="link" asChild className="text-[--brand-primary]">
            <Link href="/">← Ana Sayfaya ve Yakın Bölge Hizmetlerimize Dön</Link>
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </main>
  )
}
