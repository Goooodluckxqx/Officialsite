"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Star, Shield, Ruler, Droplets, Award, Truck } from "lucide-react";
import Link from "next/link";

const sizes = [
  {
    id: "105",
    length: "105cm",
    diameter: "20cm",
    price: 149,
    height: "150-160cm",
    label: "Standard",
    desc: "Compact support for petite users and smaller beds.",
  },
  {
    id: "120",
    length: "120cm",
    diameter: "20cm",
    price: 169,
    height: "160-170cm",
    label: "Most Popular",
    desc: "Extra length for continuous chest-to-calf support.",
  },
  {
    id: "140",
    length: "140cm",
    diameter: "20.5cm",
    price: 189,
    height: "170-190cm",
    label: "Premium",
    desc: "Maximum coverage for taller users and family sharing.",
  },
];

const layers = [
  {
    title: "Outer Cover: Washed Cotton",
    content: "94% cotton + 6% spandex. Sand-washed for a matte, soft, skin-friendly touch. Baby-safe Class A, removable and washable.",
  },
  {
    title: "Inner Liner: Nylon-Spandex Shell",
    content: "90% nylon + 10% spandex. Elastic and durable, it holds the filling without shifting or losing shape.",
  },
  {
    title: "PCM Soft Wrap Layer",
    content: "70% polyester + 30% viscose + PCM temperature-control batting. Soft, cloud-like, and helps balance heat so you don't overheat while hugging it.",
  },
  {
    title: "EPS Micro-Particle Core",
    content: "0.5mm food-grade EPS particles. They flow with your body, deliver support, and keep their shape longer than larger beads.",
  },
];

const features = [
  { icon: Ruler, title: "Three Sizes", desc: "105 / 120 / 140cm lengths matched to height and bed space." },
  { icon: Droplets, title: "0.5mm Particles", desc: "Flow to fill gaps between your knees, hips, and arms." },
  { icon: Shield, title: "Baby-Safe Cover", desc: "GB18401-2010 Class A, no fluorescent agents or formaldehyde." },
  { icon: Award, title: "MUSE Design Award 2026", desc: "Recognized for thoughtful ergonomics and clean design." },
];

export default function SideSleepingPillowPage() {
  const [selectedSize, setSelectedSize] = useState(sizes[1]);
  const [activeTab, setActiveTab] = useState<"layers" | "specs" | "care">("layers");

  return (
    <main className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-900">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-gray-900">Products</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Side-Sleeping Pillow</span>
          </nav>
        </div>
      </div>

      {/* Product Hero */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square rounded-2xl overflow-hidden bg-gray-50"
            >
              <img
                src={`/product-${selectedSize.id}.jpg`}
                alt={`NazzleNest Side-Sleeping Pillow ${selectedSize.length}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {selectedSize.label}
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                <Award className="w-4 h-4" />
                2026 MUSE Design Award
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
                NazzleNest Side-Sleeping Pillow
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A long body pillow built for side sleepers. Clasp it between your legs, tuck it under your hip, and let your upper body rest against it — finally letting your body's weight go.
              </p>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">4.9 · 10,000+ happy sleepers</span>
              </div>

              {/* Size Selector */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold text-gray-900">Choose Size</span>
                  <Link href="/guides/how-to-choose/size-guide" className="text-sm text-blue-600 hover:underline">
                    Size Guide
                  </Link>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {sizes.map((size) => (
                    <button
                      key={size.id}
                      onClick={() => setSelectedSize(size)}
                      className={`p-3 rounded-xl border-2 text-left transition-all ${
                        selectedSize.id === size.id
                          ? "border-blue-600 bg-blue-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="font-bold text-gray-900">{size.length}</div>
                      <div className="text-xs text-gray-500">{size.height}</div>
                      {size.label === "Most Popular" && (
                        <div className="mt-2 text-[10px] uppercase tracking-wide font-semibold text-blue-600">
                          Best Seller
                        </div>
                      )}
                    </button>
                  ))}
                </div>
                <p className="mt-3 text-sm text-gray-600">{selectedSize.desc}</p>
              </div>

              {/* Price & CTA */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-4xl font-bold text-gray-900">${selectedSize.price}</span>
                <span className="text-gray-400 line-through">${selectedSize.price + 40}</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-all">
                  Add to Cart
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="flex-1 inline-flex items-center justify-center px-8 py-4 border-2 border-gray-900 text-gray-900 font-medium rounded-full hover:bg-gray-900 hover:text-white transition-all">
                  Buy Now
                </button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-blue-600" />
                  Free shipping
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-blue-600" />
                  30-day return
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-blue-600" />
                  Class A certified
                </div>
                <div className="flex items-center gap-2">
                  <Droplets className="w-4 h-4 text-blue-600" />
                  Removable cover
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6"
              >
                <feature.icon className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs: Layers / Specs / Care */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 mb-8 border-b border-gray-200">
            {[
              { id: "layers", label: "Layer by Layer" },
              { id: "specs", label: "Specifications" },
              { id: "care", label: "Care Guide" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "layers" && (
              <div className="space-y-6">
                {layers.map((layer, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{layer.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{layer.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "specs" && (
              <div className="overflow-hidden rounded-2xl border border-gray-200">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-gray-100">
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Available Sizes</td>
                      <td className="px-6 py-4 text-gray-600">105cm / 120cm / 140cm</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Diameter</td>
                      <td className="px-6 py-4 text-gray-600">20cm (105/120) · 20.5cm (140)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Outer Cover</td>
                      <td className="px-6 py-4 text-gray-600">94% cotton + 6% spandex, sand-washed</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Filling</td>
                      <td className="px-6 py-4 text-gray-600">0.5mm EPS particles + PCM batting</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Safety</td>
                      <td className="px-6 py-4 text-gray-600">GB18401-2010 Class A · FDA 21CFR177.1640</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Internal Structure</td>
                      <td className="px-6 py-4 text-gray-600">3-segment chambers with adjustable drawstring</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Colors</td>
                      <td className="px-6 py-4 text-gray-600">Mist Purple · Milk Tea Brown · Dark Chocolate</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === "care" && (
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p><strong>Outer cover:</strong> Removable and machine washable. Use water ≤30°C, mild detergent, gentle cycle. Air dry or low-heat tumble.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p><strong>Inner core:</strong> Do NOT wash, soak, or dry. Pat or vacuum surface dust. For stains, wipe with a slightly damp cloth + mild detergent, then blot dry.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p>Fluff and shake regularly to redistribute particles and maintain support.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p>Keep away from sharp objects and high heat sources.</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Size Recommendation */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
              Which Size Is Right for You?
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Choose based on your height and how much of your body you want supported. The pillow should span from your chest to at least your lower legs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {sizes.map((size) => (
              <div
                key={size.id}
                className={`bg-white rounded-2xl p-6 ${size.label === "Most Popular" ? "ring-2 ring-yellow-400" : ""}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{size.length}</h3>
                  <span className="text-2xl font-bold text-blue-600">${size.price}</span>
                </div>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <p><strong>Diameter:</strong> {size.diameter}</p>
                  <p><strong>Best for height:</strong> {size.height}</p>
                </div>
                <p className="text-sm text-gray-600 mb-4">{size.desc}</p>
                <button
                  onClick={() => setSelectedSize(size)}
                  className="w-full py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                >
                  Select {size.length}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
