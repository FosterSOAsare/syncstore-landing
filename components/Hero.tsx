"use client";

import {
  WifiOff,
  Building2,
  Package,
  RefreshCw,
  CreditCard,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Floating icons */}
      <motion.div
        className="absolute z-[15] hover:bg-primary text-blue-500 hover:text-white hover:cursor-pointer top-2 md:top-20 left-4 md:left-[8%] p-3 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: 1,
          y: [0, -10, 0],
        }}
        transition={{
          opacity: { duration: 0.5, delay: 0.2 },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <Package className="w-6 h-6" />
      </motion.div>
      <motion.div
        className="absolute z-[15] hover:bg-primary text-blue-500 hover:text-white hover:cursor-pointer top-8 md:top-32 right-6 md:right-[15%] p-3 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm rotate-12"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: [1, 1.1, 1],
          rotate: [12, 18, 12],
        }}
        transition={{
          opacity: { duration: 0.5, delay: 0.4 },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <Building2 className="w-7 h-7" />
      </motion.div>
      <motion.div
        className="absolute z-[15] hover:bg-primary text-blue-500 hover:text-white hover:cursor-pointer top-70 md:top-80 left-8 md:left-[15%] p-3 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm -rotate-12"
        initial={{ opacity: 0, x: -20 }}
        animate={{
          opacity: 1,
          x: [0, 10, 0],
          y: [0, -8, 0],
        }}
        transition={{
          opacity: { duration: 0.5, delay: 0.6 },
          x: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <WifiOff className="w-6 h-6" />
      </motion.div>
      <motion.div
        className="absolute z-[15] hover:bg-primary text-blue-500 hover:text-white hover:cursor-pointer top-[45%] md:top-[40%] right-2 md:right-[2%] p-3 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm rotate-3"
        initial={{ opacity: 0, x: 20 }}
        animate={{
          opacity: 1,
          x: [0, -10, 0],
          rotate: [3, -3, 3],
        }}
        transition={{
          opacity: { duration: 0.5, delay: 0.8 },
          x: { duration: 3.2, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 3.2, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <RefreshCw className="w-6 h-6" />
      </motion.div>

      <motion.div
        className="absolute z-[15] hover:bg-primary text-blue-500 hover:text-white hover:cursor-pointer top-[17%] md:top-[25%] right-4 md:right-[15%] p-3 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm rotate-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: 1,
          y: [0, 12, 0],
          rotate: [6, 12, 6],
        }}
        transition={{
          opacity: { duration: 0.5, delay: 0.3 },
          y: { duration: 3.8, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 3.8, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <CreditCard className="w-6 h-6" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 flex flex-col justify-center items-center gap-16 relative z-10">
        <div className="w-full flex flex-col items-center text-center">
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Works perfectly offline
          </motion.div>
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold max-w-4xl text-gray-900 md:leading-[80px] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Complete inventory control across every branch
          </motion.h1>
          <motion.p
            className="mt-6 text-xl text-center text-gray-600 max-w-3xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Manage inventory, sales, and operations with confidence — even
            without internet. Our offline-first system keeps your business
            running smoothly across stores, warehouses, and distribution centers
            while syncing seamlessly when you're back online.
          </motion.p>

          <motion.div
            className="mt-6 flex flex-wrap justify-center items-center gap-3 text-sm text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              { icon: WifiOff, text: "Works offline everywhere" },
              { icon: Building2, text: "Multi-branch & warehouse support" },
              { icon: Package, text: "Multi-unit product variants" },
              { icon: RefreshCw, text: "Real-time sync" },
              { icon: CreditCard, text: "Built-in POS & payments" },
            ].map((badge, index) => (
              <motion.span
                key={badge.text}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full cursor-pointer hover:bg-blue-50 hover:border-blue-200 transition-all"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              >
                <badge.icon className="w-4 h-4" />
                {badge.text}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a
              href="/demo"
              className="inline-flex items-center justify-center px-14 py-4 bg-blue-600 text-white text-base font-medium rounded-lg shadow-sm hover:bg-blue-700 transition-colors w-full sm:w-auto"
            >
              Request Demo
            </a>

            <a
              href="mailto:support@syncstore.com"
              className="inline-flex items-center justify-center px-14 py-4 bg-white border-2 border-gray-200 text-gray-900 text-base font-medium rounded-lg hover:bg-gray-50 transition-colors w-full sm:w-auto"
            >
              Contact Sales
            </a>
          </motion.div>

          <motion.p
            className="mt-6 text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            Free for 6 months • Setup by our team
          </motion.p>
        </div>

        <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0, scale: 0, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 1.5,
            delay: 0.6,
            ease: [0.34, 1.56, 0.64, 1],
          }}
        >
          <img
            src="/screenshot.jpg"
            alt="SyncStore hero"
            className="max-w-full h-auto rounded-xl shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
