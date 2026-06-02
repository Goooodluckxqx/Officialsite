"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Activity } from "lucide-react";

const articles = [
  {
    title: "腰疼怎么缓解？侧睡党必看指南",
    excerpt: "腰疼不是小事，长期忽视可能影响脊椎健康。本文提供5个立竿见影的缓解方法，今晚就能用。",
    href: "/blog/relief/lower-back-pain-relief",
    date: "2026-06-01",
    readTime: "6 分钟",
  },
  {
    title: "侧睡正确姿势：骨科医生推荐",
    excerpt: "侧睡姿势不对，可能导致腰间盘突出。骨科医生推荐的正确侧睡姿势，快来看看你睡对了吗。",
    href: "/blog/relief/side-sleeping-posture",
    date: "2026-05-29",
    readTime: "5 分钟",
  },
  {
    title: "改善睡眠的5个动作，今晚就试试",
    excerpt: "睡前做这几个简单动作，能显著改善睡眠质量，让你一夜好眠到天亮。",
    href: "/blog/relief/improve-sleep-exercises",
    date: "2026-05-26",
    readTime: "4 分钟",
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
                缓解方法
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              立竿见影的<br />
              <span className="text-green-600">缓解方案</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              从姿势调整到工具选择，实用的缓解疼痛与改善睡眠方法。
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
            <p className="text-gray-600">实用的缓解方法，立即改善</p>
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
                      缓解方法
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
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              缓解后，选个好支撑
            </h2>
            <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
              从缓解到预防，我们需要的是正确的支撑工具。
            </p>
            <Link
              href="/guides"
              className="inline-flex items-center px-8 py-3.5 bg-white text-green-600 text-base font-medium rounded-full hover:bg-green-50 transition-colors"
            >
              选购指南
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
