"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProjectsHero() {
  return (
    <section className="relative md:mt-10 min-h-screen overflow-hidden text-neutral-900 py-24 md:py-0">
      {/* background */}
      <div className="absolute inset-0 -z-20" />
      <div className="absolute inset-0 -z-10" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6">
        <div className="grid w-full grid-cols-1 items-center gap-16 md:gap-20 md:grid-cols-2">
          
          {/* LEFT */}
          <div className="text-center md:text-left">

            {/* badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-4 py-1.5 text-sm font-medium text-neutral-600 shadow-sm backdrop-blur"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Frontend Projects & Real Client Work
            </motion.div>

            {/* title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight dark:text-white"
            >
              Building modern interfaces.
              <br />
              <span className="bg-gradient-to-r from-neutral-400 to-neutral-600 bg-clip-text text-transparent">
                Designed for performance.
              </span>
            </motion.h1>

            {/* description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-neutral-600 mx-auto md:mx-0"
            >
              I build responsive, high-performance frontend applications using
              React and Next.js. Focused on clean UI, scalable architecture,
              and smooth user experiences for real-world client projects.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row justify-center md:justify-start"
            >
              <Link
                href="/#projects"
                className="group relative inline-flex items-center justify-center border border-gray-900 dark:border-white gap-2 overflow-hidden rounded-xl bg-neutral-900 px-8 py-3 font-medium text-white transition"
              >
                <span className="absolute inset-0 translate-y-full bg-white transition duration-300 group-hover:translate-y-0" />
                <span className="relative z-10 flex items-center gap-2 group-hover:text-black">
                  View Projects
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </span>
              </Link>

              <Link
                href="/contactme"
                className="group relative inline-flex items-center justify-center border border-gray-900 dark:border-white gap-2 overflow-hidden rounded-xl bg-white px-8 py-3 font-medium text-black transition"
              >
                <span className="absolute inset-0 translate-y-full bg-black transition duration-300 group-hover:translate-y-0" />
                <span className="relative z-10 flex items-center gap-2 group-hover:text-white">
                  Start a Project
                </span>
              </Link>
            </motion.div>

            {/* stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-12 flex flex-wrap justify-center md:justify-start gap-10 md:gap-12"
            >
              {[
                { value: "15+", label: "Projects Completed" },
                { value: "5+", label: "Live Client Deployments" },
                { value: "2+ yrs", label: "Frontend Experience" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-2xl md:text-3xl font-semibold tracking-tight dark:text-white">
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm text-neutral-500">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="absolute -inset-6 md:-inset-10 rounded-[40px]" />

            {/* responsive window */}
            <div className="relative w-full max-w-[520px] rounded-3xl border border-neutral-200 bg-white shadow-[0_40px_120px_rgba(0,0,0,0.15)]">
              
              {/* window bar */}
              <div className="flex items-center gap-2 border-b border-neutral-200 px-5 py-4">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
                <div className="ml-4 h-2 w-32 md:w-40 rounded bg-neutral-200" />
              </div>

              {/* content */}
              <div className="h-[220px] sm:h-[260px] md:h-[360px] bg-gradient-to-br from-neutral-50 to-neutral-100 p-6 md:p-8 space-y-4 md:space-y-5">
                <div className="h-5 w-32 md:w-40 rounded bg-neutral-300" />
                <div className="h-3 w-56 md:w-72 rounded bg-neutral-200" />
                <div className="h-3 w-40 md:w-52 rounded bg-neutral-200" />
              </div>
            </div>

            {/* floating cards */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -left-4 md:-left-12 top-6 md:top-10 w-36 md:w-44 rounded-xl border border-neutral-200 bg-white p-3 md:p-4 shadow-xl"
            >
              <p className="text-xs font-semibold">UI Dashboard</p>
              <div className="mt-2 h-2 w-full rounded bg-neutral-200" />
            </motion.div>

            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute -right-4 md:-right-10 bottom-6 md:bottom-10 w-36 md:w-44 rounded-xl border border-neutral-200 bg-white p-3 md:p-4 shadow-xl"
            >
              <p className="text-xs font-semibold">Frontend Analytics</p>
              <div className="mt-2 h-2 w-full rounded bg-neutral-200" />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}