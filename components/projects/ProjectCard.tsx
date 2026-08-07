"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type ProjectCardProps = {
  image: string;
  category: string;
  title: string;
  onClick?: () => void;
};

export default function ProjectCard({
  image,
  category,
  title,
  onClick,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      onClick={onClick}
      className="
        group
        relative
        h-[420px]
        w-full
        cursor-pointer
        overflow-hidden
        rounded-[24px]
        border
        border-white/10
        bg-[#2A2929]
        transition-all
        duration-300
        hover:border-[#10D312]/50
      "
    >
      {/* Project Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="
          object-cover
          transition-transform
          duration-500
          group-hover:scale-105
        "
      />

      {/* Gradient Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black
          via-black/25
          to-transparent
          transition
          duration-300
          group-hover:from-black/95
        "
      />

      {/* Content */}
      <div className="absolute bottom-0 left-0 z-10 w-full p-6">

        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#10D312]">
          {category}
        </p>

        <h3
          className="
            mt-2
            text-2xl
            font-semibold
            leading-tight
            text-white
            transition-colors
            duration-300
            group-hover:text-[#10D312]
          "
        >
          {title}
        </h3>

        {/* Explore CTA */}
        <div
          className="
            mt-6
            inline-flex
            items-center
            gap-2
            text-sm
            font-medium
            text-white/70
            transition-all
            duration-300
            group-hover:gap-3
            group-hover:text-white
          "
        >
          <span>Explore Project</span>

          <ArrowRight
            size={16}
            className="
              text-[#10D312]
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </div>

      </div>
    </motion.div>
  );
}