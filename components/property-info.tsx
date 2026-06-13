import type { Property } from "@/data/property"
import { BedIcon, BathIcon, AreaIcon, MapPinIcon } from "@/components/icons"
import { formatPrice } from "@/lib/utils"

interface PropertyInfoProps {
  property: Property
}

export function PropertyInfo({ property }: PropertyInfoProps) {
  const statusLabel = property.status === "available" ? "Tersedia" : "Terjual"
  const statusColor =
    property.status === "available"
      ? "bg-green-100 text-green-800"
      : "bg-red-100 text-red-800"

  return (
    <section className="space-y-4">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-[22px] font-[500] leading-[1.18] tracking-[-0.44px] text-ink">
            {property.title}
          </h1>
          <div className="flex items-center gap-1.5 text-muted text-sm">
            <MapPinIcon className="size-4 shrink-0" />
            <span>
              {property.address.street}, {property.address.city},{" "}
              {property.address.province}
            </span>
          </div>
        </div>
        <span
          className={`shrink-0 text-xs font-semibold px-3 py-1 rounded-full ${statusColor}`}
        >
          {statusLabel}
        </span>
      </div>

      {/* <div className="flex items-baseline gap-1">
        <span className="text-[28px] font-[700] leading-[1.43] text-ink">
          {formatPrice(property.price, property.currency)}
        </span>
      </div> */}

      <div className="flex flex-wrap gap-4 py-3 border-y border-hairline">
        <div className="flex items-center gap-2 text-body text-sm">
          <BedIcon className="size-5" />
          <span>{property.bedrooms} Kamar Tidur</span>
        </div>
        <div className="flex items-center gap-2 text-body text-sm">
          <BathIcon className="size-5" />
          <span>{property.bathrooms} Kamar Mandi</span>
        </div>
        <div className="flex items-center gap-2 text-body text-sm">
          <AreaIcon className="size-5" />
          <span>{property.area_m2} m²</span>
        </div>
      </div>
    </section>
  )
}
