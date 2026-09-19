import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LocalSeoMesh from "../components/LocalSeoMesh";
import { PATHS, TWENTY_FOUR_HOUR_HREF } from "../lib/organicPaths";
import {
  STORE,
  faqPageJsonLd,
  stringifyJsonLd,
} from "../lib/storeIdentity";
import styles from "../visit/visit.module.css";

const PAGE_URL = `${STORE.url}${TWENTY_FOUR_HOUR_HREF}`;

const TWENTY_FOUR_FAQS = [
  {
    q: "Is First Nation Smoke a 24-hour dispensary on Eglinton West?",
    a: "Yes. The walk-in at 1504 Eglinton Ave W, Toronto, ON M6E 2G5 is listed Open 24 Hours, seven days a week. That claim matches the homepage hours card. This page is only for overnight and open-now intent on the Little Jamaica / Fairbank stretch — not a city-wide Toronto directory.",
  },
  {
    q: "Can adults 19+ walk in after midnight at 1504 Eglinton Ave W?",
    a: "Yes, with government-issued photo ID. No appointment is required at 3 a.m. or 3 p.m. Staff still check ID at the door. If one product is the only reason for the trip, call +1 289 819 5073 first; posted names change.",
  },
  {
    q: "Is this a Toronto-wide 24-hour dispensary list?",
    a: "No. This page covers one storefront: First Nation Smoke on Eglinton Avenue West through Little Jamaica and Fairbank, near Dufferin Street and Oakwood Avenue. Downtown, waterfront, and other city pins are the wrong hunt.",
  },
  {
    q: "How do I reach the 24-hour door if the subway has stopped?",
    a: "Stay on Eglinton Avenue West and match civic number 1504. Use a car, taxi, or rideshare along Eglinton rather than a downtown pin. The /visit page has daytime TTC notes from Eglinton West Station and the 32 Eglinton West bus; night surface service can change, so do not treat a bus number as a guarantee.",
  },
  {
    q: "Is First Nation Smoke open now near me on Eglinton West?",
    a: "If you are on the Little Jamaica / Fairbank stretch of Eglinton Avenue West — near Dufferin Street or Oakwood Avenue — the walk-in at 1504 is listed Open 24 Hours. That is the open-now / near-me answer for this corridor. Confirm civic 1504 before you leave. Adults 19+ with photo ID.",
  },
  {
    q: "If I searched “dispensary near me,” is this the Little Jamaica door?",
    a: "Only if you mean Eglinton West through Little Jamaica and Fairbank. This page is not a downtown Toronto open-now list. Match 1504 Eglinton Ave W, then use the homepage map if neighbouring retail hides the door.",
  },
];

export const metadata: Metadata = {
  title: {
    absolute:
      "24-Hour Dispensary on Eglinton West | First Nation Smoke",
  },
  description:
    "First Nation Smoke at 1504 Eglinton Ave W is listed Open 24 Hours on the Little Jamaica / Fairbank stretch of Eglinton West. Adults 19+. Homepage keeps the map and hours hub.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "24-Hour Dispensary on Eglinton West",
    description:
      "Overnight walk-in at 1504 Eglinton Ave W, Little Jamaica / Fairbank. Adults 19+. Open 24 Hours.",
    url: PAGE_URL,
  },
  robots: { index: true, follow: true },
};

export default function TwentyFourHourEglintonWestPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "24-Hour Dispensary on Eglinton West",
    url: PAGE_URL,
    description:
      "Overnight and open-now notes for First Nation Smoke at 1504 Eglinton Ave W on Eglinton West through Little Jamaica and Fairbank.",
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
          __html: stringifyJsonLd(faqPageJsonLd(TWENTY_FOUR_FAQS)),
        }}
      />
      <Navbar />

      <article className={styles.article}>
        <p className={styles.eyebrow}>
          24-hour / open-now · Eglinton West only · Adults 19+
        </p>
        <h1 className={styles.h1}>24-Hour Dispensary on Eglinton West</h1>
        <p className={styles.lede}>
          First Nation Smoke lists <strong>{STORE.hoursDetail}</strong> at{" "}
          <strong>{STORE.addressLine}</strong>. This page owns overnight and
          “open now” intent for the Little Jamaica / Fairbank corridor — not
          a soft city-wide Toronto 24-hour list. Hours, phone{" "}
          {STORE.phoneDisplay}, and the map pin stay on the{" "}
          <Link href="/#contact">homepage visit hub</Link>. Use{" "}
          <Link href="/visit">how to reach 1504</Link> for TTC, driving, and
          parking geometry.
        </p>

        <section className={styles.nap} aria-label="Store name, address, hours, and phone">
          <h2>Overnight NAP on Eglinton Avenue West</h2>
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
          <h2>What “open 24 hours” means at 1504</h2>
          <p>
            The listed hours are the same night and day: open 24 hours, seven
            days a week. Adults 19+ can walk in without an appointment. Bring
            government-issued photo ID even after midnight. This is still a
            retail counter — not a medical office, and not a second shop
            somewhere else in Toronto.
          </p>
          <p>
            If you searched “dispensary open now” or “24 hour weed near
            Eglinton West,” confirm civic number <strong>1504</strong> on
            Eglinton Avenue West before you leave. Oakwood Avenue sits east;
            Dufferin Street is the close north-south handle. Fairbank and
            Little Jamaica name the same frontage, not two locations.
          </p>
        </section>

        <section>
          <h2>After midnight on this corridor</h2>
          <p>
            Night visits use the same geometry as daytime: Eglinton Avenue
            West is the frontage road. From Allen Road / Eglinton West
            Station, continue west until Oakwood is behind you and 1504 is on
            the commercial strip. From Dufferin, turn onto Eglinton and match
            the building number. Do not drop toward a downtown or waterfront
            pin.
          </p>
          <p>
            Curb parking on Eglinton is often easier overnight than at midday
            around the Dufferin and Oakwood retail blocks. Read the signs on
            the stall you actually use. This page does not invent a private
            lot or validation. If you are being dropped off, use the Eglinton
            curb in front of 1504.
          </p>
          <p>
            Line 1 and the 32 Eglinton West bus are the usual daytime TTC
            story on <Link href="/visit">/visit</Link>. Overnight surface
            service can change; if the subway has stopped, stay on Eglinton
            Avenue West by car, taxi, or rideshare and match 1504. Do not
            treat a bus number on this page as a night-service guarantee.
          </p>
        </section>

        <section>
          <h2>Open now / near me on this block</h2>
          <p>
            If you searched “dispensary open now,” “24 hour weed near me,” or
            “walk-in near me” around Little Jamaica, Fairbank, Oakwood, or
            Dufferin, this is the 1504 door — not a city-wide Toronto
            open-now directory. Stay on Eglinton Avenue West and match the
            civic number. The homepage hours card is the live listing; this
            page owns the overnight / open-now write-up for this corridor
            only.
          </p>
          <p>
            Adults 19+ can walk in without an appointment at any hour we
            list as open. Staff still check photo ID after midnight. If you
            are not on this stretch, do not treat a generic near-me result as
            this storefront.
          </p>
        </section>

        <section>
          <h2>What to browse when the door is open</h2>
          <p>
            The overnight counter is the same menu lanes as daytime: flower
            tiers, pre-rolls, edibles, vapes, concentrates, accessories, and
            listed cigarettes. Names and posted prices move; call{" "}
            <a href={`tel:${STORE.phoneE164}`}>{STORE.phoneDisplay}</a> if
            one item is the only reason to come out. No medical claims —
            adult retail only.
          </p>
          <p>
            Flower comparison still starts on one tier page —{" "}
            <Link href="/exotic-weed">Exotic</Link>,{" "}
            <Link href="/premium-weed">Premium</Link>,{" "}
            <Link href="/aaa-weed">AAA+</Link>,{" "}
            <Link href="/aa-weed">AA</Link>, or{" "}
            <Link href="/budget-weed">Budget</Link> — then the live card in
            store. Neighbourhood notes for{" "}
            <Link href={PATHS.deliveryLp}>
              cannabis delivery on Eglinton West
            </Link>
            ,{" "}
            <Link href={PATHS.nativeCigarettesLp}>
              Native cigarettes on Eglinton West
            </Link>
            , and{" "}
            <Link href={PATHS.nicotineVapeLp}>
              nicotine vapes on Eglinton West
            </Link>{" "}
            (shelf at <Link href={PATHS.itemsVapes}>/items/vapes</Link>) live
            on their own URLs. This page stays the 24-hour / open-now owner.
            The homepage map remains the pin if neighbouring retail makes
            the door hard to pick out from the curb.
          </p>
        </section>

        <LocalSeoMesh currentPath={TWENTY_FOUR_HOUR_HREF} tone="light" />

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
          <h2>24-hour Eglinton West — quick answers</h2>
          {TWENTY_FOUR_FAQS.map((faq) => (
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
          <Link href="/visit" className={styles.secondary}>
            How to reach 1504
          </Link>
        </p>
      </article>

      <Footer />
    </main>
  );
}
