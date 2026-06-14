import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import { JsonLd } from "@/components/json-ld"
import "./globals.css"

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

const baseUrl = "https://jualrumahdramaga.web.id"
const googleSearchVerification = process.env.GOOGLE_SEARCH_CONSOLE_VERIFICATION || ""


export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ff385c",
}

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Jual Rumah di Dramaga Bogor dengan universitas IPB | Jual rumah dengan SHM Murah",
    template: "%s | Jual Rumah Dramaga Bogor dengan SHM",
  },
  description:
    "Dijual Rumah 3 KT, 2 KM, luas 283 m² di kawasan Dramaga dekat IPB. taman, SHM. Lokasi strategis dekat IPB. Hubungi langsung pemilik.",
  keywords: [
    "jual rumah dramaga",
    "rumah dijual dramaga Bog",
    "rumah kawasan dramaga",
    "jual properti dramaga",
    "rumah dekat IPB",
    "rumah Strategis"
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Jual Rumah Dramaga",
    title: "Jual Rumah di Dramaga Bogor | Jual rumah dengan sertifikat hak milik",
    description:
      ".",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rumah dramaga dengan SHM",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jual Rumah di Dramaga Bogor, IPB | Rumah dengan Sertifikat Hak Milik",
    description:
      "Dijual Rumah 3 KT, 2 KM, luas 283 m² di Dramaga Bogor. Murah, nyaman dan strategis. Hubungi langsung pemilik.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: googleSearchVerification,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`${inter.className} antialiased`}>
      <body className="min-h-dvh flex flex-col bg-canvas text-ink">
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://jualrumahdramaga.web.id/#website",
            url: "https://jualrumahdramaga.web.id",
            name: "Jual Rumah Dramaga",
            description:
              "Website jual rumah dramaga dengan Sertifkat Hak Milik (SHM). Hubungi langsung pemilik.",
            inLanguage: "id",
          }}
        />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://jualrumahdramaga.web.id/#organization",
            name: "Jual Rumah Dramaga",
            url: "https://jualrumahdramaga.web.id",
          }}
        />
        {children}
        {GTM_ID && (
          <Script
            id="gtm"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`,
            }}
          />
        )}
      </body>
    </html>
  )
}
