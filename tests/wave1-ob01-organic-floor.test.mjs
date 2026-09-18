import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { TIER_SEO } from "../app/lib/tierSeoContent.ts";

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

const WAVE1_BUNDLE = [
  home,
  visit,
  twentyFour,
  footer,
  navbar,
  identity,
  tierPage,
  mesh,
  readFileSync("app/lib/tierSeoContent.ts", "utf8"),
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
  assert.match(twentyFour, /24-Hour Dispensary on Eglinton West/);
  assert.match(twentyFour, /1504 Eglinton Ave W/);
  assert.match(twentyFour, /Little Jamaica/);
  assert.match(twentyFour, /Fairbank/);
  assert.match(twentyFour, /Open 24 Hours/);
  assert.match(twentyFour, /faqPageJsonLd\(TWENTY_FOUR_FAQS\)/);
  assert.match(sitemap, /\/24-hour-eglinton-west-dispensary/);
  assert.match(footer, /24-Hour Eglinton West/);
  assert.match(navbar, /24-Hour Walk-in/);
  assert.doesNotMatch(twentyFour, /24-hour Toronto dispensary directory/i);
  assert.doesNotMatch(twentyFour, /Ottawa|Gatineau|ByWard/i);
});

test("five flower tiers have unique H1 place, title, and FAQ questions", () => {
  const keys = ["EXOTIC", "PREMIUM", "AAA+", "AA", "BUDGET"];
  const titles = new Set();
  const h1Places = new Set();
  const questions = new Set();
  const intros = new Set();

  for (const key of keys) {
    const seo = TIER_SEO[key];
    assert.ok(seo, `missing TIER_SEO.${key}`);
    assert.ok(seo.h1Place.length > 8, `${key} h1Place too short`);
    assert.ok(seo.seoTitle.length > 8, `${key} seoTitle too short`);
    assert.equal(seo.faqs.length, 3, `${key} should have 3 unique FAQs`);
    assert.equal(titles.has(seo.seoTitle), false, `duplicate title ${seo.seoTitle}`);
    assert.equal(h1Places.has(seo.h1Place), false, `duplicate h1Place ${seo.h1Place}`);
    assert.equal(intros.has(seo.seoIntro), false, `duplicate intro for ${key}`);
    titles.add(seo.seoTitle);
    h1Places.add(seo.h1Place);
    intros.add(seo.seoIntro);
    for (const faq of seo.faqs) {
      assert.equal(questions.has(faq.q), false, `duplicate FAQ ${faq.q}`);
      questions.add(faq.q);
      assert.notEqual(
        faq.a,
        "Open the tier, compare the current product details, and ask staff when a note needs a current answer.",
      );
    }
  }

  assert.match(tierPage, /seo\?\.h1Place/);
  assert.match(tierPage, /faqPageJsonLd\(seo\.faqs\)/);
});

test("internal mesh links homepage, visit, 24h, and canonical tiers", () => {
  assert.match(mesh, /href: "\/"/);
  assert.match(mesh, /href: "\/visit"/);
  assert.match(mesh, /TWENTY_FOUR_HOUR_HREF/);
  assert.match(mesh, /TIER_CONFIG/);
  assert.match(home, /TWENTY_FOUR_HOUR_HREF/);
  assert.match(home, /href="\/visit"/);
  assert.match(visit, /TWENTY_FOUR_HOUR_HREF/);
  assert.match(visit, /href="\/exotic-weed"/);
  assert.match(twentyFour, /href="\/exotic-weed"/);
  assert.match(twentyFour, /href="\/visit"/);
  assert.match(tierPage, /LocalSeoMesh/);
});

test("wave 1 does not add smoke SEO verticals, fleet language, or Native claims", () => {
  assert.doesNotMatch(WAVE1_BUNDLE, /sister store/i);
  assert.doesNotMatch(WAVE1_BUNDLE, /our other locations/i);
  assert.doesNotMatch(WAVE1_BUNDLE, /native reserve dispensary/i);
  assert.doesNotMatch(WAVE1_BUNDLE, /indigenous-owned/i);
  assert.doesNotMatch(WAVE1_BUNDLE, /\breserve\b/i);
  assert.doesNotMatch(WAVE1_BUNDLE, /healing/);
  assert.doesNotMatch(WAVE1_BUNDLE, /Ottawa|Gatineau|ByWard/);
  assert.doesNotMatch(twentyFour, /\/native-cigarettes-/);
  assert.doesNotMatch(twentyFour, /nicotine pouches/i);
});
