"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-gray-50 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                About NazzleNest
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              Comfort in Living,<br />
              <span className="text-blue-600">Freedom in Resting</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We believe true rest shouldn't be limited by day or night, nor constrained by posture.
              From daytime naps to deep sleep, every moment of lying down deserves to be gently supported.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-8 text-center">
              The Story Behind Our Brand
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong className="text-gray-900">Nazzle</strong> comes from <em>Nuzzle</em> — the gentle gesture of nestling close with the tip of your nose.
                <br />
                <strong className="text-gray-900">Nest</strong> is a sanctuary — a place where you can rest comfortably and safely.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                NazzleNest is not just about making a pillow. We aim to break free from the constraints of rest scenarios and sleeping positions,
                so that whenever and wherever your body lies down, it finds the support that truly "understands" it.
              </p>
              <p className="text-gray-700 leading-relaxed">
                No rigid support, only breathable comfort. Like clouds embracing a mountain ridge, like a boat returning to a quiet harbor.
                We aspire to be your support that "shapes to comfort," drawing from our experience serving millions of users,
                continuously listening to the voice of the body, and applying mature quality management systems to every detail.
              </p>
            </div>
          </motion.div>

          {/* Brand Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "🌙",
                title: "Break Free from Scenes",
                desc: "From bed to sofa, from side sleeping to reclining — rest doesn't need a definition. Day or night, any posture, comfort follows."
              },
              {
                icon: "🤍",
                title: "Listen to the Body",
                desc: "We've experienced sleep troubles ourselves and understand the longing for support. Every product iteration comes from real physical feedback."
              },
              {
                icon: "✨",
                title: "Focus on Reliable Quality",
                desc: "Not chasing novelty, just focused on doing one reliable thing well. Big-brand quality management systems, where details reveal true quality."
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Experience */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-8 text-center">
              Why We Understand You
            </h2>
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
              <p className="text-gray-700 leading-relaxed mb-6">
                We've experienced sleep troubles ourselves and felt the unspoken longing for support.
                That's why we understand better than anyone what good support means for sleep quality.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our team members have participated in product R&D and quality management for multiple well-known home and textile brands,
                applying mature big-brand quality management systems to every detail of NazzleNest —
                from fabric selection to stitching craftsmanship, from particle filling to safety testing, every step is rigorously controlled.
              </p>
              <p className="text-gray-700 leading-relaxed">
                From our practice serving millions of users, we continuously listen to the voice of the body and sleep.
                Not chasing novelty, just focused on doing one reliable thing well:
                <strong className="text-gray-900">May you be gently supported whenever and wherever you lie down, day or night.</strong>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Target Users */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Made For You
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every body deserves gentle support; every rest deserves to be taken seriously
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                emoji: "😴",
                title: "Side Sleepers",
                subtitle: "Cloud Sleep Nest",
                benefits: [
                  "Say goodbye to numb arms and sore neck & shoulders",
                  "Fill gaps at shoulders, waist, and knees",
                  "Deep sleep, wake up refreshed"
                ]
              },
              {
                emoji: "🤰",
                title: "Expecting Mothers",
                subtitle: "Belly Support Angel",
                benefits: [
                  "Exclusive 'belly support partner' for late pregnancy",
                  "From bed to sofa, a lightweight support point",
                  "Mother & Baby Class A safe, safe against skin"
                ]
              },
              {
                emoji: "🛋️",
                title: "Home Relaxation Enthusiasts",
                subtitle: "Comfort Companion",
                benefits: [
                  "Sofa, carpet, office chair — use it anywhere",
                  "Lounge freely with stable support",
                  "Foldable as back support, leg rest, or sleep pillow"
                ]
              }
            ].map((user, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <div className="text-4xl mb-4">{user.emoji}</div>
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-1">
                  {user.title}
                </h3>
                <p className="text-blue-600 text-sm font-medium mb-4">
                  {user.subtitle}
                </p>
                <ul className="space-y-2">
                  {user.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-700">
                      <span className="text-blue-600 mt-1">✓</span>
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              May Every Rest Be Gently Embraced
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              From daytime naps to deep sleep, NazzleNest — your support that shapes to comfort.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#products"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-blue-600 text-base font-medium rounded-full hover:bg-blue-50 transition-colors"
              >
                Explore Products
              </Link>
              <Link
                href="/#technology"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-blue-700 text-white text-base font-medium rounded-full hover:bg-blue-800 transition-colors border border-blue-400"
              >
                Learn About Technology
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
