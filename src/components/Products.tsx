"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, Check } from "lucide-react";
import Link from "next/link";

const products = [
  {
    category: "Body Support",
    tag: "Core Line",
    tagColor: "bg-blue-600 text-white",
    name: "NazzleNest Side-Sleeping Pillow",
    price: "From $149",
    description: "Put your body's weight and fatigue into it. Continuous support from chest to calf, made for side sleepers.",
    features: ["105 / 120 / 140cm Sizes", "Micro-Particle Flow Support", "PCM Temperature Control", "Baby-Safe Class A Cover"],
    href: "/products/side-sleeping-pillow",
    image: "/product-pillow.jpg",
  },
  {
    category: "Sensory Relaxation",
    tag: "New Release",
    tagColor: "bg-warm-600 text-white",
    name: "NazzleNest Weighted Heated Eye Mask",
    price: "$40 - $55",
    description: "Give tired eyes a little warmth and weight. Light-blocking, warm, and gently weighted for a calm-down ritual.",
    features: ["Light-Blocking Multi-Layer Design", "Cassia Seed Heat Pack", "~100g Gentle Weight", "Eye-Cavity Comfort Fit"],
    href: "/products/weighted-heated-eye-mask",
    image: "/product-eyemask.jpg",
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
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Body support meets sensory relaxation. Rest starts before you fall asleep.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={product.href} className="group block relative">
                {/* Product Card */}
                <div className="relative bg-gray-50 rounded-2xl overflow-hidden aspect-[4/3] mb-6">
                  {/* Category + Tag */}
                  <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-semibold rounded-full">
                      {product.category}
                    </span>
                    <span className={`px-3 py-1 ${product.tagColor} text-xs font-semibold rounded-full`}>
                      {product.tag}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full z-10">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-medium text-gray-900">4.9</span>
                  </div>

                  {/* Product Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Product Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-gray-900 text-xl mb-2">{product.name}</h3>
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

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                    <span className="inline-flex items-center gap-2 text-blue-600 font-medium group-hover:gap-3 transition-all">
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Core Technology</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">💧</div>
              <h4 className="font-bold text-gray-900 mb-2">Micro-Particle Flow System</h4>
              <p className="text-sm text-gray-600">0.5mm food-grade EPS particles, FDA certified, instantly flow to fill body gaps</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏗️</div>
              <h4 className="font-bold text-gray-900 mb-2">Segmented Support Structure</h4>
              <p className="text-sm text-gray-600">Three independent chambers lock particles in place, no shifting, no collapsing, stays plump all night</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌡️</div>
              <h4 className="font-bold text-gray-900 mb-2">NASA-Grade PCM Temperature Control</h4>
              <p className="text-sm text-gray-600">Automatically absorbs excess heat, maintains constant micro-climate, no sweating even after long hours</p>
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
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all hover:gap-3"
          >
            View All Products
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
