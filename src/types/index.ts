export interface Project {
  id: number;
  title: string;
  category: string[];
  year: string;
  description: string;
  bgColor: string;
  accentColor: string;
  slug: string;
  image: string;           // main cover image (used in card hover + case study hero)
  images: string[];        // 1–2 extra images shown inside the case study body
  mockups: string[];       // phone / tablet mockup PNGs (transparent bg)
  overview: string;
  objectives: string[];
  problem: string;
  solution: string;
  features: string[];
  approach: string;
  outcome?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  bgColor: string;
  tags: string[];
  offsetPercent: number; // ← add this
}

export interface NavLink {
  label: string;
  href: string;
}
