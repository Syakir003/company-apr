# Website CV Ayub Podo Rukun — Astro

Company profile interaktif untuk **CV Ayub Podo Rukun** (Sales · Service · Sparepart AC),
dibangun dengan **[Astro](https://astro.build)**.

Kenapa Astro: cepat (kirim 0 JavaScript secara default → skor SEO/PageSpeed tinggi),
struktur komponen rapi, dan mudah ditambah bagian interaktif ("islands" React/Vue/Svelte)
hanya di tempat yang butuh. Cocok untuk company profile yang ingin tumbuh.

## Prasyarat
- **Node.js 18.14 atau lebih baru** → unduh di https://nodejs.org (pilih versi LTS).

## Menjalankan
```bash
npm install      # sekali saja, pasang dependensi
npm run dev      # mode pengembangan → buka http://localhost:4321
npm run build    # build produksi → hasil ada di folder dist/
npm run preview  # pratinjau hasil build
```

## Struktur
```
apr-website/
├─ public/
│  ├─ assets/         # foto (unit & teknisi) — ganti/tambah di sini
│  └─ favicon.svg
├─ src/
│  ├─ data/site.js    # ★ SEMUA TEKS & KONTAK ada di sini — edit di satu tempat
│  ├─ styles/global.css
│  ├─ layouts/Layout.astro     # kerangka halaman + WhatsApp + lightbox + script
│  ├─ components/     # Header, Hero, Stats, Services, About, Process,
│  │                  # Clients, Gallery, Cta, Footer
│  └─ pages/index.astro        # menyusun semua komponen jadi 1 halaman
└─ package.json
```

## Cara mengubah konten
Buka **`src/data/site.js`** — ubah nama, telepon, alamat, daftar layanan, statistik,
daftar rekanan, dan galeri di sana. Halaman otomatis ikut berubah.
Untuk ganti foto: taruh file di `public/assets/` lalu sesuaikan nama di `site.js`.

## Fitur interaktif yang sudah aktif
- Menu **hamburger** di layar HP
- **Lightbox** galeri (klik foto untuk memperbesar, Esc untuk tutup)
- Tombol **WhatsApp** melayang (ke 0822 3388 9990)
- Header **sticky** dengan bayangan saat di-scroll

## Menambah interaktivitas lebih lanjut (islands)
Untuk fitur dinamis (form kontak, filter galeri, slider testimoni, katalog produk):
```bash
npx astro add react      # atau: vue / svelte / solid
```
Lalu buat komponen, mis. `src/components/ContactForm.jsx`, dan panggil dengan directive:
```astro
<ContactForm client:load />   <!-- client:load = JS aktif di browser -->
```
Hanya komponen ber-`client:*` yang mengirim JS; sisanya tetap statis & cepat.

## Deploy gratis
- **Netlify / Vercel**: hubungkan repo, atau drag-and-drop folder `dist/` (build command `npm run build`, output `dist`).
- **GitHub Pages**: lihat https://docs.astro.build/en/guides/deploy/github/

---
Catatan: versi cepat tanpa build (`index.html` di folder induk) tetap ada untuk pratinjau kilat.
