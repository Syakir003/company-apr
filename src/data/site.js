// === Pusat data konten — ubah teks/kontak di sini saja ===
export const site = {
  name: "CV Ayub Podo Rukun",
  brand: "AYUB PODO RUKUN",
  tagline: "SALES · SERVICE · SPAREPART · RENTAL",
  established: 2007,
  phone: "(0321) 325831",
  hp: "0822 3388 9990",
  waNumber: "6282233889990",
  suaraKonsumen: "0822 778 855",
  waSuaraKonsumen: "62822778855",
  email: "cvayubpodorukun@gmail.com",
  addressFull:
    "Jl. Gunung Anyar RT.01/06, Gunung Gedangan, Mojokerto, Jawa Timur",
  addressShort: "Jl. Gunung Anyar RT.01/06, Gunung Gedangan, Mojokerto",
  hours: "08.00 WIB – 17.00 WIB",
  hoursNote: "setiap hari (kecuali tanggal merah)",
};

export const nav = [
  { label: "Beranda", href: "#beranda" },
  { label: "Layanan", href: "#layanan" },
  { label: "Brand", href: "#brand" },
  { label: "Rekanan", href: "#rekanan" },
  { label: "Tentang", href: "#tentang" },
  { label: "Kontak", href: "#kontak" },
];

// Brand AC yang ditangani — logo asli (grayscale, berwarna saat hover).
// `file` = path logo di public/assets/brands/. `official` = mitra resmi (badge).
// Bila `file` dikosongkan, sel otomatis fallback ke wordmark teks (`name`).
export const brands = [
  { name: "Daikin", file: "/assets/brands/daikin.png", official: true },
  { name: "Panasonic", file: "/assets/brands/panasonic.svg" },
  { name: "Sharp", file: "/assets/brands/sharp.svg" },
  { name: "Aiwa", file: "/assets/brands/aiwa.svg" },
  { name: "Gree", file: "/assets/brands/gree.svg", official: true },
  { name: "Midea", file: "/assets/brands/midea.svg" },
  { name: "Modena", file: "/assets/brands/modena.png" },
  { name: "Hisense", file: "/assets/brands/hisense.svg" },
  { name: "Changhong", file: "/assets/brands/changhong.svg" },
  { name: "FLIFE", file: "/assets/brands/flife.png" },
];

export const services = [
  {
    n: "01",
    title: "Penjualan Unit AC & Sparepart",
    desc: "Penjualan unit AC dan sparepart pendukung untuk rumah tinggal, perkantoran, hingga industri besar.",
  },
  {
    n: "02",
    title: "Servis & Perbaikan AC",
    desc: "Perbaikan dan servis AC oleh teknisi berpengalaman dengan peralatan kerja lengkap dan penanganan cepat.",
  },
  {
    n: "03",
    title: "Perawatan & Maintenance Berkala",
    desc: "Maintenance AC terjadwal termasuk cleaning untuk menjaga unit bekerja optimal dan hemat energi.",
  },
  {
    n: "04",
    title: "Sewa / Rental AC",
    desc: "Penyewaan unit AC untuk kebutuhan sementara — acara, proyek, hingga industri — lengkap dengan pemasangan dan perawatan selama masa sewa.",
  },
];

export const steps = [
  {
    n: "01",
    title: "Konsultasi & Survei",
    desc: "Analisis kebutuhan, survei lokasi, dan rekomendasi unit yang tepat.",
  },
  {
    n: "02",
    title: "Penawaran & Kesepakatan",
    desc: "Penawaran transparan beserta spesifikasi unit dan estimasi biaya yang jelas.",
  },
  {
    n: "03",
    title: "Pemasangan & Pengujian",
    desc: "Pemasangan rapi, pengujian menyeluruh, dan serah terima unit siap pakai.",
  },
  {
    n: "04",
    title: "Perawatan & Dukungan",
    desc: "Perawatan berkala terjadwal dan dukungan teknis berkelanjutan.",
  },
];

export const visi =
  "Menjadi penyedia jasa perawatan dan perbaikan AC terpercaya yang mengutamakan kualitas, kecepatan, dan kepuasan pelanggan.";

