import CigaretteStateProvider from "./components/CigaretteStateProvider";
import FleetContentProvider from "./components/FleetContentProvider";
import FullNameNap from "./components/FullNameNap";
import { getCigaretteSnapshot, toPublicCigaretteState } from "./lib/cigaretteFeed";
import { getFleetContent } from "./lib/fleetContent";
import { HOME_DOC_TITLE } from "./lib/homeDelivery";
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import PinnedNavClearance from "./components/PinnedNavClearance";
import {
  HOME_FAQS,
  cannabisStoreJsonLd,
  faqPageJsonLd,
  stringifyJsonLd,
} from "./lib/storeIdentity";
import { SHOW_CIGARETTES, publicFaqs } from "./lib/showCigarettes";

export const dynamic = "force-dynamic";

const ROOT_METADATA: Metadata = {
  metadataBase: new URL("https://www.firstnationsmokez.com"),
  title: {
    default: HOME_DOC_TITLE,
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
    ...(SHOW_CIGARETTES ? ["native cigarettes Toronto"] : []),
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://www.firstnationsmokez.com",
    siteName: "First Nation Smoke Cannabis Dispensary Toronto",
    title: HOME_DOC_TITLE,
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
    title: HOME_DOC_TITLE,
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

export async function generateMetadata(): Promise<Metadata> {
  const fleet = await getFleetContent();
  if (!fleet.active) return ROOT_METADATA;
  const description = fleet.pages.Home?.metaDescription || "";
  if (!description || description === ROOT_METADATA.description) return ROOT_METADATA;
  return {
    ...ROOT_METADATA,
    description,
    openGraph: { ...ROOT_METADATA.openGraph, description },
    twitter: { ...ROOT_METADATA.twitter, description },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [cigaretteSnapshot, fleet] = await Promise.all([getCigaretteSnapshot(), getFleetContent()]);
  const cigarettes = toPublicCigaretteState(cigaretteSnapshot);
  const baseStore = cannabisStoreJsonLd();
  const storeJsonLd = fleet.active
    ? {
        ...baseStore,
        name: fleet.nap.schemaName,
        alternateName: fleet.nap.name,
        telephone: fleet.nap.phoneTel,
        url: fleet.nap.website,
        hasMap: fleet.nap.mapsSearchUrl,
        address: {
          "@type": "PostalAddress",
          streetAddress: fleet.nap.street,
          addressLocality: fleet.nap.city,
          addressRegion: fleet.nap.province,
          postalCode: fleet.nap.postalCode,
          addressCountry: "CA",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: Number(fleet.nap.lat),
          longitude: Number(fleet.nap.lng),
        },
      }
    : baseStore;
  return (
    <html lang="en">
      <head>
        <meta name="fleet-content-version" content={fleet.version} />
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
            __html: stringifyJsonLd(storeJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: stringifyJsonLd(SHOW_CIGARETTES ? faqPageJsonLd(HOME_FAQS) : faqPageJsonLd(publicFaqs(HOME_FAQS))),
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
        <FleetContentProvider value={{ active: fleet.active, version: fleet.version, nap: fleet.nap }}>
          <CigaretteStateProvider value={{ ...cigarettes, web: SHOW_CIGARETTES ? cigarettes.web : false }}>
            {children}
            <FullNameNap />
            <PinnedNavClearance />
          </CigaretteStateProvider>
        </FleetContentProvider>
      </body>
    </html>
  );
}
