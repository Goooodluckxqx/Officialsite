"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, Droplets, Flame } from "lucide-react";

const technologies = [
  {
    icon: "💧",
    title: "微米粒子流动系统",
    description: "0.5mm食品级EPS粒子，FDA认证，与婴儿奶瓶同级材质。秒级流动自动填充身体空隙，均匀分散颈/腰/腹/腿压力，告别僵硬、硌压、压迫神经。",
    features: ["FDA 21CFR177.1640认证", "无毒无味、安全贴肤", "「会流动的拥抱」零压体验"],
  },
  {
    icon: "🏗️",
    title: "分段式隔断稳托结构",
    description: "内胆「分段式隔断」锁定粒子于颈、腰、腹、腿四大支撑带，不侧堆、不塌陷。侧睡/仰卧/半躺均稳定承托，解决普通抱枕支撑差、易变形通病。",
    features: ["四大支撑带设计", "整夜饱满回弹", "稳托不塌"],
  },
  {
    icon: "🌡️",
    title: "NASA同款PCM恒温控温",
    description: "PCM控温絮片自动吸收多余热量，维持恒温微气候，柔软透气、久抱不闷汗。触感接近婴儿打底衫面料，四季舒适，告别闷热黏腻。",
    features: ["恒温微气候", "柔软透气", "四季舒适"],
  },
  {
    icon: "⚙️",
    title: "可调长度 + 可调硬度",
    description: "三种长度：105cm标准 / 120cm进阶 / 140cm尊享。侧面「调节带」一拉调整饱满度与软硬度，高个子强支撑、娇小者更柔软，一枕全家适用。",
    features: ["三种长度可选", "侧面调节带", "一枕全家适用"],
  },
  {
    icon: "👶",
    title: "母婴级安全认证",
    description: "通过GB18401-2010国家A类（婴幼儿用品最高标准），孕妈、宝宝可直接贴肤裸睡，无需枕套隔离。填充粒子经FDA安全检测，苯乙烯单体残余未检出。",
    features: ["国家A类标准", "可直接贴肤裸睡", "苯乙烯残余未检出"],
  },
  {
    icon: "♻️",
    title: "人体工学设计",
    description: "团队曾参与多个知名家居与贴身纺织品品牌的产品研发与品控，将成熟的大品牌质量管理体系融入细节。不追求标新立异，专注做好一件可靠的事。",
    features: ["成熟品控", "人体工学", "专注可靠"],
  },
];

const scenarios = [
  {
    icon: "😴",
    title: "侧睡星人·云端睡窝",
    description: "填充肩、腰、膝盖空隙，承托肩颈与关节，缓解手臂麻木、肩颈酸痛，实现深度睡眠，醒后不累。",
    features: ["缓解肩颈酸痛", "改善手臂麻木", "深度睡眠", "醒后不累"],
    color: "blue",
  },
  {
    icon: "🤰",
    title: "孕期妈妈·托腹天使",
    description: "垫于腹部下方与双腿之间，温柔托腹，减轻腰背坠感，缓解翻身难、睡眠差，守护妈妈与宝宝。",
    features: ["温柔托腹", "减轻腰背压力", "缓解翻身难", "守护母婴"],
    color: "pink",
  },
  {
    icon: "🛋️",
    title: "居家全能·舒适搭子",
    description: "沙发、地毯、办公椅皆可用，可折叠作腰靠、垫高作腿凳、俯卧作睡枕，解决「怎么躺都不对」。",
    features: ["多元使用场景", "可折叠设计", "解决姿势困扰", "全屋适用"],
    color: "green",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "全家共享·一枕多用",
    description: "成人、青少年、老人均可调节适配，高空间利用率、高性价比，一次投入全家舒适。",
    features: ["全家适用", "高性价比", "空间利用率高", "一枕多用"],
    color: "purple",
  },
];

const certifications = [
  {
    badge: "A类",
    title: "GB18401-2010 国家A类",
    description: "中国婴幼儿用品最高安全标准，孕妈、宝宝可直接贴肤裸睡，无需枕套隔离。",
    details: ["婴幼儿用品最高标准", "可直接贴肤使用", "无毒无味", "孕妈宝宝安心"],
    color: "blue",
  },
  {
    badge: "FDA",
    title: "FDA 21CFR177.1640",
    description: "美国食品药品监督管理局认证，食品级EPS粒子与婴儿奶瓶同级材质，安全贴肤。",
    details: ["食品级材质", "苯乙烯单体残余未检出", "与婴儿奶瓶同级", "无毒无味"],
    color: "green",
  },
  {
    badge: "PCM",
    title: "NASA同款PCM恒温",
    description: "相变材料恒温控温技术，自动吸收/释放热量，维持舒适微气候，久抱不闷汗。",
    details: ["恒温控温", "透气不闷热", "四季舒适", "柔软亲肤"],
    color: "purple",
  },
];

