"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { processSteps } from "@/data/portfolio";
import { useState } from "react";
import { ProcessStep } from "@/types";

export default function About() {
  const { ref: aboutRef, isVisible: aboutVisible } = useScrollReveal(0.1);
  const { ref: processRef, isVisible: processVisible } = useScrollReveal(0.1);
  const [hovered, setHovered] = useState(false);

  function getOffset(i: number) {
    if (i === 0) return "0%";
    if (i === 1) return "8%";
    if (i === 2) return "16%";
    if (i === 3) return "8%";
    if (i === 4) return "0%";
    return "0%";
  }

  function getWidth(i: number) {
    if (i === 0 || i === 4) return "100%";
    if (i === 1 || i === 3) return "92%";
    if (i === 2) return "84%";
    return "100%";
  }

  return (
    <section id="about" className="bg-ink max-w-[1400px] mx-auto">

      {/* ══════════════════════════════════════════
          HERO — photo behind text, image overlaps
      ══════════════════════════════════════════ */}
      <div className="relative px-10 md:px-16 pt-24 pb-10 overflow-hidden min-h-[85vh] flex flex-col justify-center">

        {/* Photo — centred, sits behind text via z-index */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[52%] z-0"
          style={{ width: "clamp(280px, 32vw, 480px)", aspectRatio: "3/4" }}
        >
          {/* Replace /tarun-photo.png with your actual photo in /public */}
          <Image
            src="/tarun-photo.jpeg"
            alt="Tarun Kumar Biswas"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 280px, 32vw"
            priority
          />
        </div>

        {/* Text layer — in front of photo */}
        <div className="relative z-10 flex flex-col gap-0">
          {/* Line 1 */}
          <h1
            className="hero-line font-condensed font-black text-cream leading-[0.88] tracking-[-0.02em] uppercase"
            style={{ fontSize: "clamp(4rem, 13vw, 12.5rem)" }}
          >
            I&apos;M TARUN
          </h1>
          {/* Line 2 */}
          <h1
            className="hero-line font-condensed font-black text-cream leading-[0.88] tracking-[-0.02em] uppercase"
            style={{
              fontSize: "clamp(4rem, 13vw, 12.5rem)",
              animationDelay: "0.15s",
            }}
          >
            KUMAR BISWAS
          </h1>
        </div>

        {/* Bottom two blurbs */}
        <div className="relative z-10 flex justify-between items-start mt-10 gap-10 flex-wrap">
          <p className="font-body text-sm text-muted leading-relaxed max-w-[32ch]">
            UI/UX designer focused on building intuitive
            dashboards, SaaS products, and business
            websites.
          </p>
          <p className="font-body text-sm text-muted leading-relaxed max-w-[30ch] text-right">
            Transforming complex ideas into simple and
            impactful digital experiences.
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          A LITTLE BIT ABOUT ME
      ══════════════════════════════════════════ */}
      <div
        ref={aboutRef}
        className={`reveal ${aboutVisible ? "visible" : ""} px-10 md:px-16 py-16 border-t border-[#1e1e1c]`}
      >
        <h2
          className="font-condensed font-black text-cream leading-none tracking-[-0.02em] uppercase mb-8"
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
        >
          A LITTLE BIT ABOUT ME
        </h2>
        <p className="font-body text-[0.95rem] text-muted leading-[1.85] max-w-[60ch]">
          I&apos;m Tarun, a UI/UX designer focused on creating intuitive and user-friendly
          digital products. I enjoy solving complex problems by turning ideas into simple
          and effective design solutions. My work mainly focuses on dashboards, SaaS
          platforms, and modern web interfaces, where usability and clarity are critical. I
          follow a structured design process that includes research, wireframing,
          prototyping, and iterative testing to ensure the final product delivers a smooth
          user experience. I have worked on projects such as lead management
          dashboards and business websites, where my goal was to simplify complex
          workflows and improve how users interact with digital products.
        </p>
      </div>

      {/* ══════════════════════════════════════════
          MY DESIGN PROCESS — heading
      ══════════════════════════════════════════ */}
      <div
        ref={processRef}
        className={`reveal-left ${processVisible ? "visible" : ""} px-10 md:px-16 pt-16 pb-10 border-t border-[#1e1e1c]`}
      >
        <h2
          className="font-condensed font-black text-cream leading-[0.88] tracking-[-0.02em] uppercase"
          style={{ fontSize: "clamp(4rem, 11vw, 10rem)" }}
        >
          <span className="block">MY</span>
          <span className="block">DESIGN PROCESS</span>
        </h2>
        <p className="font-body text-sm text-muted leading-relaxed mt-4 max-w-[36ch]">
          Each project is different, but the process is pretty much the same
          each time. Here is how I tackle each new client work.
        </p>
      </div>

      {/* ══════════════════════════════════════════
          PROCESS CARDS — stairs layout
          Cards 1-2-3: each steps right (staircase down-right)
          Cards 4-5:   mirror back left (staircase down-left)
      ══════════════════════════════════════════ */}
      <div className="px-10 md:px-16 pb-24 flex flex-col gap-5 overflow-hidden">
        {processSteps.map((step, index) => (
          <ProcessCard key={step.number} step={step} index={index} />
        ))}
      </div>

    </section>
  );
}

function ProcessCard({ step, index }: { step: ProcessStep; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.2);
  const [hovered, setHovered] = useState(false);

  const getOffset = (i: number): string => {
    if (i === 0) return "0%";
    if (i === 1) return "8%";
    if (i === 2) return "16%";
    if (i === 3) return "8%";
    if (i === 4) return "0%";
    return "0%";
  };

  const getWidth = (i: number): string => {
    if (i === 0 || i === 4) return "100%";
    if (i === 1 || i === 3) return "92%";
    if (i === 2) return "84%";
    return "100%";
  };

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "visible" : ""} rounded-[5px] cursor-pointer`}
      style={{
        marginLeft: getOffset(index),   // ✅ from card 1
        width: getWidth(index),          // ✅ from card 1
        transitionDelay: `${index * 0.06}s`,
        background: hovered ? (step.bgColor ?? "#2a2a22") : "#1a1a18",
        border: "1px solid #2a2a28",
        padding: hovered ? "3rem" : "2rem 3rem",
        minHeight: hovered ? "320px" : "160px",
        transition: "background 0.5s, padding 0.5s, min-height 0.5s",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8">
        <div className="flex-1">
          <span className="font-condensed font-bold text-base tracking-[0.1em] text-cream/50 block mb-2">
            {step.number}
          </span>
          <h3
            className="font-condensed font-black text-cream leading-[0.9] tracking-[-0.02em] uppercase mb-5"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
          >
            {step.title}
          </h3>

          {/* Description — reveals on hover */}
          <div
            className="overflow-hidden transition-all duration-500"
            style={{ maxHeight: hovered ? "200px" : "0px", opacity: hovered ? 1 : 0 }}
          >
            <p className="font-body text-[0.9rem] text-cream/75 leading-[1.75] max-w-[500px]">
              {step.description}
            </p>
          </div>
        </div>

        {/* Tags — fade + slide on hover */}
        <div
          className="flex flex-col items-start md:items-end gap-[6px] shrink-0 transition-all duration-500"
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(8px)",
          }}
        >
          {step.tags.map((tag) => (
            <span key={tag} className="font-condensed font-bold text-[0.78rem] tracking-[0.15em] text-cream/65">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}