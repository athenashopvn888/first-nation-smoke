/** Canonical NAP, hours, and local SEO identity for First Nation Smoke (OB01). */
export const STORE = {
  name: "First Nation Smoke Cannabis Dispensary Toronto",
  shortName: "First Nation Smoke",
  domainHost: "www.firstnationsmokez.com",
  url: "https://www.firstnationsmokez.com",
  streetAddress: "1504 Eglinton Ave W",
  city: "Toronto",
  region: "ON",
  postalCode: "M6E 2G5",
  country: "CA",
  addressLine: "1504 Eglinton Ave W, Toronto, ON M6E 2G5",
  phoneDisplay: "+1 289 819 5073",
  phoneE164: "+12898195073",
  hoursLabel: "Open 24 Hours",
  hoursDetail: "Open 24 Hours, 7 days a week",
  corridor: "Eglinton West / Little Jamaica / Fairbank",
  intersection: "Eglinton Ave W near Dufferin & Oakwood",
  latitude: 43.69795,
  longitude: -79.44099,
  image: "https://www.firstnationsmokez.com/wp-content/uploads/2026/04/46Oi5.jpg",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=1504+Eglinton+Ave+W,+Toronto,+ON+M6E+2G5&hl=en&z=16&output=embed",
  mapLinkUrl:
    "https://maps.google.com/?q=1504+Eglinton+Ave+W,+Toronto,+ON+M6E+2G5",
  gbpWebsitePolicy: "https://www.firstnationsmokez.com/",
} as const;

/** Child `<title>` brand. Appears once. The longer store name stays in schema. */
export const DOCUMENT_TITLE_BRAND = "First Nation Smoke";
const DOCUMENT_TITLE_SUFFIX = ` | ${DOCUMENT_TITLE_BRAND}`;
const LEGACY_TITLE_SUFFIX = " | First Nation Smoke Cannabis Dispensary Toronto";

/**
 * Root layout title template is `%s | First Nation Smoke`.
 * A child title that already names the brand must be absolute, or the
 * template appends the brand a second time.
 */
export function resolveDocumentTitle(
  title: string,
  options?: { absolute?: boolean },
): string | { absolute: string } {
  let normalized = title.replace(/\s+/g, " ").trim();
  const suffixes = [DOCUMENT_TITLE_SUFFIX, LEGACY_TITLE_SUFFIX];
  let stripped = true;
  while (stripped) {
    stripped = false;
    for (const suffix of suffixes) {
      if (
        normalized.endsWith(suffix) &&
        normalized.slice(0, -suffix.length).includes(DOCUMENT_TITLE_BRAND)
      ) {
        normalized = normalized.slice(0, -suffix.length).trim();
        stripped = true;
      }
    }
  }
  if (options?.absolute || normalized.includes(DOCUMENT_TITLE_BRAND)) {
    return { absolute: normalized };
  }
  return normalized;
}

/** Title text after the root template is applied. Brand appears at most once. */
export function renderedDocumentTitle(
  title: string,
  options?: { absolute?: boolean },
): string {
  const resolved = resolveDocumentTitle(title, options);
  if (typeof resolved === "string") return `${resolved}${DOCUMENT_TITLE_SUFFIX}`;
  return resolved.absolute;
}

/** OpeningHoursSpecification 00:00–23:59 matches the live www site and 17 Sep 2026 FMD snapshot (Open 24 Hours). GBP Website is not edited from this site PR. */
export const DAYS_OF_WEEK = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

