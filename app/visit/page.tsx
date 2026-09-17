import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  STORE,
  faqPageJsonLd,
  stringifyJsonLd,
} from "../lib/storeIdentity";
import styles from "./visit.module.css";

const VISIT_FAQS = [
  {
    q: "What is the exact address for First Nation Smoke?",
    a: "1504 Eglinton Ave W, Toronto, ON M6E 2G5. The storefront sits on Eglinton Avenue West through Little Jamaica and Fairbank, near Dufferin Street and Oakwood Avenue. Phone +1 289 819 5073.",
  },
  {
    q: "How do I drive to 1504 Eglinton Ave W?",
    a: "Stay on Eglinton Avenue West. From Allen Road / Eglinton West Station, continue west past Oakwood. From Dufferin Street, turn onto Eglinton and look for civic number 1504. The homepage map is the pin if storefront signage is tight on the block.",
  },
  {
    q: "Which TTC stop is closest to First Nation Smoke?",
    a: "Eglinton West Station (Line 1) is the subway anchor east of the door. Finish west on Eglinton Avenue West via the 32 Eglinton West bus. Dufferin buses meet Eglinton a short walk from 1504. This page is not a city-wide Toronto delivery map.",
  },
  {
    q: "Is First Nation Smoke a walk-in for adults 19+?",
    a: "Yes. Bring government-issued photo ID. No appointment is required. Hours on this page match the homepage hub: Open 24 Hours.",
  },
];

export const metadata: Metadata = {
  title: {
    absolute:
      "How to Reach First Nation Smoke | Eglinton West, Little Jamaica & Fairbank",
  },
  description:
    "Driving, TTC, and parking notes for First Nation Smoke at 1504 Eglinton Ave W, Toronto. Eglinton West / Little Jamaica / Fairbank corridor only. Adults 19+. Open 24 Hours. Homepage keeps the map and hours hub.",
  alternates: {
    canonical: "https://www.firstnationsmokez.com/visit",
  },
  openGraph: {
    title: "How to Reach First Nation Smoke on Eglinton West",
    description:
      "Walk, drive, or ride TTC to 1504 Eglinton Ave W near Little Jamaica, Fairbank, Dufferin, and Oakwood. Adults 19+.",
    url: "https://www.firstnationsmokez.com/visit",
  },
  robots: { index: true, follow: true },
};

