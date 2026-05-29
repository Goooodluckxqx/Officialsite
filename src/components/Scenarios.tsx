"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

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

export default function Scenarios() {
  return (
    <section id="scenarios" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
            适用场景
          </h2>
          <p className="text-lg text-gray-600">从睡眠到居家，全方位舒适体验</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {scenarios.map((scenario, index) => (
            <motion.div
              key={scenario.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 hover:bg-blue-50 transition-colors"
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="#safety"
            className="inline-flex items-center gap-2 text-gray-900 font-medium hover:gap-3 transition-all"
          >
            查看安全认证
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
