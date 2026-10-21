/**
 * Site-wide cigarette visibility.
 * Default is hidden. Set NEXT_PUBLIC_SHOW_CIGARETTES=true and rebuild to restore.
 */
export const SHOW_CIGARETTES = process.env.NEXT_PUBLIC_SHOW_CIGARETTES === "true";

/** Neighbourhood vape page used while cigarette URLs are temporarily redirected. */
export const VAPE_PAGE_PATH = "/vape-shop-eglinton-west";

const EXEMPT_ACCESSORY = /backwoods|cigarillo|rolling\s*paper|raw\s*paper/i;

/** Backwoods, cigarillo, and rolling-paper guides stay published with the switch off. */
export function isExemptGuideSlug(slug: string): boolean {
  return /backwood|cigarillo|rolling-paper|raw-paper/i.test(slug);
}

/** Rolling papers, Backwoods, and cigarillos stay on the menu either way. */
export function isExemptTobaccoAccessory(item: { name?: string; slug?: string }): boolean {
  return EXEMPT_ACCESSORY.test(`${item.name || ""} ${item.slug || ""}`);
}

export function isCigaretteCategory(category?: string): boolean {
  return String(category || "").trim().toUpperCase() === "CIGARETTES";
}

/** Product rows to withhold while the switch is off. Exempt accessories stay. */
export function isHiddenCigaretteItem(item: { name?: string; slug?: string; category?: string }): boolean {
  if (SHOW_CIGARETTES) return false;
  if (isExemptTobaccoAccessory(item)) return false;
  return isCigaretteCategory(item.category);
}

export function isCigaretteResourceSlug(slug: string): boolean {
  const clean = slug.replace(/^\/+|\/+$/g, "");
  return clean === "native-smokes" || clean.startsWith("native-smokes/");
}

/**
 * Longest-match copy swaps. When the switch is on, the original string is returned unchanged.
 */
