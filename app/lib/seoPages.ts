const NATIVE_HERO_DISCLOSURE = "Brand preview only. Selection varies by store; check the current cigarette menu before visiting.";
const NATIVE_HERO_PRODUCTS = [
  { name: "BB Lights", image: "/products/1001-BB-LIGHTS-CARTONS.webp" },
  { name: "BB Full", image: "/products/1003-BB-FULL-CARTON.webp" },
  { name: "Canadian Lights", image: "/products/1005-CANADIAN-LIGHTS.webp" },
  { name: "Canadian Full", image: "/products/1006-CANADIAN-FULL.webp" },
  { name: "Canadian Classics Silver", image: "/products/1015-CANADIAN-CLASSICS-SILVER.webp" },
  { name: "Canadian Menthol", image: "/products/1013-CANADIAN-MENTHOL.webp" },
] as const;

export interface SeoPageData {
  slug: string;
  title: string;
  absoluteTitle?: boolean;
  metaDescription: string;
  h1: string;
  icon: string;
  heroTagline: string;
  canonicalUrl?: string;
  robots?: { index: boolean; follow: boolean };
  heroPreview?: {
    eyebrow: string;
    intro: string;
    products: readonly { name: string; image: string; sourceSlug?: string }[];
    disclosure: string;
    theme?: "cigarettes" | "nicotine";
    menuHref?: string;
    primaryLabel?: string;
    secondaryLabel?: string;
    secondaryHref?: string;
    identityStrip?: string;
    featuredHeading?: string;
    featuredIntro?: string;
    warning?: string;
  };
  banner?: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const SEO_PAGES: SeoPageData[] = [
  {
    slug: "toronto-weed-dispensary",
    title:
      "First Nation Smoke Cannabis Dispensary Toronto Weed Dispensary in Toronto",
    metaDescription:
      "First Nation Smoke is the Eglinton West walk-in at 1504 Eglinton Ave W through Little Jamaica and Fairbank, with shopper resources for flower, pre-rolls, edibles, vapes, concentrates, accessories, and listed cigarettes.",
    h1: "First Nation Smoke Cannabis Dispensary Toronto Weed Dispensary in Toronto",
    icon: "*",
    heroTagline: "Eglinton West walk-in through Little Jamaica and Fairbank",
    sections: [
      {
        heading:
          "Start At 1504 Eglinton Ave W, Then Open One Menu Lane",
        body: "First Nation Smoke is the adult 19+ walk-in at 1504 Eglinton Ave W. Use the homepage for hours, phone +1 289 819 5073, and the map pin. Then choose one category: flower, pre-rolls, edibles, THC vapes, concentrates, accessories, or listed cigarettes.",
      },
      {
        heading: "Local Notes For Eglinton West, Little Jamaica, and Fairbank",
        body: "If you searched for a cannabis shop near Little Jamaica or Fairbank, confirm civic number 1504 on Eglinton Avenue West — near Dufferin Street and Oakwood Avenue. The /visit page covers TTC from Eglinton West Station and curb parking on this corridor only.",
      },
      {
        heading: "What To Check Before Visiting",
        body: "Confirm the current menu, directions, +1 289 819 5073, and listed hours. For overnight or open-now timing on this corridor, use the 24-hour Eglinton West page. For product names, prices, and package details, use the menu or ask staff before leaving. Native cigarettes, where listed, are a merchandise category only.",
      },
    ],
    faqs: [
      {
        q: "Is First Nation Smoke Cannabis Dispensary Toronto a local cannabis dispensary?",
        a: "Yes. First Nation Smoke serves adult shoppers at 1504 Eglinton Ave W on Eglinton West through Little Jamaica and Fairbank. Use the homepage for directions, contact details, and listed hours.",
      },
      {
        q: "What should I check before visiting First Nation Smoke Cannabis Dispensary Toronto?",
        a: "Check the current menu, category pages, /visit for the last block, and +1 289 819 5073 before visiting. Product details can change.",
      },
      {
        q: "Does the site show current product categories?",
        a: "The site includes menu categories for flower tiers, pre-rolls, edibles, vapes, concentrates, accessories, and cigarettes where listed.",
      },
    ],
  },
  {
    slug: "cheap-weed-toronto",
    title:
      "First Nation Smoke Cannabis Dispensary Toronto Cheap Weed and Budget Weed Guide",
    metaDescription:
      "A value-minded guide for comparing cheap weed, budget weed, affordable weed, and flower tiers at First Nation Smoke Cannabis Dispensary Toronto.",
    h1: "First Nation Smoke Cannabis Dispensary Toronto Cheap Weed and Budget Weed Guide",
    icon: "*",
    heroTagline: "Value shopping with clear menu categories",
    sections: [
      {
        heading: "Start With Budget And AA",
        body: "If affordable weed is the mission, start with the Budget and AA flower lanes before jumping around the rest of the menu.",
      },
      {
        heading: "Compare The Current Menu",
        body: "Look at product name, format, weight, posted price, and item details. Menus change, so use this page for the method and the live menu for current details.",
      },
      {
        heading: "Know When To Move Up",
        body: "If Budget or AA does not fit the visit, compare AAA+, Premium, or Exotic flower next. A clearer tier decision starts with the category and current menu details.",
      },
    ],
    faqs: [
      {
        q: "How should shoppers compare value flower?",
        a: "Start with Budget and AA, then compare current product name, format, weight, posted price, and item details.",
      },
      {
        q: "Where can I check current item details?",
        a: "No. Use this page as a shopping guide and confirm the current menu before visiting.",
      },
    ],
  },
  {
    slug: "native-cigarettes-toronto",
    title:
      "First Nation Smoke Cannabis Dispensary Toronto Native Cigarettes Guide",
    metaDescription:
      "A shopper-friendly Native cigarettes guide for First Nation Smoke Cannabis Dispensary Toronto, with cigarette category notes where listed.",
    h1: "First Nation Smoke Cannabis Dispensary Toronto Native Cigarettes Guide",
    icon: "*",
    heroTagline: "Cigarette category notes for local shoppers",
    canonicalUrl:
      "https://www.firstnationsmokez.com/native-cigarettes-eglinton-west",
    robots: { index: false, follow: true },
    heroPreview: {
      eyebrow: "First Nation Smoke · 1504 Eglinton Ave W, Toronto",
      intro: "Cigarette category notes for local shoppers",
      products: NATIVE_HERO_PRODUCTS,
      disclosure: NATIVE_HERO_DISCLOSURE,
    },
    sections: [
      {
        heading: "Use The Cigarette Category First",
        body: "If cigarettes are part of the stop, start with the cigarette category and compare the current listings before visiting.",
      },
      {
        heading: "Confirm Current Brands",
        body: "Brand names, carton notes, and pricing can change. Treat this page as a guide and confirm current options from the menu or staff.",
      },
      {
        heading: "Keep The Visit On This Corridor",
        body: "This thin city URL is not the owner. Use /native-cigarettes-eglinton-west for neighbourhood Native cigarettes notes at 1504 Eglinton Ave W on Eglinton West through Little Jamaica and Fairbank. Native cigarettes here means the cigarette merchandise category only — no medical claims.",
      },
    ],
    faqs: [
      {
        q: "Does First Nation Smoke Cannabis Dispensary Toronto list Native cigarettes?",
        a: "The site includes a cigarette category where listed. Native cigarettes are a merchandise category only. Confirm current brands and pricing before visiting.",
      },
      {
        q: "Can cigarette selection change?",
        a: "Yes. Brand names and carton notes can change, so use the current menu or ask staff for current details.",
      },
    ],
  },
  {
    slug: "weed-store-near-little-jamaica-fairbank",
    title:
      "First Nation Smoke Cannabis Dispensary Toronto Weed Store Near Little Jamaica",
    metaDescription:
      "How to reach First Nation Smoke at 1504 Eglinton Ave W from Little Jamaica, Fairbank, Oakwood, and Dufferin. Adults 19+. Open 24 Hours. Homepage keeps the map hub.",
    h1: "First Nation Smoke Cannabis Dispensary Toronto Weed Store Near Little Jamaica",
    icon: "*",
    heroTagline: "Reach guide for Little Jamaica, Fairbank, and Eglinton West",
    sections: [
      {
        heading: "The Little Jamaica / Fairbank storefront",
        body: "First Nation Smoke is at 1504 Eglinton Ave W, Toronto, ON M6E 2G5 — the same Eglinton West frontage people mean when they say Little Jamaica or Fairbank. Oakwood Avenue sits east; Dufferin Street is the close north-south handle. Phone +1 289 819 5073. Hours on the homepage: Open 24 Hours.",
      },
      {
        heading: "TTC, driving, and the last block",
        body: "From Eglinton West Station (Line 1 at Allen Road), continue west on Eglinton Avenue West. The 32 Eglinton West bus covers that stretch. Dufferin buses drop you at the Eglinton corner a short walk from 1504. Drivers should stay on Eglinton rather than hunting a downtown pin. The dedicated /visit page has parking notes for this corridor only.",
      },
      {
        heading: "Check Before You Go",
        body: "Open the current menu, confirm 1504 on the homepage map, and call if one product is the only reason for the trip. Native cigarettes, where listed, are a merchandise category on the cigarette shelf — not a cultural claim. Adults 19+ with photo ID.",
      },
    ],
    faqs: [
      {
        q: "Is this page focused on Little Jamaica?",
        a: "Yes. This page focuses on First Nation Smoke at 1504 Eglinton Ave W on the Little Jamaica / Fairbank stretch of Eglinton West.",
      },
      {
        q: "What is the best next step?",
        a: "Use the homepage for hours and the map, open /visit for TTC and parking, open the 24-hour Eglinton West page for overnight walk-ins, then confirm the current menu before heading over.",
      },
    ],
  },
  {
    slug: "dispensary-near-me-toronto",
    title:
      "First Nation Smoke Cannabis Dispensary Toronto Dispensary Near Me Guide",
    metaDescription:
      "First Nation Smoke Cannabis Dispensary Toronto guide for adults using near-me searches around Eglinton Ave W and Little Jamaica.",
    h1: "First Nation Smoke Cannabis Dispensary Toronto Dispensary Near Me Guide",
    icon: "*",
    heroTagline: "A near-me page tied to 1504 Eglinton Ave W",
    sections: [
      {
        heading: "A Local Near-Me Result On Eglinton West",
        body: "If you searched dispensary near me around Little Jamaica or Fairbank, First Nation Smoke is the walk-in at 1504 Eglinton Ave W. Use the homepage for hours and the map; use /visit for TTC and parking on this corridor only.",
      },
      {
        heading: "Use The Menu For Current Details",
        body: "Use the current menu or ask staff when product names, prices, or other details matter for the visit. Call +1 289 819 5073 before travelling for one item.",
      },
      {
        heading: "Keep The Route On Eglinton West",
        body: "Confirm 1504 Eglinton Ave W, listed hours, and one product category before heading over. Do not treat this as a city-wide Toronto delivery page.",
      },
    ],
    faqs: [
      {
        q: "Is this page focused on Little Jamaica?",
        a: "Yes. This page focuses on First Nation Smoke at 1504 Eglinton Ave W on Eglinton West through Little Jamaica and Fairbank.",
      },
      {
        q: "What is the best next step?",
        a: "Open the homepage map, then /visit for the last block, and confirm the current menu before heading over.",
      },
    ],
  },
  {
    slug: "nicotine-vapes-toronto",
    title: "Nicotine Vapes in Toronto | First Nation Smoke Cannabis Dispensary Toronto",
    absoluteTitle: true,
    metaDescription:
      "Adults 19+: review six verified nicotine vape product pages from First Nation Smoke Cannabis Dispensary Toronto, then check /items/vapes for the current category. Nicotine is addictive.",
    h1: "Nicotine Vapes at First Nation Smoke Cannabis Dispensary Toronto",
    icon: "NV",
    heroTagline: "Adults 19+ · Nicotine is addictive.",
    heroPreview: {
      eyebrow:
        "FIRST NATION SMOKE CANNABIS DISPENSARY TORONTO • LITTLE JAMAICA / FAIRBANK • ADULTS 19+",
      intro:
        "Searching for nicotine vapes near me around Little Jamaica or Fairbank? This adult-only guide features six verified VAPE PENS product pages. Compare the supported product names, then use /items/vapes for the current nicotine category. Product details can change. Nicotine is addictive.",
      products: [
        {
          name: "ENVI DRIP’N 5% — 28K Puffs",
          image:
            "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/1092-Envi-Dripn-28K.webp",
          sourceSlug: "envi-dripn-5-28k-puffs",
        },
        {
          name: "Geek Promax 5% — 30K Puffs",
          image:
            "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/GEEK-PROMAX.jpg",
          sourceSlug: "geek-promax-5-30k-puffs",
        },
        {
          name: "Geek Universe — 25K Puffs",
          image:
            "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/geek_universe_pulse_x_25k.webp",
          sourceSlug: "geek-universe-25k-puffs",
        },
        {
          name: "Level X G2 Pod",
          image:
            "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/1086-Level-X-G2-pod.webp",
          sourceSlug: "level-x-g2-pod",
        },
        {
          name: "NEXA PIX — 30K Puffs — Many Flavors",
          image:
            "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/nexa_showcase_600x600.webp",
          sourceSlug: "nexa-pix-30k-puffs-many-flavors",
        },
        {
          name: "OVNS 10000 5% — 10K Puffs",
          image:
            "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/1081OVNS10000.jpg",
          sourceSlug: "ovns-10000-5-10k-puffs",
        },
      ],
      disclosure:
        "Featured cards are verified starting points, not guarantees of current stock, price or availability.",
      theme: "nicotine",
      menuHref: "/items/vapes",
      primaryLabel: "Browse Nicotine Vapes",
      secondaryLabel: "Compare the Six Featured Items",
      secondaryHref: "#featured-vapes",
      identityStrip:
        "First Nation Smoke Cannabis Dispensary Toronto | Little Jamaica / Fairbank | Adults 19+ | Nicotine is addictive.",
      featuredHeading: "Six Verified Nicotine Vape Cards",
      featuredIntro:
        "This shortlist contains verified ENVI, Geek, Level X, NEXA and OVNS VAPE PENS product pages. Use each card for its supported display name, then rely on /items/vapes for the current First Nation Smoke Cannabis Dispensary Toronto category listing.",
      warning: "Adults 19+. Nicotine is addictive.",
    },
    sections: [
      {
        heading: "Read Each Product Format Carefully",
        body: "The verified Level X G2 listing explicitly identifies a pod. Keep that format attached only to its own product, and do not relabel another featured item unless its current page verifies the same format.",
      },
      {
        heading: "Puff Counts Identify Listings",
        body: "Several verified names include puff counts. Use those numbers to distinguish the listings, not as guarantees of duration, performance or superiority.",
      },
      {
        heading: "Keep Nicotine and Cannabis Vape Routes Separate",
        body: "This adult-only guide uses VAPE PENS products under /items/vapes. THC and cannabis vape products under /items/vape-disposables are excluded.",
      },
      {
        heading: "Review the Current Toronto Category",
        body: "Before choosing, open /items/vapes and the individual product page for current supported details. This guide does not claim prices, stock or guaranteed availability.",
      },
      {
        heading: "Neighbourhood Owner On Eglinton West",
        body: "Area-scoped nicotine vape notes live on /nicotine-vape-eglinton-west. This city info URL is a product-reading guide only. The current shelf remains /items/vapes.",
      },
    ],
    faqs: [
      {
        q: "Where should I check the current nicotine selection?",
        a: "Use /items/vapes. The six featured cards are verified starting points while the current category listing controls selection information.",
      },
      {
        q: "Does every featured item use the same format?",
        a: "No format should be assumed. The verified Level X G2 listing explicitly identifies a pod. Read each remaining product page for its current supported format and details.",
      },
      {
        q: "Does this page include cannabis vapes?",
        a: "No. It covers nicotine products from the VAPE PENS category for adults 19+. THC and cannabis vape products under /items/vape-disposables are excluded.",
      },
    ],
  },
];

export function getSeoPageBySlug(slug: string): SeoPageData | undefined {
  return SEO_PAGES.find((page) => page.slug === slug);
}
