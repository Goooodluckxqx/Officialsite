"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    title: "终于找到了完美抱枕",
    text: "\"作为侧睡党，以前每天早上起来肩膀都很酸。用了NazzleNest侧睡抱枕后，肩膀和腰部都有很好的支撑，醒来不再酸痛了！\"",
    author: "张女士",
    verified: true,
    product: "侧睡抱枕 120cm",
    rating: 5,
  },
  {
    title: "孕期救星！",
    text: "\"怀孕6个月，晚上睡觉总是翻来覆去不舒服。这个抱枕可以托住腹部，减轻腰部压力，终于能睡个好觉了。而且材质安全，可以直接贴肤。\"",
    author: "李女士",
    verified: true,
    product: "侧睡抱枕 140cm",
    rating: 5,
  },
  {
    title: "全家都爱用",
    text: "\"买了140cm的给全家用，我用来侧睡，老公垫腰，孩子当玩具。调节带设计很贴心，想软就软，想硬就硬，一枕多用！\"",
    author: "王先生",
    verified: true,
    product: "侧睡抱枕 140cm",
    rating: 5,
  },
  {
    title: "夏天也不闷热",
    text: "\"本来担心抱枕会闷热，结果PCM控温真的很有效，整晚都不会觉得闷汗。面料也很舒服，像婴儿打底衫一样柔软。\"",
    author: "赵女士",
    verified: true,
    product: "侧睡抱枕 105cm",
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
            用户好评
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            真实用户的真实体验
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
          <p className="text-sm text-gray-400 mt-2">已有超过10,000位用户选择NazzleNest</p>
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
