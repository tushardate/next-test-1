import { useEffect } from "react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

function ProjectMenuItem5(props) {
  const animation = useAnimation();
  const [ref, inView, entry] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    } else {
      animation.start("hidden");
    }
  }, [animation, inView]);

  const variants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 2 },
    },
    hidden: {
      y: 20,
      opacity: 0,
    },
  };

  const { client_name, title, id, featured_image, slug } = props.data;
  return (
    <motion.div ref={ref} animate={animation} initial="hidden" variants={{ variants }}>
      <Link as={`/projects/${slug}`} href="/projects/[slug]" scroll={false}>
        <a>
          <div className="flex pt-16/9 h-0 overflow-hidden relative">
            <motion.div className="w-full absolute top-0 left-0">
              <img
                className="object-cover h-full w-full"
                src={featured_image.large && featured_image.large}
              ></img>
            </motion.div>
            <div className="flex absolute top-0 left-0 w-full h-full justify-center items-center">
              <motion.div className="">
                <p className="block w-full text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-3xl xl:text-3xl font-tdspace font-light tracking-snug leading-none">
                  {title}
                </p>
              </motion.div>
              <motion.div className="">
                <p className="text-xs sm:text-base font-tdspace">
                  {client_name && `Client: ${client_name}`}
                </p>
              </motion.div>
            </div>
          </div>
        </a>
      </Link>
    </motion.div>
  );
}

export default ProjectMenuItem5;
