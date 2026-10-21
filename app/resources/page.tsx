import type { Metadata } from "next";
import ResourceView from "./ResourceView";
import { RESOURCE_HOME, presentResource } from "./resourceData";
import { resolveDocumentTitle } from "../lib/storeIdentity";

const resourceHome = presentResource(RESOURCE_HOME);

export const metadata: Metadata = {
  title: resolveDocumentTitle(resourceHome.seoTitle),
  description: resourceHome.description,
  alternates: { canonical: "https://www.firstnationsmokez.com/resources" },
};

export default function ResourcesPage() {
  return <ResourceView page={resourceHome} />;
}
