import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resume · Kaan Yigit",
  description:
    "Trading Analyst & Developer at Uniper Global Commodities. Experience, education, projects, and publications.",
  alternates: {
    canonical: "/resume",
  },
  openGraph: {
    title: "Resume · Kaan Yigit",
    description:
      "Trading Analyst & Developer at Uniper Global Commodities. Experience, education, projects, and publications.",
    type: "profile",
    url: "https://kaanyigit.com/resume",
    siteName: "kaanyigit.com",
  },
};

const BACKEND_STACK = [
  "Python",
  "Go",
  "Java",
  "TypeScript",
  "C++",
  "SQL",
  "Postgres",
  "Snowflake",
  "Redis",
  "Celery",
  "Kafka",
  "dbt",
];

const DEVOPS_STACK = [
  "Azure",
  "Container Apps",
  "AWS",
  "Redshift",
  "Docker",
  "GitHub Actions",
  "CI/CD",
  "New Relic",
  "Datadog",
  "Grafana",
];

const ML_STACK = [
  "PyTorch",
  "scikit-learn",
  "LangGraph",
  "MCP",
  "Azure AI Foundry",
  "RoBERTa",
];

const MARKETS = [
  "Natural Gas Markets",
  "European Gas",
  "LNG Trade Flows",
  "Storage Dynamics",
  "Energy Fundamentals",
  "Limit Order Book",
];

