import { NextResponse } from "next/server";
import { getCigaretteSnapshot, reconcileSurfaceItems, snapshotHeaders } from "../../lib/cigaretteFeed";
import { allFlowers, allItems } from "../../lib/products";
import { getTvData } from "../../lib/tvStock";

export const runtime = "nodejs";

// Always run the handler. Upstream Apps Script reads are cached for ~300s
// inside getTvData; this response itself is not cached (Cache-Control: no-store).
export const revalidate = 0;

export async function GET(request: Request) {
  const type = new URL(request.url).searchParams.get("type") || "flowers";
  const { body, headers } = await getTvData({
    type,
    staticFlowers: allFlowers,
    staticItems: allItems,
  });
  const snap = await getCigaretteSnapshot();
  const responseHeaders: Record<string, string> = { ...headers };
  let payload: unknown = body;
  if (type === "items" && Array.isArray(body)) {
    const items = reconcileSurfaceItems(
      body as Array<{ category?: string; name?: string; slug?: string; sku?: string }>,
      snap.items,
      snap.tv.show,
    );
    payload = items;
    responseHeaders["x-tv-data-item-count"] = String(items.length);
  }

  return NextResponse.json(payload, { headers: { ...responseHeaders, ...snapshotHeaders(snap) } });
}
