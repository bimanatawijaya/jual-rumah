import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jual Rumah Dramaga - Villa Modern Minimalis",
    short_name: "JualRumah",
    description:
      "Website penjualan villa modern minimalis di Dramaga Malang. Hubungi langsung pemilik.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ff385c",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
  }
}
