"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, Check } from "lucide-react";
import Link from "next/link";

const products = [
  {
    tag: "Standard",
    tagColor: "bg-blue-600 text-white",
    name: "NazzleNest Side-Sleeping Pillow 105cm",
    price: "$149",
    description: "Standard size for most people, zero-pressure fit",
    features: ["105cm Standard Length", "Micro-Particle Flow", "Segmented Structure"],
    recommended: false,
  },
  {
    tag: "Advanced",
    tagColor: "bg-blue-700 text-white",
    name: "NazzleNest Side-Sleeping Pillow 120cm",
    price: "$169",
    description: "Extra length, perfect for family sharing",
    features: ["120cm Advanced Length", "Adjustable Firmness", "PCM Temperature Control"],
    recommended: true,
  },
  {
    tag: "Premium",
    tagColor: "bg-gray-900 text-white",
    name: "NazzleNest Side-Sleeping Pillow 140cm",
    price: "$189",
    description: "Maximum size, family-friendly, spacious",
    features: ["140cm Premium Length", "Family-Friendly", "Mother & Baby Class A Certified"],
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
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dynamic Support · Universal Fit · Baby-Safe · Family-Friendly
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
                    Most Popular
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

                  {/* Product Image */}
                  <img
                    src={`/product-${product.name.includes('105') ? '105cm' : product.name.includes('120') ? '120cm' : '140cm'}.jpg`}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
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
                      View Details
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
              <p className="text-sm text-gray-600">Locks particles in four support zones, no shifting, no collapsing, stays plump all night</p>
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
            href="#technology"
            className="inline-flex items-center gap-2 text-gray-900 font-medium hover:gap-3 transition-all"
          >
            Learn All Technologies
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
