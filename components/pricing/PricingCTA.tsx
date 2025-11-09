"use client";

import { motion } from "framer-motion";

export default function PricingCTA() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.section
      className="py-20 bg-primary/5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Ready to get started?
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Request a demo and get your 6-month free trial. We'll set up
          everything for you.
        </p>
        <div className="mt-8">
          <a
            href="/demo"
            className="inline-flex items-center px-12 py-4 bg-primary text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-primary transition-colors"
          >
            Request Demo
          </a>
        </div>
      </div>
    </motion.section>
  );
}
