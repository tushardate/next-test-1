import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PrevNext(props) {
  const nextArrow = {
    intial: {
      y: 0,
      x: 0,
    },
    hover: {
      y: -8,
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
    intial: {
      y: 0,
      x: 0,
    },
    hover: {
      y: -8,
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
    <div className="grid grid-cols-12 my-12 lg:my-20 px-4 font-tdspace tracking-snug leading-snug text-xl md:text-2xl lg:text-5xl">
      <div className="col-start-1 col-span-5 xl:col-start-1 xl:col-span-4">
        <Link
          as={`/projects/${props.prev.slug}`}
          href="/projects/[slug]"
          scroll={false}
        >
          <a className="ml-auto">
            <motion.div initial="initial" whileHover="hover" className="text-right">
              <div>
                <motion.div className="inline-block pr-1" variants={prevArrow}>
                  &#8598;
                </motion.div>
                <motion.p className="font-bold inline-block">
                  Prev Project
                </motion.p>
                <p>
                  {props.prev.title}
                </p>
              </div>
            </motion.div>
          </a>
        </Link>
      </div>
      <div className="col-start-8 col-span-5 xl:col-start-9 xl:col-span-4">
        <Link
          as={`/projects/${props.next.slug}`}
          href="/projects/[slug]"
          scroll={false}
        >
          <a>
            <motion.div initial="initial" whileHover="hover">
              <div>
                <motion.p className="font-bold inline-block">
                  Next Project{" "}
                </motion.p>
                <motion.div className="inline-block pl-1" variants={nextArrow}>
                  &#8599;
                </motion.div>
                <p>
                  {props.next.title}
                </p>
              </div>
            </motion.div>
          </a>
        </Link>
      </div>
    </div>
  );
}
