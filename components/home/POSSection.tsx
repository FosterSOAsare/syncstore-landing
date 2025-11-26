"use client";

import { motion } from "framer-motion";
import { WifiOff, Store, Users, Check, ArrowRight } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      id: "offline",
      icon: WifiOff,
      title: "Works perfectly without internet",
      desc: "Don't let bad internet stop your sales. SyncStore works 100% offline and automatically syncs when you're back online. No data loss, no downtime.",
      bullets: [
        "Process sales offline",
        "Local data storage",
        "Auto-sync when online",
      ],
      illustration: <OfflineIllustration />,
      reverse: false,
    },
    {
      id: "multi-location",
      icon: Store,
      title: "Multi-Branch Ready",
      desc: "Manage all your shops and warehouses from one dashboard. Transfer stock instantly and see sales across all locations in real-time.",
      bullets: [
        "Centralized dashboard",
        "Instant stock transfers",
        "Unified reporting",
      ],
      illustration: <MultiLocationIllustration />,
      reverse: true,
    },
    {
      id: "customers",
      icon: Users,
      title: "Customer Credits",
      desc: "Track who owes you money. Manage customer profiles, purchase history, and credit limits easily to keep cash flow healthy.",
      bullets: [
        "Track customer debt",
        "Purchase history",
        "Credit limit alerts",
      ],
      illustration: <CustomerIllustration />,
      reverse: false,
    },
  ];

  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Why businesses choose <span className="text-primary">SyncStore</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We've built the tools that modern African retailers need to thrive.
              Offline-first, multi-location ready, and designed for growth.
            </p>
          </motion.div>
        </div>

        {/* Features List */}
        <div className="space-y-32">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                feature.reverse ? "lg:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              {/* Text Content */}
              <div className="flex-1">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-6">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {feature.desc}
                </p>
                <ul className="space-y-4">
                  {feature.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-50 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 text-green-600" />
                      </div>
                      <span className="text-gray-700 font-medium">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual Content */}
              <div className="flex-1 w-full">
                <div className="relative rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 aspect-[4/3] group">
                  {/* Decorative Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 opacity-50" />
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                  
                  {/* Illustration Container */}
                  <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12">
                    <div className="w-full h-full transform group-hover:scale-105 transition-transform duration-500 ease-out">
                      {feature.illustration}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Illustrations
function OfflineIllustration() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full" fill="none">
      {/* Background Elements */}
      <circle cx="200" cy="150" r="120" className="fill-gray-50" />
      
      {/* Signal Bars (Disconnected) */}
      <g transform="translate(140, 100)">
        <rect x="0" y="30" width="10" height="20" className="fill-gray-300" rx="2" />
        <rect x="20" y="20" width="10" height="30" className="fill-gray-300" rx="2" />
        <rect x="40" y="10" width="10" height="40" className="fill-gray-300" rx="2" />
        <rect x="60" y="0" width="10" height="50" className="fill-gray-300" rx="2" />
        
        {/* Cross out line */}
        <motion.path 
          d="M-10 10 L80 60" 
          stroke="#EF4444" 
          strokeWidth="4" 
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </g>

      {/* Success Card (Floating above) */}
      <motion.g
        initial={{ y: 40, opacity: 0, scale: 0.9 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 100,
          damping: 15,
          delay: 0.8 
        }}
      >
        {/* Glow effect behind card */}
        <motion.rect 
          x="95" y="175" width="210" height="90" rx="20" 
          className="fill-green-500/20" 
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        <rect x="100" y="180" width="200" height="80" rx="16" className="fill-white" filter="url(#shadow)" />
        <rect x="100" y="180" width="200" height="80" rx="16" stroke="black" strokeWidth="2" className="stroke-gray-100" />
        
        {/* Checkmark Circle */}
        <motion.circle 
          cx="150" cy="220" r="20" 
          className="fill-green-500"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", delay: 1.2 }}
        />
        <motion.path 
          d="M140 220l7 7 13-13" 
          stroke="white" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 0.4, delay: 1.4 }}
        />
        
        {/* Text Lines */}
        <motion.rect 
          x="190" y="210" width="80" height="8" rx="4" 
          className="fill-gray-900"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        />
        <motion.rect 
          x="190" y="225" width="50" height="6" rx="3" 
          className="fill-gray-400"
          initial={{ width: 0 }}
          whileInView={{ width: 50 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        />
      </motion.g>

      {/* Shadow Filter */}
      <defs>
        <filter id="shadow" x="80" y="160" width="240" height="120" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#000000" floodOpacity="0.1" />
        </filter>
      </defs>
    </svg>
  );
}

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
        className="fill-gray-900"
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
              className="stroke-gray-900"
              strokeWidth="2"
              strokeDasharray="4 4"
              animate={{ strokeDashoffset: [0, -8] }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <motion.circle
              cx={loc.x}
              cy={loc.y}
              r="15"
              className="fill-gray-100 stroke-gray-900"
              strokeWidth="2"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
            />
            <rect
              x={loc.x - 6}
              y={loc.y - 8}
              width="12"
              height="16"
              className="fill-gray-900"
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
        className="stroke-gray-900"
        strokeWidth="1"
        fill="none"
        opacity="0.3"
        animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </svg>
  );
}

function CustomerIllustration() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full" fill="none">
      {/* Customer profiles */}
      <motion.g
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, staggerChildren: 0.2 }}
      >
        {[0, 1, 2].map((i) => (
           <motion.g key={i} 
             initial={{ y: 20, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             transition={{ delay: i * 0.2 }}
           >
            <circle
              cx={120 + i * 80}
              cy="100"
              r="25"
              className="fill-gray-100 stroke-gray-900"
              strokeWidth="2"
            />
            <circle cx={120 + i * 80} cy="95" r="10" className="fill-gray-900" />
            <path d={`M${100 + i * 80} 115c0-11 9-15 20-15s20 4 20 15`} className="fill-gray-900" />
          </motion.g>
        ))}
      </motion.g>

      {/* Credit card / Payment */}
      <motion.g
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", delay: 0.6 }}
      >
        <rect x="100" y="180" width="200" height="80" rx="8" className="fill-gray-900" />
        <rect x="100" y="180" width="200" height="25" className="fill-black" />
        <rect x="120" y="220" width="60" height="8" rx="2" fill="white" opacity="0.7" />
        <rect x="120" y="235" width="40" height="8" rx="2" fill="white" opacity="0.7" />
        <circle cx="270" cy="235" r="15" fill="#FBBF24" opacity="0.8" />
        <circle cx="280" cy="235" r="15" fill="#F59E0B" opacity="0.8" />
      </motion.g>

      {/* Transaction flow lines */}
      {[0, 1, 2].map((i) => (
        <motion.path
          key={i}
          d={`M${120 + i * 80} 130 L${120 + i * 80} 170`}
          className="stroke-gray-900"
          strokeWidth="2"
          strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: 0.8 + i * 0.2, duration: 0.5 }}
        />
      ))}

      {/* Checkmark */}
      <motion.circle
        cx="340"
        cy="80"
        r="20"
        fill="#10B981"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", delay: 1.5 }}
      />
      <motion.path
        d="M330 80 L337 87 L350 74"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ delay: 1.7 }}
      />
    </svg>
  );
}
