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
    q: "Does the Eglinton West counter list Native cigarettes?",
    a: "The cigarette shelf at 1504 Eglinton Ave W includes Native cigarettes as a merchandise category when those items are listed. That is retail category language only. Confirm the current card on the cigarette shelf or ask staff before you travel for one brand.",
  },
  {
    q: "What does “Native cigarettes” mean on this page?",
    a: "It means the cigarette merchandise category already used on this site — retail shelf language only, not a medical claim, and not a second shop. The brand name of the store stays First Nation Smoke.",
  },
  {
    q: "Where do I check the current cigarette shelf at 1504?",
    a: "Open /items/cigarettes for the listed cigarette category, then match the package at the Little Jamaica / Fairbank counter. This neighbourhood page does not invent stock, carton counts, or prices. Call +1 289 819 5073 if one label is the only reason for the trip.",
  },
  {
    q: "Can adults 19+ buy listed cigarettes after midnight on this corridor?",
    a: "Yes, when the homepage still lists Open 24 Hours. Bring government-issued photo ID. Overnight geometry sits on the 24-hour Eglinton West page. This URL stays the Native cigarettes neighbourhood owner — not the open-now page.",
  },
];

export const metadata: Metadata = {
  title: {
    absolute: "Native Cigarettes on Eglinton West | First Nation Smoke",
  },
  description:
    "Native cigarettes as a listed merchandise category at First Nation Smoke, 1504 Eglinton Ave W on Eglinton West through Little Jamaica and Fairbank. Adults 19+. Check the current cigarette shelf. No medical claims.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Native Cigarettes on Eglinton West",
    description:
      "Retail category notes for listed Native cigarettes at 1504 Eglinton Ave W. Adults 19+. Current shelf at /items/cigarettes.",
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
      "Neighbourhood notes for listed Native cigarettes at First Nation Smoke, 1504 Eglinton Ave W on Eglinton West through Little Jamaica and Fairbank.",
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
          First Nation Smoke lists Native cigarettes as a merchandise
          category on the cigarette shelf at{" "}
          <strong>{STORE.addressLine}</strong>. This page owns that
          neighbourhood query for the Little Jamaica / Fairbank stretch of
          Eglinton West. It is stronger than the thin city info URL. Retail
          category language only — no medical claims. Hours, phone{" "}
          {STORE.phoneDisplay}, and the map pin stay on the{" "}
          <Link href="/#contact">homepage visit hub</Link>.
        </p>

        <section className={styles.nap} aria-label="Store name, address, hours, and phone">
          <h2>The shelf is at 1504 Eglinton Ave W</h2>
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
          <h2>Retail category language only</h2>
          <p>
            On this site, “Native cigarettes” means the cigarette merchandise
            category — the same wording already used on the homepage and
            cigarette lane. The store brand stays First Nation Smoke. This
            page does not add ownership stories or medical claims. Adults
            19+ with photo ID.
          </p>
          <p>
            Brand names, carton notes, and posted prices change. This URL
            does not lock a carton price, a pack deal, or a guaranteed
            brand. Open the{" "}
            <Link href={PATHS.itemsCigarettes}>current cigarette category</Link>{" "}
            and match the package at the counter.
          </p>
        </section>

        <section>
          <h2>How to use this page on a Little Jamaica stop</h2>
          <p>
            If the visit is about listed cigarettes, start here for the
            neighbourhood note, then finish on{" "}
            <Link href={PATHS.itemsCigarettes}>/items/cigarettes</Link>. If
            one exact label is the only reason to come out, call{" "}
            <a href={`tel:${STORE.phoneE164}`}>{STORE.phoneDisplay}</a> first.
            Neighbourhood notes live here, not on a city-wide Toronto page.
          </p>
          <p>
            Finding the door is still a how-to-reach job: use{" "}
            <Link href={PATHS.visit}>/visit</Link> for TTC from Eglinton West
            Station, the 32 Eglinton West bus, Dufferin, Oakwood, and curb
            parking. Overnight walk-ins use the{" "}
            <Link href={PATHS.twentyFour}>24-hour Eglinton West</Link> page.
          </p>
        </section>

        <section>
          <h2>Same counter as flower, delivery, and nicotine vapes</h2>
          <p>
            Cigarettes are one lane at the same 1504 counter. Flower
            comparison stays on{" "}
            <Link href="/exotic-weed">Exotic</Link>,{" "}
            <Link href="/premium-weed">Premium</Link>,{" "}
            <Link href="/aaa-weed">AAA+</Link>,{" "}
            <Link href="/aa-weed">AA</Link>, and{" "}
            <Link href="/budget-weed">Budget</Link>. Neighbourhood{" "}
            <Link href={PATHS.weedDispensaryLp}>
              weed dispensary on Eglinton West
            </Link>
            ,{" "}
            <Link href={PATHS.deliveryLp}>
              cannabis delivery on Eglinton West
            </Link>
            , and{" "}
            <Link href={PATHS.nicotineVapeLp}>
              nicotine vapes on Eglinton West
            </Link>{" "}
            (current nicotine shelf at{" "}
            <Link href={PATHS.itemsVapes}>/items/vapes</Link>) have their own
            URLs. This page does not replace those lanes. The 24-hour /
            open-now page is equal, not a side note.
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
          Map preview for the Eglinton West pin. The homepage remains the
          visit hub for name, address, phone, and hours.
        </p>

        <section className={styles.faq}>
          <h2>Native cigarettes on this corridor — quick answers</h2>
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
