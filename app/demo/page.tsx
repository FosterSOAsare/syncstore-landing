import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DemoContent from "@/components/demo/DemoContent";

export const metadata: Metadata = {
  title: "Request a Demo",
  description:
    "Book a personalized SyncStore walkthrough: see offline sales, stock across branches and syncing in action.",
  alternates: { canonical: "/demo" },
  openGraph: {
    title: "Request a Demo | SyncStore",
    description:
      "Book a personalized SyncStore walkthrough: see offline sales, stock across branches and syncing in action.",
    url: "/demo",
  },
};

export default function DemoPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <DemoContent />
      </main>
      <Footer />
    </>
  );
}
