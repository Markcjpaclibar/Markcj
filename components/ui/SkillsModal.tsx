"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SkillCard from "@/components/ui/SkillCard";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaWordpress,
  FaGithub,
  FaFigma,
  FaPython,
  FaPhp,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiAngular,
  SiFirebase,
  SiMysql,
  SiTypescript,
  SiNodedotjs,
  SiExpo,
  SiSupabase,
  SiAnthropic,
  SiGoogle,
} from "react-icons/si";

import {
  MdComputer,
  MdOutlineDevices,
  MdBuild,
  MdPalette,
} from "react-icons/md";

import { VscCode } from "react-icons/vsc";

const frontend = [
  { title: "HTML", Icon: FaHtml5 },
  { title: "CSS", Icon: FaCss3Alt },
  { title: "JavaScript", Icon: FaJs },
  { title: "TypeScript", Icon: SiTypescript },
  { title: "React", Icon: FaReact },
  { title: "Next.js", Icon: SiNextdotjs },
  { title: "Tailwind CSS", Icon: SiTailwindcss },
  { title: "Angular", Icon: SiAngular },
];

const backend = [
  { title: "Node.js", Icon: SiNodedotjs },
  { title: "PHP", Icon: FaPhp },
  { title: "Python", Icon: FaPython },
  { title: "Expo", Icon: SiExpo },
  { title: "Firebase", Icon: SiFirebase },
  { title: "Supabase", Icon: SiSupabase },
  { title: "MySQL", Icon: SiMysql },
];

const aiAndTools = [
  { title: "Claude", Icon: SiAnthropic },
  { title: "Gemini", Icon: SiGoogle },
  { title: "VS Code", Icon: VscCode },
  { title: "WordPress", Icon: FaWordpress },
  { title: "GitHub", Icon: FaGithub },
  { title: "Figma", Icon: FaFigma },
  { title: "Canva", Icon: MdPalette },
  { title: "MS Office", Icon: MdComputer },
  { title: "Responsive Design", Icon: MdOutlineDevices },
  { title: "Hardware", Icon: MdBuild },
];

interface SkillsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SkillsModal({ isOpen, onClose }: SkillsModalProps) {
  // Prevent background scrolling & listen for Escape key press
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
          
          {/* Dark Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative z-10 max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-white/10 bg-[#070D1B] p-6 sm:p-10 shadow-2xl custom-scrollbar"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-colors hover:border-[#34D399]/40 hover:bg-[#34D399]/10 hover:text-white"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Title */}
            <h2 className="text-center text-3xl sm:text-4xl font-bold text-white mb-8">
              <span className="text-[#34D399]">Skills</span> & Technologies
            </h2>

            {/* Front-End */}
            <div className="mb-12">
              <div className="mb-6 flex justify-center">
                <span className="inline-block rounded-full border border-[#34D399]/30 bg-[#0A1628]/60 px-6 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-[#34D399]">
                  Front-End
                </span>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {frontend.map((skill) => (
                  <SkillCard key={skill.title} title={skill.title} Icon={skill.Icon} />
                ))}
              </div>
            </div>

            {/* Back-End */}
            <div className="mb-12">
              <div className="mb-6 flex justify-center">
                <span className="inline-block rounded-full border border-[#34D399]/30 bg-[#0A1628]/60 px-6 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-[#34D399]">
                  Back-End
                </span>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {backend.map((skill) => (
                  <SkillCard key={skill.title} title={skill.title} Icon={skill.Icon} />
                ))}
              </div>
            </div>

            {/* AI & Tools */}
            <div>
              <div className="mb-6 flex justify-center">
                <span className="inline-block rounded-full border border-[#34D399]/30 bg-[#0A1628]/60 px-6 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-[#34D399]">
                  AI Models & Tools
                </span>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {aiAndTools.map((skill) => (
                  <SkillCard key={skill.title} title={skill.title} Icon={skill.Icon} />
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}