export default function VisitPage() {
  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: stringifyJsonLd(faqPageJsonLd(VISIT_FAQS)),
        }}
      />
      <Navbar />

      <article className={styles.article}>
        <p className={styles.eyebrow}>
          Supporting how-to-reach page · Adults 19+
        </p>
        <h1 className={styles.h1}>
          How to Reach First Nation Smoke on Eglinton West
        </h1>
        <p className={styles.lede}>
          This page is only for finding the storefront at{" "}
          <strong>{STORE.addressLine}</strong>, on the Little Jamaica and
          Fairbank stretch of Eglinton Avenue West. It is not a city-wide
          Toronto delivery guide. Hours, the pin, and the full
          name-address-phone block stay on the{" "}
          <Link href="/#contact">homepage visit hub</Link>. Use these notes
          when you are coming along Eglinton West, Dufferin, or Oakwood.
        </p>

        <section className={styles.nap} aria-label="Store name, address, and phone">
          <h2>First Nation Smoke — name, address, phone</h2>
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
          <h2>Find 1504 on Eglinton Avenue West</h2>
          <p>
            First Nation Smoke faces Eglinton Avenue West in the Little
            Jamaica / Fairbank retail strip, with Oakwood Avenue to the east
            and Dufferin Street close on the same frontage. Shoppers coming
            from Oakwood Village, Caledonia, Marlee, or the Allen Road subway
            should think “Eglinton West,” not a downtown waterfront pin. The
            building number is <strong>1504</strong>. If you overshoot west of
            Dufferin, turn back east on Eglinton; if you are still beside
            Eglinton West Station, keep going west until Oakwood is behind
            you and 1504 is on the commercial frontage.
          </p>
          <p>
            Little Jamaica is the corridor name most people use for this
            stretch of Eglinton. Fairbank sits immediately around the
            storefront. Neither name is a second shop — they describe the
            same walk-in at 1504. Match the civic number on the building, then
            use the homepage map if neighbouring retail makes the door hard
            to pick out from the curb.
          </p>
        </section>

        <section>
          <h2>Driving from Dufferin, Oakwood, and Allen Road</h2>
          <p>
            From Dufferin Street, turn onto Eglinton Avenue West and look for
            1504 on the retail strip. From Oakwood Avenue, turn west onto
            Eglinton and continue a short block toward Dufferin. From Allen
            Road (the Eglinton West Station / Highway 401 connector), join
            Eglinton Avenue West and travel west — do not drop south toward
            St. Clair unless you already know a local side street that
            returns you to Eglinton.
          </p>
          <p>
            From the 401, Allen Road south to Eglinton is the straightforward
            climb onto this corridor. After you pass the subway station,
            Eglinton Avenue West is the road that actually holds the
            storefront. Night visits use the same geometry: Eglinton is the
            frontage road, Dufferin and Oakwood are the north-south handles,
            and 1504 is the civic number to match on the building.
          </p>
        </section>

        <section>
          <h2>TTC from Eglinton West Station and local buses</h2>
          <p>
            <strong>Eglinton West Station</strong> (Line 1 Yonge–University)
            is the subway anchor east of the door. Leave toward Eglinton
            Avenue West and continue west. The 32 Eglinton West bus covers
            that last stretch along the street itself — you do not need a
            second subway line to finish the trip.
          </p>
          <p>
            <strong>Dufferin buses</strong> meet Eglinton Avenue West a short
            walk from 1504. If you searched a generic “dispensary near me”
            result, confirm you are aiming at Eglinton West / Little Jamaica /
            Fairbank, not a different Toronto corridor. Surface stops on
            Eglinton are closer to the door than any downtown streetcar.
          </p>
        </section>

        <section>
          <h2>Parking on Eglinton Avenue West</h2>
          <p>
            Curb parking on Eglinton Avenue West is the practical option for
            most walk-in visits. Midday can be tighter around the Dufferin
            and Oakwood retail blocks; evening and overnight curb space is
            usually easier. Read posted signs on the block you actually stop
            on. This page does not invent a private lot, validation, or a
            reserved stall.
          </p>
          <p>
            If you are being dropped off, use the Eglinton Avenue West curb
            in front of 1504 rather than a side street that does not face the
            store. After you park, the homepage map is the check that you
            matched the civic number.
          </p>
        </section>

        <section>
          <h2>Walk-in, ID, and what to do when you arrive</h2>
          <p>
            First Nation Smoke is a walk-in for adults 19+. Bring
            government-issued photo ID. Staff can show the current menu
            categories — flower, pre-rolls, edibles, vapes, concentrates,
            accessories, and listed cigarettes (Native cigarettes are a
            merchandise category on that shelf, not a cultural claim). This
            page does not claim stock, sale prices, or a medical benefit. If
            one product is the only reason for the trip, call{" "}
            <a href={`tel:${STORE.phoneE164}`}>{STORE.phoneDisplay}</a> first.
          </p>
          <p>
            Hours on the door match the homepage: {STORE.hoursDetail}. After
            you know the route, go back to the{" "}
            <Link href="/">First Nation Smoke homepage</Link> for the live
            map pin, the hours card, and menu lanes. Delivery, when you want
            it, stays on a separate URL and is scoped to this neighbourhood
            — it is not a city-wide Toronto delivery war.
          </p>
        </section>

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
          visit hub if you only need NAP and hours.
        </p>

        <section className={styles.faq}>
          <h2>Getting here — quick answers</h2>
          {VISIT_FAQS.map((faq) => (
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
          <a href={`tel:${STORE.phoneE164}`} className={styles.secondary}>
            Call {STORE.phoneDisplay}
          </a>
        </p>
      </article>

      <Footer />
    </main>
  );
}
