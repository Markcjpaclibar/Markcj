"use client";

import Image from "next/image";
import FadeLeft from "../animations/FadeLeft";
import FadeRight from "../animations/FadeRight";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#070D1B] pt-24 pb-16 lg:pt-32 lg:pb-0">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-12">

        {/* Right Side (Featured Photo) - Ordered First on Mobile */}
        <div className="order-1 relative flex justify-center lg:order-2 lg:justify-end">

          <FadeRight delay={0.2}>

            {/* Main Portrait Frame Card */}
            <div className="relative h-[380px] w-[280px] sm:h-[480px] sm:w-[350px] lg:h-[620px] lg:w-[430px] overflow-hidden rounded-[24px] sm:rounded-[28px] border border-white/10 bg-[#0A1628]/50 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-colors duration-500 hover:border-[#34D399]/30">

              <Image
                src="/images/hero.png"
                alt="Mark Cj Paclibar"
                fill
                priority
                className="object-contain scale-[1.15] object-[center_60px] sm:object-[center_80px] lg:scale-[1.2] lg:object-[center_120px]"
              />

            </div>

          </FadeRight>

          <FadeRight delay={0.45}>

            {/* Floating Card Badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 w-[240px] sm:w-[260px] lg:translate-x-0 lg:left-0 lg:top-[340px] lg:bottom-auto lg:w-[280px] rounded-2xl border border-white/10 bg-[#0A1628]/90 p-4 sm:p-5 lg:p-6 backdrop-blur-2xl shadow-2xl text-center lg:text-left">

              <h3 className="text-base sm:text-lg lg:text-[20px] font-bold text-[#34D399]">
                BS Computer Science
              </h3>

              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-400">
                ISAT-U · 2021–2025
              </p>

            </div>

          </FadeRight>

        </div>

        {/* Left Side (Text & CTAs) - Ordered Second on Mobile */}
        <div className="order-2 lg:order-1 text-center lg:text-left">

          <FadeLeft>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold leading-none text-white">
              Mark Cj Paclibar
            </h2>
          </FadeLeft>

          <FadeLeft delay={0.15}>
            <div className="mt-3 sm:mt-4 min-h-[140px] sm:min-h-[160px] lg:min-h-[200px]">
              <TypeAnimation
                sequence={[
                  "FULL STACK\nWEB DEVELOPER\nUI/UX",
                ]}
                wrapper="h1"
                speed={55}
                repeat={0}
                cursor={true}
                style={{ color: '#34D399', whiteSpace: 'pre-line', display: 'block' }}
                className="text-3xl sm:text-4xl lg:text-[60px] font-extrabold uppercase leading-[1.1] lg:leading-[1.02]"
              />
            </div>
          </FadeLeft>

          <FadeLeft delay={0.3}>
            <p className="mt-4 sm:mt-6 lg:mt-8 mx-auto lg:mx-0 max-w-[500px] text-sm sm:text-base lg:text-[15px] leading-7 sm:leading-8 lg:leading-9 text-gray-400">
              I help businesses build strong digital identities by combining
              intuitive UI/UX design with robust web development. From initial
              concept to clean, functional code, I turn complex ideas into
              engaging, high-performing websites.
            </p>
          </FadeLeft>

          <FadeLeft delay={0.45}>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-5">

              {/* Main Button (Direct Mailto Link) */}
              <motion.a
                href="mailto:your.email@domain.com?subject=Inquiry%20from%20Portfolio"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#34D399] px-8 py-3.5 sm:py-4 font-bold text-[#070D1B] shadow-[0_0_20px_rgba(52,211,153,0.3)] transition-all duration-300 hover:bg-[#2ee0a0] hover:text-[#070D1B] hover:shadow-[0_0_35px_rgba(52,211,153,0.6)]"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full" />
                <span className="relative z-10">Get in touch</span>
              </motion.a>

              {/* Secondary Glass Button */}
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-[#0A1628]/40 px-8 py-3.5 sm:py-4 font-semibold text-gray-300 backdrop-blur-xl transition-all duration-300 hover:border-white/30 hover:bg-[#0A1628]/80 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]"
              >
                View Work
              </motion.a>

            </div>
          </FadeLeft>

        </div>

      </div>
    </section>
  );
}