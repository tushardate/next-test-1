import React, { useEffect, useState, useLayoutEffect } from "react";
import Header from "../../../components/Header";
import PrevNextTest from "../../../components/PrevNextTest";
import SingleItemTest from "../../../components/SingleItemTest";
import PasswordForm from "../../../components/PasswordForm";
import { motion } from "framer-motion";
import Footer from "../../../components/Footer";
import { SplitText } from "../../../components/SplitText";
import ProjectLinks2 from "../../../components/ProjectLinks2";

export default function Project({ post, next, prev, allPosts }) {
  const [showProject, setShowProject] = useState(false);
  const [wrongPass, setWrongPass] = useState(0);

  const {
    id,
    title,
    general_project_description,
    content,
    client_name,
    group_row_repeater,
    password_protect,
    password,
  } = post;

  const submitPass = (pass) => {
    if (pass === password) {
      setShowProject(true);
      let ls = { loggedIn: true, pass: pass, dateString: Date.now() };
      localStorage.setItem(id, JSON.stringify(ls));
    } else {
      setWrongPass((val) => val + 1);
      localStorage.removeItem(id);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useLayoutEffect(() => {
    if (!password_protect) {
      setShowProject(true);
      localStorage.removeItem(id);
      return;
    }
    const ls = localStorage.getItem(id);
    const timeperiod = 90 * 24 * 60 * 60 * 1000; // 90 days since last visit
    if (ls) {
      const { loggedIn = false, pass = "", dateString = "" } = JSON.parse(ls);
      let date =
        dateString == ""
          ? new Date("December 17, 1995 03:24:00").getTime()
          : dateString;
      console.log(Date.now() - date);
      if (Date.now() - date > timeperiod) {
        setShowProject(false);
        localStorage.removeItem(id);
        return;
      }
      if (loggedIn && pass === password) {
        setShowProject(true);
      } else {
        setShowProject(false);
      }
    } else {
      setShowProject(false);
    }
  }, []);

  const fadeInUp = {
    initial: {
      y: 30,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 100,
      },
    },
    hover: {
      scale: 1.2,
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
        staggerChildren: 0.06,
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
        className="w-full text-gray-900"
        variants={stagger}
      >
        {showProject ? (
          <>
            <div className="mx-4 sm:mx-8 md:mx-12 xl:mx-24 mt-24 lg:mt-40">
              <div className="w-full pb-2">
                <motion.h1
                  variants={fadeInUp}
                  className="font-tdsans md:text-2xl"
                >
                  {client_name}
                </motion.h1>
              </div>
              <div className="flex flex-col md:grid grid-cols-2">
                  <div className="w-full lg:w-50">
                    <SplitText
                      variants={fadeInUp}
                      className="font-tdcond text-30vw md:text-13vw uppercase tracking-loose leading-point-75"
                    >
                      {title}
                    </SplitText>
                  </div>
                  <div className="w-full lg:w-50 mt-4 md:mt-0">
                    <motion.div
                      variants={fadeInUp}
                      className=""
                    >
                      <div className="w-full pl-1 md:pl-0">
                        <p
                          className="w-full block text-2xl font-tdsans md:tracking-snug md:leading-snug"
                          dangerouslySetInnerHTML={{
                            __html: general_project_description,
                          }}
                        />
                      </div>
                    </motion.div>
                  </div>
              </div>
              <hr class="border-gray-900 mt-10 lg:mt-20"/>
            </div>

            <motion.div variants={fadeInUp} className="content mx-4 sm:mx-8 md:mx-12 xl:mx-24">
              {group_row_repeater.map((row, i) => (
                <div
                  key={i}
                  className={`my-12 md:my-20 lg:my-20 ${row.group_row_repeater_classes}`}
                >
                  {row.group_row_repeater_items.map((el, j) => (
                    <motion.div key={j} className={el.single_item_classes}>
                      <SingleItemTest {...el.single_item[0]} />
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>
          </>
        ) : (
          <PasswordForm submitPass={submitPass} wrongPass={wrongPass} />
        )}

        <motion.div variants={fadeInUp}>
          <PrevNextTest prev={prev} next={next} />
        </motion.div>

        <ProjectLinks2 allPosts={allPosts} currentId={id}></ProjectLinks2>
      </motion.div>
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
  // const nextIdx = currentIdx < projects.length - 1 ? currentIdx + 1 : 0;
  // const prevIdx = currentIdx > 0 ? currentIdx - 1 : projects.length - 1;

  const nextIdx = (currentIdx + 1) % projects.length;
  const prevIdx = (currentIdx - 1 + projects.length) % projects.length;

  // Pass post data to the page via props
  return {
    props: {
      post,
      next: projects[nextIdx],
      prev: projects[prevIdx],
      allPosts: projects,
    },
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
