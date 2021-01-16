import Link from "next/link";
import { motion } from "framer-motion";

function ProjectMenuItem3(props) {
  const { client_name, title, id, featured_image, slug } = props.data;
  const scaleUp = {
    initial: {
      scale: 1,
    },
    animate: {
      transition: {
        duration: 2,
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.5,
        // ease: [0.85, 0, 0.15, 1],
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
          whileHover="hover"
          className="flex w-full border-t border-gray-700"
        >
          <div className="flex flex-col xl:w-5/12 xs:w-6/12 pt-3 xs:pt-4">
            <motion.div className="w-full flex-1 h-full">
              <p className="block w-full text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-3xl xl:text-4xl font-tdspace font-light tracking-snug leading-tight pr-4 sm:pr-16">
                {title}
              </p>
            </motion.div>
            <motion.div className="w-full transform translate-y-1 flex items-end">
              <p className="block text-xs sm:text-base font-tdspace w-full">
                {client_name && `Client: ${client_name}`}
              </p>
            </motion.div>
          </div>

          <motion.div className="xl:w-7/12 xs:w-6/12 overflow-hidden">
            <motion.img
              variants={scaleUp}
              className="object-cover h-full w-full"
              src={featured_image.large && featured_image.large}
            ></motion.img>
          </motion.div>
        </motion.div>
      </a>
    </Link>
  );
}

export default ProjectMenuItem3;
