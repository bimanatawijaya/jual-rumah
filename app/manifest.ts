import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jual Rumah Dramaga - Rumah Dijual di Dramaga Bogor dengan SHM",
    short_name: "JualRumah",
    description:
      "Website jual rumah dramaga dengan Sertifkat Hak Milik (SHM). Hubungi langsung pemilik.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ff385c",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
  }
}
