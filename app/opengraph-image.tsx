import { ImageResponse } from "next/og"

export const alt = "Villa Modern Minimalis di Dramaga Malang"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          fontFamily: "Inter, sans-serif",
          padding: 48,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 80,
            height: 80,
            borderRadius: 40,
            background: "#ff385c",
            marginBottom: 24,
            fontSize: 36,
            color: "white",
            fontWeight: 700,
          }}
        >
          JD
        </div>
        <h1
          style={{
            fontSize: 48,
            fontWeight: 700,
            color: "#222222",
            textAlign: "center",
            lineHeight: 1.2,
            margin: 0,
            marginBottom: 12,
          }}
        >
          Villa Modern Minimalis
        </h1>
        <p
          style={{
            fontSize: 24,
            color: "#3f3f3f",
            textAlign: "center",
            margin: 0,
            marginBottom: 32,
          }}
        >
          Dramaga, Malang · 4 KT · 3 KM · 350 m²
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#ff385c",
            color: "white",
            padding: "16px 48px",
            borderRadius: 8,
            fontSize: 32,
            fontWeight: 600,
          }}
        >
          Rp 2,85 Miliar
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}
