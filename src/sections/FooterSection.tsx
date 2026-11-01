import { site } from "@/data/site";

export default function FooterSection() {
  return (
    <footer className="wrap pt-10 pb-10 flex flex-col sm:flex-row justify-between gap-4 text-xs tracking-[0.12em] uppercase text-muted">
      <span>© {new Date().getFullYear()} {site.name} · Designed in Figma</span>
      <span className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#52d18a" }} />
        Local time · IST
      </span>
    </footer>
  );
}
