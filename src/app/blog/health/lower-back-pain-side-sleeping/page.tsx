"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Clock, User } from "lucide-react";

export default function LowerBackPainArticle() {
  return (
    <main className="bg-white">
      {/* Article Header */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-red-50 via-white to-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/blog/health" className="inline-flex items-center gap-2 text-red-600 text-sm font-medium mb-6 hover:gap-3 transition-all">
              <ArrowLeft className="w-4 h-4" />
              Back to Health & Wellness
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">
                Health & Wellness
              </span>
              <span className="flex items-center gap-1 text-gray-400 text-xs">
                <Clock className="w-3 h-3" />
                5 min read
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              Side Sleeping with Back Pain? Your Posture May Be Wrong
            </h1>

            <div className="flex items-center gap-3 text-sm text-gray-500">
              <User className="w-4 h-4" />
              <span>NazzleNest Health Team</span>
              <span>·</span>
              <span>June 1, 2026</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-gray-700 leading-relaxed mb-6">
              Many people experience lower back pain when sleeping on their side. While side sleeping is generally considered a healthy position, doing it incorrectly can lead to significant discomfort and even long-term spinal issues.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why Does Side Sleeping Cause Back Pain?</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              When you sleep on your side without proper support, your spine can fall out of its natural alignment. The gap between your waist and the mattress creates a curve in your lower back, causing muscles to strain and pressure to build on your joints.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Additionally, if your top leg drops forward, it rotates your pelvis and twists your spine — a position that puts significant stress on your lumbar region over hours of sleep.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Anatomy of Correct Side Sleeping</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              In proper side sleeping posture, your spine should maintain a straight line from your neck to your tailbone. This requires:
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-gray-700">
                <span className="text-red-600 mt-1">•</span>
                <span>A pillow that fills the space between your neck and shoulder without lifting your head too high</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="text-red-600 mt-1">•</span>
                <span>Support under your waist to prevent your midsection from sinking</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="text-red-600 mt-1">•</span>
                <span>A pillow between your knees to keep your hips aligned and prevent pelvic rotation</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="text-red-600 mt-1">•</span>
                <span>Support for your upper arm to prevent shoulder strain</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How a Side-Sleeper Pillow Helps</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              A well-designed side-sleeper pillow addresses all these alignment needs in one product. Unlike regular pillows that only support your head, a side-sleeper pillow extends along your body to provide continuous support from neck to knees.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The <strong className="text-gray-900">NazzleNest Side-Sleeping Pillow</strong> uses micro-particle flow technology to conform to your body shape, filling gaps and providing support exactly where you need it. The segmented structure ensures particles stay in four key support zones — neck, waist, belly, and legs — preventing the collapse and shifting that cause back pain.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Quick Fixes You Can Try Tonight</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              If you don't have a side-sleeper pillow yet, here are some immediate adjustments:
            </p>

            <ol className="space-y-3 mb-6 list-decimal list-inside">
              <li className="text-gray-700">Place a regular pillow between your knees to align your hips</li>
              <li className="text-gray-700">Roll up a towel and place it under your waist for lumbar support</li>
              <li className="text-gray-700">Hug a pillow to support your upper arm and prevent shoulder rotation</li>
              <li className="text-gray-700">Ensure your head pillow keeps your neck in line with your spine</li>
            </ol>

            <div className="bg-red-50 rounded-2xl p-8 my-10">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Takeaway</h3>
              <p className="text-gray-700 leading-relaxed">
                Back pain from side sleeping is usually caused by spinal misalignment, not the position itself. With proper support — whether improvised or with a purpose-built side-sleeper pillow — you can enjoy the benefits of side sleeping without the pain.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              If your back pain persists despite these adjustments, consult a healthcare professional to rule out underlying conditions.
            </p>
          </motion.article>
        </div>
      </section>

      {/* Related & CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h3>
            <div className="space-y-4 mb-12">
              <Link href="/blog/relief/lower-back-pain-relief" className="block bg-white rounded-xl p-6 hover:shadow-md transition-shadow">
                <h4 className="font-medium text-gray-900 mb-1">How to Relieve Back Pain? A Must-Read Guide for Side Sleepers</h4>
                <p className="text-sm text-gray-500">5 immediately effective relief methods</p>
              </Link>
              <Link href="/blog/relief/side-sleeping-posture" className="block bg-white rounded-xl p-6 hover:shadow-md transition-shadow">
                <h4 className="font-medium text-gray-900 mb-1">Correct Side Sleeping Posture: Orthopedic Doctor Recommended</h4>
                <p className="text-sm text-gray-500">Are you sleeping in the right position?</p>
              </Link>
            </div>

            <div className="bg-red-600 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready for Pain-Free Sleep?</h3>
              <p className="text-red-100 mb-6">The NazzleNest Side-Sleeping Pillow provides the full-body support your spine needs.</p>
              <Link
                href="/#products"
                className="inline-flex items-center px-8 py-3.5 bg-white text-red-600 font-medium rounded-full hover:bg-red-50 transition-colors"
              >
                Explore Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
