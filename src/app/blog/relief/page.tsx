"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Activity } from "lucide-react";

const articles = [
  {
    title: "How to Relieve Back Pain? A Must-Read Guide for Side Sleepers",
    excerpt: "Back pain is not trivial — long-term neglect may affect spinal health. This article provides 5 immediately effective relief methods you can use tonight.",
    href: "/blog/relief/lower-back-pain-relief",
    date: "2026-06-01",
    readTime: "6 min",
  },
  {
    title: "Correct Side Sleeping Posture: Orthopedic Doctor Recommended",
    excerpt: "Incorrect side sleeping posture may lead to herniated discs. Check out the correct side sleeping posture recommended by orthopedic doctors — are you sleeping right?",
    href: "/blog/relief/side-sleeping-posture",
    date: "2026-05-29",
    readTime: "5 min",
  },
  {
    title: "5 Exercises to Improve Sleep, Try Them Tonight",
    excerpt: "Do these simple exercises before bed to significantly improve sleep quality and help you sleep soundly through the night.",
    href: "/blog/relief/improve-sleep-exercises",
    date: "2026-05-26",
    readTime: "4 min",
  },
];

export default function ReliefPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-green-50 via-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                Relief Methods
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              Immediate &<br />
              <span className="text-green-600">Effective Relief</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              From posture adjustments to tool selection, practical methods to relieve pain and improve sleep.
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
            <p className="text-gray-600">Practical relief methods for immediate improvement</p>
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
                <Link href={article.href} className="block bg-gray-50 rounded-2xl p-8 hover:bg-green-50 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                      Relief Methods
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
                  <span className="text-green-600 text-sm font-medium flex items-center gap-2">
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
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              After Relief, Get Good Support
            </h2>
            <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
              From relief to prevention, we need the right support tools.
            </p>
            <Link
              href="/guides"
              className="inline-flex items-center px-8 py-3.5 bg-white text-green-600 text-base font-medium rounded-full hover:bg-green-50 transition-colors"
            >
              Buying Guide
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
