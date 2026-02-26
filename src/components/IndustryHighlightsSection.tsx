"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  { id: "manufacturing", label: "生产制造" },
  { id: "finance", label: "金融服务" },
  { id: "logistics", label: "物流运输" },
  { id: "healthcare", label: "医疗健康" },
  { id: "legal", label: "法律合规" },
];

const tabContents: Record<string, {
  title: string;
  description: string;
  features: string[];
  image: string;
}> = {
  manufacturing: {
    title: "生产制造行业解决方案",
    description: "从客户需求单中抽取样品参数，提升客户响应体验；从复杂多样的采购单中提取信息录入系统，实现流程自动化；通过模型抽取减少人工错误，提高流程效率，实现降本增收。",
    features: ["抽取样品参数", "采购单信息录入", "减少人工错误"],
    image: "/assets/highlight-5.webp",
  },
  finance: {
    title: "金融服务行业解决方案",
    description: "从各类金融文档中智能抽取关键信息，包括合同、报表、申请表等，实现金融业务流程自动化，提升审批效率。",
    features: ["合同信息抽取", "报表数据处理", "申请表自动填写"],
    image: "/assets/highlight-5.webp",
  },
  logistics: {
    title: "物流运输行业解决方案",
    description: "智能识别物流单据，自动抽取运单信息、收发货地址、货物明细等，大幅提升物流信息处理效率。",
    features: ["运单信息识别", "地址信息提取", "货物明细抽取"],
    image: "/assets/highlight-5.webp",
  },
  healthcare: {
    title: "医疗健康行业解决方案",
    description: "从医疗记录、检验报告、处方单等文档中准确抽取患者信息和诊疗数据，助力医疗数字化转型。",
    features: ["病历信息抽取", "检验结果识别", "处方数据提取"],
    image: "/assets/highlight-5.webp",
  },
  legal: {
    title: "法律合规行业解决方案",
    description: "智能分析法律文书、合同协议等文档，快速抽取关键条款和法律要点，提升法务工作效率。",
    features: ["合同条款分析", "法律要点提取", "合规审查自动化"],
    image: "/assets/highlight-5.webp",
  },
};

export default function IndustryHighlightsSection() {
  const [activeTab, setActiveTab] = useState("manufacturing");
  const [tabWidths, setTabWidths] = useState<number[]>([]);
  const [tabOffsets, setTabOffsets] = useState<number[]>([]);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const content = tabContents[activeTab];

  // Calculate tab widths and offsets for sliding indicator
  useEffect(() => {
    const widths: number[] = [];
    const offsets: number[] = [];
    let currentOffset = 0;

    tabRefs.current.forEach((ref, index) => {
      if (ref) {
        const width = ref.offsetWidth;
        widths.push(width);
        offsets.push(currentOffset);
        currentOffset += width + 4; // 4px gap
      }
    });

    setTabWidths(widths);
    setTabOffsets(offsets);
  }, []);

  const activeIndex = tabs.findIndex((t) => t.id === activeTab);

  return (
    <section
      className="w-full py-20 px-[120px] flex flex-col items-center gap-12"
      style={{
        background: 'linear-gradient(135deg, #E0F2FE 0%, #F0FDFA 50%, #FDF4FF 100%)'
      }}
    >
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
          行业亮点
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-[#64748B] text-lg font-normal text-center"
          style={{ fontFamily: 'Inter' }}
        >
          覆盖多行业场景，提供专业的文档智能解决方案
        </motion.p>
      </div>

      {/* Tab Navigation with sliding indicator */}
      <div
        className="relative flex items-center gap-1 p-1.5 rounded-[28px]"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.69) 0%, rgba(255,255,255,0.44) 100%)',
          boxShadow: '0 8px 24px -4px rgba(15,23,42,0.09)',
          border: '1.5px solid rgba(255,255,255,0.56)',
          backdropFilter: 'blur(30px)'
        }}
      >
        {/* Sliding indicator */}
        {tabWidths.length > 0 && (
          <motion.div
            className="absolute top-1.5 left-1.5 rounded-[22px]"
            initial={false}
            animate={{
              x: tabOffsets[activeIndex] || 0,
              width: tabWidths[activeIndex] || 0,
            }}
            transition={{
              type: "tween",
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1], // Bezier curve for natural movement
            }}
            style={{
              height: 'calc(100% - 12px)',
              background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.93) 100%)',
              boxShadow: '0 4px 12px rgba(15,23,42,0.08), 0 1px 0 #FFFFFF',
            }}
          />
        )}

        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            ref={(el) => { tabRefs.current[index] = el; }}
            onClick={() => setActiveTab(tab.id)}
            className={`relative z-10 px-5 py-2.5 rounded-[22px] transition-colors duration-300 ${
              activeTab === tab.id
                ? "text-[#0F172A] font-semibold"
                : "text-[#475569] font-medium"
            }`}
            style={{
              fontFamily: 'Inter',
              fontSize: '14px',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content with animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-12 w-full py-8"
        >
          {/* Text Content */}
          <div className="flex flex-col gap-5 flex-1">
            <h3
              className="text-[#0F172A] text-2xl font-semibold"
              style={{ fontFamily: 'DM Sans' }}
            >
              {content.title}
            </h3>
            <p
              className="text-[#64748B] text-[15px] font-normal leading-[1.7]"
              style={{ fontFamily: 'Inter' }}
            >
              {content.description}
            </p>
            <div className="flex flex-col gap-3">
              {content.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#23A1FC]" />
                  <span
                    className="text-[#475569] text-sm font-medium"
                    style={{ fontFamily: 'Inter' }}
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative w-[480px] h-[320px] rounded-xl overflow-hidden flex-shrink-0">
            <Image
              src={content.image}
              alt={content.title}
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
