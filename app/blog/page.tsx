import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Cannabis Blog & Guides — First Nation Smoke Cannabis Dispensary Toronto | Toronto",
  description: "Read the latest strain reviews, dosing guides, and cannabis news from First Nation Smoke Cannabis Dispensary Toronto in Toronto.",
  alternates: {
    canonical: "https://firstnationsmokez.com/blog",
  },
};

export default function BlogPage() {
  return <BlogContent />;
}
