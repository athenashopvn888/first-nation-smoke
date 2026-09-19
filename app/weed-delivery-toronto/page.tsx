import type { Metadata } from "next";
import DeliveryContent from "../delivery/DeliveryContent";
import menu from "../delivery/delivery-menu.json";

export const metadata: Metadata = {
  title: "Weed Delivery for Eglinton West / Little Jamaica",
  description:
    "Neighbourhood delivery notes from First Nation Smoke at 1504 Eglinton Ave W, Little Jamaica / Fairbank. Confirm current availability before an order is accepted. This is not a city-wide Toronto delivery page.",
  alternates: {
    canonical: "https://www.firstnationsmokez.com/cannabis-delivery-eglinton-west",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function WeedDeliveryPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Weed Delivery for Eglinton West / Little Jamaica",
    url: "https://www.firstnationsmokez.com/weed-delivery-toronto",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: menu.products.length,
      itemListElement: menu.products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: product.name,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <DeliveryContent />
    </>
  );
}
