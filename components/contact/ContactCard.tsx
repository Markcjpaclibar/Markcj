"use client";

import Link from "next/link";
import { ElementType } from "react";

type ContactCardProps = {
  icon: ElementType;
  title: string;
  value: string;
  href?: string;
  clickable?: boolean;
};

export default function ContactCard({
  icon: Icon,
  title,
  value,
  href,
  clickable,
}: ContactCardProps) {
  const content = (
    <div
      className="
        group
        flex
        h-[95px]
        sm:h-[130px]
        flex-col
        items-center
        justify-center
        rounded-[15px]
        border
        border-white/10
        bg-[#2A2929]
        px-4
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#10D312]
        hover:shadow-[0_0_30px_rgba(16,211,18,0.12)]
      "
    >
      <Icon
        size={22}
        className="
          mb-2
          text-[#10D312]
          transition-all
          duration-300
          group-hover:scale-110
        "
      />

      <h3
        className="
          text-[13px]
          font-semibold
          text-white
          transition-colors
          duration-300
          group-hover:text-[#10D312]
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-1
          text-center
          text-[12px]
          text-gray-400
          break-words
        "
      >
        {value}
      </p>
    </div>
  );

  if (clickable && href) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {content}
      </Link>
    );
  }

  return content;
}