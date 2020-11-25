import { useState } from "react";
import Header from "../componenets/Header";
import ProjectMenuItem from "../componenets/ProjectMenuItem";
import { motion } from "framer-motion";

export default function Home(props) {
  // const projects = Object.keys(data).map((key) => data[key]);
  const projects = props.data;

  const easing = [0.6, -0.05, 0.01, 0.99];
  const fadeInUp = {
    initial: (custom) => ({
      x: "20%",
      y: "5%",
      skewX: 1.5,
      opacity: 0,
    }),
    animate: (custom) => ({
      x: 0,
      y: 0,
      skewX: 0,
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    }),
    exit: {
      opacity: 0,
      x: "-20%",
      y: "5%",
      transition: {
        duration: 0.55,
        ease: [0.32, 0, 0.67, 0],
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
        className="container mx-auto"
        exit="exit"
        initial="initial"
        animate="animate"
      >
        <motion.div variants={stagger} className="flex flex-wrap">
          {projects.map((project, i) => (
            <motion.div
              className="xl:w-1/4 lg:w-1/3 md:w-1/3 sm:w-1/2 w-full p-5"
              custom={
                Math.random() < 0.5 ? Math.random() * -1 : Math.random() * 1
              }
              key={project.id}
              variants={fadeInUp}
              style={{
                originX: Math.round(Math.random()),
                originY: Math.round(Math.random()),
              }}
            >
              <ProjectMenuItem key={project.id} data={project} />
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
  const data = await res.json();
  return {
    props: {
      data: data,
    },
    revalidate: 1,
  };
}
