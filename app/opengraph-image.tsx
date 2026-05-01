import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt =
  "Kaan Yigit, Trading Analyst & Developer at Uniper Global Commodities";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#f6f2ea",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 88px 72px",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        {/* Top: brand mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontFamily: "ui-monospace, 'Courier New', monospace",
            fontSize: 22,
            color: "#8a8278",
            letterSpacing: "0.06em",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 9999,
              background: "#c87639",
            }}
          />
          kaanyigit.com
        </div>

        {/* Center: bigname. Lines tight, container holds buffer below for italic g descender. */}
        <div style={{ display: "flex", flexDirection: "column", marginBottom: 90 }}>
          <div
            style={{
              fontSize: 158,
              lineHeight: 0.95,
              letterSpacing: "-0.045em",
              color: "#1a1612",
              fontWeight: 500,
            }}
          >
            Kaan
          </div>
          <div
            style={{
              fontSize: 158,
              lineHeight: 0.95,
              letterSpacing: "-0.045em",
              color: "#c87639",
              fontStyle: "italic",
              fontWeight: 500,
            }}
          >
            Yigit.
          </div>
        </div>

        {/* Bottom: subhead, comfortably below the descender */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          <div
            style={{
              fontFamily: "ui-monospace, 'Courier New', monospace",
              fontSize: 26,
              color: "#1a1612",
              letterSpacing: "0.01em",
            }}
          >
            Trading Analyst &amp; Developer · Uniper Global Commodities
          </div>
          <div
            style={{
              fontFamily: "ui-monospace, 'Courier New', monospace",
              fontSize: 18,
              color: "#8a8278",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Brooklyn · New York
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
