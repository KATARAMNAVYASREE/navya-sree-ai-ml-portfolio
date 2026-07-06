# Navya Sree — AI/ML Engineer Portfolio

A production-ready personal portfolio for **Kataram Navya Sree**, an AI/ML
engineering undergraduate specializing in agentic GenAI systems (RAG,
LangChain/LangGraph), applied forecasting (LSTM/ARIMA), and FastAPI backends.

## Design direction

- **Role**: AI/ML Engineer (junior, final-year undergraduate + internship experience)
- **Signature element**: an animated pipeline diagram (`Ingest → Embed → Retrieve → Reason → Serve`)
  used in the hero to literally show how the candidate's work moves data from
  raw input to a served result — grounded in her actual RAG/agent pipeline work.
- **Palette**: near-black ink background (`#0A0E12`) with an amber signal
  accent (`#FFB86B`) and a mint success accent (`#6EE7B7`), evoking
  training-log/status colors rather than a generic dark-mode template.
- **Type**: Space Grotesk (display), IBM Plex Sans (body), IBM Plex Mono
  (labels, metrics, code-like details) — an engineering-documentation feel.

## Tech stack

- Next.js 14 (App Router)
- Tailwind CSS
- Plain JavaScript (no TypeScript, no external UI libraries)
- Zero required environment variables

## Project structure

```
portfolio/
├── app/
│   ├── layout.js       # Root layout, fonts, metadata
│   ├── page.js         # Assembles all sections
│   └── globals.css     # Tailwind + base styles
├── components/
│   ├── Nav.js
│   ├── Hero.js
│   ├── PipelineDiagram.js
│   ├── About.js
│   ├── Projects.js
│   ├── Experience.js
│   ├── Skills.js
│   └── Contact.js
├── public/              # Static assets (add resume.pdf here if desired)
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
├── jsconfig.json
└── package.json
```

## Local setup

```bash
npm install
npm run dev
```

Then open **http://localhost:3000**.

To create a production build:

```bash
npm run build
npm start
```

## Customizing content

- All copy lives directly in the component files under `components/` — no
  CMS or data files to wire up.
- To enable the "Resume ↓" button in the nav, drop a `resume.pdf` file into
  `public/`.
- Update contact links (email, phone, LinkedIn, GitHub) in `components/Contact.js`.
- Update roles, metrics, and project details in `components/Experience.js`
  and `components/Projects.js`.

## Accessibility & performance notes

- Respects `prefers-reduced-motion` (animations are disabled automatically).
- All interactive elements have visible keyboard focus states.
- Fully responsive from mobile (375px) up to wide desktop layouts.
- No client-side JavaScript is required beyond what Next.js ships by default —
  every section is a server component.
