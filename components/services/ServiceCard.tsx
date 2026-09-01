"use client";

import { Check } from "lucide-react";
import { ServiceItem } from "./servicesData";

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  isCoreOffer,
  features,
}: ServiceItem) {
  return (
    <div
      className={`relative flex flex-col justify-between rounded-2xl border p-6 transition-all duration-300 ${
        isCoreOffer
          ? "border-[#34D399]/40 bg-[#0A1628]/90 shadow-[0_0_25px_rgba(52,211,153,0.1)]"
          : "border-white/10 bg-[#0A1628]/40 hover:border-white/20 hover:bg-[#0A1628]/70"
      }`}
    >
      <div>
        {/* Top Header Row */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#34D399]">
            <Icon className="h-6 w-6 stroke-[1.75]" />
          </div>

          {isCoreOffer && (
            <span className="rounded-full border border-[#34D399]/40 bg-[#34D399]/10 px-3 py-1 text-xs font-semibold text-[#34D399]">
              Core offer
            </span>
          )}
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-sm leading-relaxed text-gray-400 mb-6">
          {description}
        </p>

        {/* Features List */}
        <ul className="space-y-3">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <Check className="h-4 w-4 shrink-0 text-[#34D399] mt-0.5 stroke-[2.5]" />
              <span className="text-sm text-gray-300 leading-tight">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}