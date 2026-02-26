"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface FeatureCardProps {
  tag: string;
  tagColor: string;
  tagBgColor: string;
  title: string;
  subtitle: string;
  items: string[];
  buttonText: string;
  buttonVariant: "primary" | "outline";
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  index: number;
}

function FeatureCard({
  tag,
  tagColor,
  tagBgColor,
  title,
  subtitle,
  items,
  buttonText,
  buttonVariant,
  imageSrc,
  imageAlt,
  reverse = false,
  index,
}: FeatureCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Card 1 and 3 come from right, Card 2 comes from left
  const direction = index === 1 ? -1 : 1;
  const x = useTransform(scrollYProgress, [0, 0.3, 0.5], [direction * 150, direction * 50, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [0, 0.5, 1]);

  const content = (
    <div className="flex flex-col gap-5 flex-1">
      <div
        className="inline-flex px-3 py-1.5 rounded w-fit"
        style={{ backgroundColor: tagBgColor }}
      >
        <span
          className="text-xs font-medium"
          style={{ color: tagColor, fontFamily: 'Inter' }}
        >
          {tag}
        </span>
      </div>

      <h3
        className="text-[#0F172A] text-[28px] font-bold"
        style={{ fontFamily: 'DM Sans' }}
      >
        {title}
      </h3>

      <p
        className="text-[#64748B] text-lg font-medium"
        style={{ fontFamily: 'Inter' }}
      >
        {subtitle}
      </p>

      <div className="flex flex-col gap-3">
        {items.map((item, idx) => (
          <p
            key={idx}
            className="text-[#475569] text-[15px] font-normal leading-[1.6]"
            style={{ fontFamily: 'Inter' }}
          >
            {item}
          </p>
        ))}
      </div>

      <button
        className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg w-fit ${
          buttonVariant === "primary"
            ? "bg-[#23A1FC] text-white"
            : "border border-[#23A1FC] text-[#23A1FC]"
        }`}
      >
        <span className="text-sm font-medium" style={{ fontFamily: 'Inter' }}>
          {buttonText}
        </span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );

  const image = (
    <div className="relative w-[544px] h-[320px] rounded-xl overflow-hidden flex-shrink-0">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-contain"
      />
    </div>
  );

  return (
    <motion.div
      ref={ref}
      style={{ x, opacity }}
      className="flex items-center gap-16 w-full"
    >
      {reverse ? (
        <>
          {image}
          {content}
        </>
      ) : (
        <>
          {content}
          {image}
        </>
      )}
    </motion.div>
  );
}

export default function IntroductionSection() {
  return (
    <section className="w-full bg-white py-20 px-[120px] flex flex-col gap-16 overflow-hidden">
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
          智能文档抽取
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-[#64748B] text-lg font-normal text-center max-w-[900px]"
          style={{ fontFamily: 'Inter' }}
        >
          TextIn xParse 智能文档抽取整合了文档解析处理能力和大模型语义理解能力：基于专业且行业领先的文档解析底座，为文档抽取提供速度更快、结果更准确的必要前提；基于大模型的智能语义理解，让文档抽取的泛化性更高、使用更灵活。
        </motion.p>
      </div>

      {/* Feature 1 - ETL (from right) */}
      <FeatureCard
        index={0}
        tag="核心能力"
        tagColor="#23A1FC"
        tagBgColor="#EBF5FF"
        title="新时代的 ETL"
        subtitle="更准更智能"
        items={[
          "• 0样本实现任意场景的关键信息抽取，再多样的文档，也能一套配置搞定",
          "• 不知道字段在哪个文件也没关系，xParse支持跨文档抽取",
          "• 专项调优大模型，解决普通模型输出不稳定、长度不够导致截断等问题",
        ]}
        buttonText="在线使用"
        buttonVariant="primary"
        imageSrc="/assets/extract-pic1.webp"
        imageAlt="ETL Feature"
      />

      {/* Feature 2 - Trustworthy (from left) */}
      <FeatureCard
        index={1}
        tag="可信赖"
        tagColor="#D97706"
        tagBgColor="#FEF3C7"
        title="结果可信"
        subtitle="支持精准坐标溯源"
        items={[
          "• 精确定位文档中抽取元素和文本的准确位置",
          "• 通过将结果链接到源信息来实现结果验证",
          "• 通过透明、可追溯的人工智能生成的置信度建立信任",
        ]}
        buttonText="在线使用"
        buttonVariant="outline"
        imageSrc="/assets/extract-pic2.webp"
        imageAlt="Trustworthy Feature"
        reverse
      />

      {/* Feature 3 - Plug and Play (from right) */}
      <FeatureCard
        index={2}
        tag="易集成"
        tagColor="#16A34A"
        tagBgColor="#DCFCE7"
        title="即插即用"
        subtitle="快速融入您的工作流程"
        items={[
          "• 自然语言描述，从发票、医疗记录或物流单等文件中提取您需要的信息",
          "• 自动化大规模字段抽取，最大限度减少人工错误，并确保一致、经过验证的结果",
          "• 通过精确坐标将每个字段追溯到其来源，使用schema模式适应任何样本和工作流程",
        ]}
        buttonText="预约演示"
        buttonVariant="primary"
        imageSrc="/assets/extract-pic3.webp"
        imageAlt="Plug and Play Feature"
      />
    </section>
  );
}
