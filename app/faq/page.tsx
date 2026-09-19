import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./faq.module.css";

export const metadata: Metadata = {
  title: { absolute: "FAQ | First Nation Smoke on Eglinton West" },
  description:
    "Hours, ID, Eglinton West / Little Jamaica / Fairbank directions, and menu questions for First Nation Smoke at 1504 Eglinton Ave W, Toronto. Adults 19+.",
  alternates: {
    canonical: "https://www.firstnationsmokez.com/faq",
  },
};

const FAQ_CATEGORIES = [
  {
    title: "Location and Hours",
    faqs: [
      { q: "Where is First Nation Smoke Cannabis Dispensary Toronto located?", a: "First Nation Smoke is at 1504 Eglinton Ave W, Toronto, ON M6E 2G5, on Eglinton West through Little Jamaica and Fairbank, near Dufferin Street and Oakwood Avenue. Call +1 289 819 5073. Use the homepage map or /visit for how to reach the door." },
      { q: "What are the listed hours?", a: "Open 24 Hours, seven days a week, matching the homepage hub. Overnight notes for this corridor only are on the 24-hour Eglinton West page. Call +1 289 819 5073 if your timing is unusual." },
      { q: "What is the best way to plan the visit?", a: "Confirm 1504 Eglinton Ave W and the homepage hours, then open /visit if you need TTC from Eglinton West Station, the 32 Eglinton West bus, driving from Dufferin or Oakwood, or curb-parking notes." },
    ],
  },
  {
    title: "Products and Menu",
    faqs: [
      { q: "What menu categories can shoppers compare?", a: "The site has paths for flower, pre-rolls, edibles, THC vapes, concentrates, accessories, and cigarettes where listed." },
      { q: "How should shoppers use the menu?", a: "Pick one category first, then compare product name, format, weight or package size, posted price, and item details." },
      { q: "Do menu details change?", a: "Yes. Use the current menu for the product names, prices, and package details currently listed before making the trip." },
    ],
  },
  {
    title: "Flower and Value",
    faqs: [
      { q: "Where should cheap weed shoppers start?", a: "Start with Budget and AA flower, then compare the current listings before choosing." },
      { q: "Where should premium flower shoppers start?", a: "Use Premium or Exotic flower when the visit is about the higher shelf lanes." },
      { q: "How do shoppers avoid guessing?", a: "Stay inside one tier, compare the posted details, and ask staff when the final choice needs a current answer." },
    ],
  },
  {
    title: "Native Smokes",
    faqs: [
      { q: "Does First Nation Smoke Cannabis Dispensary Toronto list Native cigarettes?", a: "The cigarette menu may show Native smoke brands such as Canadian Lights, Canadian Full, Putters, Canadian Goose Full, Canadian Goose Lights, Canadian Menthol, Canadian Classics Original, and Canadian Classics Silver. That is a merchandise category only. Confirm current options through the menu or staff." },
      { q: "Where can I check $25 carton-style listings?", a: "Where those listings are shown, check the current menu or ask staff for the listed price and package details." },
      { q: "Where should cigarette shoppers start?", a: "Open the cigarette category first, then use the homepage map and /visit for directions, contact options, and listed hours." },
    ],
  },
  {
    title: "Neighbourhood delivery and nicotine vapes",
    faqs: [
      { q: "Where is the Eglinton West cannabis delivery page?", a: "Corridor delivery notes live on /cannabis-delivery-eglinton-west. That page is the neighbourhood owner. The city /weed-delivery-toronto URL is a noindex catalog only." },
      { q: "Where should nicotine vape shoppers start on this corridor?", a: "Use /nicotine-vape-eglinton-west for neighbourhood notes, then /items/vapes for the current shelf. Adults 19+. Nicotine is addictive. This is not a city-wide Toronto vape list." },
      { q: "Where is the Native cigarettes neighbourhood page?", a: "Use /native-cigarettes-eglinton-west, then /items/cigarettes for the listed shelf. Native cigarettes is merchandise-category language only." },
    ],
  },
];

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_CATEGORIES.flatMap((cat) =>
      cat.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      }))
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className={styles.main}>
        <Navbar />
        <div className={styles.content}>
          <h1 className={styles.pageTitle}>Frequently Asked Questions</h1>
          <p className={styles.pageSubtitle}>
            Straight answers for an Eglinton West visit: homepage hub first, /visit for the last block, menu category second, staff when a current detail matters.
          </p>

          {FAQ_CATEGORIES.map((cat) => (
            <div key={cat.title} className={styles.category}>
              <h2 className={styles.categoryTitle}>{cat.title}</h2>
              {cat.faqs.map((faq) => (
                <details key={faq.q} className={styles.faqItem}>
                  <summary className={styles.faqQuestion}>{faq.q}</summary>
                  <p className={styles.faqAnswer}>{faq.a}</p>
                </details>
              ))}
            </div>
          ))}

          <div className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>Still have questions?</h2>
            <p className={styles.ctaText}>
              Call <a href="tel:+12898195073">+1 289 819 5073</a> or use the homepage map before visiting.
            </p>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
