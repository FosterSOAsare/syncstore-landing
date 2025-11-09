"use client";

import WHY_CHOOSE_US_SECTIONS from "../data/posSections";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const sections = WHY_CHOOSE_US_SECTIONS;

  return (
    <section className="relative overflow-hidden bg-white py-10 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why choose us
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Built specifically for retail and distribution businesses. We solve
            the challenges that other inventory systems ignore.
          </p>
        </motion.div>

        {/* Feature items */}
        <div className="space-y-16 md:space-y-32">
          {sections.map((s, sectionIndex) => {
            return (
              <motion.div
                key={s.title}
                className={`flex flex-col lg:flex-row items-stretch gap-12 ${
                  s.reverse ? "lg:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                {/* Image container */}
                <motion.div
                  className="w-full h-auto lg:w-1/2"
                  initial={{ opacity: 0, x: s.reverse ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                >
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 h-full flex items-center justify-center shadow-sm border border-blue-100">
                    <div className="w-full h-64 md:h-80 flex items-center justify-center">
                      {sectionIndex === 0 && <OfflineIllustration />}
                      {sectionIndex === 1 && <MultiLocationIllustration />}
                      {sectionIndex === 2 && <CustomerIllustration />}
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  className="w-full lg:w-1/2"
                  initial={{ opacity: 0, x: s.reverse ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                >
                  <div className="mb-6">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                      {s.title}
                    </h3>
                  </div>

                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {s.desc}
                  </p>

                  <ul className="space-y-4">
                    {s.bullets.map((b, bulletIndex) => (
                      <motion.li
                        key={b}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{
                          duration: 0.5,
                          delay: 0.5 + bulletIndex * 0.1,
                        }}
                      >
                        <svg
                          className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5"
                          fill="none"
                          strokeWidth={2.5}
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-base text-gray-700 leading-relaxed">
                          {b}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Offline Illustration
function OfflineIllustration() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full" fill="none">
      {/* Cloud with WiFi off symbol */}
      <motion.path
        d="M280 120c0-22.091-17.909-40-40-40-4.5 0-8.8 0.75-12.85 2.1-7.7-14.85-23.25-25.1-41.15-25.1-25.4 0-46 20.6-46 46 0 2.5 0.2 5 0.6 7.4-19.6 4.4-34.6 22-34.6 43.6 0 24.3 19.7 44 44 44h120c30.9 0 56-25.1 56-56s-25.1-56-56-56c-1.4 0-2.8 0.05-4.15 0.15"
        stroke="#3B82F6"
        strokeWidth="3"
        fill="#DBEAFE"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* WiFi Off Symbol */}
      <circle
        cx="200"
        cy="150"
        r="60"
        fill="white"
        stroke="#3B82F6"
        strokeWidth="2"
      />
      <motion.path
        d="M170 150c0-16.569 13.431-30 30-30M230 150c0-16.569-13.431-30-30-30"
        stroke="#EF4444"
        strokeWidth="4"
        strokeLinecap="round"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <motion.line
        x1="175"
        y1="125"
        x2="225"
        y2="175"
        stroke="#EF4444"
        strokeWidth="4"
        strokeLinecap="round"
        animate={{ rotate: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Devices syncing locally */}
      <rect
        x="50"
        y="220"
        width="50"
        height="60"
        rx="5"
        fill="#3B82F6"
        opacity="0.8"
      />
      <rect x="55" y="225" width="40" height="30" fill="white" />
      <motion.circle
        cx="75"
        cy="265"
        r="3"
        fill="white"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />

      <rect
        x="300"
        y="220"
        width="50"
        height="60"
        rx="5"
        fill="#3B82F6"
        opacity="0.8"
      />
      <rect x="305" y="225" width="40" height="30" fill="white" />
      <motion.circle
        cx="325"
        cy="265"
        r="3"
        fill="white"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
      />
    </svg>
  );
}

// Multi-Location Illustration
function MultiLocationIllustration() {
  // Pre-calculate positions to avoid hydration mismatch
  const locations = [
    { x: 290, y: 150 }, // 0 degrees
    { x: 227.85, y: 235.63 }, // 72 degrees
    { x: 142.08, y: 208.09 }, // 144 degrees
    { x: 142.08, y: 91.91 }, // 216 degrees
    { x: 227.85, y: 64.37 }, // 288 degrees
  ];

  return (
    <svg viewBox="0 0 400 300" className="w-full h-full" fill="none">
      {/* Central Hub/Server */}
      <motion.circle
        cx="200"
        cy="150"
        r="30"
        fill="#3B82F6"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <rect x="190" y="140" width="20" height="20" fill="white" rx="2" />

      {/* Location Nodes */}
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "200px 150px" }}
      >
        {locations.map((loc, i) => (
          <g key={i}>
            <motion.line
              x1="200"
              y1="150"
              x2={loc.x}
              y2={loc.y}
              stroke="#3B82F6"
              strokeWidth="2"
              strokeDasharray="4 4"
              animate={{ strokeDashoffset: [0, -8] }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <motion.circle
              cx={loc.x}
              cy={loc.y}
              r="15"
              fill="#DBEAFE"
              stroke="#3B82F6"
              strokeWidth="2"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
            />
            <rect
              x={loc.x - 6}
              y={loc.y - 8}
              width="12"
              height="16"
              fill="#3B82F6"
              rx="1"
            />
            <rect
              x={loc.x - 5}
              y={loc.y - 7}
              width="10"
              height="8"
              fill="white"
            />
          </g>
        ))}
      </motion.g>

      {/* Data flow indicators */}
      <motion.circle
        cx="200"
        cy="150"
        r="50"
        stroke="#3B82F6"
        strokeWidth="1"
        fill="none"
        opacity="0.3"
        animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </svg>
  );
}

// Customer & Credit Management Illustration
function CustomerIllustration() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full" fill="none">
      {/* Customer profiles */}
      <motion.g
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <circle
          cx="120"
          cy="100"
          r="25"
          fill="#DBEAFE"
          stroke="#3B82F6"
          strokeWidth="2"
        />
        <circle cx="120" cy="95" r="10" fill="#3B82F6" />
        <path d="M100 115c0-11 9-15 20-15s20 4 20 15" fill="#3B82F6" />

        <circle
          cx="200"
          cy="100"
          r="25"
          fill="#DBEAFE"
          stroke="#3B82F6"
          strokeWidth="2"
        />
        <circle cx="200" cy="95" r="10" fill="#3B82F6" />
        <path d="M180 115c0-11 9-15 20-15s20 4 20 15" fill="#3B82F6" />

        <circle
          cx="280"
          cy="100"
          r="25"
          fill="#DBEAFE"
          stroke="#3B82F6"
          strokeWidth="2"
        />
        <circle cx="280" cy="95" r="10" fill="#3B82F6" />
        <path d="M260 115c0-11 9-15 20-15s20 4 20 15" fill="#3B82F6" />
      </motion.g>

      {/* Credit card / Payment */}
      <motion.g
        animate={{ y: [0, 5, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <rect x="100" y="180" width="200" height="80" rx="8" fill="#3B82F6" />
        <rect x="100" y="180" width="200" height="25" fill="#1E40AF" />
        <rect
          x="120"
          y="220"
          width="60"
          height="8"
          rx="2"
          fill="white"
          opacity="0.7"
        />
        <rect
          x="120"
          y="235"
          width="40"
          height="8"
          rx="2"
          fill="white"
          opacity="0.7"
        />
        <circle cx="270" cy="235" r="15" fill="#FBBF24" opacity="0.8" />
        <circle cx="280" cy="235" r="15" fill="#F59E0B" opacity="0.8" />
      </motion.g>

      {/* Transaction flow lines */}
      <motion.path
        d="M120 130 L120 170"
        stroke="#3B82F6"
        strokeWidth="2"
        strokeDasharray="4 4"
        animate={{ strokeDashoffset: [0, -8] }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <motion.path
        d="M200 130 L200 170"
        stroke="#3B82F6"
        strokeWidth="2"
        strokeDasharray="4 4"
        animate={{ strokeDashoffset: [0, -8] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
          delay: 0.3,
        }}
      />
      <motion.path
        d="M280 130 L280 170"
        stroke="#3B82F6"
        strokeWidth="2"
        strokeDasharray="4 4"
        animate={{ strokeDashoffset: [0, -8] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
          delay: 0.6,
        }}
      />

      {/* Checkmark */}
      <motion.circle
        cx="340"
        cy="80"
        r="20"
        fill="#10B981"
        animate={{ scale: [0, 1, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.path
        d="M330 80 L337 87 L350 74"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ pathLength: [0, 1, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </svg>
  );
}
