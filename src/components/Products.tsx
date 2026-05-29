"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, Check } from "lucide-react";
import Link from "next/link";

const products = [
  {
    tag: "标准版",
    tagColor: "bg-blue-600 text-white",
    name: "NazzleNest 侧睡抱枕 105cm",
    price: "¥299",
    description: "适合大多数人的标准尺寸，零压贴合",
    features: ["105cm 标准长度", "微米粒子流动", "分段隔断结构"],
    recommended: false,
  },
  {
    tag: "进阶版",
    tagColor: "bg-blue-700 text-white",
    name: "NazzleNest 侧睡抱枕 120cm",
    price: "¥399",
    description: "更充裕的长度，全家共享首选",
    features: ["120cm 进阶长度", "可调硬度设计", "PCM恒温控温"],
    recommended: true,
  },
  {
    tag: "尊享版",
    tagColor: "bg-gray-900 text-white",
    name: "NazzleNest 侧睡抱枕 140cm",
    price: "¥499",
    description: "最大尺寸，全家共享，空间充裕",
    features: ["140cm 尊享长度", "全家适用", "母婴A类认证"],
    recommended: false,
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 lg:py-28 bg-white">
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
            明星产品
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            动态支撑 · 全域适配 · 母婴安全 · 全家共享
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`group block relative ${product.recommended ? 'ring-2 ring-blue-600' : ''}`}>
                {/* Recommended Badge */}
                {product.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold z-10">
                    最受欢迎
                  </div>
                )}

                {/* Product Card */}
                <div className="relative bg-gray-50 rounded-2xl overflow-hidden aspect-[4/3] mb-6">
                  {/* Tag */}
                  <div className={`absolute top-4 left-4 px-3 py-1 ${product.tagColor} text-xs font-semibold rounded-full z-10`}>
                    {product.tag}
                  </div>

                  {/* Rating */}
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full z-10">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-medium text-gray-900">4.9</span>
                  </div>

                  {/* Product Image Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-8xl mb-2">🛏️</div>
                      <p className="text-gray-400 text-sm">{product.tag}</p>
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">{product.name}</h3>
                    <p className="text-sm text-gray-600">{product.description}</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all"
                    >
                      查看详情
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Tech Summary */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-blue-50 rounded-2xl p-8 lg:p-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">核心科技</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">💧</div>
              <h4 className="font-bold text-gray-900 mb-2">微米粒子流动系统</h4>
              <p className="text-sm text-gray-600">0.5mm食品级EPS粒子，FDA认证，秒级流动填充身体空隙</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏗️</div>
              <h4 className="font-bold text-gray-900 mb-2">分段式隔断稳托结构</h4>
              <p className="text-sm text-gray-600">锁定粒子于四大支撑带，不侧堆、不塌陷，整夜饱满回弹</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌡️</div>
              <h4 className="font-bold text-gray-900 mb-2">NASA同款PCM恒温</h4>
              <p className="text-sm text-gray-600">自动吸收多余热量，维持恒温微气候，久抱不闷汗</p>
            </div>
          </div>
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="#technology"
            className="inline-flex items-center gap-2 text-gray-900 font-medium hover:gap-3 transition-all"
          >
            了解全部技术
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
