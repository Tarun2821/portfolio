import { site } from "@/data/site";

function Star() {
  return (
    <svg width="64" height="64" viewBox="0 0 24 24" aria-hidden className="mx-10 shrink-0">
      <path d="M12 0c.6 6.6 5.4 11.4 12 12-6.6.6-11.4 5.4-12 12-.6-6.6-5.4-11.4-12-12C6.6 11.4 11.4 6.6 12 0z" fill="#fafafa" />
    </svg>
  );
}

export default function Marquee() {
  const items = site.marquee;
  const track = (hidden?: boolean) => (
    <div className="track" aria-hidden={hidden}>
      {items.map((w, i) => (
        <span key={w} className="inline-flex items-center">
          <span className={`word ${i % 2 === 0 ? "out" : ""}`}>{w}</span>
          <Star />
        </span>
      ))}
    </div>
  );
  return (
    <div className="marquee">
      {track()}
      {track(true)}
    </div>
  );
}
