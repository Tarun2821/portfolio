"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { site } from "@/data/site";

export default function AboutHome() {
  const { ref, isVisible } = useScrollReveal(0.15);
  return (
    <section id="about" className="py-24 md:py-36">
      <div ref={ref} className={`wrap reveal ${isVisible ? "visible" : ""}`}>
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start pt-8 border-t border-[var(--line)]">
          <h2 className="f-display text-[clamp(44px,6.5vw,104px)] leading-[0.95]">
            A designer who <em className="f-serif text-muted">thinks in systems,</em> ships in pixels.
          </h2>
          <div className="max-w-[460px] space-y-6 text-[17px] leading-relaxed md:pt-4">
            <p className="text-cream">
              I&apos;m {site.shortName} — a UI/UX designer obsessed with the kind of craft that disappears.
              Interfaces that feel obvious in hindsight, but took a hundred iterations to earn that obviousness.
            </p>
            <p className="text-muted">
              I design dashboards, SaaS platforms and business websites. My process runs from research and
              wireframes to prototypes and testing, so what ships is clear, structured and easy to use.
            </p>
            <p className="text-muted">Currently available for select freelance and full-time opportunities.</p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 border-y border-[var(--line)]">
          {site.stats.map((s, i) => (
            <div key={s.label} className={`p-8 ${i > 0 ? "md:border-l border-[var(--line)]" : ""} ${i % 2 ? "border-l md:border-l" : ""} border-[var(--line)]`}>
              <div className="f-display text-[clamp(44px,5vw,72px)] leading-none text-accent">
                <span className="text-cream">{s.value}</span>
                {s.suffix}
              </div>
              <div className="mt-4 text-xs tracking-[0.15em] uppercase text-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
