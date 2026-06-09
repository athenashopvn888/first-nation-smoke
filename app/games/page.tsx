import type { Metadata } from "next";
import GamesContent from "./GamesContent";

export const metadata: Metadata = {
  title: "Cannabis Arcade Games — First Nation Smoke Cannabis Dispensary Toronto | Toronto",
  description: "Play free online cannabis-themed games like Flappy Bud and Snake Munchies while you wait at First Nation Smoke Cannabis Dispensary Toronto.",
  alternates: {
    canonical: "https://firstnationsmokez.com/games",
  },
};

export default function GamesPage() {
  return <GamesContent />;
}
