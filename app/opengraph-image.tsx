import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const dynamic = "force-static";
export const alt =
  "Kaan Yigit, Trading Analyst & Developer at Uniper Global Commodities";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadFont(filename: string): Promise<ArrayBuffer> {
  const buffer = await readFile(join(process.cwd(), "public", "fonts", filename));
  return buffer.buffer.slice(
    buffer.byteOffset,
    buffer.byteOffset + buffer.byteLength
  );
}

export default async function OpengraphImage() {
  const [fraunces, frauncesItalic] = await Promise.all([
    loadFont("Fraunces-SemiBold.ttf"),
    loadFont("Fraunces-SemiBoldItalic.ttf"),
  ]);

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
          fontFamily: "Fraunces",
        }}
      >
        {/* Top: brand mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontFamily: "monospace",
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

        {/* Center: bigname */}
        <div style={{ display: "flex", flexDirection: "column", marginBottom: 90 }}>
          <div
            style={{
              fontSize: 168,
              lineHeight: 0.95,
              letterSpacing: "-0.045em",
              color: "#1a1612",
            }}
          >
            Kaan
          </div>
          <div
            style={{
              fontSize: 168,
              lineHeight: 0.95,
              letterSpacing: "-0.045em",
              color: "#c87639",
              fontStyle: "italic",
            }}
          >
            Yigit.
          </div>
        </div>

        {/* Bottom: subhead */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          <div
            style={{
              fontFamily: "monospace",
              fontSize: 26,
              color: "#1a1612",
              letterSpacing: "0.01em",
            }}
          >
            Trading Analyst &amp; Developer · Uniper Global Commodities
          </div>
          <div
            style={{
              fontFamily: "monospace",
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
    {
      ...size,
      fonts: [
        {
          name: "Fraunces",
          data: fraunces,
          weight: 600,
          style: "normal",
        },
        {
          name: "Fraunces",
          data: frauncesItalic,
          weight: 600,
          style: "italic",
        },
      ],
    }
  );
}
