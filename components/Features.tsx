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
      desc: "Sell products in multiple units (pieces, boxes, cartons, dozens) with the ability to convert between units and separate pricing per unit.",
    },
    {
      icon: Store,
      title: "Multi-branch inventory",
      desc: "Support stores, warehouses, and distribution centers with branch-specific pricing and stock levels.",
    },
    {
      icon: RefreshCw,
      title: "Offline-first sync",
      desc: "Work seamlessly offline with automatic background sync when connectivity returns.",
    },
    {
      icon: ShoppingCart,
      title: "Sales & POS",
      desc: "Fast checkout with customer management, payment tracking, receipts, and credit sales support.",
    },
    {
      icon: Boxes,
      title: "Restocks & suppliers",
      desc: "Manage supplier relationships, create restock orders with approval workflows, and track costs.",
    },
    {
      icon: ArrowLeftRight,
      title: "Stock requests & transfers",
      desc: "Request stock between branches with priority levels, approval workflows, and fulfillment tracking.",
    },
    {
      icon: Tags,
      title: "Categories & organization",
      desc: "Organize products with categories, SKUs, and custom attributes for easy filtering and reporting.",
    },
    {
      icon: Users,
      title: "User & permissions",
      desc: "Role-based access control with branch-level permissions for inventory, sales, and admin functions.",
    },
    {
      icon: BarChart3,
      title: "Reports & analytics",
      desc: "Track sales trends, inventory movement, stock adjustments, and payment reconciliation across branches.",
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
            A complete inventory management system with multi-branch support,
            product variants, offline sync, POS, and advanced workflows built
            for retail and distribution businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, index) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                className="group p-6 bg-white rounded-xl border border-gray-200 transition-all duration-200 hover:border-blue-200 hover:shadow-md"
                initial={{ opacity: 0, scale: 0.8, rotateX: -15 }}
                whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
              >
                <motion.div
                  className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-lg text-blue-600"
                  whileHover={{
                    rotate: [0, -10, 10, -10, 0],
                    scale: [1, 1.1, 1.1, 1.1, 1],
                    transition: { duration: 0.5 },
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
