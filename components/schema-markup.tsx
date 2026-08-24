export function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://egepetmezarligi.com/#organization",
    name: "Ege Pet Hayvan Mezarlığı",
    alternateName: "Ege Pet Evcil Hayvan Kabristanı",
    description:
      "Ege Pet Hayvan Mezarlığı; İzmir Kemalpaşa'daki 2 dönümlük huzurlu anı bahçesinde, 7/24 evden alım, özel cenaze nakil ve saygılı defin hizmeti sunmaktadır.",
    url: "https://egepetmezarligi.com",
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
    areaServed: [
      {
        "@type": "City",
        name: "İzmir",
      },
      {
        "@type": "City",
        name: "Manisa",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Evcil Hayvan Defin ve Nakil Hizmetleri",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "7/24 Cenaze Nakil ve Evden Alım",
            description: "İzmir ve çevre illerden özel donanımlı araçla evden veya klinikten nakil",
            provider: {
              "@type": "LocalBusiness",
              name: "Ege Pet Hayvan Mezarlığı",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ebedi Defin ve Gömü Hizmeti",
            description: "Kemalpaşa Huzur Bahçesi'nde saygılı defin ve anı bahçesi tahsisi",
            provider: {
              "@type": "LocalBusiness",
              name: "Ege Pet Hayvan Mezarlığı",
            },
          },
        },
      ],
    },
    sameAs: [
      "https://www.instagram.com/egepet_izmir",
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
