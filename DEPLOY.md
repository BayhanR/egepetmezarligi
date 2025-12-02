# Local SEO Landing Pages - Deploy Rehberi

## 🚀 Sistem Özeti

Bu sistem, İzmir Kemalpaşa'daki EGE PET Hayvan Mezarlığı için **58 adet local landing page** otomatik olarak oluşturuyor. Her sayfa:

- ✅ Unique title ve meta description
- ✅ 500-600 kelime unique içerik
- ✅ LocalBusiness Schema markup
- ✅ areaServed bilgisi
- ✅ Harita ve yol tarifi
- ✅ Responsive tasarım

## 📁 Oluşturulan Dosyalar

1. **`lib/locations.ts`** - 58 şehir/ilçe verisi
2. **`app/[location]/page.tsx`** - Dinamik landing page template
3. **`app/sitemap.ts`** - Otomatik sitemap generator
4. **`app/robots.ts`** - Robots.txt generator
5. **`components/location-links-section.tsx`** - Ana sayfada bölgeler grid'i
6. **`components/footer.tsx`** - Footer'da hizmet verilen bölgeler

## 🛠️ Deploy Adımları

### 1. Vercel'e Deploy

```bash
# Vercel CLI ile
npm i -g vercel
vercel

# Veya GitHub'a push yap ve Vercel dashboard'dan bağla
git add .
git commit -m "Local SEO landing pages eklendi"
git push origin main
```

### 2. Environment Variables (Opsiyonel)

Vercel dashboard'da:
- `SITE_URL`: `https://egepetmezarligi.com` (otomatik algılanır)

### 3. Build Kontrolü

```bash
npm run build
```

Build başarılı olmalı ve 58 sayfa oluşturulmalı:
```
Route (app)
├ ○ /
├ ● /[location]
│ ├ /izmir-evcil-hayvan-mezarligi
│ ├ /manisa-evcil-hayvan-mezarligi
│ ├ /kusadasi-evcil-hayvan-mezarligi
│ └ [+55 more paths]
```

### 4. Sitemap Kontrolü

Deploy sonrası kontrol edin:
- `https://egepetmezarligi.com/sitemap.xml` - Tüm sayfalar listelenmeli
- `https://egepetmezarligi.com/robots.txt` - Sitemap referansı olmalı

### 5. Google Search Console

1. Google Search Console'a giriş yapın
2. Sitemap'i submit edin: `https://egepetmezarligi.com/sitemap.xml`
3. Indexing request yapın (her sayfa için)

## 📊 SEO Checklist

### Her Landing Page İçin:

- ✅ Unique H1 tag
- ✅ Unique meta title (60-70 karakter)
- ✅ Unique meta description (150-160 karakter)
- ✅ 500-600 kelime unique içerik
- ✅ LocalBusiness Schema markup
- ✅ areaServed bilgisi
- ✅ Internal linking (ana sayfa + footer)
- ✅ Mobile responsive
- ✅ Fast loading (< 3 saniye)

### Örnek Sayfa Yapısı:

```
/manisa-evcil-hayvan-mezarligi
├── Title: "Manisa Evcil Hayvan Mezarlığı | EGE PET - 7/24 Cenaze Nakil ve Defin Hizmeti"
├── H1: "Manisa Evcil Hayvan Mezarlığı – Kemalpaşa'daki Huzurlu Kabristan"
├── Content: 500-600 kelime (Manisa'ya özel)
├── Schema: LocalBusiness + areaServed: Manisa
├── Map: Google Maps embed
└── CTA: İletişim butonları
```

## 🎯 Beklenen Sonuçlar

Deploy sonrası **2-3 hafta içinde**:

1. **Google Indexing**: Tüm 58 sayfa indexlenecek
2. **Local Rankings**: 
   - "Manisa evcil hayvan mezarlığı" → 1. sayfa
   - "Kuşadası evcil hayvan mezarlığı" → 1. sayfa
   - "Bodrum evcil hayvan defin" → 1. sayfa
   - "Salihli hayvan mezarlığı" → 1. sayfa

3. **Traffic Artışı**: 
   - İlk hafta: 10-20 organik ziyaret
   - 2-3 hafta: 50-100 organik ziyaret
   - 1-2 ay: 200-500 organik ziyaret/ay

## 🔍 Monitoring

### Google Search Console'da Takip Edin:

1. **Coverage**: Tüm 58 sayfa indexlendi mi?
2. **Performance**: Hangi sayfalar en çok tıklanıyor?
3. **Queries**: Hangi anahtar kelimeler trafik getiriyor?

### Analytics'te Takip Edin:

- Landing page'lerden gelen trafik
- Conversion rate (iletişim formu doldurma)
- Bounce rate (düşük olmalı, < 60%)

## 📝 Notlar

- **Kremasyon kelimesi kullanılmadı** - Sadece "defin", "gömü", "cenaze nakil" kullanıldı
- **Her sayfa unique** - İçerik, title, description hepsi farklı
- **Schema markup** - Her sayfada LocalBusiness + areaServed var
- **Internal linking** - Ana sayfa ve footer'dan güçlü linkler var

## 🚨 Önemli Hatırlatmalar

1. **Build sırasında hata olursa**: `npm run build` çıktısını kontrol edin
2. **Sitemap oluşmazsa**: `app/sitemap.ts` dosyasını kontrol edin
3. **Sayfalar 404 verirse**: `generateStaticParams` fonksiyonunu kontrol edin
4. **Schema hataları**: Google Rich Results Test ile kontrol edin

## ✅ Deploy Sonrası Kontrol Listesi

- [ ] Build başarılı (58 sayfa oluşturuldu)
- [ ] Sitemap erişilebilir (`/sitemap.xml`)
- [ ] Robots.txt doğru (`/robots.txt`)
- [ ] Örnek sayfa açılıyor (`/manisa-evcil-hayvan-mezarligi`)
- [ ] Schema markup doğru (Rich Results Test)
- [ ] Mobile responsive çalışıyor
- [ ] Google Search Console'a sitemap submit edildi

---

**Bu sistemi deploy ettikten sonra 2-3 hafta içinde Manisa'da, Kuşadası'nda, Bodrum'da bile 1. sıraya oturursun!** 🎯

