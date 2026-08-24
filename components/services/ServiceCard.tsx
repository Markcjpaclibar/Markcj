"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function ServiceCard({
  icon: Icon,
  title,
  description,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-[#0A1628]/50
        p-8
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-[#34D399]/50
        hover:bg-[#0A1628]/80
        hover:shadow-[0_0_40px_rgba(52,211,153,0.15)]
      "
    >
      {/* Mint Accent Bar */}
      <div className="absolute left-8 top-0 h-1 w-12 rounded-full bg-[#34D399] transition-all duration-300 group-hover:w-20 group-hover:shadow-[0_0_12px_rgba(52,211,153,0.8)]" />

      {/* Icon Badge Container */}
      <div
        className="
          inline-flex
          rounded-2xl
          border
          border-white/10
          bg-white/[0.03]
          p-3.5
          backdrop-blur-md
          transition-all
          duration-300
          group-hover:-translate-y-1
          group-hover:scale-105
          group-hover:border-[#34D399]/30
          group-hover:bg-[#34D399]/10
        "
      >
        <Icon
          size={28}
          strokeWidth={1.8}
          className="text-[#34D399]"
        />
      </div>

      {/* Title */}
      <h3
        className="
          mt-6
          text-xl
          font-semibold
          text-white
          transition-colors
          duration-300
          group-hover:text-[#34D399]
        "
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="
          mt-4
          leading-8
          text-gray-400
          transition-colors
          duration-300
          group-hover:text-gray-300
        "
      >
        {description}
      </p>
    </motion.div>
  );
}