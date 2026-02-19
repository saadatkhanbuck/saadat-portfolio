"use client";

import React from "react";
import {
  CodeIcon,
  BarChartIcon,
  LayersIcon,
  TerminalIcon,
  CloudIcon,
  DatabaseIcon,
  BoxIcon,
  WrenchIcon,
  SparklesIcon,
} from "lucide-react";

import {
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiDotnet,
  SiSharp,
  SiPostgresql,
  SiMui,
  SiNextdotjs,
  SiJquery,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";

import { InfiniteSkillsCards } from "@/components/ui/infinitemovingcard";
import SkillsHero from "../components/skillshero";
import OurServices from "../components/ourservice";

/* ------------------ DATA ------------------ */

const skills = [
  { name: "React.js", icon: FaReact, category: "Frontend Framework" },
  { name: "Next.js", icon: SiNextdotjs, category: "React Framework" },
  { name: "JavaScript (ES6+)", icon: FaJs, category: "Programming Language" },
  { name: "TypeScript", icon: CodeIcon, category: "Typed JavaScript" },

  { name: "HTML5", icon: FaHtml5, category: "Markup Language" },
  { name: "CSS3", icon: FaCss3Alt, category: "Styling" },
  { name: "Tailwind CSS", icon: SiMui, category: "Utility-first CSS" },
  { name: "Bootstrap", icon: FaBootstrap, category: "UI Framework" },

  { name: "Responsive UI / UX", icon: LayersIcon, category: "Design" },

  {
    name: "State Management",
    icon: DatabaseIcon,
    category: "App Architecture",
  },
  { name: "Context API", icon: DatabaseIcon, category: "React State" },
  { name: "Redux Basics", icon: DatabaseIcon, category: "State Management" },

  { name: "Reusable Components", icon: BoxIcon, category: "Component Design" },
  {
    name: "Component Optimization",
    icon: SparklesIcon,
    category: "Performance",
  },

  { name: "API Integration", icon: CloudIcon, category: "Frontend + Backend" },
  { name: "REST APIs", icon: CloudIcon, category: "Networking" },
];

const tools = [
  { icon: <BoxIcon />, label: "Git" },
  { icon: <BoxIcon />, label: "GitHub" },
  { icon: <TerminalIcon />, label: "VS Code" },

  { icon: <CodeIcon />, label: "REST APIs" },
  { icon: <DatabaseIcon />, label: "JSON" },

  { icon: <SparklesIcon />, label: "Performance Optimization" },
  { icon: <WrenchIcon />, label: "API Integration" },

  { icon: <LayersIcon />, label: "UI Debugging" },
  { icon: <WrenchIcon />, label: "Bug Fixing" },

  { icon: <CloudIcon />, label: "Deployment (Vercel)" },
  { icon: <CloudIcon />, label: "Environment Variables" },
];

/* ------------------ COMPONENT ------------------ */

export default function SkillsDemo() {
  return (
    <div>
      <SkillsHero/>
    <section id="skills" className="relative overflow-hidden py-16">
      <div className="max-w-8xl mx-auto px-4 space-y-8">
        {/* ===== CORE SKILLS HEADER ===== */}
        <SectionHeader
          icon={<SparklesIcon className="w-6 h-6" />}
          title="Core Skills"
        />

        {/* ===== SKILLS CARDS ===== */}
        <div className="flex items-center justify-center overflow-hidden">
          <InfiniteSkillsCards skills={skills} direction="right" speed="slow" />
        </div>

        {/* ===== TOOLS HEADER ===== */}
        <SectionHeader
          icon={<WrenchIcon className="w-6 h-6" />}
          title="Tools & Reporting"
        />

        {/* ===== TOOLS MARQUEE (LEFT → RIGHT → LEFT) ===== */}
        <div className="space-y-2">
          <Marquee direction="left" />
          <Marquee direction="right" />
          {/* <Marquee direction="left" /> */}
        </div>
      </div>
    </section>
    <OurServices/>
    </div>
  );
}

/* ------------------ HEADER ------------------ */

function SectionHeader({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center justify-center gap-3">
      <span className="text-primary w-6 h-6">{icon}</span>
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
        {title}
      </h2>
      <div className="h-0.5 w-30 mt-3 bg-gradient-to-r from-primary/70 via-primary/30 to-primary/10 rounded-full" />
    </div>
  );
}

/* ------------------ MARQUEE ------------------ */

function Marquee({ direction }: { direction: "left" | "right" }) {
  return (
    <div
      className={`whitespace-nowrap ${
        direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
      }`}
    >
      <div className="flex gap-4 w-fit">
        {[...tools, ...tools].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-5 py-4 bg-card rounded-xl shadow-sm min-w-[200px]"
          >
            <span className="text-foreground dark:text-blue-400">
              {item.icon}
            </span>
            <span className="text-foreground font-medium text-sm">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
