import { CheckIcon } from "@/components/icons"

interface PropertyFeaturesProps {
  features: string[]
}

export function PropertyFeatures({ features }: PropertyFeaturesProps) {
  return (
    <section className="space-y-3">
      <h2 className="text-[21px] font-[700] leading-[1.43] text-ink">
        Fasilitas & Fitur
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2.5">
            <CheckIcon className="size-[18px] shrink-0 text-primary" />
            <span className="text-body text-base">{feature}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
