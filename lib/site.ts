// Public site settings. NEXT_PUBLIC_* values are inlined into the browser bundle at build time.

// This site's own address (used for canonical URLs, Open Graph, sitemap and robots)
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
).replace(/\/$/, "");

// The onboarding app, where businesses sign up and set up their organization
export const ONBOARDING_URL = (
  process.env.NEXT_PUBLIC_ONBOARDING_URL || "http://localhost:5174"
).replace(/\/$/, "");

export const SIGN_IN_URL = `${ONBOARDING_URL}/`;
export const SIGN_UP_URL = `${ONBOARDING_URL}/register`;

export const SITE_NAME = "SyncStore";
export const SITE_DESCRIPTION =
  "Offline-first inventory management for modern retail and distribution businesses. Manage your inventory, sales, and branches seamlessly.";
