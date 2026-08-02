# AGENTS.md

Guidance for AI agents working on this repository.

## What This Site Is

Josh Sylvia's personal portfolio site — a **static multi-page site** deployed on **Cloudflare Pages**. It is a personal showcase of AI/automation, API, cybersecurity, QA, and tutorial content, plus a resume/contact presence. The site is fully serverless; there is no build step, no framework, and no backend server of its own (only Cloudflare Pages Functions).

## Quick Facts

- **Deploy target:** Cloudflare Pages, publish root is `public/`, build command is a no-op
- **Auto-deploy:** every push to the GitHub `main` branch (origin `https://github.com/joshsylvia-eng/cloudflare_jsylvia`) triggers a production deploy
- **Runtime:** static HTML/CSS/JS only; no npm build, no bundler
- **Local dev:** `npm run dev` → `wrangler pages dev public` (serves at `http://localhost:8788`)
- **Manual deploy:** `npm run deploy` → `wrangler pages deploy`

## Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Serve the site locally with wrangler (includes `functions/`) |
| `npm run build` | No-op (static site, no build required) |
| `npm run deploy` | Deploy to Cloudflare Pages via wrangler |
| `git push` | Push to `main` → auto-deploys (preferred deploy path) |

## Layout

```
functions/api/          Cloudflare Pages Functions (serverless endpoints)
public/                 Publish root — everything here is served as-is
  components/           Shared HTML partials (navigation.html)
  css/                  Per-page stylesheets + navigation.css
  js/                   Per-page JS + shared search/agent scripts
  images/               Static images (some are dead — see Dead Assets)
  res/                  Resume PDF
  videos/               Video assets (respects 25 MiB file limit)
  *.html                One page per topic: index, ai, apis, cybersecurity,
                        qa, tutorials, playground, about, contact
_headers                Cache + security headers (Pages applies these)
_redirects              URL redirect/rewrite rules
.env.example            Env var template (GROQ_API_KEY, CONTACT_EMAIL, RESEND_API_KEY)
```

## Pages

| File | Topic |
|---|---|
| `index.html` | Home / hero; embeds the compressed Guatemala travel video |
| `ai.html` | AI & Automation: lifecycle (top), MCP, RAG, Agentic AI, AI Security (OWASP/controls/GRC), monitoring, numbered roles, chatbot |
| `apis.html` | REST API documentation and integration guides |
| `cybersecurity.html` | Security content, CISSP expertise, TOC sidebar pattern |
| `qa.html` | QA/testing content |
| `tutorials.html` | Video tutorials |
| `playground.html` | Interactive demos |
| `about.html` | Bio, skills, experience |
| `contact.html` | Contact form |

## Conventions

- **Plain static HTML/CSS/JS.** No frameworks, no bundlers, no npm packages at runtime. Only devDependency is `wrangler`.
- **Shared navigation** lives in `public/components/navigation.html`; each page fetches it via `loadNavigation()` and activates its own nav link.
- **Per-page CSS files** (`css/<page>.css`) are linked in the matching page's `<head>`. `main.css`/`navigation.css` are shared across pages.
- **Font Awesome 6** is loaded from cdnjs for icons.
- **TOC sidebar pattern** (used on `cybersecurity.html` and `ai.html`): sticky `.toc-sidebar` with `.toc-nav`, mobile `.toc-toggle`, and IntersectionObserver scroll-spy in a page-bottom `<script>`.
- Keep pages compact: prefer two-column bullet lists over card grids; avoid long pages and unnecessary boxes (user preference).
- No code comments unless asked.

## Limits That Matter

- **Cloudflare Pages:** 25 MiB max per asset, 20,000 files on the free tier.
- **GitHub:** warns ≥50 MB, hard-blocks pushes of files ≥100 MB.
- Videos must be compressed to fit (see `public/videos/Engineering Abroad Guatemala 1080.mp4`, ~21 MiB after 2-pass x264 at 720p).

## Serverless Functions (`functions/api/`)

Cloudflare Pages Functions — each file exports `onRequestGet` / `onRequestPost` etc. Existing endpoints:

- `health.js` — health check
- `groq-key.js` — returns the Groq API key from `GROQ_API_KEY` env var (⚠️ review: this exposes the key to the client)
- `ollama-status.js` — returns not available
- `agent-search.js` — POST knowledge-base search over an inline index
- `agent-skills.js` — skills info
- `agent-experience.js` — experience info
- `agent-contact.js` — contact info
- `contact.js` — contact form submission (email via Resend)
- `videos.js` — video listing

Env vars (set in Cloudflare dashboard, not committed): `GROQ_API_KEY`, `CONTACT_EMAIL`, `RESEND_API_KEY`.

## `_headers` / `_redirects` Notes

- Security headers (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`) are applied to all routes.
- ⚠️ Cache rules are written as `/public/css/*` etc. — **these prefixes never match** because the publish root is `public/` and paths are served as `/css/*`. If asset caching matters, fix the prefixes.
- `_redirects` rewrites `/api/*` to the Pages Functions.

## Known Dead Assets / Code (refactor targets)

- `public/images/Video.mov` — 14 MB legacy video, no references
- `public/images/transparent_heart.png`, `public/images/b&j.jpg`, `public/images/j&b.jpg` — no references in HTML
- `public/css/ai.css` — old "AI Page Expansion Styles" block (`.lifecycle`, `.role-card`, `.role-grid`, `.threat-card`, `.skill-tag`, `.risk-list`, etc.) is dead after the TOC-sidebar reformat
- `public/ai.html` — stale "Docker Container Configuration" section and skypack `OpenAI` import already removed; keep them gone
- `functions/api/groq-key.js` — removed (exposed the key to the client); replaced by `functions/api/agent-chat.js` server-side proxy

## Chatbot / AI Assistant Status

The interactive AI assistant on `ai.html` is **under construction** ("Due to recent server migration, AI assistant full feature broke."). The `js/ai.js` / `js/agent.js` flow still attempts a client-side agent path and the OpenAI lib references are stale. Do not present the assistant as functional without verifying the backend.
