import type React from "react"
import type { Metadata } from "next"
import { Lora, Nunito_Sans } from "next/font/google"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/lib/language-context"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
})

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Ege Pet Hayvan Mezarlığı | İzmir 7/24 Cenaze Nakil ve Defin Hizmeti",
    template: "%s | Ege Pet Hayvan Mezarlığı",
  },
  description:
    "Ege Pet Hayvan Mezarlığı; İzmir Kemalpaşa'daki 2 dönümlük Huzur Bahçesi'nde 7/24 evden alım, özel cenaze nakil ve saygılı ebedi defin hizmeti sunmaktadır.",
  keywords: [
    "Ege Pet Hayvan Mezarlığı",
    "İzmir hayvan mezarlığı",
    "pet mezarlığı",
    "evcil hayvan mezarlığı",
    "hayvan defin hizmeti",
    "evcil hayvan defin",
    "pet cenaze nakil",
    "Kemalpaşa hayvan mezarlığı",
    "pet anı bahçesi",
    "kedi köpek mezarlığı",
  ],
  authors: [{ name: "Ege Pet Hayvan Mezarlığı" }],
  creator: "Ege Pet Hayvan Mezarlığı",
  publisher: "Ege Pet Hayvan Mezarlığı",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://egepetmezarligi.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://egepetmezarligi.com",
    siteName: "Ege Pet Hayvan Mezarlığı",
    title: "Ege Pet Hayvan Mezarlığı | İzmir 7/24 Cenaze Nakil ve Defin Hizmeti",
    description:
      "İzmir Kemalpaşa'da can dostunuz için 2 dönümlük korunaklı anı bahçesi, 7/24 evden alım, cenaze nakli ve saygılı defin hizmetleri.",
    images: [
      {
        url: "/bgimage.png",
        width: 1200,
        height: 630,
        alt: "Ege Pet Hayvan Mezarlığı - Kemalpaşa Huzur Bahçesi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ege Pet Hayvan Mezarlığı | İzmir 7/24 Cenaze Nakil ve Defin Hizmeti",
    description:
      "Can dostunuz için saygılı bir veda. İzmir ve çevre illerden 7/24 evden alım ve Kemalpaşa Huzur Bahçesi'nde ebedi defin desteği.",
    images: ["/bgimage.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-dark-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-light-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${lora.variable} ${nunitoSans.variable} font-sans antialiased`}>
        {/* Google tag (gtag.js) */}
        <Script id="google-ads" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'AW-17822278183');
          `}
        </Script>

        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
