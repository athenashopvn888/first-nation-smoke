import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const read = (relativePath) =>
  fs.readFileSync(new URL(`../${relativePath}`, import.meta.url), "utf8");

const STORE = {
  name: "First Nation Smoke Cannabis Dispensary Toronto",
  streetAddress: "1504 Eglinton Ave W",
  city: "Toronto",
  region: "ON",
  postalCode: "M6E 2G5",
  addressLine: "1504 Eglinton Ave W, Toronto, ON M6E 2G5",
  phoneDisplay: "+1 289 819 5073",
  phoneE164: "+12898195073",
  hoursDetail: "Open 24 Hours, 7 days a week",
  corridor: "Eglinton West / Little Jamaica / Fairbank",
};

const PATHS = {
  visit: "/visit",
  twentyFour: "/24-hour-eglinton-west-dispensary",
  deliveryLp: "/cannabis-delivery-eglinton-west",
  nativeCigarettesLp: "/native-cigarettes-eglinton-west",
  nicotineVapeLp: "/nicotine-vape-eglinton-west",
  weedDispensaryLp: "/weed-dispensary-eglinton-west",
  itemsVapes: "/items/vapes",
  itemsCigarettes: "/items/cigarettes",
};

const MIN_SENTENCE = 60;

function substitute(source) {
  let text = source;
  for (const [key, value] of Object.entries(STORE)) {
    text = text.replaceAll(`{STORE.${key}}`, value);
    text = text.replaceAll(`STORE.${key}`, JSON.stringify(value));
  }
  for (const [key, value] of Object.entries(PATHS)) {
    text = text.replaceAll(`{PATHS.${key}}`, value);
    text = text.replaceAll(`PATHS.${key}`, JSON.stringify(value));
  }
  return text;
}

function stripExpressions(input) {
  let out = "";
  let depth = 0;
  for (const char of input) {
    if (char === "{") {
      depth += 1;
      continue;
    }
    if (char === "}" && depth > 0) {
      depth -= 1;
      continue;
    }
    if (depth === 0) out += char;
  }
  return out;
}

function normalize(text) {
  return text
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[\u2013\u2014]/g, "-")
    .replace(/\s+/g, " ")
    .trim();
}

function sentencesOf(text) {
  return normalize(text)
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length >= MIN_SENTENCE);
}

function quotedProse(source) {
  const chunks = [];
  const faq = source.match(/const [A-Z_]+_FAQS = \[([\s\S]*?)\];/);
  if (faq) {
    for (const match of faq[1].matchAll(/"(?:\\.|[^"\\])*"/g)) {
      chunks.push(JSON.parse(match[0]));
    }
  }
  for (const match of source.matchAll(/description:\s*"([^"]+)"/g)) {
    chunks.push(match[1]);
  }
  return chunks.join(" ");
}

function pageSentences(relativePath) {
  const source = substitute(read(relativePath));
  const returnAt = source.indexOf("return (");
  assert.ok(returnAt > 0, relativePath);
  let jsx = source.slice(returnAt);
  jsx = jsx.replace(/<script\b[\s\S]*?\/>/g, " ");
  jsx = stripExpressions(jsx);
  return sentencesOf(`${jsx} ${quotedProse(source)}`);
}

function shared(left, right) {
  const peer = new Set(right);
  return left.filter((sentence) => peer.has(sentence));
}

const peers = JSON.parse(read("tests/fixtures/peer-cig-vape-sentences.json"));

const pages = [
  ["cig", "app/native-cigarettes-eglinton-west/page.tsx"],
  ["vape", "app/nicotine-vape-eglinton-west/page.tsx"],
];

test("Eglinton West cig and vape copy shares no >=60-char sentence with GAC, QLC, PL501, PLX, or MKC", () => {
  const counts = {};
  for (const [label, file] of pages) {
    const ours = pageSentences(file);
    assert.ok(ours.length >= 8, `${label} produced too few sentences`);
    counts[label] = {};
    for (const [peerKey, peer] of Object.entries(peers)) {
      const hits = shared(ours, peer.sentences);
      counts[label][peerKey] = hits.length;
      assert.deepEqual(
        hits,
        [],
        `${label} shares ${hits.length} sentence(s) with ${peer.url}: ${hits.join(" || ")}`,
      );
    }
  }
  assert.equal(counts.cig["gac-cig"], 0);
  assert.equal(counts.vape["gac-vape"], 0);
});
