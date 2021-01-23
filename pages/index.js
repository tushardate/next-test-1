import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectMenuItem6 from "../components/ProjectMenuItem6";
import { SplitText } from "../components/SplitText";
import { motion } from "framer-motion";

export default function Home(props) {
  // const projects = Object.keys(data).map((key) => data[key]);
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
      y: "8%",
      transition: {
        duration: 0.55,
        ease: "easeOut"
      },
    },
  };

  const slideTitleOut = {
    exit: {
      opacity: 0,
      y: "8%",
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  const staggerTitle = {
    initial: {
      x: 20,
      y: 10,
      opacity: 0,
    },
    animate: i => ({
      x: 0,
      y:0,
      opacity: 1,
      transition: {
        delay: i * 0.065,
        type: "spring",
        damping: 25,
        stiffness: 100,
      },
    }),
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  return (
    <>
      <Header />
      <motion.div
        className="mt-24 md:mt-32 px-4 md:px-8 text-gray-900"
        exit="exit"
        initial="initial"
        animate="animate"
      >
        <motion.div variants={stagger} className="flex flex-wrap">
          <motion.div variants={slideTitleOut} className="w-full pb-16 md:pb-24">
            <SplitText variants={staggerTitle} className="w-full md:w-4/5 font-tdspace font-medium xl:text-8xl md:text-7xl text-5xl headline tracking-tighter leading-point-90">
              Tushar Date is a creative director & art director based in Los
              Angeles
              {/* Work */}
            </SplitText>
          </motion.div>

          {projects.map((project, i) => (
            <motion.div
              className={`project-column xl:w-1/2 lg:w-1/2 w-full xl:pb-24 pb-16 ${
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
              <ProjectMenuItem6 key={project.id} data={project} />
              {/* <ProjectMenuItem key={project.id} data={project} /> */}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <Footer />
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
