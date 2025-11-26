import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StyleGuideContent from "@/components/style-guide/StyleGuideContent";

export const metadata = {
  title: "Style Guide - SyncStore",
  description:
    "Design system and brand guidelines for SyncStore - colors, typography, components, and usage examples.",
};

export default function StyleGuidePage() {
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
