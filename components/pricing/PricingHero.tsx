"use client";

import { motion } from "framer-motion";

export default function PricingHero() {
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
      className="py-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
          Simple, transparent pricing
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
          Start free for 6 months. Upgrade when you need multi-branch support
          and advanced features. No hidden fees.
        </p>
      </div>
    </motion.section>
  );
}
