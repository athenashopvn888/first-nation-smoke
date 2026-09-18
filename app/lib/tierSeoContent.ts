export interface TierSeoData {
  seoTitle: string;
  h1Place: string;
  seoIntro: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const TIER_SEO: Record<string, TierSeoData> = {
  EXOTIC: {
    seoTitle: "Exotic Weed on Eglinton West",
    h1Place: "at First Nation Smoke on Eglinton West",
    seoIntro:
      "Exotic is the upper flower wall at 1504 Eglinton Ave W — the lane for shoppers who already know they are not starting in Budget. Compare the live Exotic cards on this page, then confirm the package at the Little Jamaica / Fairbank counter.",
    sections: [
      {
        heading: "Upper shelf on this Eglinton West wall",
        body: "Exotic at First Nation Smoke is a dedicated flower lane, not a city-wide Toronto hunt and not a value bin. Read product name, weight, and posted price on the Exotic cards first. If the visit is really about cheap weed, switch to Budget or AA instead of forcing this shelf.",
      },
      {
        heading: "Confirm the card before you leave Little Jamaica",
        body: "Menus move. Use this Exotic page to shortlist, then ask staff at 1504 Eglinton Ave W before you travel for one strain. Call +1 289 819 5073 if a single listing is the only reason for the trip. No medical claims — adult retail comparison only.",
      },
      {
        heading: "After Exotic: hours, door, or a sibling tier",
        body: "Hours, phone, and the map pin stay on the homepage hub. TTC, driving, and parking sit on /visit. Overnight walk-ins use the 24-hour Eglinton West page. If Exotic is close but not the fit, compare Premium next — not a jump straight to Budget.",
      },
    ],
    faqs: [
      {
        q: "Is Exotic the late-night default at 1504 Eglinton Ave W?",
        a: "No. Exotic is the upper flower lane whenever the door is open, including overnight. It is not a special after-hours menu. The store lists Open 24 Hours on the homepage; this page only owns the Exotic comparison.",
      },
      {
        q: "How is Exotic different from Premium on this Eglinton West wall?",
        a: "Exotic is the higher shelf. Premium sits just below it for shoppers who want a strong flower lane without starting at the top. Budget and AA are the value lanes. Stay inside one tier while you compare cards.",
      },
      {
        q: "Do I need an appointment to compare Exotic flower?",
        a: "No. Adults 19+ with photo ID walk in. Open the Exotic cards here, then the homepage map if you still need the pin, or /visit for the last block from Eglinton West Station.",
      },
    ],
  },
  PREMIUM: {
    seoTitle: "Premium Weed in Little Jamaica",
    h1Place: "for the Little Jamaica walk-in",
    seoIntro:
      "Premium is the in-between flower lane at First Nation Smoke’s Little Jamaica walk-in: above AAA+ and AA, below Exotic. Use this page to compare Premium cards, then match the package at 1504 Eglinton Ave W.",
    sections: [
      {
        heading: "Premium without starting on the top shelf",
        body: "Choose Premium when you want a focused flower comparison and Exotic is more shelf than you need. Read name, format, weight, and posted price on the Premium cards. Do not treat this page as a sale flyer or a medical guide.",
      },
      {
        heading: "Little Jamaica counter, same civic number",
        body: "Premium lives at the same storefront as every other tier: 1504 Eglinton Ave W on Eglinton West through Little Jamaica and Fairbank. If neighbouring shops make the door hard to see, use the homepage map. Phone +1 289 819 5073 for a current listing.",
      },
      {
        heading: "Next step after Premium",
        body: "Move up to Exotic only if you want the upper wall. Move down to AAA+ if Premium is more than the visit needs. For how to reach the door, open /visit. For overnight hours on this corridor, open the 24-hour Eglinton West page. The homepage keeps NAP and the pin.",
      },
    ],
    faqs: [
      {
        q: "Who should start in Premium instead of Exotic?",
        a: "Shoppers who want a strong flower lane without beginning on the top shelf. If the goal is cheap weed, start in Budget or AA instead. Premium is the middle-upper comparison at this Little Jamaica counter.",
      },
      {
        q: "Can I compare Premium flower if I arrive after midnight?",
        a: "Yes, when the homepage still lists Open 24 Hours. Premium is not a daytime-only lane. Use the 24-hour Eglinton West page for overnight corridor notes, then this page for the Premium cards.",
      },
      {
        q: "Where do Premium shoppers go after this page?",
        a: "Homepage for hours and the map, /visit for TTC from Eglinton West Station and curb parking, Exotic if you want to step up, AAA+ if you want to step down.",
      },
    ],
  },
  "AAA+": {
    seoTitle: "AAA+ Weed near Oakwood",
    h1Place: "near Oakwood and Dufferin",
    seoIntro:
      "AAA+ is the middle flower lane at First Nation Smoke, the walk-in near Oakwood Avenue and Dufferin Street on Eglinton West. Compare AAA+ cards here, then confirm the package at 1504 — not on a city-wide Toronto blog.",
    sections: [
      {
        heading: "Middle lane between Premium and AA",
        body: "AAA+ is for shoppers who want a dedicated flower tier without jumping to Exotic or dropping to Budget. Compare posted name, weight, and price on the AAA+ cards. AA is the next value step down; Premium is the next step up. They are not the same lane.",
      },
      {
        heading: "Oakwood and Dufferin are handles, not other shops",
        body: "Oakwood sits east of the door; Dufferin is the close north-south street on the same Eglinton West frontage. Fairbank and Little Jamaica describe this stretch. Match civic 1504. Directions and parking live on /visit; the homepage keeps the map hub.",
      },
      {
        heading: "AAA+ after hours and what to open next",
        body: "The store lists Open 24 Hours. Overnight geometry is on the 24-hour Eglinton West page. After you shortlist AAA+, either walk in with photo ID, call +1 289 819 5073, or switch to Premium or AA if the middle lane is not the fit.",
      },
    ],
    faqs: [
      {
        q: "What is AAA+ for on the Oakwood–Dufferin stretch?",
        a: "AAA+ is the middle flower comparison at 1504 Eglinton Ave W. It is not a second location. Oakwood and Dufferin are how you find this door, not extra storefronts.",
      },
      {
        q: "Is AAA+ the same as AA at First Nation Smoke?",
        a: "No. AAA+ sits above AA. AA is the practical value flower lane; Budget is the first cheap-weed filter. Keep AAA+ and AA on their own pages while you compare.",
      },
      {
        q: "How do I reach the AAA+ wall from Eglinton West Station?",
        a: "Ride Line 1 to Eglinton West Station, continue west on Eglinton Avenue West (32 Eglinton West bus or a surface walk), and match 1504. Full last-block notes are on /visit. Hours stay on the homepage.",
      },
    ],
  },
  AA: {
    seoTitle: "AA Weed on Fairbank",
    h1Place: "on the Fairbank stretch of Eglinton West",
    seoIntro:
      "AA is the practical value flower lane on the Fairbank stretch of Eglinton West. Start here when you want a dedicated tier above Budget without climbing into AAA+ or Premium. Compare the live AA cards, then the package at 1504 Eglinton Ave W.",
    sections: [
      {
        heading: "Value flower that is not the Budget bin",
        body: "AA is for shoppers who care about posted price but still want a named flower tier. Read each AA card for name, weight, and price. If the only filter is cheapest-first, open Budget. If you need the middle lane, open AAA+ instead of stretching AA.",
      },
      {
        heading: "Fairbank means this frontage",
        body: "Fairbank sits around the storefront at 1504 Eglinton Ave W. Little Jamaica is the corridor name for the same walk-in. There is not a separate Fairbank shop. Use the homepage map if signage is tight; use /visit for Dufferin, Oakwood, and Allen Road approaches.",
      },
      {
        heading: "AA overnight and sibling lanes",
        body: "AA stays on the menu whenever the door is listed open, including the 24-hour Eglinton West walk-in. After AA, Budget is the cheaper filter and AAA+ is the step up. Phone +1 289 819 5073 before travelling for one listing.",
      },
    ],
    faqs: [
      {
        q: "When is AA the better first stop than Budget?",
        a: "When you want a value flower lane with more comparison than the cheapest filter. Budget is the first cheap-weed stop. AA is the next dedicated tier on this Fairbank stretch.",
      },
      {
        q: "Does AA stay on the Fairbank walk-in overnight?",
        a: "AA is not a daytime-only page. The store lists Open 24 Hours on the homepage. Use the 24-hour Eglinton West page for overnight corridor notes, then this page for AA cards.",
      },
      {
        q: "How should I confirm an AA listing before I leave?",
        a: "Compare the live AA cards here, then ask staff at 1504 or call +1 289 819 5073. Do not treat an old screenshot as stock. /visit covers how to reach the door; the homepage keeps hours and the pin.",
      },
    ],
  },
  BUDGET: {
    seoTitle: "Budget Weed at 1504 Eglinton Ave W",
    h1Place: "at 1504 Eglinton Ave W",
    seoIntro:
      "Budget is the cheap-weed filter at 1504 Eglinton Ave W: start here when posted price is the first cut, then read the live Budget cards before you walk in on Eglinton West.",
    sections: [
      {
        heading: "Cheap weed as a method, not a promise",
        body: "Budget is the first stop for cheap weed, budget weed, or affordable flower at this store. Compare name, weight, and posted price on the Budget cards. This page does not lock a sale price or guarantee an ounce deal — the counter listing wins.",
      },
      {
        heading: "Same 1504 door as every other tier",
        body: "Budget is not a discount shop on another street. It is a flower lane inside First Nation Smoke at 1504 Eglinton Ave W, Little Jamaica / Fairbank. Adults 19+ with photo ID. Homepage for hours and the map; /visit for TTC and parking.",
      },
      {
        heading: "When to leave Budget for AA or overnight notes",
        body: "If Budget is too thin for the visit, step to AA next — not a leap to Exotic. Overnight walk-ins still use the same Budget lane; open the 24-hour Eglinton West page for after-midnight corridor notes, then return here to compare cards.",
      },
    ],
    faqs: [
      {
        q: "Is Budget the cheap-weed lane at 1504 Eglinton Ave W?",
        a: "Yes. Start in Budget when price is the main filter, then read the current cards. AA is the next value tier if Budget is not enough. This is retail comparison only — no medical claims.",
      },
      {
        q: "Will Budget flower still be the first filter after hours?",
        a: "Yes. Budget is not a lunch-hour-only lane. The store lists Open 24 Hours. Use the 24-hour Eglinton West page to plan the night trip, then this page to compare Budget cards.",
      },
      {
        q: "What should I open besides Budget before I travel?",
        a: "Homepage for the map and hours, /visit for the last block from Eglinton West Station, and AA if you want the next value step. Call +1 289 819 5073 if one Budget listing is the only reason for the trip.",
      },
    ],
  },
};
