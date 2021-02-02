import { SplitText } from "@cyriacbr/react-split-text";
import { motion } from "framer-motion";

export default function TDSplitText(
  { children, ...props },
  wrapperVariants,
  lineVariants
) {
  const descIn = {
    initial: {
      y: "100%",
      opacity: 0,
    },
    animate: (custom) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.1,
        type: "spring",
        damping: 25,
        stiffness: 100,
      },
    }),
    exit: {
      y: 25,
      opacity: 0,
      transition: {
        duration: 0.75,
        ease: [0.36, 0, 0.66, -0.56],
      },
    },
  };

  return (
    <SplitText
      {...props}
      LineWrapper={({ lineIndex, children }) => (
        <motion.div custom={lineIndex} variants={descIn}>
          {children}
        </motion.div>
      )}
    >
      {children}
    </SplitText>
  );
}
