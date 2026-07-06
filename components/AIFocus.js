import StatCounter from "./StatCounter";

const cards = [
  {
    title: "Machine Learning Systems",
    body: "Designing models that learn from data and adapt to real-world complexity — from Random Forest classifiers to LSTM sequence models."
  },
  {
    title: "AI Problem Solving",
    body: "Applying ML to concrete bottlenecks — resume screening, AQI forecasting, medical document extraction — with measurable, production-ready results."
  },
  {
    title: "Data-Driven Thinking",
    body: "Every model starts with understanding the shape, quality, and gaps in the data before a single line of training code runs."
  },
  {
    title: "Automation & Orchestration",
    body: "Building agent workflows that chain reasoning steps and call tools reliably, instead of a single brittle prompt."
  }
];

export default function AIFocus() {
  return (
    <section className="border-b border-line-soft">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="section-eyebrow">AI focus</p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold text-ivory md:text-4xl">
          How I think about AI
        </h2>
        <p className="mt-3 max-w-lg text-sm text-muted md:text-base">
          Exploring intelligent systems and machine learning solutions — from
          theory to deployment.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div
              key={c.title}
              className="card-hover rounded-lg border border-line-soft bg-surface/40 p-5"
            >
              <h3 className="font-display text-sm font-semibold text-ivory">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {c.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 border-t border-line-soft pt-10 sm:grid-cols-4">
          <StatCounter value={3} suffix="+" label="AI / ML projects" />
          <StatCounter value={4} suffix="+" label="ML frameworks" />
          <StatCounter value={2} suffix="+" label="Research areas" />
          <StatCounter value={1} label="Internship" />
        </div>
      </div>
    </section>
  );
}
