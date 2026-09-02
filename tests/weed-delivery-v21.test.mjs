import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const page = readFileSync("app/weed-delivery-toronto/page.tsx", "utf8");
const content = readFileSync("app/delivery/DeliveryContent.tsx", "utf8");
const navbar = readFileSync("app/components/Navbar.tsx", "utf8");
const footer = readFileSync("app/components/Footer.tsx", "utf8");
const layout = readFileSync("app/layout.tsx", "utf8");
const sitemap = readFileSync("app/sitemap.ts", "utf8");
const config = readFileSync("next.config.ts", "utf8");

test("new Weed Delivery owner has exact title, canonical, H1, and schema", () => {
  assert.match(page, /title: "Weed Delivery Toronto"/);
  assert.match(page, /canonical: "https:\/\/www\.firstnationsmokez\.com\/weed-delivery-toronto"/);
  assert.match(page, /name: "Weed Delivery"/);
  assert.match(content, /<h1>Weed Delivery in Toronto<\/h1>/);
});

test("legacy delivery route redirects directly to the new owner", () => {
  assert.match(config, /source: "\/delivery",\s*destination: "\/weed-delivery-toronto",\s*permanent: true/);
});

test("navigation, footer, announcement, and sitemap point directly to Weed Delivery", () => {
  for (const source of [navbar, footer, layout, sitemap]) assert.match(source, /\/weed-delivery-toronto/);
  assert.match(navbar, /label: "🚗 Weed Delivery"/);
  assert.match(footer, />Weed Delivery<\/Link>/);
  assert.match(layout, /WEED DELIVERY IS HERE/);
  assert.doesNotMatch(`${navbar}\n${footer}\n${layout}\n${sitemap}`, /href="\/delivery"|`\$\{BASE\}\/delivery`/);
});

test("delivery mechanics and protected facts remain present", () => {
  for (const required of ["FirstNationSmokeWebChat", "$60 PRODUCT MINIMUM", "+1 (437) 523-9104", "1504 Eglinton Ave W", "(289) 819-5073", "confirms current availability and delivery details before an order is accepted"]) assert.ok(content.includes(required), required);
});
