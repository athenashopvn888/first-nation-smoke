import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const products = readFileSync("app/lib/products.ts", "utf8");
const tierSeo = readFileSync("app/lib/tierSeoContent.ts", "utf8");
const navbar = readFileSync("app/components/Navbar.tsx", "utf8");
const footer = readFileSync("app/components/Footer.tsx", "utf8");
const resources = readFileSync("app/resources/resourceData.ts", "utf8");
const redirects = readFileSync("next.config.ts", "utf8");
const sitemap = readFileSync("app/sitemap.ts", "utf8");
const tierPage = readFileSync("app/[tier]/page.tsx", "utf8");
const flowerPage = readFileSync("app/flower/[slug]/page.tsx", "utf8");
const infoPage = readFileSync("app/info/[seoPage]/page.tsx", "utf8");

const tiers = [
  ["Exotic Weed", "exotic", "exotic-weed"],
  ["Premium Weed", "premium", "premium-weed"],
  ["AAA+ Weed", "aaa", "aaa-weed"],
  ["AA Weed", "aa", "aa-weed"],
  ["Budget Weed", "budget", "budget-weed"],
];

test("tier names and slugs follow the V2.1 convention", () => {
  for (const [name, , slug] of tiers) {
    assert.ok(products.includes(`name: "${name}"`), `missing ${name}`);
    assert.ok(products.includes(`slug: "${slug}"`), `missing ${slug}`);
  }
});

test("tier metadata titles use tier name first and defer the brand template", () => {
  for (const [name] of tiers) {
    assert.ok(tierSeo.includes(`"seoTitle": "${name} & Cannabis Flower Toronto"`));
  }
  assert.doesNotMatch(tierSeo, /Weed (Exotic|Premium|AAA\+|AA|Budget)/i);
  assert.doesNotMatch(tierSeo, /seoTitle.*First Nation Smoke/i);
});

test("legacy tier routes redirect directly to one canonical owner", () => {
  for (const [, legacy, slug] of tiers) {
    const rule = `{ source: "/${legacy}", destination: "/${slug}", permanent: true }`;
    assert.ok(redirects.includes(rule), `missing redirect ${legacy}`);
  }
});

test("navigation footer and resource cards use only canonical tier links", () => {
  const combined = `${navbar}\n${footer}\n${resources}`;
  for (const [name, legacy, slug] of tiers) {
    assert.ok(combined.includes(`/${slug}`), `missing internal link ${slug}`);
    assert.ok(combined.includes(name), `missing linked label ${name}`);
    assert.doesNotMatch(combined, new RegExp(`["']/${legacy}["']`));
  }
});

test("dynamic sitemap and product backlinks inherit the canonical tier config", () => {
  assert.match(sitemap, /TIER_CONFIG/);
  assert.match(sitemap, /\$\{t\.slug\}/);
  assert.match(tierPage, /generateStaticParams/);
  assert.match(tierPage, /\$\{tierSlug\}/);
  assert.match(flowerPage, /tierConfig\?\.slug/);
  assert.match(infoPage, /\$\{tier\.slug\}/);
});

test("protected broad owner remains outside the tier migration", () => {
  const owner = readFileSync("app/weed-dispensary-toronto/page.tsx", "utf8");
  assert.match(owner, /weed-dispensary-toronto/);
});

test("delivery and nicotine modules remain untouched by this migration", () => {
  const delivery = readFileSync("app/delivery/page.tsx", "utf8");
  assert.match(delivery, /Delivery Menu/);
  assert.match(products, /name: "THC Vape", slug: "vapes"/);
  assert.match(products, /name: "Nic Vape", slug: "vape-disposables"/);
});
