"use client";

import { Check, X, ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { plans, faqs } from "@/data/plans";

export default function PricingContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">(
    "monthly"
  );

  const calculatePrice = (basePrice: string) => {
    if (basePrice === "0") return "0";
    const price = parseInt(basePrice);
    if (billingCycle === "annual") {
      return Math.floor(price * 0.8).toString(); // 20% discount
    }
    return basePrice;
  };

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
    <div className="bg-gray-50 min-h-screen">
      {/* Header & Toggle */}
      <section className="pt-20 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Simple, transparent pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
              Choose the perfect plan for your business. No hidden fees, cancel
              anytime.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-16">
              <span
                className={`text-sm font-semibold ${
                  billingCycle === "monthly" ? "text-gray-900" : "text-gray-500"
                }`}
              >
                Monthly
              </span>
              <button
                onClick={() =>
                  setBillingCycle(
                    billingCycle === "monthly" ? "annual" : "monthly"
                  )
                }
                className="relative w-16 h-8 bg-gray-200 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <motion.div
                  className="w-6 h-6 bg-white rounded-full shadow-sm"
                  animate={{
                    x: billingCycle === "monthly" ? 0 : 32,
                  }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </button>
              <span
                className={`text-sm font-semibold flex items-center gap-2 ${
                  billingCycle === "annual" ? "text-gray-900" : "text-gray-500"
                }`}
              >
                Yearly
                <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">
                  Save 20%
                </span>
              </span>
            </div>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`relative rounded-3xl p-4 md:p-8 flex flex-col h-full transition-all duration-300 ${
                  plan.popular
                    ? "bg-gray-900 text-white shadow-2xl scale-105 z-10 ring-1 ring-gray-800"
                    : "bg-white text-gray-900 shadow-lg border border-gray-100 hover:shadow-xl"
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-0 right-0 flex justify-center">
                    <span className="bg-gradient-to-r from-primary to-accent text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  <h3
                    className={`text-2xl font-bold mb-2 ${
                      plan.popular ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm ${
                      plan.popular ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold tracking-tight">
                      ${calculatePrice(plan.price)}
                    </span>
                    <span
                      className={`text-sm font-medium ${
                        plan.popular ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      /mo
                    </span>
                  </div>
                  {billingCycle === "annual" && plan.price !== "0" && (
                    <p
                      className={`text-xs mt-2 text-left ${
                        plan.popular ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      Billed ${parseInt(calculatePrice(plan.price)) * 12} yearly
                    </p>
                  )}
                </div>

                <div className="flex-grow mb-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div
                          className={`mt-0.5 rounded-full p-0.5 ${
                            plan.popular
                              ? "bg-primary/20 text-primary-400"
                              : "bg-primary/10 text-primary"
                          }`}
                        >
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span
                          className={`text-sm ${
                            plan.popular ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                    {plan.limitations.map((limitation) => (
                      <li
                        key={limitation}
                        className="flex items-start gap-3 opacity-50"
                      >
                        <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                        <span
                          className={`text-sm ${
                            plan.popular ? "text-gray-500" : "text-gray-500"
                          }`}
                        >
                          {limitation}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={
                    plan.name === "Enterprise"
                      ? "mailto:fostersoasare@gmail.com"
                      : "/demo"
                  }
                  className={`w-full py-4 rounded-xl font-bold text-center transition-all duration-300 ${
                    plan.popular
                      ? "bg-white text-gray-900 hover:bg-gray-100"
                      : "bg-gray-900 text-white hover:bg-gray-800"
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
        className="py-20 bg-white border-t border-gray-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Everything you need to know about the product and billing.
            </p>
          </div>

          <motion.div
            className="space-y-4"
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
                className="bg-gray-50 rounded-2xl overflow-hidden hover:bg-gray-100 transition-colors"
                variants={faqItemVariants}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-8 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
