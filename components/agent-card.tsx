import Image from "next/image"
import type { PropertyAgent } from "@/data/property"

interface AgentCardProps {
  agent: PropertyAgent
}

export function AgentCard({ agent }: AgentCardProps) {
  return (
    <section className="bg-surface-card rounded-md border border-hairline p-6 space-y-4">
      <h2 className="text-[21px] font-[700] leading-[1.43] text-ink">
        Penjual
      </h2>
      <div className="flex items-center gap-4">
        <div className="size-14 rounded-full bg-surface-strong overflow-hidden shrink-0">
          <Image
            src={agent.photoUrl}
            alt={agent.name}
            width={56}
            height={56}
            className="object-cover size-full"
          />
        </div>
        <div>
          <p className="font-semibold text-ink text-base">{agent.name}</p>
          <p className="text-sm text-muted">{agent.email}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <a
          href={`tel:+${agent.phone}`}
          className="flex items-center justify-center h-12 border border-hairline rounded-sm text-ink text-base font-medium hover:bg-surface-soft transition-colors"
        >
          Telepon
        </a>
        <a
          href={`https://wa.me/${agent.phone}?text=Halo%20${encodeURIComponent(agent.name)}%2C%20saya%20tertarik%20dengan%20properti%20yang%20Anda%20tawarkan.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center h-12 bg-primary text-on-primary text-base font-medium rounded-sm hover:bg-primary-active transition-colors"
        >
          WhatsApp
        </a>
      </div>
    </section>
  )
}
