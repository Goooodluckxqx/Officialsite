"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, Activity, BookOpen, ArrowRight } from "lucide-react";

const blogCategories = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Back pain, shoulder soreness, sleep quality issues? Scientific analysis to help you find the root cause.",
    href: "/blog/health",
    color: "red",
    articles: [
      { title: "Side Sleeping with Back Pain? Your Posture May Be Wrong", href: "/blog/health/lower-back-pain-side-sleeping" },
      { title: "Numb Shoulders from Sleeping? 4 Moves for Instant Relief", href: "/blog/health/shoulder-numbness-relief" },
      { title: "Pregnancy Sleep Position Guide: How to Sleep Comfortably", href: "/blog/health/pregnancy-sleep-positions" },
    ],
  },
  {
    icon: Activity,
    title: "Relief Methods",
    description: "From posture adjustments to tool selection, practical methods to relieve pain and improve sleep.",
    href: "/blog/relief",
    color: "green",
    articles: [
      { title: "How to Relieve Back Pain? A Must-Read Guide for Side Sleepers", href: "/blog/relief/lower-back-pain-relief" },
      { title: "Correct Side Sleeping Posture: Orthopedic Doctor Recommended", href: "/blog/relief/side-sleeping-posture" },
      { title: "5 Exercises to Improve Sleep, Try Them Tonight", href: "/blog/relief/improve-sleep-exercises" },
    ],
  },
  {
    icon: BookOpen,
    title: "Product Education",
    description: "Side-sleeper pillows, U-shaped pillows, memory foam pillows — which one is right for you?",
    href: "/blog/education",
    color: "blue",
    articles: [
      { title: "Are Side-Sleeper Pillows Useful? Science Tells You", href: "/blog/education/is-side-sleeper-pillow-useful" },
      { title: "What Is a Side-Sleeper Pillow? Why You Need One", href: "/blog/education/what-is-side-sleeper-pillow" },
      { title: "U-Pillow vs Side-Sleeper Pillow: Full Comparison", href: "/blog/education/u-pillow-vs-side-sleeper-pillow" },
    ],
  },
];

const featuredArticles = [
  {
    title: "Side Sleeping with Back Pain? Your Posture May Be Wrong",
    excerpt: "Back pain and numb shoulders when side sleeping are likely posture issues. This article analyzes correct side sleeping posture from an anatomical perspective to help you find the root cause.",
    href: "/blog/health/lower-back-pain-side-sleeping",
    category: "Health & Wellness",
    readTime: "5 min",
  },
  {
    title: "Are Side-Sleeper Pillows Useful? Science Tells You",
    excerpt: "Side-sleeper pillows come in all shapes and sizes — do they actually work? We give you the answer from medical, ergonomic, and user data perspectives.",
    href: "/blog/education/is-side-sleeper-pillow-useful",
    category: "Product Education",
    readTime: "8 min",
  },
  {
    title: "How to Relieve Back Pain? A Must-Read Guide for Side Sleepers",
    excerpt: "Back pain is not trivial — long-term neglect may affect spinal health. This article provides 5 immediately effective relief methods you can use tonight.",
    href: "/blog/relief/lower-back-pain-relief",
    category: "Relief Methods",
    readTime: "6 min",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-cream">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-oat/10 via-cream to-oat/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-1.5 bg-lavender/10 text-milktea-dark text-sm font-medium rounded-full">
                Health & Wellness · Product Education
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-chocolate mb-6 leading-tight">
              Sleep Well,<br />
              <span className="text-milktea">Starting with Understanding</span>
            </h1>
            <p className="text-lg md:text-xl text-chocolate/70 max-w-2xl mx-auto leading-relaxed">
              From causes of back pain to relief methods, from posture correction to tool selection,
              professional science to help you make informed decisions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-12 bg-cream border-b border-greige/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-chocolate mb-4">
              Featured Articles
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredArticles.map((article, i) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={article.href} className="block bg-oat/10 rounded-2xl p-6 hover:bg-oat/10 transition-colors h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-lavender/10 text-milktea-dark text-xs font-medium rounded-full">
                      {article.category}
                    </span>
                    <span className="text-greige text-xs">{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-chocolate mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-chocolate/70 text-sm leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-chocolate mb-4">
              Content Categories
            </h2>
            <p className="text-chocolate/70 max-w-2xl mx-auto">
              From health science to product education, comprehensive help for your sleep health
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-oat/10 rounded-2xl p-8"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-12 h-12 bg-${category.color}-100 rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <category.icon className={`w-6 h-6 text-${category.color}-600`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-chocolate mb-2">{category.title}</h3>
                    <p className="text-chocolate/70 text-sm leading-relaxed">{category.description}</p>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {category.articles.map((article, i) => (
                    <li key={i}>
                      <Link
                        href={article.href}
                        className="text-sm text-chocolate/80 hover:text-milktea-dark transition-colors line-clamp-1"
                      >
                        {article.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href={category.href}
                  className={`inline-flex items-center gap-2 text-sm font-medium text-${category.color}-600 hover:gap-3 transition-all`}
                >
                  View All
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-milktea">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-cream mb-6">
              Found What You Need? Shop Now
            </h2>
            <p className="text-cream/80 text-lg mb-8 max-w-2xl mx-auto">
              From science to shopping, we want to help you make informed choices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/guides"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-cream text-milktea text-base font-medium rounded-full hover:bg-oat/10 transition-colors"
              >
                Buying Guide
              </Link>
              <Link
                href="/#products"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-milktea-dark text-cream text-base font-medium rounded-full hover:bg-milktea-dark transition-colors border border-lavender"
              >
                Shop Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
