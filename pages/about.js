import React, { useContext, useState, useEffect, useLayoutEffect } from "react";
import Header from "../components/Header";
import { useRouter } from "next/router";
import { Context } from "../components/stores/Store";
import { SplitText } from "../components/SplitText";
import { motion, useViewportScroll, useTransform } from "framer-motion";


export default function About(props) {
  const { acf } = props.data;
  const route = useRouter();
  const [store, setStore] = useContext(Context);
  // const { scrollYProgress } = useViewportScroll();
  // const hueRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  // const [hueColor, setHueColor] = useState(hueRotate.get())

  useEffect(() => {
    window.scrollTo(0, 0);
    // const dh = document.documentElement.scrollHeight;
    // const wh = window.innerHeight;
    // hueRotate.onChange(setHueColor)
  }, []);

  useEffect(() => {
    setStore({ changeColor: Math.random() });
  }, [route.asPath]);

  const slideIn = {
    initial: {
      y: 25,
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
      y: 25,
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
        staggerChildren: 0.08,
      },
    },
  };
  return (
    <div>
      <Header />
      <motion.div
        // style={{ backgroundColor: `hsla(${hueColor}, 15%, 87%, 1)` }}
        className="font-tdspace text-lg sm:text-xl pt-24 md:pt-36 lg:pt-40 pb-32 px-4 md:pl-8 md:pr-8 xl:pr-24 text-gray-900"
        exit="exit"
        initial="initial"
        animate="animate"
      >
        <motion.div variants={stagger} className="flex flex-wrap leading-relaxed">
          <motion.div className="w-full lg:pl-1/4 pb-12 lg:pb-16">
            <div className="md:-ml-2 font-medium md:text-6xl sm:text-5xl text-4xl tracking-snug leading-tight md:leading-none">
              <SplitText variants={slideIn}>{acf.td_about_name}</SplitText>
            </div>
            <div className="font-medium md:text-5xl sm:text-4xl text-3xl tracking-snug leading-tight md:leading-none">
              <SplitText variants={slideIn}>
                Creative&nbsp;Director &amp; Art&nbsp;Director
              </SplitText>
            </div>
          </motion.div>

          <motion.div
            variants={slideIn}
            className="w-full lg:flex pb-12 lg:pb-24"
          >
            <div className="w-full lg:w-1/4 text-2xl font-semibold pb-2 lg:pr-20 lg:text-right">
              Contact
            </div>
            <div className="font-tdsans">
              <a
                className="hover:text-gray-500"
                href={`tel:+1-${acf.td_about_phone}`}
              >
                <p>{acf.td_about_phone}</p>
              </a>
              <a
                className="hover:text-gray-500"
                href={`mailto:${acf.td_about_email}`}
              >
                <p>{acf.td_about_email}</p>
              </a>
              <a
                className="hover:text-gray-500"
                href="http://www.linkedin.com/pub/tushar-date/11/315/a25"
                target="_blank"
              >
                <p>LinkedIn Profile</p>
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={slideIn}
            className="w-full lg:flex pb-12 lg:pb-24"
          >
            <div className="w-full lg:w-1/4 text-2xl font-semibold pb-2 lg:pr-20 lg:text-right">
              About
            </div>
            {/* <div className="w-1/4 pr-20 pt-2">
              <img className="w-full object-contain" src={acf.td_about_picture}></img>
            </div> */}
            <div className="lg:w-3/4 font-tdsans lg:col-count-2 lg:col-gap-2xl">
              <p
                className=""
                dangerouslySetInnerHTML={{ __html: acf.td_about_bio }}
              ></p>
            </div>
          </motion.div>

          <motion.div
            variants={slideIn}
            className="w-full lg:flex pb-12 lg:pb-16"
          >
            <div className="w-full lg:w-1/4 text-2xl font-semibold pb-2 lg:pr-20 lg:text-right">
              Experience
            </div>
            <div className="w-full lg:w-3/4 font-tdsans lg:col-count-2 lg:col-gap-2xl">
              {acf.td_about_work_experience.map((el, i) => (
                <div className="pb-8 avoid-break about-col" key={i}>
                  <p className="font-medium">{el.td_exp_role}</p>
                  <p className="text-base">{el.td_exp_agency}</p>
                  <p className="text-base">{el.td_exp_dates}</p>
                  <p className="text-base">Clients: {el.td_exp_clients}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={slideIn}
            className="w-full lg:flex pb-12 lg:pb-16"
          >
            <div className="w-full lg:w-1/4 text-2xl font-semibold pb-2 lg:pr-20 lg:text-right">
              Recognition
            </div>
            <div className="w-full lg:w-3/4 font-tdsans lg:col-count-2 lg:col-gap-2xl font-light">
              {acf.td_about_awards.map((el, i) => (
                <p key={i}>
                  <span className="font-medium">{el.td_awards_name}</span>,{" "}
                  {el.td_awards_type}, {el.td_awards_client}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={slideIn}
            className="w-full lg:flex pb-12 lg:pb-16"
          >
            <div className="w-full lg:w-1/4 text-2xl font-semibold pb-2 lg:pr-20 lg:text-right">
              Education
            </div>
            <div className="w-full lg:w-3/4 font-tdsans font-light">
              {acf.td_about_edu.map((el, i) => (
                <p key={i}>
                  <span className="font-medium">{el.td_edu_name}</span>,{" "}
                  {el.td_edu_dates}, {el.td_edu_degree}
                </p>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export async function getStaticProps(context) {
  const baseUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/wp/v2/pages/68`;
  const res = await fetch(baseUrl);

  const data = await res.json();
  return {
    props: {
      data: data,
    },
    revalidate: 1,
  };
}
