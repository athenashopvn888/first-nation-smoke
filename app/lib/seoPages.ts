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
      "First Nation Smoke Cannabis Dispensary Toronto is a local cannabis dispensary in Toronto around Eglinton Ave W and Little Jamaica, with shopper resources for flower, pre-rolls, edibles, vapes, concentrates, accessories, and listed cigarettes.",
    h1: "First Nation Smoke Cannabis Dispensary Toronto Weed Dispensary in Toronto",
    icon: "*",
    heroTagline: "Menu shopping around Eglinton Ave W and Little Jamaica",
    sections: [
      {
        heading:
          "Shop First Nation Smoke Cannabis Dispensary Toronto With A Plan",
        body: "First Nation Smoke Cannabis Dispensary Toronto helps adult shoppers review the menu by category. Start with the store page, then choose the section that matches the visit: flower, pre-rolls, edibles, THC vapes, concentrates, accessories, or cigarettes where listed.",
      },
      {
        heading: "Local Notes For Eglinton Ave W and Little Jamaica",
        body: "If you searched for a cannabis dispensary near Little Jamaica, use this page to confirm the local store, product categories, and current menu details.",
      },
      {
        heading: "What To Check Before Visiting",
        body: "Confirm the current menu, directions, contact options, and listed hours. For current product names, prices, and package details, use the menu or ask staff before leaving.",
      },
    ],
    faqs: [
      {
        q: "Is First Nation Smoke Cannabis Dispensary Toronto a local cannabis dispensary?",
        a: "Yes. First Nation Smoke Cannabis Dispensary Toronto serves adult shoppers in Toronto around Eglinton Ave W and Little Jamaica. Use the store page for directions, contact details, and listed hours.",
      },
      {
        q: "What should I check before visiting First Nation Smoke Cannabis Dispensary Toronto?",
        a: "Check the current menu, category pages, directions, and contact details before visiting. Product details can change.",
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
        heading: "Keep The Visit Local",
        body: "This guide is connected to First Nation Smoke Cannabis Dispensary Toronto around Eglinton Ave W and Little Jamaica, so shoppers do not land on copied pages for another market.",
      },
    ],
    faqs: [
      {
        q: "Does First Nation Smoke Cannabis Dispensary Toronto list Native cigarettes?",
        a: "The site includes a cigarette category where listed. Confirm current brands and pricing before visiting.",
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
      "First Nation Smoke Cannabis Dispensary Toronto local guide for adults searching for a weed store near Little Jamaica.",
    h1: "First Nation Smoke Cannabis Dispensary Toronto Weed Store Near Little Jamaica",
    icon: "*",
    heroTagline: "Local guide around Little Jamaica",
    sections: [
      {
        heading: "Near Little Jamaica",
        body: "First Nation Smoke Cannabis Dispensary Toronto is tied to the local Eglinton Ave W and Little Jamaica shopping area. Use this page when comparing nearby cannabis menu options and store details.",
      },
      {
        heading: "Little Jamaica Store Details",
        body: "Use the store page for the Eglinton Ave W location, contact details, menu categories, and directions.",
      },
      {
        heading: "Check Before You Go",
        body: "Open the current menu, confirm directions, and use the contact details if a product or category detail matters before the visit.",
      },
    ],
    faqs: [
      {
        q: "Is this page focused on Little Jamaica?",
        a: "Yes. This page focuses on First Nation Smoke Cannabis Dispensary Toronto around Eglinton Ave W and Little Jamaica.",
      },
      {
        q: "What is the best next step?",
        a: "Open the current menu or store page, then confirm directions and contact details before heading over.",
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
    heroTagline: "A near-me page tied to the actual store",
    sections: [
      {
        heading: "A Local Near-Me Result",
        body: "First Nation Smoke serves adults around Eglinton Ave W and Little Jamaica with store details and menu-category links.",
      },
      {
        heading: "Use The Menu For Current Details",
        body: "Use the current menu or ask staff when product names, prices, or other details matter for the visit.",
      },
      {
        heading: "Keep The Route Simple",
        body: "Confirm directions, listed hours, and product category before heading over.",
      },
    ],
    faqs: [
      {
        q: "Is this page focused on Little Jamaica?",
        a: "Yes. This page focuses on First Nation Smoke Cannabis Dispensary Toronto around Eglinton Ave W and Little Jamaica.",
      },
      {
        q: "What is the best next step?",
        a: "Open the current menu or store page, then confirm directions and contact details before heading over.",
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
