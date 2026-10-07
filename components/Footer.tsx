"use client";

import Link from "next/link";
import { Twitter, Linkedin, Github, Facebook, Mail, Phone } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div>
            <h3 className="text-gray-900 text-xl font-bold mb-4">SyncStore</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Offline-first inventory management for modern retail and
              distribution businesses.
            </p>
            <div className="flex gap-4">
              <a
                href="#twitter"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#linkedin"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#github"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="#facebook"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="text-gray-900 text-sm font-bold mb-4">Product</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className={`hover:text-primary transition-colors ${
                    isActive("/")
                      ? "text-primary font-semibold"
                      : "text-gray-600"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className={`hover:text-primary transition-colors ${
                    isActive("/pricing")
                      ? "text-primary font-semibold"
                      : "text-gray-600"
                  }`}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/reviews"
                  className={`hover:text-primary transition-colors ${
                    isActive("/reviews")
                      ? "text-primary font-semibold"
                      : "text-gray-600"
                  }`}
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className={`hover:text-primary transition-colors ${
                    isActive("/faq")
                      ? "text-primary font-semibold"
                      : "text-gray-600"
                  }`}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`hover:text-primary transition-colors ${
                    isActive("/contact")
                      ? "text-primary font-semibold"
                      : "text-gray-600"
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-gray-900 text-sm font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-600" />
                <a
                  href="mailto:fostersoasare@gmail.com"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  fostersoasare@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-600" />
                <a
                  href="tel:+1234567890"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  +233 55 052 9015
                </a>
              </li>
              <li className="text-gray-600 mt-4">
                <p className="text-xs">Monday - Friday</p>
                <p className="text-xs">9:00 AM - 9:00 PM GMT</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} SyncStore. All rights reserved.
            </p>
            <div className="text-sm flex gap-6">
              <Link
                href="/terms"
                className={`hover:text-primary transition-colors ${
                  isActive("/terms")
                    ? "text-primary font-semibold"
                    : "text-gray-600"
                }`}
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className={`hover:text-primary transition-colors ${
                  isActive("/privacy")
                    ? "text-primary font-semibold"
                    : "text-gray-600"
                }`}
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
