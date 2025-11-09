"use client";

import { usePathname } from "next/navigation";
import { PackagePlus } from "lucide-react";

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
          <a href="/" className="flex items-center gap-2">
            <PackagePlus className="w-8 h-8 text-primary" />
            <span className="font-semibold text-lg text-primary">
              SyncStore
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <a
              href="/"
              className={`hover:text-gray-900 ${
                isActive("/") ? "text-primary font-semibold" : ""
              }`}
            >
              Home
            </a>
            <a
              href="/pricing"
              className={`hover:text-gray-900 ${
                isActive("/pricing") ? "text-primary font-semibold" : ""
              }`}
            >
              Pricing
            </a>
            <a
              href="/reviews"
              className={`hover:text-gray-900 ${
                isActive("/reviews") ? "text-primary font-semibold" : ""
              }`}
            >
              Reviews
            </a>
            <a
              href="/faq"
              className={`hover:text-gray-900 ${
                isActive("/faq") ? "text-primary font-semibold" : ""
              }`}
            >
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/demo"
              className="text-sm px-4 py-2 bg-primary text-white rounded-md shadow hover:bg-primary"
            >
              Request Demo
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 py-3">
            <nav className="flex items-center gap-4 text-sm overflow-x-auto">
              <a
                href="/"
                className={`hover:text-gray-900 whitespace-nowrap ${
                  isActive("/") ? "text-primary font-semibold" : "text-gray-600"
                }`}
              >
                Home
              </a>
              <span className="text-gray-300">|</span>
              <a
                href="/pricing"
                className={`hover:text-gray-900 whitespace-nowrap ${
                  isActive("/pricing")
                    ? "text-primary font-semibold"
                    : "text-gray-600"
                }`}
              >
                Pricing
              </a>
              <span className="text-gray-300">|</span>
              <a
                href="/reviews"
                className={`hover:text-gray-900 whitespace-nowrap ${
                  isActive("/reviews")
                    ? "text-primary font-semibold"
                    : "text-gray-600"
                }`}
              >
                Reviews
              </a>
              <span className="text-gray-300">|</span>
              <a
                href="/faq"
                className={`hover:text-gray-900 whitespace-nowrap ${
                  isActive("/faq")
                    ? "text-primary font-semibold"
                    : "text-gray-600"
                }`}
              >
                FAQ
              </a>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
