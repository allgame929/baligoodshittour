import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name}: private day tours in Bali`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#16213A",
          color: "#ECEFEA",
          padding: 72,
        }}
      >
        <div style={{ fontSize: 34, color: "#E8A81A" }}>{site.name}</div>
        <div style={{ fontSize: 96, fontWeight: 700, lineHeight: 1.02, maxWidth: 900 }}>Bali is quiet before 7 AM.</div>
        <div style={{ fontSize: 34, color: "#B9C2CF" }}>Private day tours with a local driver-guide</div>
      </div>
    ),
    size,
  );
}
