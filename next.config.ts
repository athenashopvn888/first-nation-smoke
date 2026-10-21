import type { NextConfig } from "next";
import { cigaretteRedirectSources, VAPE_PAGE_PATH } from "./app/lib/cigaretteRedirects";
import { SHOW_CIGARETTES } from "./app/lib/showCigarettes";

/** Original cigarette aliases. While cigarettes are hidden, these are replaced by temporary 302s to the vape page. */
const legacyCigaretteRedirects = [
  {
    source: "/info/native-cigarettes-york",
    destination: "/native-cigarettes-eglinton-west",
    permanent: true,
  },
  {
    source: "/info/native-cigarettes-toronto",
    destination: "/native-cigarettes-eglinton-west",
    permanent: true,
  },
  {
    source: "/cigarettes",
    destination: "/items/cigarettes",
    permanent: true,
  },
];

const hiddenCigaretteRedirects = cigaretteRedirectSources().map((source) => ({
  source,
  destination: VAPE_PAGE_PATH,
  statusCode: 302 as const,
}));

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "firstnationsmokez.com" },
      { protocol: "https", hostname: "kennedyloudcannabis.com" },
      { protocol: "https", hostname: "stclaircannabis.com" },
      { protocol: "https", hostname: "pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev", pathname: "/products/**" },
      { protocol: "https", hostname: "athena-cannabis-images.vercel.app", pathname: "/products/delivery/v1/**" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        has: [{ type: "host", value: "firstnationsmokez.com" }],
        destination: "https://www.firstnationsmokez.com",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "firstnationsmokez.com" }],
        destination: "https://www.firstnationsmokez.com/:path*",
        permanent: true,
      },
      {
        source: "/delivery",
        destination: "/weed-delivery-toronto",
        permanent: true,
      },
      { source: "/exotic", destination: "/exotic-weed", permanent: true },
      { source: "/premium", destination: "/premium-weed", permanent: true },
      { source: "/aaa", destination: "/aaa-weed", permanent: true },
      { source: "/aa", destination: "/aa-weed", permanent: true },
      { source: "/budget", destination: "/budget-weed", permanent: true },
      {
        source: "/info/york-weed-dispensary",
        destination: "/info/toronto-weed-dispensary",
        permanent: true,
      },
      {
        source: "/info/cheap-weed-york",
        destination: "/info/cheap-weed-toronto",
        permanent: true,
      },
      {
        source: "/info/weed-store-near-brampton",
        destination: "/info/weed-store-near-little-jamaica-fairbank",
        permanent: true,
      },
      {
        source: "/info/weed-store-near-mississauga",
        destination: "/info/weed-store-near-little-jamaica-fairbank",
        permanent: true,
      },
      {
        source: "/info/dispensary-near-me-york",
        destination: "/info/dispensary-near-me-toronto",
        permanent: true,
      },
      { source: "/blog", destination: "/resources", permanent: true },
      { source: "/blog/:path*", destination: "/resources", permanent: true },
      { source: "/edibles", destination: "/items/edibles", permanent: true },
      { source: "/vapes", destination: "/items/vapes", permanent: true },
      {
        source: "/vape-disposables",
        destination: "/items/vape-disposables",
        permanent: true,
      },
      {
        source: "/concentrates",
        destination: "/items/concentrates",
        permanent: true,
      },
      { source: "/prerolls", destination: "/items/prerolls", permanent: true },
      { source: "/add-ons", destination: "/items/add-ons", permanent: true },
      { source: "/magic", destination: "/items/magic", permanent: true },
      ...(SHOW_CIGARETTES ? legacyCigaretteRedirects : hiddenCigaretteRedirects),
    ];
  },
};

export default nextConfig;
