import { NextResponse } from "next/server";
import { foldCigaretteFlag, getCigaretteSnapshot, toPublicCigaretteState } from "../../lib/cigaretteFeed";
import { getFleetContent } from "../../lib/fleetContent";
import { contentStatusPayload } from "../../lib/fleet/status";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Diagnostic only. Publish verification reads the page marker, not this route. */
export async function GET() {
  const [fleet, cig] = await Promise.all([getFleetContent(), getCigaretteSnapshot()]);
  const pub = toPublicCigaretteState(cig);
  return NextResponse.json(contentStatusPayload(fleet, {
    web: pub.web,
    tv: pub.tv,
    guides: foldCigaretteFlag(cig.guides),
  }), { headers: { "Cache-Control": "no-store" } });
}
