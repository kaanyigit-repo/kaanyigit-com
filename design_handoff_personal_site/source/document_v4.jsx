// v4 — Document Edition with playful body
// Uses v3 landing classes (.doc-bigname, .doc-fact-strip, etc) from document.css
// New body sections use .doc4-* classes from document_v4.css

function DocumentSiteV4({ accent='ember', displayFont='fraunces', theme='light', photoUrl='' }) {
  const cls = [
    'doc-root',
    theme === 'dark' ? 'dark' : '',
    accent && accent !== 'gold' ? `acc-${accent}` : '',
    displayFont && displayFont !== 'fraunces' ? `font-${displayFont}` : '',
  ].filter(Boolean).join(' ');

  // Wrap with v4 root for new section styles
  const v4cls = ['doc4-root', theme === 'dark' ? 'dark' : ''].filter(Boolean).join(' ');

  // Live clock
  const [now, setNow] = React.useState(() => new Date());
  React.useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(t);
  }, []);
  const tz = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', timeZone: 'America/New_York' });

  // Swappable identity word
  const ROLES = ['engineer', 'analyst', 'researcher', 'tinkerer', 'reader', 'New Yorker'];
  const [roleIdx, setRoleIdx] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setRoleIdx(i => (i + 1) % ROLES.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <div className={cls + ' ' + v4cls} data-screen-label="v4 · Document Edition (playful body)">
      <div className="doc-page">

        {/* === LANDING (same as v3) === */}
        <header className="doc-head">
          <div className="doc-name">Kaan Yigit</div>
          <span className="doc-pill"><span className="doc-dot"></span>Brooklyn · {tz}</span>
        </header>

        <section className="doc-landing">
          <h1 className="doc-bigname">
            Kaan<br />
            <span className="last">Yigit.</span>
          </h1>
          <div className="doc-tag">
            <span className="doc-dot-live"></span>
            <span>currently shipping data systems · open to interesting conversations</span>
          </div>
          <p className="doc-blurb">
            I&apos;m an{' '}
            <span className="swap" onClick={() => setRoleIdx(i => (i + 1) % ROLES.length)} title="click to swap">
              {ROLES[roleIdx]}
            </span>{' '}
            who likes when the engineering is the <span className="doc-scribble">hard part</span>. I build the systems behind a commodities trading desk, and spend a fair amount of time on market microstructure and ML in places it probably shouldn&apos;t belong.
          </p>
          <div className="doc-fact-strip">
            <div><span className="fk">Born</span><div className="fv">Istanbul</div></div>
            <div><span className="fk">Studied</span><div className="fv">UIUC <em>'25</em></div></div>
            <div><span className="fk">Lives</span><div className="fv">Brooklyn</div></div>
          </div>
          <div className="doc-quick">
            <a>Email <span className="ar">↗</span></a>
            <a>GitHub <span className="ar">↗</span></a>
            <a>LinkedIn <span className="ar">↗</span></a>
            <a>Resume <span className="ar">↗</span></a>
            <a>Reading list <span className="ar">↗</span></a>
          </div>
        </section>

        {/* === ABOUT — portrait + pull quote === */}
        <section className="doc4-section">
          <h2><span className="num">01</span>About <em>me</em></h2>
          <div className="doc4-about">
            <div>
              <div className="doc4-portrait">
                {photoUrl ? <img src={photoUrl} alt="Kaan Yigit" /> : <div style={{padding:24,fontFamily:'JetBrains Mono, monospace',fontSize:11,color:'var(--ink-mute)'}}>Add a photo URL in Tweaks</div>}
              </div>
              <div className="doc4-portrait-cap">Brooklyn, '26</div>
            </div>
            <div>
              <p>I&apos;m a software engineer working where markets meet infrastructure. The day job is writing the production code, data pipelines and ML systems behind a commodities trading desk; the side work is whatever I&apos;m curious about that week. Right now that&apos;s with the Global Commodities team at <a>Uniper</a>; before that I was a backend engineer at <a>Getir</a>.</p>
              <blockquote className="doc4-pull">
                Most of what I enjoy lives in the translation layer between two domains that don&apos;t usually share a vocabulary.
              </blockquote>
              <p>I grew up in Istanbul and studied computer science at the University of Illinois Urbana-Champaign (cum laude, &apos;25). Outside work I read about market microstructure, energy infrastructure and low-latency systems, and I keep a couple of side projects running to learn things the day job doesn&apos;t teach me.</p>
            </div>
          </div>
        </section>

        {/* === WHAT I DO — timeline === */}
        <section className="doc4-section">
          <h2><span className="num">02</span>What I&apos;m <em>building</em></h2>
          <p style={{marginBottom:32}}>The work splits into three loops, roughly in this order, every day.</p>
          <div className="doc4-timeline">
            <div className="doc4-step s1">
              <span className="doc4-step-tag">01 · Platform</span>
              <h3>Keep the analytics platform running, then make it better</h3>
              <p>I work on <strong>FinGas</strong>, the analytics platform our traders and analysts use across three offices, and I&apos;m driving its migration to Azure Container Apps with a modern CI/CD pipeline. The data side is Snowflake pipelines that ingest millions of rows daily from Enverus, LSEG, Kpler and a handful of third-party APIs.</p>
            </div>
            <div className="doc4-step s2">
              <span className="doc4-step-tag">02 · Strategy</span>
              <h3>Backtest seasonal natural gas plays</h3>
              <p>I built a backtesting framework the desk uses to validate seasonal trading ideas before they touch real capital. The thing I like about it: a strategy is expressed as a small DSL, so a lot of correctness checks happen before any data is loaded.</p>
            </div>
            <div className="doc4-step s3">
              <span className="doc4-step-tag">03 · ML &amp; Agents</span>
              <h3>Anomaly detection and research agents</h3>
              <p>I built an anomaly detection system covering 216 natural gas pipelines in North America that flags unusual flow patterns the desk can investigate. I&apos;m also building Azure AI Foundry research agents (LangGraph + MCP) that compile a daily briefing on selected oil-producing regions — still calibrating what the desk actually trusts.</p>
            </div>
          </div>
        </section>

        {/* === SELECTED WORK — cards === */}
        <section className="doc4-section">
          <h2><span className="num">03</span>Selected <em>work</em></h2>
          <div className="doc4-projects">

            <article className="doc4-card c1">
              <span className="doc4-card-num">01</span>
              <h3>Real-time ADS-B aircraft tracking and collision warning</h3>
              <div className="doc4-card-tag">Senior project, UIUC<span className="dot">·</span>2025<span className="dot">·</span>Python, Cesium, ML</div>
              <p>I led a four-person team building a real-time aircraft tracking system that ingests live ADS-B feeds, runs collision prediction using Closest Point of Approach math, and renders 3D positions in a browser using Cesium.</p>
              <p>The interesting bit was the anomaly detection layer: heuristic and ML-based detectors for GPS spoofing, unrealistic vertical rates, abrupt heading changes, position teleporting. The system surfaces color-coded warnings in real time as new positions stream in.</p>
              <div className="doc4-card-stats">
                <div className="doc4-stat"><span className="doc4-stat-k">Team</span><span className="doc4-stat-v">4 <em>(lead)</em></span></div>
                <div className="doc4-stat"><span className="doc4-stat-k">Year</span><span className="doc4-stat-v">2025</span></div>
                <div className="doc4-stat"><span className="doc4-stat-k">Stack</span><span className="doc4-stat-v">Cesium</span></div>
              </div>
              <a className="doc4-card-link">github.com/kaanyigit-repo/adsb-prediction <span className="ar">↗</span></a>
            </article>

            <article className="doc4-card c2">
              <span className="doc4-card-num">02</span>
              <h3>Beneath the Surface, multi-task computer vision</h3>
              <div className="doc4-card-tag">Research, UIUC<span className="dot">·</span>2024<span className="dot">·</span>PyTorch, MTI-Net</div>
              <p>A PyTorch multi-task learning framework on MTI-Net that unifies depth estimation, semantic segmentation, and edge detection for indoor scene understanding. Guided attention mechanisms prioritize segmentation features for depth refinement.</p>
              <p>The point of the project was understanding how shared representations help multi-task models, not chasing a benchmark number. The architectural choices ended up mattering more than the loss curve.</p>
              <div className="doc4-card-stats">
                <div className="doc4-stat"><span className="doc4-stat-k">Val Loss</span><span className="doc4-stat-v"><em>0.0339</em></span></div>
                <div className="doc4-stat"><span className="doc4-stat-k">Tasks</span><span className="doc4-stat-v">3</span></div>
                <div className="doc4-stat"><span className="doc4-stat-k">Dataset</span><span className="doc4-stat-v">NYU v2</span></div>
              </div>
              <a className="doc4-card-link">github.com/kaanyigit-repo/beneath-the-surface <span className="ar">↗</span></a>
            </article>

            <article className="doc4-card c3">
              <span className="doc4-card-num">03</span>
              <h3>Tell IF Fake, fake-news detection without the deep learning</h3>
              <div className="doc4-card-tag">Research, UIUC<span className="dot">·</span>2024<span className="dot">·</span>Co-author: Bartu Koksal</div>
              <p>A fake-news classifier on the LIAR dataset built with classical IR methods rather than a transformer. The pipeline stitches TF-IDF retrieval, LDA topic modeling blended through a Gaussian Mixture, and RoBERTa-derived sentiment features into a logistic-regression classifier you can actually inspect.</p>
              <p>The accuracy was modest — the unsupervised stage was the weak link, with a low silhouette score for the GMM clusters — but the point of the project was to see how far interpretable, low-compute methods could go before reaching for a transformer. Co-authored with <a>Bartu Koksal</a> for Prof. Robles-Granda&apos;s IR course.</p>
              <div className="doc4-card-stats">
                <div className="doc4-stat"><span className="doc4-stat-k">Methods</span><span className="doc4-stat-v">TF-IDF · LDA · GMM</span></div>
                <div className="doc4-stat"><span className="doc4-stat-k">Dataset</span><span className="doc4-stat-v">LIAR</span></div>
                <div className="doc4-stat"><span className="doc4-stat-k">Year</span><span className="doc4-stat-v">2024</span></div>
              </div>
              <a className="doc4-card-link" href="projects/tell-if-fake-whitepaper.pdf" target="_blank" rel="noopener">Whitepaper (PDF) <span className="ar">↗</span></a>
            </article>

            <article className="doc4-card c4">
              <span className="doc4-card-num">04</span>
              <h3>Backend at Getir</h3>
              <div className="doc4-card-tag">Software engineer<span className="dot">·</span>2023<span className="dot">·</span>Subscription &amp; checkout</div>
              <p>Earlier I was a backend engineer at <a>Getir</a>, the quick-commerce decacorn later acquired by Uber. I worked on subscription and checkout — two revenue-critical paths — and shipped changes that brought renewal latency from 2s to ~100ms and dropped unidentified error rates from 22% to 3.4%.</p>
              <p>I also designed the New Relic dashboards and Slack alerting that helped the team move from reactive to proactive on-call.</p>
              <div className="doc4-card-stats">
                <div className="doc4-stat"><span className="doc4-stat-k">Latency</span><span className="doc4-stat-v">2s <em>→ 100ms</em></span></div>
                <div className="doc4-stat"><span className="doc4-stat-k">Errors</span><span className="doc4-stat-v">22% <em>→ 3.4%</em></span></div>
                <div className="doc4-stat"><span className="doc4-stat-k">Year</span><span className="doc4-stat-v">2023</span></div>
              </div>
            </article>

          </div>
          <p style={{marginTop:24,fontSize:14,color:'var(--ink-mute)',fontFamily:'JetBrains Mono, monospace'}}>
            More small experiments and course projects on <a style={{color:'var(--ink)',borderBottom:'1px solid var(--ink-mute)'}}>github.com/kaanyigit-repo</a>.
          </p>
        </section>

        {/* === STACK — grouped tags === */}
        <section className="doc4-section">
          <h2><span className="num">04</span>Stack I <em>reach for</em></h2>
          <div className="doc4-stack">
            <div className="doc4-stack-row">
              <span className="doc4-stack-k">Backend</span>
              <div className="doc4-stack-v">
                <span className="doc4-tag">Python</span>
                <span className="doc4-tag">Go</span>
                <span className="doc4-tag">Java</span>
                <span className="doc4-tag">TypeScript</span>
                <span className="doc4-tag">SQL</span>
                <span className="doc4-tag">Postgres</span>
                <span className="doc4-tag">Snowflake</span>
                <span className="doc4-tag">Kafka</span>
                <span className="doc4-tag">dbt</span>
              </div>
            </div>
            <div className="doc4-stack-row">
              <span className="doc4-stack-k">DevOps &amp; Cloud</span>
              <div className="doc4-stack-v">
                <span className="doc4-tag">Azure</span>
                <span className="doc4-tag">AWS</span>
                <span className="doc4-tag">Container Apps</span>
                <span className="doc4-tag">Docker</span>
                <span className="doc4-tag">CI/CD</span>
                <span className="doc4-tag">New Relic</span>
                <span className="doc4-tag">Datadog</span>
                <span className="doc4-tag">Grafana</span>
              </div>
            </div>
            <div className="doc4-stack-row">
              <span className="doc4-stack-k">AI &amp; ML</span>
              <div className="doc4-stack-v">
                <span className="doc4-tag">PyTorch</span>
                <span className="doc4-tag">scikit-learn</span>
                <span className="doc4-tag">LangGraph</span>
                <span className="doc4-tag">MCP</span>
                <span className="doc4-tag">Azure AI Foundry</span>
                <span className="doc4-tag">RoBERTa</span>
              </div>
            </div>
          </div>
        </section>

        {/* === THINKING === */}
        <section className="doc4-section">
          <h2><span className="num">05</span>Currently <em>thinking about</em></h2>
          <div className="doc4-think">
            <div className="doc4-think-item">
              <div className="doc4-think-n">i.</div>
              <div>
                <h3 className="doc4-think-h">The information gap between energy infrastructure and a real-time trading desk.</h3>
                <p className="doc4-think-b">A lot of useful work seems to happen when someone bridges two domains nobody bridges, and then writes the boring software that makes the bridge reliable.</p>
              </div>
            </div>
            <div className="doc4-think-item">
              <div className="doc4-think-n">ii.</div>
              <div>
                <h3 className="doc4-think-h">Compiler-style backtesting frameworks.</h3>
                <p className="doc4-think-b">A strategy as a small DSL, with correctness checks before any data touches it. Less of a notebook, more of a type system.</p>
              </div>
            </div>
            <div className="doc4-think-item">
              <div className="doc4-think-n">iii.</div>
              <div>
                <h3 className="doc4-think-h">How agentic research workflows change the morning meeting.</h3>
                <p className="doc4-think-b">LangGraph + MCP turn out to be a very practical way to assemble a daily briefing. The hard part is calibrating what the desk actually trusts.</p>
              </div>
            </div>
            <div className="doc4-think-item">
              <div className="doc4-think-n">iv.</div>
              <div>
                <h3 className="doc4-think-h">Honest anomaly detection on commodity flows.</h3>
                <p className="doc4-think-b">Most "anomalies" are just noise. The work is in the threshold, the prior, and the willingness to be wrong out loud.</p>
              </div>
            </div>
            <div className="doc4-think-item">
              <div className="doc4-think-n">v.</div>
              <div>
                <h3 className="doc4-think-h">The right amount of weirdness to keep in a personal website.</h3>
                <p className="doc4-think-b">I think we&apos;re close.</p>
              </div>
            </div>
          </div>
        </section>

        {/* === HELLO === */}
        <section className="doc4-section">
          <h2><span className="num">06</span>Say <em>hello</em></h2>
          <div className="doc4-hello">
            <h3 className="doc4-hello-h">Want to <em>talk</em>?</h3>
            <p>The fastest way to reach me is email. I&apos;m slower on LinkedIn but I do read it. If you want to talk about commodities, low-latency systems, ML on weird data, or you just want to send me something interesting to read, please do.</p>
            <a className="doc4-hello-cta">Send me a note <span className="ar">→</span></a>
            <ul className="doc4-hello-list">
              <li><span className="k">Email</span><a>kaantyigit@gmail.com</a></li>
              <li><span className="k">GitHub</span><a>kaanyigit-repo</a></li>
              <li><span className="k">LinkedIn</span><a>in/kaan-yigit</a></li>
              <li><span className="k">Twitter</span><a>@kaantyigit</a></li>
            </ul>
          </div>
        </section>

        <footer className="doc4-foot">
          <span>Kaan Yigit · 2026</span>
          <span>Brooklyn · made between trades</span>
        </footer>
      </div>
    </div>
  );
}

window.DocumentSiteV4 = DocumentSiteV4;
