"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, ArrowRight, Quote, BookOpen } from "lucide-react";

const articles = [
  {
    title: "侧睡腰疼？可能是你的姿势不对",
    excerpt: "研究发现，62%的侧睡者存在腰椎疼痛问题。正确的侧睡姿势和支撑工具可以将疼痛风险降低73%。",
    date: "2026-06-01",
    readTime: "5分钟",
    category: "健康科普",
    href: "/blog/health/lower-back-pain-side-sleeping",
    featured: true,
  },
  {
    title: "睡觉肩膀压麻了？4个动作立即缓解",
    excerpt: "肩颈压迫不仅影响睡眠质量，还可能导致颈椎问题。科学验证的4个动作，3分钟内缓解压迫。",
    date: "2026-06-01",
    readTime: "4分钟",
    category: "缓解方法",
    href: "/blog/relief/shoulder-numbness",
    featured: false,
  },
  {
    title: "孕期睡眠姿势指南：怎么睡才舒服又安全",
    excerpt: "85%的孕妇存在睡眠问题。医学研究表明，左侧卧位+专业托腹支撑是最佳方案。",
    date: "2026-06-01",
    readTime: "6分钟",
    category: "孕期健康",
    href: "/blog/health/pregnancy-sleep-positions",
    featured: false,
  },
  {
    title: "侧睡 vs 仰睡：哪种姿势更健康？",
    excerpt: "对比分析两种主流睡姿的利弊，基于脊椎健康和睡眠质量的科学数据。",
    date: "2026-05-28",
    readTime: "7分钟",
    category: "健康科普",
    href: "/blog/health/side-vs-back-sleeping",
    featured: false,
  },
];

export default function HealthBlog() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-pink-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-red-600" />
              </div>
              <span className="text-sm font-medium text-red-600 tracking-wide uppercase">
                健康科普
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-serif font-semibold text-gray-900 mb-6">
              科学解读睡眠健康
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              基于最新医学研究和临床试验，为你揭示睡眠姿势与身体健康的深层关联。
              所有内容均引用权威医学期刊和同行评审论文。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {articles.filter(a => a.featured).map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="group block bg-gray-50 rounded-3xl p-8 lg:p-12 hover:bg-gray-100 transition-colors"
              >
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">
                        {article.category}
                      </span>
                      <span className="text-sm text-gray-500">{article.readTime}</span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-serif font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-blue-600 font-medium">
                      阅读全文
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                  <div className="relative">
                    <div className="aspect-[4/3] bg-gradient-to-br from-red-100 to-pink-100 rounded-2xl flex items-center justify-center">
                      <Quote className="w-20 h-20 text-red-300" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl font-serif font-semibold text-gray-900">
              更多文章
            </h2>
            <Link
              href="/blog"
              className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              查看全部
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.filter(a => !a.featured).map((article, index) => (
              <motion.div
                key={article.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={article.href}
                  className="group block bg-white rounded-2xl p-6 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-400">{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-blue-600 font-medium">
                    阅读全文
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* References Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="w-6 h-6 text-gray-400" />
              <h2 className="text-2xl font-serif font-semibold text-gray-900">
                参考文献标准
              </h2>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                本博客所有文章均基于同行评审的医学研究和临床试验，引用来源包括：
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• PubMed 收录的医学期刊论文</li>
                <li>• Cochrane Library 系统综述</li>
                <li>• 美国脊椎协会（ACA）临床指南</li>
                <li>• 国家睡眠基金会（NSF）研究报告</li>
                <li>• 国际骨科杂志（International Orthopaedics）</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
