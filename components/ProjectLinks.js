import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

function ProjectLinks({ allPosts, currentId }) {
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

  const inViewReveal = {
    initial: (custom) => ({
      opacity: 0,
      x: "-30px",
    }),
    animate: (custom) => ({
      x: "0",
      opacity: 1,
      transition: {
        delay: custom * 0.1,
        duration: 0.75,
      },
    }),
    exit: (custom) => ({
      x: "0",
      opacity: 1,
      transition: {
        duration: 0.75,
        ease: "easeOut",
      },
    }),
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

//   const fadeInUp = {
//     initial: {
//       y: 30,
//       opacity: 0,
//     },
//     animate: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         damping: 25,
//         stiffness: 100,
//       },
//     },
//     hover: {
//       scale: 1.2,
//     },
//     exit: {
//       y: 20,
//       opacity: 0,
//       transition: {
//         duration: 0.75,
//         ease: [0.36, 0, 0.66, -0.56],
//       },
//     },
//   };

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate="animate"
      exit= "exit"
      variants={stagger}
      className="hidden md:flex font-tdsans text-lg mx-6 mt-16 mb-8 lg:mt-28 lg:mb-12 justify-between flex-wrap flexGrid"
    >
      {allPosts.map((el, i) => (
        <Link
          as={`/projects/${el.slug}`}
          href="/projects/[slug]"
          scroll={false}
          key={i}
        >
          <a className={` ${el.id === currentId ? "font-medium" : ""}`}>
            <motion.div
              whileHover="hover"
              custom={i}
              initial={{opacity: 0}}
              animate={{opacity: inView ? 1 : 0}}
              transition= {{duration: 0.75}}
              exit={{opacity: 0}}
              className="whitespace-pre py-1 px-2 flex items-center cursor-pointer"
            >
              <motion.div className="pr-0.5">
                {el.id === currentId ? <>&#10003;</> : ""}
              </motion.div>
              <motion.p>{`${el.title}`}</motion.p>
              <motion.div className="pl-0.5" variants={hoverBounce}>
                {el.id !== currentId ? <>&#8599;</> : ""}
              </motion.div>
            </motion.div>
          </a>
        </Link>
      ))}
    </motion.div>
  );
}

export default ProjectLinks;
