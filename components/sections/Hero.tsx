"use client";

import Image from "next/image";
import FadeLeft from "../animations/FadeLeft";
import FadeRight from "../animations/FadeRight";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 px-6 lg:grid-cols-2 lg:px-12">

        {/* Left Side */}
        <div>

          <FadeLeft>
            <h2 className="text-[40px] font-bold leading-none text-white">
              Mark Cj Paclibar
            </h2>
          </FadeLeft>

          <FadeLeft delay={0.15}>
            <div className="mt-4 min-h-[200px]">
              <TypeAnimation
                sequence={[
                  "FULL STACK\nWEB DEVELOPER\nUI/UX",
                ]}
                wrapper="h1"
                speed={55}
                repeat={0}
                cursor={true}
                className="whitespace-pre-line text-[60px] font-extrabold uppercase leading-[1.02] text-[#10D312]"
              />
            </div>
          </FadeLeft>

          <FadeLeft delay={0.3}>
            <p className="mt-8 max-w-[500px] text-[15px] leading-9 text-gray-400">
              I help businesses build strong digital identities by combining
              intuitive UI/UX design with robust web development. From initial
              concept to clean, functional code, I turn complex ideas into
              engaging, high-performing websites.
            </p>
          </FadeLeft>

          <FadeLeft delay={0.45}>
            <div className="mt-10 flex gap-5">

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-full bg-[#10D312] px-8 py-4 font-semibold text-white shadow-lg shadow-[#10D312]/20 transition"
              >
                Get in touch
              </motion.a>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-full border border-gray-600 px-8 py-4 font-semibold text-white transition hover:border-[#10D312]"
              >
                View Work
              </motion.a>

            </div>
          </FadeLeft>

        </div>

        {/* Right Side */}
        <div className="relative flex justify-center lg:justify-end">

          <FadeRight delay={0.2}>

            <div className="relative h-[620px] w-[430px] overflow-hidden rounded-[28px] border border-[#10D312]/30 bg-[#252424] shadow-[0_0_60px_rgba(16,211,18,0.08)]">

              <Image
                src="/images/hero.png"
                alt="Mark Cj Paclibar"
                fill
                priority
                className="object-contain scale-[1.2] object-[center_120px]"
              />

            </div>

          </FadeRight>

          <FadeRight delay={0.45}>

            <div className="absolute left-0 top-[340px] z-20 w-[280px] rounded-2xl border border-white/10 bg-[#2A2929]/95 p-6 backdrop-blur-xl shadow-2xl">

              <h3 className="text-[20px] font-bold text-[#10D312]">
                BS Computer Science
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                ISAT-U · 2021–2025
              </p>

            </div>

          </FadeRight>

        </div>

      </div>
    </section>
  );
}