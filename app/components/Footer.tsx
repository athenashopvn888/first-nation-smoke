import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* Column 1 — Store Description */}
          <div className={styles.col}>
            <div className={styles.brand}>
              FIRST NATION SMOKE CANNABIS DISPENSARY TORONTO
            </div>
            <p className={styles.desc}>
              Adult 19+ walk-in at 1504 Eglinton Ave W on Eglinton West through
              Little Jamaica and Fairbank, near Dufferin and Oakwood. Open 24
              Hours. Check the current menu in store — we do not post medical
              claims.
            </p>
            <div className={styles.buttons}>
              <a href="tel:+12898195073" className={styles.btnPrimary}>
                Call Now
              </a>
            </div>
          </div>

          {/* Column 2 — Contact Info */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Contact Info</h3>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Address:</span>
              <span>1504 Eglinton Ave W</span>
              <span>Toronto, ON M6E 2G5</span>
              <span>Canada</span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Phone:</span>
              <span>
                <a href="tel:+12898195073" style={{ color: "inherit" }}>
                  +1 289 819 5073
                </a>
              </span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Hours:</span>
              <span className={styles.highlight}>Open 24 Hours</span>
            </div>
          </div>

          {/* Column 3 — Quick Links */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Quick Links</h3>
            <nav className={styles.links}>
              <Link href="/">Home</Link>
              <Link href="/visit">How to Reach Us</Link>
              <Link href="/24-hour-eglinton-west-dispensary">
                24-Hour Eglinton West
              </Link>
              <Link href="/exotic-weed">Exotic Weed</Link>
              <Link href="/premium-weed">Premium Weed</Link>
              <Link href="/aaa-weed">AAA+ Weed</Link>
              <Link href="/aa-weed">AA Weed</Link>
              <Link href="/budget-weed">Budget Weed</Link>
              <Link href="/items/edibles">Edibles</Link>
              <Link href="/items/cigarettes">Cigarettes</Link>
              <Link href="/items/vapes">Vape Pens</Link>
              <Link href="/nicotine-vape-eglinton-west">
                Nicotine Vapes on Eglinton West
              </Link>
              <Link href="/resources">Resources</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/cannabis-delivery-eglinton-west">
                Cannabis Delivery on Eglinton West
              </Link>
              <Link href="/info/toronto-weed-dispensary">
                Little Jamaica Dispensary
              </Link>
              <Link href="/info/cheap-weed-toronto">
                Cheap Weed Little Jamaica
              </Link>
              <Link href="/native-cigarettes-eglinton-west">
                Native Cigarettes on Eglinton West
              </Link>
              <Link href="/info/weed-store-near-little-jamaica-fairbank">
                Weed Store Near Little Jamaica
              </Link>
              <Link href="/contact">Contact Us</Link>
              <a
                href="https://maps.google.com/?q=1504+Eglinton+Ave+W,+Toronto,+ON+M6E+2G5"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Maps
              </a>
            </nav>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()} First Nation Smoke Cannabis Dispensary
            Toronto. Must be 19+ to enter.
          </p>
        </div>
      </div>
    </footer>
  );
}
