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
      //   when: "beforeChildren",
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
    x: -100,
    opacity: 0,
    rotate: 30,
  },
  show: {
    x: 0,
    opacity: 1,
    rotate: 0,
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