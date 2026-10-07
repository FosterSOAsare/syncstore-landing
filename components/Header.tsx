"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PackagePlus } from "lucide-react";
import { SIGN_IN_URL, SIGN_UP_URL } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <>
      <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <PackagePlus className="w-8 h-8 text-primary" />
            <span className="font-semibold text-lg text-primary">
              SyncStore
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <Link
              href="/"
              className={`hover:text-gray-900 ${
                isActive("/") ? "text-primary font-semibold" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/pricing"
              className={`hover:text-gray-900 ${
                isActive("/pricing") ? "text-primary font-semibold" : ""
              }`}
            >
              Pricing
            </Link>
            <Link
              href="/reviews"
              className={`hover:text-gray-900 ${
                isActive("/reviews") ? "text-primary font-semibold" : ""
              }`}
            >
              Reviews
            </Link>
            <Link
              href="/faq"
              className={`hover:text-gray-900 ${
                isActive("/faq") ? "text-primary font-semibold" : ""
              }`}
            >
              FAQ
            </Link>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Sign in / sign up live in the onboarding app */}
            <a
              href={SIGN_IN_URL}
              className="text-sm px-3 py-2 text-gray-700 hover:text-gray-900 font-medium"
            >
              Sign in
            </a>
            <a
              href={SIGN_UP_URL}
              className="hidden sm:inline-block text-sm px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/5 font-medium"
            >
              Get started
            </a>
            <Link
              href="/demo"
              className="text-sm px-4 py-2 bg-primary text-white rounded-md shadow hover:bg-primary"
            >
              Request Demo
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 py-3">
            <nav className="flex items-center gap-4 text-sm overflow-x-auto">
              <Link
                href="/"
                className={`hover:text-gray-900 whitespace-nowrap ${
                  isActive("/") ? "text-primary font-semibold" : "text-gray-600"
                }`}
              >
                Home
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                href="/pricing"
                className={`hover:text-gray-900 whitespace-nowrap ${
                  isActive("/pricing")
                    ? "text-primary font-semibold"
                    : "text-gray-600"
                }`}
              >
                Pricing
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                href="/reviews"
                className={`hover:text-gray-900 whitespace-nowrap ${
                  isActive("/reviews")
                    ? "text-primary font-semibold"
                    : "text-gray-600"
                }`}
              >
                Reviews
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                href="/faq"
                className={`hover:text-gray-900 whitespace-nowrap ${
                  isActive("/faq")
                    ? "text-primary font-semibold"
                    : "text-gray-600"
                }`}
              >
                FAQ
              </Link>
              <span className="text-gray-300 sm:hidden">|</span>
              <a
                href={SIGN_UP_URL}
                className="sm:hidden whitespace-nowrap text-primary font-semibold"
              >
                Get started
              </a>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
