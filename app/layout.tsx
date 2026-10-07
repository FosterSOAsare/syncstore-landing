import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Defaults for every page; pages set their own title, description and canonical URL
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SyncStore - Offline-First Inventory Management",
    template: "%s | SyncStore",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  icons: {
    icon: "/logo-md.png",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: "SyncStore - Offline-First Inventory Management",
    description: SITE_DESCRIPTION,
    url: "/",
    locale: "en_US",
    images: [{ url: "/logo-md.png", alt: "SyncStore logo" }],
  },
  twitter: {
    card: "summary",
    title: "SyncStore - Offline-First Inventory Management",
    description: SITE_DESCRIPTION,
    images: ["/logo-md.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
