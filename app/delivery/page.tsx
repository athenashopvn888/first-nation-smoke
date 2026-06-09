import type { Metadata } from "next";
import DeliveryContent from "./DeliveryContent";

export const metadata: Metadata = {
  title: "Delivery Coming Soon — First Nation Smoke Cannabis Dispensary Toronto | Toronto",
  description: "Get notified when First Nation Smoke Cannabis Dispensary Toronto launches same-day weed delivery across Toronto and surrounding areas.",
  alternates: {
    canonical: "https://firstnationsmokez.com/delivery",
  },
};

export default function DeliveryPage() {
  return <DeliveryContent />;
}
