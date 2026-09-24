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

const PAGE_URL = `${STORE.url}${PATHS.nativeCigarettesLp}`;

const NATIVE_CIG_FAQS = [
  {
    q: "Where along Eglinton West is the Native cigarettes shelf?",
    a: "It is inside the same First Nation Smoke walk-in at 1504 Eglinton Ave W, on the Little Jamaica and Fairbank frontage near Oakwood and Dufferin. Native cigarettes is the merchandise category name for that shelf when those packs are listed. Ask at the counter if a sleeve is hard to read.",
  },
  {
    q: "Does that merchandise label mean a second shop on this block?",
    a: "No. Native cigarettes names a merchandise category at the one 1504 door. The business name stays First Nation Smoke. This note does not describe ownership, a medical purpose, or another address.",
  },
  {
    q: "How can I see listed packs before I board the 32 Eglinton West bus?",
    a: "Open the cigarette category, then match the sleeve at the Little Jamaica counter. Names and carton notes change, so this page does not publish a fixed pack count or a fixed price. Call +1 289 819 5073 when one printed name is the only reason to leave Fairbank.",
  },
  {
    q: "Is the cigarette shelf on the same Open 24 Hours walk-in as the rest of 1504?",
    a: "Yes, while the homepage hours card still says Open 24 Hours. Adults 19+ need government photo ID. Night-time door notes sit on the 24-hour Eglinton West page. This URL only covers the cigarette category.",
  },
];

export const metadata: Metadata = {
  title: {
    absolute: "Native Cigarettes on Eglinton West | First Nation Smoke",
  },
  description:
    "Native cigarettes are a merchandise category on the cigarette shelf at First Nation Smoke, 1504 Eglinton Ave W, Little Jamaica on Eglinton West. Adults 19+. Read the live cigarette cards before you ride the 32.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Native Cigarettes on Eglinton West",
    description:
      "Merchandise-category notes for the cigarette shelf at 1504 Eglinton Ave W in Little Jamaica. Adults 19+.",
    url: PAGE_URL,
  },
  robots: { index: true, follow: true },
};

export default function NativeCigarettesEglintonWestPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Native Cigarettes on Eglinton West",
    url: PAGE_URL,
    description:
      "Merchandise-category notes for cigarettes at First Nation Smoke, 1504 Eglinton Ave W, on Eglinton West through Little Jamaica and Fairbank.",
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
          __html: stringifyJsonLd(faqPageJsonLd(NATIVE_CIG_FAQS)),
        }}
      />
      <Navbar />

      <article className={styles.article}>
        <p className={styles.eyebrow}>
          Cigarette category · Eglinton West / Little Jamaica / Fairbank ·
          Adults 19+
        </p>
        <h1 className={styles.h1}>Native Cigarettes on Eglinton West</h1>
        <p className={styles.lede}>
          The cigarette lane at First Nation Smoke is inside the walk-in at{" "}
          <strong>{STORE.addressLine}</strong>, on the Little Jamaica stretch
          of Eglinton West between the Oakwood and Dufferin corners. When the
          shelf lists them, Native cigarettes are a merchandise category on
          that lane — shelf wording only. Phone {STORE.phoneDisplay} and the
          Open 24 Hours card live on the{" "}
          <Link href="/#contact">homepage visit hub</Link>, next to the map
          pin for this Fairbank frontage.
        </p>

        <section className={styles.nap} aria-label="Store name, address, hours, and phone">
          <h2>1504 on the Little Jamaica frontage</h2>
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
          <h2>Merchandise category, nothing further</h2>
          <p>
            At civic 1504, “Native cigarettes” only names a merchandise
            category on the cigarette shelf, the same label already used
            beside the flower wall. The shop name remains First Nation Smoke.
            This Eglinton West note does not add an ownership story, a
            medical purpose, or a second door on Oakwood or Dufferin.
          </p>
          <p>
            Sleeves and carton notes move. A name you saw before the 32
            Eglinton West bus left Eglinton West Station can be off the rack
            by the time you reach Little Jamaica. Read the{" "}
            <Link href={PATHS.itemsCigarettes}>current cigarette category</Link>{" "}
            and compare the sleeve in your hand at the counter.
          </p>
        </section>

        <section>
          <h2>From the 32 bus to the cigarette cards</h2>
          <p>
            If the errand is a listed pack, start with this Little Jamaica
            note, then open{" "}
            <Link href={PATHS.itemsCigarettes}>/items/cigarettes</Link>. Call{" "}
            <a href={`tel:${STORE.phoneE164}`}>{STORE.phoneDisplay}</a> before
            you leave Fairbank when one printed name is the whole trip.
            Neighbourhood detail for this frontage stays here.
          </p>
          <p>
            Curb signs along Eglinton Avenue West, plus the Dufferin and
            Oakwood approaches, are written on{" "}
            <Link href={PATHS.visit}>/visit</Link>. After midnight, door
            notes move to the{" "}
            <Link href={PATHS.twentyFour}>24-hour Eglinton West</Link> page.
            The cigarette URL does not take over that job.
          </p>
        </section>

        <section>
          <h2>Same 1504 counter, other errands</h2>
          <p>
            Flower shoppers use the{" "}
            <Link href="/exotic-weed">exotic</Link>,{" "}
            <Link href="/premium-weed">premium</Link>,{" "}
            <Link href="/aaa-weed">AAA+</Link>,{" "}
            <Link href="/aa-weed">AA</Link>, and{" "}
            <Link href="/budget-weed">budget</Link> walls at this door.
            Separate Eglinton West notes cover the{" "}
            <Link href={PATHS.weedDispensaryLp}>weed dispensary</Link>,{" "}
            <Link href={PATHS.deliveryLp}>cannabis delivery</Link>, and{" "}
            <Link href={PATHS.nicotineVapeLp}>nicotine vapes</Link>. Nicotine
            cards themselves are filed at{" "}
            <Link href={PATHS.itemsVapes}>/items/vapes</Link>.
          </p>
        </section>

        <LocalSeoMesh currentPath={PATHS.nativeCigarettesLp} tone="light" />

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
          The frame marks 1504 on Eglinton Avenue West through Little
          Jamaica. For the phone line and the Open 24 Hours card, return to
          the homepage hub.
        </p>

        <section className={styles.faq}>
          <h2>Cigarette-shelf questions for this Little Jamaica door</h2>
          {NATIVE_CIG_FAQS.map((faq) => (
            <details key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </section>

        <p className={styles.ctaRow}>
          <Link href={PATHS.itemsCigarettes} className={styles.primary}>
            Current cigarette shelf
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
