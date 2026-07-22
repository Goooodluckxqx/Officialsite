"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, Check } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    title: "Body Support",
    description: "Let your body weight go before sleep starts.",
    products: [
      {
        name: "NazzleNest Side-Sleeping Pillow",
        tag: "Core Line",
        tagColor: "bg-milktea text-cream",
        price: "From $149",
        description: "Long body pillow for side sleepers. Continuous chest-to-calf support with flowing micro-particles and temperature-control layers.",
        features: ["3 sizes: 105/120/140cm", "0.5mm EPS particles", "PCM heat balance", "Baby-safe Class A cover"],
        href: "/products/side-sleeping-pillow",
        image: "/product-pillow.jpg",
      },
    ],
  },
  {
    title: "Sensory Relaxation",
    description: "Help your eyes and nervous system log off.",
    products: [
      {
        name: "NazzleNest Weighted Heated Eye Mask",
        tag: "New Release",
        tagColor: "bg-milktea text-cream",
        price: "$40 - $55",
        description: "Blackout eye mask with a gentle ~100g cassia seed heat pack. Eye-cavity design and skin-friendly cotton contact layer.",
        features: ["True blackout layers", "Cassia seed heat pack", "Eye-cavity silicone cushion", "Travel pouch included"],
        href: "/products/weighted-heated-eye-mask",
        image: "/product-eyemask.jpg",
      },
    ],
  },
];

export default function ProductsPage() {
  return (
    <main className="bg-cream">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-oat/10 via-cream to-oat/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-chocolate mb-6 leading-tight">
              Rest Starts <br />
              <span className="text-milktea">Before You Fall Asleep</span>
            </h1>
            <p className="text-lg md:text-xl text-chocolate/70 max-w-2xl mx-auto leading-relaxed">
              Two products. One idea: body down, eyes quiet, rest begins.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category, categoryIndex) => (
            <div key={category.title} className="mb-20 last:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-10"
              >
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-chocolate mb-3">
                  {category.title}
                </h2>
                <p className="text-chocolate/70 text-lg">{category.description}</p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {category.products.map((product, index) => (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link href={product.href} className="group block relative">
                      <div className="relative bg-oat/10 rounded-2xl overflow-hidden aspect-[4/3] mb-6">
                        <div className="absolute top-4 left-4 z-10">
                          <span className={`px-3 py-1 ${product.tagColor} text-xs font-semibold rounded-full`}>
                            {product.tag}
                          </span>
                        </div>
                        <div className="absolute top-4 right-4 flex items-center gap-1 bg-cream/90 backdrop-blur-sm px-2 py-1 rounded-full z-10">
                          <Star className="w-3 h-3 fill-amber text-amber" />
                          <span className="text-xs font-medium text-chocolate">4.9</span>
                        </div>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h3 className="font-bold text-chocolate text-xl mb-2">{product.name}</h3>
                          <p className="text-sm text-chocolate/70">{product.description}</p>
                        </div>

                        <ul className="space-y-2">
                          {product.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-chocolate/80">
                              <Check className="w-4 h-4 text-milktea flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>

                        <div className="flex items-center justify-between pt-4 border-t border-greige/10">
                          <span className="text-2xl font-bold text-chocolate">{product.price}</span>
                          <span className="inline-flex items-center gap-2 text-milktea font-medium group-hover:gap-3 transition-all">
                            View Details
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Product Line Philosophy */}
      <section className="py-20 bg-chocolate text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Body Down + Eyes Quiet = Rest Begins
            </h2>
            <p className="text-greige text-lg mb-8 leading-relaxed">
              NazzleNest is not two separate products. It is a pre-sleep relaxation system: one product carries the body's weight, the other calms the eyes and nerves. Together they create a clear transition from busy day to restful night.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products/side-sleeping-pillow"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-milktea text-cream rounded-full font-medium hover:bg-milktea-dark transition-colors"
              >
                Shop Pillow
              </Link>
              <Link
                href="/products/weighted-heated-eye-mask"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-milktea text-cream rounded-full font-medium hover:bg-milktea-dark transition-colors"
              >
                Shop Eye Mask
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
