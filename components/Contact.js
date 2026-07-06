"use client";

import { useState } from "react";

const channels = [
  { label: "Email", value: "kataramnavyasree05@gmail.com", href: "mailto:kataramnavyasree05@gmail.com" },
  { label: "LinkedIn", value: "kataram-navyasree", href: "https://www.linkedin.com/in/kataram-navyasree/" },
  { label: "GitHub", value: "KATARAMNAVYASREE", href: "https://github.com/KATARAMNAVYASREE" }
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:kataramnavyasree05@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="section-eyebrow">Contact</p>
        <h2 className="mt-3 max-w-2xl text-balance font-display text-3xl font-semibold leading-tight text-ivory md:text-5xl">
          Let's connect
        </h2>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted md:text-base">
          Have an opportunity in mind, or want to talk about a project? I'd
          love to hear from you.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-lg border border-line-soft bg-surface/40 p-6"
          >
            <div>
              <label className="font-mono text-[11px] uppercase tracking-wider text-dim">
                Name
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="focus-ring mt-1.5 w-full rounded border border-line-soft bg-ink px-3 py-2 text-sm text-ivory outline-none placeholder:text-dim"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="font-mono text-[11px] uppercase tracking-wider text-dim">
                Email
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="focus-ring mt-1.5 w-full rounded border border-line-soft bg-ink px-3 py-2 text-sm text-ivory outline-none placeholder:text-dim"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="font-mono text-[11px] uppercase tracking-wider text-dim">
                Message
              </label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="focus-ring mt-1.5 w-full resize-none rounded border border-line-soft bg-ink px-3 py-2 text-sm text-ivory outline-none placeholder:text-dim"
                placeholder="What's on your mind?"
              />
            </div>
            <button
              type="submit"
              className="focus-ring w-full rounded bg-amber px-5 py-2.5 font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              Send Message
            </button>
          </form>

          <div className="flex flex-col gap-4">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                className="focus-ring card-hover rounded-lg border border-line-soft bg-surface/40 p-4 transition-colors hover:border-amber"
              >
                <p className="font-mono text-[10px] uppercase tracking-wider text-dim">
                  {c.label}
                </p>
                <p className="mt-1 break-words font-mono text-sm text-ivory">
                  {c.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>

      <footer className="border-t border-line-soft">
        <div className="mx-auto max-w-6xl px-6 py-12 text-center">
          <p className="font-display text-lg italic text-muted">
            "Good models don't matter until they're shipped."
          </p>
          <p className="mt-3 font-mono text-xs uppercase tracking-widest text-dim">
            Navya Sree · AI/ML Engineer · GenAI · Forecasting
          </p>
        </div>
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-line-soft px-6 py-6 font-mono text-xs text-dim sm:flex-row">
          <span>© {new Date().getFullYear()} Kataram Navya Sree</span>
          <span>Built with Next.js &amp; Tailwind CSS</span>
        </div>
      </footer>
    </section>
  );
}
