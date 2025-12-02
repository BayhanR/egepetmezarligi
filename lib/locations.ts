export interface Location {
  slug: string
  name: string
  type: "il" | "ilce" | "bolge"
  parent?: string
  distance: string // Kemalpaşa'dan mesafe
  coordinates?: {
    lat: string
    lng: string
  }
}

export const locations: Location[] = [
  // İzmir İlçeleri
  { slug: "izmir-evcil-hayvan-mezarligi", name: "İzmir", type: "il", distance: "25 km", coordinates: { lat: "38.4237", lng: "27.1428" } },
  { slug: "kemalpasa-evcil-hayvan-mezarligi", name: "Kemalpaşa", type: "ilce", parent: "İzmir", distance: "0 km", coordinates: { lat: "38.4250", lng: "27.3500" } },
  { slug: "bornova-evcil-hayvan-mezarligi", name: "Bornova", type: "ilce", parent: "İzmir", distance: "30 km", coordinates: { lat: "38.4619", lng: "27.2200" } },
  { slug: "cigli-evcil-hayvan-mezarligi", name: "Çiğli", type: "ilce", parent: "İzmir", distance: "45 km", coordinates: { lat: "38.4931", lng: "27.0700" } },
  { slug: "karabaglar-evcil-hayvan-mezarligi", name: "Karabağlar", type: "ilce", parent: "İzmir", distance: "35 km", coordinates: { lat: "38.3800", lng: "27.1000" } },
  { slug: "buca-evcil-hayvan-mezarligi", name: "Buca", type: "ilce", parent: "İzmir", distance: "28 km", coordinates: { lat: "38.3900", lng: "27.1600" } },
  { slug: "konak-evcil-hayvan-mezarligi", name: "Konak", type: "ilce", parent: "İzmir", distance: "32 km", coordinates: { lat: "38.4189", lng: "27.1286" } },
  { slug: "alsancak-evcil-hayvan-mezarligi", name: "Alsancak", type: "ilce", parent: "İzmir", distance: "33 km", coordinates: { lat: "38.4300", lng: "27.1400" } },
  { slug: "karsiyaka-evcil-hayvan-mezarligi", name: "Karşıyaka", type: "ilce", parent: "İzmir", distance: "40 km", coordinates: { lat: "38.4600", lng: "27.1200" } },
  { slug: "bayrakli-evcil-hayvan-mezarligi", name: "Bayraklı", type: "ilce", parent: "İzmir", distance: "38 km", coordinates: { lat: "38.4600", lng: "27.1700" } },
  { slug: "gaziemir-evcil-hayvan-mezarligi", name: "Gaziemir", type: "ilce", parent: "İzmir", distance: "20 km", coordinates: { lat: "38.3200", lng: "27.0900" } },
  { slug: "menemen-evcil-hayvan-mezarligi", name: "Menemen", type: "ilce", parent: "İzmir", distance: "50 km", coordinates: { lat: "38.6000", lng: "27.0700" } },
  { slug: "torbali-evcil-hayvan-mezarligi", name: "Torbalı", type: "ilce", parent: "İzmir", distance: "15 km", coordinates: { lat: "38.1500", lng: "27.3600" } },
  { slug: "menderes-evcil-hayvan-mezarligi", name: "Menderes", type: "ilce", parent: "İzmir", distance: "25 km", coordinates: { lat: "38.2500", lng: "27.1300" } },
  { slug: "seferihisar-evcil-hayvan-mezarligi", name: "Seferihisar", type: "ilce", parent: "İzmir", distance: "40 km", coordinates: { lat: "38.2000", lng: "26.8300" } },
  { slug: "urla-evcil-hayvan-mezarligi", name: "Urla", type: "ilce", parent: "İzmir", distance: "35 km", coordinates: { lat: "38.3200", lng: "26.7700" } },
  { slug: "cesme-evcil-hayvan-mezarligi", name: "Çeşme", type: "ilce", parent: "İzmir", distance: "80 km", coordinates: { lat: "38.3200", lng: "26.3000" } },
  { slug: "foça-evcil-hayvan-mezarligi", name: "Foça", type: "ilce", parent: "İzmir", distance: "70 km", coordinates: { lat: "38.6700", lng: "26.7500" } },
  { slug: "aliaga-evcil-hayvan-mezarligi", name: "Aliağa", type: "ilce", parent: "İzmir", distance: "60 km", coordinates: { lat: "38.8000", lng: "27.0000" } },
  { slug: "bergama-evcil-hayvan-mezarligi", name: "Bergama", type: "ilce", parent: "İzmir", distance: "90 km", coordinates: { lat: "39.1200", lng: "27.1800" } },
  { slug: "odemis-evcil-hayvan-mezarligi", name: "Ödemiş", type: "ilce", parent: "İzmir", distance: "75 km", coordinates: { lat: "38.2300", lng: "27.9700" } },
  { slug: "tire-evcil-hayvan-mezarligi", name: "Tire", type: "ilce", parent: "İzmir", distance: "55 km", coordinates: { lat: "38.0900", lng: "27.7300" } },
  { slug: "selcuk-evcil-hayvan-mezarligi", name: "Selçuk", type: "ilce", parent: "İzmir", distance: "50 km", coordinates: { lat: "37.9500", lng: "27.3700" } },
  { slug: "dikili-evcil-hayvan-mezarligi", name: "Dikili", type: "ilce", parent: "İzmir", distance: "100 km", coordinates: { lat: "39.0700", lng: "26.8800" } },
  { slug: "kınık-evcil-hayvan-mezarligi", name: "Kınık", type: "ilce", parent: "İzmir", distance: "110 km", coordinates: { lat: "39.0900", lng: "27.3800" } },
  { slug: "beydag-evcil-hayvan-mezarligi", name: "Beydağ", type: "ilce", parent: "İzmir", distance: "95 km", coordinates: { lat: "38.0800", lng: "28.2100" } },
  { slug: "kiraz-evcil-hayvan-mezarligi", name: "Kiraz", type: "ilce", parent: "İzmir", distance: "85 km", coordinates: { lat: "38.2300", lng: "28.2000" } },
  { slug: "bayindir-evcil-hayvan-mezarligi", name: "Bayındır", type: "ilce", parent: "İzmir", distance: "45 km", coordinates: { lat: "38.2200", lng: "27.6400" } },
  { slug: "karaburun-evcil-hayvan-mezarligi", name: "Karaburun", type: "ilce", parent: "İzmir", distance: "90 km", coordinates: { lat: "38.6300", lng: "26.5100" } },

  // Manisa
  { slug: "manisa-evcil-hayvan-mezarligi", name: "Manisa", type: "il", distance: "45 km", coordinates: { lat: "38.6191", lng: "27.4289" } },
  { slug: "salihli-evcil-hayvan-mezarligi", name: "Salihli", type: "ilce", parent: "Manisa", distance: "70 km", coordinates: { lat: "38.4800", lng: "28.1400" } },
  { slug: "turgutlu-evcil-hayvan-mezarligi", name: "Turgutlu", type: "ilce", parent: "Manisa", distance: "35 km", coordinates: { lat: "38.5000", lng: "27.7000" } },
  { slug: "akhisar-evcil-hayvan-mezarligi", name: "Akhisar", type: "ilce", parent: "Manisa", distance: "85 km", coordinates: { lat: "38.9200", lng: "27.8400" } },
  { slug: "soma-evcil-hayvan-mezarligi", name: "Soma", type: "ilce", parent: "Manisa", distance: "110 km", coordinates: { lat: "39.1900", lng: "27.6100" } },
  { slug: "alasehir-evcil-hayvan-mezarligi", name: "Alaşehir", type: "ilce", parent: "Manisa", distance: "90 km", coordinates: { lat: "38.3500", lng: "28.5200" } },
  { slug: "sarigol-evcil-hayvan-mezarligi", name: "Sarigöl", type: "ilce", parent: "Manisa", distance: "100 km", coordinates: { lat: "38.2400", lng: "28.7000" } },

  // Aydın
  { slug: "aydin-evcil-hayvan-mezarligi", name: "Aydın", type: "il", distance: "100 km", coordinates: { lat: "37.8444", lng: "27.8458" } },
  { slug: "nazilli-evcil-hayvan-mezarligi", name: "Nazilli", type: "ilce", parent: "Aydın", distance: "120 km", coordinates: { lat: "37.9100", lng: "28.3200" } },
  { slug: "soke-evcil-hayvan-mezarligi", name: "Söke", type: "ilce", parent: "Aydın", distance: "90 km", coordinates: { lat: "37.7500", lng: "27.4100" } },
  { slug: "didim-evcil-hayvan-mezarligi", name: "Didim", type: "ilce", parent: "Aydın", distance: "110 km", coordinates: { lat: "37.3800", lng: "27.2600" } },
  { slug: "kusadasi-evcil-hayvan-mezarligi", name: "Kuşadası", type: "ilce", parent: "Aydın", distance: "95 km", coordinates: { lat: "37.8600", lng: "27.2600" } },
  { slug: "incirliova-evcil-hayvan-mezarligi", name: "İncirliova", type: "ilce", parent: "Aydın", distance: "105 km", coordinates: { lat: "37.8500", lng: "27.7200" } },

  // Balıkesir
  { slug: "edremit-evcil-hayvan-mezarligi", name: "Edremit", type: "ilce", parent: "Balıkesir", distance: "150 km", coordinates: { lat: "39.5900", lng: "27.0200" } },
  { slug: "ayvalik-evcil-hayvan-mezarligi", name: "Ayvalık", type: "ilce", parent: "Balıkesir", distance: "160 km", coordinates: { lat: "39.3200", lng: "26.6900" } },
  { slug: "burhaniye-evcil-hayvan-mezarligi", name: "Burhaniye", type: "ilce", parent: "Balıkesir", distance: "140 km", coordinates: { lat: "39.5000", lng: "26.9800" } },

  // Denizli
  { slug: "denizli-evcil-hayvan-mezarligi", name: "Denizli", type: "il", distance: "180 km", coordinates: { lat: "37.7765", lng: "29.0864" } },
  { slug: "pamukkale-evcil-hayvan-mezarligi", name: "Pamukkale", type: "ilce", parent: "Denizli", distance: "185 km", coordinates: { lat: "37.9200", lng: "29.1200" } },

  // Uşak
  { slug: "usak-evcil-hayvan-mezarligi", name: "Uşak", type: "il", distance: "200 km", coordinates: { lat: "38.6800", lng: "29.4000" } },

  // Muğla
  { slug: "bodrum-evcil-hayvan-defin-hizmeti", name: "Bodrum", type: "ilce", parent: "Muğla", distance: "200 km", coordinates: { lat: "37.0400", lng: "27.4300" } },
  { slug: "fethiye-evcil-hayvan-defin-hizmeti", name: "Fethiye", type: "ilce", parent: "Muğla", distance: "250 km", coordinates: { lat: "36.6200", lng: "29.1200" } },
  { slug: "marmaris-evcil-hayvan-defin-hizmeti", name: "Marmaris", type: "ilce", parent: "Muğla", distance: "220 km", coordinates: { lat: "36.8500", lng: "28.2700" } },
  { slug: "datca-evcil-hayvan-defin-hizmeti", name: "Datça", type: "ilce", parent: "Muğla", distance: "240 km", coordinates: { lat: "36.7400", lng: "27.6900" } },
]

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((loc) => loc.slug === slug)
}

export function getAllLocationSlugs(): string[] {
  return locations.map((loc) => loc.slug)
}

export function getLocationsByParent(parent: string): Location[] {
  return locations.filter((loc) => loc.parent === parent)
}

