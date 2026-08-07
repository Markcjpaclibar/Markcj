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
        bg-[#2A2929]
        p-8
        transition-all
        duration-300
        hover:border-[#10D312]
        hover:shadow-[0_0_40px_rgba(16,211,18,0.15)]
      "
    >
      {/* Green Accent */}
      <div className="absolute left-8 top-0 h-1 w-12 rounded-full bg-[#10D312]" />

      {/* Icon */}
      <div
        className="
          inline-flex
          transition-all
          duration-300
          group-hover:-translate-y-1
          group-hover:scale-110
        "
      >
        <Icon
          size={28}
          strokeWidth={1.8}
          className="text-[#10D312]"
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
          group-hover:text-[#10D312]
        "
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="
          mt-5
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