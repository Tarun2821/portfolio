import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/portfolio";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.title} — Tarun Kumar Biswas`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const otherProjects = projects.filter((p) => p.slug !== params.slug);

  return (
    <main className="bg-ink min-h-screen text-cream">

      {/* ── Back link ── */}
      <div className="px-10 pt-8">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 font-condensed font-bold text-xs tracking-[0.2em] text-muted hover:text-cream transition-colors"
        >
          ← BACK TO WORK
        </Link>
      </div>

      {/* ────────────────────────────────────────
          HERO — full-width cover image
      ──────────────────────────────────────── */}
      <div className="relative w-full mt-8 overflow-hidden" style={{ height: "62vh" }}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
        {/* Bottom-fade so title blends into dark bg */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, #141412 0%, rgba(20,20,18,0.3) 50%, transparent 100%)",
          }}
        />
        {/* Category tags */}
        <div className="absolute bottom-8 left-10 flex gap-3 flex-wrap">
          {project.category.map((cat) => (
            <span
              key={cat}
              className="font-body text-xs tracking-[0.12em] text-cream border border-cream/40 rounded-full px-4 py-1 backdrop-blur-sm bg-black/20"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      {/* ────────────────────────────────────────
          TITLE BLOCK
      ──────────────────────────────────────── */}
      <div className="px-10 pt-8 pb-8 border-b border-[#1e1e1c]">
        <div className="flex justify-between items-start gap-8 flex-wrap">
          <h1
            className="font-condensed font-black text-cream leading-[0.88] tracking-[-0.02em] uppercase"
            style={{ fontSize: "clamp(2.8rem, 8vw, 7.5rem)" }}
          >
            {project.title}
          </h1>
          <div className="flex flex-col items-end gap-1 pt-2 shrink-0">
            <span className="font-condensed font-bold text-[0.7rem] tracking-[0.2em] text-dim">
              YEAR
            </span>
            <span className="font-condensed font-black text-2xl text-cream">
              {project.year}
            </span>
          </div>
        </div>
        <p className="font-body text-base text-muted leading-relaxed mt-4 max-w-2xl">
          {project.description}
        </p>
      </div>

      {/* ────────────────────────────────────────
          MAIN BODY — 2-col on large screens
      ──────────────────────────────────────── */}
      <div className="px-10 py-14 grid grid-cols-1 lg:grid-cols-3 gap-14">

        {/* ── Left column: long-form content ── */}
        <div className="lg:col-span-2 flex flex-col gap-14">

          {/* 01 Overview */}
          <CaseSection label="01. PROJECT OVERVIEW" accent={project.accentColor}>
            <p className="font-body text-[0.95rem] text-muted leading-[1.85]">
              {project.overview}
            </p>
          </CaseSection>

          {/* Objectives list */}
          <CaseSection label="OBJECTIVES" accent={project.accentColor}>
            <ul className="flex flex-col gap-3">
              {project.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="font-condensed font-black text-xs mt-[4px] shrink-0"
                    style={{ color: project.accentColor }}
                  >
                    —
                  </span>
                  <span className="font-body text-[0.92rem] text-muted leading-[1.7]">
                    {obj}
                  </span>
                </li>
              ))}
            </ul>
          </CaseSection>

          {/* 02 Problem */}
          <CaseSection label="02. PROBLEM STATEMENT" accent={project.accentColor}>
            <p className="font-body text-[0.95rem] text-muted leading-[1.85]">
              {project.problem}
            </p>
          </CaseSection>

          {/* ── EXTRA IMAGE SLOT A ──────────────────
              Drop 1st extra screenshot in /public and
              add its path to images[0] in portfolio.ts.
              This block auto-hides when images[0] is empty.
          ─────────────────────────────────────── */}
          {project.images[0] && (
            <div className="relative w-full overflow-hidden rounded-lg" style={{ height: 340 }}>
              <Image
                src={project.images[0]}
                alt={`${project.title} — screen 1`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
            </div>
          )}

          {/* 03 Solution */}
          <CaseSection label="03. SOLUTION" accent={project.accentColor}>
            <p className="font-body text-[0.95rem] text-muted leading-[1.85]">
              {project.solution}
            </p>
          </CaseSection>

          {/* 05 Design Approach */}
          <CaseSection label="05. DESIGN APPROACH" accent={project.accentColor}>
            <p className="font-body text-[0.95rem] text-muted leading-[1.85]">
              {project.approach}
            </p>
          </CaseSection>

          {/* ── EXTRA IMAGE SLOT B ──────────────────
              Drop 2nd extra screenshot in /public and
              add its path to images[1] in portfolio.ts.
          ─────────────────────────────────────── */}
          {project.images[1] && (
            <div className="relative w-full overflow-hidden rounded-lg" style={{ height: 340 }}>
              <Image
                src={project.images[1]}
                alt={`${project.title} — screen 2`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
            </div>
          )}

          {/* 06 Outcome (optional) */}
          {project.outcome && (
            <CaseSection label="06. OUTCOME" accent={project.accentColor}>
              <p className="font-body text-[0.95rem] text-muted leading-[1.85]">
                {project.outcome}
              </p>
            </CaseSection>
          )}
        </div>

        {/* ── Right column: Key Features sticky card ── */}
        <div className="lg:col-span-1">
          <div
            className="sticky top-10 rounded-xl p-8"
            style={{ background: project.bgColor }}
          >
            <p
              className="font-condensed font-bold text-[0.72rem] tracking-[0.2em] mb-6"
              style={{ color: project.accentColor }}
            >
              04. KEY FEATURES
            </p>
            <ul className="flex flex-col gap-5">
              {project.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="font-condensed font-black text-sm mt-[2px] shrink-0"
                    style={{ color: project.accentColor }}
                  >
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  <span className="font-body text-[0.88rem] text-cream/80 leading-[1.65]">
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ────────────────────────────────────────
          MOCKUP IMAGES
          Phone PNGs (transparent bg) displayed
          side-by-side. Tablet shown full-width.
      ──────────────────────────────────────── */}
      {project.mockups.length > 0 && (
        <div className="px-10 pb-20">
          <div className="border-t border-[#1e1e1c] pt-10 mb-8">
            <p className="font-condensed font-bold text-[0.72rem] tracking-[0.2em] text-dim">
              SCREENS &amp; MOCKUPS
            </p>
          </div>

          {project.mockups.length === 1 ? (
            /* Single wide mockup (tablet) */
            <div
              className="relative mx-auto"
              style={{ maxWidth: 860, aspectRatio: "16/10" }}
            >
              <Image
                src={project.mockups[0]}
                alt={`${project.title} mockup`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 860px"
              />
            </div>
          ) : (
            /* Multiple phone mockups side-by-side */
            <div className="flex items-end justify-center gap-6 flex-wrap">
              {project.mockups.map((src, i) => (
                <div
                  key={i}
                  className="relative"
                  style={{ width: 220, aspectRatio: "9/19.5" }}
                >
                  <Image
                    src={src}
                    alt={`${project.title} screen ${i + 1}`}
                    fill
                    className="object-contain"
                    sizes="220px"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ────────────────────────────────────────
          MORE PROJECTS
      ──────────────────────────────────────── */}
      <div className="border-t border-[#1e1e1c] px-10 pt-14 pb-24">
        <p className="font-condensed font-bold text-[0.72rem] tracking-[0.2em] text-dim mb-10">
          MORE PROJECTS
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {otherProjects.map((op) => (
            <Link
              key={op.slug}
              href={`/work/${op.slug}`}
              className="group block rounded-xl overflow-hidden border border-[#1e1e1c] hover:border-[#333] transition-colors duration-300"
            >
              <div className="relative w-full" style={{ height: 190 }}>
                <Image
                  src={op.image}
                  alt={op.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 60%)",
                  }}
                />
                <h3 className="absolute bottom-4 left-5 font-condensed font-black text-cream text-3xl leading-none tracking-[-0.02em] uppercase">
                  {op.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </main>
  );
}

/* ── Reusable labelled section ── */
function CaseSection({
  label,
  accent,
  children,
}: {
  label: string;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p
        className="font-condensed font-bold text-[0.72rem] tracking-[0.2em] mb-5"
        style={{ color: accent }}
      >
        {label}
      </p>
      {children}
    </div>
  );
}
