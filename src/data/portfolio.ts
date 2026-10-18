import type { Project, ProcessStep, NavLink } from "@/types/index";

export const navLinks: NavLink[] = [
  { label: "HOME", href: "/" },
  { label: "WORKS", href: "#work" },
  { label: "INFO", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

export const projects: Project[] = [
  // ─────────────────────────────────────────────
  // PROJECT 1 — Art & Craft Exclusives
  // ─────────────────────────────────────────────
  {
    id: 1,
    title: "ART & CRAFT EXCLUSIVES",
    category: ["Web Design", "Case Study"],
    year: "2026",
    description:
      "A professional website for a Jaipur-based garment manufacturer to establish digital presence, showcase manufacturing capabilities, and connect with global B2B clients.",
    bgColor: "#1a1814",
    accentColor: "#c8a87a",
    slug: "art-craft-exclusives",

    // ── Images ──────────────────────────────────
    // Drop your cover screenshot in /public as project-1.png
    image: "/project-1.png",

    // Up to 2 extra screenshots shown in the case study body.
    // Add them to /public and list them here.
    // e.g. ["/art-craft-about.png", "/art-craft-products.png"]
    images: ["/Frsn.png", "/artncraft2.png"],

    // iPhone / tablet mockups (transparent PNG).
    // Already added: iphone-1.png, iphone-2.png, iphone-3.png
    mockups: ["/iphone-3.png", "/iphone-2.png", "/iphone-1.png"],

    // ── Content ─────────────────────────────────
    overview:
      "Art & Craft Exclusives is a Jaipur-based garment manufacturing and export company specializing in end-to-end apparel production. The objective of this project was to design a professional website that effectively communicates the brand's capabilities, showcases its product range, and builds trust with global clients.",

    objectives: [
      "Establish a strong digital presence",
      "Showcase manufacturing capabilities and services",
      "Improve communication with international buyers",
      "Present products and processes in a structured manner",
    ],

    problem:
      "The client lacked a well-structured online presence to represent their manufacturing expertise and service offerings. Key information about their process, infrastructure, and product categories was not clearly organized, making it difficult for potential clients to understand their capabilities.",

    solution:
      "A clean and structured website was designed to highlight the company's strengths, including its manufacturing process, infrastructure, and product categories. The design focuses on clarity, easy navigation, and professional presentation to ensure a seamless user experience for B2B clients.",

    features: [
      "Clear presentation of end-to-end manufacturing services",
      "Dedicated sections for infrastructure and capabilities",
      "Organized product categories (Men, Women, Kids, Textiles)",
      "Strong visual hierarchy for better content readability",
      "Contact and inquiry integration for business communication",
      "Responsive design for all screen sizes",
    ],

    approach:
      "The design follows a minimal and professional approach, ensuring that content remains the primary focus. A structured layout with clear sections allows users to quickly understand the company's offerings. Typography and spacing were carefully used to maintain readability and visual balance.",
  },

  // ─────────────────────────────────────────────
  // PROJECT 2 — Lead Management System
  // ─────────────────────────────────────────────
  {
    id: 2,
    title: "LEAD MANAGEMENT",
    category: ["Product Design", "Dashboard"],
    year: "2026",
    description:
      "A centralized dashboard to capture, organize, and track leads across the sales pipeline — reducing response time and improving team visibility into deal progress.",
    bgColor: "#0f1820",
    accentColor: "#4a9ebb",
    slug: "lead-management",

    image: "/project-2.png",

    // Add your 1–2 extra screenshots here after placing them in /public
    // e.g. ["/lead-pipeline.png", "/lead-detail.png"]
    images: ["/lead1.png", "/lead2.jpeg"],

    // The tablet mockup (Rectangle.png → rectangle.png)
    mockups: ["/rectangle.png"],

    overview:
      "A lead management system designed to help businesses efficiently capture, organize, and track leads across the sales pipeline. The goal was to simplify lead handling and improve visibility for faster and more structured decision-making.",

    objectives: [
      "Centralize scattered lead data into one interface",
      "Provide clear pipeline visibility across stages",
      "Enable ownership tracking and follow-up management",
      "Reduce response time with quick-access dashboards",
    ],

    problem:
      "Lead data was scattered across different sources, leading to poor tracking, delayed follow-ups, and lack of clarity in the sales process. Teams struggled to manage lead status and prioritize actions effectively.",

    solution:
      "Designed a centralized dashboard that organizes leads into a clear pipeline, enabling users to track progress, assign ownership, and manage follow-ups within a single interface.",

    features: [
      "Centralized lead database",
      "Visual pipeline (New → Contacted → Qualified → Converted)",
      "Lead assignment and ownership tracking",
      "Follow-up reminders and activity tracking",
      "Search, filter, and sorting options",
      "Dashboard with key performance metrics",
    ],

    approach:
      "The design focuses on clarity and usability. A dashboard-first layout ensures quick access to important data, while clear hierarchy and structured sections reduce user effort. Visual cues like status indicators help users quickly understand lead progress.",

    outcome:
      "The system improves lead organization, reduces response time, and provides better visibility into the sales pipeline, helping teams manage leads more efficiently.",
  },

  // ─────────────────────────────────────────────
  // PROJECT 3 — Task Management System
  // ─────────────────────────────────────────────
  {
    id: 3,
    title: "TASK MANAGEMENT",
    category: ["Mobile Design", "Productivity"],
    year: "2025",
    description:
      "A productivity dashboard for individuals and teams to organize, track, and manage daily tasks — built to reduce complexity and keep work moving forward.",
    bgColor: "#141020",
    accentColor: "#7a6fb5",
    slug: "task-management",

    image: "/taskpro-dashboard.png",

    // Add 1–2 extra screenshots after placing them in /public
    // e.g. ["/task-board.png", "/task-detail.png"]
    images: ["/taskpro-kanban.png", "/taskpro-detail.png"],

    wideMockups: true,
    mockups: [
      "/taskpro-dashboard.png",
      "/taskpro-calendar.png",
      "/taskpro-detail.png",
      "/taskpro-kanban.png",
    ],

    overview:
      "A task management system designed to help individuals and teams organize, track, and manage their daily tasks efficiently. The goal was to create a clear and structured interface that improves productivity and reduces task management complexity.",

    objectives: [
      "Help users organize scattered tasks in one place",
      "Provide clear priority and deadline visibility",
      "Enable team collaboration through task assignment",
      "Reduce cognitive load with clean, structured UI",
    ],

    problem:
      "Users often struggle with scattered tasks, unclear priorities, and lack of visibility into progress. This leads to missed deadlines, inefficient planning, and reduced productivity.",

    solution:
      "Designed a centralized platform that allows users to create, organize, and track tasks within a structured workflow. The system provides clear visibility of task status, priorities, and deadlines, enabling better planning and execution.",

    features: [
      "Task creation and categorization",
      "Status tracking (To Do → In Progress → Completed)",
      "Priority levels and due dates",
      "Task assignment for teams",
      "Search and filter options",
      "Dashboard overview of tasks and progress",
    ],

    approach:
      "The design focuses on simplicity and usability. A clean layout with clear hierarchy ensures that users can quickly understand their tasks and take action. Visual indicators such as status labels and priority markers help improve task visibility and reduce cognitive load.",

    outcome:
      "The system improves task organization, enhances productivity, and enables users to manage their work more effectively with clear tracking and prioritization.",
  },
  // ─────────────────────────────────────────────
  // PROJECT 4 — Multi Engineer Service
  // ─────────────────────────────────────────────
  {
    id: 4,
    title: "MULTI ENGINEER SERVICE",
    category: ["Mobile Design", "Field Service App"],
    year: "2026",
    description:
      "A mobile app for field technicians to manage complaints, AMC visits, installations, stock, expenses and vehicles from one place, on the go.",
    bgColor: "#0b1a33",
    accentColor: "#4f8dff",
    slug: "multi-engineer-service",

    image: "/multicare-banner.png",
    images: ["/multicare-banner.png", "/multicare-4.png"],
    mockups: [
      "/multicare-1.png",
      "/multicare-2.png",
      "/multicare-4.png",
      "/multicare-5.png",
      "/multicare-6.png",
      "/multicare-3.png",
    ],

    overview:
      "Multi Engineer Service is a field service system for technicians who spend their day on site. The app brings complaints, AMC and installation tracking, stock, expenses and vehicle records into a single mobile experience, so work can be updated on the go instead of at the end of the day.",

    objectives: [
      "Give technicians one app for all daily field work",
      "Make open and completed complaints visible at a glance",
      "Simplify stock requests, transfers and delivery tracking",
      "Let technicians upload photos, reports and expenses instantly",
    ],

    problem:
      "Field work was spread across calls, paper and separate tools. Technicians had no single place to see their complaints, installations, stock and expenses, which made updates slow and status hard to follow.",

    solution:
      "A mobile-first app with a home dashboard that summarises open complaints, completed complaints and expenses, and quick access to stock management and feature modules. Short onboarding screens explain AMC and installation tracking and photo and expense uploads before the first use.",

    features: [
      "Today's overview with open complaints, completed complaints and expenses",
      "Complaint list with search, filters, priority and status tags",
      "Stock list, stock transfer and stock request flows",
      "Assigned transfer tracking with delivery status",
      "AMC, installation, fire extinguisher, CRT and vehicle modules",
      "Technician profile with contact and work information",
    ],

    approach:
      "The design uses a clean card-based layout with a persistent bottom navigation for Complaint, Installation, Home, Expense and Profile. Colour-coded summary cards and status chips make progress readable in a glance, and large touch targets suit use on site.",

    outcome:
      "Technicians get a single, clear place to handle complaints, stock and expenses, which makes field updates faster and gives teams better visibility into work in progress.",
  },
];

// ─────────────────────────────────────────────
// PROCESS STEPS (unchanged)
// ─────────────────────────────────────────────
export const processSteps: ProcessStep[] = [
  {
    number: "01.",
    title: "DEFINE",
    description:
      "I analyze project requirements deeply to understand what the design truly needs — not just what the client asks for. Clear problem framing saves weeks of rework.",
    tags: ["INTERVIEWS", "COMPETITOR ANALYSIS", "MARKET RESEARCH"],
    bgColor: "#3d8b6b",
    offsetPercent: 0,
  },
  {
    number: "02.",
    title: "IDEATE",
    description:
      "Once the problem is crystal clear, I explore multiple creative directions through rapid sketching, mood boarding and concept exploration.",
    tags: ["WIREFRAMES", "MOOD BOARDS", "CONCEPT SKETCHES"],
    bgColor: "#3a7d90",
    offsetPercent: 5,
  },
  {
    number: "03.",
    title: "PROTOTYPE",
    description:
      "I build interactive prototypes to visualize how the product will function and allow early feedback loops before a single line of code is written.",
    tags: ["FIGMA", "INTERACTIVE FLOWS", "MICRO-INTERACTIONS"],
    bgColor: "#9e5c2a",
    offsetPercent: 10,
  },
  {
    number: "04.",
    title: "TEST",
    description:
      "The prototype is tested with real users. Feedback from this phase is the most valuable data in the whole design process.",
    tags: ["USER TESTING", "HEATMAPS", "FEEDBACK LOOPS"],
    bgColor: "#7a4a8a",
    offsetPercent: 15,
  },
  {
    number: "05.",
    title: "ITERATE",
    description:
      "Based on insights gathered from testing, the design is refined and improved. Iteration ensures the final product is truly ready for the world.",
    tags: ["REFINEMENT", "QA", "DEV HANDOFF"],
    bgColor: "#3a9bfb",
    offsetPercent: 20,
  },
];
