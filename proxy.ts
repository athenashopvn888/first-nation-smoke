import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isCigaretteContentPath } from "./app/lib/cigaretteRedirects";
import { cigarettePageAction, getCigaretteSnapshot } from "./app/lib/cigaretteFeed";
import { SHOW_CIGARETTES, VAPE_PAGE_PATH } from "./app/lib/showCigarettes";

export async function proxy(request: NextRequest) {
  if (!isCigaretteContentPath(request.nextUrl.pathname)) return NextResponse.next();
  try {
    const snap = await getCigaretteSnapshot();
    const action = cigarettePageAction(snap.web);
    if (action === "redirect") {
      return NextResponse.redirect(new URL(VAPE_PAGE_PATH, request.url), 302);
    }
    if (action === "unavailable") {
      const url = request.nextUrl.clone();
      url.pathname = "/fleet-cigarette-unavailable";
      return NextResponse.rewrite(url);
    }
  } catch {
    if (!SHOW_CIGARETTES) {
      return NextResponse.redirect(new URL(VAPE_PAGE_PATH, request.url), 302);
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/items/cigarettes",
    "/cigarettes",
    "/native-cigarettes-eglinton-west",
    "/info/native-cigarettes-toronto",
    "/info/native-cigarettes-york",
    "/resources/native-smokes",
    "/resources/native-smokes/:path*",
    "/guides/:path*",
    "/item/:path*",
  ],
};
