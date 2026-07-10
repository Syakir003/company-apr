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
  // Lokasi & jangkauan layanan (dipakai untuk SEO / structured data)
  geo: { lat: -7.4739045, lng: 112.4555979 },
  mapsUrl: "https://maps.app.goo.gl/TS2aUt49Pyw1bcJ97",
  areaServed: [
    "Kota Mojokerto",
    "Kabupaten Mojokerto",
    "Sidoarjo",
    "Jombang",
    "Gresik",
    "Lamongan",
    "Surabaya",
  ],
};

export const nav = [
  { label: "Beranda", href: "/#beranda" },
  { label: "Layanan", href: "/#layanan" },
  { label: "Galeri", href: "/galeri" },
  { label: "Brand", href: "/#brand" },
  { label: "Rekanan", href: "/#rekanan" },
  { label: "Tentang", href: "/#tentang" },
  { label: "Kontak", href: "/#kontak" },
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
    slug: "penjualan-ac",
    photo: "/assets/unit5.jpeg",
    title: "Penjualan Unit AC & Sparepart",
    tagline: "Jual AC baru, sparepart orisinal, dan aksesoris pendukung — harga bersaing, garansi resmi.",
    desc: "Penjualan unit AC dan sparepart pendukung untuk rumah tinggal, perkantoran, hingga industri besar.",
    longDesc: "CV Ayub Podo Rukun menyediakan berbagai pilihan unit AC baru dari merek-merek terkemuka seperti Daikin, Panasonic, Sharp, Gree, dan Midea. Kami melayani kebutuhan untuk rumah tinggal, apartemen, perkantoran, ruko, hingga industri besar. Setiap unit AC yang kami jual dilengkapi garansi resmi distributor dan didukung layanan purna jual yang terpercaya.",
    longDesc2: "Selain unit AC, kami juga menyediakan berbagai sparepart dan aksesoris pendukung seperti remote control, pipa tembaga, bracket, kabel listrik, dan refrigeran. Seluruh produk yang kami jual adalah produk orisinal dengan kualitas terjamin. Tim kami siap membantu Anda memilih unit AC yang tepat sesuai kebutuhan dan anggaran.",
    features: [
      "Unit AC baru dari merek resmi (Daikin, Panasonic, Sharp, Gree, Midea, dan lainnya)",
      "Sparepart AC orisinal: remote, PCB, fan motor, kompresor, kapasitor, dan lainnya",
      "Aksesoris pendukung: pipa tembaga, bracket, kabel, refrigeran, dan insulation",
      "Garansi resmi distributor untuk setiap unit AC baru",
      "Konsultasi gratis pemilihan unit AC sesuai kebutuhan dan budget",
      "Layanan antar dan pemasangan oleh teknisi berpengalaman",
      "Harga kompetitif dengan promo berkala",
    ],
    suitableFor: [
      "Rumah tinggal dan apartemen",
      "Kantor dan ruang kerja",
      "Ruko dan pertokoan",
      "Hotel, restoran, dan kafe",
      "Pabrik dan gudang industri",
      "Sekolah, rumah sakit, dan fasilitas umum",
    ],
    faq: [
      { q: "Apakah semua unit AC yang dijual bergaransi resmi?", a: "Ya, setiap unit AC baru yang kami jual dilengkapi garansi resmi dari distributor / brand terkait. Garansi mencakup suku cadang dan jasa servis sesuai ketentuan masing-masing merek." },
      { q: "Apakah saya bisa konsultasi sebelum membeli?", a: "Tentu. Tim kami siap membantu Anda menentukan jenis, kapasitas, dan tipe AC yang paling sesuai dengan kebutuhan ruangan dan anggaran Anda. Konsultasi gratis tanpa biaya." },
      { q: "Apakah tersedia sparepart untuk AC lama?", a: "Kami menyediakan berbagai sparepart untuk berbagai merek dan tipe AC, termasuk AC lama. Silakan hubungi kami dengan informasi merek dan tipe AC Anda untuk ketersediaan sparepart." },
      { q: "Berapa lama waktu pemasangan?", a: "Pemasangan unit AC baru umumnya memakan waktu 2–4 jam tergantung pada kerumitan instalasi. Tim kami akan menjadwalkan pemasangan sesuai kesepakatan." },
    ],
  },
  {
    n: "02",
    slug: "servis-ac",
    photo: "/assets/teknisi5.jpeg",
    title: "Servis & Perbaikan AC",
    tagline: "Teknisi berpengalaman siap menangani segala kerusakan AC — cepat, tepat, bergaransi.",
    desc: "Perbaikan dan servis AC oleh teknisi berpengalaman dengan peralatan kerja lengkap dan penanganan cepat.",
    longDesc: "Kami menangani berbagai jenis kerusakan AC mulai dari masalah ringan seperti AC tidak dingin, bocor, bunyi berisik, hingga kerusakan berat seperti kompresor mati, kebocoran freon, dan kerusakan PCB. Dengan teknisi yang berpengalaman dan bersertifikat, setiap perbaikan dilakukan secara profesional dengan peralatan kerja yang lengkap.",
    longDesc2: "Setiap pekerjaan servis dan perbaikan dilengkapi garansi jasa untuk memberikan ketenangan bagi pelanggan. Kami juga melayani pemasangan AC baru, bongkar pasang, dan relokasi unit AC. Area layanan meliputi Mojokerto, Sidoarjo, Jombang, Gresik, Lamongan, dan Surabaya.",
    features: [
      "AC tidak dingin / kurang dingin — periksa freon, kompresor, dan kebocoran",
      "AC bocor air — pembersihan saluran drainase, perbaikan selang",
      "AC bunyi berisik / kasar — perbaikan fan motor, bearing, dan komponen bergerak",
      "AC mati total / tidak mau hidup — periksa kelistrikan, PCB, kapasitor",
      "AC bau apek / tidak sedap — pembersihan menyeluruh dan anti-bakteri",
      "Bongkar pasang dan relokasi unit AC",
      "Pemasangan AC baru dengan standar kerja profesional",
      "Isi ulang freon R32, R410A, R22, dan refrigeran lainnya",
    ],
    suitableFor: [
      "Rumah tinggal dan apartemen",
      "Kantor dan ruang komersial",
      "Hotel, restoran, dan kafe",
      "Pabrik dan gudang industri",
      "Rumah sakit dan fasilitas kesehatan",
      "Sekolah dan institusi pendidikan",
    ],
    faq: [
      { q: "Apakah ada biaya survei atau diagnosa?", a: "Tidak ada biaya untuk survey dan diagnosa awal. Anda akan mendapatkan informasi lengkap tentang kerusakan dan estimasi biaya perbaikan sebelum pekerjaan dimulai." },
      { q: "Berapa lama waktu perbaikan?", a: "Perbaikan ringan seperti isi freon atau pembersihan drainase selesai dalam 30–60 menit. Perbaikan berat seperti penggantian kompresor memakan waktu 1–3 hari tergantung ketersediaan sparepart." },
      { q: "Apakah ada garansi untuk jasa perbaikan?", a: "Ya, setiap pekerjaan servis dan perbaikan kami dilengkapi garansi jasa. Garansi mencakup hasil perbaikan dan suku cadang yang diganti." },
      { q: "Apakah teknisi bersertifikat?", a: "Teknisi kami bersertifikat dan telah mengikuti pelatihan rutin dari berbagai brand AC. Mereka berpengalaman menangani AC rumah tinggal, komersial, hingga industri." },
    ],
  },
  {
    n: "03",
    slug: "perawatan-ac",
    photo: "/assets/teknisi7.jpeg",
    title: "Perawatan & Maintenance Berkala",
    tagline: "Jadwal perawatan AC rutin untuk menjaga performa, efisiensi, dan memperpanjang umur unit.",
    desc: "Maintenance AC terjadwal termasuk cleaning untuk menjaga unit bekerja optimal dan hemat energi.",
    longDesc: "Perawatan AC secara rutin sangat penting untuk menjaga performa pendinginan tetap optimal, menghemat konsumsi listrik, dan memperpanjang usia pakai unit AC. CV Ayub Podo Rukun menawarkan jadwal perawatan berkala yang fleksibel — bulanan, dua bulanan, atau triwulan — sesuai kebutuhan dan intensitas pemakaian AC Anda.",
    longDesc2: "Layanan maintenance meliputi pembersihan menyeluruh pada indoor unit (evaporator, filter, blower, drain pan) dan outdoor unit (kondensor, fan, sirip). Kami juga melakukan pemeriksaan tekanan freon, kebocoran, kondisi kelistrikan, dan kinerja kompresor secara berkala. Dengan perawatan rutin, AC Anda tetap dingin, hemat listrik, dan bebas dari gangguan.",
    features: [
      "Pembersihan indoor unit: evaporator, filter udara, blower, dan drain pan",
      "Pembersihan outdoor unit: kondensor, fan, dan sirip-sirip heat exchanger",
      "Pengecekan tekanan freon dan pengisian ulang bila diperlukan",
      "Pemeriksaan kebocoran refrigeran pada seluruh sambungan pipa",
      "Pengecekan kelistrikan: kabel, kapasitor, kontaktor, dan PCB",
      "Pembersihan saluran drainase AC agar tidak tersumbat",
      "Pelaporan kondisi AC dan rekomendasi perbaikan jika ada",
      "Diskon sparepart untuk pelanggan maintenance rutin",
    ],
    suitableFor: [
      "Rumah tinggal yang ingin AC awet dan irit listrik",
      "Kantor dan gedung komersial dengan banyak unit AC",
      "Hotel dan restoran yang membutuhkan pendingin optimal",
      "Pabrik dan gudang dengan sistem AC central/split",
      "Rumah sakit dan laboratorium dengan kebutuhan suhu presisi",
      "Manajemen gedung dan properti sewaan",
    ],
    faq: [
      { q: "Seberapa sering AC perlu di-maintenance?", a: "Untuk pemakaian normal 8–10 jam/hari, disarankan maintenance setiap 3 bulan. Untuk pemakaian berat (24 jam, area berdebu), disarankan setiap 1–2 bulan sekali." },
      { q: "Apa perbedaan dengan servis biasa?", a: "Maintenance adalah perawatan rutin terjadwal yang bersifat preventif, mencegah kerusakan sebelum terjadi. Servis biasa dilakukan saat sudah ada kerusakan atau keluhan." },
      { q: "Apakah ada kontrak maintenance untuk perusahaan?", a: "Ya, kami menyediakan paket kontrak maintenance untuk korporasi, gedung perkantoran, hotel, dan industri. Silakan hubungi kami untuk penawaran khusus." },
      { q: "Apakah cleaning AC bisa menghilangkan bau apek?", a: "Ya, pembersihan menyeluruh pada evaporator, drain pan, dan blower akan menghilangkan jamur dan bakteri penyebab bau apek. Kami juga menggunakan pembersih anti-bakteri." },
    ],
  },
  {
    n: "04",
    slug: "sewa-ac",
    photo: "/assets/unit7.jpeg",
    title: "Sewa / Rental AC",
    tagline: "Solusi pendinginan sementara — sewa AC untuk acara, proyek, atau darurat, lengkap dengan instalasi.",
    desc: "Penyewaan unit AC untuk kebutuhan sementara — acara, proyek, hingga industri — lengkap dengan pemasangan dan perawatan selama masa sewa.",
    longDesc: "Butuh AC tambahan untuk acara khusus, meeting, proyek, atau saat AC utama Anda rusak? Layanan rental AC dari CV Ayub Podo Rukun menyediakan unit AC siap pakai dengan pemasangan dan perawatan penuh selama masa sewa. Tersedia berbagai kapasitas unit AC dari split kecil (½–1 PK) hingga unit besar untuk area komersial dan industri.",
    longDesc2: "Setiap unit AC rental dalam kondisi terawat, bersih, dan berfungsi optimal. Tim kami akan melakukan instalasi di lokasi Anda, memastikan unit bekerja dengan baik, dan melakukan perawatan rutin selama masa sewa. Setelah selesai, kami akan membongkar dan mengambil unit tanpa merepotkan Anda.",
    features: [
      "Unit AC bersih dan terawat — siap pakai segera setelah pemasangan",
      "Pemasangan dan instalasi di lokasi oleh teknisi berpengalaman",
      "Perawatan rutin selama masa sewa — Anda tidak perlu repot",
      "Bongkar pasang dan pengambilan unit setelah selesai masa sewa",
      "Fleksibilitas durasi: harian, mingguan, bulanan, tahunan",
      "Berbagai kapasitas: ½ PK, 1 PK, 1½ PK, 2 PK, dan unit besar",
      "Cocok untuk acara, proyek, kondisi darurat, atau kebutuhan tambahan",
    ],
    suitableFor: [
      "Acara spesial: pernikahan, ulang tahun, gathering perusahaan",
      "Proyek konstruksi dan renovasi",
      "Kondisi darurat: AC utama rusak, butuh pendingin cepat",
      "Kebutuhan tambahan saat musim kemarau / cuaca panas",
      "Pameran, exhibition, dan event indoor",
      "Kantor sementara atau proyek lapangan",
    ],
    faq: [
      { q: "Berapa lama minimal sewa AC?", a: "Minimal sewa adalah 1 hari. Kami fleksibel untuk durasi harian, mingguan, bulanan, hingga tahunan dengan harga yang menyesuaikan." },
      { q: "Apakah biaya pengiriman dan pemasangan termasuk?", a: "Ya, biaya pengiriman, pemasangan, dan perawatan selama masa sewa sudah termasuk dalam paket sewa. Anda tinggal gunakan AC saja." },
      { q: "Apakah saya bisa request kapasitas tertentu?", a: "Tentu. Kami menyediakan berbagai kapasitas AC split ½ PK hingga 2 PK untuk rental. Untuk kebutuhan area luas, kami juga menyediakan unit dengan kapasitas lebih besar." },
      { q: "Bagaimana jika AC bermasalah selama sewa?", a: "Tim teknisi kami siap menangani perbaikan selama masa sewa tanpa biaya tambahan. Anda cukup menghubungi kami, dan teknisi akan segera datang." },
    ],
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

// Rekanan industri. `logo` = path logo asli di public/assets/ (nama file apa
// adanya, tidak di-rename). Bila `logo` dikosongkan, sel fallback ke teks nama.
export const clients = [
  {
    name: "PT Daesang Ingredient Indonesia",
    loc: "Gresik",
    logo: "/assets/logo-daesang1-03.png",
  },
  {
    name: "PT Tjiwi Kimia",
    loc: "Sidoarjo",
    logo: "/assets/tjiwi-kimia-logo.png",
  },
  {
    name: "PT Albea",
    loc: "Ngoro Industri Persada",
    logo: "/assets/albea-logo-removebg-preview.png",
  },
  { name: "PT Rucika", loc: "Ngoro", logo: "/assets/rucika-logo.png" },
  { name: "PT Rucika", loc: "Gresik", logo: "/assets/rucika-logo.png" },
  { name: "PT Rolent", loc: "Gresik", logo: "/assets/rolent-logo.png" },
  { name: "PT Hansa Pratama", loc: "Sidoarjo", logo: "/assets/hansa-logo.png" },
  {
    name: "PT Abadi Agrosindo",
    loc: "Sidoarjo",
    logo: "/assets/PT-Abadi-Agrosindo-Persada-logo.webp",
  },
  {
    name: "PT Corin Bata Ringan",
    loc: "Sidoarjo",
    logo: "/assets/corin-logo.webp",
  },
  { name: "PT Corin Maxxi", loc: "Sidoarjo", logo: "/assets/corin-logo.webp" },
  {
    name: "RS Citra Medika",
    loc: "Sidoarjo",
    logo: "/assets/rs-citra-medika-logo.jpg",
  },
  {
    name: "PT Kebun Tebu Mas",
    loc: "Lamongan",
    logo: "/assets/kebun-tebu-mas-logo.jpg",
  },
  {
    name: "PT Pei Hai Internasional",
    loc: "Jombang",
    logo: "/assets/Logo-PT-Pei-Hai-International-Wiratama-Indonesia.webp",
  },
  {
    name: "PT Djabes Tunas Utama",
    loc: "Ngoro",
    logo: "/assets/djabes-tunas-utama-logo.webp",
  },
];

export const gallery = [
  {
    src: "/assets/service1.jpeg",
    alt: "Armada pengiriman unit AC Ayub AC pada malam hari",
  },
  {
    src: "/assets/teknisi6.jpeg",
    alt: "Tim teknisi menguji komponen AC di workshop",
  },
  {
    src: "/assets/unit5.jpeg",
    alt: "Stok unit AC Gree dan material pipa tembaga",
  },
  { src: "/assets/teknisi4.jpeg", alt: "Pekerjaan instalasi AC industri" },
  { src: "/assets/unit3.jpeg", alt: "Armada dan workshop CV Ayub Podo Rukun" },
  { src: "/assets/teknisi5.jpeg", alt: "Teknisi merawat unit kondensor" },
  { src: "/assets/unit4.jpeg", alt: "Gudang penyimpanan unit AC Gree" },
  {
    src: "/assets/teknisi8.jpeg",
    alt: "Tim teknisi menyiapkan peralatan dan refrigeran",
  },
  {
    src: "/assets/teknisi2.jpeg",
    alt: "Teknisi memasang unit AC di gedung bertingkat",
  },
  {
    src: "/assets/unit2.jpeg",
    alt: "Pengiriman unit AC Gree dengan armada Ayub AC",
  },
  {
    src: "/assets/teknisi3.jpeg",
    alt: "Teknisi mengelas pipa tembaga pada kompresor",
  },
  {
    src: "/assets/unit1.jpeg",
    alt: "Armada Ayub AC mengirim unit AC ke lokasi",
  },
  {
    src: "/assets/teknisi7.jpeg",
    alt: "Teknisi mengisi refrigeran dengan manifold gauge",
  },
  {
    src: "/assets/unit6.jpeg",
    alt: "Unit AC Daikin siap dipasang di lokasi proyek",
  },
  {
    src: "/assets/teknisi1.jpeg",
    alt: "Teknisi service AC industri CV Ayub Podo Rukun di Mojokerto",
  },
  {
    src: "/assets/unit7.jpeg",
    alt: "Unit AC split ukuran besar untuk area komersial",
  },
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
