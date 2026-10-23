import { cache } from "react";
import {
  cigarettePageAction as resolveCigarettePageAction,
  cigarettePublicHeaders,
  decideCigaretteGuide,
  decideCigaretteSurface,
  foldCigaretteFlag as foldSurfaceFlag,
  publicWebsiteCigaretteFlag,
  reconcileSurfaceItems,
  type CigarettePageAction,
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
    // Last-good cig inside the cache window still follows its saved tvOn.
    // A miss with no saved cig is an error. TV hides, and the website flag stays off.
    return snapshotFrom(cig, items.length ? items : allItems, live, !live && !cig);
  } catch {
    return snapshotFrom(null, allItems, false, true);
  }
}

export const getCigaretteSnapshot = cache(readCigaretteFeed);

/**
 * Website surfaces follow `SHOW_CIGARETTES ? feed.web : false` and stay
 * off on a feed error or a missing block. TV ignores the coded gate and
 * follows the feed flag, which is already hidden on error or a missing block.
 */
export function foldCigaretteFlag(
  decision: CigaretteSurfaceDecision,
  codedOn = SHOW_CIGARETTES,
  surface: "web" | "tv" | "guides" = "web",
): boolean {
  return foldSurfaceFlag(decision, codedOn, surface);
}

export function toPublicCigaretteState(snap: CigaretteSnapshot): PublicCigaretteState {
  return {
    web: publicWebsiteCigaretteFlag(snap.web, SHOW_CIGARETTES),
    tv: foldCigaretteFlag(snap.tv, SHOW_CIGARETTES, "tv"),
    wording: snap.wording,
  };
}

export type { CigarettePageAction };

/** Env switch is the coded default. Callers that omit it use SHOW_CIGARETTES. */
export function cigarettePageAction(decision: CigaretteSurfaceDecision, codedOn = SHOW_CIGARETTES): CigarettePageAction {
  return resolveCigarettePageAction(decision, codedOn);
}

export function snapshotHeaders(snap: CigaretteSnapshot): Record<string, string> {
  return cigarettePublicHeaders(toPublicCigaretteState(snap));
}

export { reconcileSurfaceItems };
