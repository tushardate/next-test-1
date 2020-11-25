import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectMenuItem(props) {
  const { client_name, title, id, featured_image } = props.data;
  return (
    <Link as={`/projects/${id}`} href="/projects/[id]" scroll={false}>
      <a>
        <motion.div className="flex justify-center items-center bg-gray-200 relative rounded-lg overflow-hidden">
          <motion.p
            className="sans px-8 l:text-xl md:text-lg sm:text-sm absolute text-white text-center"
            layoutId={id}
          >
            {client_name && `${client_name}:`} {title}
          </motion.p>
          <motion.img
            className="object-cover w-full"
            src={featured_image.thumbnail && featured_image.thumbnail}
          ></motion.img>
        </motion.div>
      </a>
    </Link>
  );
}
