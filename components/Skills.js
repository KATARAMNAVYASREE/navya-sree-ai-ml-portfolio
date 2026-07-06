const groups = [
  {
    label: "Programming Languages",
    icon: "⌨",
    items: ["Python", "Java", "SQL", "JavaScript"]
  },
  {
    label: "GenAI / LLM",
    icon: "🤖",
    items: [
      "LangChain",
      "LangGraph",
      "RAG",
      "Prompt Engineering",
      "LLM Integration",
      "Generative AI",
      "Large Language Models"
    ]
  },
  {
    label: "Machine Learning & Deep Learning",
    icon: "🧠",
    items: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Predictive Analytics",
      "Random Forest",
      "LSTM",
      "ARIMA",
      "Feature Engineering",
      "Scikit-learn",
      "TensorFlow",
      "PyTorch"
    ]
  },
  {
    label: "Backend & APIs",
    icon: "⚙",
    items: ["FastAPI", "REST APIs", "Streamlit"]
  },
  {
    label: "Data & Visualization",
    icon: "📊",
    items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly"]
  },
  {
    label: "Databases",
    icon: "🗄",
    items: ["MySQL", "SQLite", "MongoDB"]
  },
  {
    label: "Core Computer Science",
    icon: "📐",
    items: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering"
    ]
  },
  {
    label: "Developer Tools",
    icon: "🛠",
    items: ["Git", "GitHub", "VS Code", "Google Colab"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="border-b border-line-soft">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="section-eyebrow">Tech stack</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-ivory md:text-4xl">
          Skills &amp; technologies
        </h2>
        <p className="mt-3 max-w-lg text-sm text-muted md:text-base">
          Tools I use to design, train, and ship AI systems.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {groups.map((g) => (
            <div
              key={g.label}
              className="rounded-lg border border-line-soft bg-surface/40 p-5"
            >
              <div className="flex items-center justify-between">
                <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-amber">
                  <span>{g.icon}</span>
                  {g.label}
                </h3>
                <span className="font-mono text-[11px] text-dim">
                  {g.items.length} tools
                </span>
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-line-soft bg-surface-hi px-2.5 py-1 font-mono text-[11px] text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
