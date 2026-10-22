import { cache } from "react";
import {
  cigarettePublicHeaders,
  decideCigaretteGuide,
  decideCigaretteSurface,
  reconcileSurfaceItems,
  type CigaretteSurfaceDecision,
  type CigaretteWording,
} from "./cigDecision.ts";
import { allFlowers, allItems, type ItemProduct } from "./products";
import { SHOW_CIGARETTES } from "./showCigarettes.ts";
import { cigaretteEnvHardOff } from "./siteConfig.ts";
import { getCigaretteDataset } from "./tvStock";

export type CigaretteSnapshot = {
  web: CigaretteSurfaceDecision;
  tv: CigaretteSurfaceDecision;
  guides: CigaretteSurfaceDecision;
  wording: CigaretteWording;
  live: boolean;
  items: ItemProduct[];
};

export type PublicCigaretteState = {
  web: boolean;
  tv: boolean;
  wording: CigaretteWording;
};

function snapshotFrom(cig: unknown, items: ItemProduct[], live: boolean, errored: boolean): CigaretteSnapshot {
  const web = decideCigaretteSurface({ cig, items, surface: "web", errored });
  const tv = decideCigaretteSurface({ cig, items, surface: "tv", errored });
  const guides = decideCigaretteGuide({ cig, items, errored });
  return { web, tv, guides, wording: web.wording, live, items };
}

export async function readCigaretteFeed(): Promise<CigaretteSnapshot> {
  if (cigaretteEnvHardOff()) return snapshotFrom(null, [], false, false);
  try {
    const dataset = await getCigaretteDataset({
      staticFlowers: allFlowers,
      staticItems: allItems,
    });
    const live = dataset?.source === "live";
    const items = Array.isArray(dataset?.items) ? dataset.items as ItemProduct[] : allItems;
    const cig = dataset?.cig ?? null;
    // Last-good cig is kept on the dataset. A miss with no saved cig fails open.
    return snapshotFrom(cig, items.length ? items : allItems, live, !live && !cig);
  } catch {
    return snapshotFrom(null, allItems, false, true);
  }
}

export const getCigaretteSnapshot = cache(readCigaretteFeed);

/**
 * The existing env switch stays the coded gate. A feed error or a missing
 * cig block fails open to that coded behaviour. An explicit off flag can
 * hide a surface only when the env switch is already open.
 */
export function foldCigaretteFlag(decision: CigaretteSurfaceDecision, codedOn = SHOW_CIGARETTES): boolean {
  if (!codedOn) return false;
  if (decision.reason === "error" || decision.reason === "missing") return true;
  return decision.show;
}

export function toPublicCigaretteState(snap: CigaretteSnapshot): PublicCigaretteState {
  return {
    web: foldCigaretteFlag(snap.web),
    tv: foldCigaretteFlag(snap.tv),
    wording: snap.wording,
  };
}

export type CigarettePageAction = "show" | "redirect" | "unavailable";

/**
 * Coded, missing, and errored feeds keep today's redirect when the env
 * switch is off. An explicit web off stays on the same URL.
 */
export function cigarettePageAction(decision: CigaretteSurfaceDecision, codedOn = SHOW_CIGARETTES): CigarettePageAction {
  if (decision.reason === "off" || decision.reason === "no-items") return "unavailable";
  return codedOn ? "show" : "redirect";
}

export function snapshotHeaders(snap: CigaretteSnapshot): Record<string, string> {
  return cigarettePublicHeaders(toPublicCigaretteState(snap));
}

export { reconcileSurfaceItems };
