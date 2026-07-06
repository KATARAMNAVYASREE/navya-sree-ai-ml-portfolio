"use client";

import { useState } from "react";

const projects = [
  {
    id: "01",
    letter: "J",
    title: "Job Market Analytics & Skill-Forecasting Platform",
    category: "AI/ML",
    metric: { value: "60%", label: "less manual screening time" },
    summary:
      "A forecasting platform that mines 2,000+ job postings to predict in-demand skills and likely role fits, combining a Random Forest classifier with ARIMA time-series forecasting.",
    detail:
      "Exposed every model through a FastAPI service layer feeding a React dashboard, plus a built-in NLP resume analyzer for skill extraction, gap analysis, and candidate-job matching.",
    stack: ["Python", "FastAPI", "Random Forest", "ARIMA", "NLP", "React"],
    link: "#"
  },
  {
    id: "02",
    letter: "A",
    title: "30-Day Air Quality Forecasting Engine",
    category: "AI/ML",
    metric: { value: "88%", label: "forecast accuracy" },
    summary:
      "LSTM and ARIMA models trained to forecast 30-day AQI trends, built from raw sensor data through to a validated, visualized prediction.",
    detail:
      "Owned the full pipeline — ingestion, feature engineering, model training, and evaluation — using Pandas, NumPy, Matplotlib, and Seaborn to validate results before shipping.",
    stack: ["Python", "LSTM", "ARIMA", "Pandas", "Time-Series"],
    link: "#"
  },
  {
    id: "03",
    letter: "M",
    title: "Medly — AI Medical Document Intelligence",
    category: "AI/ML",
    metric: { value: "70%", label: "faster report processing" },
    summary:
      "An OCR plus generative AI extraction pipeline that turns scanned medical reports into structured, queryable data.",
    detail:
      "Built FastAPI REST endpoints so downstream healthcare workflows could pull structured extractions and analysis without touching the raw scans.",
    stack: ["Python", "OCR", "Generative AI", "FastAPI", "NLP"],
    link: "#"
  }
];

const categories = ["All", "AI/ML"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const visible =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="work" className="border-b border-line-soft">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="section-eyebrow">Projects</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-ivory md:text-4xl">
          What I've built
        </h2>
        <p className="mt-3 max-w-lg text-sm text-muted md:text-base">
          Three production-style projects across forecasting, NLP, and
          document intelligence.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((c) => {
            const count =
              c === "All" ? projects.length : projects.filter((p) => p.category === c).length;
            const active = filter === c;
            return (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`focus-ring rounded-full border px-4 py-1.5 font-mono text-xs transition-colors ${
                  active
                    ? "border-amber bg-amber/10 text-amber"
                    : "border-line-soft text-muted hover:border-line hover:text-ivory"
                }`}
              >
                {c} {count}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {visible.map((p) => (
            <article
              key={p.id}
              className="card-hover flex flex-col rounded-lg border border-line-soft bg-surface/50 p-6"
            >
              <div className="flex items-start justify-between">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-amber-dim font-mono text-xs font-semibold text-amber">
                  {p.letter}
                </span>
                <span className="rounded border border-line-soft px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-dim">
                  {p.category}
                </span>
              </div>

              <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-ivory">
                {p.title}
              </h3>

              <div className="mt-4 border-l-2 border-mint-dim pl-3">
                <p className="font-display text-2xl font-semibold text-mint">
                  {p.metric.value}
                </p>
                <p className="font-mono text-[11px] text-muted">
                  {p.metric.label}
                </p>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted">
                {p.summary}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-dim">
                {p.detail}
              </p>

              <div className="mt-6 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded bg-surface-hi px-2 py-1 font-mono text-[10px] text-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <a
                href={p.link}
                className="focus-ring mt-6 inline-flex items-center gap-1 font-mono text-xs text-amber transition-colors hover:text-ivory"
              >
                View on GitHub →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
