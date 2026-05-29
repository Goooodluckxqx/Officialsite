"use client";

import { motion } from "framer-motion";
import { Shield, Droplets, Flame } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const certifications = [
  {
    badge: "A类",
    title: "GB18401-2010 国家A类",
    description: "中国婴幼儿用品最高安全标准，孕妈、宝宝可直接贴肤裸睡，无需枕套隔离。",
    details: ["婴幼儿用品最高标准", "可直接贴肤使用", "无毒无味", "孕妈宝宝安心"],
    icon: Shield,
    color: "blue",
  },
  {
    badge: "FDA",
    title: "FDA 21CFR177.1640",
    description: "美国食品药品监督管理局认证，食品级EPS粒子与婴儿奶瓶同级材质，安全贴肤。",
    details: ["食品级材质", "苯乙烯单体残余未检出", "与婴儿奶瓶同级", "无毒无味"],
    icon: Shield,
    color: "green",
  },
  {
    badge: "PCM",
    title: "NASA同款PCM恒温",
    description: "相变材料恒温控温技术，自动吸收/释放热量，维持舒适微气候，久抱不闷汗。",
    details: ["恒温控温", "透气不闷热", "四季舒适", "柔软亲肤"],
    icon: Droplets,
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

export default function Safety() {
  return (
    <section id="safety" className="py-20 lg:py-28 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
            安全认证
          </h2>
          <p className="text-lg text-gray-600">母婴级安全标准，放心贴肤使用</p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="#faq"
            className="inline-flex items-center gap-2 text-gray-900 font-medium hover:gap-3 transition-all"
          >
            查看常见问题
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
