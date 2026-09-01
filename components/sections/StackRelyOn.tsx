"use client";

import { useState } from "react";
import FadeUp from "@/components/animations/FadeUp";
import SkillsModal from "../ui/SkillsModal";

// Icons from react-icons
import {
  FaJs,
  FaReact,
  FaPhp,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiExpo,
  SiFirebase,
  SiSupabase,
  SiAnthropic,
  SiGoogle,
} from "react-icons/si";

const techPills = [
  { name: "JavaScript", Icon: FaJs },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "PHP", Icon: FaPhp },
  { name: "React", Icon: FaReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Expo", Icon: SiExpo },
  { name: "Firebase", Icon: SiFirebase },
  { name: "Supabase", Icon: SiSupabase },
  { name: "Claude", Icon: SiAnthropic },
  { name: "Gemini", Icon: SiGoogle },
];

export default function StackRelyOn() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="w-full bg-[#070D1B] py-12 px-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
          
          {/* Header Row */}
          <FadeUp>
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-xs uppercase tracking-widest text-gray-400">
                STACK I RELY ON
              </span>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-gray-400 transition-colors duration-200 hover:text-[#34D399] focus:outline-none"
              >
                <span>VIEW ALL</span>
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </FadeUp>

          {/* Pill Badges Container */}
          <FadeUp delay={0.15}>
            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {techPills.map((tech) => {
                const IconComponent = tech.Icon;
                return (
                  <div
                    key={tech.name}
                    className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-[#0A1628]/40 px-4 py-2 transition-all duration-300 hover:border-[#34D399]/40 hover:bg-[#0A1628]/80"
                  >
                    <IconComponent className="h-4 w-4 text-gray-300 transition-colors duration-300 group-hover:text-[#34D399]" />
                    <span className="text-sm font-medium text-gray-200 transition-colors duration-300 group-hover:text-white">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </FadeUp>

        </div>
      </section>

      {/* Skills Modal Component */}
      <SkillsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}