import Link from "next/link";
import { motion } from "framer-motion";

function ProjectMenuItem2(props) {
  const { client_name, title, id, featured_image, slug } = props.data;
  return (
    <Link as={`/projects/${slug}`} href="/projects/[slug]" scroll={false}>
      <a>
        <div className="flex h-full border-t border-gray-700">
          <div className="flex flex-col w-7/12 sm:w-5/12 h-full pt-3 xs:pt-4">
            <motion.div className="w-full flex-1 h-full">
              <p className="block w-full text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-3xl xl:text-5xl font-tdspace font-bold tracking-snug leading-none pr-4 sm:pr-16">
                {title}
              </p>
            </motion.div>
            <motion.div className="w-full transform translate-y-1 h-full flex items-end">
              <p className="block text-xs sm:text-lg font-tdspace w-full">
                {client_name && `Client: ${client_name}`}
              </p>
            </motion.div>
          </div>

          <motion.div className="w-5/12 sm:w-7/12 h-full overflow-hidden">
            <img
              className="object-cover w-full"
              src={featured_image.thumbnail && featured_image.thumbnail}
            ></img>
          </motion.div>
        </div>
      </a>
    </Link>
  );
}

export default ProjectMenuItem2;
