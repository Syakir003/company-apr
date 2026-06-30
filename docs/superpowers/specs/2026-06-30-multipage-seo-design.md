# Spec: Kerangka Multi-Page + SEO — APR Website

Tanggal: 2026-06-30
Status: disetujui (siap masuk rencana implementasi)

## Tujuan

Memecah situs satu-halaman (`index.astro`) menjadi multi-page agar bisa
menjangkau lebih banyak kueri pencarian (terutama "[layanan] AC [kota]"), tanpa
kehilangan konten dan tanpa membuat halaman tipis (doorway pages) yang justru
menurunkan SEO.

## Keputusan yang sudah disepakati

1. **Model "Hub"** — Beranda tetap utuh (berisi ringkasan semua section).
   Halaman detail ditambahkan terpisah; section di beranda jadi ringkasan +
   tautan "selengkapnya" ke halaman detail. Tidak ada konten yang hilang.
2. **Cakupan Fase 1**: Layanan (inti) + Area per-kota + Tentang & Kontak khusus.
   Blog **tidak** termasuk Fase 1.
3. **Implementasi data-driven** — perkaya `site.js`, gunakan satu template
   dinamis per jenis halaman + `getStaticPaths()`. Sesuai pola "pusat data".
4. **Konten**: draft awal dituliskan untuk tiap halaman; fakta yang belum
   diketahui (harga, klaim spesifik) ditandai `TODO:` untuk dilengkapi pemilik.
5. **Slug berbahasa Indonesia** (mis. `servis-ac`, `area/mojokerto`).

## Struktur file & rute

```
src/pages/
  index.astro            Beranda (hub): section jadi ringkasan + link "selengkapnya"
  layanan/index.astro    Daftar semua layanan
  layanan/[slug].astro   Detail layanan (getStaticPaths dari services)
  area/index.astro       Daftar area layanan
  area/[kota].astro      Halaman per-kota (getStaticPaths dari areas)
  tentang.astro          Profil + legalitas + sertifikat
  kontak.astro           Kontak + peta + jam buka
  sitemap.xml.js         Endpoint sitemap dinamis (enumerasi semua rute)
```

Halaman layanan Fase 1: `servis-ac`, `jual-ac`, `perawatan-ac`, `sewa-ac`.
Area Fase 1 (6 halaman): `mojokerto`, `sidoarjo`, `jombang`, `gresik`,
`lamongan`, `surabaya`. Catatan: "Kota Mojokerto" + "Kabupaten Mojokerto"
digabung jadi **satu** halaman `mojokerto` (hindari dua halaman nyaris duplikat);
teksnya menyebut melayani Kota & Kabupaten Mojokerto.

## Refactor `Layout.astro` (fondasi)

- **Header + Footer dipindah ke Layout** → chrome sitewide; tiap halaman cukup
  mengisi konten utama lewat `<slot/>`.
- Props SEO per halaman: `title`, `description`, `ogImage?`, `breadcrumbs?`,
  `schema?` (array JSON-LD tambahan).
- Canonical dihitung otomatis dari `Astro.url` (sudah ada).
- Schema **HVACBusiness** tetap dirender di semua halaman sebagai baseline;
  schema spesifik per halaman ditambahkan lewat prop `schema`.
- WhatsApp float, lightbox, dan `<script>` interaktif tetap di Layout (sitewide).

## Model data di `site.js` (satu sumber)

```js
export const services = [
  {
    slug: "servis-ac",
    n: "01",
    title: "Servis & Perbaikan AC",
    seoTitle: "Servis & Perbaikan AC Mojokerto | CV Ayub Podo Rukun",
    metaDesc: "<= 160 char, mengandung layanan + lokasi>",
    short: "<deskripsi ringkas yang sudah ada>",
    body: ["<paragraf draft 1>", "<paragraf draft 2>", "..."],
    faq: [{ q: "...", a: "..." }],
  },
  // jual-ac, perawatan-ac, sewa-ac
];

export const areas = [
  {
    slug: "mojokerto",
    name: "Mojokerto",
    seoTitle: "Service & Jual AC Mojokerto | CV Ayub Podo Rukun",
    metaDesc: "...",
    body: ["<paragraf lokal draft>", "..."],
  },
  // sidoarjo, jombang, gresik, lamongan, surabaya
];
```

`nav` diubah ke rute nyata: `/`, `/layanan`, `/area`, `/tentang`, `/#rekanan`,
`/kontak`.

## SEO per jenis halaman

| Halaman | Title/Desc/H1 unik | Schema tambahan (selain HVACBusiness baseline) |
|---|---|---|
| Beranda | ✓ | BreadcrumbList |
| /layanan/[slug] | ✓ | Service + FAQPage + BreadcrumbList |
| /area/[kota] | ✓ | Service (areaServed) + BreadcrumbList |
| /layanan, /area (index) | ✓ | BreadcrumbList |
| /tentang | ✓ | BreadcrumbList |
| /kontak | ✓ | BreadcrumbList (HVACBusiness jadi fokus) |

## Navigasi & breadcrumb

- Nav diperbarui ke rute nyata; tautan section-only (Brand/Rekanan) → `/#rekanan`.
- Komponen baru **`Breadcrumb.astro`**: render visual breadcrumb + emit
  `BreadcrumbList` JSON-LD. Dipakai di semua sub-halaman.
- Internal linking: Beranda → detail layanan; halaman layanan ↔ area ↔ kontak.

## Sitemap

- **`src/pages/sitemap.xml.js`** endpoint dinamis: enumerasi beranda + semua
  layanan + semua area + tentang + kontak dari `site.js`. Tanpa dependency
  (menghindari crash `@astrojs/sitemap` di Astro 4.16).
- **Hapus `public/sitemap.xml` statis** agar tidak bentrok dengan endpoint.
- `robots.txt` tetap menunjuk `/sitemap.xml` (cocok dengan output endpoint).

## Komponen baru / berubah

- Baru: `Breadcrumb.astro`, template `layanan/[slug].astro`, `area/[kota].astro`,
  `layanan/index.astro`, `area/index.astro`, `tentang.astro`, `kontak.astro`,
  `sitemap.xml.js`.
- Berubah: `Layout.astro` (chrome + SEO props), `Header.astro` (nav rute nyata),
  `index.astro` (section jadi ringkasan + link), `site.js` (data diperkaya).
- Komponen existing (Hero, Services, About, Certificates, Process, Clients,
  Gallery, Cta, Map, Footer) dipakai ulang; sebagian dirender di sub-halaman
  terkait (mis. Certificates di /tentang, Map di /kontak).

## Di luar lingkup (Fase berikutnya)

- Blog `/blog` + artikel edukasi.
- Kombinasi layanan×kota (mis. `/servis-ac-sidoarjo`).
- Konversi gambar ke WebP/AVIF & OG image khusus 1200×630.
- Penulisan konten unik final (draft + `TODO:` dulu di Fase 1).

## Verifikasi & batasan

- Setiap tahap diverifikasi `npm run build` (harus lulus, tanpa bug).
- Tidak mengubah warna/font (preferensi pemilik: gaya "halus").
- Tetap statis (Astro static output), tetap deploy via Vercel.
- Commit tanpa `Co-Authored-By: Claude` (preferensi pemilik).
