"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Truck, Star } from "lucide-react";
import Link from "next/link";

const trustBadges = [
  { icon: Shield, label: "GB18401 A类认证" },
  { icon: Shield, label: "FDA食品级认证" },
  { icon: Star, label: "PCM恒温控温" },
  { icon: Truck, label: "免费配送" },
];

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-16 lg:py-24">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 fill-blue-500 text-blue-500" />
              2026 新品上市
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 leading-[1.1] mb-6">
              随形而安，
              <br />
              <span className="text-blue-600">零压自在</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
              NazzleNest 侧睡抱枕，以微米粒子流动科技+分段稳托结构，
              为您打造「会流动的拥抱」零压体验
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="#products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-all hover:gap-3 shadow-lg hover:shadow-xl"
              >
                探索产品
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/product-video.mp4"
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-900 text-gray-900 font-medium rounded-full hover:bg-gray-900 hover:text-white transition-all"
              >
                观看视频
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6">
              {trustBadges.map((badge) => (
                <div key={badge.label} className="flex items-center gap-2 text-sm text-gray-600">
                  <badge.icon className="w-4 h-4 text-blue-600" />
                  <span className="font-medium">{badge.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            <div className="relative aspect-[4/5] lg:aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/product-main.jpg"
                alt="NazzleNest 侧睡抱枕"
                className="w-full h-full object-cover"
              />
              {/* Decorative elements */}
              <div className="absolute top-8 right-8 w-20 h-20 bg-blue-200/60 rounded-full blur-2xl" />
              <div className="absolute bottom-12 left-8 w-32 h-32 bg-blue-300/40 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
