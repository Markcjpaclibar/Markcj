"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

type ProjectModalProps = {
  open: boolean;
  onClose: () => void;
  project: {
    title: string;
    category: string;
    image: string;
    description: string;
    technologies: string[];
  } | null;
};

export default function ProjectModal({
  open,
  onClose,
  project,
}: ProjectModalProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && project && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-[#070D1B]/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
              y: 20,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 lg:p-8"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="
                relative
                max-h-[90vh]
                w-full
                max-w-5xl
                overflow-y-auto
                rounded-[24px]
                border
                border-white/10
                bg-[#0A1628]/95
                shadow-[0_0_50px_rgba(0,0,0,0.5)]
                backdrop-blur-2xl
                lg:max-h-[85vh]
              "
            >
              {/* Sticky Close Button for Mobile & Desktop */}
              <button
                onClick={onClose}
                className="
                  absolute
                  right-4
                  top-4
                  z-30
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-[#070D1B]/80
                  text-gray-300
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-[#34D399]/50
                  hover:bg-[#34D399]/10
                  hover:text-[#34D399]
                "
              >
                <X size={20} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">

                {/* LEFT: Image Section */}
                <div className="relative flex h-[260px] items-center justify-center border-b border-white/10 bg-[#070D1B]/60 sm:h-[340px] lg:h-full lg:border-b-0 lg:border-r">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain p-6 sm:p-8"
                  />
                </div>

                {/* RIGHT: Content Section */}
                <div className="flex flex-col p-6 sm:p-8 lg:p-10">

                  {/* Category Pill */}
                  <div className="inline-flex">
                    <span className="rounded-full border border-[#34D399]/30 bg-[#34D399]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#34D399]">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                    {project.title}
                  </h2>

                  {/* Description */}
                  <p className="mt-4 text-sm leading-relaxed text-gray-300 sm:text-base">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-8">
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-400">
                      Technologies Used
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="
                            rounded-xl
                            border
                            border-white/10
                            bg-white/[0.04]
                            px-3.5
                            py-1.5
                            text-xs
                            font-medium
                            text-gray-200
                            transition-colors
                            duration-300
                            hover:border-[#34D399]/40
                            hover:text-[#34D399]
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Bar */}
                  <div className="mt-8 pt-4">
                    <button
                      onClick={onClose}
                      className="
                        w-full
                        rounded-xl
                        border
                        border-[#34D399]
                        bg-[#34D399]/10
                        py-3
                        text-sm
                        font-semibold
                        text-[#34D399]
                        transition-all
                        duration-300
                        hover:bg-[#34D399]
                        hover:text-[#070D1B]
                        hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]
                        sm:w-auto
                        sm:px-8
                      "
                    >
                      Close Project
                    </button>
                  </div>

                </div>

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}