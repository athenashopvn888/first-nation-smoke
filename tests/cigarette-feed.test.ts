import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync } from "node:fs";
import {
  CIG_WORDING_FALLBACK,
  cigarettePublicHeaders,
  decideCigaretteGuide,
  decideCigaretteSurface,
  foldCigaretteFlag,
  readCigaretteTvHeader,
  reconcileSurfaceItems,
  resolveCigWording,
  cigarettePageAction,
  resolveSurfaceFlag,
  visibleTvCards,
} from "../app/lib/cigDecision.ts";

const carton = { category: "CIGARETTES", name: "BB FULL CARTON", slug: "bb-full-carton" };
const grabba = { category: "CIGARETTES", name: "GRABBA", slug: "grabba" };
const backwoods = { category: "CIGARETTES", name: "BACKWOODS ASSORTED FLAVORS $20-$25", slug: "backwoods-assorted-flavors-20-25" };
const pouch = { category: "CIGARETTES", name: "NICOTINE POUCHES , VELO, PABLO, KILLA", slug: "nicotine-pouches-velo-pablo-killa" };
const vape = { category: "VAPE PENS", name: "Mango Ice", slug: "mango-ice" };

const wording = {
  bannerText: "FEED BANNER",
  promoBrands: "FEED BRANDS",
  tv2BoardTitle: "FEED BOARD",
  wrapsTitle: "🍂 WRAPS & POUCHES",
  tickerLine1: "FEED TICKER",
  priceTwoPack: "$5",
  priceCarton: "$25",
  priceBelmont: "$10",
  priceBB2Pack: "$5",
};

function cig(extra: Record<string, unknown> = {}) {
  return { on: false, tvOn: false, webOn: false, webFollowsTv: true, wording, ...extra };
}

test("website follows webOn and TV follows tvOn, with on as the fallback", () => {
  const items = [carton, backwoods];
  assert.equal(decideCigaretteSurface({ cig: cig({ webOn: true, tvOn: false }), items, surface: "web" }).show, true);
  assert.equal(decideCigaretteSurface({ cig: cig({ webOn: true, tvOn: false }), items, surface: "tv" }).show, false);
  assert.equal(decideCigaretteSurface({ cig: cig({ webOn: false, tvOn: true }), items, surface: "web" }).show, false);
  assert.equal(decideCigaretteSurface({ cig: cig({ webOn: false, tvOn: true }), items, surface: "tv" }).show, true);
  assert.equal(resolveSurfaceFlag({ on: true }, "web"), true);
  assert.equal(resolveSurfaceFlag({ on: true }, "tv"), true);
  assert.equal(resolveSurfaceFlag(cig({ on: true, webOn: false }), "web"), false);
  assert.equal(resolveSurfaceFlag(cig({ on: false, tvOn: true, webFollowsTv: true }), "tv"), true);
  assert.equal(resolveSurfaceFlag(cig({ on: true, webOn: false, webFollowsTv: true }), "web"), false);
});

test("only an explicit false flag, no real items, or the env override hides cigarettes", () => {
  const items = [carton, grabba, backwoods];
  const missing = decideCigaretteSurface({ cig: null, items, surface: "web" });
  assert.equal(missing.reason, "missing");
  assert.equal(missing.show, true);
  assert.equal(decideCigaretteSurface({ cig: cig(), items, surface: "tv" }).show, false);
  assert.equal(decideCigaretteSurface({ cig: cig({ on: true, webOn: true, tvOn: true }), items: [backwoods, pouch], surface: "web" }).reason, "no-items");
  const errored = decideCigaretteSurface({ cig: cig({ on: true, webOn: false, tvOn: false }), items, surface: "web", errored: true });
  assert.equal(errored.reason, "error");
  assert.equal(errored.show, true);
  assert.equal(decideCigaretteSurface({ cig: cig({ on: true, webOn: true, tvOn: true }), items, surface: "tv", envRaw: "false" }).reason, "env");
  assert.equal(decideCigaretteSurface({ cig: cig({ on: true, webOn: true, tvOn: true }), items, surface: "web", envRaw: "true" }).show, true);
});

