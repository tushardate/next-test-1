import React, { useEffect } from "react";
import Header from "../../../components/Header";
import SingleItem from "../../../components/SingleItem";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "../../../components/Footer";

export default function Project({ post, next, prev }) {
  const {
    id,
    title,
    general_project_description,
    content,
    client_name,
    group_row_repeater,
  } = post;

  useEffect(() => {
    window.scrollTo(0, 0);
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
      <div className="w-full text-gray-900">
        <motion.div
          exit="exit"
          initial="initial"
          animate="animate"
          variants={stagger}
          className="container mx-auto sm:mt-32 mt-30"
        >
          <div className="">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-start-1 col-span-12 sm:col-start-2 sm:col-span-10 md:col-start-2 md:col-span-9">
                <motion.h1
                  variants={fadeInUp}
                  className="font-tdspace text-lg md:text-2xl"
                >
                  {client_name}:
                </motion.h1>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-start-1 col-span-12 sm:col-start-2 sm:col-span-10 md:col-start-2 md:col-span-9">
                <motion.h1
                  variants={fadeInUp}
                  className="font-tdspace font-bold text-6xl md:text-7xl lg:text-9xl tracking-tight leading-point-90"
                >
                  {title}
                </motion.h1>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4">
              <motion.div
                variants={fadeInUp}
                className="col-start-1 col-span-12 sm:col-start-5 sm:col-span-7 md:col-start-6 md:col-span-6 sm:mt-6 mt-1"
              >
                <div className="w-full">
                  <p className="w-full block font-tdspace text-lg md:text-1xl lg:text-3xl">
                    {general_project_description}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
        <div className="content tracking-snug">
          {group_row_repeater.map((row, i) => (
            <div key={i} className={row.group_row_repeater_classes}>
              {row.group_row_repeater_items.map((el, j) => (
                <div key={j} className={el.single_item_classes}>
                  <SingleItem {...el.single_item[0]} />
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="w-full flex justify-between py-20 px-10 font-tdspace tracking-snug leading-none text-3xl">
          <Link
            as={`/projects/${prev.slug}`}
            href="/projects/[slug]"
            scroll={false}
          >
            <a>
              <motion.div variants={fadeInUp} className="flex items-center">
                <p className="pr-2 font-light text-7xl">&#8598;</p>
                <div>
                  <p className="font-light text-xl">Prev Project:</p>
                  <p className="font-medium">{prev.title}</p>
                </div>
              </motion.div>
            </a>
          </Link>
          <Link
            as={`/projects/${next.slug}`}
            href="/projects/[slug]"
            scroll={false}
          >
            <a>
              <motion.div
                variants={fadeInUp}
                className="flex items-center text-right"
              >
                <div>
                  <p className="font-light text-xl">Next Project:</p>
                  <p className="font-medium">{next.title}</p>
                </div>
                <p className="pl-2 font-light text-7xl">&#8599;</p>
              </motion.div>
            </a>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/td/v1/projects/${params.slug}`
  );
  const post = await res.json();

  const resAll = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/td/v1/projects`
  );

  const projects = await resAll.json();
  const currentIdx = projects.findIndex((p) => p.slug === params.slug);
  const nextIdx = currentIdx < projects.length - 1 ? currentIdx + 1 : 0;
  const prevIdx = currentIdx > 0 ? currentIdx - 1 : projects.length - 1;

  // Pass post data to the page via props
  return {
    props: { post, next: projects[nextIdx], prev: projects[prevIdx] },
    revalidate: 1,
  };
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
