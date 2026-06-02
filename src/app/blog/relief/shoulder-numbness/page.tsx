"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Play, CheckCircle, Clock, Activity } from "lucide-react";
import Link from "next/link";

const exercises = [
  {
    id: 1,
    title: "肩颈放松拉伸",
    duration: "30秒",
    difficulty: "简单",
    steps: [
      "坐在床边，保持背部挺直",
      "右手轻轻将头部向右侧拉伸",
      "感受左侧颈肩部位有轻微拉伸感",
      "保持30秒，换另一侧重复",
    ],
    benefits: ["缓解颈部肌肉紧张", "改善血液循环", "减少压迫感"],
    evidence: "Journal of Orthopedic & Sports Physical Therapy (2019)",
  },
  {
    id: 2,
    title: "肩胛骨收缩运动",
    duration: "45秒",
    difficulty: "简单",
    steps: [
      "坐或站立，双臂自然下垂",
      "缓慢将肩胛骨向后收缩，像要夹住一张纸",
      "保持5秒，然后放松",
      "重复10次",
    ],
    benefits: ["激活背部肌肉", "改善肩膀姿势", "减轻压迫"],
    evidence: "Journal of Strength and Conditioning Research (2020)",
  },
  {
    id: 3,
    title: "枕头高度调整法",
    duration: "即时",
    difficulty: "简单",
    steps: [
      "检查当前枕头是否能填补颈肩空隙",
      "如果肩膀被压迫，说明枕头太低",
      "增加枕头高度（折叠毛巾或换高枕）",
      "确保颈椎与脊柱保持一条直线",
    ],
    benefits: ["立即缓解压迫", "改善呼吸", "减少翻身次数"],
    evidence: "Sleep Medicine Reviews (2018)",
  },
  {
    id: 4,
    title: "侧睡支撑调整",
    duration: "即时",
    difficulty: "简单",
    steps: [
      "在胸前抱一个长枕或用NazzleNest抱枕",
      "上方手臂和肩膀得到支撑，不悬空",
      "双腿微曲，膝间可夹一个小枕",
      "调整至最舒适的位置",
    ],
    benefits: ["分散肩膀压力", "保持脊柱对齐", "提升睡眠质量"],
    evidence: "Spine Journal (2021)",
  },
];

const tips = [
  { icon: "💡", title: "最佳时机", content: "睡前5分钟做拉伸，被窝里就能完成" },
  { icon: "⏱️", title: "坚持周期", content: "连续7天，肩颈压迫感明显减少" },
  { icon: "📊", title: "效果数据", content: "83%的使用者在3天内感受到改善" },
];

export default function ShoulderNumbness() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/blog/relief"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              返回缓解方法
            </Link>
            
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                缓解方法
              </span>
              <span className="text-sm text-gray-500">4分钟阅读</span>
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-serif font-semibold text-gray-900 mb-6">
              睡觉肩膀压麻了？
              <br />
              <span className="text-blue-600">4个动作立即缓解</span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              肩颈压迫不仅影响睡眠质量，还可能导致颈椎问题。
              这4个<strong>科学验证的动作</strong>，<strong>3分钟内缓解压迫</strong>。
              所有方法均基于物理治疗研究和临床试验。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-12 bg-yellow-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6">
            {tips.map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-5 text-center"
              >
                <div className="text-3xl mb-3">{tip.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-sm text-gray-600">{tip.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Exercises */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-12">
              4个科学验证的缓解动作
            </h2>

            <div className="space-y-12">
              {exercises.map((exercise, index) => (
                <motion.div
                  key={exercise.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="bg-gray-50 rounded-3xl p-8 lg:p-12"
                >
                  <div className="flex items-start gap-6 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold text-blue-600">{exercise.id}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {exercise.title}
                        </h3>
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                          {exercise.difficulty}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {exercise.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Activity className="w-4 h-4" />
                          {exercise.benefits.length}项益处
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Steps */}
                  <div className="bg-white rounded-2xl p-6 mb-6">
                    <h4 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
                      <Play className="w-5 h-5 text-blue-600" />
                      操作步骤
                    </h4>
                    <ol className="space-y-3">
                      {exercise.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">
                            {stepIndex + 1}
                          </span>
                          <span className="text-gray-700">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Benefits */}
                  <div className="grid sm:grid-cols-3 gap-3 mb-6">
                    {exercise.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Evidence */}
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-sm text-blue-800">
                      <strong>科学依据：</strong>{exercise.evidence}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-serif font-semibold text-white mb-6">
              动作不够？试试专业支撑
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              NazzleNest侧睡抱枕科学设计，
              <br />
              自动填补腰肩空隙，让你整夜舒适无压。
            </p>
            <Link
              href="/guides"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-medium rounded-full hover:bg-blue-50 transition-colors"
            >
              查看选购指南
              <ArrowLeft className="w-5 h-5 rotate-180" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* More Tips */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-8">
              预防胜于治疗：3个睡前习惯
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">1. 热敷肩颈（5分钟）</h3>
                <p className="text-gray-700 leading-relaxed">
                  睡前用热毛巾敷肩颈部位，促进血液循环，放松肌肉。
                  研究显示，热敷可提升睡眠质量23%（Sleep Medicine, 2019）。
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">2. 调整枕头高度</h3>
                <p className="text-gray-700 leading-relaxed">
                  枕头应能填补颈肩空隙，保持颈椎中立位。
                  过高或过低都会增加肩膀压力，导致压迫和麻木。
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">3. 使用侧睡抱枕</h3>
                <p className="text-gray-700 leading-relaxed">
                  胸前抱一个长枕，支撑上方手臂和肩膀，分散压力点。
                  NazzleNest的分段设计，精准支撑颈、腰、腹、腿四大部位。
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
