import { JsonLd } from "@/components/json-ld"
import type { Property } from "@/data/property"

interface PropertySchemaProps {
  property: Property
}

export function PropertySchema({ property }: PropertySchemaProps) {
  const baseUrl = "https://jualrumahdramaga.web.id"

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `${baseUrl}/#property`,
        name: property.title,
        description: property.description.slice(0, 200),
        image: property.images.map((img) => `${baseUrl}${img.url}`),
        sku: property.id,
        offers: {
          "@type": "Offer",
          url: baseUrl,
          priceCurrency: property.currency,
          price: property.price,
          priceValidUntil: "2026-12-31",
          availability:
            property.status === "available"
              ? "https://schema.org/InStock"
              : "https://schema.org/SoldOut",
        },
        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "Kamar Tidur",
            value: property.bedrooms,
          },
          {
            "@type": "PropertyValue",
            name: "Kamar Mandi",
            value: property.bathrooms,
          },
          {
            "@type": "PropertyValue",
            name: "Luas Tanah",
            value: `${property.area_m2} m²`,
          },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5",
          reviewCount: "1",
          bestRating: "5",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${baseUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Beranda",
            item: baseUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Properti Dijual",
            item: `${baseUrl}/#properti`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: property.title,
            item: baseUrl,
          },
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": `${baseUrl}/#business`,
        name: "Jual Rumah Dramaga",
        url: baseUrl,
        telephone: `+${property.agent.phone}`,
        email: property.agent.email,
        founder: {
          "@type": "Person",
          name: property.agent.name,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: property.address.street,
          addressLocality: property.address.city,
          addressRegion: property.address.province,
          postalCode: property.address.postcode,
          addressCountry: "ID",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: property.coordinates.lat,
          longitude: property.coordinates.lng,
        },
      },
    ],
  }

  return <JsonLd data={schema} />
}
