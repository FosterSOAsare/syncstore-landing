"use client";

import { Star, Quote, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import reviews from "@/data/reviews";
import Image from "next/image";

export default function ReviewsContent() {
  const averageRating = (
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
  ).toFixed(1);

  return (
    <section className="bg-white min-h-screen relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-gray-50 to-white -z-10" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10" />
      <div className="absolute top-[20%] left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -z-10" />

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-24">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              <Star className="w-4 h-4 fill-primary" />
              Trusted by 500+ Businesses
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              Stories from <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-hover">
                African Retailers
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Discover how businesses across the continent are scaling their
              operations, reducing losses, and growing faster with SyncStore.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <span className="text-6xl font-bold block mb-2">{averageRating}</span>
                <div className="flex gap-1 mb-2 justify-center md:justify-start">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-gray-400">Average Customer Rating</span>
              </div>
              <div className="w-full md:w-px h-px md:h-24 bg-gray-800" />
              <div className="text-center md:text-left">
                <span className="text-6xl font-bold block mb-2">98%</span>
                <span className="text-gray-400 block mb-1">Retention Rate</span>
                <span className="text-sm text-gray-500">Businesses stay with us</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              className="break-inside-avoid"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-2xl p-4 md:p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                {/* Header with Image and Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-gray-50 shadow-sm">
                      <Image
                        src={review.image || "/placeholder-user.jpg"}
                        alt={review.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg leading-tight mb-1">
                        {review.name}
                      </h4>
                      <div className="flex flex-col text-sm">
                        <span className="text-gray-500 font-medium">
                          {review.role}
                        </span>
                        <span className="text-primary font-semibold">
                          {review.company}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 text-green-700 p-1.5 rounded-full" title="Verified Business">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-200"
                      }`}
                    />
                  ))}
                </div>

                {/* Review Content */}
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/5 -z-10 transform -scale-x-100" />
                  <p className="text-gray-700 text-lg leading-relaxed relative z-10">
                    "{review.review}"
                  </p>
                </div>

                {/* Date */}
                <div className="mt-6 pt-6 border-t border-gray-50 flex items-center justify-between text-sm text-gray-400">
                  <span>{review.date}</span>
                  <span className="group-hover:text-primary transition-colors font-medium">Read full story →</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-32 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Join the fastest growing retail network
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/demo"
              className="px-8 py-4 bg-primary text-white text-lg font-bold rounded-xl shadow-lg hover:bg-primary-hover hover:scale-105 transition-all duration-300"
            >
              Start Your Free Trial
            </a>
            <span className="text-gray-400 text-sm sm:text-base">
              or <a href="/contact" className="text-gray-600 hover:text-primary underline decoration-gray-300 hover:decoration-primary underline-offset-4 transition-all">talk to our sales team</a>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
