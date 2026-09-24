import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const layout = readFileSync("app/layout.tsx", "utf8");
const home = readFileSync("app/page.tsx", "utf8");
const visit = readFileSync("app/visit/page.tsx", "utf8");
const identity = readFileSync("app/lib/storeIdentity.ts", "utf8");
const footer = readFileSync("app/components/Footer.tsx", "utf8");
const sitemap = readFileSync("app/sitemap.ts", "utf8");
const cityPage = readFileSync("app/weed-dispensary-toronto/page.tsx", "utf8");
const deliveryPage = readFileSync("app/weed-delivery-toronto/page.tsx", "utf8");
const littleJamaica = readFileSync("app/lib/seoPages.ts", "utf8");
const owner = readFileSync("app/components/WeedOwnerPage.tsx", "utf8");
const twentyFour = readFileSync(
  "app/24-hour-eglinton-west-dispensary/page.tsx",
  "utf8",
);
const tierSeo = readFileSync("app/lib/tierSeoContent.ts", "utf8");

const publicBundle = [
  layout,
  home,
  visit,
  identity,
  footer,
  littleJamaica,
  owner,
  twentyFour,
  tierSeo,
].join("\n");

test("homepage schema identity is CannabisStore + FAQPage with exact NAP", () => {
  assert.match(layout, /cannabisStoreJsonLd/);
  assert.match(layout, /faqPageJsonLd/);
  assert.match(identity, /"@type": "CannabisStore"/);
  assert.match(identity, /"@type": "FAQPage"/);
  assert.match(identity, /1504 Eglinton Ave W/);
  assert.match(identity, /Toronto/);
  assert.match(identity, /M6E 2G5/);
  assert.match(identity, /\+12898195073/);
  assert.match(identity, /\+1 289 819 5073/);
  assert.match(identity, /opens: "00:00"/);
  assert.match(identity, /closes: "23:59"/);
  assert.match(identity, /www\.firstnationsmokez\.com/);
  assert.doesNotMatch(identity, /7Clmh\.jpg/);
  assert.doesNotMatch(layout, /7Clmh\.jpg/);
});

test("homepage is the visit hub with unique Eglinton West corridor copy", () => {
  assert.match(home, /FIRST NATION SMOKE CANNABIS DISPENSARY TORONTO/);
  assert.match(home, /Eglinton West walk-in · Little Jamaica · Fairbank/);
  assert.match(home, /STORE\.mapEmbedUrl/);
  assert.match(home, /href="\/visit"/);
  assert.match(home, /id="contact"/);
  assert.match(layout, /First Nation Smoke \| Eglinton West \/ Little Jamaica/);
  assert.doesNotMatch(home, /Shop The Menu With A Plan/);
  assert.doesNotMatch(home, /Premium Cannabis Dispensary/);
  assert.doesNotMatch(
    home,
    /Pick the category that matches the visit, then compare the current/,
  );
});

test("/visit is an Eglinton West / Little Jamaica how-to-reach page", () => {
  assert.match(visit, /How to Reach First Nation Smoke on Eglinton West/);
  assert.match(visit, /1504 Eglinton Ave W, Toronto, ON M6E 2G5/);
  assert.match(visit, /\+1 289 819 5073/);
  assert.match(visit, /Eglinton West Station/);
  assert.match(visit, /32 Eglinton West/);
  assert.match(visit, /parking/i);
  assert.match(visit, /Adults 19\+/);
  assert.match(visit, /homepage visit hub/);
  assert.match(sitemap, /\/visit/);
  assert.match(footer, /href="\/visit"/);
});

test("city Toronto pages are demoted", () => {
  assert.match(cityPage, /index: false/);
  assert.match(cityPage, /canonical: "https:\/\/www\.firstnationsmokez\.com\/"/);
  assert.match(deliveryPage, /index: false/);
  assert.match(deliveryPage, /Eglinton West \/ Little Jamaica/);
  assert.doesNotMatch(sitemap, /weed-dispensary-toronto/);
});

test("public SEO copy stays standalone with careful Native wording", () => {
  assert.doesNotMatch(publicBundle, /Athena/i);
  assert.doesNotMatch(publicBundle, /sister store/i);
  assert.doesNotMatch(publicBundle, /our other locations/i);
  assert.doesNotMatch(publicBundle, /Fort York/i);
  assert.doesNotMatch(publicBundle, /EarthRoot/i);
  assert.doesNotMatch(publicBundle, /Indigenous Midtown/i);
  assert.doesNotMatch(publicBundle, /Toke Cannabis/i);
  assert.doesNotMatch(publicBundle, /\breserve\b/i);
  assert.doesNotMatch(publicBundle, /indigenous-owned/i);
  assert.doesNotMatch(publicBundle, /native reserve dispensary/i);
  assert.doesNotMatch(publicBundle, /treats? (pain|anxiety|insomnia)/i);
  assert.doesNotMatch(publicBundle, /healing/);
  assert.match(owner, /No additional ownership, cultural or affiliation claim is made here/);
  assert.match(identity, /merchandise category/);
});
