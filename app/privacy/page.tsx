import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "What information SyncStore collects, how it is stored on your devices and our servers, and the choices you have.",
  alternates: { canonical: "/privacy" },
};

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: "1. Information We Collect",
    body: (
      <ul className="space-y-3 text-gray-600">
        <li className="flex gap-2">
          <span className="text-primary font-bold">•</span>
          <span>
            <strong>Account details:</strong> your name, email address and a
            securely hashed password when you create an account.
          </span>
        </li>
        <li className="flex gap-2">
          <span className="text-primary font-bold">•</span>
          <span>
            <strong>Business data:</strong> the organization, branches,
            products, stock, customers, suppliers, sales and payments you enter
            into the Service.
          </span>
        </li>
        <li className="flex gap-2">
          <span className="text-primary font-bold">•</span>
          <span>
            <strong>Demo requests:</strong> the name, email, phone number,
            company and details you send through our demo request form.
          </span>
        </li>
        <li className="flex gap-2">
          <span className="text-primary font-bold">•</span>
          <span>
            <strong>Sync records:</strong> when a device sends changes, we
            record when they were made and received so data stays consistent
            across devices.
          </span>
        </li>
      </ul>
    ),
  },
  {
    title: "2. How We Use Your Information",
    body: (
      <p className="text-gray-600 leading-relaxed">
        We use your information to provide and secure the Service, keep your
        devices and branches in sync, respond to demo requests and support
        questions, and tell you about important changes to the Service. We do
        not sell your information.
      </p>
    ),
  },
  {
    title: "3. Offline Data on Your Devices",
    body: (
      <p className="text-gray-600 leading-relaxed">
        SyncStore works offline, so a copy of your business data is kept in the
        browser on each device you sign in with. Anyone with access to that
        device and browser profile may be able to see it. Sign out and clear
        the browser data on shared or lost devices.
      </p>
    ),
  },
  {
    title: "4. Sharing",
    body: (
      <p className="text-gray-600 leading-relaxed">
        We share information only with service providers that help us run the
        Service (such as hosting and database providers), and only as needed
        for that purpose, or when required by law.
      </p>
    ),
  },
  {
    title: "5. Data Retention",
    body: (
      <p className="text-gray-600 leading-relaxed">
        We keep your account and business data for as long as your account is
        active. Demo requests are kept for as long as needed to follow up with
        you. You can ask us to delete your information at any time.
      </p>
    ),
  },
  {
    title: "6. Your Choices",
    body: (
      <p className="text-gray-600 leading-relaxed">
        You can view and update your organization details in the app, and
        contact us to access, correct or delete your personal information.
      </p>
    ),
  },
  {
    title: "7. Changes to This Policy",
    body: (
      <p className="text-gray-600 leading-relaxed">
        We may update this policy from time to time. We will post the new
        version on this page and update the date above.
      </p>
    ),
  },
  {
    title: "8. Contact Us",
    body: (
      <p className="text-gray-600 leading-relaxed">
        If you have questions about this policy, contact us at{" "}
        <a
          href="mailto:fostersoasare@gmail.com"
          className="text-primary hover:text-primary font-medium"
        >
          fostersoasare@gmail.com
        </a>
        .
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="py-10 md:py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: October 7, 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-6 md:py-16">
          <div className="max-w-4xl mx-auto px-6">
            {sections.map((section) => (
              <div key={section.title} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {section.title}
                </h2>
                {section.body}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
