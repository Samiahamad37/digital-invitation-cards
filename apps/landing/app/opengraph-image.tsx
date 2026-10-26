import { ImageResponse } from "next/og";
import { brand } from "./config";

export const alt = `${brand.name} · ${brand.tagline.en}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Share preview image, generated at build time (no image files needed).
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 90,
          background: "linear-gradient(135deg, #0b2119 0%, #134434 70%, #1d5c45 100%)", color: "#fbf8f2",
        }}
      >
        <div style={{ fontSize: 34, letterSpacing: 8, textTransform: "uppercase", color: "#c9a35f" }}>{brand.name}</div>
        <div style={{ fontSize: 76, lineHeight: 1.1, marginTop: 28, maxWidth: 900 }}>{brand.tagline.en}</div>
        <div style={{ fontSize: 34, marginTop: 28, color: "#e7d3a5" }}>{brand.tagline.sw}</div>
        <div style={{ display: "flex", height: 4, width: 160, marginTop: 44, background: "#c9a35f" }} />
      </div>
    ),
    size,
  );
}
