export interface Location {
  slug: string
  name: string
  type: "il" | "ilce" | "bolge"
  parent?: string
  distance: string // Kemalpaşa'dan mesafe
  duration: string // Ortalama nakil süresi
  routeDesc: string // Ana ulaşım güzergahı
  localContext: string // İlçeye/bölgeye özel benzersiz açıklama
  coordinates?: {
    lat: string
    lng: string
  }
}

export interface DistantRegion {
  name: string
  city: string
  distance: string
  estDuration: string
  note: string
}

// 0-50 km Gerçek Hizmet Alanı: İzmir ve Yakın İlçeler (Doorway riskine karşı benzersiz içeriklerle donatılmış)
export const locations: Location[] = [
  {
    slug: "kemalpasa-evcil-hayvan-mezarligi",
    name: "Kemalpaşa",
    type: "ilce",
    parent: "İzmir",
    distance: "0 km",
    duration: "10-15 dakika",
    routeDesc: "Kemalpaşa Dereköy mevkii doğrudan tesis içi ulaşım",
    localContext: "Tesisimizin ve 2 dönümlük Huzur Bahçesi'nin bizzat yer aldığı Kemalpaşa Dereköy mevkiinde, ilçe merkezinden ve tüm köylerden 10-15 dakika içinde acil transfer ve doğrudan defin imkanı sunulmaktadır.",
    coordinates: { lat: "38.4250", lng: "27.3500" },
  },
  {
    slug: "izmir-evcil-hayvan-mezarligi",
    name: "İzmir",
    type: "il",
    distance: "25 km",
    duration: "25-35 dakika",
    routeDesc: "İzmir Çevre Yolu (O-30) ve D300 Kemalpaşa bağlantısı",
    localContext: "İzmir genelindeki tüm veteriner klinikleri ve konutlardan 7/24 özel cenaze araçlarımızla can dostunuzu güvenle teslim alıyor, Kemalpaşa'daki korunaklı anı bahçemize naklediyoruz.",
    coordinates: { lat: "38.4237", lng: "27.1428" },
  },
  {
    slug: "bornova-evcil-hayvan-mezarligi",
    name: "Bornova",
    type: "ilce",
    parent: "İzmir",
    distance: "20 km",
    duration: "20-25 dakika",
    routeDesc: "Ankara Caddesi ve Belkahve Tünelleri / D300 üzerinden",
    localContext: "Bornova ve Ege Üniversitesi çevresindeki klinik ve hanelerden Belkahve geçişi ile yaklaşık 20 dakikada Kemalpaşa kabristanımıza en hızlı ulaşım sağlanmaktadır.",
    coordinates: { lat: "38.4619", lng: "27.2200" },
  },
  {
    slug: "buca-evcil-hayvan-mezarligi",
    name: "Buca",
    type: "ilce",
    parent: "İzmir",
    distance: "28 km",
    duration: "30-35 dakika",
    routeDesc: "Buca-Bornova Otoyol Bağlantısı ve D300 güzergahı",
    localContext: "Buca'nın Şirinyer, Forbes ve çevre mahallelerinden 7/24 randevusuz acil nakil ekibimizle evden alım gerçekleştirerek Kemalpaşa'da defin işlemlerini tamamlıyoruz.",
    coordinates: { lat: "38.3900", lng: "27.1600" },
  },
  {
    slug: "karsiyaka-evcil-hayvan-mezarligi",
    name: "Karşıyaka",
    type: "ilce",
    parent: "İzmir",
    distance: "38 km",
    duration: "35-40 dakika",
    routeDesc: "İzmir Kuzey Çevre Yolu ve Bornova-Kemalpaşa Otoyolu",
    localContext: "Bostanlı, Mavişehir ve Alaybey başta olmak üzere Karşıyaka'nın tüm semtlerinden özel donanımlı transfer aracımızla güvenli cenaze nakil ve defin desteği veriyoruz.",
    coordinates: { lat: "38.4600", lng: "27.1200" },
  },
  {
    slug: "bayrakli-evcil-hayvan-mezarligi",
    name: "Bayraklı",
    type: "ilce",
    parent: "İzmir",
    distance: "30 km",
    duration: "25-30 dakika",
    routeDesc: "Manas Bulvarı, Osmangazi ve Otoyol bağlantısıyla",
    localContext: "Bayraklı Adliye ve Manavkuyu çevresindeki veteriner kliniklerinden acil çağrı üzerine 30 dakika içerisinde adrese intikal eden uzman ekibimizle yanınızdayız.",
    coordinates: { lat: "38.4600", lng: "27.1700" },
  },
  {
    slug: "konak-evcil-hayvan-mezarligi",
    name: "Konak",
    type: "ilce",
    parent: "İzmir",
    distance: "32 km",
    duration: "30-40 dakika",
    routeDesc: "Yeşildere Caddesi ve Bornova-Kemalpaşa aksı",
    localContext: "İzmir'in tarihi merkezi Konak, Hatay, Göztepe ve çevresinden vefat eden evcil hayvanlar için saygılı veda ve ebedi defin organize ediyoruz.",
    coordinates: { lat: "38.4189", lng: "27.1286" },
  },
  {
    slug: "alsancak-evcil-hayvan-mezarligi",
    name: "Alsancak",
    type: "bolge",
    parent: "İzmir",
    distance: "33 km",
    duration: "30-35 dakika",
    routeDesc: "Liman Caddesi ve Çevre Yolu bağlantısı",
    localContext: "Alsancak, Kordon ve Kültür Mahallesi sakinlerine günün her saatinde hassas, sessiz ve hijyenik nakil desteği sağlıyoruz.",
    coordinates: { lat: "38.4300", lng: "27.1400" },
  },
  {
    slug: "karabaglar-evcil-hayvan-mezarligi",
    name: "Karabağlar",
    type: "ilce",
    parent: "İzmir",
    distance: "35 km",
    duration: "35-40 dakika",
    routeDesc: "Gaziemir-Çevre Yolu veya Yeşildere güzergahı",
    localContext: "Karabağlar, Üçyol ve Yeşilyurt bölgelerinden gelen taleplerde can dostunuzu adresinizden özenle teslim alıp kabristanımıza getiriyoruz.",
    coordinates: { lat: "38.3800", lng: "27.1000" },
  },
  {
    slug: "gaziemir-evcil-hayvan-mezarligi",
    name: "Gaziemir",
    type: "ilce",
    parent: "İzmir",
    distance: "20 km",
    duration: "20-25 dakika",
    routeDesc: "Torbalı-Kemalpaşa çevre bağlantı yolu üzerinden",
    localContext: "Gaziemir ve Sarnıç bölgesinden tesisimize çevre bağlantı yolları sayesinde yalnızca 20 dakikada çok hızlı ve kesintisiz ulaşım imkanı bulunmaktadır.",
    coordinates: { lat: "38.3200", lng: "27.0900" },
  },
  {
    slug: "cigli-evcil-hayvan-mezarligi",
    name: "Çiğli",
    type: "ilce",
    parent: "İzmir",
    distance: "45 km",
    duration: "40-45 dakika",
    routeDesc: "Kuzey Çevre Yolu (O-30) kesintisiz otoyol sürüşü",
    localContext: "Çiğli, Egekent ve Sasalı bölgelerindeki hayvansever dostlarımıza çevre yolu konforuyla hızlı nakil ve defin hizmeti sunuyoruz.",
    coordinates: { lat: "38.4931", lng: "27.0700" },
  },
  {
    slug: "torbali-evcil-hayvan-mezarligi",
    name: "Torbalı",
    type: "ilce",
    parent: "İzmir",
    distance: "15 km",
    duration: "15-20 dakika",
    routeDesc: "Kemalpaşa-Torbalı yolu üzerinden doğrudan komşu ilçe rotası",
    localContext: "Torbalı ve Ayrancılar Kemalpaşa'ya en yakın komşu ilçelerimizdendir. Yaklaşık 15 dakikada adrese ulaşarak dostunuzu ebedi istirahatgahına uğurluyoruz.",
    coordinates: { lat: "38.1500", lng: "27.3600" },
  },
  {
    slug: "menderes-evcil-hayvan-mezarligi",
    name: "Menderes",
    type: "ilce",
    parent: "İzmir",
    distance: "25 km",
    duration: "25-30 dakika",
    routeDesc: "Menderes-Kısıkköy-Kemalpaşa bağlantı güzergahı",
    localContext: "Menderes ve Gümüldür yönünden gelen defin taleplerini gün boyu düzenli olarak karşılıyor, geniş anı bahçemizde yer tahsis ediyoruz.",
    coordinates: { lat: "38.2500", lng: "27.1300" },
  },
  {
    slug: "menemen-evcil-hayvan-mezarligi",
    name: "Menemen",
    type: "ilce",
    parent: "İzmir",
    distance: "50 km",
    duration: "45-50 dakika",
    routeDesc: "Çanakkale Asfaltı ve Kuzey Çevre Yolu bağlantısı",
    localContext: "Menemen, Koyundere ve Ulukent bölgelerinden veteriner onaylı nakil ve randevulu defin işlemlerini profesyonelce gerçekleştiriyoruz.",
    coordinates: { lat: "38.6000", lng: "27.0700" },
  },
  {
    slug: "urla-evcil-hayvan-mezarligi",
    name: "Urla",
    type: "ilce",
    parent: "İzmir",
    distance: "48 km",
    duration: "45-50 dakika",
    routeDesc: "Çeşme-İzmir Otoyolu ve Bornova-Kemalpaşa bağlantısı",
    localContext: "Urla İskele, Kalabak ve Çeşmealtı mevkilerinden can dostlarımızın evden alım ve nakil süreçlerini titizlikle organize ediyoruz.",
    coordinates: { lat: "38.3200", lng: "26.7700" },
  },
  {
    slug: "seferihisar-evcil-hayvan-mezarligi",
    name: "Seferihisar",
    type: "ilce",
    parent: "İzmir",
    distance: "50 km",
    duration: "45-55 dakika",
    routeDesc: "Seferihisar-Güzelbahçe Otoyol bağlantısı",
    localContext: "Sığacık ve Seferihisar merkezindeki evcil hayvan sahiplerine huzurlu ve yeşillikler içindeki kabristanımızda kalıcı anı alanı sunuyoruz.",
    coordinates: { lat: "38.2000", lng: "26.8300" },
  },
  {
    slug: "bayindir-evcil-hayvan-mezarligi",
    name: "Bayındır",
    type: "ilce",
    parent: "İzmir",
    distance: "45 km",
    duration: "40-45 dakika",
    routeDesc: "Torbalı-Bayındır yolu üzerinden",
    localContext: "Küçük Menderes havzasındaki Bayındır ilçemizden Kemalpaşa'daki anı bahçemize düzenli nakil ve defin desteği sunulmaktadır.",
    coordinates: { lat: "38.2200", lng: "27.6400" },
  },
  {
    slug: "turgutlu-evcil-hayvan-mezarligi",
    name: "Turgutlu",
    type: "ilce",
    parent: "Manisa",
    distance: "35 km",
    duration: "30-35 dakika",
    routeDesc: "D300 İzmir-Ankara Karayolu doğrudan Kemalpaşa bağlantısı",
    localContext: "Manisa Turgutlu ilçesi Kemalpaşa'ya doğrudan D300 üzerinden çok yakındır. Turgutlu'daki ailelerimize 30 dakikada nakil ve defin çözümü sunuyoruz.",
    coordinates: { lat: "38.5000", lng: "27.7000" },
  },
  {
    slug: "manisa-evcil-hayvan-mezarligi",
    name: "Manisa",
    type: "il",
    distance: "45 km",
    duration: "40-45 dakika",
    routeDesc: "Manisa-Kemalpaşa Yolu (Sabuncubeli veya Turgutlu aksı)",
    localContext: "Manisa il merkezi, Yunusemre ve Şehzadeler ilçelerinden 7/24 cenaze nakil servisimizle can dostunuzu alıp Kemalpaşa'daki Huzur Bahçesi'nde defnediyoruz.",
    coordinates: { lat: "38.6191", lng: "27.4289" },
  },
]

