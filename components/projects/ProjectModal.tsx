"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

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
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md"
          />

          {/* Modal */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
              y: 40,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 lg:p-8"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl overflow-hidden rounded-[28px] border border-white/10 bg-[#252424] shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">

                {/* LEFT */}

                <div className="relative h-[220px] bg-[#1F1F1F] sm:h-[300px] lg:h-[720px]">

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain p-4 lg:p-8"
                  />

                </div>

                {/* RIGHT */}

                <div className="flex flex-col p-8 lg:p-12">

                  {/* Close */}

                  <button
                onClick={onClose}
                className="
                    absolute
                    right-4
                    top-4
                    z-20
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-[#2A2929]/90
                    text-xl
                    text-gray-300
                    backdrop-blur-md
                    transition
                    hover:border-[#10D312]
                    hover:text-white
                "
                >
                ✕
                </button>

                  {/* Category */}

                  <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-[#10D312]">
                    {project.category}
                  </p>

                  {/* Title */}

                  <h2 className="mt-3 text-3xl font-bold leading-tight text-white lg:text-5xl">
                    {project.title}
                  </h2>

                  {/* Description */}

                  <p className="mt-8 leading-8 text-gray-400">
                    {project.description}
                  </p>

                  {/* Technologies */}

                  <div className="mt-10">

                    <h3 className="mb-5 text-lg font-semibold text-white">
                      Technologies Used
                    </h3>

                    <div className="flex flex-wrap gap-3">

                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="
                            rounded-full
                            border
                            border-white/10
                            bg-[#303030]
                            px-4
                            py-2
                            text-sm
                            text-gray-200
                            transition
                            hover:border-[#10D312]
                            hover:text-[#10D312]
                          "
                        >
                          {tech}
                        </span>
                      ))}

                    </div>

                  </div>

                  <div className="mt-auto pt-12">

                    <button
                      onClick={onClose}
                      className="
                        rounded-full
                        border
                        border-[#10D312]
                        px-6
                        py-3
                        font-medium
                        text-[#10D312]
                        transition
                        hover:bg-[#10D312]
                        hover:text-white
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