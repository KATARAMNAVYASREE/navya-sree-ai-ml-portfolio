"use client";

import { useEffect, useState } from "react";

const lines = [
  "$ init portfolio.exe",
  "> Loading AI/ML modules...",
  "> Connecting to inference pipeline...",
  "> Rendering interface...",
  "✓ System ready. Welcome."
];

export default function TerminalBoot() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (window.sessionStorage.getItem("bootPlayed")) {
      setHidden(true);
      setDone(true);
      return;
    }

    const stepTimers = lines.map((_, i) =>
      setTimeout(() => setVisibleLines(i + 1), 260 * (i + 1))
    );

    const finishTimer = setTimeout(() => {
      setHidden(true);
      window.sessionStorage.setItem("bootPlayed", "1");
    }, 260 * lines.length + 500);

    const removeTimer = setTimeout(() => setDone(true), 260 * lines.length + 950);

    return () => {
      stepTimers.forEach(clearTimeout);
      clearTimeout(finishTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (done) return null;

  return (
    <div
      className={`fixed inset-0 z-[999] flex items-center justify-center bg-ink transition-opacity duration-500 ${
        hidden ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <div className="w-full max-w-md px-6 font-mono text-sm text-mint">
        <p className="mb-3 text-xs text-dim">portfolio.exe — bash</p>
        {lines.slice(0, visibleLines).map((line, i) => (
          <p key={i} className="leading-relaxed">
            {line}
          </p>
        ))}
        {visibleLines < lines.length && (
          <span className="inline-block h-4 w-2 animate-blink bg-mint align-middle" />
        )}
      </div>
    </div>
  );
}
