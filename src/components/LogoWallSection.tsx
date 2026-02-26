"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  { src: "/assets/logo-1.webp", alt: "Logo 1" },
  { src: "/assets/logo-2.webp", alt: "Logo 2" },
  { src: "/assets/logo-3.webp", alt: "Logo 3" },
  { src: "/assets/logo-4.webp", alt: "Logo 4" },
  { src: "/assets/logo-5.webp", alt: "Logo 5" },
  { src: "/assets/logo-6.webp", alt: "Logo 6" },
];

export default function LogoWallSection() {
  return (
    <section className="w-full bg-[#F8FAFC] py-12 px-[120px] flex flex-col items-center gap-8 overflow-hidden">
      {/* Title with InView animation */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-[#64748B] text-base font-medium text-center"
        style={{ fontFamily: 'Inter' }}
      >
        深受全球1000多家领先企业的信赖
      </motion.p>

      {/* Logo grid with staggered spring animation from right */}
      <div className="flex items-center justify-center gap-12">
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100, scaleX: 1.2 }}
            whileInView={{ opacity: 1, x: 0, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              delay: index * 0.1,
            }}
            className="w-36 h-16 relative flex items-center justify-center"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              className="object-contain"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
