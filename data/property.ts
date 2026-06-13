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
  description: `Sedang mencari rumah dijual di Dramaga Bogor dengan lokasi strategis, luas, dan dekat berbagai fasilitas penting? Inilah kesempatan terbaik untuk memiliki rumah nyaman di Kampung Manggis, Dramaga, Bogor dengan status Sertifikat Hak Milik (SHM) dan akses yang sangat mudah ke pusat aktivitas masyarakat.

Rumah ini sangat cocok untuk hunian keluarga, tempat tinggal dosen atau karyawan, maupun investasi properti karena berada di kawasan yang berkembang pesat dan dekat dengan berbagai fasilitas pendidikan, pemerintahan, serta pusat perbelanjaan.

Spesifikasi Rumah
Luas Tanah: 283 m²
Luas Bangunan: 200 m²
Kamar Tidur: 3
Kamar Mandi: 2
Sertifikat: SHM (Sertifikat Hak Milik)
Lokasi: Kampung Manggis, Dramaga, Bogor
Keunggulan Lokasi Strategis

Salah satu nilai tambah utama rumah ini adalah lokasinya yang berada di kawasan strategis Dramaga, sehingga memudahkan aktivitas sehari-hari seluruh anggota keluarga.

Dekat Kampus IPB Dramaga

Rumah ini berlokasi tidak jauh dari IPB University, salah satu perguruan tinggi terbaik di Indonesia. Lokasi ini sangat ideal bagi dosen, tenaga kependidikan, mahasiswa pascasarjana, maupun investor yang mencari properti di sekitar kawasan pendidikan.

Dekat Pusat Perbelanjaan dan Kebutuhan Harian

Akses menuju berbagai fasilitas umum sangat mudah, di antaranya:

Pusat perbelanjaan dan minimarket
Pasar tradisional Dramaga
Toko kebutuhan sehari-hari
Area kuliner dan pusat usaha masyarakat
Dekat Terminal dan Akses Transportasi

Rumah memiliki akses yang baik menuju terminal dan jalur transportasi umum sehingga memudahkan mobilitas menuju Kota Bogor maupun wilayah sekitarnya.

Dekat Pusat Pemerintahan Dramaga

Lokasi rumah juga berada dekat dengan berbagai instansi pemerintahan, seperti:

Kantor Kecamatan Dramaga
Kantor KUA Dramaga
Kantor Desa
Berbagai layanan administrasi masyarakat

Keunggulan ini memberikan kemudahan bagi pemilik rumah dalam mengurus berbagai kebutuhan administratif tanpa harus menempuh perjalanan jauh.

Rumah Luas dan Nyaman untuk Keluarga

Dengan luas tanah 283 m² dan luas bangunan 200 m², rumah ini menawarkan ruang yang lega untuk aktivitas keluarga. Tersedia 3 kamar tidur dan 2 kamar mandi yang dapat menunjang kenyamanan seluruh penghuni.

Lahan yang luas juga memberikan peluang untuk pengembangan bangunan, pembuatan taman, area bermain anak, maupun kebutuhan lainnya sesuai keinginan pemilik.

Investasi Properti Menjanjikan di Dramaga Bogor

Kawasan Dramaga terus berkembang seiring pertumbuhan kawasan pendidikan, perdagangan, dan pemerintahan. Permintaan hunian di sekitar Dramaga juga terus meningkat karena lokasinya yang strategis dan dekat dengan berbagai fasilitas penting.

Rumah ini menjadi pilihan tepat bagi Anda yang mencari:

Rumah dijual di Dramaga Bogor
Rumah dekat IPB Dramaga
Rumah SHM di Bogor
Rumah luas di Dramaga
Rumah strategis dekat pusat pemerintahan
Investasi properti Bogor
Rumah keluarga di Dramaga
Hubungi Sekarang

Jangan lewatkan kesempatan memiliki rumah strategis di Kampung Manggis Dramaga Bogor dengan luas tanah 283 m², luas bangunan 200 m², dan status SHM. Lokasi yang dekat dengan kampus IPB, pusat perbelanjaan, pasar, terminal, serta pusat pemerintahan menjadikan rumah ini pilihan ideal untuk hunian maupun investasi jangka panjang`,
  features: [
    "Taman minimalis",
    "Carport untuk 1 mobil",
    "Dapur",
    "Listrik 5500 Watt",
    "Sumur bor + Air Gunungh",
    "Sertifikat SHM",
  ],
  agent: {
    name: "Bima Natawijaya",
    phone: numberWhatsapp,
    email: "",
    photoUrl: "/images/etalase_udara.jpg",
  },
  created_at: "2026-06-15T08:00:00Z",
  updated_at: "2026-06-15T10:30:00Z",
}