test("wording uses the feed and falls back to the current copy field by field", () => {
  assert.equal(resolveCigWording({ bannerText: "  FEED BANNER  ", wrapsTitle: "" }).bannerText, "FEED BANNER");
  assert.equal(resolveCigWording({ bannerText: "  FEED BANNER  " }).wrapsTitle, CIG_WORDING_FALLBACK.wrapsTitle);
  assert.equal(resolveCigWording(undefined).tickerLine1, CIG_WORDING_FALLBACK.tickerLine1);
  assert.equal(decideCigaretteSurface({ cig: cig({ webOn: false }), items: [backwoods], surface: "web" }).wording.wrapsTitle, "🍂 WRAPS & POUCHES");
  assert.equal(decideCigaretteSurface({ cig: null, items: [], surface: "tv" }).wording.bannerText, CIG_WORDING_FALLBACK.bannerText);
});

test("null flags with real cigarettes stay open and an explicit false still hides", () => {
  const open = decideCigaretteSurface({ cig: { on: null, webOn: null, tvOn: null, wording }, items: [carton], surface: "web" });
  assert.equal(open.show, true);
  assert.equal(open.reason, "on");
  assert.equal(decideCigaretteSurface({ cig: { on: false }, items: [carton], surface: "tv" }).reason, "off");
  assert.equal(decideCigaretteGuide({ cig: { master: null, on: null }, items: [carton] }).show, true);
});

test("guide pages follow the master switch and a feed error stays open", () => {
  const items = [carton];
  assert.equal(decideCigaretteGuide({ cig: cig({ on: false, master: false, webOn: true }), items }).show, false);
  assert.equal(decideCigaretteGuide({ cig: cig({ on: true, master: true, webOn: false }), items }).show, true);
  assert.equal(decideCigaretteGuide({ cig: null, items, errored: true }).show, true);
  assert.equal(decideCigaretteGuide({ cig: cig({ on: true, master: true }), items, envRaw: "off" }).reason, "env");
});

test("each surface hides real cigarettes itself and always keeps wraps and pouches", () => {
  const menu = [vape, carton, grabba, backwoods, pouch];
  const hidden = reconcileSurfaceItems(menu, menu, false);
  assert.deepEqual(hidden.map((item) => item.slug), [vape.slug, backwoods.slug, pouch.slug]);
  const shown = reconcileSurfaceItems([vape, backwoods], [carton, backwoods], true);
  assert.deepEqual(shown.map((item) => item.slug), [vape.slug, backwoods.slug, carton.slug]);
});

test("TV fold follows the feed and the coded switch still hides the website", () => {
  const on = { show: true, reason: "on" as const };
  const off = { show: false, reason: "off" as const };
  assert.equal(foldCigaretteFlag(on, false, "tv"), true);
  assert.equal(foldCigaretteFlag(off, false, "tv"), false);
  assert.equal(foldCigaretteFlag({ show: false, reason: "env" }, false, "tv"), false);
  assert.equal(foldCigaretteFlag({ show: true, reason: "error" }, false, "tv"), true);
  assert.equal(foldCigaretteFlag(on, false, "web"), false);
  assert.equal(foldCigaretteFlag(off, false, "web"), false);
  assert.equal(foldCigaretteFlag({ show: true, reason: "error" }, false, "web"), false);
  assert.equal(foldCigaretteFlag(on, false, "guides"), false);
  assert.equal(foldCigaretteFlag(on, true, "web"), true);
  assert.equal(foldCigaretteFlag(off, true, "web"), false);
});

