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
                关于 NazzleNest 纳乐适
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              舒适而居，<br />
              <span className="text-blue-600">自在而息</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              我们相信，真正的休憩不应分昼夜，也不该被姿态束缚。
              从日间小憩到深夜睡眠，每一次躺下，都值得被温柔地托住。
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
              品牌的由来
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong className="text-gray-900">Nazzle</strong> 取自 <em>Nuzzle</em> —— 鼻尖轻触、轻松依偎的温柔姿态。
                <br />
                <strong className="text-gray-900">Nest</strong> 则是巢穴 —— 一个可以安心舒适休息的地方。
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                纳乐适，不只是做一个枕头。我们想做的是：打破休憩场景与睡姿的束缚，
                让身体无论何时何地躺下，都能找到那个「懂它」的依靠。
              </p>
              <p className="text-gray-700 leading-relaxed">
                没有僵硬的支撑，只有会呼吸的承托。如云偎山脊，如舟归静湾。
                我们愿做你「随形而安」的依靠，从服务千万用户的实践中，
                持续聆听身体的声音，将成熟的品质管理体系复刻到每一处细节。
              </p>
            </div>
          </motion.div>

          {/* Brand Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "🌙",
                title: "打破场景束缚",
                desc: "从床到沙发，从侧睡到半躺，休憩无需被定义。无论昼夜、无论姿态，舒适随行。"
              },
              {
                icon: "🤍",
                title: "倾听身体声音",
                desc: "我们也曾经历睡眠困扰，懂得被承托的渴望。每一次产品迭代，都源于真实的身体反馈。"
              },
              {
                icon: "✨",
                title: "专注可靠好物",
                desc: "不追求标新立异，只专注于做好一件可靠的事。大品牌品质管理体系，细节见真章。"
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
              我们为何懂得你
            </h2>
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
              <p className="text-gray-700 leading-relaxed mb-6">
                我们也曾经历睡眠困扰，也有过未曾说出口的、对被承托的渴望。
                正因如此，我们比任何人都更懂得：一个好的支撑，对睡眠质量意味着什么。
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                团队成员曾参与多个知名家居与贴身纺织品品牌的产品研发与品质管理，
                将成熟的大品牌质量管理体系，复刻到 NazzleNest 的每一处细节——
                从面料选择到车缝工艺，从粒子填充到安全检测，每一步都严苛把关。
              </p>
              <p className="text-gray-700 leading-relaxed">
                从服务千万用户的实践中，我们持续聆听身体和睡眠的声音。
                不追求标新立异，只专注于做好一件可靠的事：
                <strong className="text-gray-900">愿你不论昼夜，不论何时何地躺下，总被温柔地托住。</strong>
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
              为谁而造
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              每一个身体都值得被温柔承托，每一段休憩都值得被认真对待
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                emoji: "😴",
                title: "侧睡星人",
                subtitle: "云端睡窝",
                benefits: [
                  "告别手臂麻木与肩颈酸痛",
                  "填补肩、腰、膝部空隙",
                  "深度睡眠，醒后不累"
                ]
              },
              {
                emoji: "🤰",
                title: "孕期妈妈",
                subtitle: "托腹天使",
                benefits: [
                  "专属孕晚期「托腹伴侣」",
                  "从床到沙发，轻盈支点",
                  "母婴A类安全，可直接贴肤"
                ]
              },
              {
                emoji: "🛋️",
                title: "居家休闲族",
                subtitle: "舒适搭子",
                benefits: [
                  "沙发、地毯、办公椅皆可用",
                  "随心瘫，稳承托",
                  "可折叠作腰靠、腿凳、睡枕"
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
              愿你的每一次休憩，都被温柔以待
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              从日间小憩到深夜睡眠，NazzleNest 纳乐适，做你随形而安的依靠。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#products"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-blue-600 text-base font-medium rounded-full hover:bg-blue-50 transition-colors"
              >
                探索产品
              </Link>
              <Link
                href="/#technology"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-blue-700 text-white text-base font-medium rounded-full hover:bg-blue-800 transition-colors border border-blue-400"
              >
                了解科技
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
