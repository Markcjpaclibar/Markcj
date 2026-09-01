"use client";

import Image from "next/image";
import FadeLeft from "../animations/FadeLeft";
import FadeRight from "../animations/FadeRight";
import TechStackTicker from "@/components/TechStackTicker";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#070D1B] pt-28 pb-0 lg:pt-36 flex flex-col justify-between overflow-hidden">
      
      {/* Main Hero Content Area */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-12 lg:gap-12 px-6 lg:px-12 w-full my-auto">

        {/* Left Side: Text & Action Buttons */}
        <div className="order-2 lg:order-1 lg:col-span-7 text-left">
          
          {/* Tagline Pill */}
          <FadeLeft>
            <div className="inline-flex items-center rounded-full border border-[#34D399]/30 bg-[#34D399]/10 px-4 py-1.5 text-xs font-semibold text-[#34D399] backdrop-blur-md">
              Custom Web Designs
            </div>
          </FadeLeft>

          {/* Title & Slogan */}
          <FadeLeft delay={0.15}>
            <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#34D399]">
              UI/UX Full-stack web developer
            </h1>
          </FadeLeft>

          <FadeLeft delay={0.25}>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-white">
              Bridging complex code and clear design
            </h2>
          </FadeLeft>

          {/* Paragraph Description */}
          <FadeLeft delay={0.35}>
            <p className="mt-6 text-sm sm:text-base text-gray-400 max-w-xl leading-relaxed">
              I help businesses build strong digital identities by combining intuitive UI/UX design with robust web development. From initial concept to clean, functional code, I turn complex ideas into engaging, high-performing websites.
            </p>
          </FadeLeft>

          {/* Call to Action Buttons */}
          <FadeLeft delay={0.45}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-lg bg-[#34D399] px-6 py-3.5 text-sm font-semibold text-[#070D1B] shadow-[0_0_20px_rgba(52,211,153,0.3)] transition-all duration-300 hover:bg-[#2ee0a0]"
              >
                <span>Contact</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </motion.a>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10"
              >
                <span>Explore work</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </motion.a>
            </div>
          </FadeLeft>

        </div>

        {/* Right Side: Controlled Size Image Frame */}
        <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end">
          <FadeRight delay={0.2}>
            <div className="group relative w-[280px] sm:w-[340px] lg:w-[380px] h-[360px] sm:h-[440px] lg:h-[480px] rounded-3xl overflow-hidden border border-white/10 bg-[#0A1628]/60 shadow-2xl transition-all duration-500 hover:border-[#34D399]/40">
              
              {/* Dark Gradient Overlay for Hover & Mobile readability */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#070D1B] via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-85" />

              {/* Photo */}
              <Image
                src="/images/hero.png"
                alt="Mark Cj Paclibar"
                fill
                priority
                className="object-cover object-top transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-90"
              />

              {/* BS Computer Science Badge Overlay */}
              <div className="absolute bottom-4 left-4 right-4 z-20 rounded-xl border border-white/10 bg-[#0A1628]/85 p-4 backdrop-blur-md transition-all duration-300 group-hover:bg-[#0A1628]/95">
                <h3 className="text-sm font-bold text-[#34D399]">
                  BS Computer Science
                </h3>
                <p className="mt-0.5 text-xs text-gray-400">
                  ISAT-U · 2021–2025
                </p>
              </div>

            </div>
          </FadeRight>
        </div>

      </div>

      {/* Infinite Scrolling Tech Stack Ticker (Anchored to Bottom) */}
      <div className="mt-12 w-full">
        <TechStackTicker />
      </div>

    </section>
  );
}