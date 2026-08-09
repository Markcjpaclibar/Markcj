"use client";

import FadeUp from "../animations/FadeUp";
import ContactCard from "./ContactCard";
import { contactData } from "./contactData";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}

        <FadeUp>
          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#10D312]">
              Get In Touch
            </p>

            <h2 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
              Let's <span className="text-[#10D312]">Connect</span>
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
            gap-4
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