"use client";

import SkillCard from "../ui/SkillCard";
import FadeUp from "../animations/FadeUp";

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

const frontend = [
  { title: "HTML", Icon: FaHtml5 },
  { title: "CSS", Icon: FaCss3Alt },
  { title: "JavaScript", Icon: FaJs },
  { title: "React", Icon: FaReact },
  { title: "Next.js", Icon: SiNextdotjs },
  { title: "Tailwind CSS", Icon: SiTailwindcss },
  { title: "Angular", Icon: SiAngular },
];

const backend = [
  { title: "PHP", Icon: FaPhp },
  { title: "Python", Icon: FaPython },
  { title: "Firebase", Icon: SiFirebase },
  { title: "Supabase", Icon: MdStorage },
  { title: "MySQL", Icon: SiMysql },
];

const tools = [
  { title: "VS Code", Icon: VscCode },
  { title: "WordPress", Icon: FaWordpress },
  { title: "GitHub", Icon: FaGithub },
  { title: "Figma", Icon: FaFigma },
  { title: "Canva", Icon: MdPalette },
  { title: "MS Office", Icon: MdComputer },
  { title: "Responsive Design", Icon: MdOutlineDevices },
  { title: "Hardware", Icon: MdBuild },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#070D1B] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeUp>
          <h2 className="text-center text-5xl font-bold text-white">
            <span className="text-[#34D399]">Skills</span> & Technologies
          </h2>
        </FadeUp>

        {/* Front-End */}
        <div className="mt-16">
          <FadeUp delay={0.15}> 
            <div className="mb-8 flex justify-center">
              <span className="inline-block rounded-full border border-[#34D399]/30 bg-[#0A1628]/60 px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#34D399] backdrop-blur-xl">
                Front-End
              </span>
            </div>
          </FadeUp>

          <div className="flex flex-wrap justify-center gap-4">
            {frontend.map((skill, index) => (
              <FadeUp 
                key={skill.title}
                delay={index * 0.05}
              >
                <SkillCard
                  title={skill.title}
                  Icon={skill.Icon}
                />
              </FadeUp>
            ))}
          </div>
        </div>

        {/* Back-End */}
        <div className="mt-16">
          <FadeUp delay={0.15}>
            <div className="mb-8 flex justify-center">
              <span className="inline-block rounded-full border border-[#34D399]/30 bg-[#0A1628]/60 px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#34D399] backdrop-blur-xl">
                Back-End
              </span>
            </div>
          </FadeUp>

          <div className="flex flex-wrap justify-center gap-4">
            {backend.map((skill, index) => ( 
              <FadeUp
                key={skill.title}
                delay={index * 0.05}
              >
                <SkillCard
                  title={skill.title}
                  Icon={skill.Icon}
                />
              </FadeUp>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="mt-16">
          <FadeUp delay={0.15}>
            <div className="mb-8 flex justify-center">
              <span className="inline-block rounded-full border border-[#34D399]/30 bg-[#0A1628]/60 px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#34D399] backdrop-blur-xl">
                Tools
              </span>
            </div>
          </FadeUp>

          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((skill, index) => (
              <FadeUp
                key={skill.title}
                delay={index * 0.05}
              >
                <SkillCard
                  title={skill.title}
                  Icon={skill.Icon}
                />
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}