const HIDDEN_COPY: Array<[string, string]> = [
  [
    "Adults 19+ can compare flower tiers, pre-rolls, edibles, vapes, concentrates, accessories, and listed cigarettes — including Native cigarettes as a merchandise category on the cigarette shelf. Neighbourhood notes for the weed dispensary walk-in, cannabis delivery, Native cigarettes, and nicotine vapes (current shelf at /items/vapes) live on their own Eglinton West pages.",
    "Adults 19+ can compare flower tiers, pre-rolls, edibles, vapes, concentrates, and accessories. Neighbourhood notes for the weed dispensary walk-in, cannabis delivery, and nicotine vapes (current shelf at /items/vapes) live on their own Eglinton West pages.",
  ],
  [
    "Adults 19+ can review flower, pre-rolls, edibles, vapes, concentrates, accessories, and listed cigarettes on the current menu. Use the homepage for hours and the map; use /visit for how to reach the door. The weed dispensary, open-now / 24h-near-me, cannabis delivery, Native cigarettes (merchandise category only), and nicotine vape pages are equal neighbourhood pages.",
    "Adults 19+ can review flower, pre-rolls, edibles, vapes, concentrates, and accessories on the current menu. Use the homepage for hours and the map; use /visit for how to reach the door. The weed dispensary, open-now / 24h-near-me, cannabis delivery, and nicotine vape pages are equal neighbourhood pages.",
  ],
  [
    "categories — flower, pre-rolls, edibles, vapes, concentrates, accessories, and listed cigarettes (Native cigarettes are a merchandise category on that shelf, not a cultural claim).",
    "categories — flower, pre-rolls, edibles, vapes, concentrates, and accessories.",
  ],
  [
    "The overnight counter is the same menu lanes as daytime: flower tiers, pre-rolls, edibles, vapes, concentrates, accessories, and listed cigarettes.",
    "The overnight counter is the same menu lanes as daytime: flower tiers, pre-rolls, edibles, vapes, concentrates, and accessories.",
  ],
  [
    "Then choose one category: flower, pre-rolls, edibles, THC vapes, concentrates, accessories, or listed cigarettes.",
    "Then choose one category: flower, pre-rolls, edibles, THC vapes, concentrates, or accessories.",
  ],
  [
    "The site has paths for flower, pre-rolls, edibles, THC vapes, concentrates, accessories, and cigarettes where listed.",
    "The site has paths for flower, pre-rolls, edibles, THC vapes, concentrates, and accessories where listed.",
  ],
  [
    "Open-now / 24h-near-me notes live on the first-class 24-hour Eglinton West page, equal to the neighbourhood weed dispensary, delivery, Native cigarettes, and nicotine vape pages.",
    "Open-now / 24h-near-me notes live on the first-class 24-hour Eglinton West page, equal to the neighbourhood weed dispensary, delivery, and nicotine vape pages.",
  ],
  [
    "Yes. Bring government-issued photo ID. No appointment is required. Hours on this page match the homepage hub: Open 24 Hours. Open-now / 24h-near-me notes live on the first-class 24-hour Eglinton West page, equal to the neighbourhood weed dispensary, delivery, Native cigarettes, and nicotine vape pages.",
    "Yes. Bring government-issued photo ID. No appointment is required. Hours on this page match the homepage hub: Open 24 Hours. Open-now / 24h-near-me notes live on the first-class 24-hour Eglinton West page, equal to the neighbourhood weed dispensary, delivery, and nicotine vape pages.",
  ],
  [
    "Equal corridor page with the weed dispensary, delivery, Native cigarettes, and nicotine vapes.",
    "Equal corridor page with the weed dispensary, delivery, and nicotine vapes.",
  ],
  [
    "The weed dispensary, delivery, Native cigarettes, and nicotine vape pages are equal neighbours — they do not replace this open-now URL.",
    "The weed dispensary, delivery, and nicotine vape pages are equal neighbours — they do not replace this open-now URL.",
  ],
  [
    "equal to the neighbourhood weed dispensary, delivery, Native cigarettes, and nicotine vapes",
    "equal to the neighbourhood weed dispensary, delivery, and nicotine vapes",
  ],
  [
    "equal to neighbourhood delivery, Native cigarettes, and nicotine vapes.",
    "equal to neighbourhood delivery and nicotine vapes.",
  ],
  [
    "Resource guides for shopping the First Nation Smoke Cannabis Dispensary Toronto menu in Toronto, including flower, value, pre-rolls, and Native smokes where listed.",
    "Resource guides for shopping the First Nation Smoke Cannabis Dispensary Toronto menu in Toronto, including flower, value, and pre-rolls.",
  ],
  [
    "The Resource pages explain how to navigate flower shelves, pre-roll formats, value choices, and Native smokes without treating every type of listing the same way.",
    "The Resource pages explain how to navigate flower shelves, pre-roll formats, and value choices without treating every type of listing the same way.",
  ],
  [
    "Use the menu guide to explore flower tiers, pre-roll formats, edibles, vapes, concentrates, accessories, and cigarettes.",
    "Use the menu guide to explore flower tiers, pre-roll formats, edibles, vapes, concentrates, and accessories.",
  ],
  [
    "The hub brings flower, value, pre-roll, cigarette, and visit guidance together",
    "The hub brings flower, value, pre-roll, and visit guidance together",
  ],
  [
    "Browse every First Nation Smoke strain, Native Cigarettes, Nicotine Vape, and THC Vape guide.",
    "Browse every First Nation Smoke strain, Nicotine Vape, and THC Vape guide.",
  ],
  [
    "Browse First Nation Smoke name guides for strains, Native Cigarettes, Nicotine Vape, and THC Vape.",
    "Browse First Nation Smoke name guides for strains, Nicotine Vape, and THC Vape.",
  ],
  [
    " Native cigarettes, where listed, are a merchandise category on the cigarette shelf — not a cultural claim.",
    "",
  ],
  [
    " Native cigarettes, where listed, are a merchandise category only.",
    "",
  ],
];

export function publicText(text: string): string {
  if (SHOW_CIGARETTES) return text;
  let next = text;
  for (const [from, to] of HIDDEN_COPY) {
    if (next.includes(from)) next = next.split(from).join(to);
  }
  return next;
}

export function publicFaqs<T extends { q: string; a: string }>(faqs: readonly T[]): T[] {
  if (SHOW_CIGARETTES) return [...faqs];
  return faqs
    .filter((faq) => !/cigarette|native smoke/i.test(faq.q))
    .map((faq) => ({ ...faq, a: publicText(faq.a) }));
}