const careInstructions = {
  doable: {
    title: "可拆洗枕套（推荐）",
    icon: "✓",
    color: "green",
    items: ["水温≤30℃，中性洗涤剂，轻柔模式", "不可漂白、可低温烘干、可熨烫"],
  },
  notAllowed: {
    title: "枕芯/内胆（不可水洗）",
    icon: "✗",
    color: "red",
    items: ["严禁水洗、浸泡、烘干", "表面灰尘：轻拍/吸尘器低档位清洁", "局部污渍：微湿软布+中性清洁剂轻擦"],
  },
};

const stats = [
  { value: "GB18401", label: "国家A类认证" },
  { value: "FDA", label: "食品级认证" },
  { value: "PCM", label: "恒温控温技术" },
  { value: "0.5mm", label: "食品级EPS粒子" },
];

const sizeGuide = [
  {
    size: "105cm",
    name: "标准版",
    price: "¥349",
    suitable: "大多数人，零压贴合",
    features: ["标准长度", "微米粒子流动", "分段隔断结构"],
  },
  {
    size: "120cm",
    name: "进阶版",
    price: "¥369",
    suitable: "更充裕长度，全家共享首选",
    features: ["进阶长度", "可调硬度设计", "PCM恒温控温"],
    popular: true,
  },
  {
    size: "140cm",
    name: "尊享版",
    price: "¥399",
    suitable: "最大尺寸，全家共享，空间充裕",
    features: ["尊享长度", "全家适用", "母婴A类认证"],
  },
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
              找到适合你的<br />
              <span className="text-blue-600">完美承托</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              从核心科技到安全认证，从场景适配到尺寸选择，
              一篇指南帮你选对、选好、睡得香。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Size Guide */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              尺寸怎么选？
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              三种长度，全家适用。一拉调节带，软硬度随心调。
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {sizeGuide.map((size, i) => (
              <motion.div
                key={size.size}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-2xl p-8 relative ${
                  size.popular
                    ? "bg-blue-600 text-white shadow-xl scale-105"
                    : "bg-gray-50"
                }`}
              >
                {size.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
                    最受欢迎
                  </div>
                )}
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold mb-2">{size.size}</div>
                  <div className={`text-lg font-semibold ${size.popular ? "text-blue-100" : "text-gray-900"}`}>
                    {size.name}
                  </div>
                  <div className={`text-3xl font-bold mt-4 ${size.popular ? "text-white" : "text-blue-600"}`}>
                    {size.price}
                  </div>
                </div>
                <p className={`text-sm mb-6 ${size.popular ? "text-blue-100" : "text-gray-600"}`}>
                  {size.suitable}
                </p>
                <ul className="space-y-2">
                  {size.features.map((feature, j) => (
                    <li key={j} className="flex items-center text-sm">
                      <span className={`mr-2 ${size.popular ? "text-blue-200" : "text-blue-600"}`}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link
                    href="/#products"
                    className={`block text-center py-3 rounded-full text-sm font-medium transition-colors ${
                      size.popular
                        ? "bg-white text-blue-600 hover:bg-blue-50"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    立即选购
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              核心科技
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              五大科技，重新定义抱枕体验
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <div className="text-5xl mb-6">{tech.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{tech.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{tech.description}</p>
                <ul className="space-y-2">
                  {tech.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900 rounded-3xl p-8 lg:p-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-serif text-3xl lg:text-4xl font-semibold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scenarios Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              适用场景
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              从睡眠到居家，全方位舒适体验
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {scenarios.map((scenario, index) => (
              <motion.div
                key={scenario.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <div className="text-6xl mb-6 text-center">{scenario.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{scenario.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{scenario.description}</p>
                <ul className="space-y-2">
                  {scenario.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <span className="text-blue-600 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              安全认证
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              母婴级安全标准，放心贴肤使用
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm text-center"
              >
                <div className={`w-20 h-20 bg-${cert.color}-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6`}>
                  {cert.badge}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{cert.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{cert.description}</p>
                <ul className="space-y-2 text-left">
                  {cert.details.map((detail, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Care Instructions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-sm"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">清洗与保养说明</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-green-500 text-xl">{careInstructions.doable.icon}</span>
                  {careInstructions.doable.title}
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  {careInstructions.doable.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5 flex-shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-red-500 text-xl">{careInstructions.notAllowed.icon}</span>
                  {careInstructions.notAllowed.title}
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  {careInstructions.notAllowed.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-red-500 mt-0.5 flex-shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-8 p-4 bg-yellow-50 rounded-xl">
              <p className="text-sm text-yellow-800 font-medium text-center">
                ⚠️ 禁忌清单：不可机洗/水洗枕芯 · 不可尖锐物划伤 · 避免粒子泄漏
              </p>
            </div>
          </motion.div>
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
                href="/about"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-blue-700 text-white text-base font-medium rounded-full hover:bg-blue-800 transition-colors border border-blue-400"
              >
                了解品牌故事
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
