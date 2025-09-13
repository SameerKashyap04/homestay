import { Variants } from "framer-motion";

// Spring transition configuration for premium feel
export const springTransition = {
  type: "spring" as const,
  damping: 20,
  stiffness: 100,
  mass: 0.8,
};

export const smoothTransition = {
  type: "tween" as const,
  duration: 0.6,
  ease: [0.4, 0, 0.2, 1],
};

// Animation variants for common patterns
export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: springTransition,
  },
  exit: {
    opacity: 0,
    y: -60,
    transition: smoothTransition,
  },
};

export const fadeIn: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: smoothTransition,
  },
  exit: {
    opacity: 0,
    transition: smoothTransition,
  },
};

export const slideInLeft: Variants = {
  initial: {
    opacity: 0,
    x: -60,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: springTransition,
  },
  exit: {
    opacity: 0,
    x: -60,
    transition: smoothTransition,
  },
};

export const slideInRight: Variants = {
  initial: {
    opacity: 0,
    x: 60,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: springTransition,
  },
  exit: {
    opacity: 0,
    x: 60,
    transition: smoothTransition,
  },
};

export const scaleIn: Variants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: springTransition,
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: smoothTransition,
  },
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

export const cardHover: Variants = {
  initial: {
    scale: 1,
    rotateX: 0,
    rotateY: 0,
  },
  hover: {
    scale: 1.05,
    rotateX: 5,
    rotateY: 5,
    transition: springTransition,
  },
};

export const glowHover: Variants = {
  initial: {
    boxShadow: "0 0 0 rgba(0, 179, 166, 0)",
  },
  hover: {
    boxShadow: "0 0 30px rgba(0, 179, 166, 0.4)",
    transition: smoothTransition,
  },
};

export const shimmerEffect: Variants = {
  initial: {
    backgroundPosition: "-200% 0",
  },
  animate: {
    backgroundPosition: "200% 0",
    transition: {
      duration: 2,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

// Page transition variants
export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

// Modal animations
export const modalBackdrop: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: smoothTransition,
  },
  exit: {
    opacity: 0,
    transition: smoothTransition,
  },
};

export const modalContent: Variants = {
  initial: {
    opacity: 0,
    scale: 0.9,
    y: 20,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: springTransition,
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 20,
    transition: smoothTransition,
  },
};

// Custom hook for reduced motion
export const useReducedMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};
