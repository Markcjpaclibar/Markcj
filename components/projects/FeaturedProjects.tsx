"use client";

import { useState } from "react";

import FadeLeft from "../animations/FadeLeft";
import FadeRight from "../animations/FadeRight";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Mousewheel,
  Autoplay,
  Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/pagination";

const projects = [
  {
    title: "Portfolio Website for JCN Construction",
    category: "Web Development",
    image: "/images/projects/jcncons.jpg",
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
    title: "Refined Living Furniture E-Commerce",
    category: "UI / UX Design",
    image: "/images/projects/Galaxy Tab S8 Ultra.jpg",
    description:
      "A high-end interior decor and furniture web application featuring minimalist aesthetics, curated collections, and an intuitive product catalog designed to elevate home retail experiences.",
    technologies: [
      "Figma",
      "UI/UX Design",
      "E-Commerce Design",
      "Prototyping",
    ],
  },
  {
    title: "EasyTransfer Direct File Sharing",
    category: "Mobile / Web App",
    image: "/images/projects/iPhone 13 Pro.jpg",
    description:
      "A local peer-to-peer file transfer application designed for fast, secure direct sharing between devices on the same network without cloud uploads.",
    technologies: [
      "React Native",
      "WebRTC",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "Bitbit House by Produkto Lokal",
    category: "WordPress E-Commerce",
    image: "/images/projects/Galaxy Tab S8 Ultra (1).jpg",
    description:
      "An e-commerce platform bridging MSMEs, local food producers, delivery services, and consumers. Designed to help support local businesses through a modern shopping interface.",
    technologies: [
      "WordPress",
      "WooCommerce",
      "PHP",
      "Elementor",
    ],
  },
  {
    title: "ISAT U - Kwadra TBI Website",
    category: "WordPress Development",
    image: "/images/projects/ZenBook Duo 14.jpg",
    description:
      "An official portal for Kwadra Technology Business Incubator dedicated to nurturing Philippine deep tech startups, presenting awards, incubatees, and news for sustainable growth.",
    technologies: [
      "WordPress",
      "PHP",
      "Elementor",
      "CSS3",
    ],
  },
];

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] =
    useState<(typeof projects)[0] | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProject = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProject = () => {
    setIsModalOpen(false);
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#070D1B] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[420px_minmax(0,1fr)]">

          {/* Left */}
          <FadeLeft>
            <div className="max-w-md">

              {/* Tagline Badge matched with Services */}
              <div className="mb-4 flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#34D399]/30 bg-[#34D399]/10 px-3.5 py-1 text-xs font-mono font-medium text-[#34D399]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#34D399] animate-pulse" />
                  Selected Works
                </span>
              </div>

              <span className="font-mono text-xs uppercase tracking-widest text-gray-400">
                PORTFOLIO
              </span>

              <h2 className="mt-3 text-4xl font-bold leading-tight text-white sm:text-5xl">
                Featured <span>Projects</span>
              </h2>

              <p className="mt-6 text-base leading-8 text-gray-400">
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

            <Swiper
              modules={[
                Mousewheel,
                Autoplay,
                Pagination,
              ]}
              loop
              speed={800}
              grabCursor
              watchOverflow
              spaceBetween={16}
              slidesPerView={1}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              mousewheel={{
                forceToAxis: true,
                releaseOnEdges: true,
              }}
              pagination={{
                clickable: true,
              }}
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
              className="!pb-12 [&_.swiper-pagination-bullet]:bg-white/30 [&_.swiper-pagination-bullet-active]:!bg-[#34D399] [&_.swiper-pagination-bullet-active]:!w-6 [&_.swiper-pagination-bullet-active]:!rounded-full"
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