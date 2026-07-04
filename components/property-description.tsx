interface PropertyDescriptionProps {
  description: string
}

export function PropertyDescription({ description }: PropertyDescriptionProps) {
  return (
    <section className="space-y-3">
      <h2 className="text-[21px] font-[700] leading-[1.43] text-ink">
        Deskripsi
      </h2>
      <div
        className="[&_h2]:text-[18px] [&_h2]:font-[500] [&_h2]:leading-[1.43] [&_h2]:text-ink [&_h2]:mt-4 [&_h2]:mb-2 text-body text-base leading-relaxed whitespace-pre-line "
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </section>
  )
}
