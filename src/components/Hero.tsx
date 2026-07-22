"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Truck, Star } from "lucide-react";
import Link from "next/link";

const trustBadges = [
  { icon: Shield, label: "GB18401 Class A Certified" },
  { icon: Shield, label: "FDA Food-Grade Certified" },
  { icon: Star, label: "PCM Temperature Control" },
  { icon: Truck, label: "Free Shipping" },
];

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-oat/10 to-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-16 lg:py-24">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-oat/20 text-milktea-dark rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 fill-milktea text-milktea" />
              2026 New Release
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-chocolate leading-[1.1] mb-6">
              Rest Starts
              <br />
              <span className="text-milktea">Before You Fall Asleep</span>
            </h1>

            <p className="text-lg text-chocolate/70 leading-relaxed mb-8 max-w-lg">
              NazzleNest helps your body let go and your eyes quiet down. The side-sleeping pillow carries your weight; the weighted heated eye mask blocks the light and adds warmth. Together, they make rest a ritual.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-milktea text-cream font-medium rounded-full hover:bg-milktea-dark transition-all hover:gap-3 shadow-lg hover:shadow-xl"
              >
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/product-video.mp4"
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-chocolate text-chocolate font-medium rounded-full hover:bg-chocolate hover:text-cream transition-all"
              >
                Watch Video
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6">
              {trustBadges.map((badge) => (
                <div key={badge.label} className="flex items-center gap-2 text-sm text-chocolate/70">
                  <badge.icon className="w-4 h-4 text-milktea" />
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
                alt="NazzleNest Side-Sleeping Pillow and Weighted Heated Eye Mask"
                className="w-full h-full object-cover"
              />
              {/* Decorative elements */}
              <div className="absolute top-8 right-8 w-20 h-20 bg-lavender/20 rounded-full blur-2xl" />
              <div className="absolute bottom-12 left-8 w-32 h-32 bg-oat/30 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
