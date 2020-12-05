import Link from "next/link";
import { motion } from "framer-motion";

function ProjectMenuItem4(props) {
  const { client_name, title, id, featured_image, slug } = props.data;

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
  };

  return (
    <Link as={`/projects/${slug}`} href="/projects/[slug]" scroll={false}>
      <a>
        <motion.div
          exit="exit"
          initial="initial"
          animate="animate"
          className="flex w-full relative"
        >
          <motion.div
            variants={drawLine}
            style={{ originX: 1 }}
            className="w-full h-px bg-gray-700 absolute z-50"
          ></motion.div>
          <div className="flex flex-col w-7/12 sm:w-6/12 pt-3 xs:pt-4">
            <motion.div variants={slideUp} className="w-full flex-1 h-full">
              <p className="block w-full text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-3xl xl:text-5xl font-tdspace font-bold tracking-snug leading-none pr-4 sm:pr-16">
                {title}
              </p>
            </motion.div>
            <motion.div
              variants={slideUp}
              className="w-full transform translate-y-1 flex items-end"
            >
              <p className="block text-xs sm:text-lg font-tdspace w-full">
                {client_name && `Client: ${client_name}`}
              </p>
            </motion.div>
          </div>

          <motion.div className="w-5/12 sm:w-6/12 overflow-hidden relative">
            <motion.img
              variants={scaleDown}
              className="object-cover h-full w-full"
              style={{ originY: 0 }}
              src={featured_image.large && featured_image.large}
            ></motion.img>
            <motion.div
              variants={revealImage}
              className="absolute inset-0"
              style={{ originY: 1, backgroundColor: "hsla(0, 10%, 87%, 1)" }}
            ></motion.div>
          </motion.div>
        </motion.div>
      </a>
    </Link>
  );
}

export default ProjectMenuItem4;
