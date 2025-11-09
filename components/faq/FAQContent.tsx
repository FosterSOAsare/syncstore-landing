"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import categories from "@/data/faq";

export default function FAQContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      {/* Hero Section */}
      <motion.section
        className="py-10 md:py-16 bg-gradient-to-b from-gray-50 to-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600">
            Find answers to common questions about SyncStore
          </p>
        </div>
      </motion.section>

      {/* FAQ Categories */}
      <section className="py-4 md:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="mb-6 md:mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                {category.title}
              </h2>
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const globalIndex =
                    categories
                      .slice(0, categoryIndex)
                      .reduce((acc, cat) => acc + cat.faqs.length, 0) +
                    faqIndex;

                  return (
                    <motion.div
                      key={faqIndex}
                      className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.3, delay: faqIndex * 0.05 }}
                    >
                      <button
                        onClick={() =>
                          setOpenIndex(
                            openIndex === globalIndex ? null : globalIndex
                          )
                        }
                        className="w-full px-4 md:px-6 py-3 md:py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-lg font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                            openIndex === globalIndex ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-200 ${
                          openIndex === globalIndex ? "max-h-96" : "max-h-0"
                        }`}
                      >
                        <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                          {faq.answer}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="py-16 bg-primary/5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our team is here to help. Reach out and we'll get back to you within
            24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@syncstore.com"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary transition-colors"
            >
              Email Support
            </a>
            <a
              href="/demo"
              className="inline-flex items-center justify-center px-8 py-3 bg-white border-2 border-gray-200 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Request Demo
            </a>
          </div>
        </div>
      </motion.section>
    </>
  );
}
