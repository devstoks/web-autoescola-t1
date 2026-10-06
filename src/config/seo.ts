import { businessConfig } from "./business";
import { contactConfig } from "./contact";

const place = contactConfig.city ? ` ${contactConfig.city}` : "";

export const seoConfig = {
  title: `${businessConfig.name}${place} | Aprenda a Dirigir com Confiança`,
  description: `${businessConfig.name}${place ? ` em${place}` : ""} — cursos para habilitação categoria A, B e AB, aulas de direção e preparação para sua primeira CNH. Entre em contato.`,
};

// JSON-LD só é gerado quando há dados reais de endereço.
export function buildJsonLd() {
  if (!contactConfig.address || !contactConfig.city) return null;
  return {
    "@context": "https://schema.org",
    "@type": "DrivingSchool",
    name: businessConfig.name,
    url: businessConfig.siteUrl || undefined,
    telephone: contactConfig.phone || contactConfig.whatsappDisplay,
    openingHours: contactConfig.openingHours || undefined,
    address: {
      "@type": "PostalAddress",
      streetAddress: contactConfig.address,
      addressLocality: contactConfig.city,
      addressRegion: contactConfig.state || undefined,
      addressCountry: "BR",
    },
    sameAs: [contactConfig.instagram].filter(Boolean),
  };
}
