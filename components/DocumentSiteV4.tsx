"use client";

import { useEffect, useState } from "react";

type Props = {
  photoUrl?: string;
};

const ROLES = ["engineer", "analyst", "researcher", "tinkerer", "reader", "New Yorker"] as const;

const EMAIL = "hi@kaanyigit.com";
const GITHUB_URL = "https://github.com/kaanyigit-repo";
const LINKEDIN_URL = "https://www.linkedin.com/in/kaan-yigit";
const TWITTER_URL = "https://twitter.com/kaantyigit";
const RESUME_URL = "/resume";
const RESUME_PDF_URL = "/resume.pdf";
const READING_LIST_URL = "/reading";
const ADSB_REPO_URL = "https://github.com/kaanyigit-repo/adsb-prediction";
const BTS_REPO_URL = "https://github.com/kaanyigit-repo/beneath-the-surface";
const WHITEPAPER_URL = "/tell-if-fake-whitepaper.pdf";

function formatTime(date: Date): string {
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "America/New_York",
  });
}

export function DocumentSiteV4({ photoUrl = "/portrait.jpg" }: Props) {
  const [time, setTime] = useState<string | null>(null);
  const [roleIdx, setRoleIdx] = useState(0);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setTime(formatTime(new Date()));
    const t = setInterval(() => setTime(formatTime(new Date())), 30_000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setRoleIdx((i) => (i + 1) % ROLES.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="doc-root doc4-root">
      <div className="doc-page">
        {/* === HEADER === */}
        <header className="doc-head">
          <div className="doc-name">Kaan Yigit</div>
          <span className="doc-pill" aria-label="Current location and local time">
            <span className="doc-dot" aria-hidden="true" />
            Brooklyn{time ? ` · ${time}` : ""}
          </span>
        </header>

        {/* === LANDING === */}
        <section className="doc-landing">
          <h1 className="doc-bigname">
            Kaan
            <br />
            <span className="last">Yigit.</span>
          </h1>
          <div className="doc-tag">
            <span className="doc-dot-live" aria-hidden="true" />
            <span>currently shipping data systems · open to interesting conversations</span>
          </div>
          <p className="doc-blurb">
            I&apos;m an{" "}
            <span
              className="swap"
              onClick={() => setRoleIdx((i) => (i + 1) % ROLES.length)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setRoleIdx((i) => (i + 1) % ROLES.length);
                }
              }}
              title="click to swap"
            >
              {ROLES[roleIdx]}
            </span>{" "}
            who likes when the engineering is the <span className="doc-scribble">hard part</span>.
            I build the systems behind a commodities trading desk, and spend a fair amount of
            time staring at gas curves and asking whether ML belongs anywhere near them.
          </p>
          <div className="doc-fact-strip">
            <div>
              <span className="fk">Born</span>
              <div className="fv">Istanbul</div>
            </div>
            <div>
              <span className="fk">Studied</span>
              <div className="fv">
                UIUC <em>&apos;25</em>
              </div>
            </div>
            <div>
              <span className="fk">Lives</span>
              <div className="fv">Brooklyn</div>
            </div>
          </div>
          <div className="doc-quick">
            <a href={`mailto:${EMAIL}`}>
              Email <span className="ar">↗</span>
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              GitHub <span className="ar">↗</span>
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
              LinkedIn <span className="ar">↗</span>
            </a>
            <a href={RESUME_URL}>
              Resume <span className="ar">↗</span>
            </a>
            <a href={READING_LIST_URL}>
              Reading list <span className="ar">↗</span>
            </a>
          </div>
        </section>

        {/* === 01 · ABOUT === */}
        <section className="doc4-section">
          <h2>
            <span className="num">01</span>About <em>me</em>
          </h2>
          <div className="doc4-about">
            <div>
              <div className="doc4-portrait">
                {photoUrl && !imgError ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={photoUrl}
                    alt="Kaan Yigit"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="doc4-portrait-empty">
                    Drop a photo at /public/portrait.jpg
                  </div>
                )}
              </div>
              <div className="doc4-portrait-cap">Brooklyn, &apos;26</div>
            </div>
            <div>
              <p>
                I&apos;m a software engineer working where markets meet infrastructure. The day job
                is writing the production code, data pipelines and ML systems behind a commodities
                trading desk; the side work is whatever I&apos;m curious about that week. Right now
                that&apos;s with the Global Commodities team at{" "}
                <a href="https://www.uniper.energy" target="_blank" rel="noopener noreferrer">
                  Uniper
                </a>
                ; before that I was a backend engineer at{" "}
                <a href="https://getir.com" target="_blank" rel="noopener noreferrer">
                  Getir
                </a>
                .
              </p>
              <blockquote className="doc4-pull">
                Most of what I enjoy lives in the translation layer between two domains that
                don&apos;t usually share a vocabulary.
              </blockquote>
              <p>
                I grew up in Istanbul and studied computer science at the University of Illinois
                Urbana-Champaign (cum laude, &apos;25). Outside work I read about market
                microstructure, energy infrastructure and low-latency systems, and I keep a couple
                of side projects running to learn things the day job doesn&apos;t teach me.
              </p>
            </div>
          </div>
        </section>

        {/* === 02 · WHAT I'M BUILDING === */}
        <section className="doc4-section">
          <h2>
            <span className="num">02</span>What I&apos;m <em>building</em>
          </h2>
          <p style={{ marginBottom: 32 }}>
            The work splits into three loops, roughly in this order, every day.
          </p>
          <div className="doc4-timeline">
            <div className="doc4-step s1">
              <span className="doc4-step-tag">01 · Platform</span>
              <h3>Keep the analytics platform running, then make it better</h3>
              <p>
                I work on the desk&apos;s analytics platform that traders and analysts use
                across multiple offices, and I&apos;m driving its migration to Azure Container
                Apps with a modern CI/CD pipeline. The data side is Snowflake pipelines that
                ingest daily feeds from third-party commodity data vendors.
              </p>
            </div>
            <div className="doc4-step s2">
              <span className="doc4-step-tag">02 · Strategy</span>
              <h3>Pressure-test seasonal trading ideas before they touch capital</h3>
              <p>
                The desk surfaces fundamental and seasonal hypotheses, and I run them through
                the backtesting DSL we built (see card 01) to see how they actually held up.
                The win is usually killing an idea cheaply, not finding a winner.
              </p>
            </div>
            <div className="doc4-step s3">
              <span className="doc4-step-tag">03 · ML &amp; Agents</span>
              <h3>Anomaly detection and research agents</h3>
              <p>
                I built an ML-based anomaly detection system on North American natural gas
                pipeline flows that flags unusual patterns for desk investigation. I&apos;m also
                building Azure AI Foundry research agents (LangGraph + MCP) that compile a
                daily briefing on selected oil-producing regions. Still calibrating what the
                desk actually trusts.
              </p>
            </div>
          </div>
        </section>

        {/* === 03 · SELECTED WORK === */}
        <section className="doc4-section">
          <h2>
            <span className="num">03</span>Selected <em>work</em>
          </h2>
          <div className="doc4-projects">
            <article className="doc4-card c1">
              <span className="doc4-card-num">01</span>
              <h3>Trading-desk tools at Uniper Global Commodities</h3>
              <div className="doc4-card-tag">
                Trading Analyst &amp; Developer<span className="dot">·</span>NY
                <span className="dot">·</span>2024–present
                <span className="dot">·</span>Python, Snowflake, Azure
              </div>
              <p>
                I build the production code, data pipelines, and ML systems behind the desk.
                The day-to-day is the analytics platform traders use across NY, London, and
                Düsseldorf, and the Snowflake pipelines that feed it from third-party
                commodity data vendors covering production, storage, and pipeline flows.
              </p>
              <p>
                On top of that sits the work I find more interesting: an ML anomaly detector
                on North American natural gas pipeline flows that flags shifts for desk
                investigation, a typed <strong>backtesting DSL</strong> the desk uses to test
                ideas cheaply before they touch capital, and Azure AI Foundry research agents
                (LangGraph + MCP) compiling daily briefings on key oil-producing regions.
              </p>
              <div className="doc4-card-stats">
                <div className="doc4-stat">
                  <span className="doc4-stat-k">Stack</span>
                  <span className="doc4-stat-v">Python · Snowflake · Azure</span>
                </div>
                <div className="doc4-stat">
                  <span className="doc4-stat-k">Offices</span>
                  <span className="doc4-stat-v">NY · LDN · DUS</span>
                </div>
                <div className="doc4-stat">
                  <span className="doc4-stat-k">Year</span>
                  <span className="doc4-stat-v">2025–present</span>
                </div>
              </div>
              <span className="doc4-card-internal">
                Internal · production code, not public
              </span>
            </article>

            <article className="doc4-card c2">
              <span className="doc4-card-num">02</span>
              <h3>Real-time ADS-B aircraft tracking and collision warning</h3>
              <div className="doc4-card-tag">
                Senior project, UIUC<span className="dot">·</span>2025
                <span className="dot">·</span>Python, Cesium, ML
              </div>
              <p>
                I led a four-person team building a real-time aircraft tracking system that ingests
                live ADS-B feeds, runs collision prediction using Closest Point of Approach math,
                and renders 3D positions in a browser using Cesium.
              </p>
              <p>
                The interesting bit was the anomaly detection layer: heuristic and ML-based
                detectors for GPS spoofing, unrealistic vertical rates, abrupt heading changes,
                position teleporting. The system surfaces color-coded warnings in real time as new
                positions stream in.
              </p>
              <div className="doc4-card-stats">
                <div className="doc4-stat">
                  <span className="doc4-stat-k">Team</span>
                  <span className="doc4-stat-v">
                    4 <em>(lead)</em>
                  </span>
                </div>
                <div className="doc4-stat">
                  <span className="doc4-stat-k">Year</span>
                  <span className="doc4-stat-v">2025</span>
                </div>
                <div className="doc4-stat">
                  <span className="doc4-stat-k">Stack</span>
                  <span className="doc4-stat-v">Cesium</span>
                </div>
              </div>
              <a
                className="doc4-card-link"
                href={ADSB_REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/kaanyigit-repo/adsb-prediction <span className="ar">↗</span>
              </a>
            </article>

            <article className="doc4-card c3">
              <span className="doc4-card-num">03</span>
              <h3>Beneath the Surface, multi-task computer vision</h3>
              <div className="doc4-card-tag">
                Research, UIUC<span className="dot">·</span>2024
                <span className="dot">·</span>PyTorch, MTI-Net
              </div>
              <p>
                A PyTorch multi-task learning framework on MTI-Net that unifies depth estimation,
                semantic segmentation, and edge detection for indoor scene understanding. Guided
                attention mechanisms prioritize segmentation features for depth refinement.
              </p>
              <p>
                The point of the project was understanding how shared representations help
                multi-task models, not chasing a benchmark number. The architectural choices ended
                up mattering more than the loss curve.
              </p>
              <div className="doc4-card-stats">
                <div className="doc4-stat">
                  <span className="doc4-stat-k">Depth MAE</span>
                  <span className="doc4-stat-v">
                    <em>0.0323</em>
                  </span>
                </div>
                <div className="doc4-stat">
                  <span className="doc4-stat-k">Seg Acc</span>
                  <span className="doc4-stat-v">62.17%</span>
                </div>
                <div className="doc4-stat">
                  <span className="doc4-stat-k">Dataset</span>
                  <span className="doc4-stat-v">NYU v2</span>
                </div>
              </div>
              <a
                className="doc4-card-link"
                href={BTS_REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/kaanyigit-repo/beneath-the-surface <span className="ar">↗</span>
              </a>
            </article>

            <article className="doc4-card c4">
              <span className="doc4-card-num">04</span>
              <h3>Backend at Getir</h3>
              <div className="doc4-card-tag">
                Software engineer<span className="dot">·</span>2023–2024
                <span className="dot">·</span>Subscription &amp; checkout
              </div>
              <p>
                Earlier I was a backend engineer at{" "}
                <a href="https://getir.com" target="_blank" rel="noopener noreferrer">
                  Getir
                </a>
                , the quick-commerce decacorn later acquired by Uber. I worked on subscription
                and checkout (two revenue-critical paths) and shipped changes that brought
                renewal latency from 2s to ~100ms and dropped unidentified error rates from 22%
                to 3.4%.
              </p>
              <p>
                I also designed the New Relic dashboards and Slack alerting that helped the team
                move from reactive to proactive on-call.
              </p>
              <div className="doc4-card-stats">
                <div className="doc4-stat">
                  <span className="doc4-stat-k">Latency</span>
                  <span className="doc4-stat-v">
                    2s <em>→ 100ms</em>
                  </span>
                </div>
                <div className="doc4-stat">
                  <span className="doc4-stat-k">Errors</span>
                  <span className="doc4-stat-v">
                    22% <em>→ 3.4%</em>
                  </span>
                </div>
                <div className="doc4-stat">
                  <span className="doc4-stat-k">Years</span>
                  <span className="doc4-stat-v">2023–24</span>
                </div>
              </div>
            </article>
          </div>
          <p className="doc4-more">
            More small experiments and course projects on{" "}
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              github.com/kaanyigit-repo
            </a>
            .
          </p>
        </section>

        {/* === 04 · STACK === */}
        <section className="doc4-section">
          <h2>
            <span className="num">04</span>Stack I <em>reach for</em>
          </h2>
          <div className="doc4-stack">
            <div className="doc4-stack-row">
              <span className="doc4-stack-k">Backend</span>
              <div className="doc4-stack-v">
                {[
                  "Python",
                  "Go",
                  "Java",
                  "TypeScript",
                  "SQL",
                  "Postgres",
                  "Snowflake",
                  "Kafka",
                  "dbt",
                ].map((t) => (
                  <span key={t} className="doc4-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="doc4-stack-row">
              <span className="doc4-stack-k">DevOps &amp; Cloud</span>
              <div className="doc4-stack-v">
                {[
                  "Azure",
                  "AWS",
                  "Container Apps",
                  "Docker",
                  "CI/CD",
                  "New Relic",
                  "Datadog",
                  "Grafana",
                ].map((t) => (
                  <span key={t} className="doc4-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="doc4-stack-row">
              <span className="doc4-stack-k">AI &amp; ML</span>
              <div className="doc4-stack-v">
                {[
                  "PyTorch",
                  "scikit-learn",
                  "LangGraph",
                  "MCP",
                  "Azure AI Foundry",
                  "RoBERTa",
                ].map((t) => (
                  <span key={t} className="doc4-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="doc4-stack-row">
              <span className="doc4-stack-k">Markets</span>
              <div className="doc4-stack-v">
                {[
                  "Natural Gas Markets",
                  "European Gas",
                  "LNG Trade Flows",
                  "Storage Dynamics",
                  "Energy Fundamentals",
                  "Weather",
                ].map((t) => (
                  <span key={t} className="doc4-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* === 05 · CURRENTLY THINKING ABOUT === */}
        <section className="doc4-section">
          <h2>
            <span className="num">05</span>Currently <em>thinking about</em>
          </h2>
          <div className="doc4-think">
            <div className="doc4-think-item">
              <div className="doc4-think-n">i.</div>
              <div>
                <h3 className="doc4-think-h">
                  The information gap between energy infrastructure and a real-time trading desk.
                </h3>
                <p className="doc4-think-b">
                  A lot of useful work seems to happen when someone bridges two domains nobody
                  bridges, and then writes the boring software that makes the bridge reliable.
                </p>
              </div>
            </div>
            <div className="doc4-think-item">
              <div className="doc4-think-n">ii.</div>
              <div>
                <h3 className="doc4-think-h">Compiler-style backtesting frameworks.</h3>
                <p className="doc4-think-b">
                  A strategy as a small DSL, with correctness checks before any data touches it.
                  Less of a notebook, more of a type system.
                </p>
              </div>
            </div>
            <div className="doc4-think-item">
              <div className="doc4-think-n">iii.</div>
              <div>
                <h3 className="doc4-think-h">
                  How agentic research workflows change the morning meeting.
                </h3>
                <p className="doc4-think-b">
                  LangGraph + MCP turn out to be a very practical way to assemble a daily briefing.
                  The hard part is calibrating what the desk actually trusts.
                </p>
              </div>
            </div>
            <div className="doc4-think-item">
              <div className="doc4-think-n">iv.</div>
              <div>
                <h3 className="doc4-think-h">
                  What gas storage levels actually tell you that the front-month doesn&apos;t.
                </h3>
                <p className="doc4-think-b">
                  Storage is one of the more honest signals in the European gas curve. Once
                  you&apos;ve controlled for weather and LNG sendout, what&apos;s left tends to
                  be information. Most days the front-month is just catching up to it.
                </p>
              </div>
            </div>
            <div className="doc4-think-item">
              <div className="doc4-think-n">v.</div>
              <div>
                <h3 className="doc4-think-h">
                  The right amount of weirdness to keep in a personal website.
                </h3>
                <p className="doc4-think-b">I think we&apos;re close.</p>
              </div>
            </div>
          </div>
        </section>

        {/* === 06 · SAY HELLO === */}
        <section className="doc4-section">
          <h2>
            <span className="num">06</span>Say <em>hello</em>
          </h2>
          <div className="doc4-hello">
            <h3 className="doc4-hello-h">
              Want to <em>talk</em>?
            </h3>
            <p>
              The fastest way to reach me is email. I&apos;m slower on LinkedIn but I do read it.
              If you want to talk about commodities, low-latency systems, ML on weird data, or you
              just want to send me something interesting to read, please do.
            </p>
            <a className="doc4-hello-cta" href={`mailto:${EMAIL}`}>
              Send me a note <span className="ar">→</span>
            </a>
            <ul className="doc4-hello-list">
              <li>
                <span className="k">Email</span>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </li>
              <li>
                <span className="k">GitHub</span>
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                  kaanyigit-repo
                </a>
              </li>
              <li>
                <span className="k">LinkedIn</span>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                  in/kaan-yigit
                </a>
              </li>
              <li>
                <span className="k">Twitter</span>
                <a href={TWITTER_URL} target="_blank" rel="noopener noreferrer">
                  @kaantyigit
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* === FOOTER === */}
        <footer className="doc4-foot">
          <span>Kaan Yigit · 2026</span>
          <a href="https://kaanyigit.com" className="doc-back">
            kaanyigit.com
          </a>
        </footer>
      </div>
    </div>
  );
}
