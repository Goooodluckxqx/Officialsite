"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Ruler, Scale, Baby, GitCompare } from "lucide-react";

const guideCategories = [
  {
    icon: Ruler,
    title: "尺寸选择指南",
    description: "105/120/140cm，如何选择适合你的尺寸？根据身高、体重、使用场景，帮你选对不选贵。",
    links: [
      { title: "105/120/140cm 怎么选？", href: "/guides/how-to-choose/size-guide" },
      { title: "调节带设计：硬度可调的重要性", href: "/guides/how-to-choose/firmness-guide" },
    ],
    color: "blue",
  },
  {
    icon: Baby,
    title: "孕妇枕选购指南",
    description: "孕期睡眠安全第一。A类标准、FDA认证、托腹设计，帮你选对孕期专属支撑。",
    links: [
      { title: "孕妇枕选购：安全第一", href: "/guides/how-to-choose/pregnancy-guide" },
      { title: "孕期托腹神器：怎么选才安全？", href: "/guides/how-to-choose/pregnancy-safety" },
    ],
    color: "pink",
  },
  {
    icon: Scale,
    title: "品类对比指南",
    description: "侧睡枕 vs U型枕 vs 普通抱枕，多维度对比，帮你找到最适合的睡眠支撑工具。",
    links: [
      { title: "侧睡枕 vs U型枕，哪个更好？", href: "/guides/reviews/side-sleeper-vs-u-pillow" },
      { title: "2026 侧睡枕横评对比", href: "/guides/reviews/2026-comparison" },
    ],
    color: "green",
  },
  {
    icon: GitCompare,
    title: "品牌测评指南",
    description: "纳乐适 vs 亚朵星球 vs 其他品牌，真实测评，帮你做出明智选择。",
    links: [
      { title: "纳乐适真实测评：10,000+用户的4.9分体验", href: "/guides/reviews/nazzlenest-review" },
      { title: "纳乐适 vs 亚朵星球：全面对比", href: "/guides/reviews/nazzlenest-vs-yaduo" },
    ],
    color: "purple",
  },
];

const quickLinks = [
  { title: "侧睡枕推荐 2026", href: "/guides/how-to-choose/best-side-sleeper-pillow-2026" },
  { title: "侧睡枕有用吗？科学解答", href: "/blog/education/is-side-sleeper-pillow-useful" },
  { title: "腰疼怎么缓解？侧睡姿势指南", href: "/blog/health/lower-back-pain-relief" },
  { title: "105和120区别：尺寸选择指南", href: "/guides/how-to-choose/size-guide" },
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
                选购指南
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              选对、选好、<br />
              <span className="text-blue-600">睡得香</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              从尺寸选择到品牌对比，从孕妇安全到硬度调节，
              专业指南帮你做出明智选择。
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
              选购指南
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              专业、客观、实用的选购建议，帮你找到最适合的睡眠支撑工具
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
              选好了吗？立即拥有你的「云端睡窝」
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              三种尺寸可选，侧面调节带一拉定制软硬度，全家共享舒适。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#products"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-blue-600 text-base font-medium rounded-full hover:bg-blue-50 transition-colors"
              >
                立即选购
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-blue-700 text-white text-base font-medium rounded-full hover:bg-blue-800 transition-colors border border-blue-400"
              >
                阅读健康科普
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
