export const pageAnimation = {
  hidden: {
    opacity: 0,
    x: -300,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      // when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 0.5,
    },
  },
};
// child of pageAnimation
export const titleAnim = {
  hidden: {
    y: 200,
  },
  show: {
    y: 0,
    transition: { duration: 2, ease: "easeOut" },
  },
};
// child pageAnimation
export const fade = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { duration: 1 },
  },
};
// child pageAnimation
export const photoAnim = {
  hidden: {
    scale: 0.3,
    opacity: 0.2,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.5, ease: "easeOut" },
  },
};

// For OurWork page
export const lineAnim = {
  hidden: { width: "0%" },
  show: {
    width: "100%",
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
  exit: {},
};
export const frameAnim = {
  hidden: {
    x: "-1000%",
    skew: "45deg",
  },
  show: {
    x: "1000%",
    skew: "0deg",
    transition: {
      duration: 0.8,
    },
  },
};
export const frameAnimContainer = {
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
      ease: "easeOut",
    },
  },
};

export const scrollReaveal = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};
export const scrollRevealMovie = {
  hidden: {
    opacity: 0.5,
    scale: 0.8,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1 },
  },
};
