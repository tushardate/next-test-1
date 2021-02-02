import React, { useEffect, useState, useLayoutEffect } from "react";
import Header from "../../../components/Header";
import PrevNextTest from "../../../components/PrevNextTest";
import SingleItemTest from "../../../components/SingleItemTest";
import PasswordForm from "../../../components/PasswordForm";
import { motion } from "framer-motion";
import Footer from "../../../components/Footer";
import { SplitText } from "../../../components/SplitText";

export default function Project({ post, next, prev }) {
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
      setWrongPass((val) => val+1);
      localStorage.removeItem(id);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useLayoutEffect(() => {
    if(!password_protect) {
      setShowProject(true)
      localStorage.removeItem(id)
      return
    }
    const ls = localStorage.getItem(id);
    const timeperiod = 60 * 1000;
    if (ls) {
      const { loggedIn = false, pass = "", dateString = "" } = JSON.parse(ls);
      let date = dateString == "" ? new Date('December 17, 1995 03:24:00').getTime() : dateString;
      console.log(Date.now() - date)
      if(Date.now() - date > timeperiod) {
        setShowProject(false)
        localStorage.removeItem(id)
        return
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
            <div className="mt-20 md:mt-32">
              <div className="mx-4 md:mx-8 xl:mx-0">
                <div className="grid grid-cols-12 gap-4 pb-4 pl-1">
                  <div className="col-start-1 col-span-12 md:col-start-1 md:col-span-10 xl:col-start-3 xl:col-span-9">
                    <motion.h1
                      variants={fadeInUp}
                      className="font-tdsans font-medium sm:font-normal text-md md:text-2xl lg:text-2xl"
                    >
                      {client_name}
                    </motion.h1>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-4 pb-3 md:pb-5">
                  <div className="col-start-1 col-span-12 md:col-start-1 md:col-span-12 xl:col-start-3 xl:col-span-8">
                    <SplitText
                      variants={fadeInUp}
                      className="font-tdspace font-semibold text-5.5xl md:text-8xl lg:text-9xl tracking-snug leading-none md:leading-point-95"
                    >
                      {title}
                    </SplitText>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-4">
                  <motion.div
                    variants={fadeInUp}
                    className="col-start-1 col-span-12 md:col-start-4 md:col-span-9 xl:col-start-6 xl:col-span-5"
                  >
                    <div className="w-full pl-1 md:pl-0">
                      <p className="w-full block text-xl md:text-2xl lg:text-3xl font-tdsans font-normal sm:font-light md:tracking-snug md:leading-snug">
                        {general_project_description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            <motion.div variants={fadeInUp} className="content">
              {group_row_repeater.map((row, i) => (
                <div
                  key={i}
                  className={`my-12 md:my-20 lg:my-32 ${row.group_row_repeater_classes}`}
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
