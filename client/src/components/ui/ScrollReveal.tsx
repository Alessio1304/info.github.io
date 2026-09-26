import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  width?: "w-fit" | "w-full";
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

export const ScrollReveal = ({
  children,
  width = "w-full",
  delay = 0,
  direction = "up",
  className = "",
}: ScrollRevealProps) => {
  const ref = useRef(null);
  // Trigger slightly before the element is fully in view so content is ready as you scroll
  const isInView = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });
  const prefersReducedMotion = useReducedMotion();

  // Compress staggered delays so long sequences don't lag behind the scroll
  const effectiveDelay = Math.min(delay * 0.5, 0.3);
  const offset = 24;

  const getVariants = () => {
    if (prefersReducedMotion) {
      return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
    }
    switch (direction) {
      case "up":
        return { hidden: { opacity: 0, y: offset }, visible: { opacity: 1, y: 0 } };
      case "down":
        return { hidden: { opacity: 0, y: -offset }, visible: { opacity: 1, y: 0 } };
      case "left":
        return { hidden: { opacity: 0, x: offset }, visible: { opacity: 1, x: 0 } };
      case "right":
        return { hidden: { opacity: 0, x: -offset }, visible: { opacity: 1, x: 0 } };
      case "none":
        return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
      default:
        return { hidden: { opacity: 0, y: offset }, visible: { opacity: 1, y: 0 } };
    }
  };

  return (
    <div ref={ref} className={`${width} ${className}`}>
      <motion.div
        variants={getVariants()}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{
          duration: prefersReducedMotion ? 0.2 : 0.65,
          delay: effectiveDelay,
          ease: [0.30, 1, 0.40, 1],
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
};
