import { Suspense } from "react"
import { property } from "@/data/property"
import { PropertyGallery } from "@/components/property-gallery"
import { PropertyInfo } from "@/components/property-info"
import { PropertyDescription } from "@/components/property-description"
import { PropertyFeatures } from "@/components/property-features"
import { PropertyMap } from "@/components/property-map"
import { PropertyFaq } from "@/components/property-faq"
import { AgentCard } from "@/components/agent-card"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { PropertySchema } from "@/components/property-schema"
import { PageContent } from "@/components/page-content"
import { formatDate } from "@/lib/utils"

export default function Home() {
  return (
    <>
      <PropertySchema property={property} />
      <PageContent>
        <main className="flex-1">
          <article className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
            <PropertyGallery images={property.images} />

            <div className="mt-6 lg:mt-8 flex flex-col lg:flex-row gap-8 lg:gap-12">
              <div className="flex-1 min-w-0 space-y-8 lg:space-y-10">
                <PropertyInfo property={property} />

                <PropertyDescription description={property.description} />

                <PropertyFeatures features={property.features} />

                <div className="block lg:hidden">
                  <AgentCard agent={property.agent} />
                </div>

                <PropertyMap
                  lat={property.coordinates.lat}
                  lng={property.coordinates.lng}
                  title={property.title}
                />

                <PropertyFaq faq={property.faq} />

                <div className="text-xs text-muted space-y-1 pt-1">
                  <p>Dipublikasikan: {formatDate(property.created_at)}</p>
                  <p>Diperbarui: {formatDate(property.updated_at)}</p>
                </div>
              </div>

              <aside className="hidden lg:block lg:w-[380px] xl:w-[400px] shrink-0">
                <div className="sticky top-8">
                  <AgentCard agent={property.agent} />
                </div>
              </aside>
            </div>
          </article>
        </main>

        <footer className="border-t border-hairline bg-canvas">
          <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-ink text-base">Jual Rumah Dramaga</p>
                <p className="text-sm text-muted">
                  Website dibuat oleh pemilik rumah untuk memudahkan penjualan. Tidak ada pihak ketiga yang terlibat.
                </p>
              </div>
              <p className="text-xs text-muted">
                &copy; {new Date().getFullYear()} pusingoding. Hak cipta
                dilindungi.
              </p>
            </div>
          </div>
        </footer>

        <FloatingWhatsApp agent={property.agent} propertyTitle={property.title} />
      </PageContent>
    </>
  )
}
