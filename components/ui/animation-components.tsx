import React, {
  JSX,
  ReactNode,
} from 'react';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Props interface for AnimatedText
interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  staggerChildren?: number;
}

// Props interface for FadeInSection
interface FadeInSectionProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | null;
  className?: string;
}

/**
 * AnimatedText component that reveals text letter by letter
 */
export const AnimatedText = ({
  text,
  className = "",
  delay = 0,
  duration = 0.05,
  staggerChildren = 0.03,
}: AnimatedTextProps): JSX.Element => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.p
      ref={ref}
      aria-label={text}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                delay: delay + index * staggerChildren,
                duration: duration,
                ease: [0.2, 0.65, 0.3, 0.9],
              },
            },
          }}
          aria-hidden="true"
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.p>
  );
};

/**
 * FadeInSection component for elements that fade in when scrolled into view
 */
export const FadeInSection = ({
  children,
  delay = 0,
  direction = null,
  className = "",
}: FadeInSectionProps): JSX.Element => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Define direction-based offsets
  const yOffset = (): number => {
    if (direction === "up") return 100;
    if (direction === "down") return -100;
    return 0;
  };

  const xOffset = (): number => {
    if (direction === "left") return 100;
    if (direction === "right") return -100;
    return 0;
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: yOffset(), x: xOffset() }}
      animate={
        inView
          ? {
              opacity: 1,
              y: 0,
              x: 0,
              transition: {
                duration: 0.8,
                delay: delay,
                ease: [0.2, 0.65, 0.3, 0.9],
              },
            }
          : { opacity: 0, y: yOffset(), x: xOffset() }
      }
    >
      {children}
    </motion.div>
  );
};
