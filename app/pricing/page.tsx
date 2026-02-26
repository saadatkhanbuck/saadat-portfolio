"use client";
import React from "react";
import { motion } from "framer-motion";
import PricingHero from "../components/pricinghero";
import FAQPage from "../components/faq";

type Plan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
};

const plans: Plan[] = [
  {
    name: "Hourly Collaboration",
    price: "PKR 1,500 – 3,000 / hour",
    description:
      "Perfect for short-term tasks, bug fixes, or small feature updates.",
    features: [
      "Frontend Development (React / Next.js)",
      "UI Fixes & Improvements",
      "API Integration",
      "Performance Optimization",
      "Flexible Working Hours",
    ],
  },
  {
    name: "Monthly Partnership",
    price: "PKR 50,000 – 150,000 / month",
    description:
      "Best for startups & businesses needing a dedicated frontend developer.",
    features: [
      "Full-Time Frontend Development",
      "Reusable Component Architecture",
      "Responsive UI (All Devices)",
      "SEO-Friendly Next.js Setup",
      "Priority Communication",
      "Ongoing Support & Maintenance",
    ],
    featured: true,
  },
  {
    name: "Project-Based",
    price: "Custom Pricing (PKR 50k – 150k+)",
    description: "For complete website or dashboard development projects.",
    features: [
      "Full Website Development",
      "Admin Dashboard Development",
      "Modern UI/UX Implementation",
      "Deployment Assistance",
      "Post-Launch Support",
    ],
  },
];

export default function PremiumPricing() {
  return (
    <>
      <PricingHero />
      <FAQPage />
      <section className="py-24  transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-neutral-900 dark:text-white mb-6">
              Pricing Plans
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
              Transparent pricing designed for businesses and individuals who
              need high-quality frontend development without compromise.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-10">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className={`relative rounded-3xl border p-10 transition-all duration-500 ${
                  plan.featured
                    ? "border-neutral-900 dark:border-white bg-neutral-900 text-white"
                    : "border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold rounded-full bg-white text-black">
                    Most Recommended
                  </span>
                )}

                <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>

                <p
                  className={`text-3xl font-bold mb-4 ${
                    plan.featured
                      ? "text-white"
                      : "text-neutral-900 dark:text-white"
                  }`}
                >
                  {plan.price}
                </p>

                <p
                  className={`mb-6 text-sm ${
                    plan.featured
                      ? "text-neutral-300"
                      : "text-neutral-600 dark:text-neutral-400"
                  }`}
                >
                  {plan.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className={`flex items-center gap-3 text-sm ${
                        plan.featured
                          ? "text-neutral-200"
                          : "text-neutral-600 dark:text-neutral-400"
                      }`}
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-xl font-medium transition ${
                    plan.featured
                      ? "bg-white text-black hover:bg-neutral-200"
                      : "bg-neutral-900 text-white dark:bg-white dark:text-black hover:opacity-90"
                  }`}
                >
                  Start Project
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