export default function ResumePage() {
  return (
    <div className="doc-root doc4-root">
      <div className="doc-page">
        {/* === HEADER === */}
        <header className="doc-head">
          <Link href="/" className="doc-name doc-back">
            ← Kaan Yigit
          </Link>
          <a
            className="doc-pill"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="doc-dot" aria-hidden="true" />
            Download PDF ↓
          </a>
        </header>

        {/* === TITLE === */}
        <section className="doc-landing" style={{ paddingBottom: 48, marginBottom: 24 }}>
          <h1 className="doc-bigname">
            Resume<span className="last">.</span>
          </h1>
          <div className="doc-tag">
            <span>
              Trading Analyst &amp; Developer · Uniper Global Commodities · New York, NY
            </span>
          </div>
        </section>

        {/* === 01 · EXPERIENCE === */}
        <section className="doc4-section">
          <h2>
            <span className="num">01</span>
            <em>Experience</em>
          </h2>
          <div className="doc4-cv">
            <article className="doc4-cv-entry">
              <div className="doc4-cv-head">
                <h3>Trading Analyst &amp; Developer, Global Commodities</h3>
                <span className="doc4-cv-meta">
                  Uniper · New York · Aug 2025 – Present
                </span>
              </div>
              <ul className="doc4-cv-list">
                <li>
                  Leading migration of the desk&apos;s analytics platform (used by traders
                  across NY, London, and Düsseldorf) to Azure Container Apps with GitHub
                  Actions CI/CD; powers the trading dashboards and decision-support tooling
                  the desk uses day to day.
                </li>
                <li>
                  Built Python/SQL pipelines in Snowflake ingesting daily feeds from
                  third-party commodity data vendors covering production, storage, and
                  pipeline flows.
                </li>
                <li>
                  Developed ML-based anomaly detection on North American natural gas pipeline
                  flows, surfacing unusual patterns for desk investigation; built a
                  backtesting framework that validates fundamental and seasonal trading
                  hypotheses before they touch capital.
                </li>
                <li>
                  Built AI research agents (LangGraph, MCP) compiling daily intelligence on
                  key oil-producing regions to inform LNG flow and gas-export views.
                </li>
              </ul>
            </article>

            <article className="doc4-cv-entry">
              <div className="doc4-cv-head">
                <h3>Analyst Intern, Global Commodities</h3>
                <span className="doc4-cv-meta">
                  Uniper · New York · May 2024 – Aug 2025
                </span>
              </div>
              <ul className="doc4-cv-list">
                <li>
                  Built Python/Flask microservices integrating Azure, Snowflake, and Excel to
                  deliver curve construction, spread analytics, and scenario modeling tools used
                  by gas analysts for daily pre-market prep and trade ideation.
                </li>
                <li>
                  Re-architected the platform&apos;s data layer with Redis caching and async task
                  queues backed by Celery workers, cutting peak-hour page loads from ~60s to
                  under 2s and unblocking real-time use during the morning open.
                </li>
              </ul>
            </article>

            <article className="doc4-cv-entry">
              <div className="doc4-cv-head">
                <h3>Research Assistant, UIUC Fintech Lab</h3>
                <span className="doc4-cv-meta">
                  Advised by Prof. David Lariviere · Champaign, IL · Jan 2025 – May 2025
                </span>
              </div>
              <ul className="doc4-cv-list">
                <li>
                  Conducted research on market microstructure, focused on limit order book
                  dynamics and execution behavior.
                </li>
                <li>
                  Built C++ components for the lab&apos;s limit order book simulator, running
                  experiments on order arrival and matching.
                </li>
                <li>
                  Analyzed historical tick data in Python to characterize spread, depth, and
                  volatility across equity and futures.
                </li>
              </ul>
            </article>

            <article className="doc4-cv-entry">
              <div className="doc4-cv-head">
                <h3>Backend Software Engineer, Subscriptions &amp; Checkout</h3>
                <span className="doc4-cv-meta">
                  Getir · Istanbul · Aug 2023 – Mar 2024
                </span>
              </div>
              <ul className="doc4-cv-list">
                <li>
                  Built backend services on the subscription and checkout teams, two
                  revenue-critical paths in Getir&apos;s platform (the quick-commerce decacorn
                  later acquired by Uber). Cut subscription renewal latency from ~2s to ~100ms
                  by offloading read-heavy aggregations to AWS Redshift.
                </li>
                <li>
                  Engineered a server-side alerting system using a task manager pattern and
                  Slack notifications, dropping unidentified error rate from 22% to 3.4%.
                  Refactored Chain of Responsibility in checkout to speed payment and promotion
                  rule rollout.
                </li>
              </ul>
            </article>
          </div>
        </section>

        {/* === 02 · EDUCATION === */}
        <section className="doc4-section">
          <h2>
            <span className="num">02</span>
            <em>Education</em>
          </h2>
          <div className="doc4-cv">
            <article className="doc4-cv-entry">
              <div className="doc4-cv-head">
                <h3>Bachelor of Science, Computer Science</h3>
                <span className="doc4-cv-meta">
                  University of Illinois Urbana-Champaign · cum laude · May 2025
                </span>
              </div>
              <ul className="doc4-cv-list">
                <li>GPA 3.7 / 4.0. Dean&apos;s List (Grainger College of Engineering), 5 semesters.</li>
                <li>
                  Phi Kappa Theta Gregory Wooters Academic Excellence Scholarship: AY 2021–22,
                  2022–23, 2023–24.
                </li>
                <li>
                  Bloomberg Certifications: Market Concepts (BMC), ESG, Spreadsheet Analysis.
                </li>
              </ul>
            </article>
          </div>
        </section>

        {/* === 03 · PROJECTS === */}
        <section className="doc4-section">
          <h2>
            <span className="num">03</span>
            <em>Projects</em>
          </h2>
          <div className="doc4-cv">
            <article className="doc4-cv-entry">
              <div className="doc4-cv-head">
                <h3>Real-time ADS-B Aircraft Tracking &amp; Collision Warning System</h3>
                <span className="doc4-cv-meta">Senior project · Jan 2025 – May 2025</span>
              </div>
              <ul className="doc4-cv-list">
                <li>
                  Led a 4-person team building a real-time ADS-B tracker ingesting live aircraft
                  telemetry into a Cesium 3D globe, rendering thousands of concurrent flight
                  paths with sub-second update latency.
                </li>
                <li>
                  Implemented Closest Point of Approach (CPA) collision prediction scoring
                  horizontal/vertical separation and time-to-conflict, surfacing live conflict
                  alerts ranked by severity across the active airspace.
                </li>
                <li>
                  Designed heuristic and ML-based anomaly detection for GPS spoofing and
                  implausible flight behavior, flagging unrealistic vertical rates, heading
                  changes, and position jumps in real time.
                </li>
              </ul>
            </article>

            <article className="doc4-cv-entry">
              <div className="doc4-cv-head">
                <h3>Beneath The Surface: Semantic Segmentation and Depth Estimation</h3>
                <span className="doc4-cv-meta">UIUC research · Nov 2024 – May 2025</span>
              </div>
              <ul className="doc4-cv-list">
                <li>
                  Built a PyTorch multi-task framework on MTI-Net jointly learning depth
                  estimation, semantic segmentation, and edge detection on NYU Depth V2, with
                  custom guided attention routing segmentation and edge features into the depth
                  head.
                </li>
                <li>
                  Designed a structured depth loss combining L1, gradient, and edge-aware
                  regularization terms, achieving 0.0323 MAE / 0.0416 RMSE on depth and 62.17%
                  pixel accuracy on segmentation.
                </li>
              </ul>
            </article>
          </div>
        </section>

        {/* === 04 · PUBLICATIONS === */}
        <section className="doc4-section">
          <h2>
            <span className="num">04</span>
            <em>Publications</em>
          </h2>
          <div className="doc4-cv">
            <article className="doc4-cv-entry">
              <div className="doc4-cv-head">
                <h3>Tell IF Fake: Classical IR Methods for Fake-News Detection</h3>
                <span className="doc4-cv-meta">
                  Yigit, K. · Koksal, B. · UIUC IR course (Robles-Granda) · 2024
                </span>
              </div>
              <p className="doc4-cv-summary">
                A fake-news classifier on the LIAR dataset built with classical IR methods
                rather than a transformer. The pipeline stitches TF-IDF retrieval, LDA topic
                modeling blended through a Gaussian Mixture, and RoBERTa-derived sentiment
                features into a logistic-regression head you can actually inspect.
              </p>
              <a
                className="doc4-card-link"
                href="/tell-if-fake-whitepaper.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Whitepaper (PDF) <span className="ar">↗</span>
              </a>
            </article>
          </div>
        </section>

        {/* === 05 · SKILLS === */}
        <section className="doc4-section">
          <h2>
            <span className="num">05</span>
            <em>Skills</em>
          </h2>
          <div className="doc4-stack">
            <div className="doc4-stack-row">
              <span className="doc4-stack-k">Backend</span>
              <div className="doc4-stack-v">
                {BACKEND_STACK.map((t) => (
                  <span key={t} className="doc4-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="doc4-stack-row">
              <span className="doc4-stack-k">DevOps &amp; Cloud</span>
              <div className="doc4-stack-v">
                {DEVOPS_STACK.map((t) => (
                  <span key={t} className="doc4-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="doc4-stack-row">
              <span className="doc4-stack-k">AI &amp; ML</span>
              <div className="doc4-stack-v">
                {ML_STACK.map((t) => (
                  <span key={t} className="doc4-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="doc4-stack-row">
              <span className="doc4-stack-k">Markets</span>
              <div className="doc4-stack-v">
                {MARKETS.map((t) => (
                  <span key={t} className="doc4-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* === 06 · LEADERSHIP === */}
        <section className="doc4-section">
          <h2>
            <span className="num">06</span>
            <em>Leadership</em>
          </h2>
          <div className="doc4-cv">
            <article className="doc4-cv-entry">
              <div className="doc4-cv-head">
                <h3>Vice President, Phi Kappa Theta (Beta Delta Chapter)</h3>
                <span className="doc4-cv-meta">UIUC · Nov 2022 – Nov 2024</span>
              </div>
              <ul className="doc4-cv-list">
                <li>
                  Drove chapter GPA up 15% over two years (highest in chapter history).
                </li>
                <li>
                  Co-administered a $100,000+ annual operational budget across membership,
                  events, and facilities.
                </li>
              </ul>
            </article>
          </div>
        </section>

        {/* === 07 · LANGUAGES === */}
        <section className="doc4-section">
          <h2>
            <span className="num">07</span>
            <em>Languages</em>
          </h2>
          <div className="doc4-stack">
            <div className="doc4-stack-row">
              <span className="doc4-stack-k">Speak</span>
              <div className="doc4-stack-v">
                <span className="doc4-tag">English (fluent)</span>
                <span className="doc4-tag">Turkish (native)</span>
              </div>
            </div>
          </div>
        </section>

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
