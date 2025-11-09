"use client";

import {
  Package,
  Store,
  RefreshCw,
  ShoppingCart,
  Boxes,
  ArrowLeftRight,
  Users,
  BarChart3,
  Tags,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      icon: Package,
      title: "Product variants",
      desc: "Sell products in multiple units (pieces, boxes, cartons, dozens) with the ability to convert between units and separate pricing for each.",
    },
    {
      icon: Store,
      title: "Multiple locations",
      desc: "Manage stores, warehouses, and distribution centers with location-specific pricing and stock levels.",
    },
    {
      icon: RefreshCw,
      title: "Works offline",
      desc: "Keep working even without internet. Everything syncs automatically when you're back online.",
    },
    {
      icon: ShoppingCart,
      title: "Sales & checkout",
      desc: "Fast checkout with customer management, payment tracking, receipts, and credit sales support.",
    },
    {
      icon: Boxes,
      title: "Restocks & suppliers",
      desc: "Manage supplier relationships, create restock orders with approval steps, and track costs.",
    },
    {
      icon: ArrowLeftRight,
      title: "Stock transfers",
      desc: "Request and transfer stock between locations with priority levels and approval workflows.",
    },
    {
      icon: Tags,
      title: "Easy organization",
      desc: "Organize products with categories and labels for easy filtering and reporting.",
    },
    {
      icon: Users,
      title: "Team permissions",
      desc: "Control what each team member can access and do in different locations.",
    },
    {
      icon: BarChart3,
      title: "Reports & insights",
      desc: "Track sales trends, stock movement, adjustments, and payments across all locations.",
    },
  ];

  return (
    <section className="bg-white" id="features">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Everything you need to manage inventory
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            A complete inventory system with multiple location support, product
            variants, offline capability, checkout, and smart workflows built
            for retail and distribution businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, index) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -8,
                  boxShadow:
                    "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                  transition: { duration: 0.15 },
                }}
              >
                <motion.div
                  className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-lg text-blue-600 transition-colors group-hover:bg-blue-100"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.15 },
                  }}
                >
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </motion.div>
                <h3 className="mt-4 text-lg font-bold text-gray-900">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {f.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