test("a true TV flag shows the card and cigarette items; false hides them and keeps wraps", () => {
  const cards = [{ id: "VAPES" }, { id: "CIGARETTES" }, { id: "MAGIC" }];
  assert.deepEqual(visibleTvCards(cards, true).map((card) => card.id), ["VAPES", "CIGARETTES", "MAGIC"]);
  assert.deepEqual(visibleTvCards(cards, false).map((card) => card.id), ["VAPES", "MAGIC"]);

  const zyn = { category: "CIGARETTES", name: "ZYN CITRUS", slug: "zyn-citrus" };
  const velo = { category: "CIGARETTES", name: "VELO", slug: "velo" };
  const wrap = { category: "CIGARETTES", name: "HEMP WRAP", slug: "hemp-wrap" };
  const paper = { category: "CIGARETTES", name: "ROLLING PAPER", slug: "rolling-paper" };
  const cigarillo = { category: "CIGARETTES", name: "CIGARILLO", slug: "cigarillo" };
  const menu = [vape, carton, grabba, backwoods, pouch, zyn, velo, wrap, paper, cigarillo];
  const hidden = reconcileSurfaceItems(menu, menu, false);
  assert.equal(hidden.some((item) => item.slug === carton.slug), false);
  assert.equal(hidden.some((item) => item.slug === grabba.slug), false);
  for (const kept of [vape, backwoods, pouch, zyn, velo, wrap, paper, cigarillo]) {
    assert.equal(hidden.some((item) => item.slug === kept.slug), true, kept.slug);
  }
  const shown = reconcileSurfaceItems([vape, backwoods, zyn], [carton, zyn], true);
  assert.deepEqual(shown.map((item) => item.slug), [vape.slug, backwoods.slug, zyn.slug, carton.slug]);

  const headersOn = new Map(Object.entries(cigarettePublicHeaders({ web: false, tv: true, wording: CIG_WORDING_FALLBACK })));
  assert.equal(readCigaretteTvHeader({ get: (name) => headersOn.get(name) ?? null }).show, true);
  const headersOff = new Map(Object.entries(cigarettePublicHeaders({ web: true, tv: false, wording: CIG_WORDING_FALLBACK })));
  const readOff = readCigaretteTvHeader({ get: (name) => headersOff.get(name) ?? null });
  assert.equal(readOff.show, false);
  assert.equal(headersOn.get("x-tv-data-cig-web"), "0");
});

test("TV pages and the items route follow the feed flag, not the coded switch", () => {
  const tv2 = readFileSync(new URL("../app/tv2/page.tsx", import.meta.url), "utf8");
  const tv = readFileSync(new URL("../app/tv/page.tsx", import.meta.url), "utf8");
  const route = readFileSync(new URL("../app/api/tv-data/route.ts", import.meta.url), "utf8");
  const feed = readFileSync(new URL("../app/lib/cigaretteFeed.ts", import.meta.url), "utf8");
  assert.match(tv2, /visibleTvCards\(CARD_CONFIG, tvCig\.show\)/);
  assert.match(tv2, /readCigaretteTvHeader\(res\.headers\)/);
  assert.doesNotMatch(tv2, /SHOW_CIGARETTES/);
  assert.match(tv, /readCigaretteTvHeader\(iRes\.headers\)/);
  assert.doesNotMatch(tv, /SHOW_CIGARETTES/);
  assert.match(route, /reconcileSurfaceItems\(/);
  assert.match(route, /snap\.tv\.show/);
  assert.doesNotMatch(route, /SHOW_CIGARETTES/);
  assert.match(feed, /foldCigaretteFlag\(snap\.tv, SHOW_CIGARETTES, "tv"\)/);
  assert.match(feed, /web: foldCigaretteFlag\(snap\.web\)/);
});

test("an explicit web off uses the coded 302, including when the env switch is open", () => {
  const off = decideCigaretteSurface({ cig: cig({ on: true, webOn: false, tvOn: true }), items: [carton], surface: "web" });
  assert.equal(off.reason, "off");
  assert.equal(cigarettePageAction(off, true), "redirect");
  assert.equal(cigarettePageAction(off, false), "redirect");
  const missing = decideCigaretteSurface({ cig: null, items: [carton], surface: "web" });
  assert.equal(cigarettePageAction(missing, false), "redirect");
  assert.equal(cigarettePageAction(missing, true), "show");
  const empty = decideCigaretteSurface({ cig: cig({ on: true, webOn: true, tvOn: true }), items: [backwoods], surface: "web" });
  assert.equal(cigarettePageAction(empty, true), "unavailable");
});
