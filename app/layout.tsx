import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import AgeGate from "./components/AgeGate";
import {
  HOME_FAQS,
  cannabisStoreJsonLd,
  faqPageJsonLd,
  stringifyJsonLd,
} from "./lib/storeIdentity";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.firstnationsmokez.com"),
  title: {
    default: "First Nation Smoke | Eglinton West / Little Jamaica",
    // Child titles that already include the brand must use resolveDocumentTitle()
    // so this template does not append "First Nation Smoke" a second time.
    template: "%s | First Nation Smoke",
  },
  description:
    "Walk into First Nation Smoke at 1504 Eglinton Ave W, Toronto, on Eglinton West through Little Jamaica and Fairbank, near Dufferin and Oakwood. Adults 19+. Open 24 Hours. Current menu in store — no medical claims.",
  keywords: [
    "First Nation Smoke",
    "Eglinton West dispensary",
    "Little Jamaica cannabis",
    "Fairbank weed store",
    "1504 Eglinton Ave W",
    "Oakwood Eglinton walk-in",
    "Dufferin Eglinton dispensary",
    "Toronto Dispensary",
    "native cigarettes Toronto",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://www.firstnationsmokez.com",
    siteName: "First Nation Smoke Cannabis Dispensary Toronto",
    title: "First Nation Smoke | Eglinton West / Little Jamaica",
    description:
      "Adult 19+ walk-in at 1504 Eglinton Ave W on Eglinton West through Little Jamaica and Fairbank. Open 24 Hours.",
    images: [
      {
        url: "https://www.firstnationsmokez.com/wp-content/uploads/2026/04/46Oi5.jpg",
        width: 1200,
        height: 630,
        alt: "First Nation Smoke on Eglinton Avenue West near Little Jamaica and Fairbank",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "First Nation Smoke | Eglinton West / Little Jamaica",
    description:
      "Adult 19+ walk-in at 1504 Eglinton Ave W on Eglinton West through Little Jamaica and Fairbank. Open 24 Hours.",
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
        <meta name="geo.placename" content="Little Jamaica" />
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
          dangerouslySetInnerHTML={{
            __html: stringifyJsonLd(cannabisStoreJsonLd()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: stringifyJsonLd(faqPageJsonLd(HOME_FAQS)),
          }}
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
        <Link className="deliveryHoursAnnouncement" href="/cannabis-delivery-eglinton-west">
          NEW WEED DELIVERY 10am -10pm
        </Link>
        <div className="deliveryAnnouncement" role="status" aria-label="Store welcome announcement">
          WELCOME TO FIRST NATION SMOKE
        </div>
        {children}
        <AgeGate />
      </body>
    </html>
  );
}
