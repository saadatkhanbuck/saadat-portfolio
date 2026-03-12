"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, MessageSquare } from "lucide-react";
import { Globe3DDemo } from "./globeldemo";

export default function ContactHero() {
  return (
    <section className="relative w-full overflow-hidden text-neutral-900 dark:text-neutral-100 py-20 lg:py-28">

      {/* background layers */}
      <div className="absolute inset-0 -z-30" />
      <div className="absolute inset-0 -z-20" />
      <div className="absolute inset-0 -z-10 opacity-[0.03] bg-[url('/noise.png')]" />

      {/* glow */}
      <div className="absolute left-1/2 top-[-15%] -z-10 h-[400px] w-[400px] md:h-[550px] md:w-[550px] -translate-x-1/2 rounded-full bg-neutral-300/30 blur-3xl dark:bg-neutral-700/30" />

      <div className="relative mx-auto flex max-w-7xl flex-col md:flex-row items-center px-6 gap-16 md:gap-24">

        {/* LEFT */}
        <div className="text-center md:text-left flex-1">
          {/* badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 dark:border-neutral-700 dark:bg-neutral-800/60 backdrop-blur px-4 py-1.5 text-sm font-medium shadow"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Live Interactions & Global Reach
          </motion.div>

          {/* heading */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight"
          >
            Let’s build something
            <br />
            <span className="bg-gradient-to-r from-neutral-400 to-neutral-600 bg-clip-text text-transparent">
              great together.
            </span>
          </motion.h1>

          {/* description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-xl mx-auto md:mx-0 text-base sm:text-lg text-neutral-600 dark:text-neutral-400"
          >
            Have a project in mind, a question, or just want to say hello? I’m
            always open to discussing new opportunities.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Link
              href="mailto:saadatkhanbuk@gmail.com"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl border border-neutral-900 dark:border-white bg-neutral-900 px-8 py-3 font-medium text-white transition"
            >
              <span className="absolute inset-0 translate-y-full bg-white transition duration-300 group-hover:translate-y-0" />
              <span className="relative z-10 flex items-center gap-2 group-hover:text-black">
                Email Me
                <Mail size={18} />
              </span>
            </Link>

            <Link
              href="/"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl border border-neutral-900 dark:border-white bg-white px-8 py-3 font-medium text-black transition"
            >
              <span className="absolute inset-0 translate-y-full bg-black transition duration-300 group-hover:translate-y-0" />
              <span className="relative z-10 flex items-center gap-2 group-hover:text-white">
                Send Message
                <MessageSquare size={18} />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25 }}
          className="relative flex-1 flex justify-center"
        >
         <Globe3DDemo/>
        </motion.div>

      </div>
    </section>
  );
}