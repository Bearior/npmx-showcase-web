import { translations } from "@/lib/i18n";

/**
 * Organization structured data (JSON-LD)
 */
export function OrganizationJsonLd() {
  const t = translations.th;

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "NPMx Clinic",
    alternateName: "คลินิก NPMx กายภาพบำบัด",
    url: "https://www.npmx.co.th",
    logo: "https://www.npmx.co.th/logo.png",
    image: "https://www.npmx.co.th/og-image.jpg",
    description: t.metadata.description,
    telephone: "+6602XXXXXXX",
    email: "info@npmx.co.th",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Sukhumvit Road",
      addressLocality: "Watthana",
      addressRegion: "Bangkok",
      postalCode: "10110",
      addressCountry: "TH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "13.7563",
      longitude: "100.5018",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/npmxclinic",
      "https://www.instagram.com/npmxclinic",
      "https://line.me/ti/p/@npmx",
    ],
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "200",
      bestRating: "5",
    },
    medicalSpecialty: ["PhysicalTherapy"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Service structured data (JSON-LD)
 */
export function ServiceJsonLd() {
  const t = translations.th;

  const services = t.services.items.map((service) => ({
    "@type": "MedicalProcedure",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "MedicalClinic",
      name: "NPMx Clinic",
    },
  }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: service,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * FAQ structured data (JSON-LD)
 */
export function FAQJsonLd() {
  const t = translations.th;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
