import type { Metadata } from "next";
import { Fraunces, Inter_Tight, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import { ThemeControls } from "@/components/ThemeControls";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter-tight",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kaan Yigit",
  description:
    "Software engineer working on a commodities trading desk. Currently shipping data systems, open to interesting conversations.",
  metadataBase: new URL("https://kaanyigit.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kaan Yigit",
    description:
      "Software engineer working on a commodities trading desk. Currently shipping data systems.",
    type: "website",
    url: "https://kaanyigit.com",
    siteName: "kaanyigit.com",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${interTight.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          // Set theme before paint so persisted choice applies with no flash.
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light'){document.documentElement.dataset.theme=t;}}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <ThemeControls />
        {children}
      </body>
    </html>
  );
}
