import React, { useEffect } from "react";
import Header from "../../../componenets/Header";
import { motion } from "framer-motion";

export default function Project({ post }) {
  const { id, title, general_project_description, content, client_name } = post;

  const fadeInUp = {
    initial: {
      y: 20,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
    exit: {
      y: 20,
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
        // staggerDirection: -1,
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
        className="container mx-auto sm:mt-40 mt-20"
        variants={stagger}
      >
        <div className="xl:mx-16 lg:mx-8 md:mx-8 mx-4">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-start-1 col-span-12 sm:col-start-2 sm:col-span-10 md:col-start-3 md:col-span-6">
              <motion.h1
                variants={fadeInUp}
                className="font-tdsans font-medium text-6xl md:text-7xl lg:text-8xl leading-none"
              >
                {title}
              </motion.h1>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4">
            <motion.div
              variants={fadeInUp}
              className="col-start-1 col-span-12 sm:col-start-5 sm:col-span-7 md:col-start-6 md:col-span-6 sm:mt-6 mt-1 border-b border-black sm:pb-6 pb-4"
            >
              <div className="w-full">
                <p className="w-full block font-tdsans font-light text-lg md:text-1xl lg:text-2xl pt-3">
                  {general_project_description}
                </p>
              </div>
            </motion.div>
          </div>
          <div className="grid grid-cols-12 gap-4">
            <motion.div
              variants={fadeInUp}
              className="col-start-1 col-span-12 sm:col-start-5 sm:col-span-7 md:col-start-6 md:col-span-2 sm:mt-6 mt-4"
            >
              <div className="w-full font-tdsans font-light sm:text-md text-sm">
                {client_name && (
                  <>
                    <p>Client:</p>
                    <p>{client_name}</p>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="content"></div>
      </motion.div>
    </>
  );
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  console.log(params);
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/td/v1/projects/${params.slug}`
  );
  const post = await res.json();

  // Pass post data to the page via props
  return { props: { post }, revalidate: 1 };
}

export async function getStaticPaths(params) {
  // Call an external API endpoint to get posts
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/td/v1/projects`
  );
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug.toString(),
    },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}
