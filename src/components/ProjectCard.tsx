"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { Project } from "@/types/index";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.2);
  const n = String(index + 1).padStart(2, "0");
  const words = project.title.toLowerCase().split(" ");
  const head = words.slice(0, -1).join(" ");
  const tail = words.slice(-1)[0];

  return (
    <article
      ref={ref}
      className={`reveal ${isVisible ? "visible" : ""} grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center`}
    >
      <Link
        href={`/work/${project.slug}`}
        aria-label={`View ${project.title} case study`}
        className={`relative block overflow-hidden rounded-[28px] border border-[var(--line)] h-[320px] md:h-[480px] ${index % 2 ? "lg:order-2" : ""}`}
        style={{ background: `radial-gradient(circle at 30% 20%, ${project.bgColor}, #070707 75%)` }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-contain object-center p-8 transition-transform duration-700 hover:scale-[1.04]"
          sizes="(max-width: 1024px) 100vw, 55vw"
        />
      </Link>

      <div>
        <div className="flex items-center gap-4 text-xs tracking-[0.15em] uppercase text-muted mb-6">
          <span className="text-accent font-semibold">{n}</span>
          <span>{project.category.join(" · ")}</span>
          <span>{project.year}</span>
        </div>
        <h3 className="f-display text-[clamp(38px,4.6vw,72px)] leading-[0.98]">
          <span className="capitalize">{head}</span>{" "}
          <em className="f-serif text-accent capitalize">{tail}</em>
        </h3>
        <p className="mt-6 max-w-[480px] text-muted text-base leading-relaxed">{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.category.map((c) => (
            <span key={c} className="px-4 py-2 rounded-full border border-[var(--line)] text-xs text-muted">
              {c}
            </span>
          ))}
        </div>
        <Link
          href={`/work/${project.slug}`}
          className="mt-10 inline-flex items-center gap-4 pl-7 pr-2 py-2 rounded-full border border-[var(--line)] font-medium transition-colors duration-300 hover:border-accent"
        >
          View case study
          <span className="grid place-items-center w-10 h-10 rounded-full bg-accent text-black">→</span>
        </Link>
      </div>
    </article>
  );
}
