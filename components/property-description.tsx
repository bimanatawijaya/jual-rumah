interface PropertyDescriptionProps {
  description: string
}

export function PropertyDescription({ description }: PropertyDescriptionProps) {
  return (
    <section className="space-y-3">
      <h2 className="text-[21px] font-[700] leading-[1.43] text-ink">
        Deskripsi
      </h2>
      <div className="text-body text-base leading-relaxed whitespace-pre-line text-pretty">
        {description}
      </div>
    </section>
  )
}
