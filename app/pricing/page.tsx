import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, X } from "lucide-react";

import { plans, faqs } from "@/data/plans";

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Simple, transparent pricing
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Start free for 6 months. Upgrade when you need multi-branch
              support and advanced features. No hidden fees.
            </p>
          </div>
        </section>

        {/* Pricing cards */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative bg-white rounded-2xl shadow-lg border-2 ${
                    plan.popular
                      ? "border-blue-600 shadow-xl"
                      : "border-gray-200"
                  } p-8 flex flex-col`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
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
                      <span className="text-gray-600 ml-2">
                        {plan.duration}
                      </span>
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
                          <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
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
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Pricing FAQs
            </h2>
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="py-20 bg-blue-50">
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
                className="inline-flex items-center px-12 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
              >
                Request Demo
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
