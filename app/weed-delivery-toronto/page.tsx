import type { Metadata } from "next";
import DeliveryContent from "../delivery/DeliveryContent";
import menu from "../delivery/delivery-menu.json";

export const metadata: Metadata = {
  title: "Weed Delivery Toronto",
  description:
    "Browse Weed Delivery from First Nation Smoke Cannabis Dispensary Toronto and confirm current availability and delivery details before an order is accepted.",
  alternates: {
    canonical: "https://www.firstnationsmokez.com/weed-delivery-toronto",
  },
};

export default function WeedDeliveryPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Weed Delivery",
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
