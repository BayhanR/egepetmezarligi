import type React from "react"
import type { Metadata } from "next"
import { Lora, Nunito_Sans } from "next/font/google"
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
    default: "EGE PET Hayvan Mezarlığı | Evcil Dostlarınız İçin Huzurlu Bir Veda",
    template: "%s | EGE PET Hayvan Mezarlığı",
  },
  description: "Evcil dostlarınız için doğayla iç içe, saygılı bir anı alanı. Pet mezarlığı, kremasyon ve anı bahçesi hizmetleri. İzmir'de profesyonel hayvan mezarlığı hizmeti.",
  keywords: [
    "hayvan mezarlığı",
    "pet mezarlığı",
    "evcil hayvan mezarlığı",
    "kremasyon",
    "anı bahçesi",
    "pet kremasyon",
    "hayvan defin",
    "evcil hayvan defin",
    "İzmir hayvan mezarlığı",
    "pet anı bahçesi",
  ],
  authors: [{ name: "EGE PET Hayvan Mezarlığı" }],
  creator: "EGE PET Hayvan Mezarlığı",
  publisher: "EGE PET Hayvan Mezarlığı",
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
    siteName: "EGE PET Hayvan Mezarlığı",
    title: "EGE PET Hayvan Mezarlığı | Evcil Dostlarınız İçin Huzurlu Bir Veda",
    description: "Evcil dostlarınız için doğayla iç içe, saygılı bir anı alanı. Pet mezarlığı, kremasyon ve anı bahçesi hizmetleri.",
    images: [
      {
        url: "/bgimage.png",
        width: 1200,
        height: 630,
        alt: "EGE PET Hayvan Mezarlığı - Huzurlu Anı Bahçesi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EGE PET Hayvan Mezarlığı | Evcil Dostlarınız İçin Huzurlu Bir Veda",
    description: "Evcil dostlarınız için doğayla iç içe, saygılı bir anı alanı. Pet mezarlığı, kremasyon ve anı bahçesi hizmetleri.",
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
  verification: {
    // Google Search Console verification code buraya eklenecek
    // google: "verification-code",
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
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
