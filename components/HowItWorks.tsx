"use client";

import { UserPlus, Settings, Rocket, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      icon: UserPlus,
      step: "01",
      title: "Request access",
      desc: "Request a demo and our team will create your account with your branches, products, and team members configured.",
    },
    {
      icon: Settings,
      step: "02",
      title: "Configure your system",
      desc: "Set up product variants, categories, pricing per branch, and user permissions. Customize workflows to match your business.",
    },
    {
      icon: Rocket,
      step: "03",
      title: "Start managing inventory",
      desc: "Begin tracking stock, processing sales, managing restocks, and transferring inventory between branches—online or offline.",
    },
    {
      icon: TrendingUp,
      step: "04",
      title: "Scale & optimize",
      desc: "Use reports and analytics to identify trends, optimize stock levels, and make data-driven decisions across all locations.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            How it works
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Get started in four simple steps. No complex setup, no long
            training—just straightforward inventory management.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                {/* Step number */}
                <div className="text-6xl font-bold text-blue-50 mb-4">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center bg-blue-600 rounded-xl text-white mb-6 shadow-md">
                  <Icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="/demo"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-sm hover:bg-blue-700 transition-colors"
          >
            Request Demo
          </a>
          <p className="mt-3 text-sm text-gray-500">
            Free for 6 months • We handle the setup
          </p>
        </motion.div>
      </div>
    </section>
  );
}
