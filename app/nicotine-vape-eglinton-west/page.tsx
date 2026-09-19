import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LocalSeoMesh from "../components/LocalSeoMesh";
import { PATHS } from "../lib/organicPaths";
import {
  STORE,
  faqPageJsonLd,
  stringifyJsonLd,
} from "../lib/storeIdentity";
import styles from "../visit/visit.module.css";

const PAGE_URL = `${STORE.url}${PATHS.nicotineVapeLp}`;

const NICOTINE_FAQS = [
  {
    q: "Where should I check nicotine vapes at First Nation Smoke on Eglinton West?",
    a: "Use /items/vapes for the current nicotine vape category at 1504 Eglinton Ave W. This neighbourhood page explains the Little Jamaica / Fairbank shelf. It does not replace the live category listing.",
  },
  {
    q: "Does this neighbourhood page guarantee stock or prices?",
    a: "No. Names, formats, and posted prices change. This page does not invent puff counts, flavours, or a sale price. Compare the current /items/vapes cards, then ask staff or call +1 289 819 5073 before travelling for one device.",
  },
  {
    q: "Are nicotine vapes the same as the THC vape shelf?",
    a: "No. Nicotine vapes live under /items/vapes. THC and cannabis vape products sit under /items/vape-disposables. Keep those lanes separate. Adults 19+. Nicotine is addictive.",
  },
  {
    q: "Can I look at nicotine vapes if I walk in overnight?",
    a: "Yes, when the homepage lists Open 24 Hours. Bring photo ID. Overnight corridor notes sit on the 24-hour Eglinton West page. This URL stays the nicotine vape neighbourhood owner.",
  },
];

export const metadata: Metadata = {
  title: {
    absolute: "Nicotine Vapes on Eglinton West | First Nation Smoke",
  },
  description:
    "Nicotine vapes at First Nation Smoke, 1504 Eglinton Ave W on Eglinton West through Little Jamaica and Fairbank. Adults 19+. Current shelf at /items/vapes. Nicotine is addictive. No stock or price promises.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Nicotine Vapes on Eglinton West",
    description:
      "Neighbourhood notes for the nicotine vape shelf at 1504 Eglinton Ave W. Adults 19+. Check /items/vapes. Nicotine is addictive.",
    url: PAGE_URL,
  },
  robots: { index: true, follow: true },
};

export default function NicotineVapeEglintonWestPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Nicotine Vapes on Eglinton West",
    url: PAGE_URL,
    description:
      "Neighbourhood nicotine vape notes for First Nation Smoke at 1504 Eglinton Ave W on Eglinton West through Little Jamaica and Fairbank.",
    isPartOf: { "@id": `${STORE.url}/#cannabis-store` },
    about: { "@id": `${STORE.url}/#cannabis-store` },
    primaryImageOfPage: STORE.image,
  };

  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: stringifyJsonLd(webPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: stringifyJsonLd(faqPageJsonLd(NICOTINE_FAQS)),
        }}
      />
      <Navbar />

      <article className={styles.article}>
        <p className={styles.eyebrow}>
          Nicotine vape · Eglinton West / Little Jamaica / Fairbank · Adults
          19+ · Nicotine is addictive
        </p>
        <h1 className={styles.h1}>Nicotine Vapes on Eglinton West</h1>
        <p className={styles.lede}>
          First Nation Smoke keeps a nicotine vape lane at{" "}
          <strong>{STORE.addressLine}</strong> on the Little Jamaica /
          Fairbank stretch of Eglinton West. This page owns that
          neighbourhood query. The current category is{" "}
          <Link href={PATHS.itemsVapes}>/items/vapes</Link> — open that shelf
          for listed names, then confirm the device at the counter. Adults
          19+. Nicotine is addictive. Hours, phone {STORE.phoneDisplay}, and
          the map pin stay on the{" "}
          <Link href="/#contact">homepage visit hub</Link>.
        </p>

        <section className={styles.nap} aria-label="Store name, address, hours, and phone">
          <h2>Nicotine shelf at the 1504 walk-in</h2>
          <p>
            <strong>{STORE.name}</strong>
            <br />
            {STORE.streetAddress}
            <br />
            {STORE.city}, {STORE.region} {STORE.postalCode}
            <br />
            Canada
          </p>
          <p>
            Phone:{" "}
            <a href={`tel:${STORE.phoneE164}`}>{STORE.phoneDisplay}</a>
            <br />
            Hours: {STORE.hoursDetail}
            <br />
            Corridor: {STORE.corridor}
          </p>
        </section>

        <section>
          <h2>Use /items/vapes — do not treat this page as a stock list</h2>
          <p>
            Formats, flavours, and posted prices move. This neighbourhood
            page does not invent puff counts, a featured six-pack, or a sale
            price. Compare the live cards on{" "}
            <Link href={PATHS.itemsVapes}>/items/vapes</Link>, then ask staff
            before you travel for one device. If a single listing is the only
            reason for the trip, call{" "}
            <a href={`tel:${STORE.phoneE164}`}>{STORE.phoneDisplay}</a>.
          </p>
          <p>
            Keep nicotine and cannabis vape routes separate. THC vape
            products live under{" "}
            <Link href="/items/vape-disposables">/items/vape-disposables</Link>.
            Do not relabel one lane as the other.
          </p>
        </section>

        <section>
          <h2>Near-me nicotine vapes on this corridor only</h2>
          <p>
            If you searched nicotine vape near me around Little Jamaica,
            Fairbank, Oakwood, or Dufferin, this is the 1504 door — not a
            city-wide Toronto vape directory. Oakwood Village, Caledonia, and
            Marlee are local handles for the same frontage.
          </p>
          <p>
            Last-block TTC and parking stay on{" "}
            <Link href={PATHS.visit}>how to reach 1504</Link>. Overnight and
            “open now” walk-ins use the equal{" "}
            <Link href={PATHS.twentyFour}>
              24-hour / open-now Eglinton West
            </Link>{" "}
            page. This URL does not steal that job.
          </p>
        </section>

        <section>
          <h2>Other neighbourhood lanes at the same counter</h2>
          <p>
            Flower tiers stay on{" "}
            <Link href="/exotic-weed">Exotic</Link>,{" "}
            <Link href="/premium-weed">Premium</Link>,{" "}
            <Link href="/aaa-weed">AAA+</Link>,{" "}
            <Link href="/aa-weed">AA</Link>, and{" "}
            <Link href="/budget-weed">Budget</Link>. Neighbourhood{" "}
            <Link href={PATHS.deliveryLp}>
              cannabis delivery on Eglinton West
            </Link>{" "}
            and{" "}
            <Link href={PATHS.nativeCigarettesLp}>
              Native cigarettes on Eglinton West
            </Link>{" "}
            have their own pages. The cigarette shelf is{" "}
            <Link href={PATHS.itemsCigarettes}>/items/cigarettes</Link>.
          </p>
        </section>

        <LocalSeoMesh currentPath={PATHS.nicotineVapeLp} tone="light" />

        <div className={styles.mapWrap}>
          <iframe
            title="Map of First Nation Smoke at 1504 Eglinton Ave W, Toronto"
            src={STORE.mapEmbedUrl}
            className={styles.mapIframe}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className={styles.mapNote}>
          Map preview for the Eglinton West pin. The homepage remains the
          visit hub for name, address, phone, and hours.
        </p>

        <section className={styles.faq}>
          <h2>Nicotine vapes on Eglinton West — quick answers</h2>
          {NICOTINE_FAQS.map((faq) => (
            <details key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </section>

        <p className={styles.ctaRow}>
          <Link href={PATHS.itemsVapes} className={styles.primary}>
            Current nicotine vape shelf
          </Link>
          <Link href={PATHS.twentyFour} className={styles.secondary}>
            Open now / 24-hour
          </Link>
          <Link href="/#contact" className={styles.secondary}>
            Homepage map &amp; hours
          </Link>
        </p>
      </article>

      <Footer />
    </main>
  );
}
