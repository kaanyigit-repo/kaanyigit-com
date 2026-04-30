# Handoff: Kaan Yigit personal site (v4 — Document Edition)

## Overview

A single-page personal site for **Kaan Yigit** — software engineer working on a commodities trading desk. The site is editorial in tone (think long-read magazine, not SaaS landing page): a giant display name, a personal-essay About section, a color-coded daily-work timeline, four project cards with stat chips, a grouped tech stack, a "currently thinking about" list of short essays-in-headlines, and a contact block with a tri-color top stripe.

The chosen direction (after several iterations) is **v4 — Document Edition**. Earlier directions (v1 editorial / terminal / brutalist, v2 editorial-engineer, v3 plain document) live in the same source file for reference but are **not** what should be shipped.

## About the design files

The files in `source/` are **design references created as a single HTML prototype with React-via-Babel**. They are *not* production code to copy directly. The job is to **recreate the v4 design in a real codebase** — most likely a Next.js project deployed to Vercel — using a real bundler, real fonts, and real assets.

`source/document_v4.jsx` and `source/document_v4.css` are the canonical source of truth for v4. `source/document.css` contains shared landing-section styles (`.doc-bigname`, `.doc-fact-strip`, `.doc-quick`, `.doc-pill`, etc.) that v4 reuses — copy what you need from it. `source/index.html` shows how the component is wired up (props, theme switching, the design canvas around it — ignore the canvas, you only need the v4 component).

## Fidelity

**High-fidelity.** Final colors, typography, spacing, copy, and layout are all decided. Recreate pixel-faithfully. Do not redesign en route.

The one thing not yet final is the **portrait photo** — currently a LinkedIn URL plumbed via a `photoUrl` prop. The owner will provide a properly-hosted photo asset; until then leave the prop wired so it can be swapped easily.

## Recommended target stack

- **Framework:** Next.js 15 (App Router), TypeScript
- **Styling:** Plain CSS Modules or vanilla CSS (the existing CSS is already well-scoped under `.doc4-root` — no need for Tailwind). If you prefer Tailwind, port the existing CSS to a Tailwind config; do not lose the design tokens.
- **Fonts:** `next/font/google` for Fraunces, Inter Tight, JetBrains Mono, Instrument Serif (currently loaded from Google Fonts CDN — switch to `next/font` for performance and to avoid CLS).
- **Hosting:** Vercel
- **Domain:** kaanyigit.com (or similar, owner to provide)

## Page structure (top to bottom)

The design is one long scrolling page, no navigation. All sections live inside a single `.doc-page` container with a max-width around **1100px**, centered, with `--paper` background.

### 1. Header
- Top of page, full-width row, `display: flex; justify-content: space-between`.
- Left: `Kaan Yigit` in JetBrains Mono.
- Right: a small pill — green dot + `Brooklyn · {live New York time}`. Time updates every 30s via `setInterval`. Use `Intl.DateTimeFormat` with `timeZone: 'America/New_York'`.

### 2. Landing
- Class: `.doc-landing`
- **Display name:** `<h1 class="doc-bigname">` — "Kaan" then a `<br>` then `<span class="last">Yigit.</span>`. Fraunces, ultra-large display size (~clamp 96–180px), tight tracking. The `.last` span receives the accent color underline treatment via `::after`.
- **Tag line:** small caps row with a green dot — `currently shipping data systems · open to interesting conversations`.
- **Blurb:** one paragraph, Fraunces, ~22px. Contains a clickable `<span class="swap">` that cycles through identity words: `engineer`, `analyst`, `researcher`, `tinkerer`, `reader`, `New Yorker`. Cycles every 2400ms automatically; clicking advances manually. Also contains a `<span class="doc-scribble">` ("hard part") with a hand-drawn underline (SVG inline or CSS pseudo-element).
- **Fact strip:** three cells — Born / Studied / Lives → Istanbul / UIUC '25 / Brooklyn. Mono labels, serif values.
- **Quick links row:** Email / GitHub / LinkedIn / Resume / Reading list, each with a `↗` arrow. **All hrefs need to be filled in** (see "Placeholders" below).

### 3. Section 01 · About me
- `<h2>` pattern: `<span class="num">01</span>About <em>me</em>`. The `.num` is mono and small; the rest is Fraunces display.
- Two-column layout (`.doc4-about`): left column is the portrait + caption, right column is bio + pull quote + second paragraph.
- **Portrait:** square, slight rotation (~`-2deg`), 1px ink border, accent-colored offset shadow. Caption underneath: "Brooklyn, '26" in mono.
- **Pull quote:** `.doc4-pull` — italic Fraunces, accent-colored side border on the left, ~28px.

