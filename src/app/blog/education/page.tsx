"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";

const articles = [
  {
    title: "侧睡抱枕有用吗？科学数据告诉你",
    excerpt: "市面上的侧睡抱枕五花八门，到底有没有用？我们从医学、工学、用户数据三个维度给你答案。",
    href: "/blog/education/is-side-sleeper-pillow-useful",
    date: "2026-06-01",
    readTime: "8 分钟",
  },
  {
    title: "什么是侧睡枕？为什么你需要它",
    excerpt: "侧睡枕不是普通抱枕，它是为侧睡人体工学设计的专业支撑工具。本文详解侧睡枕的设计原理。",
    href: "/blog/education/what-is-side-sleeper-pillow",
    date: "2026-05-30",
    readTime: "6 分钟",
  },
  {
    title: "U型枕 vs 侧睡枕：全面对比分析",
    excerpt: "U型枕、记忆棉枕、侧睡抱枕，到底哪个适合你？多维度对比，帮你做出明智选择。",
    href: "/blog/education/u-pillow-vs-side-sleeper-pillow",
    date: "2026-05-27",
    readTime: "7 分钟",
  },
];

export default function EducationPage() {
  return (
    <main className="bg-white">
      {/* Hero Sectio */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                品类教育
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              懂了，<br />
              <span className="text-blue-600">才选得对</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              侧睡枕、U型枕、记忆棉枕，从原理到选择，全方位品类科普。
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
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">全部文章</h2>
            <p className="text-gray-600">品类教育，帮你理解产品本质</p>
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
                      品类教育
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
                    阅读全文
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
              懂了，选个好的
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              从品类教育到选购指南，我们希望帮你做出明智选择。
            </p>
            <Link
              href="/guides"
              className="inline-flex items-center px-8 py-3.5 bg-white text-blue-600 text-base font-medium rounded-full hover:bg-blue-50 transition-colors"
            >
              选购指南
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
