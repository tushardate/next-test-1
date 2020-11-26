import Link from "next/link";
import { motion } from "framer-motion";

function ProjectMenuItem2(props) {
  const { client_name, title, id, featured_image } = props.data;
  return (
    <Link as={`/projects/${id}`} href="/projects/[id]" scroll={false}>
      <a>
        <div className="flex h-full pt-4 border-t border-black">
          <div className="flex w-3/5 h-full">
            <motion.div className="w-3/5 h-full">
              <p className="block w-full text-sm pr-16 font-bold" layoutId={id}>
                {title}
              </p>
            </motion.div>
            <motion.div className="w-2/5 h-full ">
              <p className="block pt-1 text-xs w-full" layoutId={id}>
                {client_name && (
                  <>
                    {" "}
                    Client:
                    <br />
                    {client_name}
                  </>
                )}
              </p>
            </motion.div>
          </div>

          <motion.div className="w-2/5 h-full rounded overflow-hidden">
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
