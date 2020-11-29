import { useState } from "react";
import Header from "../componenets/Header";
import ProjectMenuItem from "../componenets/ProjectMenuItem";
import ProjectMenuItem2 from "../componenets/ProjectMenuItem2";
import { motion } from "framer-motion";

export default function Home2(props) {
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
        className="w-full mx-auto mt-32"
        exit="exit"
        initial="initial"
        animate="animate"
      >
        <motion.div variants={stagger} className="flex flex-wrap">
          <motion.p
            custom={
              Math.random() < 0.5 ? Math.random() * -1 : Math.random() * 1
            }
            variants={slideIn}
            style={{
              originX: 0.5,
              originY: 1,
            }}
            className="text-center"
          >
            {projects.map((project, i) => (
              <span
                key={project.id}
                className="word-wrap break-all text-8xl font-tdsans font-bold hover:text-indigo-500 leading-point-90"
              >
                {project.title}•
              </span>
            ))}
          </motion.p>
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
