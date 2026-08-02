# Josh Sylvia Tech - Cloudflare Pages Site

Josh Sylvia's personal portfolio site — a **static multi-page site** deployed on **Cloudflare Pages**. It showcases AI/automation, API, cybersecurity, QA, and tutorial content, plus a resume and contact form. The site is fully serverless: no build step, no framework, no backend server (only Cloudflare Pages Functions).

## 🚀 Deployment

### Auto-deploy (preferred)
Every push to the GitHub `main` branch (origin `https://github.com/joshsylvia-eng/cloudflare_jsylvia`) triggers a production deploy via Cloudflare Pages.

- **Build command:** no-op (static site, no build required)
- **Build output directory:** `public`

### Manual deploy
```bash
npm run deploy   # wrangler pages deploy
```

### Local development
```bash
npm install
npm run dev      # wrangler pages dev public → http://localhost:8788
```

## 🔧 Environment Variables

Set these in Cloudflare Pages dashboard > Settings > Environment variables (never committed):

```env
GROQ_API_KEY=your_groq_api_key_here
CONTACT_EMAIL=joshsylvia@gmail.com
RESEND_API_KEY=your_resend_api_key_here
```

Template in `.env.example`.

## 🛠️ Architecture

### Pages (static content in `public/`)
| Page | Topic |
|---|---|
| `index.html` | Home / hero (embeds the compressed Guatemala travel video) |
| `ai.html` | AI & Automation: lifecycle (top), MCP, RAG, Agentic AI, AI Security (OWASP/controls/GRC), monitoring, numbered roles, chatbot |
| `apis.html` | REST API documentation and integration guides |
| `cybersecurity.html` | Security content, CISSP expertise, TOC sidebar pattern |
| `qa.html` | QA/testing content |
| `tutorials.html` | Video tutorials |
| `playground.html` | Interactive demos (Monaco editor) |
| `about.html` | Bio, skills, experience |
| `contact.html` | Contact form |

- Plain static HTML/CSS/JS — no frameworks, no bundlers, no runtime npm packages.
- Shared navigation in `public/components/navigation.html`, loaded per page via `loadNavigation()`.
- Per-page CSS in `public/css/<page>.css`; `main.css` / `navigation.css` shared.
- `ai.html` and `cybersecurity.html` use the TOC sidebar pattern (sticky nav, mobile toggle, scroll-spy).

### Cloudflare Pages Functions (`functions/api/`)
Each file exports `onRequestGet` / `onRequestPost`.

- `health.js` — health check
- `agent-chat.js` — server-side Groq chat proxy (keeps `GROQ_API_KEY` out of the browser)
- `ollama-status.js` — returns not available
- `agent-search.js` — POST knowledge-base search over an inline index
- `agent-skills.js` — skills info
- `agent-experience.js` — experience info
- `agent-contact.js` — contact info
- `contact.js` — contact form submission (email via Resend)
- `videos.js` — video listing

## ⚙️ Configuration Files

- `_headers` — Cache-Control + security headers (CSP, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy). Note: cache paths are `/css/*`, `/js/*`, `/images/*`, `/videos/*` (publish root is `public/`).
- `_redirects` — `/api/*` → Pages Functions.
- `package.json` — dev tooling (wrangler devDependency).
- `.env.example` — env var template.
- `AGENTS.md` — guidance for AI agents working on this repo.

## 📏 Limits That Matter

- **Cloudflare Pages:** 25 MiB max per asset, 20,000 files on the free tier.
- **GitHub:** warns ≥50 MB, hard-blocks pushes of files ≥100 MB.
- Videos must be compressed to fit (see `public/videos/Engineering Abroad Guatemala 1080.mp4`, ~21 MiB after 2-pass x264 at 720p).

## 🔒 Security

- `GROQ_API_KEY` is never exposed to the browser — the chatbot calls `/api/agent-chat`, which proxies to Groq server-side.
- Security headers applied globally via `_headers`, including a Content-Security-Policy scoped to self + the site's CDNs (cdnjs, Font Awesome kit, unpkg for Monaco).

## 📝 Known Dead Assets / Refactor Targets

- `public/css/ai.css` — old "AI Page Expansion Styles" block (`.lifecycle`, `.role-card`, `.role-grid`, `.threat-card`, `.skill-tag`, `.risk-list`, etc.) is dead after the TOC-sidebar reformat
- `public/ai.html` — stale Docker section and skypack OpenAI import already removed; keep them gone
- `functions/api/groq-key.js` — removed (exposed the key to the client); replaced by `functions/api/agent-chat.js`

## 🤖 AI Assistant Status

The interactive AI assistant on `ai.html` is **under construction** ("Due to recent server migration, AI assistant full feature broke."). It shows an "Under Construction" notice and does not present the assistant as functional.

## 📞 Support

- Email: joshsylvia@gmail.com
- GitHub: https://github.com/joshsylvia-eng

---

Built with ❤️ by Josh Sylvia - AI & Cybersecurity Expert
