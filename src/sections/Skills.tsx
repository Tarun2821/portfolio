import { site } from "@/data/site";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-[var(--line)] py-24 md:py-32 overflow-hidden">
      <div className="wrap">
        <p className="eyebrow mb-8">
          <span className="w-2 h-2 rotate-45 bg-accent" />
          Tools &amp; skills
        </p>
        <h2 className="f-display text-[clamp(40px,6vw,96px)] leading-[0.98] mb-16">
          The stack I <em className="f-serif text-muted">reach for</em> every day.
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        {site.skills.map((row, r) => {
          const list = [...row, ...row, ...row, ...row];
          return (
            <div key={r} className="overflow-hidden">
              <div className={`pills ${r % 2 ? "b" : "a"}`}>
                {list.map((s, i) => (
                  <span key={i} className={`pill ${i % 3 === 1 ? "on" : "dotacc"}`}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
