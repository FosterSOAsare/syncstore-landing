export const plans = [
  {
    name: "Free",
    price: "0",
    duration: "for 6 months",
    description: "Perfect for testing and single-location businesses",
    features: [
      "Single branch/location",
      "Core inventory management",
      "Product variants (multi-unit)",
      "Sales & POS",
      "Basic reporting",
      "Up to 500 products",
      "1 user account",
    ],
    limitations: [
      "No syncing between devices",
      "No multi-branch support",
      "No advanced workflows",
      "Limited to 6 months",
    ],
    cta: "Start free trial",
    popular: false,
  },
  {
    name: "Professional",
    price: "49",
    duration: "per month",
    description: "For growing businesses with multiple locations",
    features: [
      "Up to 5 branches/locations",
      "Real-time syncing",
      "Unlimited products",
      "Multi-branch inventory transfers",
      "Stock requests & approvals",
      "Advanced reporting & analytics",
      "Up to 20 user accounts",
      "Customer management & credit tracking",
      "Supplier management",
      "Priority email support",
    ],
    limitations: [],
    cta: "Get started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "149",
    duration: "per month",
    description: "For large businesses and distribution centers",
    features: [
      "Unlimited branches/locations",
      "Real-time syncing",
      "Unlimited products",
      "Multi-branch inventory transfers",
      "Stock requests & approvals",
      "Unlimited users",
      "Advanced role-based permissions",
      "Custom workflows",
      "Advanced analytics & reports",
      "Priority phone & email support",
      "Dedicated account manager",
      "Data export & migration tools",
    ],
    limitations: [],
    cta: "Contact sales",
    popular: false,
  },
];

export const faqs = [
  {
    question: "Can I switch plans anytime?",
    answer:
      "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the charges.",
  },
  {
    question: "What happens after the 6-month free trial?",
    answer:
      "After 6 months, you'll need to upgrade to a paid plan to continue using SyncStore. Your data will be preserved, and you can choose the plan that best fits your needs.",
  },
  {
    question: "Do you offer annual billing?",
    answer:
      "Yes! Contact us for annual billing options. We offer discounts for annual commitments.",
  },
  {
    question: "Is there a setup fee?",
    answer:
      "No setup fees. All plans include onboarding support and documentation to help you get started quickly.",
  },
  {
    question: "Can I host SyncStore on my own servers?",
    answer:
      "Yes! We offer self-hosted deployment options for customers who need full control over their data and infrastructure. This is available as a custom Enterprise solution. Contact our sales team to discuss your requirements and get a custom quote.",
  },
];
