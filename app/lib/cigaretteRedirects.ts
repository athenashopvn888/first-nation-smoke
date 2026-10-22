import deliveryGuideCopy from "./deliveryGuideCopy.json";
import guideCopy from "./guideCopy.json";
import itemsJson from "./items.json";
import { SHOW_CIGARETTES, VAPE_PAGE_PATH, isExemptGuideSlug } from "./showCigarettes";

type GuideSlug = { slug: string; lane: string };
type ItemSlug = { slug: string; name: string; category: string };

const CIGARETTE_PAGE_PATHS = [
  "/items/cigarettes",
  "/cigarettes",
  "/native-cigarettes-eglinton-west",
  "/info/native-cigarettes-toronto",
  "/info/native-cigarettes-york",
  "/resources/native-smokes",
  "/resources/native-smokes/native-cigarettes-guide",
] as const;

const EXEMPT_ACCESSORY = /backwoods|cigarillo|rolling\s*paper|raw\s*paper/i;

const guideSlugs = new Set(
  [...(guideCopy as GuideSlug[]), ...(deliveryGuideCopy as GuideSlug[])]
    .filter((guide) => guide.lane === "native_cig" && !isExemptGuideSlug(guide.slug))
    .map((guide) => guide.slug),
);

/** Cigarette item URLs. Backwoods, cigarillos, and rolling papers stay addressable. */
const hiddenItemSlugs = new Set(
  (itemsJson as ItemSlug[])
    .filter((item) => item.category.toUpperCase() === "CIGARETTES" && !EXEMPT_ACCESSORY.test(`${item.name} ${item.slug}`))
    .map((item) => item.slug),
);

export function cigaretteRedirectSources(): string[] {
  return [
    ...CIGARETTE_PAGE_PATHS,
    ...[...guideSlugs].map((slug) => `/guides/${slug}`),
    ...[...hiddenItemSlugs].map((slug) => `/item/${slug}`),
  ];
}

export function isCigaretteContentPath(pathname: string): boolean {
  const path = pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  if ((CIGARETTE_PAGE_PATHS as readonly string[]).includes(path)) return true;
  if (path.startsWith("/resources/native-smokes")) return true;
  const guide = path.match(/^\/guides\/([^/]+)$/);
  if (guide && guideSlugs.has(guide[1])) return true;
  const item = path.match(/^\/item\/([^/]+)$/);
  if (item && hiddenItemSlugs.has(item[1])) return true;
  return false;
}

export function isCigaretteRedirectPath(pathname: string): boolean {
  if (SHOW_CIGARETTES) return false;
  return isCigaretteContentPath(pathname);
}

export { VAPE_PAGE_PATH };
