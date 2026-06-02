"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, Activity, BookOpen, ArrowRight } from "lucide-react";

const blogCategories = [
  {
    icon: Heart,
    title: "健康科普",
    description: "腰疼、肩颈酸痛、睡眠质量问题？科学解析，帮你找到根源。",
    href: "/blog/health",
    color: "red",
    articles: [
      { title: "侧睡腰疼？可能是你的姿势不对", href: "/blog/health/lower-back-pain-side-sleeping" },
      { title: "睡觉肩膀压麻了？4个动作立即缓解", href: "/blog/health/shoulder-numbness-relief" },
      { title: "孕期睡眠姿势指南：怎么睡才舒服", href: "/blog/health/pregnancy-sleep-positions" },
    ],
  },
  {
    icon: Activity,
    title: "缓解方法",
    description: "从姿势调整到工具选择，实用的缓解疼痛与改善睡眠方法。",
    href: "/blog/relief",
    color: "green",
    articles: [
      { title: "腰疼怎么缓解？侧睡党必看指南", href: "/blog/relief/lower-back-pain-relief" },
      { title: "侧睡正确姿势：骨科医生推荐", href: "/blog/relief/side-sleeping-posture" },
      { title: "改善睡眠的5个动作，今晚就试试", href: "/blog/relief/improve-sleep-exercises" },
    ],
  },
  {
    icon: BookOpen,
    title: "品类教育",
    description: "侧睡抱枕、U型枕、记忆棉枕，到底哪个适合你？",
    href: "/blog/education",
    color: "blue",
    articles: [
      { title: "侧睡抱枕有用吗？科学数据告诉你", href: "/blog/education/is-side-sleeper-pillow-useful" },
      { title: "什么是侧睡枕？为什么你需要它", href: "/blog/education/what-is-side-sleeper-pillow" },
      { title: "U型枕 vs 侧睡枕：全面对比分析", href: "/blog/education/u-pillow-vs-side-sleeper-pillow" },
    ],
  },
];

const featuredArticles = [
  {
    title: "侧睡腰疼？可能是你的姿势不对",
    excerpt: "侧睡时腰疼、肩膀压麻，很可能是姿势问题。本文从解剖学角度解析侧睡正确姿势，帮你找到根源。",
    href: "/blog/health/lower-back-pain-side-sleeping",
    category: "健康科普",
    readTime: "5 分钟",
  },
  {
    title: "侧睡抱枕有用吗？科学数据告诉你",
    excerpt: "市面上的侧睡抱枕五花八门，到底有没有用？我们从医学、工学、用户数据三个维度给你答案。",
    href: "/blog/education/is-side-sleeper-pillow-useful",
    category: "品类教育",
    readTime: "8 分钟",
  },
  {
    title: "腰疼怎么缓解？侧睡党必看指南",
    excerpt: "腰疼不是小事，长期忽视可能影响脊椎健康。本文提供5个立竿见影的缓解方法，今晚就能用。",
    href: "/blog/relief/lower-back-pain-relief",
    category: "缓解方法",
    readTime: "6 分钟",
  },
];

export default function BlogPage() {
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
                健康科普 · 品类教育
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              睡得香，<br />
              <span className="text-blue-600">从懂开始</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              从腰疼原因到缓解方法，从姿势纠正到工具选择，
              专业科普帮你做出明智决策。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">
              热门文章
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
                <Link href={article.href} className="block bg-gray-50 rounded-2xl p-6 hover:bg-blue-50 transition-colors h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                      {article.category}
                    </span>
                    <span className="text-gray-400 text-xs">{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Categories */}
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
              内容分类
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              从健康科普到品类教育，全方位帮你了解睡眠健康
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
                className="bg-gray-50 rounded-2xl p-8"
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
                <ul className="space-y-3 mb-6">
                  {category.articles.map((article, i) => (
                    <li key={i}>
                      <Link
                        href={article.href}
                        className="text-sm text-gray-700 hover:text-blue-700 transition-colors line-clamp-1"
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
                  查看全部
                  <ArrowRight className="w-4 h-4" />
                </Link>
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
              找到适合的了吗？立即选购
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              从科普到选购，我们希望帮你做出明智选择。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/guides"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-blue-600 text-base font-medium rounded-full hover:bg-blue-50 transition-colors"
              >
                选购指南
              </Link>
              <Link
                href="/#products"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-blue-700 text-white text-base font-medium rounded-full hover:bg-blue-800 transition-colors border border-blue-400"
              >
                立即选购
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
