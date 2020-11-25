import React, { useEffect } from "react";
import Header from "../../../componenets/Header";
import { motion } from "framer-motion";

export default function Project({ post }) {
  const { id, title, acf, content } = post;
  const { general_project_description } = acf;

  useEffect(() => {
    return () => {
      console.log(`Exiting ${title.rendered}`);
    };
  }, []);

  const fadeInUp = {
    initial: {
      y: 20,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.75,
        ease: [0, 0.55, 0.45, 1],
      },
    },
    exit: {
      y: 40,
      opacity: 0,
      transition: {
        duration: 0.75,
        ease: [0.36, 0, 0.66, -0.56],
      },
    },
  };
  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.15,
        staggerDirection: -1,
      },
    },
  };
  return (
    <>
      <Header />
      <motion.div
        exit="exit"
        initial="initial"
        animate="animate"
        className="container mx-auto"
      >
        <div className="">
          <motion.div variants={stagger} layoutId={id}>
            <motion.h1 variants={fadeInUp} className="text-5xl mb-4">
              {title.rendered}
            </motion.h1>
            <motion.p variants={fadeInUp} className="">
              {general_project_description}
            </motion.p>
            <img></img>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(
    `http://testing.tushardate.com/wp-json/wp/v2/projects/${params.id}`
  );
  const post = await res.json();

  // Pass post data to the page via props
  return { props: { post }, revalidate: 1 };
}

export async function getStaticPaths(params) {
  // Call an external API endpoint to get posts
  const res = await fetch(
    "http://testing.tushardate.com/wp-json/wp/v2/projects"
  );
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}
