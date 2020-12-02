import Header from "../components/Header";
import { motion } from "framer-motion";

export default function Home3(props) {
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
              className="w-1/2 px-10 py-20"
            >
              <div className="grid grid-cols-12 relative">
                <div className="col-start-2 col-span-11 pb-7/12 relative">
                  <img
                    className="absolute w-full h-full object-cover"
                    src={
                      project.featured_image.large &&
                      project.featured_image.large
                    }
                  ></img>
                </div>
                <div className="absolute inset-0 col-start-1 col-span-10">
                  <p className="font-medium text-gray-900 z-10 transform -translate-y-12 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-6xl font-tdsans tracking-wide leading-point-95">
                    {project.title}
                  </p>
                </div>
              </div>
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
