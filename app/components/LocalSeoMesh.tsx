"use client";

import Link from "next/link";
import { TIER_CONFIG } from "../lib/products";
import { PATHS, TWENTY_FOUR_HOUR_HREF } from "../lib/organicPaths";
import { useCigaretteState } from "./CigaretteStateProvider";
import styles from "./LocalSeoMesh.module.css";

export { TWENTY_FOUR_HOUR_HREF };

const HUB_LINKS = [
  { href: PATHS.home, label: "Homepage hours & map" },
  { href: PATHS.visit, label: "How to reach 1504" },
  { href: PATHS.twentyFour, label: "Open now / 24-hour Eglinton West" },
  { href: PATHS.deliveryLp, label: "Cannabis delivery on Eglinton West" },
  { href: PATHS.nativeCigarettesLp, label: "Native cigarettes on Eglinton West" },
  { href: PATHS.nicotineVapeLp, label: "Nicotine vapes on Eglinton West" },
  { href: PATHS.weedDispensaryLp, label: "Weed dispensary on Eglinton West" },
] as const;

type Tone = "light" | "dark";

export default function LocalSeoMesh({
  currentPath,
  tone = "light",
}: {
  currentPath: string;
  tone?: Tone;
}) {
  const showCigarettes = useCigaretteState().web;
  const tierLinks = Object.values(TIER_CONFIG).map((tier) => ({
    href: `/${tier.slug}`,
    label: tier.name,
  }));
  const links = [...HUB_LINKS, ...tierLinks].filter(
    (link) => link.href !== currentPath && (showCigarettes || link.href !== PATHS.nativeCigarettesLp),
  );

  return (
    <nav
      className={`${styles.mesh} ${tone === "dark" ? styles.dark : styles.light}`}
      aria-label="Related First Nation Smoke pages"
    >
      <p className={styles.label}>On this Eglinton West site</p>
      <ul className={styles.list}>
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
