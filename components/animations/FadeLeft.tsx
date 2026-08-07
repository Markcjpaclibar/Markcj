"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeLeftProps {
  children: ReactNode;
  delay?: number;
}

export default function FadeLeft({
  children,
  delay = 0,
}: FadeLeftProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
}