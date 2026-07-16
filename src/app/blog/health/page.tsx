"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Heart } from "lucide-react";

const articles = [
  {
    title: "Side Sleeping with Back Pain? Your Posture May Be Wrong",
    excerpt: "Back pain and numb shoulders when side sleeping are likely posture issues. This article analyzes correct side sleeping posture from an anatomical perspective to help you find the root cause.",
    href: "/blog/health/lower-back-pain-side-sleeping",
    date: "2026-06-01",
    readTime: "5 min",
  },
  {
    title: "Numb Shoulders from Sleeping? 4 Moves for Instant Relief",
    excerpt: "Shoulder numbness from sleeping is a common problem. Here are 4 simple movements you can do right now for immediate relief.",
    href: "/blog/health/shoulder-numbness-relief",
    date: "2026-05-29",
    readTime: "5 min",
  },
  {
    title: "Pregnancy Sleep Position Guide: How to Sleep Comfortably",
    excerpt: "Sleep positions during pregnancy directly affect both mom and baby. This guide provides scientifically-backed comfortable sleeping positions for each trimester.",
    href: "/blog/health/pregnancy-sleep-positions",
    date: "2026-05-26",
    readTime: "6 min",
  },
];

export default function HealthPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-red-50 via-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-1.5 bg-red-100 text-red-700 text-sm font-medium rounded-full">
                Health & Wellness
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              Science-Backed<br />
              <span className="text-red-600">Health Insights</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Back pain, shoulder soreness, sleep quality issues? Scientific analysis to help you find the root cause.
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
            <p className="text-gray-600">Evidence-based health science for better sleep</p>
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
                <Link href={article.href} className="block bg-gray-50 rounded-2xl p-8 hover:bg-red-50 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">
                      Health & Wellness
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
                  <span className="text-red-600 text-sm font-medium flex items-center gap-2">
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
      <section className="py-20 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Understand First, Then Choose Right
            </h2>
            <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
              Health science helps you make informed decisions.
            </p>
            <Link
              href="/guides"
              className="inline-flex items-center px-8 py-3.5 bg-white text-red-600 text-base font-medium rounded-full hover:bg-red-50 transition-colors"
            >
              Buying Guide
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
