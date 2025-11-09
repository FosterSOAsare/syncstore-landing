"use client";

import { Check, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { plans, faqs } from "@/data/plans";

export default function PricingContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

  const faqItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      {/* Pricing cards */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`relative bg-white rounded-2xl shadow-lg border-2 ${
                  plan.popular ? "border-primary shadow-xl" : "border-gray-200"
                } p-8 flex flex-col hover:shadow-2xl transition-all duration-300`}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
                  transition: { duration: 0.15 },
                }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {plan.name}
                  </h3>
                  <div className="mt-4">
                    <span className="text-5xl font-bold text-gray-900">
                      ${plan.price}
                    </span>
                    <span className="text-gray-600 ml-2">{plan.duration}</span>
                  </div>
                  <p className="mt-4 text-gray-600">{plan.description}</p>
                </div>

                <div className="flex-grow">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-left"
                      >
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-left">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {plan.limitations.length > 0 && (
                    <ul className="space-y-3 mb-6 pt-4 border-t border-gray-200">
                      {plan.limitations.map((limitation) => (
                        <li
                          key={limitation}
                          className="flex items-start gap-3 text-left"
                        >
                          <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-500 text-left">
                            {limitation}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <a
                  href={
                    plan.name === "Enterprise"
                      ? "mailto:support@syncstore.com"
                      : "/demo"
                  }
                  className={`mt-6 block text-center px-6 py-3 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? "bg-primary text-white hover:bg-primary"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <motion.section
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Pricing FAQs
          </h2>
          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2,
                },
              },
            }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                variants={faqItemVariants}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
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
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
