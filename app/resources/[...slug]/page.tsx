import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import ResourceView from "../ResourceView";
import { getResourcePage, presentResource, RESOURCE_PAGES } from "../resourceData";
import { resolveDocumentTitle } from "../../lib/storeIdentity";
import { SHOW_CIGARETTES, VAPE_PAGE_PATH, isCigaretteResourceSlug } from "../../lib/showCigarettes";

type ResourceRouteProps = {
  params: Promise<{ slug?: string[] }>;
};

function routeSlug(slug?: string[]) {
  return (slug || []).join("/");
}

export function generateStaticParams() {
  return RESOURCE_PAGES.filter((page) => page.slug).map((page) => ({ slug: page.slug.split("/") }));
}

export async function generateMetadata({ params }: ResourceRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getResourcePage(routeSlug(slug));
  if (!page) return {};
  if (!SHOW_CIGARETTES && isCigaretteResourceSlug(page.slug)) return { robots: { index: false, follow: false } };
  return {
    title: resolveDocumentTitle(page.seoTitle),
    description: page.description,
    alternates: { canonical: "https://www.firstnationsmokez.com/resources/" + page.slug },
  };
}

export default async function ResourcePage({ params }: ResourceRouteProps) {
  const { slug } = await params;
  const page = getResourcePage(routeSlug(slug));
  if (!page) notFound();
  if (!SHOW_CIGARETTES && isCigaretteResourceSlug(page.slug)) redirect(VAPE_PAGE_PATH);
  return <ResourceView page={presentResource(page)} />;
}
