import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const home = readFileSync("app/page.tsx", "utf8");
const visit = readFileSync("app/visit/page.tsx", "utf8");
const twentyFour = readFileSync(
  "app/24-hour-eglinton-west-dispensary/page.tsx",
  "utf8",
);
const footer = readFileSync("app/components/Footer.tsx", "utf8");
const navbar = readFileSync("app/components/Navbar.tsx", "utf8");
const sitemap = readFileSync("app/sitemap.ts", "utf8");
const identity = readFileSync("app/lib/storeIdentity.ts", "utf8");
const tierPage = readFileSync("app/[tier]/page.tsx", "utf8");
const mesh = readFileSync("app/components/LocalSeoMesh.tsx", "utf8");
const tierSeo = readFileSync("app/lib/tierSeoContent.ts", "utf8");
const deliveryLp = readFileSync(
  "app/cannabis-delivery-eglinton-west/page.tsx",
  "utf8",
);
const nativeCigsLp = readFileSync(
  "app/native-cigarettes-eglinton-west/page.tsx",
  "utf8",
);
const nicotineLp = readFileSync(
  "app/nicotine-vape-eglinton-west/page.tsx",
  "utf8",
);
const weedDispensaryLp = readFileSync(
  "app/weed-dispensary-eglinton-west/page.tsx",
  "utf8",
);

const WAVE1_BUNDLE = [
  home,
  visit,
  twentyFour,
  footer,
  navbar,
  identity,
  tierPage,
  mesh,
  tierSeo,
  deliveryLp,
  nativeCigsLp,
  nicotineLp,
  weedDispensaryLp,
].join("\n");

test("homepage stays the NAP / hours / map hub", () => {
  assert.match(home, /id="contact"/);
  assert.match(home, /STORE\.mapEmbedUrl/);
  assert.match(home, /STORE\.hoursLabel/);
  assert.match(home, /STORE\.phoneDisplay/);
  assert.match(home, /1504 Eglinton Ave W/);
  assert.match(identity, /gbpWebsitePolicy: "https:\/\/www\.firstnationsmokez\.com\/"/);
  assert.doesNotMatch(home, /Google Business Profile/);
});

test("/visit keeps how-to-reach schema that matches visible NAP copy", () => {
  assert.match(visit, /How to Reach First Nation Smoke on Eglinton West/);
  assert.match(visit, /faqPageJsonLd\(VISIT_FAQS\)/);
  assert.match(visit, /"@type": "WebPage"/);
  assert.match(visit, /1504 Eglinton Ave W, Toronto, ON M6E 2G5/);
  assert.match(visit, /Open 24 Hours/);
  assert.match(visit, /\+1 289 819 5073/);
  assert.match(visit, /canonical: "https:\/\/www\.firstnationsmokez\.com\/visit"/);
});

test("dedicated 24-hour Eglinton West LP is area-true, not city spam", () => {
  assert.match(twentyFour, /24-Hour Dispensary Open Now on Eglinton West/);
  assert.match(twentyFour, /1504 Eglinton Ave W/);
  assert.match(twentyFour, /Little Jamaica/);
  assert.match(twentyFour, /Fairbank/);
  assert.match(twentyFour, /Open 24 Hours/);
  assert.match(twentyFour, /faqPageJsonLd\(TWENTY_FOUR_FAQS\)/);
  assert.match(sitemap, /\/24-hour-eglinton-west-dispensary/);
  assert.match(footer, /24-Hour Eglinton West/);
  assert.match(navbar, /Open Now \/ 24h/);
  assert.doesNotMatch(twentyFour, /24-hour Toronto dispensary directory/i);
  assert.doesNotMatch(twentyFour, /Ottawa|Gatineau|ByWard/i);
});

test("five flower tiers have unique H1 place, title, and FAQ questions", () => {
  const titles = [...tierSeo.matchAll(/seoTitle: "([^"]+)"/g)].map((m) => m[1]);
  const places = [...tierSeo.matchAll(/h1Place: "([^"]+)"/g)].map((m) => m[1]);
  const questions = [...tierSeo.matchAll(/q: "([^"]+)"/g)].map((m) => m[1]);
  assert.equal(titles.length, 5);
  assert.equal(places.length, 5);
  assert.equal(questions.length, 15);
  assert.equal(new Set(titles).size, 5, `duplicate titles: ${titles.join(" | ")}`);
  assert.equal(new Set(places).size, 5, `duplicate h1Place: ${places.join(" | ")}`);
  assert.equal(new Set(questions).size, 15, "FAQ questions must be unique across tiers");
  assert.match(tierSeo, /Exotic Weed on Eglinton West/);
  assert.match(tierSeo, /Premium Weed in Little Jamaica/);
  assert.match(tierSeo, /AAA\+ Weed near Oakwood/);
  assert.match(tierSeo, /AA Weed on Fairbank/);
  assert.match(tierSeo, /Budget Weed at 1504 Eglinton Ave W/);
  assert.match(tierPage, /seo\?\.h1Place/);
  assert.match(tierPage, /faqPageJsonLd\(seo\.faqs\)/);
});

test("internal mesh links homepage, visit, 24h, Big Three, and canonical tiers", () => {
  assert.match(mesh, /PATHS\.home/);
  assert.match(mesh, /PATHS\.visit/);
  assert.match(mesh, /PATHS\.twentyFour/);
  assert.match(mesh, /PATHS\.deliveryLp/);
  assert.match(mesh, /PATHS\.nativeCigarettesLp/);
  assert.match(mesh, /PATHS\.nicotineVapeLp/);
  assert.match(mesh, /PATHS\.weedDispensaryLp/);
  assert.match(mesh, /TIER_CONFIG/);
  assert.match(home, /TWENTY_FOUR_HOUR_HREF/);
  assert.match(home, /href="\/visit"/);
  assert.match(visit, /TWENTY_FOUR_HOUR_HREF/);
  assert.match(visit, /href="\/exotic-weed"/);
  assert.match(twentyFour, /href="\/exotic-weed"/);
  assert.match(twentyFour, /href="\/visit"/);
  assert.match(tierPage, /LocalSeoMesh/);
});

test("wave 1 keeps retail voice and does not add Native or fleet claims", () => {
  assert.doesNotMatch(WAVE1_BUNDLE, /sister store/i);
  assert.doesNotMatch(WAVE1_BUNDLE, /our other locations/i);
  assert.doesNotMatch(WAVE1_BUNDLE, /native reserve dispensary/i);
  assert.doesNotMatch(WAVE1_BUNDLE, /indigenous-owned/i);
  assert.doesNotMatch(WAVE1_BUNDLE, /\breserve\b/i);
  assert.doesNotMatch(WAVE1_BUNDLE, /healing/);
  assert.doesNotMatch(WAVE1_BUNDLE, /Ottawa|Gatineau|ByWard/);
  assert.doesNotMatch(twentyFour, /nicotine pouches/i);
});
