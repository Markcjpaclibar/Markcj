"use client";

import FadeUp from "../animations/FadeUp";
import ServiceCard from "./ServiceCard";
import { servicesData } from "./servicesData";

export default function Services() {
  return (
    <section id="services" className="relative bg-[#070D1B] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeUp>
          <div className="mb-14">
            {/* Tagline Badge */}
            <div className="mb-4 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#34D399]/30 bg-[#34D399]/10 px-3.5 py-1 text-xs font-mono font-medium text-[#34D399]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#34D399] animate-pulse" />
                Sevices 
              </span>
            </div>

            <span className="font-mono text-xs uppercase tracking-widest text-gray-400">
              SERVICES & CAPABILITIES
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Websites & software built around how your work actually runs.
            </h2>
          </div>
        </FadeUp>

        {/* 3-Column Card Grid */}
        <FadeUp delay={0.15}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </FadeUp>

      </div>
    </section>
  );
}