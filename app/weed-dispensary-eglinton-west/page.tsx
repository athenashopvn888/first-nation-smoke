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

const PAGE_URL = `${STORE.url}${PATHS.weedDispensaryLp}`;

const WEED_DISPENSARY_FAQS = [
  {
    q: "Is First Nation Smoke the weed dispensary for Eglinton West, Little Jamaica, and Fairbank?",
    a: "Yes. The walk-in at 1504 Eglinton Ave W is the weed dispensary on this corridor — Eglinton West through Little Jamaica and Fairbank, near Dufferin Street and Oakwood Avenue. This URL owns that neighbourhood query. It is not a city-wide Toronto dispensary list. Adults 19+ with photo ID.",
  },
  {
    q: "Does /weed-dispensary-eglinton-west list current stock or prices?",
    a: "No. This neighbourhood page does not invent flower names, weights, sale prices, or a guaranteed shelf. Compare a live flower tier or category, then ask staff at 1504 or call +1 289 819 5073 before travelling for one item.",
  },
  {
    q: "Should I use this page or /info/toronto-weed-dispensary for a Little Jamaica walk-in?",
    a: "Use this corridor URL. /weed-dispensary-eglinton-west is the neighbourhood owner for Eglinton West / Little Jamaica / Fairbank. The city /info/toronto-weed-dispensary page is a supporting Toronto URL only — not the owner of this walk-in query.",
  },
  {
    q: "Do adults 19+ need an appointment to visit this Eglinton West weed dispensary?",
    a: "No. Adults 19+ with government-issued photo ID walk in. Hours stay on the homepage hub (listed Open 24 Hours). Overnight and open-now notes sit on the 24-hour Eglinton West page. This URL stays the weed dispensary neighbourhood owner.",
  },
];

export const metadata: Metadata = {
  title: {
    absolute: "Weed Dispensary on Eglinton West | First Nation Smoke",
  },
  description:
    "Weed dispensary at First Nation Smoke, 1504 Eglinton Ave W on Eglinton West through Little Jamaica and Fairbank. Adults 19+. Walk-in retail only. No stock or price promises. Homepage keeps hours and the map.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Weed Dispensary on Eglinton West",
    description:
      "Neighbourhood walk-in notes for the weed dispensary at 1504 Eglinton Ave W. Adults 19+. Confirm the current menu in store.",
    url: PAGE_URL,
  },
  robots: { index: true, follow: true },
};

export default function WeedDispensaryEglintonWestPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Weed Dispensary on Eglinton West",
    url: PAGE_URL,
    description:
      "Neighbourhood weed dispensary notes for First Nation Smoke at 1504 Eglinton Ave W on Eglinton West through Little Jamaica and Fairbank.",
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
          __html: stringifyJsonLd(faqPageJsonLd(WEED_DISPENSARY_FAQS)),
        }}
      />
      <Navbar />

      <article className={styles.article}>
        <p className={styles.eyebrow}>
          Weed dispensary · Eglinton West / Little Jamaica / Fairbank · Adults
          19+
        </p>
        <h1 className={styles.h1}>Weed Dispensary on Eglinton West</h1>
        <p className={styles.lede}>
          First Nation Smoke is the adult walk-in weed dispensary at{" "}
          <strong>{STORE.addressLine}</strong> — the Little Jamaica / Fairbank
          stretch of Eglinton West, not a downtown pin and not a city-wide
          Toronto shop list. This page owns that neighbourhood query. Hours,
          phone {STORE.phoneDisplay}, and the map pin stay on the{" "}
          <Link href="/#contact">homepage visit hub</Link>. Use{" "}
          <Link href={PATHS.visit}>how to reach 1504</Link> for TTC, driving,
          and parking. This URL does not invent stock or a sale price.
        </p>

        <section className={styles.nap} aria-label="Store name, address, hours, and phone">
          <h2>The dispensary door is 1504 Eglinton Ave W</h2>
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
          <h2>What this weed dispensary page owns</h2>
          <p>
            Use this URL when you searched weed dispensary, cannabis shop, or
            dispensary near me around Eglinton West, Little Jamaica, or
            Fairbank. Oakwood Village, Caledonia, and Marlee are local
            handles for the same frontage. Match civic number{" "}
            <strong>1504</strong> on Eglinton Avenue West.
          </p>
          <p>
            The thin city info URL{" "}
            <Link href="/info/toronto-weed-dispensary">
              /info/toronto-weed-dispensary
            </Link>{" "}
            is not the owner. Neighbourhood notes live here. Adults 19+ with
            photo ID. Retail walk-in only — no medical claims.
          </p>
        </section>

        <section>
          <h2>How to start a Little Jamaica / Fairbank visit</h2>
          <p>
            Confirm hours and the pin on the homepage, then pick one flower
            lane —{" "}
            <Link href="/exotic-weed">Exotic</Link>,{" "}
            <Link href="/premium-weed">Premium</Link>,{" "}
            <Link href="/aaa-weed">AAA+</Link>,{" "}
            <Link href="/aa-weed">AA</Link>, or{" "}
            <Link href="/budget-weed">Budget</Link> — or another listed
            category such as{" "}
            <Link href="/items/prerolls">pre-rolls</Link>. Names and posted
            prices move. If one listing is the only reason for the trip, call{" "}
            <a href={`tel:${STORE.phoneE164}`}>{STORE.phoneDisplay}</a> first.
          </p>
          <p>
            Last-block TTC from Eglinton West Station, the 32 Eglinton West
            bus, Dufferin, Oakwood, and curb parking stay on{" "}
            <Link href={PATHS.visit}>/visit</Link>. Overnight and “open now”
            intent stays on the equal{" "}
            <Link href={PATHS.twentyFour}>
              24-hour / open-now Eglinton West
            </Link>{" "}
            page. This URL does not steal that job.
          </p>
        </section>

        <section>
          <h2>Same counter as delivery, cigarettes, and nicotine vapes</h2>
          <p>
            This is the walk-in weed dispensary owner for the corridor.
            Neighbourhood{" "}
            <Link href={PATHS.deliveryLp}>
              cannabis delivery on Eglinton West
            </Link>
            ,{" "}
            <Link href={PATHS.nativeCigarettesLp}>
              Native cigarettes on Eglinton West
            </Link>{" "}
            (merchandise category only; shelf at{" "}
            <Link href={PATHS.itemsCigarettes}>/items/cigarettes</Link>), and{" "}
            <Link href={PATHS.nicotineVapeLp}>
              nicotine vapes on Eglinton West
            </Link>{" "}
            (shelf at <Link href={PATHS.itemsVapes}>/items/vapes</Link>) have
            their own pages. They do not replace this dispensary URL. The
            24-hour / open-now page is equal, not a side note.
          </p>
        </section>

        <LocalSeoMesh currentPath={PATHS.weedDispensaryLp} tone="light" />

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
          <h2>Weed dispensary on Eglinton West — quick answers</h2>
          {WEED_DISPENSARY_FAQS.map((faq) => (
            <details key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </section>

        <p className={styles.ctaRow}>
          <Link href="/#contact" className={styles.primary}>
            Homepage map &amp; hours
          </Link>
          <Link href={PATHS.visit} className={styles.secondary}>
            How to reach 1504
          </Link>
          <Link href={PATHS.twentyFour} className={styles.secondary}>
            Open now / 24-hour
          </Link>
          <Link href={PATHS.deliveryLp} className={styles.secondary}>
            Cannabis delivery
          </Link>
        </p>
      </article>

      <Footer />
    </main>
  );
}
