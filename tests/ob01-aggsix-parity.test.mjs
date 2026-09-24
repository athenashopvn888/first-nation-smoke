import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { TIER_SEO } from "../app/lib/tierSeoContent.ts";
import {
  DOCUMENT_TITLE_BRAND,
  renderedDocumentTitle,
  storeClaimsOpen24Hours,
} from "../app/lib/storeIdentity.ts";

const read = (relativePath) =>
  fs.readFileSync(new URL(`../${relativePath}`, import.meta.url), "utf8");

const CORRIDOR = /Eglinton West|Little Jamaica|Fairbank|Oakwood|Dufferin|1504 Eglinton/;
const WEIGHT_FAIL = /(?<![0-9.])(?:3\.5|7)\s?g/i;

const SISTER_SENTENCE_DENYLIST = [
  "Open the cigarette menu or ask at the Parkdale counter before you travel for one specific pack.",
  "The counter is inside Green Pentagon Cannabis at 1267 Queen St W, Toronto, ON M6K 2J2, on Queen Street West between Dufferin and Brock.",
  "If you need a light, full, or menthol style, open the cigarette category and confirm it before you leave for Parkdale.",
  "The 501 Queen streetcar serves this stretch; Dufferin and Brock are the useful stops, and the visit page covers parking along Queen West.",
  "These cards are a limited evidence set, not a complete selection.",
  "The cards are not a complete selection or a claim about current stock, price, or availability.",
  "This page is limited to live-checked nicotine products from the VAPE PENS category.",
  "Own this stretch — Queen West, Parkdale Village, Queen & Dufferin, Brock — rather than a generic Toronto dispensary query.",
  "Queen Lansdowne Cannabis lists Native cigarettes in the in-store cigarette category at 1472 Queen St W.",
  "Use the nicotine vape category at /items/vapes. This Queen West page is neighbourhood context.",
  "Take the 501 Queen streetcar to Queen Street West at Lansdowne Avenue, then stay on Queen Street and look for the Queen Lansdowne Cannabis sign on the south side.",
  "Nicotine vapes at the Parkdale edge of Queen West are a separate shelf from cannabis vapes.",
];

function brandCount(title) {
  return title.split(DOCUMENT_TITLE_BRAND).length - 1;
}

