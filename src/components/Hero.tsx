"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-16 items-center w-full py-24 lg:py-0">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 max-w-xl"
          >
            <p className="text-milktea text-sm uppercase tracking-[0.2em] font-medium mb-6">
              NazzleNest
            </p>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold text-chocolate leading-[1.05] mb-8">
              Let sleep happen
              <br />
              naturally.
            </h1>

            <p className="text-lg text-chocolate/70 leading-relaxed mb-10 max-w-md">
              Rest starts before you fall asleep. Let your body let go and your eyes quiet down.
            </p>

            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-chocolate text-cream font-medium rounded-full hover:bg-chocolate-light transition-all hover:gap-4"
            >
              Explore Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            <div className="relative aspect-[16/10] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/hero-sleep-naturally.png"
                alt="A woman resting with NazzleNest pillow and eye mask"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
