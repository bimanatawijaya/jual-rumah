import { MapPinIcon } from "@/components/icons"

interface PropertyMapProps {
  lat: number
  lng: number
  title: string
}

export function PropertyMap({ lat, lng, title }: PropertyMapProps) {
  const googleMapsLink = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`
  const embedSrc = `https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`

  return (
    <section className="space-y-3">
      <div className="flex items-center gap-2">
        <MapPinIcon className="size-5 text-primary" />
        <h2 className="text-[21px] font-[700] leading-[1.43] text-ink">
          Lokasi
        </h2>
      </div>
      <a
        href={googleMapsLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-[300px] rounded-md overflow-hidden border-0 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-label={`Buka lokasi ${title} di Google Maps`}
      >
        <iframe
          src={embedSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Peta lokasi ${title}`}
        />
      </a>
      <p className="text-xs text-muted">
        Klik peta untuk membuka Google Maps dan dapatkan petunjuk arah.
      </p>
    </section>
  )
}
