"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    title: "Finally Found the Perfect Pillow",
    text: "\"As a side sleeper, I used to wake up with sore shoulders every morning. With the NazzleNest side-sleeping pillow, my shoulders and waist are perfectly supported — no more pain!\"",
    author: "Ms. Zhang",
    verified: true,
    product: "Side-Sleeping Pillow 120cm",
    rating: 5,
  },
  {
    title: "A Lifesaver During Pregnancy!",
    text: "\"6 months pregnant, I couldn't get comfortable at night. This pillow supports my belly and relieves waist pressure — finally a good night's sleep! And the material is safe enough to use directly against skin.\"",
    author: "Ms. Li",
    verified: true,
    product: "Side-Sleeping Pillow 140cm",
    rating: 5,
  },
  {
    title: "The Whole Family Loves It",
    text: "\"Bought the 140cm for the whole family — I use it for side sleeping, my husband uses it for back support, and the kids love it as a toy. The adjustable strap design is thoughtful — soft or firm, however you want it. One pillow, many uses!\"",
    author: "Mr. Wang",
    verified: true,
    product: "Side-Sleeping Pillow 140cm",
    rating: 5,
  },
  {
    title: "Not Stuffy Even in Summer",
    text: "\"I was worried the pillow would be stuffy, but the PCM temperature control really works — no sweating all night. The fabric is also super comfortable, soft like baby onesies.\"",
    author: "Ms. Zhao",
    verified: true,
    product: "Side-Sleeping Pillow 105cm",
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">
            Customer Reviews
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Real experiences from real users
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-blue-500">4.9</span>
            <span className="text-gray-400">/5.0</span>
          </div>
          <p className="text-sm text-gray-400 mt-2">Over 10,000 users have chosen NazzleNest</p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50"
            >
              <Quote className="w-8 h-8 text-blue-400 mb-4" />
              
              <h3 className="font-medium text-lg mb-3">{review.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">{review.text}</p>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{review.author}</p>
                    <p className="text-xs text-gray-400">{review.product}</p>
                  </div>
                </div>
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
