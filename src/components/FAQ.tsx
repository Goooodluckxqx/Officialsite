"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    category: "Pillow",
    question: "Will the particles leak out?",
    answer: "Made with high-density fabric, precision stitching, and segmented structure — particles won't leak under normal use. Just avoid sharp objects.",
  },
  {
    category: "Pillow",
    question: "Can pregnant women and babies really use it directly against skin?",
    answer: "Yes. Certified with both national Class A and FDA food-grade standards, non-toxic and odorless. Safe for moms and babies to sleep with directly. GB18401-2010 Class A is the highest standard for infant products, no pillowcase needed.",
  },
  {
    category: "Pillow",
    question: "How do I use the adjustable strap?",
    answer: "Pull the side strap to tighten → more firm and supportive; loosen → softer and more conforming, adjust as needed. This design allows tall users to get strong support while petite users enjoy softness, truly one pillow for the whole family.",
  },
  {
    category: "Pillow",
    question: "How long does it last? Will it go flat over time?",
    answer: "Maintains good support for 2–3 years under normal use; segmented structure prevents particle clumping, resists collapsing and going flat. The inner 'segmented divider' locks particles in four support zones for neck, waist, belly, and legs — no shifting, no collapsing.",
  },
  {
    category: "Pillow",
    question: "Will it be hot in summer?",
    answer: "Equipped with PCM temperature control, automatically dissipates heat and maintains a comfortable range, no sweating or stickiness. PCM temperature control padding absorbs excess heat, maintains constant micro-climate, with fabric feel similar to baby onesies, comfortable in all seasons.",
  },
  {
    category: "Pillow",
    question: "What sizes are available? How do I choose?",
    answer: "Three lengths available: 105cm Standard (suitable for most people / height 150-160cm), 120cm Advanced (extra length, perfect for family sharing / height 160-170cm), 140cm Premium (maximum size, spacious / height 170-190cm). The side 'adjustable strap' lets you customize firmness and softness to your preference.",
  },
  {
    category: "Pillow",
    question: "Can the pillow core be washed?",
    answer: "❌ The pillow core/inner liner must NOT be washed, soaked, or dried, as this can cause particles to clump and lose support. Surface dust can be removed by patting or using a vacuum on low setting; for localized stains, use a 'slightly damp soft cloth + mild detergent' to gently wipe, immediately blot dry with a dry cloth, and air dry thoroughly. ✅ The pillowcase is removable and washable: water temperature ≤30°C, mild detergent, gentle cycle.",
  },
  {
    category: "Eye Mask",
    question: "Does the eye mask press on the eyeballs?",
    answer: "No. The silicone foam cushion has contoured eye cavities and a nose-bridge cut-out. The pressure sits on the orbital bone and surrounding area, not on the eyeball itself.",
  },
  {
    category: "Eye Mask",
    question: "How do I heat the cassia seed pack?",
    answer: "Microwave the heat pack for about 1 minute. Always test the temperature on the back of your hand before placing it over your eyes. The warmth typically lasts around 20 minutes. Heat in 30-second intervals if you need to rewarm it.",
  },
  {
    category: "Eye Mask",
    question: "Can I sleep with the heated pack all night?",
    answer: "The pack is designed for a pre-sleep relaxation ritual, not for overnight wear. We recommend using it as you wind down, then removing it before you fall asleep. The mask itself can be worn for light blocking all night.",
  },
  {
    category: "Eye Mask",
    question: "Is the eye mask suitable for all face shapes?",
    answer: "The elastic nylon-spandex outer shell and adjustable strap fit most adult head sizes. The silicone foam cushion flexes to follow the curves of the face, including the nose bridge and eye sockets.",
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
