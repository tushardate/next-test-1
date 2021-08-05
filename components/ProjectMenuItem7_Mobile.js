import React, { useContext, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";


function ProjectMenuItem7Mobile(props) {
  const { client_name, title, id, featured_image, slug } = props.data;
  const backgroundColor = `hsla(60, 5%, 87%, 1)`;

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
  };
  const onHoverShow = {
    initial: (custom) => ({
      opacity: 0,
    }),
    animate: {
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
    exit: {
      opacity: 0,
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
            className="relative overflow-hidden pb-125 rounded-md">
            <motion.img
              variants={scaleDown}
              className="absolute h-full w-full object-cover"
              style={{ originY: 0.5 }}
              src={featured_image.large && featured_image.large}
            ></motion.img>
            <motion.div variants={onHoverShow} className="absolute w-full h-full text-color-offWhite flex flex-col justify-end" >
                <div class="w-full bg-gray-900 bg-opacity-80 p-4">
                    <motion.p className="leading-3 pb-4">{client_name}</motion.p>
                    <motion.p className="font-tdcond font-black uppercase text-4xl sm:text-3xl leading-none">{title}</motion.p>
                </div>
            </motion.div>
          </motion.div>
      </a>
    </Link>
  );
}

export default ProjectMenuItem7Mobile;
