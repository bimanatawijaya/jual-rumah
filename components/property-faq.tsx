import type { Faq } from "@/data/property"

interface PropertyFaqProps {
  faq: Faq[]
}

export function PropertyFaq({ faq }: PropertyFaqProps) {
  return (
    <section className="space-y-3">
      <h2 className="text-[21px] font-[700] leading-[1.43] text-ink">
        FAQ
      </h2>
      <div className="divide-y divide-hairline border-y border-hairline">
        {faq.map((item, index) => (
          <details key={index} className="group">
            <summary className="flex items-center justify-between gap-4 py-4 text-body text-base cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              <span>{item.question}</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4 shrink-0 text-muted transition-transform duration-200 group-open:rotate-180"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </summary>
            <div className="pb-4 text-muted text-base leading-relaxed">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}
