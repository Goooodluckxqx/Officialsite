"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Clock, User } from "lucide-react";

export default function ShoulderNumbnessArticle() {
  return (
    <main className="bg-white">
      {/* Article Header */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-green-50 via-white to-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/blog/relief" className="inline-flex items-center gap-2 text-green-600 text-sm font-medium mb-6 hover:gap-3 transition-all">
              <ArrowLeft className="w-4 h-4" />
              Back to Relief Methods
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                Relief Methods
              </span>
              <span className="flex items-center gap-1 text-gray-400 text-xs">
                <Clock className="w-3 h-3" />
                5 min read
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              Numb Shoulders from Sleeping? 4 Moves for Instant Relief
            </h1>

            <div className="flex items-center gap-3 text-sm text-gray-500">
              <User className="w-4 h-4" />
              <span>NazzleNest Health Team</span>
              <span>·</span>
              <span>May 29, 2026</span>
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
              Waking up with a numb or tingling shoulder is one of the most common complaints among side sleepers. The good news? It's usually caused by pressure on your brachial plexus — the network of nerves running from your spine through your neck and into your arm — and can be relieved quickly with the right movements.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why Does Your Shoulder Go Numb?</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              When you sleep on your side, your body weight compresses the shoulder and the nerves around it. Without proper support, your arm may end up in a position that pinches these nerves for hours at a time. The result: numbness, tingling, or that familiar "pins and needles" sensation when you wake up.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4 Instant Relief Moves</h2>

            <div className="space-y-8 mb-10">
              <div className="bg-green-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">1. Shoulder Rolls (30 seconds)</h3>
                <p className="text-gray-700 leading-relaxed">
                  Stand or sit upright. Slowly roll your shoulders forward in large circles 10 times, then backward 10 times. This increases blood flow and releases tension in the surrounding muscles.
                </p>
              </div>

              <div className="bg-green-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">2. Arm Across Chest Stretch (20 seconds each side)</h3>
                <p className="text-gray-700 leading-relaxed">
                  Bring your affected arm across your chest. Use your opposite hand to gently pull it closer to your chest until you feel a stretch in the back of your shoulder. Hold for 20 seconds, then switch sides.
                </p>
              </div>

              <div className="bg-green-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">3. Neck Tilts (15 seconds each direction)</h3>
                <p className="text-gray-700 leading-relaxed">
                  Slowly tilt your head toward your right shoulder until you feel a gentle stretch on the left side of your neck. Hold for 15 seconds, then repeat on the other side. This helps release pressure on the nerves running from your neck to your shoulder.
                </p>
              </div>

              <div className="bg-green-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">4. Doorway Chest Stretch (30 seconds)</h3>
                <p className="text-gray-700 leading-relaxed">
                  Stand in a doorway with your forearms on the door frame, elbows at shoulder height. Gently lean forward until you feel a stretch across your chest and front shoulders. This opens up the compressed area and restores nerve pathways.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Prevent It from Happening Again</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              While these exercises provide immediate relief, prevention is the real solution. Here's how to stop shoulder numbness before it starts:
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-gray-700">
                <span className="text-green-600 mt-1">•</span>
                <span><strong>Use a side-sleeper pillow</strong> that supports your upper arm, preventing it from compressing against your body</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="text-green-600 mt-1">•</span>
                <span><strong>Avoid sleeping with your arm under your head</strong> — this is the most common cause of nerve compression</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="text-green-600 mt-1">•</span>
                <span><strong>Switch sides periodically</strong> if you're a dedicated side sleeper</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="text-green-600 mt-1">•</span>
                <span><strong>Do these stretches before bed</strong> to release tension and improve circulation</span>
              </li>
            </ul>

            <div className="bg-green-50 rounded-2xl p-8 my-10">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Takeaway</h3>
              <p className="text-gray-700 leading-relaxed">
                Shoulder numbness from sleeping is usually temporary nerve compression, not a serious condition. These four exercises can provide instant relief, but the long-term solution is improving your sleep posture with proper support.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              If numbness persists beyond a few minutes after waking, or is accompanied by weakness or pain, consult a healthcare professional to rule out more serious conditions.
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
              <Link href="/blog/health/lower-back-pain-side-sleeping" className="block bg-white rounded-xl p-6 hover:shadow-md transition-shadow">
                <h4 className="font-medium text-gray-900 mb-1">Side Sleeping with Back Pain? Your Posture May Be Wrong</h4>
                <p className="text-sm text-gray-500">Anatomical analysis of correct side sleeping posture</p>
              </Link>
              <Link href="/blog/relief/side-sleeping-posture" className="block bg-white rounded-xl p-6 hover:shadow-md transition-shadow">
                <h4 className="font-medium text-gray-900 mb-1">Correct Side Sleeping Posture: Orthopedic Doctor Recommended</h4>
                <p className="text-sm text-gray-500">Are you sleeping in the right position?</p>
              </Link>
            </div>

            <div className="bg-green-600 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Sleep Without Numbness</h3>
              <p className="text-green-100 mb-6">The NazzleNest Side-Sleeping Pillow supports your arm and prevents nerve compression.</p>
              <Link
                href="/#products"
                className="inline-flex items-center px-8 py-3.5 bg-white text-green-600 font-medium rounded-full hover:bg-green-50 transition-colors"
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
