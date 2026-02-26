"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What type of projects do you take?",
    answer:
      "I specialize in frontend web development, full-stack projects, dashboards, and responsive websites using React, Next.js, and modern tools.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "Depending on complexity, most frontend projects are delivered in 2 to 6 weeks, while larger websites and dashboards may take 2–3 months.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes! I offer maintenance, bug fixes, updates, and performance optimization after the project is live.",
  },
  {
    question: "Can I hire you for short-term tasks?",
    answer:
      "Absolutely! I handle short-term tasks, feature additions, bug fixes, or frontend consulting projects.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "I work with React.js, Next.js, TailwindCSS, Framer Motion, REST APIs, Redux, and other modern frontend tools for scalable, maintainable projects.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full min-h-screen py-24">
      {/* Hero / heading */}
      <div className="relative max-w-4xl mx-auto px-6 text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-extrabold text-neutral-900 dark:text-white mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400">
          Quick answers about my frontend development work, process, and support.
        </p>
      </div>

      {/* subtle glow background */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-emerald-100 dark:bg-emerald-900 opacity-20 blur-3xl -z-10" />

      {/* FAQ accordion */}
      <div className="relative max-w-3xl mx-auto px-6 space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            layout
            className="bg-white dark:bg-neutral-900/70 backdrop-blur-lg border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer overflow-hidden"
            onClick={() => toggle(index)}
          >
            <motion.button
              layout
              className="w-full flex justify-between items-center px-6 py-4 focus:outline-none"
            >
              <span className="font-medium text-neutral-900 dark:text-white text-left">
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={20} className="text-neutral-500 dark:text-neutral-300" />
              </motion.div>
            </motion.button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="px-6 pb-4 text-neutral-700 dark:text-neutral-300 text-sm sm:text-base"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}