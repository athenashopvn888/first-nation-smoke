import type { Metadata } from "next";
import ResourceView from "./ResourceView";
import { RESOURCE_HOME } from "./resourceData";
import { resolveDocumentTitle } from "../lib/storeIdentity";

export const metadata: Metadata = {
  title: resolveDocumentTitle(RESOURCE_HOME.seoTitle),
  description: RESOURCE_HOME.description,
  alternates: { canonical: "https://www.firstnationsmokez.com/resources" },
};

export default function ResourcesPage() {
  return <ResourceView page={RESOURCE_HOME} />;
}
