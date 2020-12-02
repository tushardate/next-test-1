import Header from "../components/Header";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home4(props) {
  const projects = props.data;

  const slideIn = {
    initial: (custom) => ({
      y: "10%",
      opacity: 0,
    }),
    animate: (custom) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    }),
    exit: {
      opacity: 0,
      y: "10%",
      transition: {
        duration: 0.55,
        ease: [0.4, -0.15, 0.66, 0],
        // ease: [0.36, 0, 0.66, -0.56], //ease back out
        // easing: easing,
      },
    },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.025,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.025,
        // staggerDirection: -1,
      },
    },
  };

  return (
    <>
      <Header />
      <motion.div
        className="container mx-auto mt-32"
        exit="exit"
        initial="initial"
        animate="animate"
      >
        <motion.div variants={stagger} className="flex flex-wrap">
          {projects.map((project, i) => (
            <motion.div
              variants={slideIn}
              key={project.id}
              className="w-full md:w-1/2 lg:w-full px-4 py-6"
            >
              <Link
                as={`/projects/${project.slug}`}
                href="/projects/[slug]"
                scroll={false}
              >
                <a>
                  <div className="grid grid-cols-12 border-t-1 border-black">
                    <div className="col-start-2 col-span-11">
                      <p className="pb-1 text-gray-900 text-lg font-tdspace font-light leading-point-95">
                        {project.client_name}:
                      </p>
                    </div>
                    <div className="col-start-1 col-span-1 flex justify-end">
                      <p className="pr-3 pt-1 text-gray-900 text-lg font-tdspace font-light leading-point-95">
                        {i + 1 < 10 ? `0${i + 1}` : i + 1}
                      </p>
                    </div>
                    <div className="col-start-2 col-span-9">
                      <p className="font-bold text-left text-gray-900 text-2xl md:text-5xl lg:text-4xl xl:text-6xl tracking-snug font-tdspace leading-point-95">
                        {/* <span className="font-thin text-2xl">
                      {project.client_name}:<br />
                    </span> */}
                        {project.title}
                      </p>
                    </div>
                    <div className="col-start-2 col-span-11">
                      <p className="pt-1 font-light text-2xl tracking-snug font-tdspace leading-point-95">
                        &#8594;
                      </p>
                    </div>
                  </div>
                </a>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}

export async function getStaticProps(context) {
  // const res = await fetch("http://testing.tushardate.com/wp-json/wp/v2/posts/");
  // const res = await fetch(
  //   "http://testing.tushardate.com/wp-json/wp/v2/projects?per_page=50"
  // );
  const res = await fetch(
    "http://testing.tushardate.com/wp-json/td/v1/projects"
  );
  // const res = await fetch(
  //   "http://duplicatetushardate.local/wp-json/td/v1/projects"
  // );
  const data = await res.json();
  return {
    props: {
      data: data,
    },
    revalidate: 1,
  };
}
