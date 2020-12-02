import { useState } from "react";
import Header from "../components/Header";
import ProjectMenuItem3 from "../components/ProjectMenuItem3";
import { motion } from "framer-motion";

export default function Home(props) {
  // const projects = Object.keys(data).map((key) => data[key]);
  const projects = props.data;

  const easing = [0.6, -0.05, 0.01, 0.99];
  const fadeInUp = {
    initial: (custom) => ({
      x: "20%",
      y: "0%",
      skewX: "1deg",
      rotate: "2deg",
      opacity: 0,
    }),
    animate: (custom) => ({
      x: 0,
      y: 0,
      skewX: "0deg",
      rotate: "0deg",
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
      y: "0%",
      skewX: "3deg",
      rotate: "-2deg",
      transition: {
        duration: 0.55,
        ease: [0.32, 0, 0.67, 0],
        // easing: easing,
      },
    },
  };

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
        className="container mx-auto mt-24"
        exit="exit"
        initial="initial"
        animate="animate"
      >
        <motion.div variants={stagger} className="flex flex-wrap">
          <motion.div variants={slideIn} className="w-full pb-16">
            <p className="w-8/12 font-tdspace font-medium text-10xl headline tracking-tight leading-point-85">
              {/* Tushar Date is a creative director based in Los Angeles */}
              Work
            </p>
          </motion.div>

          {projects.map((project, i) => (
            <motion.div
              className={`project-column xl:w-1/2 lg:w-1/2 w-full xl:pb-20 pb-16 ${
                i % 2 === 0 ? "even" : "odd"
              }`}
              custom={
                Math.random() < 0.5 ? Math.random() * -1 : Math.random() * 1
              }
              key={project.id}
              variants={slideIn}
              style={{
                originX: 0.5,
                originY: 1,
              }}
            >
              <ProjectMenuItem3 key={project.id} data={project} />
              {/* <ProjectMenuItem key={project.id} data={project} /> */}
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
  const baseUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/td/v1/projects`;
  const res = await fetch(baseUrl);

  const data = await res.json();
  return {
    props: {
      data: data,
    },
    revalidate: 1,
  };
}