function words(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

function jaccard8(left, right) {
  const grams = (source) => {
    const tokens = words(source);
    const set = new Set();
    for (let i = 0; i <= tokens.length - 8; i += 1) {
      set.add(tokens.slice(i, i + 8).join(" "));
    }
    return set;
  };
  const a = grams(left);
  const b = grams(right);
  let overlap = 0;
  for (const gram of a) if (b.has(gram)) overlap += 1;
  const union = a.size + b.size - overlap;
  return union === 0 ? 0 : overlap / union;
}

test("G1 corridor tokens are in every flower tier title and H1 place, and in cig and vape owners", () => {
  for (const [key, tier] of Object.entries(TIER_SEO)) {
    assert.match(tier.seoTitle, CORRIDOR, `${key} title missing corridor token`);
    assert.match(tier.h1Place, CORRIDOR, `${key} H1 missing corridor token`);
    assert.doesNotMatch(tier.seoTitle, /\bToronto\b/, `${key} title uses Toronto as an owner`);
    assert.doesNotMatch(tier.h1Place, /\bToronto\b/, `${key} H1 uses Toronto as an owner`);
    assert.equal(brandCount(renderedDocumentTitle(tier.seoTitle)), 1, tier.seoTitle);
  }

  const tierPage = read("app/[tier]/page.tsx");
  assert.match(tierPage, /seo\?\.h1Place/);

  const cig = read("app/native-cigarettes-eglinton-west/page.tsx");
  const vape = read("app/nicotine-vape-eglinton-west/page.tsx");
  assert.match(cig, /Native Cigarettes on Eglinton West \| First Nation Smoke/);
  assert.match(cig, /<h1 className=\{styles\.h1\}>Native Cigarettes on Eglinton West<\/h1>/);
  assert.match(vape, /Nicotine Vapes on Eglinton West \| First Nation Smoke/);
  assert.match(vape, /<h1 className=\{styles\.h1\}>Nicotine Vapes on Eglinton West<\/h1>/);
  assert.doesNotMatch(cig, /<h1[^>]*>\s*Native [Cc]igarettes\s*</);
  assert.doesNotMatch(vape, /<h1[^>]*>\s*Nicotine Vape\s*</);
});

test("G2 every tier route builds CollectionPage and a stocked ItemList plus FAQ", () => {
  const tierPage = read("app/[tier]/page.tsx");
  assert.match(tierPage, /"@type": "CollectionPage"/);
  assert.match(tierPage, /"@type": "ItemList"/);
  assert.match(tierPage, /itemListElement: flowers\.map/);
  assert.match(tierPage, /numberOfItems: flowers\.length/);
  assert.match(tierPage, /faqPageJsonLd\(seo\.faqs\)/);
  assert.doesNotMatch(tierPage, /"@type": "Offer"/);
  for (const tier of Object.values(TIER_SEO)) {
    assert.ok(tier.faqs.length >= 3, tier.seoTitle);
  }
  assert.match(read("app/lib/storeIdentity.ts"), /"@type": "CannabisStore"/);
});

test("G3 homepage hub cards follow the site's own 24-hour claim", () => {
  const home = read("app/page.tsx");
  const hoursPage = read("app/24-hour-eglinton-west-dispensary/page.tsx");
  assert.equal(storeClaimsOpen24Hours(), true);
  assert.match(home, /className=\{styles\.hubCard\}/);
  assert.match(home, /onlyWhen24h: true/);
  assert.match(home, /storeClaimsOpen24Hours\(\)/);
  for (const href of [
    "/weed-dispensary-eglinton-west",
    "/24-hour-eglinton-west-dispensary",
    "/cannabis-delivery-eglinton-west",
    "/native-cigarettes-eglinton-west",
    "/nicotine-vape-eglinton-west",
    "/visit",
  ]) {
    assert.match(home, new RegExp(`href: "${href}"`));
  }
  assert.match(hoursPage, /if \(!storeClaimsOpen24Hours\(\)\) notFound\(\)/);
  assert.match(read("app/sitemap.ts"), /24-hour-eglinton-west-dispensary/);
});

test("G4 Eglinton West cig and vape copy does not reuse sister-store sentences", () => {
  const corpus = [
    read("app/native-cigarettes-eglinton-west/page.tsx"),
    read("app/nicotine-vape-eglinton-west/page.tsx"),
    read("app/lib/tierSeoContent.ts"),
  ].join("\n");
  for (const sentence of SISTER_SENTENCE_DENYLIST) {
    assert.ok(sentence.length >= 60, sentence);
    assert.equal(corpus.includes(sentence), false, `shared sister sentence: ${sentence}`);
  }
  assert.doesNotMatch(corpus, /Queen Lansdowne|Green Pentagon|Gas Junction|King Rock|Kensington Green|PLANETS 59|1472 Queen|1267 Queen/);
  const sisterBlob = SISTER_SENTENCE_DENYLIST.join(" ");
  const cig = read("app/native-cigarettes-eglinton-west/page.tsx");
  const vape = read("app/nicotine-vape-eglinton-west/page.tsx");
  assert.ok(jaccard8(cig, sisterBlob) < 0.05, "cig jaccard");
  assert.ok(jaccard8(vape, sisterBlob) < 0.05, "vape jaccard");
});

test("G5 document title guard keeps the brand to one occurrence", () => {
  const layout = read("app/layout.tsx");
  assert.match(layout, /template: "%s \| First Nation Smoke"/);
  assert.match(layout, /First Nation Smoke \| Eglinton West \/ Little Jamaica/);
  assert.doesNotMatch(layout, /template: "%s \| First Nation Smoke Cannabis Dispensary Toronto"/);

  const samples = [
    "FAQ | First Nation Smoke on Eglinton West",
    "Contact Us — First Nation Smoke Cannabis Dispensary Toronto | 1504 Eglinton Ave W, Toronto",
    "Pink Joker | Premium Weed | First Nation Smoke Cannabis Dispensary Toronto",
    "Native Cigarettes on Eglinton West | First Nation Smoke",
    "Foo | First Nation Smoke | First Nation Smoke",
    "First Nation Smoke | First Nation Smoke",
    "Exotic Weed on Eglinton West | First Nation Smoke Cannabis Dispensary Toronto | First Nation Smoke",
  ];
  for (const sample of samples) {
    const rendered = renderedDocumentTitle(sample);
    assert.equal(brandCount(rendered), 1, rendered);
  }
  assert.equal(
    renderedDocumentTitle("Delivery Menu"),
    "Delivery Menu | First Nation Smoke",
  );
  assert.equal(
    renderedDocumentTitle("Exotic Weed on Eglinton West"),
    "Exotic Weed on Eglinton West | First Nation Smoke",
  );

  for (const file of [
    "app/[tier]/page.tsx",
    "app/flower/[slug]/page.tsx",
    "app/item/[slug]/page.tsx",
    "app/items/[category]/page.tsx",
    "app/info/[seoPage]/page.tsx",
    "app/delivery/page.tsx",
    "app/resources/page.tsx",
    "app/resources/[...slug]/page.tsx",
  ]) {
    assert.match(read(file), /resolveDocumentTitle\(/, file);
  }
  assert.doesNotMatch(read("app/flower/[slug]/page.tsx"), /Toronto Toronto/);
  assert.doesNotMatch(read("app/item/[slug]/page.tsx"), /Toronto Toronto/);
});

test("G6 mobile age gate stays inside the viewport and the menu has a hamburger label", () => {
  const ageCss = read("app/components/AgeGate.module.css");
  const ageGate = read("app/components/AgeGate.tsx");
  const nav = read("app/components/Navbar.tsx");
  assert.match(ageCss, /max-width:\s*100vw/);
  assert.match(ageCss, /max-height:\s*calc\(100dvh - 32px\)/);
  assert.match(ageCss, /overscroll-behavior:\s*contain/);
  assert.match(ageCss, /\.btnRow > \*/);
  assert.match(ageCss, /flex-direction:\s*column/);
  assert.match(ageGate, /document\.body\.style\.overflow = "hidden"/);
  assert.match(nav, /aria-label=\{menuOpen \? "Close menu" : "Open menu"\}/);
  assert.match(nav, /aria-controls="mobile-store-menu"/);
  assert.match(nav, /aria-label="Site menu"/);
  assert.match(nav, /d="M4 6h16M4 12h16M4 18h16"/);
});

test("G7 flower copy does not use 3.5g or 7g", () => {
  const root = new URL("../app", import.meta.url);
  const files = [];
  const walk = (directory) => {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const fullPath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
        continue;
      }
      if (!/\.(tsx|ts|css)$/.test(entry.name)) continue;
      if (/flowers\.json|items\.json|delivery-menu\.json/.test(entry.name)) continue;
      files.push(fullPath);
    }
  };
  walk(root.pathname);
  assert.ok(files.length > 20);
  for (const file of files) {
    const source = fs.readFileSync(file, "utf8");
    assert.equal(WEIGHT_FAIL.test(source), false, file);
  }
});

