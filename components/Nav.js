const links = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" }
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line-soft bg-ink/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-amber-dim font-mono text-xs font-semibold text-amber"
        >
          NS
        </a>
        <ul className="hidden gap-8 font-mono text-[13px] text-muted md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="focus-ring transition-colors hover:text-ivory"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/resume.pdf"
          className="focus-ring rounded border border-line px-3 py-1.5 font-mono text-xs text-ivory transition-colors hover:border-amber hover:text-amber"
        >
          Resume ↓
        </a>
      </nav>
    </header>
  );
}
