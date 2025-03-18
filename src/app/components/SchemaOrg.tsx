'use client';

import Script from 'next/script';

export default function SchemaOrg() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://tolarys-toulouse.fr/#website",
        "url": "https://tolarys-toulouse.fr/",
        "name": "Tolarys Toulouse",
        "description": "Agence de création de sites web et applications mobiles à Toulouse",
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": "https://tolarys-toulouse.fr/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        ],
        "inLanguage": "fr-FR"
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://tolarys-toulouse.fr/#organization",
        "name": "Tolarys Toulouse",
        "url": "https://tolarys-toulouse.fr/",
        "email": "tolarystoulouse@gmail.com",
        "telephone": "+33679336812",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Toulouse",
          "addressRegion": "Occitanie",
          "postalCode": "31000",
          "addressCountry": "FR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "43.604652",
          "longitude": "1.444209"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "09:00",
            "closes": "18:00"
          }
        ],
        "sameAs": [
          "https://www.facebook.com/tolarystoulouse",
          "https://www.instagram.com/tolarystoulouse",
          "https://www.linkedin.com/company/tolarys-toulouse"
        ],
        "priceRange": "€€",
        "image": "https://tolarys-toulouse.fr/logo.png",
        "description": "Agence de création de sites web et applications mobiles à Toulouse. Développement sur-mesure, responsive et optimisé pour votre entreprise locale."
      },
      {
        "@type": "Service",
        "@id": "https://tolarys-toulouse.fr/creation-site-web-toulouse/#service",
        "name": "Création de Site Web à Toulouse",
        "url": "https://tolarys-toulouse.fr/creation-site-web-toulouse/",
        "provider": {
          "@id": "https://tolarys-toulouse.fr/#organization"
        },
        "description": "Création de sites web sur-mesure, responsive et optimisés pour le référencement à Toulouse",
        "areaServed": {
          "@type": "City",
          "name": "Toulouse"
        },
        "serviceType": "Création de site web",
        "offers": {
          "@type": "Offer",
          "price": "1500",
          "priceCurrency": "EUR",
          "priceValidUntil": "2025-12-31",
          "availability": "https://schema.org/InStock"
        }
      }
    ]
  };

  return (
    <Script
      id="schema-org"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
