"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";

const articles = [
  {
    title: "Are Side-Sleeper Pillows Useful? Science Tells You",
    excerpt: "Side-sleeper pillows come in all shapes and sizes — do they actually work? We give you the answer from medical, ergonomic, and user data perspectives.",
    href: "/blog/education/is-side-sleeper-pillow-useful",
    date: "2026-06-01",
    readTime: "8 min",
  },
  {
    title: "What Is a Side-Sleeper Pillow? Why You Need One",
    excerpt: "Side-sleeper pillows are designed specifically for side sleepers. Learn what makes them different and why they might be the sleep upgrade you need.",
    href: "/blog/education/what-is-side-sleeper-pillow",
    date: "2026-05-29",
    readTime: "5 min",
  },
  {
    title: "U-Pillow vs Side-Sleeper Pillow: Full Comparison",
    excerpt: "U-pillows and side-sleeper pillows serve different purposes. This comprehensive comparison helps you understand which one fits your needs.",
    href: "/blog/education/u-pillow-vs-side-sleeper-pillow",
    date: "2026-05-26",
    readTime: "6 min",
  },
];

export default function EducationPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                Product Education
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              Know Before You<br />
              <span className="text-blue-600">Buy</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Side-sleeper pillows, U-shaped pillows, memory foam pillows — which one is right for you?
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles List */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">All Articles</h2>
            <p className="text-gray-600">Product knowledge for smart choices</p>
          </motion.div>

          <div className="space-y-8">
            {articles.map((article, i) => (
              <motion.div
                key={article.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={article.href} className="block bg-gray-50 rounded-2xl p-8 hover:bg-blue-50 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                      Product Education
                    </span>
                    <span className="text-gray-400 text-xs">{article.date}</span>
                    <span className="text-gray-400 text-xs">·</span>
                    <span className="text-gray-400 text-xs">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <span className="text-blue-600 text-sm font-medium flex items-center gap-2">
                    Read Full Article
                    <ArrowLeft className="w-4 h-4 rotate-180" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Knowledge Equips You to Choose
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              From education to selection, we help you make informed decisions.
            </p>
            <Link
              href="/guides"
              className="inline-flex items-center px-8 py-3.5 bg-white text-blue-600 text-base font-medium rounded-full hover:bg-blue-50 transition-colors"
            >
              Buying Guide
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
