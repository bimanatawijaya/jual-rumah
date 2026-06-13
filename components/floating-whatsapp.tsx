import type { PropertyAgent } from "@/data/property"
import { WhatsAppIcon } from "@/components/icons"

interface FloatingWhatsAppProps {
  agent: PropertyAgent
  propertyTitle: string
}

export function FloatingWhatsApp({ agent, propertyTitle }: FloatingWhatsAppProps) {
  const message = `Halo ${agent.name}, saya tertarik dengan properti: ${propertyTitle}`
  const waUrl = `https://wa.me/${agent.phone}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 size-14 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-lg hover:bg-primary-active transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      aria-label={`Hubungi ${agent.name} melalui WhatsApp`}
    >
      <WhatsAppIcon className="size-7" />
    </a>
  )
}
