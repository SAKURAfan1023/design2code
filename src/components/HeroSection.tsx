"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ctaButtons = [
  { text: "在线使用", isMain: true },
  { text: "API文档", isMain: false },
  { text: "私有化部署", isMain: false },
  { text: "查看价格", isMain: false },
];

export default function HeroSection() {
  return (
    <section className="w-full bg-white py-20 px-[120px] flex flex-col items-center gap-10">
      {/* Hero Content */}
      <div className="flex flex-col items-center gap-6 w-[900px]">
        {/* Title with InView animation */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-[#0F172A] text-[52px] font-bold text-center"
          style={{ fontFamily: 'DM Sans' }}
        >
          TextIn xParse 智能文档抽取
        </motion.h1>

        {/* Subtitle with InView animation */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-[#64748B] text-[22px] font-medium text-center"
          style={{ fontFamily: 'Inter' }}
        >
          超越 OCR 和单独大模型：基于智能文档解析的文档抽取
        </motion.p>

        {/* Description with InView animation */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-[#64748B] text-base font-normal text-center leading-[1.6] max-w-[800px]"
          style={{ fontFamily: 'Inter' }}
        >
          能从任意文档中提取关键信息，适用于重复、批量的文档结构化场景，分钟级实现复杂文档数据智能填单和信息录入系统自动化。
        </motion.p>

        {/* CTA Group with scale spring animation */}
        <div className="flex items-center gap-6">
          {ctaButtons.map((btn, index) => (
            <motion.button
              key={btn.text}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 15,
                delay: 0.4 + index * 0.1,
              }}
              className={
                btn.isMain
                  ? "flex items-center justify-center px-9 py-4 rounded-3xl"
                  : "text-[#23A1FC] text-sm font-medium px-1 py-2 hover:underline"
              }
              style={
                btn.isMain
                  ? {
                      fontFamily: 'Inter',
                      background: 'linear-gradient(180deg, rgba(255,255,255,0.93) 0%, rgba(255,255,255,0.8) 100%)',
                      boxShadow: '0 6px 20px -2px rgba(15,23,42,0.13), 0 1px 0 0 rgba(255,255,255,0.67)',
                      border: '1.5px solid rgba(255,255,255,0.56)',
                      backdropFilter: 'blur(24px)',
                    }
                  : { fontFamily: 'Inter' }
              }
            >
              {btn.isMain ? (
                <span className="text-[#0F172A] text-base font-semibold">{btn.text}</span>
              ) : (
                btn.text
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Hero Image with bottom-up fade animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        className="relative w-[800px] h-[648px] rounded-xl overflow-hidden"
      >
        <Image
          src="/assets/banner.webp"
          alt="TextIn xParse Banner"
          fill
          className="object-contain"
          priority
        />
      </motion.div>
    </section>
  );
}
