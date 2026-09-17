import { Metadata } from "next";
import { WeedOwnerPage } from "@/app/components/WeedOwnerPage";

export const metadata: Metadata = {
  title: { absolute: "Weed Dispensary in Toronto | First Nation Smoke Cannabis Dispensary Toronto" },
  description:
    "First Nation Smoke is the Eglinton West walk-in at 1504 Eglinton Ave W through Little Jamaica and Fairbank. Use the homepage for hours and the map; use /visit for how to reach the door.",
  alternates: {
    canonical: "https://www.firstnationsmokez.com/",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function Page() {
  return <WeedOwnerPage />;
}
