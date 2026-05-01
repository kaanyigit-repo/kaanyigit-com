import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reading · Kaan Yigit",
  description:
    "Newsletters, Substacks, and the occasional book I keep coming back to. Sorted by category.",
  alternates: {
    canonical: "/reading",
  },
  openGraph: {
    title: "Reading · Kaan Yigit",
    description:
      "Newsletters, Substacks, and the occasional book I keep coming back to. Sorted by category.",
    type: "website",
    url: "https://kaanyigit.com/reading",
    siteName: "kaanyigit.com",
  },
};

type Item = {
  title: string;
  author: string;
  kind: string;
  url: string;
  why: string;
};

type Category = {
  name: string;
  intro?: string;
  items: Item[];
};

const READING: Category[] = [
  {
    name: "Energy & Commodities",
    items: [
      {
        title: "Doomberg",
        author: "Doomberg",
        kind: "Substack",
        url: "https://doomberg.substack.com",
        why: "Energy and macro takes from a chicken with strong opinions and good charts.",
      },
      {
        title: "Power Hungry",
        author: "Robert Bryce",
        kind: "Substack",
        url: "https://robertbryce.substack.com",
        why: "Long-running coverage of energy infrastructure, electricity, and the politics of power.",
      },
      {
        title: "The World For Sale",
        author: "Javier Blas & Jack Farchy",
        kind: "Book",
        url: "https://www.javierblas.com",
        why: "Best book on the commodity-trading houses I have read. Reads like a thriller.",
      },
    ],
  },
  {
    name: "Quant & Markets",
    items: [
      {
        title: "Money Stuff",
        author: "Matt Levine",
        kind: "Newsletter",
        url: "https://www.bloomberg.com/account/newsletters/money-stuff",
        why: "If you read one finance newsletter, this one. Best legal-and-corporate-finance writing on the internet.",
      },
      {
        title: "Bits About Money",
        author: "Patrick McKenzie",
        kind: "Blog",
        url: "https://www.bitsaboutmoney.com",
        why: "Long, careful pieces on how money actually moves through the financial system.",
      },
      {
        title: "Net Interest",
        author: "Marc Rubinstein",
        kind: "Substack",
        url: "https://www.netinterest.co",
        why: "Banking and financial-services analysis without the noise.",
      },
      {
        title: "Moontower",
        author: "Kris Abdelmessih",
        kind: "Substack",
        url: "https://moontower.substack.com",
        why: "Options, volatility, and trading-floor instinct. Excellent on risk.",
      },
    ],
  },
  {
    name: "Agentic Coding",
    items: [
      {
        title: "Simon Willison's Weblog",
        author: "Simon Willison",
        kind: "Blog",
        url: "https://simonwillison.net",
        why: "The most consistent voice on LLMs and agents. Writes daily, links generously, ships code.",
      },
      {
        title: "Anthropic Engineering",
        author: "Anthropic",
        kind: "Blog",
        url: "https://www.anthropic.com/engineering",
        why: "Source of truth on Claude, MCP, and the agent patterns Anthropic actually ships.",
      },
      {
        title: "Latent Space",
        author: "Swyx & Alessio",
        kind: "Substack & Podcast",
        url: "https://www.latent.space",
        why: "Newsletter and podcast that interview the people building agentic systems in production.",
      },
      {
        title: "Eugene Yan",
        author: "Eugene Yan",
        kind: "Blog",
        url: "https://eugeneyan.com",
        why: "ML and agents in production, with strong opinions on what actually works versus what demos well.",
      },
      {
        title: "Hamel Husain",
        author: "Hamel Husain",
        kind: "Blog",
        url: "https://hamel.dev",
        why: "Evals, fine-tuning, and the unglamorous parts of shipping LLM systems.",
      },
    ],
  },
  {
    name: "Systems & Infra",
    items: [
      {
        title: "danluu.com",
        author: "Dan Luu",
        kind: "Blog",
        url: "https://danluu.com",
        why: "Long, evidence-heavy posts on hardware, software, and how things break in production.",
      },
      {
        title: "Marc Brooker",
        author: "Marc Brooker",
        kind: "Blog",
        url: "https://brooker.co.za/blog",
        why: "AWS principal engineer. Writes the calmest takes on distributed systems on the internet.",
      },
      {
        title: "Brendan Gregg",
        author: "Brendan Gregg",
        kind: "Blog",
        url: "https://www.brendangregg.com",
        why: "Performance, profiling, and flame graphs. Required reading if you ever care about latency.",
      },
      {
        title: "Irrational Exuberance",
        author: "Will Larson",
        kind: "Blog",
        url: "https://lethain.com",
        why: "Engineering management and staff-engineer craft, written by someone who has done it at scale.",
      },
    ],
  },
  {
    name: "ML & Research",
    items: [
      {
        title: "Lil'Log",
        author: "Lilian Weng",
        kind: "Blog",
        url: "https://lilianweng.github.io",
        why: "Tutorial-quality deep-dives on ML topics that other surveys handwave through.",
      },
      {
        title: "The Illustrated Transformer",
        author: "Jay Alammar",
        kind: "Blog",
        url: "https://jalammar.github.io",
        why: "Visual explanations of transformers and attention. Still the clearest, years later.",
      },
      {
        title: "Ahead of AI",
        author: "Sebastian Raschka",
        kind: "Substack",
        url: "https://magazine.sebastianraschka.com",
        why: "Weekly notes on what actually moved in ML this week, with code where it counts.",
      },
    ],
  },
  {
    name: "Craft & Other",
    items: [
      {
        title: "Patrick Collison",
        author: "Patrick Collison",
        kind: "Blog",
        url: "https://patrickcollison.com",
        why: "If I am out of ideas, I copy from his shelf. Especially the books and questions pages.",
      },
      {
        title: "Ben Kuhn",
        author: "Ben Kuhn",
        kind: "Blog",
        url: "https://www.benkuhn.net",
        why: "Engineering management and unusually clear writing on decision-making under uncertainty.",
      },
      {
        title: "Paul Graham essays",
        author: "Paul Graham",
        kind: "Essays",
        url: "https://paulgraham.com/articles.html",
        why: "The startup essays are mixed; the older ones on writing and curiosity hold up.",
      },
    ],
  },
];

