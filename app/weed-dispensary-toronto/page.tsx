import { Metadata } from "next";
import { WeedOwnerPage } from "@/app/components/WeedOwnerPage";

export const metadata: Metadata = {
  title: { absolute: "Weed Dispensary in Toronto | First Nation Smoke Cannabis Dispensary Toronto" },
  description:
    "First Nation Smoke Cannabis Dispensary Toronto is open 24 hours at 1504 Eglinton Ave W. Adults 19+ can explore cannabis, flower and pre-roll information.",
  alternates: {
    canonical: "https://www.firstnationsmokez.com/weed-dispensary-toronto/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <WeedOwnerPage />;
}
