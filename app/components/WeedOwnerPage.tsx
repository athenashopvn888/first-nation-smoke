import Link from "next/link";
import PreferredSourceButton from "./PreferredSourceButton";
import styles from "./WeedOwnerPage.module.css";

const storeName = "First Nation Smoke Cannabis Dispensary Toronto";

const discovery = [
  ["Flower Guide", "Learn more about cannabis flower before deciding what you want to explore.", "/resources/flower-guide"],
  ["Pre-Rolls", "Explore the verified pre-roll category.", "/items/prerolls"],
  ["Pre-Roll Guide", "Learn more about the pre-roll format.", "/resources/pre-roll-guide"],
  ["Menu Guide", "Compare broader cannabis formats before choosing where to start.", "/resources/menu-guide"],
  ["Value Guide", "Explore value-oriented shopping concepts without relying on a current price or promotion.", "/resources/value-guide"],
  ["Cannabis Resources", "Explore the store's cannabis information library.", "/resources"],
] as const;

const faqs = [
  ["Where is First Nation Smoke Cannabis Dispensary Toronto?", "It is located at 1504 Eglinton Ave W, Toronto, ON M6E 2G5."],
  ["Is the store open 24 hours?", "Yes. First Nation Smoke Cannabis Dispensary Toronto is open 24 hours a day, seven days a week."],
  ["What cannabis information can adults 19+ explore?", "Adults 19+ can explore flower information, pre-rolls, broader cannabis-format guidance and value-oriented shopping information."],
  ["What is the difference between weed and cannabis?", "Weed is common everyday terminology. Cannabis is the broader term."],
  ["What is the difference between bud and flower?", "Bud is a common informal word for dried cannabis flower."],
  ["Can I explore pre-roll information?", "Yes. The verified pre-roll category and Pre-Roll Guide provide pre-roll-specific starting points."],
  ["Does the business name prove cultural ownership or affiliation?", "The business name is First Nation Smoke Cannabis Dispensary Toronto. No additional ownership, cultural or affiliation claim is made here."],
  ["How can I ask about a particular item?", "Call +1 289-819-5073."],
  ["Do I need to be 19+?", "Yes."],
] as const;

export function WeedOwnerPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: storeName,
    url: "https://www.firstnationsmokez.com/weed-dispensary-toronto/",
    telephone: "+12898195073",
    address: { "@type": "PostalAddress", streetAddress: "1504 Eglinton Ave W", addressLocality: "Toronto", addressRegion: "ON", postalCode: "M6E 2G5", addressCountry: "CA" },
    openingHours: "Mo-Su 00:00-24:00",
  };

  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className={styles.hero}>
        <p className={styles.eyebrow}>Open 24 Hours · Adults 19+</p>
        <h1>{storeName} — Weed Dispensary in Toronto</h1>
        <p>Weed, Cannabis, flower and pre-roll information for shoppers visiting 1504 Eglinton Ave W.</p>
        <div className={styles.actions}>
          <Link href="/resources/flower-guide" className={styles.primary}>Explore the Flower Guide</Link>
          <a href="tel:+12898195073" className={styles.secondary}>Call +1 289-819-5073</a>
        </div>
      </header>

      <section className={styles.section}>
        <h2>Weed and Cannabis on Eglinton Avenue West</h2>
        <p>{storeName} is located at 1504 Eglinton Ave W in Toronto and is open 24 hours a day, seven days a week.</p>
        <p>Adults 19+ can begin with flower information, compare broader cannabis choices, or focus on pre-rolls when that is the format they are interested in.</p>
        <p>For one specific item, call <a href="tel:+12898195073">+1 289-819-5073</a> before making a special trip.</p>
      </section>

      <section className={styles.section}>
        <h2>Find Your Weed</h2>
        <div className={styles.cards}>
          {discovery.map(([title, description, href]) => (
            <Link href={href} className={styles.card} key={href}><h3>{title}</h3><p>{description}</p><span>Explore →</span></Link>
          ))}
        </div>
        <p className={styles.note}>These links do not confirm present stock, a specific product, price, promotion or availability.</p>
      </section>

      <section className={styles.section}>
        <h2>Weed, Cannabis, Bud and Flower — Understanding the Terms</h2>
        <div className={styles.terms}>
          <div><h3>Weed</h3><p>Everyday terminology for cannabis.</p></div>
          <div><h3>Cannabis</h3><p>The broader term, including flower and other cannabis formats.</p></div>
          <div><h3>Flower</h3><p>Dried cannabis flower.</p></div>
          <div><h3>Bud</h3><p>A common informal term for cannabis flower.</p></div>
        </div>
        <p>These terms describe cannabis shopping categories only. They do not imply anything about cultural identity, business ownership or affiliation.</p>
      </section>

      <section className={styles.section}>
        <h2>Open 24 Hours on Eglinton Avenue West</h2>
        <address className={styles.address}>
          <strong>{storeName}</strong><br />1504 Eglinton Ave W<br />Toronto, ON M6E 2G5<br />
          <a href="tel:+12898195073">+1 289-819-5073</a><br />Open 24 Hours · 7 Days a Week
        </address>
        <p>Adults 19+. Call ahead before making a special trip for one particular product.</p>
      </section>

      <section className={styles.section} id="faq">
        <h2>Frequently Asked Questions</h2>
        <div className={styles.faqs}>
          {faqs.map(([question, answer]) => <article key={question}><h3>{question}</h3><p>{answer}</p></article>)}
        </div>
      </section>
      <PreferredSourceButton />
    </main>
  );
}
