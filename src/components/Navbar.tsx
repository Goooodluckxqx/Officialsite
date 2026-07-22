"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Side-Sleeping Pillow", href: "/products/side-sleeping-pillow" },
      { label: "Weighted Heated Eye Mask", href: "/products/weighted-heated-eye-mask" },
    ],
  },
  { label: "Buying Guide", href: "/guides" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-chocolate text-cream text-center py-2 text-sm tracking-wide">
        <span className="font-medium">2026 New Release:</span>
        NazzleNest Weighted Heated Eye Mask — Warmth, Weight, and True Blackout
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-cream/95 backdrop-blur-md shadow-sm" : "bg-cream"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="NazzleNest"
                className="h-8 w-auto"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setProductsOpen(true)}
                    onMouseLeave={() => setProductsOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center gap-1 text-sm font-medium text-chocolate/70 hover:text-chocolate transition-colors"
                    >
                      {link.label}
                      <ChevronDown className="w-4 h-4" />
                    </Link>
                    <AnimatePresence>
                      {productsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-56"
                        >
                          <div className="bg-cream rounded-xl shadow-lg border border-greige/10 p-2">
                            {link.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                className="block px-4 py-2.5 text-sm text-chocolate/80 hover:bg-oat/10 hover:text-milktea-dark rounded-lg transition-colors"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm font-medium text-chocolate/70 hover:text-chocolate transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <Link
                href="/products"
                className="hidden lg:inline-flex items-center px-5 py-2.5 bg-chocolate text-cream text-sm font-medium rounded-full hover:bg-chocolate-light transition-colors"
              >
                Shop Now
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-chocolate"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-cream border-t border-greige/20 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) =>
                  link.children ? (
                    <div key={link.label} className="py-2">
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-3 text-base font-medium text-chocolate/80 hover:bg-oat/10 rounded-lg transition-colors"
                      >
                        {link.label}
                      </Link>
                      <div className="pl-6 space-y-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block px-4 py-2 text-sm text-chocolate/70 hover:bg-oat/10 rounded-lg transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-3 text-base font-medium text-chocolate/80 hover:bg-oat/10 rounded-lg transition-colors"
                    >
                      {link.label}
                    </Link>
                  )
                )}
                <div className="pt-2">
                  <Link
                    href="/products"
                    onClick={() => setMobileOpen(false)}
                    className="block w-full text-center px-5 py-3 bg-chocolate text-cream text-sm font-medium rounded-full"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
