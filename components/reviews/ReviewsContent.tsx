"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";
import reviews from "@/data/reviews";

export default function ReviewsContent() {
  const averageRating = (
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
  ).toFixed(1);

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Customer Reviews
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            See what our customers have to say about their experience with
            SyncStore.
          </p>

          {/* Rating Summary */}
          <motion.div
            className="inline-flex flex-col items-center gap-2 bg-primary/5 px-8 py-6 rounded-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-2">
              <span className="text-4xl font-bold text-gray-900">
                {averageRating}
              </span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Based on {reviews.length} reviews
            </p>
          </motion.div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              whileHover={{
                y: -4,
                boxShadow:
                  "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                transition: { duration: 0.15 },
              }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{review.review}"
              </p>

              {/* Reviewer Info */}
              <div className="pt-4 border-t border-gray-200">
                <p className="font-semibold text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-600">
                  {review.role} at {review.company}
                </p>
                <p className="text-xs text-gray-500 mt-2">{review.date}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center bg-primary/5 rounded-2xl p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join thousands of satisfied customers
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Start managing your inventory with confidence today. No credit card
            required.
          </p>
          <a
            href="/signin"
            className="inline-flex items-center px-8 py-4 bg-primary text-white text-base font-medium rounded-lg shadow-sm hover:bg-primary transition-colors"
          >
            Start for free
          </a>
        </motion.div>
      </div>
    </section>
  );
}
