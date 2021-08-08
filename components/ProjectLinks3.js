import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

function ProjectLinks3({ allPosts, currentId }) {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
  });

  const hoverBounce = {
    initial: {
      x: 0,
      y: 0,
    },
    hover: {
      x: 3,
      y: -3,
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        easing: "easeOut",
        duration: 0.25,
      },
    },
  };

  return (
    <motion.ul
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.75 }}
      exit={{ opacity: 0 }}
      className="hidden lg:flex font-tdsans leading-4 text-md mx-4 sm:mx-8 md:mx-12 xl:mx-24 lg:mt-20 lg:mb-10 justify-between flex-wrap gap-x-8 gap-y-4"
    >
      {allPosts.map((el, i) => (
        <>
          <Link
            as={`/projects/${el.slug}`}
            href="/projects/[slug]"
            scroll={false}
            key={i}
          >
            <li>
            <motion.a
              whileHover={{ opacity: 1, transition: { duration: 0.35 } }}
              className={`${
                el.id === currentId ? "opacity-100 font-medium" : "opacity-50"
              }`}
            >
              <motion.div className="cursor-pointer">
                {`${el.title}`}
              </motion.div>
            </motion.a>
            </li>
          </Link>
          {/* {i < allPosts.length - 1 ? (
            <div className="opacity-30">|</div>
          ) : (
            <></>
          )} */}
        </>
      ))}
    </motion.ul>
  );
}

export default ProjectLinks3;
