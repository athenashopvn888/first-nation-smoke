"use client";

import Link from "next/link";
import { TIER_CONFIG } from "../lib/products";
import styles from "./LocalSeoMesh.module.css";

export const TWENTY_FOUR_HOUR_HREF = "/24-hour-eglinton-west-dispensary";

const HUB_LINKS = [
  { href: "/", label: "Homepage hours & map" },
  { href: "/visit", label: "How to reach 1504" },
  { href: TWENTY_FOUR_HOUR_HREF, label: "24-hour Eglinton West" },
] as const;

type Tone = "light" | "dark";

export default function LocalSeoMesh({
  currentPath,
  tone = "light",
}: {
  currentPath: string;
  tone?: Tone;
}) {
  const tierLinks = Object.values(TIER_CONFIG).map((tier) => ({
    href: `/${tier.slug}`,
    label: tier.name,
  }));
  const links = [...HUB_LINKS, ...tierLinks].filter(
    (link) => link.href !== currentPath,
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
