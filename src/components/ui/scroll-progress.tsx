"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useSpring } from "framer-motion";


interface ScrollProgressProps {
  className?: string;
}

export default function ScrollProgress({ className }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 50,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className={cn(
        "fixed rounded-r-full inset-x-0 top-0 z-[1000] h-2 origin-left bg-gradient-to-r from-[#feffff]  to-[#debb20]",
        className,
      )}
      style={{
        scaleX,
      }}
    />
  );
}
