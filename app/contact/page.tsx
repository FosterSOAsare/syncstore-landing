import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, Clock, CalendarCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the SyncStore team by email or phone, or book a personalized demo.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <section className="py-10 md:py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600">
              Questions about SyncStore, your account or pricing? We&apos;re
              happy to help.
            </p>
          </div>
        </section>

        <section className="py-6 md:py-16">
          <div className="max-w-4xl mx-auto px-6 grid gap-6 md:grid-cols-2">
            <a
              href="mailto:fostersoasare@gmail.com"
              className="p-6 rounded-2xl border border-gray-200 hover:border-primary/50 hover:shadow-md transition-all"
            >
              <Mail className="w-8 h-8 text-primary mb-4" />
              <h2 className="text-lg font-bold text-gray-900 mb-1">Email</h2>
              <p className="text-gray-600">fostersoasare@gmail.com</p>
            </a>

            <a
              href="tel:+1234567890"
              className="p-6 rounded-2xl border border-gray-200 hover:border-primary/50 hover:shadow-md transition-all"
            >
              <Phone className="w-8 h-8 text-primary mb-4" />
              <h2 className="text-lg font-bold text-gray-900 mb-1">Phone</h2>
              <p className="text-gray-600">+233 55 052 9015</p>
            </a>

            <div className="p-6 rounded-2xl border border-gray-200">
              <Clock className="w-8 h-8 text-primary mb-4" />
              <h2 className="text-lg font-bold text-gray-900 mb-1">Hours</h2>
              <p className="text-gray-600">Monday - Friday</p>
              <p className="text-gray-600">9:00 AM - 9:00 PM GMT</p>
            </div>

            <Link
              href="/demo"
              className="p-6 rounded-2xl bg-primary/5 border border-primary/20 hover:border-primary/50 hover:shadow-md transition-all"
            >
              <CalendarCheck className="w-8 h-8 text-primary mb-4" />
              <h2 className="text-lg font-bold text-gray-900 mb-1">
                Book a demo
              </h2>
              <p className="text-gray-600">
                See SyncStore in action with a personalized walkthrough →
              </p>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
