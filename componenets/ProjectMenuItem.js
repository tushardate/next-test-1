import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectMenuItem(props) {
  const { client_name, title, id, featured_image } = props.data;

  const titleMotion = {
    rest: {
      opacity: 0,
      y: 10,
      ease: "easeOut",
      duration: 0.2,
      type: "tween",
    },
    hover: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        type: "tween",
        ease: "easeOut",
      },
    },
  };

  const overlayMotion = {
    rest: {
      opacity: 0,
      ease: "easeOut",
      duration: 0.2,
      type: "tween",
    },
    hover: {
      opacity: 0.7,
      transition: {
        duration: 0.35,
        type: "tween",
        ease: "easeOut",
      },
    },
  };
  return (
    <Link as={`/projects/${id}`} href="/projects/[id]" scroll={false}>
      <a>
        <motion.div
          initial="rest"
          whileHover="hover"
          animate="rest"
          className="flex justify-center items-center bg-gray-200 relative rounded-lg overflow-hidden"
        >
          <motion.img
            className="object-cover w-full"
            src={featured_image.thumbnail && featured_image.thumbnail}
          ></motion.img>
          <motion.div
            variants={overlayMotion}
            className="absolute bg-gray-900 inset-0"
          ></motion.div>
          <motion.p
            className="sans px-8 l:text-xl md:text-lg sm:text-sm absolute text-white text-center"
            layoutId={id}
            variants={titleMotion}
          >
            {client_name && `${client_name}:`} {title}
          </motion.p>
        </motion.div>
      </a>
    </Link>
  );
}
