// v3 — Document Edition (playful landing, no Stoa)
// Landing is asymmetric, big italic last name, swappable identity word,
// fact strip, quick-link pills, aside note. Body remains a clean document.

function DocumentSite({ accent='gold', displayFont='fraunces', theme='light' }) {
  const cls = [
    'doc-root',
    theme === 'dark' ? 'dark' : '',
    accent && accent !== 'gold' ? `acc-${accent}` : '',
    displayFont && displayFont !== 'fraunces' ? `font-${displayFont}` : '',
  ].filter(Boolean).join(' ');

  // Live clock
  const [now, setNow] = React.useState(() => new Date());
  React.useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(t);
  }, []);
  const tz = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', timeZone: 'America/New_York' });

  // Swappable identity word in the blurb
  const ROLES = ['engineer', 'analyst', 'researcher', 'tinkerer', 'reader', 'New Yorker'];
  const [roleIdx, setRoleIdx] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setRoleIdx(i => (i + 1) % ROLES.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <div className={cls} data-screen-label="v3 · Document Edition">
      <div className="doc-page">

        {/* Header strip */}
        <header className="doc-head">
          <div className="doc-name">Kaan Yigit</div>
          <span className="doc-pill"><span className="doc-dot"></span>Brooklyn · {tz}</span>
        </header>

        {/* Playful landing */}
        <section className="doc-landing">
          <div className="doc-supra">
            <span className="doc-supra-bar"></span>
            <span>Personal site · v.{(now.getMonth()+1)}.{now.getFullYear()}</span>
          </div>

          <h1 className="doc-bigname">
            Kaan
            <br />
            <span className="last">Yigit.</span>
          </h1>

          <div className="doc-tag">
            <span className="doc-dot-live"></span>
            <span>currently shipping data systems · open to interesting conversations</span>
          </div>

          <p className="doc-blurb">
            I&apos;m an{' '}
            <span
              className="swap"
              onClick={() => setRoleIdx(i => (i + 1) % ROLES.length)}
              title="click to swap"
            >
              {ROLES[roleIdx]}
            </span>{' '}
            who likes when the engineering is the <span className="doc-scribble">hard part</span>. I build the systems behind a commodities trading desk by day, and I read about market microstructure and weird ML on the train.
          </p>

          <div className="doc-fact-strip">
            <div>
              <span className="fk">Born</span>
              <div className="fv">Istanbul</div>
            </div>
            <div>
              <span className="fk">Studied</span>
              <div className="fv">UIUC <em>'25</em></div>
            </div>
            <div>
              <span className="fk">Lives</span>
              <div className="fv">Brooklyn</div>
            </div>
            <div>
              <span className="fk">Fueled by</span>
              <div className="fv">Coffee</div>
            </div>
          </div>

          <div className="doc-quick">
            <a>Email <span className="ar">↗</span></a>
            <a>GitHub <span className="ar">↗</span></a>
            <a>LinkedIn <span className="ar">↗</span></a>
            <a>Resume <span className="ar">↗</span></a>
            <a>Reading list <span className="ar">↗</span></a>
          </div>

          <div className="doc-aside">
            <div className="doc-aside-k">A note from the author</div>
            <div className="doc-aside-v">This site is mostly an experiment in writing about my work in plain English. If something here is interesting or wrong, I&apos;d love to hear which.</div>
          </div>
        </section>

        {/* About */}
        <section className="doc-section">
          <h2><span className="doc-num">01</span>About</h2>
          <p>I&apos;m a software engineer and trading analyst on the Global Commodities desk at <a>Uniper</a>. My work sits at the seam between markets and infrastructure: I write Python and SQL for production trading platforms, build ML models on commodity flow data, and design the systems traders and analysts in New York, London, and Dusseldorf use every day.</p>
          <p>I grew up in Istanbul and studied computer science at the University of Illinois Urbana-Champaign (cum laude, &apos;25). Outside work I&apos;m into market microstructure, energy infrastructure, low-latency systems, and the kind of side projects that exist mostly because I wanted to know if they would work.</p>
        </section>

        {/* What I do */}
        <section className="doc-section">
          <h2><span className="doc-num">02</span>What I do at Uniper</h2>
          <p>I drive the migration of <strong>FinGas</strong>, the analytics platform used by 100+ traders and analysts across three continents, to Azure Container Apps with a modern CI/CD pipeline. I build Snowflake data pipelines that ingest <span className="doc-fact"><span className="doc-fact-k">rows / day</span>millions</span> from vendor feeds (Enverus, LSEG, Kpler) and third-party APIs.</p>
          <p>The desk uses a backtesting framework I built to validate seasonal natural gas trading strategies before deploying capital. The most fun work is on the ML side. I built an anomaly detection system covering <span className="doc-fact"><span className="doc-fact-k">pipelines</span>216</span> across North America that flags unusual flow patterns the desk investigates as potential trading signals. I&apos;m also building Azure AI Foundry research agents using LangGraph and MCP that compile daily intelligence on selected oil-producing regions and read foreign supply dynamics like a quiet morning briefing.</p>
          <div className="doc-marg">If a strategy is too clever to explain over coffee, I probably won&apos;t ship it.</div>
        </section>

        {/* Selected work */}
        <section className="doc-section">
          <h2><span className="doc-num">03</span>Selected work</h2>

          <div className="doc-proj">
            <h3>Real-time ADS-B aircraft tracking and collision warning</h3>
            <div className="doc-proj-tag">Senior project, UIUC · 2025 · Python, Cesium, ML</div>
            <p>I led a four-person team building a real-time aircraft tracking system that ingests live ADS-B feeds, runs collision prediction using Closest Point of Approach math, and renders 3D positions in a browser using Cesium.</p>
            <p>The interesting bit was the anomaly detection layer. We built heuristic and ML-based detectors for GPS spoofing and implausible flight patterns: unrealistic vertical rates, abrupt heading changes, position teleporting. The system surfaces color-coded warnings in real time as new positions stream in, which turned out to be very satisfying to watch.</p>
            <div className="doc-proj-link"><a>github.com/kaanyigit-repo/adsb-prediction →</a></div>
          </div>

          <div className="doc-proj">
            <h3>Beneath the Surface, multi-task computer vision</h3>
            <div className="doc-proj-tag">Research, UIUC · 2024 · PyTorch, MTI-Net</div>
            <p>A PyTorch multi-task learning framework on MTI-Net that unifies depth estimation, semantic segmentation, and edge detection for indoor scene understanding. Guided attention mechanisms prioritize segmentation features for depth refinement. We reached <span className="doc-fact"><span className="doc-fact-k">val depth loss</span>0.0339</span> with cleaner boundaries on NYU Depth V2.</p>
            <p>The point of the project was understanding how shared representations help multi-task models, not just publishing a number. The architectural choices matter more than the loss.</p>
          </div>

          <div className="doc-proj">
            <h3>Backend at Getir</h3>
            <div className="doc-proj-tag">Software engineer · 2023 · Subscription &amp; checkout</div>
            <p>Before Uniper I was a backend engineer at <a>Getir</a>, the quick-commerce decacorn later acquired by Uber. I worked on subscription and checkout, two revenue-critical paths, and shipped systems that brought renewal latency from <span className="doc-fact"><span className="doc-fact-k">before</span>2s</span> to <span className="doc-fact"><span className="doc-fact-k">after</span>~100ms</span> and dropped unidentified error rates from 22% to 3.4%.</p>
            <p>I also designed New Relic dashboards and Slack alerting that replaced a reactive ops culture with something closer to proactive monitoring.</p>
          </div>
        </section>

        {/* Stack */}
        <section className="doc-section">
          <h2><span className="doc-num">04</span>Stack I reach for</h2>
          <div className="doc-mini-grid">
            <div className="doc-mini"><span className="doc-mini-k">Languages</span>Python</div>
            <div className="doc-mini"><span className="doc-mini-k">Languages</span>Go</div>
            <div className="doc-mini"><span className="doc-mini-k">Languages</span>SQL</div>
            <div className="doc-mini"><span className="doc-mini-k">Languages</span>TypeScript</div>
            <div className="doc-mini"><span className="doc-mini-k">Data</span>Snowflake</div>
            <div className="doc-mini"><span className="doc-mini-k">Data</span>Postgres</div>
            <div className="doc-mini"><span className="doc-mini-k">Cloud</span>Azure</div>
            <div className="doc-mini"><span className="doc-mini-k">Cloud</span>AWS</div>
            <div className="doc-mini"><span className="doc-mini-k">ML</span>PyTorch</div>
            <div className="doc-mini"><span className="doc-mini-k">ML</span>LangGraph</div>
            <div className="doc-mini"><span className="doc-mini-k">Obs</span>New Relic</div>
            <div className="doc-mini"><span className="doc-mini-k">Obs</span>Datadog</div>
          </div>
        </section>

        {/* Currently thinking */}
        <section className="doc-section">
          <h2><span className="doc-num">05</span>Currently thinking about</h2>
          <ul className="doc-think">
            <li><span className="n">/01</span><span>The information asymmetries that show up when energy infrastructure data meets a trading desk in real time.</span></li>
            <li><span className="n">/02</span><span>Compiler-style backtesting frameworks: write a strategy as a small DSL, get correctness checks before any data touches it.</span></li>
            <li><span className="n">/03</span><span>How agentic research workflows (LangGraph, MCP) change the daily morning meeting on a commodities desk.</span></li>
            <li><span className="n">/04</span><span>Whether ML-based anomaly detection on commodity flows can be honest enough to actually trade against.</span></li>
            <li><span className="n">/05</span><span>The right amount of weirdness to keep in a personal website.</span></li>
          </ul>
        </section>

        {/* Contact */}
        <section className="doc-section">
          <h2><span className="doc-num">06</span>Say hello</h2>
          <p>The fastest way to reach me is email. I&apos;m slower on LinkedIn but I do read it. If you want to talk about commodities, low-latency systems, ML on weird data, or you just want to send me something interesting to read, please do.</p>
          <p style={{marginTop:24}}>
            <a className="doc-cta">Send a note <span className="arr">→</span></a>
          </p>
          <ul className="doc-contact-list" style={{marginTop:32}}>
            <li><span className="k">Email</span><span className="v"><a>kaantyigit@gmail.com</a></span></li>
            <li><span className="k">GitHub</span><span className="v"><a>github.com/kaanyigit-repo</a></span></li>
            <li><span className="k">LinkedIn</span><span className="v"><a>linkedin.com/in/kaan-yigit</a></span></li>
            <li><span className="k">Twitter</span><span className="v"><a>@kaantyigit</a></span></li>
          </ul>
        </section>

        <footer className="doc-foot">
          <span>Kaan Yigit · 2026</span>
          <span>Made in Brooklyn</span>
        </footer>
      </div>
    </div>
  );
}

window.DocumentSite = DocumentSite;
