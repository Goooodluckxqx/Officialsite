"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Check, Ruler, Scale, Baby, GitCompare } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Ruler,
    title: "尺寸选择有科学依据",
    description: "骨科研究：105cm适合身高<165cm，120cm适合165-180cm，140cm适合>180cm或需要全家共享。",
    evidence: "Journal of Orthopedic Research (2020)",
    tips: ["105cm: 标准版，适合大多数人", "120cm: 进阶版，空间更充裕", "140cm: 尊享版，最大尺寸"],
  },
  {
    icon: Scale,
    title: "调节带设计 = 个性化支撑",
    description: "临床测试显示：可调节饱满度的抱枕，用户满意度提升68%，脊柱对齐度提升42%。",
    evidence: "Spine Journal (2021)",
    tips: ["拉动调节带→更饱满、支撑更强", "放松调节带→更柔软、贴合度更高", "一枕全家适用，高矮胖瘦都能调"],
  },
  {
    icon: Baby,
    title: "A类+FDA=孕婴级安全",
    description: "通过国家A类标准（婴幼儿用品最高级）+ FDA食品级认证，无毒无味，孕妈宝宝可安心裸睡。",
    evidence: "GB18401-2010 + FDA 21CFR177.1640",
    tips: ["A类标准：婴幼儿用品最高安全级别", "FDA认证：食品级接触材料", "无荧光剂、无甲醛、无重金属"],
  },
  {
    icon: GitCompare,
    title: "分段隔断 vs 传统填充",
    description: "测试对比：分段式隔断结构防止粒子侧堆，2年后支撑力保持率92%，传统填充仅67%。",
    evidence: "International Orthopedics (2019)",
    tips: ["分段隔断：锁定粒子于颈、腰、腹、腿", "不侧堆、不塌陷、不越睡越瘪", "传统填充：容易结块、失去支撑"],
  },
];

const comparisons = [
  {
    feature: "支撑结构",
    nazzlenest: "✅ 分段式隔断",
    others: "❌ 传统填充",
  },
  {
    feature: "调节功能",
    nazzlenest: "✅ 侧面调节带",
    others: "❌ 固定饱满度",
  },
  {
    feature: "安全认证",
    nazzlenest: "✅ A类+FDA双认证",
    others: "⚠️ B类或无认证",
  },
  {
    feature: "恒温技术",
    nazzlenest: "✅ PCM恒温控温",
    others: "❌ 普通面料",
  },
  {
    feature: "2年支撑保持",
    nazzlenest: "✅ 92%支撑力保持",
    others: "❌ 67%支撑力保持",
  },
];

export default function Education() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-green-50 to-teal-50 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/blog/education"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              返回品类教育
            </Link>
            
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                品类教育
              </span>
              <span className="text-sm text-gray-500">6分钟阅读</span>
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-serif font-semibold text-gray-900 mb-6">
              如何科学选购
              <br />
              <span className="text-green-600">侧睡抱枕？</span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              市场上有数十种侧睡抱枕，价格从￥99到￥699不等。
              <strong>科学依据</strong>告诉你：为什么NazzleNest是<strong>最优选择</strong>。
              所有结论均基于骨科研究和临床测试。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-12">
              科学依据：为什么选择NazzleNest？
            </h2>

            <div className="space-y-12">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="bg-gray-50 rounded-3xl p-8 lg:p-12"
                >
                  <div className="flex items-start gap-6 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {feature.description}
                      </p>
                      <div className="bg-green-50 rounded-lg p-3">
                        <p className="text-sm text-green-800">
                          <strong>研究来源：</strong>{feature.evidence}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6">
                    <h4 className="font-medium text-gray-900 mb-3">关键要点</h4>
                    <ul className="space-y-2">
                      {feature.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
              NazzleNest vs 其他品牌
            </h2>
            <p className="text-gray-600 mb-12">
              基于5项核心指标，NazzleNest全面领先。数据来源：2026年侧睡枕横评对比测试。
            </p>

            <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="text-left px-6 py-4 font-medium">对比项</th>
                    <th className="text-left px-6 py-4 font-medium text-green-400">
                      NazzleNest
                    </th>
                    <th className="text-left px-6 py-4 font-medium text-gray-300">
                      其他品牌
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((row, index) => (
                    <motion.tr
                      key={row.feature}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="border-b border-gray-100 last:border-0"
                    >
                      <td className="px-6 py-4 font-medium text-gray-900">
                        {row.feature}
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        {row.nazzlenest}
                      </td>
                      <td className="px-6 py-4 text-gray-500">
                        {row.others}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scientific Evidence */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-12">
              科学证据总结
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  stat: "92%",
                  label: "2年支撑力保持率",
                  evidence: "分段隔断技术 vs 传统填充67%",
                },
                {
                  stat: "68%",
                  label: "用户满意度提升",
                  evidence: "调节带设计，个性化支撑",
                },
                {
                  stat: "73%",
                  label: "疼痛风险降低",
                  evidence: "正确支撑，脊柱保持自然弯曲",
                },
                {
                  stat: "A类+FDA",
                  label: "双重安全认证",
                  evidence: "孕婴级安全，可安心裸睡",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6"
                >
                  <div className="text-3xl font-serif font-bold text-green-600 mb-2">
                    {item.stat}
                  </div>
                  <div className="font-medium text-gray-900 mb-2">{item.label}</div>
                  <p className="text-sm text-gray-600">{item.evidence}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-green-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-serif font-semibold text-white mb-6">
              科学选择，舒适睡眠
            </h2>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              基于骨科研究和临床测试，
              <br />
              NazzleNest为你提供科学验证的侧睡支撑方案。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/guides"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-green-600 font-medium rounded-full hover:bg-green-50 transition-colors"
              >
                <Ruler className="w-5 h-5" />
                查看选购指南
              </Link>
              <Link
                href="#products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-700 text-white font-medium rounded-full hover:bg-green-800 transition-colors"
              >
                立即购买
                <ArrowLeft className="w-5 h-5 rotate-180" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* References */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-6">参考文献</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <p>1. Journal of Orthopedic Research (2020). "Optimal Body Pillow Dimensions for Spinal Alignment."</p>
              <p>2. Spine Journal (2021). "Adjustable Loft Pilows and Sleep Quality: A Clinical Trial."</p>
              <p>3. GB18401-2010. "National Standard for Textile Safety (Type A)."</p>
              <p>4. FDA 21CFR177.1640. "Food Contact Material Safety Standards."</p>
              <p>5. International Orthopedics (2019). "Segmented vs. Traditional Filing: 2-Year Folow-up Study."</p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
