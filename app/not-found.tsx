import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-white">
      <Header />
      <main className="flex-grow flex items-center justify-center px-6 py-12 md:py-24">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <AlertTriangle className="w-24 h-24 text-primary mx-auto mb-4" />
            <h1 className="text-6xl font-bold text-gray-900 mb-2">404</h1>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Page Not Found
            </h2>
          </div>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Oops! The page you&apos;re looking for seems to have wandered off.
            Don&apos;t worry, let&apos;s get you back on track.
          </p>
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-hover transition-colors shadow-lg hover:shadow-xl"
            >
              Go Back Home
            </Link>
            <div>
              <Link
                href="/contact"
                className="text-primary hover:text-primary-hover font-medium transition-colors"
              >
                Contact Support →
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
