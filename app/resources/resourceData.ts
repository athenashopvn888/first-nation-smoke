export interface ResourceCard {
  title: string;
  href: string;
  text: string;
}

export interface ResourceSection {
  heading: string;
  body: string;
  bullets?: string[];
}

export interface ResourcePage {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  eyebrow: string;
  intro: string;
  cards: ResourceCard[];
  sections: ResourceSection[];
}

export const RESOURCE_PAGES: ResourcePage[] = [
  {
    slug: "",
    title: "First Nation Smoke Cannabis Dispensary Toronto Resources",
    seoTitle:
      "First Nation Smoke Cannabis Dispensary Toronto Resources | Menu and Shopping Guides",
    description:
      "Resource guides for shopping the First Nation Smoke Cannabis Dispensary Toronto menu in Toronto, including flower, value, pre-rolls, and Native smokes where listed.",
    eyebrow: "Resource Centre",
    intro:
      "This First Nation Smoke resource library is built for a practical Eglinton West visit. Choose the question you need answered, use the guide to narrow the site, and finish with the store's current public category.",
    cards: [
      {
        title: "Menu Guide",
        href: "/resources/menu-guide",
        text: "Pick the category first, then compare the details that matter.",
      },
      {
        title: "Flower Guide",
        href: "/resources/flower-guide",
        text: "Compare Exotic, Premium, AAA+, AA, and Budget flower tiers.",
      },
      {
        title: "Value Guide",
        href: "/resources/value-guide",
        text: "A cleaner way to think about cheap weed, budget weed, and affordable weed.",
      },
      {
        title: "Pre-Roll Guide",
        href: "/resources/pre-roll-guide",
        text: "Keep pre-roll shopping separate from flower, edibles, vapes, and concentrates.",
      },
      {
        title: "Native Smokes",
        href: "/resources/native-smokes",
        text: "Brand names and carton notes for the cigarette menu where listed.",
      },
    ],
    sections: [
      {
        heading: "Separate Trip Planning From Menu Planning",
        body: "The Toronto store page covers the stop itself. The Resource pages explain how to navigate flower shelves, pre-roll formats, value choices, and Native smokes without treating every type of listing the same way.",
        bullets: [
          "Confirm the Eglinton West visit on the store page.",
          "Choose one guide that matches the shopping goal.",
          "Recheck the current category when item-level details matter.",
        ],
      },
      {
        heading: "Local Notes For Little Jamaica / Fairbank",
        body: "Shoppers searching around Eglinton Avenue West, Little Jamaica, Fairbank, or Oakwood Village can move through the site in three clear steps: store information, category guidance, then the current menu listing.",
      },
    ],
  },
  {
    slug: "menu-guide",
    title:
      "How To Shop The First Nation Smoke Cannabis Dispensary Toronto Menu",
    seoTitle:
      "First Nation Smoke Cannabis Dispensary Toronto Menu Guide | Toronto Weed Dispensary Tips",
    description:
      "How to shop the First Nation Smoke Cannabis Dispensary Toronto menu by category, with natural tips for flower, pre-rolls, edibles, THC vapes, concentrates, and value shopping.",
    eyebrow: "Menu Guide",
    intro:
      "Use the menu guide to explore flower tiers, pre-roll formats, edibles, vapes, concentrates, accessories, and cigarettes. Choose a category, then compare the formats and pricing shown on the menu.",
    cards: [
      {
        title: "Flower Guide",
        href: "/resources/flower-guide",
        text: "Compare Exotic, Premium, AAA+, AA, and Budget flower tiers.",
      },
      {
        title: "Value Guide",
        href: "/resources/value-guide",
        text: "A cleaner way to think about cheap weed, budget weed, and affordable weed.",
      },
      {
        title: "Pre-Roll Guide",
        href: "/resources/pre-roll-guide",
        text: "Keep pre-roll shopping separate from flower, edibles, vapes, and concentrates.",
      },
      {
        title: "Native Smokes",
        href: "/resources/native-smokes",
        text: "Brand names and carton notes for the cigarette menu where listed.",
      },
    ],
    sections: [
      {
        heading: "Start With The Reason For The Visit",
        body: "A flower visit begins with a shelf level. A format-driven visit begins with its category. Keeping that purpose fixed for the first pass prevents a long Toronto menu from becoming an unfocused comparison.",
        bullets: [
          "For flower, choose among the five shelf pages.",
          "For pre-rolls, begin with the displayed package style.",
          "For other formats, read the details inside that dedicated section.",
        ],
      },
      {
        heading: "Use The Guide For Method, Not Inventory",
        body: "The menu guide stays useful because it explains a browsing order. Product names, package details, and posted prices belong to the current First Nation Smoke listing and should be checked there.",
      },
    ],
  },
  {
    slug: "flower-guide",
    title: "First Nation Smoke Cannabis Dispensary Toronto Flower Guide",
    seoTitle:
      "First Nation Smoke Cannabis Dispensary Toronto Flower Guide | Exotic, Premium, Budget",
    description:
      "Compare exotic flower, premium flower, budget weed, cheap weed, and affordable weed at First Nation Smoke Cannabis Dispensary Toronto with current menu details.",
    eyebrow: "Flower Guide",
    intro:
      "First Nation Smoke organizes flower into Exotic, Premium, AAA+, AA, and Budget shelves. Select one shelf as the starting boundary, then compare the current entries within it before moving elsewhere.",
    cards: [
      {
        title: "Exotic Flower",
        href: "/exotic",
        text: "Start here when you want the higher shelf flower lane.",
      },
      {
        title: "Premium Flower",
        href: "/premium",
        text: "A strong lane for shoppers comparing quality and value.",
      },
      {
        title: "AAA+ Flower",
        href: "/aaa",
        text: "A clear middle lane for flower comparison.",
      },
      {
        title: "AA Flower",
        href: "/aa",
        text: "A straight value-minded flower lane.",
      },
      {
        title: "Budget Flower",
        href: "/budget",
        text: "Start here when cheap weed or affordable weed is the goal.",
      },
    ],
    sections: [
      {
        heading: "Treat The Tier As A Starting Boundary",
        body: "Once a shelf is open, compare the listed name, size, format, posted price, and page notes together. Those fields make more sense inside one tier than in a single mixed flower list.",
      },
      {
        heading: "Change Shelves With A Reason",
        body: "Move from one First Nation Smoke tier to another only when the current shelf does not fit the visit. Restarting the comparison keeps different price and shelf goals from blurring together.",
      },
    ],
  },
  {
    slug: "value-guide",
    title: "First Nation Smoke Cannabis Dispensary Toronto Value Guide",
    seoTitle:
      "First Nation Smoke Cannabis Dispensary Toronto Value Guide | Cheap Weed and Budget Weed",
    description:
      "A practical value guide for shoppers comparing cheap weed, budget weed, affordable weed, and menu categories at First Nation Smoke Cannabis Dispensary Toronto.",
    eyebrow: "Value Guide",
    intro:
      "A value-first flower browse at First Nation Smoke can begin with Budget and AA, while other product types should stay in their own categories and use the public details shown there.",
    cards: [
      {
        title: "Budget Flower",
        href: "/budget",
        text: "The first stop for cheap weed and affordable weed comparisons.",
      },
      {
        title: "AA Flower",
        href: "/aa",
        text: "A simple value lane for flower shoppers.",
      },
      {
        title: "Menu Guide",
        href: "/resources/menu-guide",
        text: "Use this when you are comparing more than flower.",
      },
    ],
    sections: [
      {
        heading: "Give The Lowest Shelves The First Pass",
        body: "Open Budget first and AA second when the plan is specifically value-led flower. Only widen the search after checking what those current Eglinton West menu pages present.",
      },
      {
        heading: "Price Needs Its Listing Context",
        body: "Read the displayed name, size, format, and price as one unit. If a detail essential to the choice is missing, confirm it with the store instead of filling the gap from older content.",
      },
    ],
  },
  {
    slug: "pre-roll-guide",
    title: "First Nation Smoke Cannabis Dispensary Toronto Pre-Roll Guide",
    seoTitle:
      "First Nation Smoke Cannabis Dispensary Toronto Pre-Roll Guide | Toronto Cannabis Menu Tips",
    description:
      "How to compare pre-rolls at First Nation Smoke Cannabis Dispensary Toronto without mixing them up with flower, edibles, THC vapes, and concentrates.",
    eyebrow: "Pre-Roll Guide",
    intro:
      "First Nation Smoke pre-roll listings are easier to compare when the package style comes first. Identify the displayed single, pack, infused, or other format before weighing the remaining details.",
    cards: [
      {
        title: "Pre-Rolls",
        href: "/items/prerolls",
        text: "Open the current pre-roll category.",
      },
      {
        title: "Menu Guide",
        href: "/resources/menu-guide",
        text: "Use this if you are still choosing between categories.",
      },
    ],
    sections: [
      {
        heading: "Sort The Page By Format In Your Head",
        body: "Group together current listings that serve the same kind of pre-roll stop. Then compare their displayed count, package notes, and price without pulling loose flower into the decision.",
      },
      {
        heading: "A New Category Means A New Comparison",
        body: "If the plan changes to flower, edibles, vapes, or concentrates, open that First Nation Smoke section and begin again. Pre-roll format is not a useful filter for those pages.",
      },
    ],
  },
  {
    slug: "resource-centre-launch",
    title:
      "First Nation Smoke Cannabis Dispensary Toronto Resource Centre Launch",
    seoTitle:
      "First Nation Smoke Cannabis Dispensary Toronto Resource Centre Launch",
    description:
      "The First Nation Smoke Cannabis Dispensary Toronto resource centre gives shoppers cleaner menu guides for flower, value, pre-rolls, and store visits.",
    eyebrow: "Resource Update",
    intro:
      "The First Nation Smoke Resource Centre gives Little Jamaica and Fairbank shoppers a stable map of the site while keeping current product listings on the menu itself.",
    cards: [
      {
        title: "Menu Guide",
        href: "/resources/menu-guide",
        text: "Pick the category first, then compare the details that matter.",
      },
      {
        title: "Flower Guide",
        href: "/resources/flower-guide",
        text: "Compare Exotic, Premium, AAA+, AA, and Budget flower tiers.",
      },
      {
        title: "Value Guide",
        href: "/resources/value-guide",
        text: "A cleaner way to think about cheap weed, budget weed, and affordable weed.",
      },
      {
        title: "Pre-Roll Guide",
        href: "/resources/pre-roll-guide",
        text: "Keep pre-roll shopping separate from flower, edibles, vapes, and concentrates.",
      },
      {
        title: "Native Smokes",
        href: "/resources/native-smokes",
        text: "Brand names and carton notes for the cigarette menu where listed.",
      },
    ],
    sections: [
      {
        heading: "A Map For The Store Site",
        body: "The hub brings flower, value, pre-roll, cigarette, and visit guidance together without pretending that evergreen articles can replace current category pages.",
      },
      {
        heading: "Move From Context To Current Details",
        body: "Begin here for the browsing method, continue to the matching menu section for public listings, and use the Toronto store page when the Eglinton West trip information is the priority.",
      },
    ],
  },
  {
    slug: "native-smokes",
    title:
      "First Nation Smoke Cannabis Dispensary Toronto Native Smokes Resource",
    seoTitle:
      "First Nation Smoke Cannabis Dispensary Toronto Native Smokes | $25 Carton Notes",
    description:
      "First Nation Smoke Cannabis Dispensary Toronto Native smokes resource with cigarette brand names shown on the menu and $25 carton notes where listed.",
    eyebrow: "Native Smokes",
    intro:
      "Native smokes are a distinct part of the First Nation Smoke menu. Use this overview to understand brand families, variant words, and carton notes, then open the live cigarette category for the store's current public list.",
    cards: [
      {
        title: "Cigarette Menu",
        href: "/items/cigarettes",
        text: "Open the current cigarette category before making the trip.",
      },
      {
        title: "Native Cigarettes Guide",
        href: "/resources/native-smokes/native-cigarettes-guide",
        text: "Brand notes and a cleaner shopping checklist.",
      },
      {
        title: "Store Page",
        href: "/weed-dispensary-toronto",
        text: "Use the store page for directions, contact options, and listed hours.",
      },
    ],
    sections: [
      {
        heading: "Read Brand Families And Variants Separately",
        body: "The First Nation Smoke category has shown Canadian, Putters, Canadian Goose, Canadian Classics, Rolled Gold, Nexus, and Time names. Variant words such as full, light, silver, or menthol complete the label and should be read with the current entry.",
        bullets: [
          "Canadian Lights",
          "Canadian Full",
          "Putters",
          "Canadian Goose Full",
          "Canadian Goose Lights",
          "Canadian Menthol",
          "Canadian Classics Original",
          "Canadian Classics Silver",
          "* Rolled Gold Lights",
          "Nexus Full",
          "Nexus Lights",
          "Time Full",
        ],
      },
      {
        heading: "Match A Carton Note To Its Current Entry",
        body: "Some cigarette listings have carried a $25 carton-style note. Check which brand and variant the current page attaches it to rather than treating it as a general price statement.",
      },
      {
        heading: "Complete The Cigarette Check On Its Own",
        body: "Finish the Native smokes decision in the cigarette category. For cannabis during the same Toronto stop, return to the main menu and choose that product type independently.",
      },
    ],
  },
  {
    slug: "native-smokes/native-cigarettes-guide",
    title:
      "First Nation Smoke Cannabis Dispensary Toronto Native Cigarettes Guide",
    seoTitle:
      "First Nation Smoke Cannabis Dispensary Toronto Native Cigarettes Guide | Brands and Carton Notes",
    description:
      "A shopper-friendly Native cigarettes guide for First Nation Smoke Cannabis Dispensary Toronto, including brand names shown on the menu and $25 carton notes where listed.",
    eyebrow: "Native Cigarettes Guide",
    intro:
      "A cigarette listing can look similar to the next one until the full label is read. On the First Nation Smoke page, scan the family name, variant, carton detail, and posted price in that order.",
    cards: [
      {
        title: "Cigarette Menu",
        href: "/items/cigarettes",
        text: "Open the current cigarette category before making the trip.",
      },
      {
        title: "Native Cigarettes Guide",
        href: "/resources/native-smokes/native-cigarettes-guide",
        text: "Brand notes and a cleaner shopping checklist.",
      },
      {
        title: "Store Page",
        href: "/weed-dispensary-toronto",
        text: "Use the store page for directions, contact options, and listed hours.",
      },
    ],
    sections: [
      {
        heading: "Use The Complete Label",
        body: "Canadian, Putters, Canadian Goose, Canadian Classics, Rolled Gold, Nexus, and Time families have appeared in the category. Read the following full, light, silver, or menthol wording before comparing the rest of the listing.",
        bullets: [
          "Canadian Lights",
          "Canadian Full",
          "Putters",
          "Canadian Goose Full",
          "Canadian Goose Lights",
          "Canadian Menthol",
          "Canadian Classics Original",
          "Canadian Classics Silver",
          "* Rolled Gold Lights",
          "Nexus Full",
          "Nexus Lights",
          "Time Full",
        ],
      },
      {
        heading: "Confirm A Specific Variant When Needed",
        body: "If the Little Jamaica visit depends on one exact cigarette label, use the current category and contact the store if the public entry leaves an important question unanswered.",
      },
      {
        heading: "Finish With The Store's Current List",
        body: "This guide supplies the reading order. The live cigarette category supplies the public entries that First Nation Smoke currently presents."
      },
    ],
  },
];

export const RESOURCE_HOME = RESOURCE_PAGES[0];

export function getResourcePage(slug: string) {
  const cleanSlug = slug.replace(/^\/+|\/+$/g, "");
  return RESOURCE_PAGES.find((page) => page.slug === cleanSlug);
}
