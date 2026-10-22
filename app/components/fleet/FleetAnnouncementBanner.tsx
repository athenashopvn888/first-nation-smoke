"use client";

import Link from "next/link";
import { useState } from "react";
import { useCigaretteState } from "../CigaretteStateProvider";
import { FLEET_COLORS } from "../../lib/fleet/config";
import type { ResolvedBanner } from "../../lib/fleet/types";

const figureStyle = { margin: 0, width: "100%" } as const;
const imageStyle = { display: "block", width: "100%", maxWidth: "100%", height: "auto" } as const;
const captionStyle = {
  margin: 0,
  padding: "10px 14px",
  background: "#111827",
  color: "#ffffff",
  textAlign: "center" as const,
  fontWeight: 800,
  lineHeight: 1.35,
};

function BannerFigure({ banner }: { banner: ResolvedBanner }) {
  const [src, setSrc] = useState(banner.image);
  const [imageFailed, setImageFailed] = useState(false);
  const showText = banner.render === "text" || imageFailed || !src;
  const applyCodedFallback = () => {
    if (banner.codedImage && src !== banner.codedImage) {
      setSrc(banner.codedImage);
      return;
    }
    setImageFailed(true);
  };
  const width = banner.imageWidth || 1672;
  const height = banner.imageHeight || 941;
  return (
    <figure data-core-banner={banner.id} style={{ ...figureStyle, boxShadow: "inset 0 0 0 2px #f97316" }}>
      {showText ? (
        <Link href={banner.href} aria-label={banner.alt} style={{ display: "block", width: "100%", background: FLEET_COLORS.banner }}>
          <div
            data-fleet-text-banner=""
            style={{
              ...imageStyle,
              width,
              maxWidth: "100%",
              aspectRatio: `${width} / ${height}`,
              height: "auto",
              minHeight: height,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: FLEET_COLORS.banner,
              color: FLEET_COLORS.bannerText,
              fontWeight: 800,
              fontSize: "clamp(28px, 4vw, 48px)",
              textAlign: "center",
              padding: "24px",
            }}
          >
            {banner.categoryName || banner.title}
          </div>
        </Link>
      ) : (
        <Link href={banner.href} aria-label={banner.alt} style={{ display: "block", width: "100%", background: FLEET_COLORS.banner }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={src}
            src={src}
            alt={banner.alt}
            title={banner.title}
            width={width}
            height={height}
            style={imageStyle}
            loading="eager"
            ref={(node) => { if (node?.complete && node.naturalWidth === 0) applyCodedFallback(); }}
            onError={applyCodedFallback}
          />
        </Link>
      )}
      <figcaption style={{ ...captionStyle, borderBottom: "3px solid #f97316" }}>{banner.textBar}</figcaption>
    </figure>
  );
}

export default function SheetAnnouncementBanners({ banners }: { banners: ResolvedBanner[] }) {
  const cigarettes = useCigaretteState();
  const visible = banners.filter((banner) => !banner.hidden && (cigarettes.web || (banner.id !== "cigarettes" && banner.id !== "premium-cigarettes")));
  return (
    <aside data-fleet-homepage-announcement="" aria-label="Store promotions" style={{ display: "flex", flexDirection: "column", width: "100%", maxWidth: "100%", height: "auto", minHeight: 0, overflow: "visible", position: "relative", zIndex: 50 }}>
      {visible.map((banner) => <BannerFigure key={banner.id} banner={banner} />)}
    </aside>
  );
}
