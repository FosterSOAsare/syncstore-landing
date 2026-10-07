import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ReviewsContent from "@/components/reviews/ReviewsContent";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description:
    "What retailers and distributors say about running their shops and branches with SyncStore.",
  alternates: { canonical: "/reviews" },
  openGraph: {
    title: "Customer Reviews | SyncStore",
    description:
      "What retailers and distributors say about running their shops and branches with SyncStore.",
    url: "/reviews",
  },
};

export default function ReviewsPage() {
  return (
    <main>
      <Header />
      <ReviewsContent />
      <Footer />
    </main>
  );
}
