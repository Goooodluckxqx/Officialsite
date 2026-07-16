"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Ruler, Scale, Baby, GitCompare } from "lucide-react";

const guideCategories = [
  {
    icon: Ruler,
    title: "Size Selection Guide",
    description: "105/120/140cm — how to choose the right size for you? Based on height, weight, and usage scenarios, we help you choose right, not expensive.",
    links: [
      { title: "105/120/140cm — How to Choose?", href: "/guides/how-to-choose/size-guide" },
      { title: "Adjustable Strap Design: Why Firmness Matters", href: "/guides/how-to-choose/firmness-guide" },
    ],
    color: "blue",
  },
  {
    icon: Baby,
    title: "Pregnancy Pillow Buying Guide",
    description: "Pregnancy sleep safety comes first. Class A standards, FDA certification, belly support design — we help you choose safe, exclusive pregnancy support.",
    links: [
      { title: "Pregnancy Pillow Buying: Safety First", href: "/guides/how-to-choose/pregnancy-guide" },
      { title: "Pregnancy Belly Support: How to Choose Safely?", href: "/guides/how-to-choose/pregnancy-safety" },
    ],
    color: "pink",
  },
  {
    icon: Scale,
    title: "Category Comparison Guide",
    description: "Side-sleeper pillow vs U-pillow vs regular pillow, multi-dimensional comparison to help you find the most suitable sleep support tool.",
    links: [
      { title: "Side-Sleeper Pillow vs U-Pillow, Which Is Better?", href: "/guides/reviews/side-sleeper-vs-u-pillow" },
      { title: "2026 Side-Sleeper Pillow Comparison Review", href: "/guides/reviews/2026-comparison" },
    ],
    color: "green",
  },
  {
    icon: GitCompare,
    title: "Brand Review Guide",
    description: "NazzleNest vs Atour Planet vs other brands, real reviews to help you make informed choices.",
    links: [
      { title: "NazzleNest Real Review: 10,000+ Users' 4.9-Star Experience", href: "/guides/reviews/nazzlenest-review" },
      { title: "NazzleNest vs Atour Planet: Full Comparison", href: "/guides/reviews/nazzlenest-vs-yaduo" },
    ],
    color: "purple",
  },
];

const quickLinks = [
  { title: "Best Side-Sleeper Pillow 2026", href: "/guides/how-to-choose/best-side-sleeper-pillow-2026" },
  { title: "Are Side-Sleeper Pillows Useful? Scientific Answer", href: "/blog/education/is-side-sleeper-pillow-useful" },
  { title: "How to Relieve Back Pain? Side Sleeping Posture Guide", href: "/blog/health/lower-back-pain-relief" },
  { title: "105 vs 120: Size Selection Guide", href: "/guides/how-to-choose/size-guide" },
];

export default function GuidesPage() {
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
                Buying Guide
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              Choose Right, Choose Well,<br />
              <span className="text-blue-600">Sleep Soundly</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              From size selection to brand comparison, from pregnancy safety to firmness adjustment,
              professional guides to help you make informed choices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {quickLinks.map((link, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                >
                  {link.title}
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guide Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Buying Guide
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional, objective, and practical buying advice to help you find the most suitable sleep support tool
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {guideCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 hover:bg-blue-50 transition-colors"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-12 h-12 bg-${category.color}-100 rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <category.icon className={`w-6 h-6 text-${category.color}-600`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{category.description}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {category.links.map((link, i) => (
                    <li key={i}>
                      <Link
                        href={link.href}
                        className="flex items-center justify-between p-3 bg-white rounded-xl hover:bg-blue-50 transition-colors group"
                      >
                        <span className="text-sm text-gray-700 group-hover:text-blue-700">{link.title}</span>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-700" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Ready? Get Your "Cloud Sleep Nest" Now
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Three sizes available, side adjustable strap for custom firmness, comfortable for the whole family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#products"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-blue-600 text-base font-medium rounded-full hover:bg-blue-50 transition-colors"
              >
                Shop Now
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-blue-700 text-white text-base font-medium rounded-full hover:bg-blue-800 transition-colors border border-blue-400"
              >
                Read Health Science
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
