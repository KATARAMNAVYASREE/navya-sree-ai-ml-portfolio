const highlights = [
  "Designed and shipped RAG-based retrieval pipelines with LangChain and vector databases, improving contextual relevance for downstream agent tasks.",
  "Orchestrated multi-step LLM agent workflows in LangGraph, tuning prompts to keep outputs stable across chained reasoning steps.",
  "Built and deployed FastAPI endpoints that took AI features from prototype to working, integration-ready APIs.",
  "Worked inside Python-based automation and LLM orchestration pipelines alongside a remote engineering team."
];

const activities = [
  {
    icon: "🏆",
    title: "India AI Impact Summit 2026",
    body: "Participated in the Pre-Summit hackathon event, building and pitching an AI prototype under time constraints."
  },
  {
    icon: "🔧",
    title: "Generative AI Workshop",
    body: "Completed a 5-day hands-on Generative AI workshop run by Innomatics Research Labs."
  }
];

const certifications = [
  {
    tag: "AI Foundations",
    title: "Artificial Intelligence Fundamentals",
    platform: "IBM"
  },
  {
    tag: "GenAI",
    title: "Generative AI & Deep Learning for Developers",
    platform: "Infosys Springboard"
  },
  {
    tag: "Software Engineering",
    title: "Software Engineer Certification",
    platform: "HackerRank"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="border-b border-line-soft">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="section-eyebrow">Experience</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-ivory md:text-4xl">
          Work experience
        </h2>

        <div className="mt-10 grid gap-10 md:grid-cols-[1fr_2fr]">
          <div>
            <h3 className="font-display text-xl font-semibold text-ivory">
              Agentic AI Intern
            </h3>
            <p className="mt-1 font-mono text-sm text-amber">
              Innomatics Research Labs
            </p>
            <p className="mt-1 font-mono text-xs text-dim">
              Feb 2026 — May 2026 · Remote
            </p>
          </div>

          <ul className="space-y-4">
            {highlights.map((h, i) => (
              <li
                key={i}
                className="flex gap-4 border-l border-line-soft pl-5 text-sm leading-relaxed text-muted"
              >
                <span className="mt-1 font-mono text-[10px] text-dim">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 border-t border-line-soft pt-12 md:grid-cols-2">
          {activities.map((a) => (
            <div
              key={a.title}
              className="rounded-lg border border-line-soft bg-surface/40 p-5"
            >
              <span className="text-xl">{a.icon}</span>
              <h4 className="mt-3 font-display text-sm font-semibold text-ivory">
                {a.title}
              </h4>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                {a.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <p className="font-mono text-xs uppercase tracking-wider text-amber">
            Certifications · {certifications.length} earned
          </p>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {certifications.map((c) => (
              <div
                key={c.title}
                className="rounded-lg border border-line-soft bg-surface/40 p-4"
              >
                <span className="rounded border border-line-soft px-2 py-0.5 font-mono text-[10px] uppercase text-dim">
                  {c.tag}
                </span>
                <h5 className="mt-3 text-sm font-medium leading-snug text-ivory">
                  {c.title}
                </h5>
                <p className="mt-1 font-mono text-[11px] text-muted">
                  {c.platform}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
