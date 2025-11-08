"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-primary/10 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Ready to transform your inventory management?
        </motion.h2>
        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Join thousands of businesses managing their inventory with confidence.
          Request a demo and our team will set up your account.
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="/demo"
            className="inline-flex items-center px-16 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
          >
            Request Demo
          </a>
          <p className="mt-4 text-sm text-gray-600">
            Free for 6 months • We'll set up your account
          </p>
        </motion.div>
      </div>
    </section>
  );
}
