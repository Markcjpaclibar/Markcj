"use client";

import FadeUp from "../animations/FadeUp";
import ContactCard from "./ContactCard";
import { contactData } from "./contactData";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-[#070D1B] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}

        <FadeUp>
          <div className="text-center">

            <div className="mb-3 inline-flex">
              <span className="rounded-full border border-[#34D399]/30 bg-[#0A1628]/60 px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-[#34D399] backdrop-blur-xl">
                Get In Touch
              </span>
            </div>

            <h2 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
              Let's <span className="text-[#34D399]">Connect</span>
            </h2>

          </div>
        </FadeUp>

        {/* Contact Cards */}

        <div
          className="
            mx-auto
            mt-12
            grid
            max-w-4xl
            gap-5
            px-4
            sm:px-6
            md:grid-cols-2
            lg:px-0
          "
        >
          {contactData.map((item, index) => (
            <FadeUp
              key={item.title}
              delay={index * 0.1}
            >
              <ContactCard
                icon={item.icon}
                title={item.title}
                value={item.value}
                href={item.href}
                clickable={item.clickable}
              />
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}