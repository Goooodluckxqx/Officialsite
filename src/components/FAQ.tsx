"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "粒子会不会漏出来？",
    answer: "采用高密面料+精密车缝+分段隔断结构，正常使用不漏粒；避免尖锐物划伤即可。",
  },
  {
    question: "孕妇和宝宝真能直接贴肤吗？",
    answer: "可以。通过国家A类+FDA食品级双重认证，无毒无味，孕妈与婴幼儿可安心裸睡。GB18401-2010国家A类是婴幼儿用品最高标准，无需枕套隔离。",
  },
  {
    question: "调节带怎么用？",
    answer: "拉动侧面调节带收紧→更饱满、支撑更强；放松→更柔软、贴合度更高，按需微调。这种设计让高个子获得强支撑、娇小者更柔软，真正实现一枕全家适用。",
  },
  {
    question: "能用多久？会越睡越瘪吗？",
    answer: "正常使用2–3年保持良好支撑；分段结构防止粒子堆积，不易塌陷、不越睡越瘪。内胆「分段式隔断」锁定粒子于颈、腰、腹、腿四大支撑带，不侧堆、不塌陷。",
  },
  {
    question: "夏天会热吗？",
    answer: "搭载PCM恒温控温，自动散热控温，保持舒适区间，不闷汗、不黏身。PCM控温絮片自动吸收多余热量，维持恒温微气候，触感接近婴儿打底衫面料，四季舒适。",
  },
  {
    question: "有哪些尺寸可选？我该怎么选？",
    answer: "三种长度可选：105cm标准版（适合大多数人）、120cm进阶版（更充裕，全家共享首选）、140cm尊享版（最大尺寸，空间充裕）。侧面「调节带」可根据个人喜好调整饱满度与软硬度。",
  },
  {
    question: "枕芯可以水洗吗？",
    answer: "❌ 枕芯/内胆严禁水洗、浸泡、烘干，防止粒子结块、支撑失效。表面灰尘可用轻拍或吸尘器低档位清洁；局部污渍用「微湿软布+中性清洁剂」轻擦，立即用干布吸干，通风彻底晾干。✅ 枕套可拆洗：水温≤30℃，中性洗涤剂，轻柔模式。",
  },
];

function FAQItem({ question, answer, isOpen, onClick }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="font-medium text-gray-900 group-hover:text-gray-700 transition-colors pr-4">
          Q：{question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-gray-500" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 leading-relaxed">
              <span className="font-semibold">A：</span>{answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
            常见问题
          </h2>
          <p className="text-lg text-gray-600">
            您关心的问题，这里都有答案
          </p>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
