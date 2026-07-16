"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Will the particles leak out?",
    answer: "Made with high-density fabric, precision stitching, and segmented structure — particles won't leak under normal use. Just avoid sharp objects.",
  },
  {
    question: "Can pregnant women and babies really use it directly against skin?",
    answer: "Yes. Certified with both national Class A and FDA food-grade standards, non-toxic and odorless. Safe for moms and babies to sleep with directly. GB18401-2010 Class A is the highest standard for infant products, no pillowcase needed.",
  },
  {
    question: "How do I use the adjustable strap?",
    answer: "Pull the side strap to tighten → more firm and supportive; loosen → softer and more conforming, adjust as needed. This design allows tall users to get strong support while petite users enjoy softness, truly one pillow for the whole family.",
  },
  {
    question: "How long does it last? Will it go flat over time?",
    answer: "Maintains good support for 2–3 years under normal use; segmented structure prevents particle clumping, resists collapsing and going flat. The inner 'segmented divider' locks particles in four support zones for neck, waist, belly, and legs — no shifting, no collapsing.",
  },
  {
    question: "Will it be hot in summer?",
    answer: "Equipped with PCM temperature control, automatically dissipates heat and maintains a comfortable range, no sweating or stickiness. PCM temperature control padding absorbs excess heat, maintains constant micro-climate, with fabric feel similar to baby onesies, comfortable in all seasons.",
  },
  {
    question: "What sizes are available? How do I choose?",
    answer: "Three lengths available: 105cm Standard (suitable for most people), 120cm Advanced (extra length, perfect for family sharing), 140cm Premium (maximum size, spacious). The side 'adjustable strap' lets you customize firmness and softness to your preference.",
  },
  {
    question: "Can the pillow core be washed?",
    answer: "❌ The pillow core/inner liner must NOT be washed, soaked, or dried, as this can cause particles to clump and lose support. Surface dust can be removed by patting or using a vacuum on low setting; for localized stains, use a 'slightly damp soft cloth + mild detergent' to gently wipe, immediately blot dry with a dry cloth, and air dry thoroughly. ✅ The pillowcase is removable and washable: water temperature ≤30°C, mild detergent, gentle cycle.",
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
          Q: {question}
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
              <span className="font-semibold">A:</span>{answer}
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
            FAQ
          </h2>
          <p className="text-lg text-gray-600">
            Answers to your most common questions
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
