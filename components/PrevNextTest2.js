import React, { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function PrevNextTest2(props) {
  const [ref, inView, entry] = useInView({triggerOnce: true});

  const inViewAnim = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.75,
      },
    },
    exit: {
      opacity: 0,
    },
  };

  const nextArrow = {
    initial: {
      x: 0,
    },
    hover: {
      x: 8,
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        easing: "easeOut",
        duration: 0.25,
      },
    },
  };
  const prevArrow = {
    initial: {
      x: 0,
    },
    hover: {
      x: -8,
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        easing: "easeOut",
        duration: 0.25,
      },
    },
  };

  return (
    <motion.div
      initial={inViewAnim.initial}
      animate={inView ? inViewAnim.animate : inViewAnim.exit}
      ref={ref}
      className="flex justify-between mx-4 sm:mx-8 md:mx-12 xl:mx-24 mt-24 mt-12 mb-16 lg:mt-20 lg:mb-20 font-tdcond font-bold uppercase text-7xl"
    >
      <div className="">
        <Link
          as={`/projects/${props.prev.slug}`}
          href="/projects/[slug]"
          scroll={false}
        >
          <a>
            <motion.div initial="initial" whileHover="hover">
              <div className="flex items-center">
                <motion.div
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl pr-1 sm:pr-3 font-tdsans font-light"
                  variants={prevArrow}
                >
                  &#8592;
                </motion.div>
                <motion.p>Prev Project</motion.p>
              </div>
            </motion.div>
          </a>
        </Link>
      </div>
      <div className="">
        <Link
          as={`/projects/${props.next.slug}`}
          href="/projects/[slug]"
          scroll={false}
        >
          <a>
            <motion.div initial="initial" whileHover="hover">
              <div className="flex items-center justify-end">
                <motion.p>Next Project</motion.p>
                <motion.div
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl pl-1 sm:pl-2 font-tdsans font-light"
                  variants={nextArrow}
                >
                  &#8594;
                </motion.div>
              </div>
            </motion.div>
          </a>
        </Link>
      </div>
    </motion.div>
  );
}
