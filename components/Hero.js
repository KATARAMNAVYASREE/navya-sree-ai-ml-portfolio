import StatCounter from "./StatCounter";

const chips = ["LangChain", "FastAPI", "PyTorch", "RAG", "LangGraph"];

const snippets = [
  {
    lang: "python",
    code: `def forecast(series):\n    model.fit(series)\n    return model.predict(30)`
  },
  {
    lang: "fastapi",
    code: `@app.post("/query")\ndef query(q: str):\n    return rag_chain.run(q)`
  }
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-line-soft"
    >
      <div className="absolute inset-0 bg-dot-grid opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="animate-rise inline-flex items-center gap-2 rounded-full border border-mint-dim bg-surface/60 px-3 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-mint" />
          <span className="font-mono text-[11px] uppercase tracking-widest text-mint">
            Available for internships &amp; full-time roles
          </span>
        </div>

        <p
          className="animate-rise mt-6 font-mono text-sm text-amber"
          style={{ animationDelay: "0.06s" }}
        >
          {"< AI/ML Engineer />"}
        </p>

        <h1
          className="animate-rise mt-3 max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ivory md:text-6xl"
          style={{ animationDelay: "0.12s" }}
        >
          Navya Sree
        </h1>

        <p
          className="animate-rise mt-5 max-w-xl text-balance font-body text-base leading-relaxed text-muted md:text-lg"
          style={{ animationDelay: "0.2s" }}
        >
          Final-year AI/ML undergraduate at Sreyas Institute, specializing in
          agentic GenAI systems and applied forecasting. Building
          production-style pipelines that go from notebook to working API.
        </p>

        <div
          className="animate-rise mt-8 flex flex-wrap items-center gap-4"
          style={{ animationDelay: "0.28s" }}
        >
          <a
            href="#work"
            className="focus-ring rounded bg-amber px-5 py-2.5 font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="focus-ring rounded border border-line px-5 py-2.5 font-mono text-sm text-ivory transition-colors hover:border-amber hover:text-amber"
          >
            Contact Me
          </a>
        </div>

        <div
          className="animate-rise mt-7 flex flex-wrap gap-2"
          style={{ animationDelay: "0.34s" }}
        >
          {chips.map((c, i) => (
            <span
              key={c}
              className="animate-float rounded-full border border-line-soft bg-surface/50 px-3 py-1 font-mono text-[11px] text-muted"
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              {c}
            </span>
          ))}
        </div>

        <div
          className="animate-rise mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-[repeat(3,auto)_1fr]"
          style={{ animationDelay: "0.4s" }}
        >
          <StatCounter value={3} suffix="+" label="Projects shipped" />
          <StatCounter value={10} suffix="+" label="Technologies" />
          <div>
            <p className="font-display text-3xl font-semibold text-mint md:text-4xl">
              Active
            </p>
            <p className="mt-1 font-mono text-xs text-muted">
              Agentic AI Intern
            </p>
          </div>

          <div className="hidden gap-3 lg:col-span-1 lg:flex lg:flex-col lg:justify-self-end">
            {snippets.map((s) => (
              <div
                key={s.lang}
                className="w-64 rounded-lg border border-line-soft bg-surface/60 p-3"
              >
                <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-dim">
                  {s.lang}
                </p>
                <pre className="whitespace-pre-wrap font-mono text-[11px] leading-relaxed text-mint">
                  {s.code}
                </pre>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
