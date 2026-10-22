import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CigaretteUnavailable from "../components/CigaretteUnavailable";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: { absolute: "Cigarettes | First Nation Smoke" },
  robots: { index: false, follow: false },
};

/** Internal rewrite target. The browser URL stays on the cigarette path. */
export default function FleetCigaretteUnavailablePage() {
  return (
    <main>
      <Navbar />
      <CigaretteUnavailable />
      <Footer />
    </main>
  );
}