export const misi = [
  "Layanan perawatan dan perbaikan AC secara profesional dan tepat waktu.",
  "Teknisi berpengalaman dengan pelatihan rutin dan alat kerja lengkap.",
  "Solusi hemat biaya tanpa mengurangi kualitas layanan.",
  "Hubungan jangka panjang melalui pelayanan yang jujur dan transparan.",
  "Berkontribusi pada efisiensi energi dengan memastikan AC bekerja optimal.",
];

export const clients = [
  { name: "PT Daesang Ingredient Indonesia", loc: "Gresik" },
  { name: "PT Tjiwi Kimia", loc: "Sidoarjo" },
  { name: "PT Albea", loc: "Ngoro Industri Persada" },
  { name: "PT Rucika", loc: "Ngoro" },
  { name: "PT Rucika", loc: "Gresik" },
  { name: "PT Rolent", loc: "Gresik" },
  { name: "PT Hansa Pratama", loc: "Sidoarjo" },
  { name: "PT Abadi Agrosindo", loc: "Sidoarjo" },
  { name: "PT Corin Bata Ringan", loc: "Sidoarjo" },
  { name: "PT Corin Maxxi", loc: "Sidoarjo" },
  { name: "RS Citra Medika", loc: "Sidoarjo" },
  { name: "PT Kebun Tebu Mas", loc: "Lamongan" },
  { name: "PT Pei Hai Internasional", loc: "Jombang" },
  { name: "PT Djabes Tunas Utama", loc: "Ngoro" },
];

export const gallery = [
  { src: "/assets/service1.jpeg", alt: "Armada pengiriman unit AC Ayub AC pada malam hari" },
  { src: "/assets/teknisi6.jpeg", alt: "Tim teknisi menguji komponen AC di workshop" },
  { src: "/assets/unit5.jpeg", alt: "Stok unit AC Gree dan material pipa tembaga" },
  { src: "/assets/teknisi4.jpeg", alt: "Pekerjaan instalasi AC industri" },
  { src: "/assets/unit3.jpeg", alt: "Armada dan workshop CV Ayub Podo Rukun" },
  { src: "/assets/teknisi5.jpeg", alt: "Teknisi merawat unit kondensor" },
  { src: "/assets/unit4.jpeg", alt: "Gudang penyimpanan unit AC Gree" },
  { src: "/assets/teknisi8.jpeg", alt: "Tim teknisi menyiapkan peralatan dan refrigeran" },
];

// Sertifikat & legalitas. `img` = thumbnail (render halaman-1 PDF), `file` = PDF asli.
// Keduanya di public/assets/certificates/. Judul/penerbit sesuaikan bila perlu.
export const certificates = [
  {
    img: "/assets/certificates/daikin-2026.png",
    file: "sertifikat Daikin - Ayub - 2026.pdf",
    title: "Mitra Resmi Daikin",
    issuer: "Authorized Service Dealer · 2026",
    cat: "Kemitraan",
  },
  {
    img: "/assets/certificates/gree-2023.png",
    file: "Sertifikat Gree 2023.pdf",
    title: "Mitra Resmi Gree",
    issuer: "Authorized Service Center · 2023",
    cat: "Kemitraan",
  },
  {
    img: "/assets/certificates/k3.png",
    file: "Sertifikat K3 Ayub.pdf",
    title: "Sertifikat K3",
    issuer: "Kemnaker RI · 2023",
    cat: "Kompetensi",
  },
  {
    img: "/assets/certificates/rucika.png",
    file: "Sertifikat Penghargaan Rucika.pdf",
    title: "Penghargaan Keselamatan Kerja",
    issuer: "PT Wahana Duta Jaya Rucika",
    cat: "Penghargaan",
  },
  {
    img: "/assets/certificates/bpjs.png",
    file: "Sertifikat BPJS Kesehatan.pdf",
    title: "Kepesertaan BPJS Kesehatan 100%",
    issuer: "BPJS Kesehatan · 2025–2026",
    cat: "Kepatuhan",
  },
];
