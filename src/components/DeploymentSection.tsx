"use client";

import { Cloud, Server, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface DeployCardProps {
  icon: React.ReactNode;
  iconBgColor: string;
  title: string;
  description: string;
  buttonText: string;
  buttonVariant: "primary" | "outline";
  direction: "left" | "right";
}

function DeployCard({ icon, iconBgColor, title, description, buttonText, buttonVariant, direction }: DeployCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === "left" ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="flex-1 bg-white rounded-2xl p-8 border border-[#E2E8F0] flex flex-col gap-5"
    >
      {/* Icon */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: iconBgColor }}
      >
        {icon}
      </div>

      {/* Title */}
      <h3
        className="text-[#0F172A] text-2xl font-semibold"
        style={{ fontFamily: 'DM Sans' }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="text-[#64748B] text-sm font-normal leading-[1.6]"
        style={{ fontFamily: 'Inter' }}
      >
        {description}
      </p>

      {/* Button */}
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
    </motion.div>
  );
}

export default function DeploymentSection() {
  return (
    <section className="w-full bg-[#F8FAFC] py-20 px-[120px] flex flex-col items-center gap-12 overflow-hidden">
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
          部署方式
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-[#64748B] text-lg font-normal text-center"
          style={{ fontFamily: 'Inter' }}
        >
          灵活的部署选择，满足不同场景需求
        </motion.p>
      </div>

      {/* Cards with slide-in animations from left and right */}
      <div className="flex gap-8 w-full">
        <DeployCard
          icon={<Cloud className="w-7 h-7 text-[#23A1FC]" />}
          iconBgColor="#EBF5FF"
          title="公有云 API"
          description="即开即用，无需部署。按量付费，灵活扩展。提供稳定可靠的云端服务。"
          buttonText="立即体验"
          buttonVariant="primary"
          direction="left"
        />

        <DeployCard
          icon={<Server className="w-7 h-7 text-[#D97706]" />}
          iconBgColor="#FEF3C7"
          title="私有化部署"
          description="数据不出域，安全合规。支持本地化部署，满足企业数据安全要求。"
          buttonText="立即体验"
          buttonVariant="outline"
          direction="right"
        />
      </div>
    </section>
  );
}
