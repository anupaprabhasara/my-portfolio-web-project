import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, type AnimationControls } from "framer-motion";

export function useScrollReveal(): [
  (node?: Element | null) => void,
  AnimationControls
] {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return [ref, controls];
}
