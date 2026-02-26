"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  shortTitle: string;
  title: string;
  role: string;
  duration: string;
  description: string;
  tech: string[];
  highlights: string[];
}

const projects: Project[] = [
  {
    shortTitle: "ASKAII",
    title: "ASKAII – Airport Parking Booking System (UK)",
    role: "Frontend Developer",
    duration: "2024 – Present",
    description:
      "ASKAII is a modern airport parking reservation system that allows users to search, compare, and book parking slots with real-time availability and secure payment processing.",
    tech: [
      "React.js",
      "Redux",
      "REST APIs",
      "JWT Authentication",
      "Bootstrap",
      "Stripe Integration",
      "Responsive Design",
    ],
    highlights: [
      "Developed complete frontend user interface using React.js",
      "Implemented booking flow with real-time availability integration",
      "Integrated secure payment system via API",
      "Managed complex state using Redux",
      "Built responsive layouts optimized for mobile and desktop",
      "Connected frontend with backend REST APIs",
      "Improved UI performance and loading speed",
    ],
  },
  {
    shortTitle: "TROUNCE",
    title: "TROUNCE – Social Media Scheduling & Automation Platform",
    role: "Frontend Developer",
    duration: "2025 – Present",
    description:
      "TROUNCE is a social media automation platform that allows businesses to manage and schedule content across multiple platforms from a centralized dashboard.",
    tech: [
      "React.js",
      "Next.js",
      "REST APIs",
      "OAuth 2.0",
      "JWT",
      "Bootstrap",
      "Dashboard UI",
    ],
    highlights: [
      "Developed full website frontend from scratch",
      "Built interactive dashboard for post scheduling and monitoring",
      "Integrated multiple social media APIs",
      "Implemented authentication and account linking UI",
      "Designed reusable components for scalable architecture",
      "Handled API integration for content scheduling system",
      "Optimized dashboard UI for performance and usability",
    ],
  },
  {
    shortTitle: "HuboWeb",
    title: "HuboWeb Technology (Pvt.) Ltd – Company Website",
    role: "Frontend Developer",
    duration: "2024",
    description:
      "Corporate website developed for HuboWeb Technology showcasing services, portfolio, and company information with a modern responsive design.",
    tech: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Responsive Design",
      "SEO Optimization",
    ],
    highlights: [
      "Developed modern responsive UI using Next.js",
      "Implemented dark/light mode support",
      "Optimized website for SEO and performance",
      "Built reusable component-based architecture",
      "Ensured pixel-perfect design implementation",
    ],
  },
  {
    shortTitle: "School MS",
    title: "School Management System – Internal Management Portal",
    role: "Frontend Developer",
    duration: "2024",
    description:
      "Internal academic management system for handling admissions, fee records, student data, and administrative operations.",
    tech: [
      "React.js",
      "REST APIs",
      "Dashboard UI",
      "Form Handling",
      "Role-based Access UI",
    ],
    highlights: [
      "Developed admin dashboard interface",
      "Built dynamic forms for admissions and fee management",
      "Integrated APIs for student record management",
      "Implemented role-based UI rendering",
      "Ensured responsive layout across devices",
    ],
  },
  {
    shortTitle: "Traviazo",
    title: "Traviazo – Travel Ticketing Website",
    role: "Frontend Developer",
    duration: "2024",
    description:
      "Online travel ticket booking website enabling users to search destinations, compare pricing, and book tickets through an intuitive interface.",
    tech: [
      "React.js",
      "Next.js",
      "REST APIs",
      "Responsive UI",
      "Search Filtering",
    ],
    highlights: [
      "Built modern travel booking interface",
      "Implemented dynamic search and filtering system",
      "Integrated flight and ticket APIs",
      "Optimized UI for performance and smooth navigation",
      "Ensured mobile-first responsive design",
    ],
  },
  {
    shortTitle: "Packaging",
    title: "PackagingWriter – Business Website",
    role: "Frontend Developer",
    duration: "2024",
    description:
      "Business website developed for a packaging content and branding service provider with service pages and contact functionality.",
    tech: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Responsive Design",
    ],
    highlights: [
      "Designed clean and modern landing pages",
      "Built service and contact sections",
      "Optimized layout for conversion and readability",
      "Ensured cross-browser compatibility",
    ],
  },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="min-h-screen mt-10 flex flex-col md:flex-row text-black dark:text-white">
      {/* LEFT SIDEBAR */}
      {/* DESKTOP SIDEBAR */}
      <aside className="w-1/4 hidden md:flex flex-col p-6 border-r border-neutral-200 dark:border-neutral-800">
        <h2 className="text-xl font-bold mb-6">Projects</h2>

        <div className="flex flex-col gap-3">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              onClick={() => setActiveIndex(idx)}
              className={`cursor-pointer text-sm px-3 py-2 rounded-lg transition ${
                activeIndex === idx
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "hover:bg-neutral-200 dark:hover:bg-neutral-800"
              }`}
            >
              {project.shortTitle}
            </div>
          ))}
        </div>
      </aside>

      {/* MOBILE TABS */}
      <div className="md:hidden overflow-x-auto border-b border-neutral-200 dark:border-neutral-800">
        <div className="flex gap-3 p-4 min-w-max">
          {projects.map((project, idx) => (
            <button
              key={project.title}
              onClick={() => setActiveIndex(idx)}
              className={`text-xs whitespace-nowrap px-4 py-2 rounded-full border transition ${
                activeIndex === idx
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "border-neutral-300 dark:border-neutral-700"
              }`}
            >
              {project.shortTitle}
            </button>
          ))}
        </div>
      </div>

      {/* RIGHT PANEL */}
      <main className="flex-1 p-5 sm:p-6 md:p-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={projects[activeIndex].title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-6 max-w-4xl"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
                {projects[activeIndex].title}
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
                {projects[activeIndex].role} • {projects[activeIndex].duration}
              </p>
            </div>

            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {projects[activeIndex].description}
            </p>

            <div>
              <h4 className="font-semibold mb-3">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {projects[activeIndex].tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs border border-neutral-300 dark:border-neutral-700 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Key Contributions</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                {projects[activeIndex].highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </main>
    </section>
  );
}
