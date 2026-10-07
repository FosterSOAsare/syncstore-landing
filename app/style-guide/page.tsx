import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StyleGuideContent from "@/components/style-guide/StyleGuideContent";

// Internal design reference: only available while developing, never indexed
export const metadata: Metadata = {
  title: "Style Guide",
  description:
    "Design system and brand guidelines for SyncStore - colors, typography, components, and usage examples.",
  robots: { index: false, follow: false },
};

export default function StyleGuidePage() {
  if (process.env.NODE_ENV === "production") {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="bg-white">
        <StyleGuideContent />
      </main>
      <Footer />
    </>
  );
}
