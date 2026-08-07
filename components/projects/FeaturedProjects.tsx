"use client";

import { useRef, useState } from "react";

import FadeLeft from "../animations/FadeLeft";
import FadeRight from "../animations/FadeRight";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

const projects = [
  {
    title: "Portfolio Website for JCN Construction",
    category: "Web Development",
    image: "/images/projects/iPad Pro.png",
    description:
      "A modern construction company website designed to showcase the company's services, completed projects, and expertise. Built with a clean user interface, responsive layouts, and optimized performance to establish a professional online presence.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
    ],
  },
  {
    title: "Drip E-Commerce Website",
    category: "UI / UX Design",
    image: "/images/projects/iPad Pro.png",
    description:
      "Drip is a modern clothing e-commerce platform focused on delivering a premium shopping experience. The design emphasizes intuitive navigation, engaging product displays, and a clean interface tailored for fashion brands.",
    technologies: [
      "Figma",
      "UI Design",
      "UX Research",
      "Prototype",
    ],
  },
  {
    title: "Personal Portfolio",
    category: "Web Development",
    image: "/images/projects/iPad Pro.png",
    description:
      "A modern developer portfolio showcasing projects, technical skills, and professional experience. Built with smooth animations, responsive layouts, and a minimalist aesthetic to create a memorable user experience.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "TypeScript",
    ],
  },
];

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] =
    useState<(typeof projects)[0] | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const swiperRef = useRef<SwiperType | null>(null);
  const isScrolling = useRef(false);

  const openProject = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProject = () => {
    setIsModalOpen(false);
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (!swiperRef.current) return;

    e.preventDefault();

    if (isScrolling.current) return;

    isScrolling.current = true;

    if (e.deltaY > 0) {
      swiperRef.current.slideNext();
    } else {
      swiperRef.current.slidePrev();
    }

    setTimeout(() => {
      isScrolling.current = false;
    }, 500);
  };

  return (
    <section
      id="projects"
      className="overflow-hidden py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[420px_minmax(0,1fr)]">

          {/* Left */}

          <FadeLeft>
            <div className="max-w-md">

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#10D312]">
                Selected Works
              </p>

              <h2 className="mt-3 text-4xl font-bold leading-tight text-white sm:text-5xl">
                Featured Projects
              </h2>

              <p className="mt-7 text-base leading-8 text-gray-400">
                Explore a collection of projects that showcase my passion for
                creating modern websites and digital experiences. From business
                websites to e-commerce platforms, every project combines
                thoughtful design, responsive development, and clean scalable
                code.
              </p>

            </div>
          </FadeLeft>

          {/* Right */}

          <FadeRight>

            <div onWheel={handleWheel}>

              <Swiper
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                speed={700}
                grabCursor
                spaceBetween={8}
                slidesPerView={1}
                breakpoints={{
                  480: {
                    slidesPerView: 1.15,
                  },
                  640: {
                    slidesPerView: 1.35,
                  },
                  768: {
                    slidesPerView: 1.55,
                  },
                  1024: {
                    slidesPerView: 1.8,
                  },
                  1280: {
                    slidesPerView: 2,
                  },
                  1536: {
                    slidesPerView: 2.15,
                  },
                }}
              >
                {projects.map((project) => (
                  <SwiperSlide key={project.title}>
                    <ProjectCard
                      image={project.image}
                      title={project.title}
                      category={project.category}
                      onClick={() => openProject(project)}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

            </div>

          </FadeRight>

        </div>

      </div>

      <ProjectModal
        open={isModalOpen}
        project={selectedProject}
        onClose={closeProject}
      />

    </section>
  );
}