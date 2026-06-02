"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Heart } from "lucide-react";

const articles = [
  {
    title: "侧睡腰疼？可能是你的姿势不对",
    excerpt: "侧睡时腰疼、肩膀压麻，很可能是姿势问题。本文从解剖学角度解析侧睡正确姿势，帮你找到根源。",
    href: "/blog/health/lower-back-pain-side-sleeping",
    date: "2026-06-01",
    readTime: "5 分钟",
  },
  {
    title: "睡觉肩膀压麻了？4个动作立即缓解",
    excerpt: "肩膀压麻不是小事，长期可能导致神经压迫。本文提供4个简单动作，立即缓解肩膀压力。",
    href: "/blog/health/shoulder-numbness-relief",
    date: "2026-05-28",
    readTime: "4 分钟",
  },
  {
    title: "孕期睡眠姿势指南：怎么睡才舒服",
    excerpt: "孕晚期肚子大了，怎么睡都不舒服？本文从医学角度给出安全、舒适的孕期睡眠姿势建议。",
    href: "/blog/health/pregnancy-sleep-positions",
    date: "2026-05-25",
    readTime: "7 分钟",
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
                健康科普
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              腰疼、肩酸？<br />
              <span className="text-red-600">科学解析在这里</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              从解剖学角度解析睡眠相关疼痛，帮你找到根源，睡个好觉。
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
            <p className="text-gray-600">健康科普，帮你理解身体信号</p>
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
                      健康科普
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
      <section className="py-20 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              懂得多了，选得对了
            </h2>
            <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
              从健康科普到选购指南，我们希望帮你做出明智选择。
            </p>
            <Link
              href="/guides"
              className="inline-flex items-center px-8 py-3.5 bg-white text-red-600 text-base font-medium rounded-full hover:bg-red-50 transition-colors"
            >
              选购指南
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
