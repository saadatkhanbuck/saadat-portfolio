"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PricingHero() {
  return (
    <section className="relative min-h-screen mt-10 overflow-hidden text-neutral-900 dark:text-neutral-100">
      
      <div className="absolute left-1/2 top-[-20%] -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-neutral-200/20 dark:bg-neutral-700/20 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6">
        <div className="grid w-full grid-cols-1 items-center gap-24 md:grid-cols-2">
          
          {/* LEFT */}
          <div className="text-center md:text-left">
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 dark:bg-neutral-800/60 px-4 py-1.5 text-sm font-medium text-neutral-600 dark:text-neutral-300 shadow-sm backdrop-blur"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Freelance Services
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl"
            >
              Transparent Pricing.
              <br />
              <span className="bg-gradient-to-r from-neutral-400 to-neutral-600 bg-clip-text text-transparent">
                Professional Results.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400"
            >
              I build modern, responsive, and high-performance frontend
              applications using React and Next.js. Choose a package that
              fits your project requirements.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row md:justify-start justify-center"
            >
              <Link
                href="/contactme"
                className="group relative inline-flex items-center justify-center border border-gray-900 dark:border-white gap-2 overflow-hidden rounded-xl bg-neutral-900 px-8 py-3 font-medium text-white transition"
              >
                <span className="absolute inset-0 translate-y-full bg-white transition duration-300 group-hover:translate-y-0" />
                <span className="relative z-10 flex items-center gap-2 group-hover:text-black">
                  Start a Project
                  <ArrowRight size={18} className="transition group-hover:translate-x-1" />
                </span>
              </Link>

              <Link
                href="/projects"
                className="group relative inline-flex items-center justify-center border border-gray-900 dark:border-white gap-2 overflow-hidden rounded-xl bg-white px-8 py-3 font-medium text-black transition"
              >
                <span className="absolute inset-0 translate-y-full bg-black transition duration-300 group-hover:translate-y-0" />
                <span className="relative z-10 flex items-center gap-2 group-hover:text-white">
                  View My Work
                </span>
              </Link>
            </motion.div>

            {/* credibility style stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-12 flex gap-12 md:justify-start justify-center"
            >
              {[
                { value: "React / Next.js", label: "Core Stack" },
                { value: "API Integration", label: "Specialization" },
                { value: "Responsive UI", label: "All Devices" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-2xl font-semibold tracking-tight">
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative hidden md:flex justify-center"
          >
            <div className="relative w-[560px] rounded-3xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 p-8 shadow-xl">
              <div className="space-y-6">
                {[
                  {
                    tier: "Landing Page",
                    price: "$150 – $300",
                    features: [
                      "Modern UI Design",
                      "Responsive Layout",
                      "Contact Form Integration",
                    ],
                  },
                  {
                    tier: "Business Website",
                    price: "$400 – $800",
                    features: [
                      "Multi-page Website",
                      "API Integration",
                      "Admin Dashboard",
                    ],
                  },
                  {
                    tier: "Custom Web App",
                    price: "Custom Quote",
                    features: [
                      "Full React / Next.js App",
                      "Authentication System",
                      "Advanced Dashboard",
                    ],
                  },
                ].map((plan, i) => (
                  <motion.div
                    key={plan.tier}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.15 }}
                    className="rounded-xl border border-neutral-200 dark:border-neutral-700 p-5 shadow-md transition hover:shadow-xl"
                  >
                    <p className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
                      {plan.tier}
                    </p>
                    <p className="mt-2 text-2xl font-semibold">
                      {plan.price}
                    </p>
                    <ul className="mt-3 space-y-1 text-sm text-neutral-600 dark:text-neutral-300">
                      {plan.features.map((f, idx) => (
                        <li key={idx}>• {f}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -right-10 top-10 rounded-xl border border-neutral-900 dark:border-white bg-white dark:bg-neutral-700 px-4 py-2 shadow-md"
              >
                <p className="text-xs font-semibold text-neutral-900 dark:text-white">
                  Most Requested
                </p>
                <p className="text-sm font-medium">Business Website</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}