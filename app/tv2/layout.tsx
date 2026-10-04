import type { Metadata } from "next";
import TvReviewQr from "../TvReviewQr";

export const metadata: Metadata = {
  title: { absolute: "First Nation Smoke In-Store Accessories Display" },
  description: "Operational in-store accessories menu display for First Nation Smoke.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function TvTwoLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {children}
      <TvReviewQr storeName="First Nation Smoke Cannabis Dispensary Toronto" />
    </>
  );
}
