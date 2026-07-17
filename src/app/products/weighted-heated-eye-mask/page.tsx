"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Star, Shield, Sun, Thermometer, Eye, Package } from "lucide-react";
import Link from "next/link";

const colors = [
  { id: "mist-purple", name: "Mist Purple", price: 159, className: "bg-purple-200" },
  { id: "misty-blue", name: "Misty Blue", price: 159, className: "bg-blue-200" },
];

const sets = [
  { id: "standard", name: "Standard Set", price: 159, includes: "Eye mask + 1 heat pack + travel pouch" },
  { id: "plus", name: "Heat Pack Plus Set", price: 189, includes: "Eye mask + 2 heat packs + travel pouch" },
];

const layers = [
  {
    title: "Outer Layer: Nylon-Spandex Elastic Shell",
    content: "90% nylon + 10% spandex. Soft, stretchy, and durable — the first touch you feel.",
  },
  {
    title: "Comfort Layer: Lyocell Blend",
    content: "80% polyester + 20% lyocell (Tencel). Adds a smooth, breathable, next-to-skin feel.",
  },
  {
    title: "Light Block Layer: 100% Polyester Blackout Fabric",
    content: "Seals out indoor lights, device glow, and early-morning sun to signal your brain it's time to wind down.",
  },
  {
    title: "Cushion Layer: Silicone Foam",
    content: "55% silicone rubber + 45% polyurethane. Shaped with eye cavities and a nose bridge cut-out to avoid pressing your eyes and reduce light leakage.",
  },
  {
    title: "Skin Contact Layer: Washed Cotton",
    content: "94% cotton + 6% spandex. Same sand-washed cotton as the pillow cover, soft and breathable for long wear.",
  },
];

const features = [
  { icon: Sun, title: "True Blackout", desc: "Multi-layer fabric blocks ambient light for a darker wind-down environment." },
  { icon: Thermometer, title: "Warm Cassia Heat Pack", desc: "Microwave for ~1 minute; enjoy ~20 minutes of gentle warmth around the eyes." },
  { icon: Eye, title: "Eye-Cavity Design", desc: "Silicone foam cushion leaves space around your eyes — no pressure on the eyeball." },
  { icon: Package, title: "Travel Pouch Included", desc: "Keep the mask and heat pack clean and organized at home, at work, or on the road." },
];

export default function EyeMaskPage() {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSet, setSelectedSet] = useState(sets[0]);
  const [activeTab, setActiveTab] = useState<"layers" | "specs" | "care">("layers");

  const currentPrice = selectedSet.price;

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
            <span className="text-gray-900 font-medium">Weighted Heated Eye Mask</span>
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
                src="/product-eyemask.jpg"
                alt="NazzleNest Weighted Heated Eye Mask"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-warm-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                New Release
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-warm-100 text-warm-700 rounded-full text-sm font-medium mb-4">
                <Thermometer className="w-4 h-4" />
                Heat + Light Gravity
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
                NazzleNest Weighted Heated Eye Mask
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A bedtime tool for tired eyes. It blocks light, hugs the face with gentle weight, and adds a warm cassia-seed heat pack to help your eyes — and your nervous system — finally log off.
              </p>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">4.9 · Soft, warm, and eye-pressure free</span>
              </div>

              {/* Color Selector */}
              <div className="mb-6">
                <span className="font-semibold text-gray-900 block mb-3">Color</span>
                <div className="flex gap-3">
                  {colors.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColor(color)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all ${
                        selectedColor.id === color.id
                          ? "border-warm-600 bg-warm-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <span className={`w-5 h-5 rounded-full ${color.className} border border-gray-300`} />
                      <span className="text-sm font-medium text-gray-900">{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Set Selector */}
              <div className="mb-8">
                <span className="font-semibold text-gray-900 block mb-3">Set</span>
                <div className="space-y-3">
                  {sets.map((set) => (
                    <button
                      key={set.id}
                      onClick={() => setSelectedSet(set)}
                      className={`w-full flex items-center justify-between p-4 rounded-xl border-2 text-left transition-all ${
                        selectedSet.id === set.id
                          ? "border-warm-600 bg-warm-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div>
                        <div className="font-bold text-gray-900">{set.name}</div>
                        <div className="text-sm text-gray-600">{set.includes}</div>
                      </div>
                      <div className="font-bold text-warm-700">${set.price}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price & CTA */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-4xl font-bold text-gray-900">${currentPrice}</span>
                <span className="text-gray-400 line-through">${currentPrice + 40}</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-warm-600 text-white font-medium rounded-full hover:bg-warm-700 transition-all">
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
                  <Check className="w-4 h-4 text-warm-600" />
                  Free shipping
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-warm-600" />
                  30-day return
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-warm-600" />
                  Class A skin-contact fabric
                </div>
                <div className="flex items-center gap-2">
                  <Thermometer className="w-4 h-4 text-warm-600" />
                  Reusable heat pack
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-warm-50">
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
                <feature.icon className="w-8 h-8 text-warm-600 mb-4" />
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
                    ? "border-warm-600 text-warm-600"
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
                    <div className="w-8 h-8 rounded-full bg-warm-100 text-warm-700 flex items-center justify-center font-bold text-sm flex-shrink-0">
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
                      <td className="px-6 py-4 font-medium text-gray-900">Product Set</td>
                      <td className="px-6 py-4 text-gray-600">Eye mask + cassia seed heat pack + travel pouch</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Heat Pack Fill</td>
                      <td className="px-6 py-4 text-gray-600">Roasted cassia seeds, ~100g</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Heat Pack Use</td>
                      <td className="px-6 py-4 text-gray-600">Microwave ~1 min · Warmth lasts ~20 min</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Outer Shell</td>
                      <td className="px-6 py-4 text-gray-600">90% nylon + 10% spandex</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Skin Contact</td>
                      <td className="px-6 py-4 text-gray-600">94% cotton + 6% spandex, sand-washed</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Light Block</td>
                      <td className="px-6 py-4 text-gray-600">100% polyester blackout fabric</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Cushion Layer</td>
                      <td className="px-6 py-4 text-gray-600">55% silicone rubber + 45% polyurethane, eye-cavity cut</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Colors</td>
                      <td className="px-6 py-4 text-gray-600">Mist Purple · Misty Blue</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === "care" && (
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p><strong>Eye mask shell:</strong> Hand wash or gentle machine cycle in cold water. Air dry. Do not bleach or tumble dry.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p><strong>Cassia seed heat pack:</strong> Do not wash. Microwave only. Heat in 30-second intervals and check temperature before use to avoid overheating.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p>Store the heat pack in a dry place. Replace if the fabric shows wear or if seeds smell burnt.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p>Always test warmth on the back of your hand before placing over eyes. Not a medical device.</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              How to Use
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A simple wind-down ritual for screen-tired eyes.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Heat the Pack", desc: "Microwave the cassia seed pack for about 1 minute. Test on your wrist first." },
              { step: "02", title: "Slip It In", desc: "Place the warm pack into the eye mask's inner pocket. The weight settles gently over your eyes." },
              { step: "03", title: "Close Your Eyes", desc: "Lie back, block the light, and let the warmth and gentle pressure signal your body to relax." },
            ].map((item) => (
              <div key={item.step} className="bg-gray-800 rounded-2xl p-8">
                <div className="text-warm-400 font-bold text-5xl mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
