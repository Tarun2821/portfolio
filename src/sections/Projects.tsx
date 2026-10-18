import { projects } from "@/data/portfolio";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section id="work" className="border-t border-[var(--line)] py-24 md:py-32">
      <div className="wrap">
        <h2 className="f-display text-[clamp(44px,7vw,112px)] leading-[0.95] mb-20">
          Selected <em className="f-serif text-muted">work.</em>
        </h2>
        <div className="flex flex-col gap-24 md:gap-32">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
