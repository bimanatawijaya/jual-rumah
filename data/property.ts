export interface PropertyImage {
  url: string
  caption: string
}

export interface PropertyAddress {
  street: string
  city: string
  province: string
  postcode: string
}

export interface PropertyAgent {
  name: string
  phone: string
  email: string
  photoUrl: string
}

export interface Faq {
  question : string
  answer : string
}

export interface Property {
  id: string
  title: string
  address: PropertyAddress
  coordinates: { lat: number; lng: number }
  price: number
  currency: string
  status: "available" | "sold"
  bedrooms: number
  bathrooms: number
  area_m2: number
  images: PropertyImage[]
  description: string
  features: string[]
  agent: PropertyAgent
  faq : Faq[]
  created_at: string
  updated_at: string
}

const numberWhatsapp = process.env.NUMBER_WHATSAPP || ""

export const property: Property = {
  id: "RUM-001",
  title: "Jual Rumah SHM Dramaga Bogor",
  address: {
    street: "Kampung Manggis, Dramaga",
    city: "Bogor",
    province: "Jawa Barat",
    postcode: "16680",
  },

  
  coordinates: { lat: -6.578544737227928, lng: 106.73780856633095 },
  price: 850_000_000,
  currency: "IDR",
  status: "available",
  bedrooms: 3,
  bathrooms: 2,
  area_m2: 283,
  images: [
    {
      url: "/images/etalase_udara.jpg",
      caption: "Tampak depan rumah dengan taman hijau",
    },
    {
      url: "/images/ruang_keluarga.jpg",
      caption: "Ruang tamu luas dengan pencahayaan alami",
    },
    {
      url: "/images/dapur.jpg",
      caption: "Dapur modern dengan island",
    },
    {
      url: "/images/kamar_tidur_1.jpg",
      caption: "Kamar tidur utama dengan ensuite",
    },
    {
      url: "/images/halaman_belakang.jpg",
      caption: "Halaman belakang",
    },
    {
      url: "/images/taman_belakang.jpg",
      caption: "Taman minimalis di area belakang",
    },
    {
      url: "/images/ruang_makan.jpg",
      caption: "Ruang makan yang nyaman",
    },
    {
      url: "/images/ruang_keluarga_2.jpg",
      caption: "Ruang keluarga tambahan",
    },
    {
      url: "/images/kamar_tidur_2.jpg",
      caption: "Kamar tidur anak",
    },
    {
      url: "/images/kamar_mandir_1.jpg",
      caption: "Kamar mandi utama",
    },
    {
      url: "/images/kamar_mandir_2.jpg",
      caption: "Kamar mandi kedua",
    },
    {
      url: "/images/ruang_sholat.jpg",
      caption: "Ruang sholat",
    },
    {
      url: "/images/tempat_wudhu.jpg",
      caption: "Tempat wudhu",
    },
    {
      url: "/images/teras_belakang.jpg",
      caption: "Teras belakang",
    },
    {
      url: "/images/halaman_samping.jpg",
      caption: "Halaman samping rumah",
    },
  ],
  description: `Kesempatan memiliki rumah luas di kawasan Dramaga Bogor dengan lokasi strategis dekat Kampus IPB University. Properti ini sangat cocok sebagai hunian keluarga maupun investasi jangka panjang karena berada di lingkungan yang berkembang pesat dan memiliki akses mudah ke berbagai fasilitas umum.

Rumah berdiri di atas lahan seluas 283 m² dengan luas bangunan 200 m², terdiri dari 3 kamar tidur dan 2 kamar mandi. Status kepemilikan sudah Sertifikat Hak Milik (SHM) sehingga memberikan keamanan dan kenyamanan dalam bertransaksi.

<h2>Spesifikasi Rumah</h2>
Luas Tanah: 283 m²
Luas Bangunan: 200 m²
Kamar Tidur: 3
Kamar Mandi: 2
Sertifikat: SHM
Kondisi Bangunan: Siap Huni
Akses Jalan: Mudah Dilalui Mobil

<h2>Keunggulan Lokasi</h2>
Lokasi rumah berada di Kampung Manggis, Dramaga, Kabupaten Bogor yang dikenal sebagai salah satu kawasan berkembang dengan permintaan properti yang terus meningkat.

Beberapa fasilitas penting yang berada di sekitar lokasi antara lain:

Dekat Kampus IPB University Dramaga
Dekat Terminal Dramaga
Dekat Pasar Dramaga
Dekat pusat perbelanjaan dan minimarket
Dekat sekolah dan fasilitas pendidikan
Dekat fasilitas kesehatan dan klinik
Akses mudah menuju Kota Bogor
Lingkungan nyaman dan cocok untuk keluarga

<h2>Cocok untuk Hunian maupun Investasi</h2>
Lokasi yang berada dekat kawasan pendidikan dan pusat aktivitas masyarakat menjadikan rumah ini memiliki nilai investasi yang menarik. Permintaan hunian di sekitar IPB Dramaga terus meningkat setiap tahunnya, baik untuk tempat tinggal maupun kebutuhan sewa.

Dengan lahan yang luas dan posisi yang strategis, rumah ini dapat dimanfaatkan sebagai:

Hunian keluarga
Rumah pensiun yang nyaman
Investasi properti jangka panjang
Potensi rumah kos atau kontrakan
Aset properti dengan nilai yang terus berkembang

<h2>Mengapa Memilih Rumah Ini?</h2>
✔ Sertifikat Hak Milik (SHM)
✔ Lokasi strategis dekat IPB Dramaga
✔ Luas tanah dan bangunan yang lega
✔ Dekat fasilitas umum lengkap
✔ Lingkungan nyaman dan aman
✔ Potensi investasi properti yang menjanjikan`,
  features: [
    "Taman minimalis",
    "Carport untuk 1 mobil",
    "Dapur",
    "Listrik 5500 Watt",
    "Sumur bor + Air Gunung",
    "Sertifikat SHM",
  ],
  agent: {
    name: "Bima Natawijaya",
    phone: numberWhatsapp,
    email: "",
    photoUrl: "/agent/penjual.jpg",
  },
  faq:[
    {
      question: "Apakah rumah ini dekat dengan IPB Dramaga?",
      answer : "Ya, lokasi rumah berada tidak jauh dari Kampus IPB University Dramaga sehingga sangat cocok bagi keluarga, dosen, maupun investor properti."
    },
    {
      question: "Apakah status kepemilikan rumah sudah SHM?",
      answer : "Ya, rumah ini memiliki Sertifikat Hak Milik (SHM) sehingga aman untuk proses jual beli."
    },
    {
      question: "Apakah rumah cocok untuk investasi?",
      answer : "Sangat cocok. Kawasan Dramaga merupakan salah satu area dengan pertumbuhan properti yang cukup baik karena didukung oleh keberadaan IPB University dan berbagai fasilitas umum."
    },
    {
      question: "Apakah akses menuju rumah mudah?",
      answer : "Ya, rumah memiliki akses yang mudah dijangkau kendaraan dan dekat dengan jalan utama kawasan Dramaga."
    },
     {
      question: "Bagaimana cara survei lokasi?",
      answer : "Silakan hubungi kontak yang tersedia untuk menjadwalkan survei lokasi dan melihat kondisi rumah secara langsung."
    },
  ],
  created_at: "2026-06-15T08:00:00Z",
  updated_at: "2026-06-15T10:30:00Z",
}
