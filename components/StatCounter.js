"use client";

import { useEffect, useRef, useState } from "react";

export default function StatCounter({ value, suffix = "", label, duration = 1200 }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();

          const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(step);
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <div ref={ref}>
      <p className="font-display text-3xl font-semibold text-ivory md:text-4xl">
        {display}
        {suffix}
      </p>
      <p className="mt-1 font-mono text-xs text-muted">{label}</p>
    </div>
  );
}
