export function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://egepetmezarligi.com/#organization",
    name: "EGE PET Hayvan Mezarlığı",
    alternateName: "Ege Pet Hayvan Mezarlığı",
    description: "Evcil dostlarınız için doğayla iç içe, saygılı bir anı alanı. Pet mezarlığı, kremasyon ve anı bahçesi hizmetleri.",
    url: "https://egepetmezarligi.com",
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
      latitude: "38.5",
      longitude: "27.4",
    },
    telephone: "+90-555-000-0000",
    email: "info@egepetmezarligi.com",
    priceRange: "₺₺",
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
    areaServed: {
      "@type": "City",
      name: "İzmir",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Pet Mezarlığı Hizmetleri",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Temel Paket",
            description: "Basit ve saygılı bir veda",
            provider: {
              "@type": "LocalBusiness",
              name: "EGE PET Hayvan Mezarlığı",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Özel Paket",
            description: "Daha özel bir anma deneyimi",
            provider: {
              "@type": "LocalBusiness",
              name: "EGE PET Hayvan Mezarlığı",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Premium Paket",
            description: "En kapsamlı hizmet",
            provider: {
              "@type": "LocalBusiness",
              name: "EGE PET Hayvan Mezarlığı",
            },
          },
        },
      ],
    },
    sameAs: [
      // Sosyal medya linkleri buraya eklenecek
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

