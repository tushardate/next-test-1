import React, { useEffect } from "react";
import Header from "../../../componenets/Header";
import { motion } from "framer-motion";

export default function Project({ post }) {
  console.log(post);
  const { id, title, general_project_description, content, client_name } = post;

  useEffect(() => {
    return () => {
      console.log(`Exiting ${title}`);
    };
  }, []);

  const fadeInUp = {
    initial: {
      y: "10%",
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
      y: "10%",
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
        className="container mx-auto mt-20"
      >
        <div className="xl:mx-16 lg:mx-8 md:mx-8 mx-4">
          <motion.div className="flex w-full" variants={stagger} layoutId={id}>
            <div className="w-full sm:w-4/6 ml-auto">
              <motion.h1
                variants={fadeInUp}
                className="font-tdsans font-medium text-6xl md:text-7xl lg:text-8xl leading-none"
              >
                {title}
              </motion.h1>
            </div>
          </motion.div>
          <motion.div className="flex w-full" variants={stagger} layoutId={id}>
            <div className="flex w-full mt-1 sm:mt-3">
              <div className="w-2/6 flex hidden sm:block">
                <motion.p
                  variants={fadeInUp}
                  className="pt-5 border-t border-black w-full mr-8 font-tdsans font-light text-md"
                >
                  {client_name && `Client: ${client_name}`}
                </motion.p>
              </div>

              <div className="w-full sm:w-4/6 flex">
                <motion.p
                  variants={fadeInUp}
                  className="w-full lg:w-5/6 block font-tdsans font-light text-1xl md:text-2xl lg:text-3xl pt-3"
                >
                  {general_project_description}
                </motion.p>
              </div>
            </div>
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
    `http://testing.tushardate.com/wp-json/td/v1/projects/${params.slug}`
  );
  const post = await res.json();

  // Pass post data to the page via props
  return { props: { post }, revalidate: 1 };
}

export async function getStaticPaths(params) {
  // Call an external API endpoint to get posts
  const res = await fetch(
    "http://testing.tushardate.com/wp-json/td/v1/projects"
  );
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}
