"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  Users,
  Zap,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BRANCH_COUNTS, BUSINESS_TYPES } from "@/lib/demoRequest";

const emptyForm = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  role: "",
  businessType: "",
  numberOfBranches: "",
  message: "",
};

export default function DemoContent() {
  const [formData, setFormData] = useState(emptyForm);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Sends the request to our API route, which saves it on the server
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/demo-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          businessType: formData.businessType,
          numberOfBranches: formData.numberOfBranches,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new Error(
          error.message || "We couldn't send your request. Please try again."
        );
      }

      setSubmitStatus("success");
      setFormData(emptyForm);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "We couldn't send your request. Please try again."
      );
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white lg:flex">
      {/* Left Side - Value Proposition */}
      <div className="lg:w-1/2 bg-white text-gray-900 p-6 md:p-12 lg:p-20 relative overflow-hidden flex flex-col justify-between border-r border-gray-100">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 rounded-full text-sm font-medium mb-8 border border-green-100 text-green-700">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Live Demo Session
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
              See SyncStore <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                in Action
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg mb-12 leading-relaxed">
              Book a personalized walkthrough with our product experts. See how
              we can help you manage inventory, track sales, and grow your
              business offline and online.
            </p>

            <div className="space-y-8">
              {[
                {
                  icon: Calendar,
                  title: "Personalized Walkthrough",
                  desc: "Tailored tour of features relevant to your industry",
                },
                {
                  icon: Zap,
                  title: "Offline Capability Demo",
                  desc: "See how seamless operations work without internet",
                },
                {
                  icon: Users,
                  title: "Q&A Session",
                  desc: "Get answers to your specific technical questions",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Testimonial */}
        <motion.div
          className="relative z-10 mt-12 pt-12 border-t border-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <p className="text-lg text-gray-700 italic mb-4">
            &ldquo;The demo convinced us immediately. The offline sync feature
            is exactly what we needed for our 5 locations.&rdquo;
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden relative">
              <Image
                src="/testimonials/kwame.png"
                alt="Kwame Mensah"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Kwame Mensah</p>
              <p className="text-sm text-gray-500">Manager, Accra Retail Hub</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Side - Form */}
      <div className="lg:w-1/2 p-6 md:p-12 lg:p-20 bg-gray-50 overflow-y-auto">
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Schedule Your Demo
            </h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and we&apos;ll be in touch shortly.
            </p>

            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3"
                role="status"
              >
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-green-900">
                    Request Received!
                  </h4>
                  <p className="text-sm text-green-700">
                    Thanks! Our team will contact you shortly to book a time
                    that suits you.
                  </p>
                </div>
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3"
                role="alert"
              >
                <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-red-900">
                    Something went wrong
                  </h4>
                  <p className="text-sm text-red-700">{errorMessage}</p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    maxLength={120}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    maxLength={254}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    maxLength={40}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="+233..."
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    maxLength={160}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="Company Ltd."
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="businessType"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Business Type
                </label>
                <select
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                >
                  <option value="">Select your business type</option>
                  {BUSINESS_TYPES.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="numberOfBranches"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Number of Locations
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {BRANCH_COUNTS.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, numberOfBranches: option })
                      }
                      className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all ${
                        formData.numberOfBranches === option
                          ? "bg-primary text-white border-primary"
                          : "bg-white text-gray-600 border-gray-200 hover:border-primary/50"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Anything specific you&apos;d like to see?
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  maxLength={2000}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                  placeholder="Tell us about your challenges..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-primary-hover hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
              >
                {isSubmitting ? (
                  "Scheduling..."
                ) : (
                  <>
                    Schedule Demo
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <p className="text-xs text-center text-gray-500 mt-4">
                By submitting, you agree to our{" "}
                <Link href="/terms" className="text-primary hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
