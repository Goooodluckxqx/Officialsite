"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const technologies = [
  {
    icon: "💧",
    title: "微米粒子流动系统",
    description: "0.5mm食品级EPS粒子，FDA认证，与婴儿奶瓶同级材质。秒级流动自动填充身体空隙，均匀分散颈/腰/腹/腿压力，告别僵硬、硌压、压迫神经。",
    features: ["FDA 21CFR177.1640认证", "无毒无味、安全贴肤", "「会流动的拥抱」零压体验"],
    color: "blue",
  },
  {
    icon: "🏗️",
    title: "分段式隔断稳托结构",
    description: "内胆「分段式隔断」锁定粒子于颈、腰、腹、腿四大支撑带，不侧堆、不塌陷。侧睡/仰卧/半躺均稳定承托，解决普通抱枕支撑差、易变形通病。",
    features: ["四大支撑带设计", "整夜饱满回弹", "稳托不塌"],
    color: "indigo",
  },
  {
    icon: "🌡️",
    title: "NASA同款PCM恒温控温",
    description: "PCM控温絮片自动吸收多余热量，维持恒温微气候，柔软透气、久抱不闷汗。触感接近婴儿打底衫面料，四季舒适，告别闷热黏腻。",
    features: ["恒温微气候", "柔软透气", "四季舒适"],
    color: "cyan",
  },
  {
    icon: "⚙️",
    title: "可调长度 + 可调硬度",
    description: "三种长度：105cm标准 / 120cm进阶 / 140cm尊享。侧面「调节带」一拉调整饱满度与软硬度，高个子强支撑、娇小者更柔软，一枕全家适用。",
    features: ["三种长度可选", "侧面调节带", "一枕全家适用"],
    color: "blue",
  },
  {
    icon: "👶",
    title: "母婴级安全认证",
    description: "通过GB18401-2010国家A类（婴幼儿用品最高标准），孕妈、宝宝可直接贴肤裸睡，无需枕套隔离。填充粒子经FDA安全检测，苯乙烯单体残余未检出。",
    features: ["国家A类标准", "可直接贴肤裸睡", "苯乙烯残余未检出"],
    color: "green",
  },
  {
    icon: "♻️",
    title: "人体工学设计",
    description: "团队曾参与打造Ubras、内外、亚朵星球等品牌，将成熟品控与人体工学融入细节。不追求标新立异，专注做好一件可靠的承托好物。",
    features: ["成熟品控", "人体工学", "专注可靠"],
    color: "purple",
  },
];

const stats = [
  { value: "GB18401", label: "国家A类认证" },
  { value: "FDA", label: "食品级认证" },
  { value: "PCM", label: "恒温控温技术" },
  { value: "0.5mm", label: "食品级EPS粒子" },
];

export default function Science() {
  return (
    <section id="technology" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
            核心科技
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            五大科技，重新定义抱枕体验
          </p>
        </motion.div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="#scenarios"
            className="inline-flex items-center gap-2 text-gray-900 font-medium hover:gap-3 transition-all"
          >
            查看使用场景
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
