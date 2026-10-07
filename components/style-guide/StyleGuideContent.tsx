"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Package,
  Check,
  AlertCircle,
  Info,
  ChevronRight,
  Star,
  Heart,
  Zap,
} from "lucide-react";

export default function StyleGuideContent() {
  const [selectedFont, setSelectedFont] = React.useState<
    "quicksand-inter" | "outfit-manrope" | "outfit-inter"
  >("quicksand-inter");

  const fontCombinations = {
    "quicksand-inter": {
      heading: "Quicksand",
      body: "Inter",
      headingFamily: "Quicksand",
      bodyFamily: "Inter",
      description:
        "Friendly and approachable with excellent readability. Perfect for a modern SaaS platform.",
    },
    "outfit-manrope": {
      heading: "Outfit",
      body: "Manrope",
      headingFamily: "Outfit",
      bodyFamily: "Manrope",
      description:
        "Bold and contemporary with geometric precision. Great for tech-forward brands.",
    },
    "outfit-inter": {
      heading: "Outfit",
      body: "Inter",
      headingFamily: "Outfit",
      bodyFamily: "Inter",
      description:
        "Modern and professional with exceptional clarity. Ideal for enterprise applications.",
    },
  };

  const currentFont = fontCombinations[selectedFont];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-white py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Style Guide
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Design system and brand guidelines for SyncStore. This guide
              ensures consistency across all touchpoints and maintains our
              brand identity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="bg-white py-8 border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex gap-6 overflow-x-auto text-sm">
            {[
              "Colors",
              "Typography",
              "Buttons",
              "Icons",
              "Spacing",
              "Components",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="whitespace-nowrap text-gray-600 hover:text-primary font-medium transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">
        {/* Colors Section */}
        <motion.section
          id="colors"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Color Palette
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Our color system is designed to convey trust, reliability, and
            innovation. The primary blue represents stability and
            professionalism, while the accent green signifies growth and
            success.
          </p>

          {/* Primary Colors */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Primary Colors
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ColorCard
                color="#2563eb"
                name="Primary"
                variable="--color-primary"
                usage="Main brand color, primary CTAs, links"
              />
              <ColorCard
                color="#1d4ed8"
                name="Primary Hover"
                variable="--color-primary-hover"
                usage="Hover states for primary elements"
              />
              <ColorCard
                color="#dbeafe"
                name="Primary Soft"
                variable="--color-primary-soft"
                usage="Backgrounds, subtle highlights"
              />
              <ColorCard
                color="#ffffff"
                name="Primary Foreground"
                variable="--color-primary-foreground"
                usage="Text on primary backgrounds"
              />
            </div>
          </div>

          {/* Accent Colors */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Accent Colors
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ColorCard
                color="#16a34a"
                name="Accent"
                variable="--color-accent"
                usage="Success states, positive actions"
              />
              <ColorCard
                color="#dcfce7"
                name="Accent Soft"
                variable="--color-accent-soft"
                usage="Success backgrounds, highlights"
              />
              <ColorCard
                color="#ffffff"
                name="Accent Foreground"
                variable="--color-accent-foreground"
                usage="Text on accent backgrounds"
              />
            </div>
          </div>

          {/* Neutral Colors */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Neutral Colors
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ColorCard
                color="#ffffff"
                name="Background"
                variable="--background"
                usage="Main background color"
                border
              />
              <ColorCard
                color="#171717"
                name="Foreground"
                variable="--foreground"
                usage="Primary text color"
              />
              <ColorCard
                color="#f9fafb"
                name="Gray 50"
                variable="gray-50"
                usage="Section backgrounds"
                border
              />
              <ColorCard
                color="#e5e7eb"
                name="Gray 200"
                variable="gray-200"
                usage="Borders, dividers"
              />
            </div>
          </div>
        </motion.section>

        {/* Typography Section */}
        <motion.section
          id="typography"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Typography</h2>
          <p className="text-lg text-gray-600 mb-8">
            Choose from our curated font combinations. Each pairing is designed
            to balance personality with readability.
          </p>

          {/* Font Selector */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3 mb-8">
              <button
                onClick={() => setSelectedFont("quicksand-inter")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedFont === "quicksand-inter"
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white border-2 border-gray-200 text-gray-700 hover:border-primary/30"
                }`}
              >
                Quicksand + Inter
              </button>
              <button
                onClick={() => setSelectedFont("outfit-manrope")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedFont === "outfit-manrope"
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white border-2 border-gray-200 text-gray-700 hover:border-primary/30"
                }`}
              >
                Outfit + Manrope
              </button>
              <button
                onClick={() => setSelectedFont("outfit-inter")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedFont === "outfit-inter"
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white border-2 border-gray-200 text-gray-700 hover:border-primary/30"
                }`}
              >
                Outfit + Inter
              </button>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {currentFont.heading} + {currentFont.body}
              </h3>
              <p className="text-gray-600">{currentFont.description}</p>
            </div>
          </div>

          {/* Font Families */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Font Families
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <div className="mb-4">
                  <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                    Heading Font
                  </span>
                </div>
                <h4
                  className="text-5xl font-bold text-gray-900 mb-4"
                  style={{ fontFamily: currentFont.headingFamily }}
                >
                  {currentFont.heading}
                </h4>
                <p className="text-gray-600 mb-4">
                  Used for headings, titles, and emphasis. Provides personality
                  and visual hierarchy.
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>
                    <strong>Weights:</strong> 400 (Regular), 500 (Medium), 600
                    (Semibold), 700 (Bold)
                    {selectedFont !== "quicksand-inter" && ", 800 (Extrabold)"}
                  </p>
                  <p>
                    <strong>Usage:</strong> H1-H6, buttons, labels
                  </p>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div
                    className="space-y-2"
                    style={{ fontFamily: currentFont.headingFamily }}
                  >
                    <p className="text-3xl font-bold">Bold Heading</p>
                    <p className="text-2xl font-semibold">Semibold Heading</p>
                    <p className="text-xl font-medium">Medium Text</p>
                    <p className="text-lg font-normal">Regular Text</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <div className="mb-4">
                  <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                    Body Font
                  </span>
                </div>
                <h4
                  className="text-5xl font-bold text-gray-900 mb-4"
                  style={{ fontFamily: currentFont.bodyFamily }}
                >
                  {currentFont.body}
                </h4>
                <p className="text-gray-600 mb-4">
                  Used for body text, descriptions, and UI elements. Optimized
                  for readability at all sizes.
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>
                    <strong>Weights:</strong> 400 (Regular), 500 (Medium), 600
                    (Semibold), 700 (Bold)
                    {selectedFont === "outfit-manrope" && ", 800 (Extrabold)"}
                  </p>
                  <p>
                    <strong>Usage:</strong> Paragraphs, captions, UI text
                  </p>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div
                    className="space-y-2"
                    style={{ fontFamily: currentFont.bodyFamily }}
                  >
                    <p className="text-lg font-bold">Bold Body Text</p>
                    <p className="text-base font-semibold">
                      Semibold Body Text
                    </p>
                    <p className="text-base font-medium">Medium Body Text</p>
                    <p className="text-base font-normal">
                      Regular body text with excellent readability for longer
                      content and detailed descriptions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Live Preview */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Live Preview
            </h3>
            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8 md:p-12">
              <div
                className="space-y-6"
                style={{ fontFamily: currentFont.headingFamily }}
              >
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                  Complete inventory control across every branch
                </h1>
                <p
                  className="text-xl text-gray-600 leading-relaxed"
                  style={{ fontFamily: currentFont.bodyFamily }}
                >
                  Manage inventory, sales, and operations with confidence — even
                  without internet. Works perfectly offline to keep your
                  business running smoothly across stores, warehouses, and
                  distribution centers.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <button
                    className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition-colors"
                    style={{ fontFamily: currentFont.headingFamily }}
                  >
                    Request Demo
                  </button>
                  <button
                    className="px-8 py-3 bg-white border-2 border-gray-200 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                    style={{ fontFamily: currentFont.headingFamily }}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Type Scale */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Type Scale
            </h3>
            <div className="bg-white border border-gray-200 rounded-xl p-8 space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h1
                  className="text-6xl font-bold text-gray-900"
                  style={{ fontFamily: currentFont.headingFamily }}
                >
                  Heading 1 - 60px
                </h1>
                <p className="text-sm text-gray-500 mt-2">
                  text-6xl font-bold
                </p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h2
                  className="text-5xl font-bold text-gray-900"
                  style={{ fontFamily: currentFont.headingFamily }}
                >
                  Heading 2 - 48px
                </h2>
                <p className="text-sm text-gray-500 mt-2">
                  text-5xl font-bold
                </p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3
                  className="text-4xl font-bold text-gray-900"
                  style={{ fontFamily: currentFont.headingFamily }}
                >
                  Heading 3 - 36px
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  text-4xl font-bold
                </p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h4
                  className="text-3xl font-bold text-gray-900"
                  style={{ fontFamily: currentFont.headingFamily }}
                >
                  Heading 4 - 30px
                </h4>
                <p className="text-sm text-gray-500 mt-2">
                  text-3xl font-bold
                </p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h5
                  className="text-2xl font-bold text-gray-900"
                  style={{ fontFamily: currentFont.headingFamily }}
                >
                  Heading 5 - 24px
                </h5>
                <p className="text-sm text-gray-500 mt-2">
                  text-2xl font-bold
                </p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h6
                  className="text-xl font-bold text-gray-900"
                  style={{ fontFamily: currentFont.headingFamily }}
                >
                  Heading 6 - 20px
                </h6>
                <p className="text-sm text-gray-500 mt-2">text-xl font-bold</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <p
                  className="text-lg text-gray-900"
                  style={{ fontFamily: currentFont.bodyFamily }}
                >
                  Body Large - 18px
                </p>
                <p className="text-sm text-gray-500 mt-2">text-lg</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <p
                  className="text-base text-gray-900"
                  style={{ fontFamily: currentFont.bodyFamily }}
                >
                  Body Regular - 16px
                </p>
                <p className="text-sm text-gray-500 mt-2">text-base</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <p
                  className="text-sm text-gray-900"
                  style={{ fontFamily: currentFont.bodyFamily }}
                >
                  Body Small - 14px
                </p>
                <p className="text-sm text-gray-500 mt-2">text-sm</p>
              </div>
              <div>
                <p
                  className="text-xs text-gray-900"
                  style={{ fontFamily: currentFont.bodyFamily }}
                >
                  Caption - 12px
                </p>
                <p className="text-sm text-gray-500 mt-2">text-xs</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Buttons Section */}
        <motion.section
          id="buttons"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Buttons</h2>
          <p className="text-lg text-gray-600 mb-12">
            Button styles for different actions and contexts. Use primary
            buttons for main actions, secondary for alternatives, and ghost for
            tertiary actions.
          </p>

          <div className="space-y-8">
            {/* Primary Buttons */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Primary Buttons
              </h3>
              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition-colors">
                    Primary Button
                  </button>
                  <button className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition-colors flex items-center gap-2">
                    <Package className="w-5 h-5" />
                    With Icon
                  </button>
                  <button className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition-colors flex items-center gap-2">
                    Continue
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <button
                    className="px-6 py-3 bg-gray-300 text-gray-500 font-semibold rounded-lg cursor-not-allowed"
                    disabled
                  >
                    Disabled
                  </button>
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    bg-primary text-white font-semibold rounded-lg
                    hover:bg-primary-hover
                  </code>
                </div>
              </div>
            </div>

            {/* Secondary Buttons */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Secondary Buttons
              </h3>
              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-3 bg-white border-2 border-gray-200 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
                    Secondary Button
                  </button>
                  <button className="px-6 py-3 bg-white border-2 border-gray-200 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                    <Star className="w-5 h-5" />
                    With Icon
                  </button>
                  <button
                    className="px-6 py-3 bg-gray-100 border-2 border-gray-200 text-gray-400 font-semibold rounded-lg cursor-not-allowed"
                    disabled
                  >
                    Disabled
                  </button>
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    bg-white border-2 border-gray-200 text-gray-900
                    font-semibold rounded-lg hover:bg-gray-50
                  </code>
                </div>
              </div>
            </div>

            {/* Ghost Buttons */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Ghost Buttons
              </h3>
              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-3 text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors">
                    Ghost Button
                  </button>
                  <button className="px-6 py-3 text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    With Icon
                  </button>
                  <button
                    className="px-6 py-3 text-gray-400 font-semibold rounded-lg cursor-not-allowed"
                    disabled
                  >
                    Disabled
                  </button>
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    text-primary font-semibold rounded-lg hover:bg-primary/5
                  </code>
                </div>
              </div>
            </div>

            {/* Button Sizes */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Button Sizes
              </h3>
              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <div className="flex flex-wrap items-center gap-4">
                  <button className="px-3 py-1.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-hover transition-colors">
                    Small
                  </button>
                  <button className="px-4 py-2 bg-primary text-white text-base font-semibold rounded-lg hover:bg-primary-hover transition-colors">
                    Medium
                  </button>
                  <button className="px-6 py-3 bg-primary text-white text-lg font-semibold rounded-lg hover:bg-primary-hover transition-colors">
                    Large
                  </button>
                  <button className="px-8 py-4 bg-primary text-white text-xl font-semibold rounded-lg hover:bg-primary-hover transition-colors">
                    Extra Large
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Icons Section */}
        <motion.section
          id="icons"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Icons</h2>
          <p className="text-lg text-gray-600 mb-12">
            We use Lucide React icons for consistency and clarity. Icons should
            be used purposefully to enhance understanding, not as decoration.
          </p>

          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { icon: Package, name: "Package" },
                { icon: Check, name: "Check" },
                { icon: AlertCircle, name: "Alert" },
                { icon: Info, name: "Info" },
                { icon: ChevronRight, name: "Chevron" },
                { icon: Star, name: "Star" },
                { icon: Heart, name: "Heart" },
                { icon: Zap, name: "Zap" },
              ].map(({ icon: Icon, name }) => (
                <div
                  key={name}
                  className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-sm text-gray-600">{name}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-4">Icon Sizes</h4>
              <div className="flex items-center gap-6">
                <div className="flex flex-col items-center gap-2">
                  <Package className="w-4 h-4 text-primary" />
                  <span className="text-xs text-gray-500">16px (w-4 h-4)</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Package className="w-5 h-5 text-primary" />
                  <span className="text-xs text-gray-500">20px (w-5 h-5)</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Package className="w-6 h-6 text-primary" />
                  <span className="text-xs text-gray-500">24px (w-6 h-6)</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Package className="w-8 h-8 text-primary" />
                  <span className="text-xs text-gray-500">32px (w-8 h-8)</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Spacing Section */}
        <motion.section
          id="spacing"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Spacing</h2>
          <p className="text-lg text-gray-600 mb-12">
            Consistent spacing creates visual rhythm and hierarchy. We use
            Tailwind&apos;s spacing scale based on 4px increments.
          </p>

          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <div className="space-y-4">
              {[
                { size: "1", px: "4px", class: "p-1" },
                { size: "2", px: "8px", class: "p-2" },
                { size: "3", px: "12px", class: "p-3" },
                { size: "4", px: "16px", class: "p-4" },
                { size: "6", px: "24px", class: "p-6" },
                { size: "8", px: "32px", class: "p-8" },
                { size: "12", px: "48px", class: "p-12" },
                { size: "16", px: "64px", class: "p-16" },
              ].map(({ size, px, class: className }) => (
                <div key={size} className="flex items-center gap-4">
                  <div className="w-24 text-sm text-gray-600 font-mono">
                    {className}
                  </div>
                  <div className="w-20 text-sm text-gray-500">{px}</div>
                  <div className="flex-1">
                    <div
                      className={`bg-primary/20 ${className} inline-block`}
                    >
                      <div className="bg-primary h-4"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Components Section */}
        <motion.section
          id="components"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Components</h2>
          <p className="text-lg text-gray-600 mb-12">
            Common UI components and patterns used throughout the application.
          </p>

          <div className="space-y-8">
            {/* Cards */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cards</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    <Package className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    Card Title
                  </h4>
                  <p className="text-gray-600">
                    This is a standard card component with icon, title, and
                    description.
                  </p>
                </div>

                <div className="bg-white border-2 border-primary rounded-xl p-6 shadow-lg">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white mb-4">
                    <Star className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    Featured Card
                  </h4>
                  <p className="text-gray-600">
                    This is a featured card with primary border and elevated
                    shadow.
                  </p>
                </div>
              </div>
            </div>

            {/* Alerts */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Alerts</h3>
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-green-900 mb-1">
                      Success
                    </h5>
                    <p className="text-sm text-green-800">
                      Your changes have been saved successfully.
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-blue-900 mb-1">Info</h5>
                    <p className="text-sm text-blue-800">
                      This is an informational message for the user.
                    </p>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-red-900 mb-1">Error</h5>
                    <p className="text-sm text-red-800">
                      Something went wrong. Please try again.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Badges */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Badges</h3>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center px-3 py-1 bg-primary text-white text-sm font-medium rounded-full">
                  Primary
                </span>
                <span className="inline-flex items-center px-3 py-1 bg-accent text-white text-sm font-medium rounded-full">
                  Success
                </span>
                <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                  Neutral
                </span>
                <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                  Soft Primary
                </span>
                <span className="inline-flex items-center px-3 py-1 border border-primary text-primary text-sm font-medium rounded-full">
                  Outlined
                </span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Download Section */}
        <motion.section
          className="bg-gradient-to-br from-primary/5 to-white rounded-2xl p-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need the Full Brand Kit?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Download our complete brand guidelines including logos, color
            palettes, and usage examples.
          </p>
          <button className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition-colors">
            Download Brand Kit
          </button>
        </motion.section>
      </div>
    </>
  );
}

// Color Card Component
function ColorCard({
  color,
  name,
  variable,
  usage,
  border = false,
}: {
  color: string;
  name: string;
  variable: string;
  usage: string;
  border?: boolean;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all">
      <div
        className={`h-32 ${border ? "border border-gray-200" : ""}`}
        style={{ backgroundColor: color }}
      />
      <div className="p-4">
        <h4 className="font-bold text-gray-900 mb-1">{name}</h4>
        <p className="text-sm text-gray-500 font-mono mb-2">{color}</p>
        <p className="text-xs text-gray-400 mb-3 font-mono">{variable}</p>
        <p className="text-sm text-gray-600">{usage}</p>
      </div>
    </div>
  );
}