// 100km+ Uzak Şehirler (Geniş Bölge / Şehirlerarası Hizmet kapsamında tek sayfada toplanan bölgeler)
export const distantRegions: DistantRegion[] = [
  {
    name: "Bodrum",
    city: "Muğla",
    distance: "200 km",
    estDuration: "2.5 - 3 saat",
    note: "Önceden randevu ve özel iklimlendirmeli nakil aracıyla hizmet verilmektedir.",
  },
  {
    name: "Marmaris",
    city: "Muğla",
    distance: "220 km",
    estDuration: "3 saat",
    note: "Muğla kıyı şeridinden planlı nakil ve Kemalpaşa kabristanında özel defin.",
  },
  {
    name: "Fethiye",
    city: "Muğla",
    distance: "250 km",
    estDuration: "3.5 saat",
    note: "Randevulu şehirlerarası transfer protokolü uygulanmaktadır.",
  },
  {
    name: "Datça",
    city: "Muğla",
    distance: "240 km",
    estDuration: "3.5 saat",
    note: "Yol ve feribot saatlerine göre özel lojistik planlama yapılır.",
  },
  {
    name: "Kuşadası & Didim & Söke",
    city: "Aydın",
    distance: "95 - 115 km",
    estDuration: "1 - 1.5 saat",
    note: "Aydın sahil şeridinden düzenli ve hızlı otoyol nakli.",
  },
  {
    name: "Aydın Merkez & Nazilli",
    city: "Aydın",
    distance: "100 - 120 km",
    estDuration: "1 - 1.5 saat",
    note: "İzmir-Aydın otoyolu üzerinden güvenli transfer.",
  },
  {
    name: "Edremit & Ayvalık & Burhaniye",
    city: "Balıkesir",
    distance: "140 - 160 km",
    estDuration: "2 saat",
    note: "Kuzey Ege sahilinden randevulu evden alım ve nakil desteği.",
  },
  {
    name: "Denizli & Pamukkale",
    city: "Denizli",
    distance: "180 km",
    estDuration: "2 - 2.5 saat",
    note: "Özel nakil aracı tahsisi ile gün içi transfer ve defin organizasyonu.",
  },
  {
    name: "Uşak",
    city: "Uşak",
    distance: "200 km",
    estDuration: "2.5 saat",
    note: "D300 karayolu üzerinden doğrudan Kemalpaşa kabristanına nakil.",
  },
  {
    name: "Çeşme & Alaçatı",
    city: "İzmir",
    distance: "80 km",
    estDuration: "50-60 dakika",
    note: "Çeşme otoyolu üzerinden aynı gün içinde hızlı alım ve defin.",
  },
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
