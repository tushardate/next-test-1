import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

function ProjectLinks2({ allPosts, currentId }) {
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
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.75 }}
      exit={{ opacity: 0 }}
      className="hidden lg:flex font-tdsans text-md xl:text-lg mx-6 mt-16 mb-8 lg:mt-28 lg:mb-12 justify-between flex-wrap flexGrid"
    >
      {allPosts.map((el, i) => (
        <>
          <Link
            as={`/projects/${el.slug}`}
            href="/projects/[slug]"
            scroll={false}
            key={i}
          >
            <motion.a
              whileHover={{ opacity: 1, transition: { duration: 0.35 } }}
              className={`${
                el.id === currentId ? "opacity-100 font-medium" : "opacity-50"
              }`}
            >
              <motion.div className="whitespace-pre xl:py-0.5 px-2 flex items-center cursor-pointer">
                {`${el.title}`}
              </motion.div>
            </motion.a>
          </Link>
          {i < allPosts.length - 1 ? (
            <div className="opacity-30">/</div>
          ) : (
            <></>
          )}
        </>
      ))}
    </motion.div>
  );
}

export default ProjectLinks2;
