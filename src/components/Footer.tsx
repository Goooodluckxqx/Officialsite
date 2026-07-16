"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  blog: [
    { label: "Health & Wellness", href: "/blog/health" },
    { label: "Relief Methods", href: "/blog/relief" },
    { label: "Product Education", href: "/blog/education" },
  ],
  guides: [
    { label: "Buying Guide", href: "/guides" },
    { label: "Size Guide", href: "/guides/how-to-choose/size-guide" },
    { label: "Brand Reviews", href: "/guides/reviews" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Brand Philosophy", href: "/about#brand" },
    { label: "Contact Us", href: "#" },
  ],
  support: [
    { label: "FAQ", href: "#faq" },
    { label: "Safety Certifications", href: "/guides#safety" },
    { label: "Care & Maintenance", href: "/guides#care" },
    { label: "Return Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-serif text-2xl lg:text-3xl font-semibold mb-3">
                Stay Connected
              </h3>
              <p className="text-gray-400">
                Subscribe for the latest product updates, tips, and exclusive offers
              </p>
            </div>
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-700 rounded-full text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <button className="px-6 py-4 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Blog */}
          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider text-gray-400 mb-4">Health & Wellness</h4>
            <ul className="space-y-3">
              {footerLinks.blog.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider text-gray-400 mb-4">Buying Guide</h4>
            <ul className="space-y-3">
              {footerLinks.guides.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider text-gray-400 mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider text-gray-400 mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 NazzleNest. All Rights Reserved. | www.nazzlenest.com
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span>GB18401-2010 Class A</span>
              <span>·</span>
              <span>FDA 21CFR177.1640</span>
              <span>·</span>
              <span>PCM Temperature Control Technology</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
