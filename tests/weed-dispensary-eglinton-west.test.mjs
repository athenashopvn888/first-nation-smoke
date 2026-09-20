import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const page = readFileSync("app/weed-dispensary-eglinton-west/page.tsx", "utf8");
const paths = readFileSync("app/lib/organicPaths.ts", "utf8");
const mesh = readFileSync("app/components/LocalSeoMesh.tsx", "utf8");
const sitemap = readFileSync("app/sitemap.ts", "utf8");
const cityInfo = readFileSync("app/lib/seoPages.ts", "utf8");
const footer = readFileSync("app/components/Footer.tsx", "utf8");
const home = readFileSync("app/page.tsx", "utf8");
const visit = readFileSync("app/visit/page.tsx", "utf8");
const twentyFour = readFileSync(
  "app/24-hour-eglinton-west-dispensary/page.tsx",
  "utf8",
);
const delivery = readFileSync(
  "app/cannabis-delivery-eglinton-west/page.tsx",
  "utf8",
);
const nativeCigs = readFileSync(
  "app/native-cigarettes-eglinton-west/page.tsx",
  "utf8",
);
const nicotine = readFileSync("app/nicotine-vape-eglinton-west/page.tsx", "utf8");
const owner = readFileSync("app/components/WeedOwnerPage.tsx", "utf8");
const tiers = readFileSync("app/lib/tierSeoContent.ts", "utf8");

const cityBlock = cityInfo.slice(
  cityInfo.indexOf('slug: "toronto-weed-dispensary"'),
  cityInfo.indexOf('slug: "cheap-weed-toronto"'),
);

test("corridor owner has unique H1, title, FAQ schema, and indexable canonical", () => {
  assert.match(page, /<h1 className=\{styles\.h1\}>Weed Dispensary on Eglinton West<\/h1>/);
  assert.match(page, /Weed Dispensary on Eglinton West \| First Nation Smoke/);
  assert.match(page, /faqPageJsonLd\(WEED_DISPENSARY_FAQS\)/);
  assert.match(page, /"@type": "WebPage"/);
  assert.match(page, /name: "Weed Dispensary on Eglinton West"/);
  assert.match(page, /robots: \{ index: true, follow: true \}/);
  assert.match(paths, /weedDispensaryLp: "\/weed-dispensary-eglinton-west"/);
  assert.match(sitemap, /\/weed-dispensary-eglinton-west/);
});

test("corridor owner is area-true, 19+, and does not invent stock or prices", () => {
  assert.match(page, /1504 Eglinton Ave W/);
  assert.match(page, /Little Jamaica/);
  assert.match(page, /Fairbank/);
  assert.match(page, /Adults 19\+/);
  assert.match(page, /does not invent stock or a sale price/);
  assert.match(page, /does not invent flower names, weights, sale prices/);
  assert.doesNotMatch(page, /\$\d+/);
  assert.doesNotMatch(page, /in stock|available now|best price/i);
  assert.doesNotMatch(page, /indigenous/i);
  assert.doesNotMatch(page, /\breserve\b/i);
  assert.doesNotMatch(page, /healing/);
  assert.doesNotMatch(page, /Ottawa|Gatineau|ByWard/);
});

test("city info page meshes toward the corridor owner and is not a new city spam URL", () => {
  assert.match(cityBlock, /canonicalUrl:\s*"https:\/\/www\.firstnationsmokez\.com\/weed-dispensary-eglinton-west"/);
  assert.match(cityBlock, /robots: \{ index: false, follow: true \}/);
  assert.match(cityBlock, /This thin city URL is not the owner/);
  assert.match(cityBlock, /\/weed-dispensary-eglinton-west/);
  assert.doesNotMatch(cityInfo, /slug: "toronto-weed-dispensary-eglinton/);
  assert.doesNotMatch(sitemap, /\/info\/toronto-weed-dispensary/);
});

test("hub, visit, 24h, Big Three, owner, footer, mesh, and tiers point at the corridor", () => {
  assert.match(mesh, /PATHS\.weedDispensaryLp/);
  assert.match(home, /weed-dispensary-eglinton-west/);
  assert.match(visit, /weed-dispensary-eglinton-west/);
  assert.match(twentyFour, /PATHS\.weedDispensaryLp/);
  assert.match(delivery, /PATHS\.weedDispensaryLp/);
  assert.match(nativeCigs, /PATHS\.weedDispensaryLp/);
  assert.match(nicotine, /PATHS\.weedDispensaryLp/);
  assert.match(owner, /weed-dispensary-eglinton-west/);
  assert.match(footer, /href="\/weed-dispensary-eglinton-west"/);
  assert.doesNotMatch(footer, /href="\/info\/toronto-weed-dispensary"/);
  assert.match(tiers, /\/weed-dispensary-eglinton-west/);
});
