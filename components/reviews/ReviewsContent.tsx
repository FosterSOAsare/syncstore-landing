"use client";

import { Star, Quote, CheckCircle2, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import reviews from "@/data/reviews";

export default function ReviewsContent() {
  // Calculate average rating
  const averageRating =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-white -z-10" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10" />

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-24">
        {/* Header Section (Split Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
              <Star className="w-4 h-4 fill-primary" />
              <span>Trusted by 500+ Businesses</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Stories from <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                African Retailers
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              See how businesses across the continent are using SyncStore to
              simplify operations and grow their profits.
            </p>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent blur-2xl opacity-20 rounded-3xl" />
            <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 grid grid-cols-2 gap-8">
              <div className="text-center border-r border-gray-100">
                <div className="text-4xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
                  4.9 <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                </div>
                <p className="text-sm text-gray-500 font-medium">
                  Average Rating
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
                  98%
                </div>
                <p className="text-sm text-gray-500 font-medium">
                  Retention Rate
                </p>
              </div>
              <div className="col-span-2 border-t border-gray-100 pt-6 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="font-medium">500+ Active Users</span>
                </div>
                <div className="hidden md:block w-1 h-1 rounded-full bg-gray-300" />
                <div className="flex items-center gap-2 text-gray-600">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  <span className="font-medium">Growing Daily</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              className="break-inside-avoid"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                {/* Background Quote Icon */}
                <Quote className="absolute top-6 right-6 w-12 h-12 text-gray-50 opacity-50 group-hover:text-primary/5 transition-colors duration-300" />

                {/* Header */}
                <div className="flex items-start gap-4 mb-6 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-gray-100 overflow-hidden relative flex-shrink-0 border-2 border-white shadow-sm">
                    <Image
                      src={review.image}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg leading-tight">
                      {review.name}
                    </h3>
                    <p className="text-sm text-gray-500 font-medium">
                      {review.role}
                    </p>
                    <p className="text-sm text-primary font-semibold">
                      {review.company}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4 relative z-10">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-600 leading-relaxed mb-6 relative z-10">
                  "{review.review}"
                </p>

                {/* Footer */}
                <div className="pt-4 border-t border-gray-50 flex items-center justify-between text-xs text-gray-400 relative z-10">
                  <span>{review.date}</span>
                  <div className="flex items-center gap-1.5 bg-green-50 px-2 py-1 rounded-full">
                    <CheckCircle2 className="w-3 h-3 text-green-600" />
                    <span className="text-green-700 font-medium">Verified</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to write your own success story?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/demo"
              className="px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-primary-hover hover:shadow-xl transition-all w-full sm:w-auto"
            >
              Start Free Trial
            </a>
            <a
              href="/pricing"
              className="px-8 py-4 bg-white text-gray-700 font-bold rounded-xl border border-gray-200 hover:bg-gray-50 transition-all w-full sm:w-auto"
            >
              View Pricing
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