test("G8 apex redirects to www and visit canonical plus NAP stay on the current hours", () => {
  const config = read("next.config.ts");
  const visit = read("app/visit/page.tsx");
  const footer = read("app/components/Footer.tsx");
  const layout = read("app/layout.tsx");
  assert.match(config, /type: "host", value: "firstnationsmokez\.com"/);
  assert.match(config, /destination: "https:\/\/www\.firstnationsmokez\.com\/:path\*"/);
  assert.match(layout, /canonical: "https:\/\/www\.firstnationsmokez\.com"/);
  assert.match(visit, /canonical: "https:\/\/www\.firstnationsmokez\.com\/visit"/);
  assert.match(visit, /Eglinton West Station/);
  assert.match(visit, /32 Eglinton West/);
  assert.match(visit, /parking/i);
  assert.match(footer, /\+1 289 819 5073/);
  assert.match(footer, /1504 Eglinton Ave W/);
  assert.match(footer, /Open 24 Hours/);
  assert.match(footer, /M6E 2G5/);
  assert.equal(storeClaimsOpen24Hours(), true);
});

test("G9 generic Toronto dispensary URL is noindex with a canonical away from itself", () => {
  const city = read("app/weed-dispensary-toronto/page.tsx");
  const robots = read("app/robots.ts");
  const sitemap = read("app/sitemap.ts");
  assert.match(city, /index:\s*false/);
  assert.match(city, /follow:\s*true/);
  assert.match(city, /canonical: "https:\/\/www\.firstnationsmokez\.com\/"/);
  assert.doesNotMatch(city, /canonical: "https:\/\/www\.firstnationsmokez\.com\/weed-dispensary-toronto"/);
  assert.doesNotMatch(sitemap, /\/weed-dispensary-toronto/);
  assert.match(robots, /allow: "\/"/);
  assert.match(robots, /disallow: \["\/api\/", "\/staff-photo", "\/staff-photo\/"\]/);
  assert.match(robots, /sitemap: "https:\/\/www\.firstnationsmokez\.com\/sitemap\.xml"/);
});

test("G10 Native wording stays a merchandise category and public pages stay standalone", () => {
  const publicFiles = [
    "app/page.tsx",
    "app/visit/page.tsx",
    "app/components/Footer.tsx",
    "app/components/Navbar.tsx",
    "app/native-cigarettes-eglinton-west/page.tsx",
    "app/nicotine-vape-eglinton-west/page.tsx",
    "app/weed-dispensary-eglinton-west/page.tsx",
    "app/24-hour-eglinton-west-dispensary/page.tsx",
    "app/cannabis-delivery-eglinton-west/page.tsx",
    "app/lib/storeIdentity.ts",
    "app/lib/tierSeoContent.ts",
    "app/lib/gbp-location.ts",
    "app/lib/seoPages.ts",
    "app/components/WeedOwnerPage.tsx",
  ];
  const banned = /Athena|sister store|our other locations|fleet of stores|Queen Lansdowne|Green Pentagon|Gas Junction|King Rock|Kensington Green|PLANETS 59|Ottawa|Gatineau|ByWard|Jane Finch|Indigenous|tax-exempt|\btreaty\b|\bhealing\b|\breserve\b|indigenous-owned|First Nation owned|band council/i;
  for (const file of publicFiles) {
    assert.doesNotMatch(read(file), banned, file);
  }
  const cig = read("app/native-cigarettes-eglinton-west/page.tsx");
  assert.match(cig, /merchandise category/);
  assert.match(cig, /First Nation Smoke/);
  assert.match(read("app/components/WeedOwnerPage.tsx"), /No additional ownership, cultural or affiliation claim is made here/);
});
