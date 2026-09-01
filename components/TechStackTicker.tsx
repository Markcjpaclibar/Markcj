"use client";

import { motion } from "framer-motion";

// Icons from react-icons
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
} from "react-icons/si";

import {
  MdComputer,
  MdOutlineDevices,
  MdBuild,
  MdPalette,
  MdStorage,
} from "react-icons/md";

import { VscCode } from "react-icons/vsc";

const allSkills = [
  // Front-End
  { name: "HTML", Icon: FaHtml5 },
  { name: "CSS", Icon: FaCss3Alt },
  { name: "JavaScript", Icon: FaJs },
  { name: "React", Icon: FaReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Angular", Icon: SiAngular },
  // Back-End
  { name: "PHP", Icon: FaPhp },
  { name: "Python", Icon: FaPython },
  { name: "Firebase", Icon: SiFirebase },
  { name: "Supabase", Icon: MdStorage },
  { name: "MySQL", Icon: SiMysql },
  // Tools & Design
  { name: "VS Code", Icon: VscCode },
  { name: "WordPress", Icon: FaWordpress },
  { name: "GitHub", Icon: FaGithub },
  { name: "Figma", Icon: FaFigma },
  { name: "Canva", Icon: MdPalette },
  { name: "MS Office", Icon: MdComputer },
  { name: "Responsive Design", Icon: MdOutlineDevices },
  { name: "Hardware", Icon: MdBuild },
];

export default function TechStackTicker() {
  const tickerItems = [...allSkills, ...allSkills];

  return (
    <div className="relative w-full overflow-hidden border-y border-white/10 bg-[#070D1B] py-5 backdrop-blur-md">
      {/* Side Fade Gradient Masks */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 sm:w-24 bg-gradient-to-r from-[#070D1B] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 sm:w-24 bg-gradient-to-l from-[#070D1B] to-transparent" />

      {/* Infinite Scroll Container */}
      <div className="flex w-max">
        <motion.div
          className="flex items-center gap-10 sm:gap-14 pr-10 sm:pr-14"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 80, // Slower duration for a smooth reading speed
          }}
        >
          {tickerItems.map((tech, index) => {
            const IconComponent = tech.Icon;
            return (
              <div
                key={`${tech.name}-${index}`}
                className="group flex items-center gap-3 transition-colors duration-300"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 p-2 text-gray-300 border border-white/10 transition-colors duration-300 group-hover:border-[#34D399]/40 group-hover:text-[#34D399]">
                  <IconComponent className="h-4 w-4" />
                </div>
                <span className="text-sm font-semibold tracking-wide text-gray-300 transition-colors duration-300 group-hover:text-white whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}