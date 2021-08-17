import React, { useContext, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";


function ProjectMenuItem7Mobile(props) {
  const { client_name, title, id, featured_image, slug, index } = props.data;
  const backgroundColor = `hsla(60, 5%, 87%, 1)`;

  const revealImage = {
    initial: {
      scaleY: 1,
    },
    animate: (custom) => ({
      scaleY: 0,
      transition: {
        delay: custom * 0.1,
        duration: 1,
        ease: [0.6, 0.01, -0.05, 0.95],
      },
    }),
    exit: (custom) => ({
      scaleY: 1,
      transition: {
        delay: custom * 0.025,
        duration: 0.5,
        // ease: [0.65, 0, 0.35, 1],
        ease: [0.6, 0.01, -0.05, 0.95],
      },
    }),
  };

  const scaleDown = {
    initial: {
      scale: 1.1,
    },
    animate: (custom) => ({
      scale: 1,
      transition: {
        delay: custom * 0.1 + 0.2,
        duration: 1,
        ease: [0.6, 0.01, -0.05, 0.95],
      },
    }),
  };


  return (
    <Link as={`/projects/${slug}`} href="/projects/[slug]" scroll={false}>
      <a>
          <motion.div exit="exit"
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="relative overflow-hidden pb-100 rounded-sm">
            <motion.img
              variants={scaleDown}
              className="absolute h-full w-full object-cover"
              style={{ originY: 0.5 }}
              src={featured_image.large && featured_image.large}
            ></motion.img>
            <motion.div className="absolute w-full h-full text-color-offWhite flex flex-col justify-end" >
                <div class="w-full bg-gray-900 bg-opacity-90 p-4">
                    <motion.p className="leading-3 pb-4">{client_name}</motion.p>
                    <motion.p className="font-tdcond font-black uppercase text-4xl sm:text-4xl leading-none">{title}</motion.p>
                </div>
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

export default ProjectMenuItem7Mobile;
