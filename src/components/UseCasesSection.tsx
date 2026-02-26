"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { getAssetPath } from "@/lib/utils";

interface UseCaseCardProps {
  number: string;
  title: string;
  description: string;
  tags: string[];
  imageSrc: string;
  imageAlt: string;
  index: number;
}

function UseCaseCard({ number, title, description, tags, imageSrc, imageAlt, index }: UseCaseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.15,
      }}
      className="w-full bg-[#F8FAFC] rounded-2xl p-6 flex items-center gap-8"
    >
      {/* Image */}
      <div className="relative w-[617px] h-[220px] rounded-xl overflow-hidden flex-shrink-0">
        <Image
          src={getAssetPath(imageSrc)}
          alt={imageAlt}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 flex-1 py-4 pr-6">
        <span
          className="text-[#23A1FC] text-[48px] font-bold"
          style={{ fontFamily: 'DM Sans' }}
        >
          {number}
        </span>
        <h3
          className="text-[#0F172A] text-[22px] font-semibold"
          style={{ fontFamily: 'DM Sans' }}
        >
          {title}
        </h3>
        <p
          className="text-[#64748B] text-sm font-normal leading-[1.6]"
          style={{ fontFamily: 'Inter' }}
        >
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1.5 bg-[#F1F5F9] rounded-full text-[#64748B] text-xs font-medium"
              style={{ fontFamily: 'Inter' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function UseCasesSection() {
  return (
    <section className="w-full bg-white py-20 px-[120px] flex flex-col items-center gap-12">
      {/* Header with InView animation */}
      <div className="flex flex-col items-center gap-4 w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-[#0F172A] text-[40px] font-bold text-center"
          style={{ fontFamily: 'DM Sans' }}
        >
          强大的语义理解与推理能力
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-[#64748B] text-lg font-normal text-center"
          style={{ fontFamily: 'Inter' }}
        >
          基于大语言模型，实现真正智能的文档理解
        </motion.p>
      </div>

      {/* Cards with InView fade-in from bottom */}
      <div className="flex flex-col gap-8 w-full">
        <UseCaseCard
          index={0}
          number="01"
          title="智能的泛化性"
          description="无需针对每种文档单独训练模型，一套方案即可处理多种格式和样式的文档。"
          tags={["多样式支持", "结构化提取"]}
          imageSrc="/assets/case-1.webp"
          imageAlt="Use Case 1"
        />

        <UseCaseCard
          index={1}
          number="02"
          title="智能内容推理"
          description="不仅能识别文字，更能理解上下文语义，进行智能推理和信息补全。"
          tags={["识别电影信息", "判断商品信息", "智能内容理解"]}
          imageSrc="/assets/case-2.webp"
          imageAlt="Use Case 2"
        />

        <UseCaseCard
          index={2}
          number="03"
          title="智能格式转换"
          description="自动识别并转换多种文档格式，保持内容结构和语义的完整性。"
          tags={["识别多格式", "自动格式化转换"]}
          imageSrc="/assets/case-3.webp"
          imageAlt="Use Case 3"
        />
      </div>
    </section>
  );
}
