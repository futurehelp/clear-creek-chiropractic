import type { MotionProps } from "framer-motion";

/** Shared hover/tap behavior for primary calls to action. */
export const buttonMotion: Pick<MotionProps, "whileHover" | "whileTap" | "transition"> = {
  whileHover: { scale: 1.04 },
  whileTap: { scale: 0.97 },
  transition: { duration: 0.18 },
};

/** Shared spring behavior for cards that lift toward the pointer. */
export const cardMotion: Pick<MotionProps, "whileHover" | "whileTap" | "transition"> = {
  whileHover: { y: -8, scale: 1.02 },
  whileTap: { scale: 0.985 },
  transition: { type: "spring", stiffness: 300, damping: 22 },
};

/** Consistent safe attributes for links that open a new browser tab. */
export const externalLinkProps = {
  target: "_blank" as const,
  rel: "noreferrer",
};