/** Visible homepage FAQs — also emitted as FAQPage JSON-LD. Location/hours/products only. */
export const HOME_FAQS: { q: string; a: string }[] = [
  {
    q: "Where is First Nation Smoke on Eglinton Avenue West?",
    a: "First Nation Smoke is at 1504 Eglinton Ave W, Toronto, ON M6E 2G5, on the Eglinton West stretch through Little Jamaica and Fairbank, near Dufferin Street and Oakwood Avenue. Call +1 289 819 5073 if the last block is unclear.",
  },
  {
    q: "Is First Nation Smoke open 24 hours on Eglinton West?",
    a: "Yes. The Eglinton West walk-in is listed open 24 hours, seven days a week. Adults 19+ can come in without an appointment. Confirm the homepage hours card if your timing is unusual. Open-now / 24h-near-me notes live on the first-class 24-hour Eglinton West page, equal to the neighbourhood weed dispensary, delivery, Native cigarettes, and nicotine vape pages.",
  },
  {
    q: "How do I reach 1504 Eglinton Ave W by TTC?",
    a: "Ride Line 1 to Eglinton West Station at Allen Road, then continue west on Eglinton Avenue West on the 32 Eglinton West bus (or a surface walk if you prefer). Dufferin buses drop you at the Eglinton and Dufferin corner, a short walk from 1504. The /visit page has driving, bus, and parking notes for this corridor only.",
  },
  {
    q: "Do I need ID to shop at First Nation Smoke?",
    a: "Yes. First Nation Smoke is for adults 19+ with valid government-issued photo ID. Staff check ID at the door. This store does not provide medical advice or medical cannabis claims.",
  },
  {
    q: "Where can I park near 1504 Eglinton Ave W?",
    a: "Street parking on Eglinton Avenue West is the usual option. Evening curb space is often easier than midday. Read the signs on the block you actually stop on. The homepage map marks the storefront; use /visit for Dufferin, Oakwood, and Allen Road approach notes.",
  },
  {
    q: "What can I browse at the Eglinton West walk-in?",
    a: "Adults 19+ can compare flower tiers, pre-rolls, edibles, vapes, concentrates, accessories, and listed cigarettes — including Native cigarettes as a merchandise category on the cigarette shelf. Neighbourhood notes for the weed dispensary walk-in, cannabis delivery, Native cigarettes, and nicotine vapes (current shelf at /items/vapes) live on their own Eglinton West pages. Names, packages, and posted prices change; ask staff before you travel for one item.",
  },
];

export function cannabisStoreJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CannabisStore",
    "@id": `${STORE.url}/#cannabis-store`,
    name: STORE.name,
    url: STORE.url,
    image: STORE.image,
    telephone: STORE.phoneE164,
    description:
      "First Nation Smoke is an adult 19+ walk-in cannabis store at 1504 Eglinton Ave W in Toronto, on Eglinton West through Little Jamaica and Fairbank, near Dufferin Street and Oakwood Avenue. Open 24 Hours.",
    priceRange: "$$",
    currenciesAccepted: "CAD",
    paymentAccepted: "Cash, Debit",
    address: {
      "@type": "PostalAddress",
      streetAddress: STORE.streetAddress,
      addressLocality: STORE.city,
      addressRegion: STORE.region,
      postalCode: STORE.postalCode,
      addressCountry: STORE.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: STORE.latitude,
      longitude: STORE.longitude,
    },
    hasMap: STORE.mapLinkUrl,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [...DAYS_OF_WEEK],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    areaServed: [
      { "@type": "Place", name: "Eglinton West" },
      { "@type": "Place", name: "Little Jamaica" },
      { "@type": "Place", name: "Fairbank" },
      { "@type": "Place", name: "Oakwood Village" },
    ],
  };
}

export function faqPageJsonLd(faqs: { q: string; a: string }[] = HOME_FAQS) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function stringifyJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

/**
 * True only when this site's own hours label, hours detail, and schema
 * all say 24 hours. Delivery 10am–10pm is a separate path and is not a
 * store-hours contradiction. Do not invent a different schedule here.
 */
export function storeClaimsOpen24Hours() {
  const spec = cannabisStoreJsonLd().openingHoursSpecification[0];
  const labelIs24 = /open 24 hours/i.test(STORE.hoursLabel);
  const detailIs24 = /open 24 hours/i.test(STORE.hoursDetail);
  const schemaIs24 = spec?.opens === "00:00" && spec?.closes === "23:59";
  return labelIs24 && detailIs24 && schemaIs24;
}
