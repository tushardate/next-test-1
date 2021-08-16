import React, { useContext, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";


function ProjectMenuItem7(props) {
  const { client_name, title, id, featured_image, slug, index } = props.data;
  const backgroundColor = `hsla(60, 5%, 87%, 1)`;

  const revealImage = {
    initial: {
      scaleY: 1,
    },
    animate: (custom) => ({
      scaleY: 0,
      transition: {
        delay: custom * 0.15,
        duration: 1,
        ease: [0.65, 0, 0.35, 1],
      },
    }),
    exit: (custom) => ({
      scaleY: 1,
      transition: {
        delay: custom * 0.075,
        duration: 0.75,
        ease: [0.65, 0, 0.35, 1],
      },
    }),
  };
  const scaleDown = {
    initial: {
      scale: 1.1,
    },
    animate: {
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
    hover: {
      scale: 1.175,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };
  const slideUp = {
    initial: (custom) => ({
      y: "10px",
      opacity: 0,
    }),
    hover: (custom) => ({
        opacity: 1,
        y: "0",
        transition: {
            delay: custom * 0.05,
            type: "spring",
            damping: 20,
            stiffness: 100,
        },
      }),
  };
  const onHoverShow = {
    initial: (custom) => ({
      opacity: 0,
    }),
    hover: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.35,
      },
    }
  };

    const hoverBounce = {
        initial: () => ({
            x: "-1rem",
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 100,
              },
        }),
        exit: {
            x: "0px",
            transition: {
              type: "spring",
              damping: 20,
              stiffness: 100,
            },
          },
        hover: {
            x: "0px",
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 100,
              },
        },
    };

  return (
    <Link as={`/projects/${slug}`} href="/projects/[slug]" scroll={false}>
      <a>
          <motion.div exit="exit"
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="relative overflow-hidden pb-125 rounded-sm">
            <motion.img
              variants={scaleDown}
              className="absolute h-full w-full object-cover"
              style={{ originY: 0.5 }}
              src={featured_image.large && featured_image.large}
            ></motion.img>
            <motion.div variants={onHoverShow} className="absolute w-full h-full p-6 bg-gray-900 text-color-offWhite flex flex-col justify-between" >
                <div class="w-full">
                    <motion.p variants={slideUp} custom={0} className="text-lg leading-3 pb-4">{client_name}</motion.p>
                    <motion.p variants={slideUp} custom={1} className="font-tdcond font-bold text-30vw sm:text-11vw md:text-13vw lg:text-8vw uppercase tracking-looser leading-point-85">{title}</motion.p>
                </div>
                <motion.div
                  variants={hoverBounce}
                  className="text-3xl sm:text-4xl font-light leading-7"
                >
                  &#8594;
                </motion.div>
            </motion.div>
            <motion.div
              variants={revealImage}
              className="absolute inset-0 imageMask"
              custom={index}
              style={{ originY: 1 }}
            ></motion.div>
          </motion.div>
      </a>
    </Link>
  );
}

export default ProjectMenuItem7;
