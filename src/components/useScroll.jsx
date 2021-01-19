import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const useScroll = () => {
  const controls = useAnimation();
  const [element, inView] = useInView({ threshold: 0.2 });
  if (inView) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  return [element, controls];
};