### 4. Section 02 · What I'm building
- Heading: "What I'm <em>building</em>" (final wording — earlier versions said "A day at Uniper" or "Day-to-day"; both rejected to keep Kaan as subject, employer as context).
- Three steps in a vertical timeline (`.doc4-timeline`), each `.doc4-step` with a numbered tag pill (`01 · Platform`, `02 · Strategy`, `03 · ML & Agents`) in a different accent color.
- Step heads in Fraunces, body copy in Inter Tight.
- Vertical rule connects the three step bullets.

### 5. Section 03 · Selected work
- Four `.doc4-card` items in a single column.
- Each card has:
  - 6px-wide colored side rule (`::before`) — `--accent`, `--accent-2`, `--accent-3`, `--accent-4` for cards c1 / c2 / c3 / c4.
  - Faded oversized numeral in the top right (`.doc4-card-num`).
  - Title (Fraunces), tag line (mono), 1–2 paragraphs of body, stat chips row, optional GitHub/PDF link.
- On hover: card lifts (`transform: translateY(-2px)`), shadow deepens, numeral takes the card's accent color.
- After the four cards, a single mono line: `More small experiments and course projects on github.com/kaanyigit-repo.`
- The four cards in order:
  1. **ADS-B aircraft tracking** (UIUC senior project, 2025) — links `github.com/kaanyigit-repo/adsb-prediction`. Real repo.
  2. **Beneath the Surface** (UIUC research, 2024) — multi-task computer vision. Links `github.com/kaanyigit-repo/beneath-the-surface`. Real repo.
  3. **Tell IF Fake** (UIUC IR research, 2024, co-authored with Bartu Koksal) — links the whitepaper PDF (see `assets/tell-if-fake-whitepaper.pdf`).
  4. **Backend at Getir** (employment, 2023) — no repo link.

### 6. Section 04 · Stack I reach for
- Three rows: **Backend** / **DevOps & Cloud** / **AI & ML**. Each row is a label + a wrapping row of `.doc4-tag` chips.
- Backend: Python, Go, Java, TypeScript, SQL, Postgres, Snowflake, Kafka, dbt
- DevOps & Cloud: Azure, AWS, Container Apps, Docker, CI/CD, New Relic, Datadog, Grafana
- AI & ML: PyTorch, scikit-learn, LangGraph, MCP, Azure AI Foundry, RoBERTa

### 7. Section 05 · Currently thinking about
- Magazine-style list (`.doc4-think`). Five items, each with:
  - Italic Roman numeral (i. ii. iii. iv. v.) in Fraunces, large.
  - Bold Fraunces headline (the actual thought).
  - Inter Tight body paragraph beneath.

### 8. Section 06 · Say hello
- Contact block (`.doc4-hello`) with a 6px tri-color top stripe (linear gradient through `--accent` → `--accent-2` → `--accent-3`).
- Big Fraunces headline: "Want to <em>talk</em>?"
- One paragraph of copy.
- Black CTA button with right arrow: "Send me a note →" (mailto link).
- Four contact rows: Email / GitHub / LinkedIn / Twitter — each is a mono label and a value link.

### 9. Footer
- Two-cell row, mono, small. Left: "Kaan Yigit · 2026". Right: "Brooklyn · made between trades".

## Design tokens

All defined in `:root` of `document_v4.css`. Use `oklch()` not converted hex — the gamut is intentional.

```css
--paper:    #f0eee9;      /* page background, light theme */
--ink:      #1a1612;      /* primary text */
--ink-mute: rgba(26,22,18,0.55);
--rule:     rgba(26,22,18,0.18);
--rule-2:   rgba(26,22,18,0.08);

--accent:   oklch(0.62 0.13 50);   /* ember (warm orange) — primary */
--accent-2: oklch(0.55 0.07 145);  /* muted green */
--accent-3: oklch(0.55 0.10 230);  /* muted blue */
--accent-4: oklch(0.50 0.11 305);  /* muted purple */
```

**Dark theme** (`.dark` modifier on root):
```css
--paper:    #16130f;
--ink:      #ece8e1;
--ink-mute: rgba(236,232,225,0.55);
```

**Accent variants** — the user can swap the primary `--accent`. v4 ships with `ember` as default. Other ember-family options were prototyped via `acc-*` modifier classes (`acc-ember`, `acc-claret`, etc.) — only `ember` is in scope for shipping; others can be cut.

