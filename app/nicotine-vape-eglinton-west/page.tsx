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
    q: "Which list shows nicotine devices for the Little Jamaica counter?",
    a: "Open the vape category for names currently filed at 1504 Eglinton Ave W. This Eglinton West page only places that shelf on the Fairbank frontage. It does not stand in for the category list. Nicotine is addictive.",
  },
  {
    q: "Does the Eglinton West nicotine note quote a price or a puff count?",
    a: "No. The Little Jamaica note does not invent puff counts, and it does not print a flavour board or a discount. Read the vape category, then ask at the 1504 counter or call +1 289 819 5073 before you travel for one device.",
  },
  {
    q: "How is the nicotine shelf different from cannabis vapes at this door?",
    a: "Nicotine devices are filed on the vape category. Cannabis and THC devices are filed on the disposable vape category at /items/vape-disposables. Treat those as two errands at 1504. Adults 19+. Nicotine is addictive.",
  },
  {
    q: "Can I look at nicotine devices after the subway has stopped?",
    a: "While the homepage hours card still says Open 24 Hours, adults 19+ with photo ID can walk into 1504 on Eglinton West. Night-time approach notes are on the 24-hour Eglinton West page. This URL stays with the nicotine shelf.",
  },
];

export const metadata: Metadata = {
  title: {
    absolute: "Nicotine Vapes on Eglinton West | First Nation Smoke",
  },
  description:
    "Nicotine vapes at First Nation Smoke sit on a separate shelf at 1504 Eglinton Ave W, Little Jamaica on Eglinton West. Adults 19+. Nicotine is addictive. Compare the vape category before you ride the 32.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Nicotine Vapes on Eglinton West",
    description:
      "Neighbourhood note for the nicotine shelf at 1504 Eglinton Ave W in Little Jamaica. Adults 19+. Nicotine is addictive.",
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
      "Nicotine shelf notes for First Nation Smoke at 1504 Eglinton Ave W on Eglinton West through Little Jamaica and Fairbank.",
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
          Nicotine devices at First Nation Smoke occupy their own shelf,
          apart from flower, inside the Little Jamaica walk-in at{" "}
          <strong>{STORE.addressLine}</strong>. This page is the Eglinton
          West neighbourhood note for that shelf. Names you can actually
          compare are on <Link href={PATHS.itemsVapes}>/items/vapes</Link>.
          Adults 19+. Nicotine is addictive. The Open 24 Hours card and the
          map pin stay on the{" "}
          <Link href="/#contact">homepage visit hub</Link>.
        </p>

        <section className={styles.nap} aria-label="Store name, address, hours, and phone">
          <h2>Nicotine shelf on the Fairbank side of 1504</h2>
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
          <h2>Read the vape category, then the Little Jamaica counter</h2>
          <p>
            Listed nicotine devices are named on the vape category. This
            Eglinton West note does not invent puff counts, and it does not
            publish a flavour board or a discount for the 1504 shelf. If you
            are riding the 32 Eglinton West bus for one device, call{" "}
            <a href={`tel:${STORE.phoneE164}`}>{STORE.phoneDisplay}</a> and
            ask whether that name is still on the Fairbank rack.
          </p>
          <p>
            Cannabis vapes are a different errand, filed under{" "}
            <Link href="/items/vape-disposables">/items/vape-disposables</Link>.
            Do not treat a nicotine device and a THC device as the same stop
            between Oakwood and Dufferin.
          </p>
        </section>

        <section>
          <h2>Little Jamaica, Fairbank, and the nearby handles</h2>
          <p>
            A search that names Little Jamaica, Fairbank, Oakwood Village,
            Caledonia, or Marlee still lands on one door: 1504 Eglinton Ave
            W. This is the nicotine note for that frontage, not a city-wide
            directory of devices.
          </p>
          <p>
            The walk from Eglinton West Station and the curb signs are on{" "}
            <Link href={PATHS.visit}>how to reach 1504</Link>. The open-now
            writeup is the{" "}
            <Link href={PATHS.twentyFour}>
              24-hour / open-now Eglinton West
            </Link>{" "}
            page, which sits beside this note.
          </p>
        </section>

        <section>
          <h2>Other errands at the same civic number</h2>
          <p>
            Flower comparisons use the{" "}
            <Link href="/exotic-weed">exotic</Link>,{" "}
            <Link href="/premium-weed">premium</Link>,{" "}
            <Link href="/aaa-weed">AAA+</Link>,{" "}
            <Link href="/aa-weed">AA</Link>, and{" "}
            <Link href="/budget-weed">budget</Link> pages. The{" "}
            <Link href={PATHS.weedDispensaryLp}>weed dispensary</Link> note, the{" "}
            <Link href={PATHS.deliveryLp}>delivery</Link> note, and the{" "}
            <Link href={PATHS.nativeCigarettesLp}>
              Native cigarettes
            </Link>{" "}
            note (a merchandise category only) are separate Eglinton West
            URLs. Packs, when that is the errand, are on{" "}
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
          This frame shows the 1504 pin on Eglinton Avenue West through
          Little Jamaica. Phone and the Open 24 Hours line are on the
          homepage hub.
        </p>

        <section className={styles.faq}>
          <h2>Nicotine questions for the Eglinton West shelf</h2>
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
