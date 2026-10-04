import type { Metadata } from "next";
import TvReviewQr from "../TvReviewQr";

export const metadata: Metadata = {
  title: { absolute: "First Nation Smoke In-Store Flower Display" },
  description: "Operational in-store flower menu display for First Nation Smoke.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function TvLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {children}
      <TvReviewQr storeName="First Nation Smoke Cannabis Dispensary Toronto" />
    </>
  );
}
