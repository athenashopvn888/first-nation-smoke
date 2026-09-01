import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const owner = readFileSync("app/components/WeedOwnerPage.tsx", "utf8");
const route = readFileSync("app/weed-dispensary-toronto/page.tsx", "utf8");
const home = readFileSync("app/page.tsx", "utf8");

test("protected owner retains canonical and indexability", () => {
  assert.match(route, /Weed Dispensary in Toronto \| First Nation Smoke Cannabis Dispensary Toronto/);
  assert.match(route, /firstnationsmokez\.com\/weed-dispensary-toronto\//);
  assert.match(route, /index: true/);
  assert.match(route, /follow: true/);
});

test("owner uses the exact public identity and verified visit facts", () => {
  assert.match(owner, /First Nation Smoke Cannabis Dispensary Toronto/);
  assert.match(owner, /1504 Eglinton Ave W/);
  assert.match(owner, /\+1 289-819-5073/);
  assert.match(owner, /Open 24 Hours/);
});

test("Find Your Weed uses only approved verified destinations", () => {
  for (const href of ["/resources/flower-guide", "/items/prerolls", "/resources/pre-roll-guide", "/resources/menu-guide", "/resources/value-guide", "/resources"]) {
    assert.ok(owner.includes(`"${href}"`), `missing ${href}`);
  }
  assert.doesNotMatch(owner, /available now|in stock|best price/i);
});

test("public copy avoids unsupported cultural-affiliation claims", () => {
  assert.match(owner, /No additional ownership, cultural or affiliation claim is made here/);
  assert.doesNotMatch(owner, /indigenous-owned|first nation-owned|community-owned/i);
});

test("homepage keeps its exact public H1 and gains the approved bridge", () => {
  assert.match(home, /FIRST NATION SMOKE CANNABIS DISPENSARY TORONTO/);
  assert.match(home, /Explore Weed &amp; Cannabis/);
});
