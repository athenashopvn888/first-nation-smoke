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

const PAGE_URL = `${STORE.url}${PATHS.deliveryLp}`;

const DELIVERY_FAQS = [
  {
    q: "Does First Nation Smoke offer cannabis delivery on Eglinton West?",
    a: "Yes. Neighbourhood delivery is available from the 1504 Eglinton Ave W walk-in for the Little Jamaica / Fairbank stretch of Eglinton West. The dispatcher confirms current availability and delivery details before an order is accepted. Adults 19+.",
  },
  {
    q: "Is this a city-wide Toronto weed delivery directory?",
    a: "No. This page owns cannabis delivery intent for Eglinton West, Little Jamaica, and Fairbank only. It is not a Toronto-wide delivery list and not a downtown pin. The city URL is a noindex catalog, not the owner of this query.",
  },
  {
    q: "What should I confirm before a Little Jamaica / Fairbank delivery?",
    a: "Confirm you are ordering for this corridor, that you are 19+ with photo ID, and that the dispatcher has accepted the order. The live catalog lists a $60 product minimum and the delivery text number +1 (437) 523-9104. Names and posted prices on the catalog can change.",
  },
  {
    q: "Can I still walk in 24 hours if I do not want delivery?",
    a: "Yes. The storefront at 1504 Eglinton Ave W is listed Open 24 Hours. Delivery uses its own window (the site announcement lists 10am–10pm). Overnight walk-ins use the 24-hour Eglinton West page; this URL stays the neighbourhood delivery owner.",
  },
];

export const metadata: Metadata = {
  title: {
    absolute: "Cannabis Delivery on Eglinton West | First Nation Smoke",
  },
  description:
    "Neighbourhood cannabis delivery from First Nation Smoke at 1504 Eglinton Ave W — Eglinton West / Little Jamaica / Fairbank only. Adults 19+. Confirm availability before an order is accepted.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Cannabis Delivery on Eglinton West",
    description:
      "Delivery notes for the 1504 Eglinton Ave W walk-in on the Little Jamaica / Fairbank stretch. Adults 19+.",
    url: PAGE_URL,
  },
  robots: { index: true, follow: true },
};

export default function CannabisDeliveryEglintonWestPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Cannabis Delivery on Eglinton West",
    url: PAGE_URL,
    description:
      "Neighbourhood cannabis delivery notes from First Nation Smoke at 1504 Eglinton Ave W on Eglinton West through Little Jamaica and Fairbank.",
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
          __html: stringifyJsonLd(faqPageJsonLd(DELIVERY_FAQS)),
        }}
      />
      <Navbar />

      <article className={styles.article}>
        <p className={styles.eyebrow}>
          Neighbourhood delivery · Eglinton West / Little Jamaica / Fairbank ·
          Adults 19+
        </p>
        <h1 className={styles.h1}>Cannabis Delivery on Eglinton West</h1>
        <p className={styles.lede}>
          First Nation Smoke runs neighbourhood cannabis delivery from{" "}
          <strong>{STORE.addressLine}</strong> — the same Little Jamaica /
          Fairbank walk-in, not a city-wide Toronto delivery list. This page
          owns the delivery query for this corridor. Hours, phone{" "}
          {STORE.phoneDisplay}, and the map pin stay on the{" "}
          <Link href="/#contact">homepage visit hub</Link>. The live catalog
          sits behind the noindex city URL; use it to browse names, then wait
          for the dispatcher to confirm what can actually go out.
        </p>

        <section className={styles.nap} aria-label="Store name, address, hours, and phone">
          <h2>Delivery starts at this Eglinton West door</h2>
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
            Walk-in hours: {STORE.hoursDetail}
            <br />
            Corridor: {STORE.corridor}
          </p>
        </section>

        <section>
          <h2>What this delivery page covers — and what it does not</h2>
          <p>
            Use this URL when you searched cannabis delivery or weed delivery
            around Eglinton West, Little Jamaica, or Fairbank. Oakwood Village,
            Caledonia, and Marlee are nearby handles for the same frontage.
            Downtown, waterfront, and other city pins are the wrong hunt.
          </p>
          <p>
            This page does not invent a delivery radius map, a guaranteed
            arrival time, or a locked price list. The dispatcher confirms
            whether an address on this corridor can be served before the
            order is accepted. Adults 19+ only.
          </p>
        </section>

        <section>
          <h2>How to start an Eglinton West delivery order</h2>
          <p>
            Open the{" "}
            <Link href={PATHS.deliveryCatalog}>current delivery catalog</Link>{" "}
            to note product names and weights. The catalog lists a{" "}
            <strong>$60 product minimum</strong> and the delivery text number{" "}
            <a href="sms:+14375239104">+1 (437) 523-9104</a>. The site
            announcement lists delivery hours as 10am–10pm — that window is
            separate from the 24-hour walk-in.
          </p>
          <p>
            New customers complete the private ID step in Web Chat on the
            catalog page. Posted names move; do not treat a screenshot as a
            stock promise. If one item is the only reason to order, wait for
            the dispatcher or call{" "}
            <a href={`tel:${STORE.phoneE164}`}>{STORE.phoneDisplay}</a>.
          </p>
        </section>

        <section>
          <h2>Walk-in, overnight, and the other neighbourhood shelves</h2>
          <p>
            Prefer the counter? The door at 1504 is listed Open 24 Hours.
            <Link href={PATHS.visit}> How to reach 1504</Link> covers TTC from
            Eglinton West Station, the 32 Eglinton West bus, driving, and
            curb parking.             Overnight and “open now” intent stays on the equal{" "}
            <Link href={PATHS.twentyFour}>
              24-hour / open-now Eglinton West
            </Link>{" "}
            page — not a side note.
          </p>
          <p>
            Flower comparison stays on the tier pages —{" "}
            <Link href="/exotic-weed">Exotic</Link>,{" "}
            <Link href="/premium-weed">Premium</Link>,{" "}
            <Link href="/aaa-weed">AAA+</Link>,{" "}
            <Link href="/aa-weed">AA</Link>,{" "}
            <Link href="/budget-weed">Budget</Link>. Listed{" "}
            <Link href={PATHS.nativeCigarettesLp}>
              Native cigarettes on Eglinton West
            </Link>{" "}
            and{" "}
            <Link href={PATHS.nicotineVapeLp}>
              nicotine vapes on Eglinton West
            </Link>{" "}
            have their own neighbourhood pages. This URL does not replace
            those shelves.
          </p>
        </section>

        <LocalSeoMesh currentPath={PATHS.deliveryLp} tone="light" />

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
          <h2>Eglinton West delivery — quick answers</h2>
          {DELIVERY_FAQS.map((faq) => (
            <details key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </section>

        <p className={styles.ctaRow}>
          <Link href={PATHS.deliveryCatalog} className={styles.primary}>
            Browse delivery catalog
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
