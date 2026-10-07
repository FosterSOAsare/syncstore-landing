"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SIGN_UP_URL } from "@/lib/site";

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
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center px-16 py-4 bg-primary text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-primary transition-colors"
            >
              Request Demo
            </Link>
            <a
              href={SIGN_UP_URL}
              className="inline-flex items-center justify-center px-12 py-4 bg-white border-2 border-primary text-primary text-lg font-semibold rounded-lg hover:bg-primary/5 transition-colors"
            >
              Create your account
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Free for 6 months • We&apos;ll set up your account
          </p>
        </motion.div>
      </div>
    </section>
  );
}
