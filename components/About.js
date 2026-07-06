const facts = [
  "Final year B.Tech AI & ML, Sreyas Institute of Engineering and Technology",
  "Built a job-market analytics platform processing 2,000+ postings",
  "Currently interning as Agentic AI Intern at Innomatics Research Labs",
  "Seeking full-time AI/ML, GenAI, or backend engineering roles from 2027"
];

const focusCards = [
  {
    title: "GenAI & Agents",
    body: "Building RAG pipelines and multi-step LLM agents with LangChain and LangGraph."
  },
  {
    title: "Applied Forecasting",
    body: "Designing LSTM and ARIMA models that hit measurable accuracy on real time-series data."
  },
  {
    title: "Backend Engineering",
    body: "Shipping FastAPI services that take models from notebook to a working endpoint."
  },
  {
    title: "Continuous Learning",
    body: "Certified in AI Fundamentals (IBM) and Generative AI & Deep Learning (Infosys Springboard)."
  }
];

export default function About() {
  return (
    <section id="about" className="border-b border-line-soft">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="section-eyebrow">About me</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-ivory md:text-4xl">
          Who I am
        </h2>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="max-w-xl text-[15px] leading-relaxed text-muted md:text-base">
              I'm a final-year AI/ML undergraduate at Sreyas Institute of
              Engineering and Technology. I build production-style AI
              systems — RAG pipelines, LLM agents orchestrated with
              LangGraph, and forecasting models — and ship them behind real
              APIs instead of leaving them in a notebook.
            </p>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted md:text-base">
              I'm currently an Agentic AI Intern at Innomatics Research
              Labs, and I'm looking for full-time AI/ML, GenAI, or backend
              engineering roles.
            </p>

            <ul className="mt-6 space-y-3">
              {facts.map((f) => (
                <li
                  key={f}
                  className="flex gap-3 font-mono text-[13px] text-dim"
                >
                  <span className="text-amber">▸</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {focusCards.map((c) => (
              <div
                key={c.title}
                className="card-hover rounded-lg border border-line-soft bg-surface/40 p-5"
              >
                <h3 className="font-display text-sm font-semibold text-amber">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
