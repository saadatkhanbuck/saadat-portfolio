"use client";

import { motion } from "motion/react";

export default function SkillsHero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-36">
      {/* background */}
      <div className="absolute inset-0 -z-30" />

      {/* light beam */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_10%_20%,rgba(120,120,120,0.12),transparent_45%)]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 md:gap-20 md:grid-cols-2">
          
          {/* LEFT */}
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border bg-white/70 dark:bg-white/5 backdrop-blur px-4 py-1 text-sm font-medium text-neutral-700 dark:text-neutral-300"
            >
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              Skills & Expertise
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-7xl"
            >
              I build robust systems using{" "}
              <span className="bg-gradient-to-r from-neutral-900 via-neutral-500 to-neutral-400 dark:from-white dark:via-neutral-300 dark:to-neutral-500 bg-clip-text text-transparent">
                proven technologies
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="mt-6 md:mt-8 max-w-xl text-base sm:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 mx-auto md:mx-0"
            >
              My toolkit is shaped by years of building and scaling real-world
              products. I focus on performance, clean architecture and long-term
              maintainability.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="mt-10 md:mt-12 flex flex-wrap justify-center md:justify-start gap-8 md:gap-12"
            >
              {[
                { value: "2+ yrs", label: "Experience Since 2023" },
                { value: "25+", label: "Projects" },
                { value: "20+", label: "Stacks" },
              ].map((m) => (
                <div key={m.label}>
                  <div className="text-2xl md:text-3xl font-bold">{m.value}</div>
                  <div className="text-sm text-neutral-500">{m.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative flex justify-center"
          >
            {/* responsive video container */}
            <div className="relative w-full max-w-[520px] aspect-[4/5] sm:aspect-[5/6] md:aspect-[1/1] overflow-hidden rounded-2xl border shadow-2xl">
              
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
                src="https://cdn.dribbble.com/userupload/45868444/file/0bdb4d8303c9f8ac3ce1f1661d13d106.mp4"
              />

              <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-8 text-white"></div>
            </div>

            {/* glow */}
            <div className="absolute -right-6 md:-right-10 -bottom-6 md:-bottom-10 -z-10 h-40 w-40 md:h-56 md:w-56 rounded-full bg-neutral-400/20 blur-3xl" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}