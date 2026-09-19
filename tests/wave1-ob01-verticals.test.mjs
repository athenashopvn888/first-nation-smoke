import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const delivery = readFileSync(
  "app/cannabis-delivery-eglinton-west/page.tsx",
  "utf8",
);
const nativeCigs = readFileSync(
  "app/native-cigarettes-eglinton-west/page.tsx",
  "utf8",
);
const nicotine = readFileSync("app/nicotine-vape-eglinton-west/page.tsx", "utf8");
const twentyFour = readFileSync(
  "app/24-hour-eglinton-west-dispensary/page.tsx",
  "utf8",
);
const home = readFileSync("app/page.tsx", "utf8");
const visit = readFileSync("app/visit/page.tsx", "utf8");
const footer = readFileSync("app/components/Footer.tsx", "utf8");
const sitemap = readFileSync("app/sitemap.ts", "utf8");
const mesh = readFileSync("app/components/LocalSeoMesh.tsx", "utf8");
const config = readFileSync("next.config.ts", "utf8");
const identity = readFileSync("app/lib/storeIdentity.ts", "utf8");

const VERTICAL_BUNDLE = [
  delivery,
  nativeCigs,
  nicotine,
  twentyFour,
  home,
  visit,
  footer,
  mesh,
  identity,
].join("\n");

const H1S = [
  [...delivery.matchAll(/<h1 className=\{styles\.h1\}>\s*([^<]+)/g)].map((m) =>
    m[1].trim(),
  ),
  [...nativeCigs.matchAll(/<h1 className=\{styles\.h1\}>\s*([^<]+)/g)].map(
    (m) => m[1].trim(),
  ),
  [...nicotine.matchAll(/<h1 className=\{styles\.h1\}>\s*([^<]+)/g)].map((m) =>
    m[1].trim(),
  ),
  [...twentyFour.matchAll(/<h1 className=\{styles\.h1\}>\s*([^<]+)/g)].map(
    (m) => m[1].trim(),
  ),
].flat();

test("Big Three neighbourhood LPs have unique H1 and title", () => {
  assert.deepEqual(H1S, [
    "Cannabis Delivery on Eglinton West",
    "Native Cigarettes on Eglinton West",
    "Nicotine Vapes on Eglinton West",
    "24-Hour Dispensary Open Now on Eglinton West",
  ]);
  assert.equal(new Set(H1S).size, 4);
  assert.match(delivery, /Cannabis Delivery on Eglinton West \| First Nation Smoke/);
  assert.match(nativeCigs, /Native Cigarettes on Eglinton West \| First Nation Smoke/);
  assert.match(nicotine, /Nicotine Vapes on Eglinton West \| First Nation Smoke/);
});

test("FAQ questions are unique across 24h and Big Three", () => {
  const questions = [delivery, nativeCigs, nicotine, twentyFour].flatMap(
    (source) => [...source.matchAll(/q: "([^"]+)"/g)].map((m) => m[1]),
  );
  assert.equal(questions.length, 18);
  assert.equal(new Set(questions).size, 18, `duplicate FAQ: ${questions.join(" | ")}`);
});

test("door-test 24h page owns open-now / near-me for this corridor", () => {
  assert.match(twentyFour, /open now near me on Eglinton West/);
  assert.match(twentyFour, /Open now \/ 24h near me on this block/);
  assert.match(twentyFour, /24-Hour Dispensary Open Now on Eglinton West/);
  assert.match(twentyFour, /first-class/);
  assert.match(twentyFour, /PATHS\.deliveryLp/);
  assert.match(twentyFour, /PATHS\.nativeCigarettesLp/);
  assert.match(twentyFour, /PATHS\.nicotineVapeLp/);
  assert.match(twentyFour, /Little Jamaica/);
  assert.match(twentyFour, /Fairbank/);
  assert.doesNotMatch(twentyFour, /Toronto-wide 24-hour dispensary directory/i);
});

test("delivery LP is neighbourhood-owned and meshes away from city spam", () => {
  assert.match(delivery, /Eglinton West/);
  assert.match(delivery, /Little Jamaica/);
  assert.match(delivery, /Fairbank/);
  assert.match(delivery, /Adults 19\+/);
  assert.match(delivery, /PATHS\.deliveryCatalog/);
  assert.match(delivery, /not a city-wide Toronto delivery list/);
  assert.match(sitemap, /\/cannabis-delivery-eglinton-west/);
});

test("Native cigarettes LP is retail category language only", () => {
  assert.match(nativeCigs, /merchandise category/);
  assert.match(nativeCigs, /PATHS\.itemsCigarettes/);
  assert.match(nativeCigs, /Adults 19\+/);
  assert.doesNotMatch(nativeCigs, /indigenous/i);
  assert.doesNotMatch(nativeCigs, /\breserve\b/i);
  assert.doesNotMatch(nativeCigs, /sacred/i);
  assert.doesNotMatch(nativeCigs, /healing/);
  assert.match(config, /source: "\/info\/native-cigarettes-toronto"/);
  assert.match(
    config,
    /destination: "\/native-cigarettes-eglinton-west"/,
  );
});

test("nicotine vape LP points at /items/vapes without inventing stock", () => {
  assert.match(nicotine, /PATHS\.itemsVapes/);
  assert.match(nicotine, /Nicotine is addictive/);
  assert.match(nicotine, /does not invent puff counts/);
  assert.match(nicotine, /\/items\/vape-disposables/);
  assert.doesNotMatch(nicotine, /\$\d+/);
});

test("Big Three pages mesh 24h as an equal sibling, not a side note", () => {
  for (const source of [delivery, nativeCigs, nicotine]) {
    assert.match(source, /PATHS\.twentyFour/);
    assert.match(source, /Open now \/ 24-hour/);
  }
});

test("hub, visit, footer, and mesh include Big Three", () => {
  for (const source of [home, visit, footer, mesh, twentyFour]) {
    assert.match(source, /cannabis-delivery-eglinton-west|PATHS\.deliveryLp/);
    assert.match(source, /native-cigarettes-eglinton-west|PATHS\.nativeCigarettesLp/);
    assert.match(source, /nicotine-vape-eglinton-west|PATHS\.nicotineVapeLp/);
  }
});

test("vertical copy stays 19+ retail and corridor-scoped", () => {
  assert.match(VERTICAL_BUNDLE, /Adults 19\+/);
  assert.doesNotMatch(VERTICAL_BUNDLE, /sister store/i);
  assert.doesNotMatch(VERTICAL_BUNDLE, /indigenous-owned/i);
  assert.doesNotMatch(VERTICAL_BUNDLE, /native reserve dispensary/i);
  assert.doesNotMatch(VERTICAL_BUNDLE, /\breserve\b/i);
  assert.doesNotMatch(VERTICAL_BUNDLE, /healing/);
  assert.doesNotMatch(VERTICAL_BUNDLE, /Ottawa|Gatineau|ByWard/);
  assert.doesNotMatch(delivery, /best dispensary/i);
  assert.doesNotMatch(nativeCigs, /#1/);
  assert.doesNotMatch(nicotine, /#1/);
});
