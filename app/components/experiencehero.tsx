"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ExperienceHero() {
  const timeline = [
    {
      role: "Frontend Developer",
      company: "HuboWeb Technology (Pvt.) Ltd",
      period: "07/2024 – Ongoing",
    },
    {
      role: "Professional Web Development Training (MERN Stack)",
      company: "Arfa Kareem Tower, Lahore",
      period: "2024 – 2025",
    },
    {
      role: "6-Month Diploma — Basic Computer & MS Office",
      company: "Computer Training Institute",
      period: "2023 – 2024",
    },
  ];

  return (
    <section className="relative overflow-hidden text-neutral-900 dark:text-white py-20 lg:py-28">
      
      {/* background blur */}
      <div className="absolute left-1/2 top-[-20%] -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-neutral-200/40 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* LEFT SIDE */}
          <div className="text-center lg:text-left">
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-sm font-medium text-neutral-600 shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              Professional Experience
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-semibold leading-[1.05] tracking-tight"
            >
              Real projects.
              <br />
              <span className="bg-gradient-to-r from-neutral-400 to-neutral-400 bg-clip-text text-transparent">
                Production-ready systems.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 mx-auto max-w-xl text-base sm:text-lg text-neutral-600 dark:text-neutral-300 lg:mx-0"
            >
              Working as a Frontend Developer at HuboWeb Technology,
              building responsive client websites and dashboards using
              React and Next.js. Focused on scalable architecture,
              reusable components, and optimized frontend performance.
            </motion.p>

            {/* buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <Link
                href="/contactme"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl border border-black bg-neutral-900 px-8 py-3 font-medium text-white"
              >
                <span className="absolute inset-0 translate-y-full bg-white transition duration-300 group-hover:translate-y-0" />
                <span className="relative z-10 flex items-center gap-2 group-hover:text-black">
                  Contact Me
                  <ArrowRight size={18} className="transition group-hover:translate-x-1" />
                </span>
              </Link>

              <Link
                href="/#projects"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl border border-black bg-neutral-900 px-8 py-3 font-medium text-white"
              >
                <span className="absolute inset-0 translate-y-full bg-white transition duration-300 group-hover:translate-y-0" />
                <span className="relative z-10 group-hover:text-black">
                  View Work
                </span>
              </Link>
            </motion.div>

            {/* stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-12 flex flex-wrap justify-center gap-10 lg:justify-start"
            >
              {[
                { value: "Live", label: "Client Projects" },
                { value: "React / Next.js", label: "Core Stack" },
                { value: "Production", label: "Deployments" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-2xl sm:text-3xl font-semibold">
                    {item.value}
                  </p>
                  <p className="text-sm text-neutral-500">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT SIDE TIMELINE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-md rounded-3xl border border-neutral-200 bg-white dark:bg-neutral-900 p-6 sm:p-8 shadow-[0_40px_120px_rgba(0,0,0,0.12)]">

              <div className="absolute left-8 top-8 bottom-8 w-px bg-neutral-200" />

              <div className="space-y-10">
                {timeline.map((job, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15 }}
                    className="relative pl-12"
                  >
                    <div className="absolute left-[-6px] top-2 h-3 w-3 rounded-full bg-neutral-900 dark:bg-white" />

                    <p className="text-sm text-neutral-500">{job.period}</p>
                    <p className="font-semibold">{job.role}</p>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      {job.company}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* floating card */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute -top-6 right-0 sm:-right-6 rounded-xl border border-neutral-200 bg-white px-4 py-3 shadow-xl"
            >
              <p className="text-xs text-neutral-500">Currently</p>
              <p className="text-sm font-semibold">
                Working on live client projects
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}