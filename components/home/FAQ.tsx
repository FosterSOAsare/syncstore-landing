"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Does SyncStore really work offline?",
      answer:
        "Yes! SyncStore is built offline-first. You can manage inventory, process sales, create restocks, and perform all core operations without an internet connection. When you reconnect, all changes sync automatically in the background.",
    },
    {
      question: "How do product variants work?",
      answer:
        "Our variant system lets you sell the same product in different units (pieces, boxes, cartons, dozens, etc.). Each variant has its own pricing and you can convert between units when needed. Perfect for wholesale and retail businesses.",
    },
    {
      question: "Can I manage multiple branches or warehouses?",
      answer:
        "Absolutely. SyncStore supports unlimited branches, warehouses, and distribution centers. Each location has its own stock levels, pricing, and you can transfer inventory between locations with approval workflows.",
    },
    {
      question: "What happens when there are sync errors?",
      answer:
        "When sync errors occur, you'll be notified immediately within the app. These errors can be resolved manually—you'll have full visibility into what went wrong and can take the appropriate action to fix the issue. This ensures you always maintain control over your data integrity.",
    },
    {
      question: "Is there a free plan?",
      answer:
        "Yes! We offer a free plan for 6 months that includes core inventory management for a single branch. However, the free plan does not include syncing capabilities—meaning you can't sync data between devices or branches. To access multi-branch support, real-time sync, and advanced features, you'll need to upgrade to a paid plan.",
    },
    {
      question: "How do I migrate from my current system?",
      answer:
        "We provide CSV import tools and migration guides to help you transfer your products, inventory, and customer data. Our support team is available to assist with larger migrations and can help map your existing data structure.",
    },
  ];

  return (
    <section className="bg-gray-50 py-8 md:py-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-4 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to know about SyncStore
          </p>
        </motion.div>

        {/* FAQ items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="/contact"
            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
          >
            Contact our support team →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
