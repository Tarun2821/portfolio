import { site } from "@/data/site";

export default function Hero() {
  const h = site.hero;
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-44 pb-20">
      <div
        aria-hidden
        className="absolute -z-0 pointer-events-none rounded-full"
        style={{
          width: 700, height: 700, top: "-10%", right: "-15%", filter: "blur(60px)",
          background: "radial-gradient(circle, rgba(212,255,0,0.16), transparent 60%)",
        }}
      />
      <div className="wrap relative z-10 w-full">
        <div className="eyebrow mb-10">
          <span className="w-2 h-2 rounded-sm bg-accent" />
          {site.role} · Based in {site.location}
        </div>

        <h1 className="hero-h1 f-display">
          <span className="split"><span>{h.line1}</span></span>
          <span className="split">
            <span>
              <em className="f-serif text-accent pr-[0.12em]" style={{ fontSize: "1.05em" }}>{h.italic}</em>
              {h.line2}
            </span>
          </span>
          <span className="split">
            <span>
              {h.line3} <span className="outline">{h.outline}</span>
            </span>
          </span>
        </h1>

        <dl className="fade-up mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-[var(--line)]">
          {site.meta.map((m) => (
            <div key={m.label}>
              <dt className="text-[11px] tracking-[0.15em] uppercase text-muted font-medium mb-2">{m.label}</dt>
              <dd className="text-base font-medium flex items-center gap-2">
                {m.live && <span className="w-2 h-2 rounded-full bg-accent" />}
                {m.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="fade-up absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-muted" style={{ animationDelay: "1.2s" }}>
        Scroll
        <span className="scroll-line" />
      </div>
    </section>
  );
}
