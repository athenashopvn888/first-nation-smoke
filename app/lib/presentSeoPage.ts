import type { SeoPageData } from "./seoPages";
import { SHOW_CIGARETTES, publicFaqs, publicText } from "./showCigarettes";

/** Public copy for /info pages. The native-cigarettes info URL redirects while the switch is off. */
export function presentSeoPage(page: SeoPageData): SeoPageData {
  if (SHOW_CIGARETTES || page.slug === "native-cigarettes-toronto") return page;
  return {
    ...page,
    title: publicText(page.title),
    metaDescription: publicText(page.metaDescription),
    h1: publicText(page.h1),
    heroTagline: publicText(page.heroTagline),
    sections: page.sections.map((section) => ({ ...section, body: publicText(section.body) })),
    faqs: publicFaqs(page.faqs),
  };
}
