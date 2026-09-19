import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const owner = readFileSync("app/cannabis-delivery-eglinton-west/page.tsx", "utf8");
const page = readFileSync("app/weed-delivery-toronto/page.tsx", "utf8");
const content = readFileSync("app/delivery/DeliveryContent.tsx", "utf8");
const navbar = readFileSync("app/components/Navbar.tsx", "utf8");
const footer = readFileSync("app/components/Footer.tsx", "utf8");
const layout = readFileSync("app/layout.tsx", "utf8");
const sitemap = readFileSync("app/sitemap.ts", "utf8");
const config = readFileSync("next.config.ts", "utf8");

test("neighbourhood LP owns weed delivery; city catalog is noindex", () => {
  assert.match(owner, /Cannabis Delivery on Eglinton West/);
  assert.match(owner, /canonical: PAGE_URL/);
  assert.match(owner, /PATHS\.deliveryLp/);
  assert.match(page, /canonical: "https:\/\/www\.firstnationsmokez\.com\/cannabis-delivery-eglinton-west"/);
  assert.match(page, /index: false/);
  assert.match(content, /<h1>Weed Delivery for Eglinton West \/ Little Jamaica<\/h1>/);
  assert.match(content, /cannabis-delivery-eglinton-west/);
});

test("legacy delivery route still reaches the catalog", () => {
  assert.match(config, /source: "\/delivery",\s*destination: "\/weed-delivery-toronto",\s*permanent: true/);
});

test("navigation, footer, announcement, and sitemap promote the neighbourhood owner", () => {
  for (const source of [navbar, footer, layout, sitemap]) {
    assert.match(source, /\/cannabis-delivery-eglinton-west/);
  }
  assert.match(navbar, /label: "🚗 Weed Delivery"/);
  assert.match(footer, /Cannabis Delivery on Eglinton West/);
  assert.match(layout, /NEW WEED DELIVERY/);
  assert.match(sitemap, /\/weed-delivery-toronto/);
  assert.doesNotMatch(`${navbar}\n${footer}\n${layout}`, /href="\/delivery"/);
});

test("delivery mechanics and protected facts remain present", () => {
  for (const required of [
    "FirstNationSmokeWebChat",
    "$60 PRODUCT MINIMUM",
    "+1 (437) 523-9104",
    "1504 Eglinton Ave W",
    "+1 289 819 5073",
    "confirms current availability and delivery details before an order is accepted",
  ]) {
    assert.ok(content.includes(required), required);
  }
});
