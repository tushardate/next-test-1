import React, { useContext, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";


function ProjectMenuItem6(props) {
  const { client_name, title, id, featured_image, slug } = props.data;
  const backgroundColor = `hsla(60, 5%, 87%, 1)`;

  const drawLine = {
    initial: {
      scaleX: 0,
    },
    animate: {
      scaleX: 1,
      transition: {
        duration: 1,
        ease: [0.65, 0, 0.35, 1],
      },
    },
    exit: {
      scaleX: 0,
      transition: {
        duration: 0.75,
        ease: [0.65, 0, 0.35, 1],
      },
    },
  };
  const revealImage = {
    initial: {
      scaleY: 1,
    },
    animate: {
      scaleY: 0,
      transition: {
        delay: 0,
        duration: 1,
        ease: [0.65, 0, 0.35, 1],
      },
    },
    exit: {
      scaleY: 1,
      transition: {
        duration: 0.75,
        ease: [0.65, 0, 0.35, 1],
      },
    },
  };
  const scaleDown = {
    initial: {
      scale: 1.5,
    },
    animate: {
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.85, 0, 0.15, 1],
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.35,
      },
    },
  };
  const slideUp = {
    initial: (custom) => ({
      y: "10%",
      opacity: 0,
    }),
    animate: (custom) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    }),
    exit: {
      opacity: 0,
      y: "10%",
      transition: {
        duration: 0.5,
        ease: [0.4, -0.15, 0.66, 0],
      },
    },
    hover: {
      opacity: 0,
      x: "-5px",
      transition: {
        duration: 0.25,
      },
    }
  };
  const onHoverShow = {
    initial: (custom) => ({
      opacity: 0,
      x: "-20px",
    }),
    animate: (custom) => ({
      opacity: 0,
      x: "-5px",
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    }),
    exit: {
      opacity: 0,
      x: "-5px",
      transition: {
        duration: 0.5,
        ease: [0.4, -0.15, 0.66, 0],
      },
    },
    hover: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.25,
      },
    }
  };

  const viewArrow = {
    initial: {
      x: 0,
    },
    hover: {
      x: 6,
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        easing: "easeOut",
        duration: 0.25,
      },
    },
  };

  return (
    <Link as={`/projects/${slug}`} href="/projects/[slug]" scroll={false}>
      <a>
        <motion.div
          exit="exit"
          initial="initial"
          animate={"animate"}
          whileHover="hover"
          className="flex w-full relative"
        >
          <motion.div
            variants={drawLine}
            style={{ originX: 1 }}
            className="w-full h-0.5 bg-gray-700 absolute z-50"
          ></motion.div>
          <div className="flex flex-col md:w-6/12 w-6/12 pt-3 xs:pt-4 relative">
            <motion.div variants={slideUp} className="w-full flex-1 h-full">
              <p className="block w-full text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-3xl xl:text-4xl font-tdspace font-medium leading-tightest pr-4 sm:pr-16">
                {title}
              </p>
            </motion.div>
            <motion.div variants={onHoverShow} className="absolute flex items-center justify-center top-0 left-0 w-full h-full">
              <div className="flex items-center justify-end font-tdspace">
                <motion.p className="text-3xl sm:text-4xl md:text-5xl lg:text-3xl xl:text-4xl">View</motion.p>
                <motion.div
                  className="text-3xl sm:text-4xl md:text-6xl lg:text-4xl xl:text-5xl pl-1 font-light"
                  variants={viewArrow}
                >
                  &#187;
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              variants={slideUp}
              className="w-full transform translate-y-1 flex items-end"
            >
              <div>
              <p className="block text-xs sm:text-lg font-tdsans leading-snug w-full">
                Client:
              </p>
              <p className="block text-xs sm:text-lg font-tdsans leading-snug w-full">
                {client_name && `${client_name}`}
              </p>
              </div>
            </motion.div>
          </div>

          <motion.div className="md:w-7/12 w-6/12 overflow-hidden">
            <motion.img
              variants={scaleDown}
              className="object-cover h-full w-full"
              style={{ originY: 0 }}
              src={featured_image.large && featured_image.large}
            ></motion.img>
            <motion.div
              variants={revealImage}
              className="absolute inset-0 imageMask"
              style={{ originY: 1 }}
            ></motion.div>
          </motion.div>
        </motion.div>
      </a>
    </Link>
  );
}

export default ProjectMenuItem6;
