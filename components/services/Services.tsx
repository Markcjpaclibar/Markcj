"use client";

import FadeUp from "../animations/FadeUp";
import FadeLeft from "../animations/FadeLeft";

import ServiceCard from "./ServiceCard";
import { services } from "./servicesData";

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}

        <FadeUp>

          <div className="mx-auto mb-16 max-w-3xl text-center">

            <h2 className="text-4xl font-bold text-white sm:text-5xl">
              Services &{" "}
              <span className="text-[#10D312]">
                Capabilities
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400">
              I help businesses and individuals transform ideas into
              modern digital experiences through thoughtful design,
              clean development, and creative solutions.
            </p>

          </div>

        </FadeUp>

        {/* Cards */}

        <FadeLeft>

          <div
            className="
              grid
              gap-8
              sm:grid-cols-2
              xl:grid-cols-4
            "
          >
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                {...service}
              />
            ))}
          </div>

        </FadeLeft>

      </div>
    </section>
  );
}