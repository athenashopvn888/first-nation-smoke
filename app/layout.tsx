import type { Metadata } from "next";
import "./globals.css";
import AgeGate from "./components/AgeGate";

export const metadata: Metadata = {
  metadataBase: new URL("https://firstnationsmokez.com"),
  title: {
    default: "First Nation Smoke Cannabis Dispensary Toronto — Premium Cannabis Dispensary, Toronto",
    template: "%s | First Nation Smoke Cannabis Dispensary Toronto",
  },
  description:
    "Shop 200+ premium cannabis strains at First Nation Smoke Cannabis Dispensary Toronto. Exotic, Premium, AAA+, AA & Budget flower from $3/g. Toronto's uplifting dispensary at 1504 Eglinton Ave W. Open Daily: 12:00 AM - 11:59 PM.",
  keywords: [
    "cannabis dispensary Toronto",
    "weed store Toronto",
    "exotic flower Toronto",
    "premium cannabis",
    "First Nation Smoke Cannabis Dispensary Toronto",
    "cheap weed Toronto",
    "dispensary near me",
    "THC flower",
    "indica sativa hybrid",
    "edibles Toronto",
    "vapes",
    "pre-rolls",
    "native cigarettes Toronto",
    "weed store Mississauga",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://firstnationsmokez.com",
    siteName: "First Nation Smoke Cannabis Dispensary Toronto",
    title: "First Nation Smoke Cannabis Dispensary Toronto — Premium Toronto Cannabis Dispensary",
    description:
      "200+ strains from $3/g. Exotic to Budget. Toronto's uplifting dispensary at 1504 Eglinton Ave W. Open Daily: 12:00 AM - 11:59 PM.",
    images: [
      {
        url: "https://firstnationsmokez.com/wp-content/uploads/2026/04/46Oi5.jpg",
        width: 1200,
        height: 630,
        alt: "First Nation Smoke Cannabis Dispensary Toronto — Premium Cannabis Dispensary Toronto",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "First Nation Smoke Cannabis Dispensary Toronto — Toronto's Uplifting Dispensary",
    description: "200+ strains from $3/g. Open Daily: 12:00 AM - 11:59 PM at 1504 Eglinton Ave W, Toronto.",
    images: ["https://firstnationsmokez.com/wp-content/uploads/2026/04/46Oi5.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://firstnationsmokez.com",
  },
  verification: {
    // google: "your-google-verification-code",
  },
};

/* ── JSON-LD Structured Data ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  additionalType: "https://schema.org/Store",
  "@id": "https://firstnationsmokez.com",
  name: "First Nation Smoke Cannabis Dispensary Toronto",
  description: "Cannabis dispensary at 1504 Eglinton Ave W in Toronto, ON. Shop exotic, premium, AAA+, AA, and budget flower tiers plus edibles, prerolls, and vapes. Open Daily: 12:00 AM - 11:59 PM.",
  url: "https://firstnationsmokez.com",
  telephone: "+14372151466",
  image: "https://firstnationsmokez.com/wp-content/uploads/2026/04/7Clmh.jpg",
  priceRange: "$3 - $12/g",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1504 Eglinton Ave W",
    addressLocality: "Toronto",
    addressRegion: "ON",
    postalCode: "M6E 2G5",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.6979500,
    longitude: -79.4409900,
  },
  openingHoursSpecification: [
  {
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
  }
],
  sameAs: [
    "http://firstnationsmokez.com/",
    "http://firstnationsmokez.com/",
  ],
  hasMap: "http://firstnationsmokez.com/",
  areaServed: {
    "@type": "City",
    name: "Toronto",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "15",
    bestRating: "5",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Toronto" />
        <meta name="geo.position" content="43.6979500;-79.4409900" />
        <meta name="ICBM" content="43.6979500, -79.4409900" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <AgeGate />
      </body>
    </html>
  );
}
