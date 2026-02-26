"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function FinalCTASection() {
  return (
    <section
      className="w-full py-20 px-[120px] flex flex-col items-center gap-8"
      style={{
        background: 'linear-gradient(135deg, #1A66FF 0%, #23A1FC 100%)'
      }}
    >
      {/* Title with InView animation */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-white text-4xl font-bold text-center"
        style={{ fontFamily: 'DM Sans' }}
      >
        准备开始您的数字化转型之旅？
      </motion.h2>

      {/* Subtitle with InView animation */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="text-white/80 text-lg font-normal text-center"
        style={{ fontFamily: 'Inter' }}
      >
        已有1000+客户通过TextIn更好地拥抱LLM，进一步放大文档的价值
      </motion.p>

      {/* Button with scale animation */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 15,
          delay: 0.2,
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 bg-white px-10 py-4 rounded-lg"
      >
        <span
          className="text-[#1A66FF] text-base font-semibold"
          style={{ fontFamily: 'Inter' }}
        >
          免费试用
        </span>
        <ArrowRight className="w-[18px] h-[18px] text-[#1A66FF]" />
      </motion.button>
    </section>
  );
}
