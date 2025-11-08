import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Star } from "lucide-react";
import reviews from "@/data/reviews";

export default function ReviewsPage() {
  const averageRating = (
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
  ).toFixed(1);

  return (
    <main>
      <Header />
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Customer Reviews
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              See what our customers have to say about their experience with
              SyncStore.
            </p>

            {/* Rating Summary */}
            <div className="inline-flex flex-col items-center gap-2 bg-blue-50 px-8 py-6 rounded-xl">
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
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
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
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-blue-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join thousands of satisfied customers
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Start managing your inventory with confidence today. No credit
              card required.
            </p>
            <a
              href="/signin"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white text-base font-medium rounded-lg shadow-sm hover:bg-blue-700 transition-colors"
            >
              Start for free
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
