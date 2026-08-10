import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import AgeGate from "./components/AgeGate";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.firstnationsmokez.com"),
  title: {
    default: "First Nation Smoke Cannabis | Toronto Dispensary",
    template: "%s | First Nation Smoke Cannabis Dispensary Toronto",
  },
  description:
    "First Nation Smoke Cannabis Dispensary Toronto is a Toronto cannabis store on Eglinton Ave W with adult 19+ store info and category browsing for flower, pre-rolls, vapes, edibles, concentrates, and accessories. Open 24 Hours.",
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
    "weed store Little Jamaica",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://www.firstnationsmokez.com",
    siteName: "First Nation Smoke Cannabis Dispensary Toronto",
    title:
      "First Nation Smoke Cannabis Dispensary Toronto — Premium Toronto Cannabis Dispensary",
    description:
      "Browse flower tiers and cannabis categories at First Nation Smoke on Eglinton Ave W in Toronto. Open 24 Hours.",
    images: [
      {
        url: "https://www.firstnationsmokez.com/wp-content/uploads/2026/04/46Oi5.jpg",
        width: 1200,
        height: 630,
        alt: "First Nation Smoke Cannabis Dispensary Toronto — Toronto Cannabis Dispensary Toronto",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "First Nation Smoke Cannabis Dispensary Toronto — Toronto's Uplifting Dispensary",
    description:
      "Browse First Nation Smoke cannabis categories. Open 24 Hours at 1504 Eglinton Ave W, Toronto.",
    images: [
      "https://www.firstnationsmokez.com/wp-content/uploads/2026/04/46Oi5.jpg",
    ],
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
    canonical: "https://www.firstnationsmokez.com",
  },
  verification: {
    // google: "your-google-verification-code",
  },
};

/* JSON-LD Structured Data */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  additionalType: "https://schema.org/Store",
  "@id": "https://www.firstnationsmokez.com",
  name: "First Nation Smoke Cannabis Dispensary Toronto",
  description:
    "Cannabis dispensary at 1504 Eglinton Ave W in Toronto, ON. Shop exotic, premium, AAA+, AA, and budget flower tiers plus edibles, prerolls, and vapes. Open 24 Hours.",
  url: "https://www.firstnationsmokez.com",
  telephone: "+12898195073",
  image: "https://www.firstnationsmokez.com/wp-content/uploads/2026/04/7Clmh.jpg",
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
    latitude: 43.69795,
    longitude: -79.44099,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  sameAs: ["https://www.firstnationsmokez.com/", "https://www.firstnationsmokez.com/"],
  hasMap: "https://www.firstnationsmokez.com/",
  areaServed: {
    "@type": "City",
    name: "Toronto",
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
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DQ714NB2QM"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DQ714NB2QM');
            `,
          }}
        />
      </head>
      <body>
        <Link className="deliveryAnnouncement" href="/delivery">
          NEW DELIVERY MENU IS HERE — CLICK TO EXPLORE
        </Link>
        {children}
        <AgeGate />
      </body>
    </html>
  );
}
