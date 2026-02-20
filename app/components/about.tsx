"use client";

import { motion } from "framer-motion";
import { FaReact, FaGithub, FaHtml5, FaCss3Alt } from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiFramer,
} from "react-icons/si";
import { useEffect, useRef, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

type CounterProps = {
  to: number;
  suffix?: string;
};

function Counter({ to, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = false;

        let start = 0;
        const duration = 1200;
        const increment = to / (duration / 8);

        const timer = setInterval(() => {
          start += increment;
          if (start >= to) {
            setCount(to);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
      },
      { threshold: 0.4 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [to]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const stats = [
    { number: 2, suffix: "+", label: "Years Experience Since 2023" },
    { number: 100, suffix: "+", label: "Projects Completed" },
    { number: 50, suffix: "+", label: "Happy Clients" },
    { number: "∞", label: "Learning Mode" },
  ];

  return (
    <div className="text-neutral-900 dark:text-neutral-100 min-h-screen px-6 sm:px-10 md:px-20 py-20">
      {/* HERO */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="grid md:grid-cols-2 gap-14 items-center"
      >
        {/* LEFT */}
        <div>
          <p className="text-sm tracking-widest uppercase text-neutral-500 dark:text-neutral-400 mb-4">
            About Me
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Building thoughtful
            <br />
            <span className="text-neutral-400 dark:text-neutral-500">
              digital products.
            </span>
          </h1>

          <p className="mt-6 text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed max-w-xl text-justify">
            I am a Frontend Developer with 2+ years of experience since 2023,
            specializing in building scalable, high-performance, and
            production-ready web applications. I focus on writing clean,
            reusable, and maintainable code, optimizing performance, and
            crafting meaningful user experiences using modern UI engineering
            standards.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#stack"
              className="px-6 py-3 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-black font-medium hover:opacity-80 transition"
            >
              My Stack
            </a>
            <a
              href="/contactme"
              className="px-6 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative hidden md:flex items-center justify-center">
          <div className="absolute w-80 h-80 bg-neutral-300 dark:bg-neutral-700 rounded-full blur-3xl opacity-40 animate-pulse" />

          <div className="relative p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-xl shadow-xl max-w-sm">
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Currently building
            </p>

            <h3 className="mt-2 text-xl font-semibold">
              Scalable web platforms
            </h3>

            <p className="mt-3 text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
              Focused on performance, clean architecture, and delightful UX.
            </p>

            <div className="flex gap-2 mt-5 flex-wrap">
              <span className="text-xs px-3 py-1 rounded-full bg-neutral-200 dark:bg-neutral-800">
                Frontend Developer
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-neutral-200 dark:bg-neutral-800">
                2+ yrs
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-neutral-200 dark:bg-neutral-800">
                Remote
              </span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* STATS */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24"
      >
        {stats.map((item, i) => (
          <div
            key={i}
            className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 hover:-translate-y-1 transition"
          >
            <h3 className="text-2xl font-semibold">
              {typeof item.number === "number" ? (
                <Counter to={item.number} suffix={item.suffix} />
              ) : (
                item.number
              )}
            </h3>

            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
              {item.label}
            </p>
          </div>
        ))}
      </motion.section>

      {/* STACK */}
      <motion.section
        id="stack"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-28"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-10">Tech Stack</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-5">
          {[
            { icon: <SiNextdotjs size={24} />, name: "Next.js" },
            { icon: <FaReact size={24} />, name: "React" },
            { icon: <SiTypescript size={24} />, name: "TypeScript" },
            { icon: <SiTailwindcss size={24} />, name: "Tailwind CSS" },
            { icon: <SiFramer size={24} />, name: "Framer Motion" },
            { icon: <SiRedux size={24} />, name: "Redux" },
            { icon: <FaHtml5 size={24} />, name: "HTML5" },
            { icon: <FaCss3Alt size={24} />, name: "CSS3" },
            { icon: <FaGithub size={24} />, name: "GitHub" },
          ].map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-5 py-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:-translate-y-1 transition"
            >
              <div className="text-neutral-700 dark:text-neutral-300">
                {tech.icon}
              </div>
              <span className="text-sm font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* PHILOSOPHY */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-28 max-w-6xl mx-auto"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
          {/* Left: Text */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              How I Work
            </h2>
            <p className="text-neutral-600 text-justify dark:text-neutral-400 leading-relaxed text-lg">
              I approach development with a balance of engineering precision and
              design sensitivity. Every project I build is optimized for
              performance, scalability, and a smooth user experience across
              devices.
            </p>
          </div>

          {/* Right: Floating Cards */}
          <div className="relative md:w-1/2 flex justify-center items-center h-[300px] md:h-[350px]">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: i * 0.3 }}
                className={`absolute w-56 sm:w-60 md:w-64 p-5 sm:p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg text-neutral-800 dark:text-white hover:scale-105 transition cursor-pointer ${
                  i === 0
                    ? "top-0 left-1/4 rotate-3 md:left-0"
                    : i === 1
                      ? "top-16 left-0 rotate-[-3deg] md:left-16"
                      : "top-32 left-8 rotate-2 md:left-8"
                }`}
              >
                <h3 className="font-semibold text-lg mb-2">Feature {i + 1}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">
                  Writing clean, reusable and maintainable frontend code
                  following best practices.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