## Typography

- **Display / serif body:** Fraunces (variable, weights 400/500/600 + italic).
- **UI / body:** Inter Tight (300/400/500/600).
- **Mono:** JetBrains Mono (300/400/500).
- **Editorial italic accents:** Instrument Serif italic (used in `<em>` inside `<h2>`).

Type scale roughly: H1 display 96–180px (clamped), H2 display 56–72px, H3 22–28px, body 16–18px, captions/mono 11–13px. Pull quotes ~28px italic.

## Interactions & behavior

- **Live time pill** — re-renders every 30s.
- **Identity word swap** — auto-cycles every 2400ms; click advances manually. Cursor pointer on the swap span.
- **Card hover** — `transform: translateY(-2px)`, shadow grows, accent numeral lights up. Transition ~250ms.
- **Theme toggle** — currently a prop (`theme="light" | "dark"`). On the production site the owner has not decided whether to expose a toggle to visitors or pick one as default. **Recommend defaulting to `light`** and adding a small mono toggle in the footer or header that persists to `localStorage`.
- **No nav, no menu, no mobile drawer.** The site is one column. Set a sensible mobile breakpoint at 720px: stack the About two-column to one, shrink display type, drop card hover transforms.

## State management

Trivial. One `useState` for the live clock (or use `setInterval` + force update), one for the role index. No data fetching, no auth, no forms beyond a `mailto:` CTA.

## Placeholders that need real values before launch

| What | Where | Current value | Action |
|---|---|---|---|
| Photo | `photoUrl` prop / portrait `<img src>` | LinkedIn-hosted URL (will expire) | Owner to provide a self-hosted JPG/PNG. Place in `/public/portrait.jpg`. |
| Email | every "Email" link, hello section | `kaantyigit@gmail.com` | Confirm; wire as `mailto:`. |
| GitHub | every "GitHub" link | `github.com/kaanyigit-repo` | Confirm handle. |
| LinkedIn | every "LinkedIn" link | `in/kaan-yigit` | Confirm full URL. |
| Twitter | hello section | `@kaantyigit` | Confirm or remove. |
| Resume | landing quick-link | not yet wired | Owner to provide a hosted PDF; link to it. |
| Reading list | landing quick-link | not yet wired | Decide: a real `/reading` page, an external link (Goodreads, Are.na), or remove the link. |
| Project links | project cards | `<a>` tags with no href in cards 01, 02 | Wire to actual repo URLs (already known: `kaanyigit-repo/adsb-prediction`, `kaanyigit-repo/beneath-the-surface`). |
| Whitepaper PDF | card 03 | `projects/tell-if-fake-whitepaper.pdf` (in this handoff bundle) | Drop into `/public/`, link via `/tell-if-fake-whitepaper.pdf`. |

## Assets included in this handoff

- `source/document_v4.jsx` — the React component, canonical source for v4.
- `source/document_v4.css` — v4-specific styles.
- `source/document.css` — shared landing styles. Reuses prefixes `.doc-`, `.doc-bigname`, `.doc-fact-strip`, etc.
- `source/document.jsx` — the v3 base component v4 builds on (reference only; you only need v4).
- `source/index.html` — full canvas wiring (reference only).
- `assets/tell-if-fake-whitepaper.pdf` — real co-authored whitepaper, drop into `/public/` of the production site and link from the third project card.

## Things explicitly *not* shipped

- The DesignCanvas wrapper, the Tweaks panel, and the v1/v2/v3 directions — all are review/iteration tooling, not part of the production site.
- The `acc-*` accent variants other than `ember` (the default).
- Any analytics. Add Vercel Analytics or Plausible if desired.

## Tone & voice notes (do not lose these in translation)

The owner cares strongly about voice. Keep it through any changes:

- **First-person, but understated.** No "I'm passionate about..." opener. No exclamation points.
- **Employer is context, not subject.** The owner's name and work come first; "Uniper" / "Getir" appear inline as where the work happens, not as headlines.
- **No slop tropes.** Do not add: "fueled by coffee", "built with love", emoji decoration, gradient backgrounds, AI-assistant clichés ("I love working at the intersection of..."), "passionate about", "rockstar/ninja/wizard", or self-aware meta footers.
- **Keep the dry humor.** Lines like "made between trades" and "ML in places it probably shouldn't belong" are intentional.
- **No filler.** If a section feels empty, fix the layout — don't pad it with content.
