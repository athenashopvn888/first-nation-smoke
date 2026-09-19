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
    a: "Yes. The Eglinton West walk-in is listed open 24 hours, seven days a week. Adults 19+ can come in without an appointment. Confirm the homepage hours card if your timing is unusual. Overnight and open-now notes for this corridor only sit on the 24-hour Eglinton West page.",
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
    a: "Adults 19+ can compare flower tiers, pre-rolls, edibles, vapes, concentrates, accessories, and listed cigarettes — including Native cigarettes as a merchandise category on the cigarette shelf. Neighbourhood notes for cannabis delivery, Native cigarettes, and nicotine vapes (current shelf at /items/vapes) live on their own Eglinton West pages. Names, packages, and posted prices change; ask staff before you travel for one item.",
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
