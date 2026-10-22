import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./contact.module.css";
import { getFleetContent } from "../lib/fleetContent";
import { STORE } from "../lib/storeIdentity";

export const dynamic = "force-dynamic";

const CONTACT_METADATA: Metadata = {
  title: {
    absolute:
      "Contact Us — First Nation Smoke Cannabis Dispensary Toronto | 1504 Eglinton Ave W, Toronto",
  },
  description:
    "Visit First Nation Smoke at 1504 Eglinton Ave W, Toronto, ON M6E 2G5, on Eglinton West through Little Jamaica and Fairbank. Open 24 Hours. Adults 19+. Call +1 289 819 5073.",
  alternates: {
    canonical: "https://www.firstnationsmokez.com/contact",
  },
  openGraph: {
    title:
      "Contact First Nation Smoke on Eglinton West — Toronto Dispensary",
    description:
      "1504 Eglinton Ave W, Toronto, ON M6E 2G5. Little Jamaica / Fairbank walk-in. Open 24 Hours. Adults 19+. Phone +1 289 819 5073.",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const fleet = await getFleetContent();
  if (!fleet.active) return CONTACT_METADATA;
  const description = fleet.pages.Contact?.metaDescription || "";
  if (!description || description === CONTACT_METADATA.description) return CONTACT_METADATA;
  return {
    ...CONTACT_METADATA,
    description,
    title: fleet.pages.Contact?.metaTitle
      ? { absolute: fleet.pages.Contact.metaTitle }
      : CONTACT_METADATA.title,
    openGraph: { ...CONTACT_METADATA.openGraph, description },
  };
}

export default async function ContactPage() {
  const fleet = await getFleetContent();
  const street = fleet.active ? fleet.nap.street : "1504 Eglinton Ave W";
  const cityLine = fleet.active ? fleet.nap.cityLine : "Toronto, ON M6E 2G5";
  const areaLine = fleet.active ? fleet.nap.areaLine : "Eglinton West · Little Jamaica / Fairbank";
  const phoneDisplay = fleet.active ? fleet.nap.phoneDisplay : STORE.phoneDisplay;
  const phoneTel = fleet.active ? fleet.nap.phoneTel : STORE.phoneE164;
  const mapSrc = fleet.active ? fleet.nap.mapsEmbedUrl : STORE.mapEmbedUrl;
  const hoursLabel = fleet.active ? fleet.nap.hours : "Open 24 Hours";
  return (
    <main className={styles.main}>
      <Navbar />

      {/* ── Hero ── */}
      <section className={styles.hero} style={{ paddingTop: "92px" }}>
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
        >
          <h1 className={styles.heroTitle}>Contact First Nation Smoke Cannabis Dispensary Toronto</h1>
          <img
            src="/banners/08_Contact_Us.webp"
            alt="Contact Us"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: "var(--radius-lg)",
            }}
          />
        </div>
      </section>

      {/* ── Info Cards ── */}
      <section className={styles.infoSection}>
        <div className={styles.container}>
          <div className={styles.infoGrid}>
            {/* Location */}
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>📍</div>
              <h2 className={styles.infoTitle}>Location</h2>
              <p className={styles.infoText}>
                {street}
                <br />
                {cityLine}
                <br />
                <span className={styles.infoMuted}>
                  {areaLine}
                </span>
              </p>
              <p className={styles.infoText}>
                <a href={`tel:${phoneTel}`}>{phoneDisplay}</a>
                <br />
                <Link href="/visit">How to reach 1504 Eglinton Ave W</Link>
              </p>
            </div>

            {/* Hours */}
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>🕒</div>
              <h2 className={styles.infoTitle}>Hours</h2>
              <div className={styles.hoursTable}>
                <div className={styles.hoursRow}>
                  <span>Monday</span>
                  <span className={styles.hoursTime}>{hoursLabel}</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Tuesday</span>
                  <span className={styles.hoursTime}>{hoursLabel}</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Wednesday</span>
                  <span className={styles.hoursTime}>{hoursLabel}</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Thursday</span>
                  <span className={styles.hoursTime}>{hoursLabel}</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Friday</span>
                  <span className={styles.hoursTime}>{hoursLabel}</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Saturday</span>
                  <span className={styles.hoursTime}>{hoursLabel}</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Sunday</span>
                  <span className={styles.hoursTime}>{hoursLabel}</span>
                </div>
              </div>
              <div className={styles.openBadge}>
                <div className={styles.openDot} />
                {hoursLabel}
              </div>
            </div>

            {/* Walk-in */}
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>🔥</div>
              <h2 className={styles.infoTitle}>Walk In</h2>
              <p className={styles.infoText}>
                No appointment needed.
                <br />
                Just walk in and our staff will
                <br />
                help you browse the menu categories.
              </p>
              <div className={styles.featureList}>
                <div className={styles.featureItem}>
                  <span className={styles.featureCheck}>✓</span>
                  Flower tiers and cannabis categories
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.featureCheck}>✓</span>
                  Adult 19+ store information
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.featureCheck}>✓</span>
                  Knowledgeable budtenders
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.featureCheck}>✓</span>
                  Debit &amp; cash accepted
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className={styles.mapSection}>
            <iframe
              title="Map of First Nation Smoke at 1504 Eglinton Ave W, Toronto"
              src={mapSrc}
              className={styles.mapIframe}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <Footer />
    </main>
  );
}