export default function ReadingPage() {
  return (
    <div className="doc-root doc4-root">
      <div className="doc-page">
        {/* === HEADER === */}
        <header className="doc-head">
          <Link href="/" className="doc-name doc-back">
            ← Kaan Yigit
          </Link>
          <Link href="/resume" className="doc-pill">
            <span className="doc-dot" aria-hidden="true" />
            Resume ↗
          </Link>
        </header>

        {/* === TITLE === */}
        <section className="doc-landing" style={{ paddingBottom: 48, marginBottom: 24 }}>
          <h1 className="doc-bigname">
            Reading<span className="last">.</span>
          </h1>
          <div className="doc-tag">
            <span>
              Newsletters and Substacks I read with some consistency. Sorted by category.
            </span>
          </div>
        </section>

        {/* === CATEGORIES === */}
        {READING.map((category, idx) => (
          <section key={category.name} className="doc4-section">
            <h2>
              <span className="num">{String(idx + 1).padStart(2, "0")}</span>
              <em>{category.name}</em>
            </h2>
            {category.intro ? <p>{category.intro}</p> : null}
            <ul className="doc4-reading">
              {category.items.map((item) => (
                <li key={item.url} className="doc4-reading-item">
                  <h3 className="doc4-reading-title">
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      {item.title}
                    </a>
                  </h3>
                  <div className="doc4-reading-meta">
                    {item.author}
                    <span className="dot">·</span>
                    <span className="kind">{item.kind}</span>
                  </div>
                  <p className="doc4-reading-why">{item.why}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}

        {/* === FOOTER === */}
        <footer className="doc4-foot">
          <span>Kaan Yigit · 2026</span>
          <Link href="/" className="doc-back">
            ← Back to site
          </Link>
        </footer>
      </div>
    </div>
  );
}
