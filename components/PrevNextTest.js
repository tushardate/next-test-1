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
    <div className="mx-2 md:mx-6 grid grid-cols-12 my-12 lg:my-20 px-4 font-tdspace tracking-snug leading-tightest text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
      <div className="col-start-1 col-span-6 sm:col-start-1 sm:col-span-5 lg:col-start-2 lg:col-span-4 xl:col-start-2 xl:col-span-3 pr-4 sm:pr-0">
        <Link
          as={`/projects/${props.prev.slug}`}
          href="/projects/[slug]"
          scroll={false}
        >
          <a>
            <motion.div initial="initial" whileHover="hover">
              <div className="flex items-center">
                <motion.div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl pr-1 sm:pr-2 font-light" variants={prevArrow}>
                  &#8592;
                </motion.div>
                <motion.p className="font-bold">Prev Project</motion.p>
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
                <motion.p className="font-bold">Next Project</motion.p>
                <motion.div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl pl-1 sm:pl-2 font-light" variants={nextArrow}>
                  &#8594;
                </motion.div>
              </div>
            </motion.div>
          </a>
        </Link>
      </div>
    </div>
  );
}
