import { Helmet } from "react-helmet";

const Schema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "UrbanTrip Cabs",
    "image": "https://urbantripcabs.com/logo.png",
    "@id": "https://urbantripcabs.com",
    "url": "https://urbantripcabs.com",
    "telephone": "+917385432115",
    "email": "urbantrip.cab@gmail.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Silicon city",
      "addressLocality": "Indore",
      "postalCode": "452012",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.0760,
      "longitude": 72.8777
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.facebook.com/urbantripcabs",
      "https://www.instagram.com/urbantripcabs",
      "https://www.youtube.com/urbantripcabs",
      "https://twitter.com/urbantripcabs"
    ],
    "description": "Professional 24/7 cab booking service with verified drivers. Airport transfers, outstation rides, local rentals available. Book your cab easily with UrbanTrip Cabs.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "5000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Cab Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Local Cab Rentals"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Airport Pickup and Drop"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Outstation Rides"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Corporate Travel"
          }
        }
      ]
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default Schema;
