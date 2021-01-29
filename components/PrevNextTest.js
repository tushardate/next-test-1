import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PrevNextTest(props) {
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
    <div className="mx-2 md:mx-4 grid grid-cols-12 mt-12 mb-16 lg:mt-20 lg:mb-24 px-4 font-tdspace leading-tightest text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
      <div className="col-start-1 col-span-6 sm:col-start-1 sm:col-span-5 lg:col-start-2 lg:col-span-4 xl:col-start-2 xl:col-span-3 pr-4 sm:pr-0">
        <Link
          as={`/projects/${props.prev.slug}`}
          href="/projects/[slug]"
          scroll={false}
        >
          <a>
            <motion.div initial="initial" whileHover="hover">
              <div className="flex items-center">
                <motion.div
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl pr-1 sm:pr-2 font-light"
                  variants={prevArrow}
                >
                  &#171;
                </motion.div>
                <motion.p className="font-semibold">Prev Project</motion.p>
              </div>
            </motion.div>
          </a>
        </Link>
      </div>
      <div className="col-start-7 col-span-6 sm:col-start-8 sm:col-span-5 lg:col-start-8 lg:col-span-4 xl:col-start-9 xl:col-span-3 pl-4 sm:pl-0">
        <Link
          as={`/projects/${props.next.slug}`}
          href="/projects/[slug]"
          scroll={false}
        >
          <a>
            <motion.div initial="initial" whileHover="hover">
              <div className="flex items-center justify-end">
                <motion.p className="font-semibold">Next Project</motion.p>
                <motion.div
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl pl-1 sm:pl-2 font-light"
                  variants={nextArrow}
                >
                  &#187;
                </motion.div>
              </div>
            </motion.div>
          </a>
        </Link>
      </div>
    </div>
  );
}
