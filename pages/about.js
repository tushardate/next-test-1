import React, { useEffect } from "react";
import Header from "../components/Header";
import { SplitText } from "../components/SplitText";
import { motion } from "framer-motion";

export default function About(props) {
  const { acf } = props.data;
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
    <>
      <Header />
      <motion.div
        className="font-tdspace text-lg sm:text-xl mt-24 md:mt-36 lg:mt-40 px-4 md:pl-8 md:pr-16 lg:pr-24 text-gray-900"
        exit="exit"
        initial="initial"
        animate="animate"
      >
        <motion.div variants={stagger} className="flex flex-wrap">
          <motion.div className="w-full lg:pl-1/4 pb-12 lg:pb-16">
            <div className="md:-ml-2 font-medium md:text-6xl text-5xl leading-tight">
              <SplitText variants={slideIn}>{acf.td_about_name}</SplitText>
            </div>
            <div className="font-medium md:text-5xl text-4xl leading-tight">
              <SplitText variants={slideIn}>{acf.td_about_title}</SplitText>
            </div>
            <div className="font-medium md:text-5xl text-4xl leading-tight">
            <a className="hover:text-gray-500" href={`tel:+1-${acf.td_about_phone}`}>
              <SplitText variants={slideIn}>{acf.td_about_phone}</SplitText>
            </a>
            </div>
            <div className="font-medium md:text-5xl text-4xl leading-tight">
            <a className="hover:text-gray-500" href={`mailto:${acf.td_about_email}`}>
              <SplitText variants={slideIn}>{acf.td_about_email}</SplitText>
              </a>
            </div>
          </motion.div>

          <motion.div variants={slideIn} className="w-full lg:flex pb-12 lg:pb-24">
            <div className="w-1/4 pr-20 pt-2">
              {/* <img className="w-full object-contain" src={acf.td_about_picture}></img> */}
            </div>
            <div
              className="w-3/4 font-tdsans lg:col-count-2 lg:col-gap-2xl"
            >
              <p className="" dangerouslySetInnerHTML={{ __html: acf.td_about_bio }}></p>
            </div>
          </motion.div>

          <motion.div variants={slideIn} className="w-full lg:flex pb-12 lg:pb-16">
            <div className="w-full lg:w-1/4 text-2xl font-medium pb-2">Experience</div>
            <div className="w-full lg:w-3/4 font-tdsans lg:col-count-2 lg:col-gap-2xl font-light">
              {acf.td_about_work_experience.map((el, i) => (
                <div className="pb-8 avoid-break about-col" key={i}>
                  <p className="font-medium">{el.td_exp_role}</p>
                  <p>{el.td_exp_agency}</p>
                  <p>{el.td_exp_dates}</p>
                  <p>Clients: {el.td_exp_clients}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={slideIn} className="w-full lg:flex pb-12 lg:pb-16">
            <div className="w-full lg:w-1/4 text-2xl font-medium pb-2">Recognition</div>
            <div className="w-full lg:w-3/4 font-tdsans lg:col-count-2 lg:col-gap-2xl font-light">
              {acf.td_about_awards.map((el, i) => (
                <p><span className="font-medium">{el.td_awards_name}</span>, {el.td_awards_type}, {el.td_awards_client}</p>
              ))}
            </div>
          </motion.div>

          <motion.div variants={slideIn} className="w-full lg:flex pb-12 lg:pb-16">
            <div className="w-full lg:w-1/4 text-2xl font-medium pb-2">Education</div>
            <div className="w-full lg:w-3/4 font-tdsans font-light">
              {acf.td_about_edu.map((el, i) => (
                <p><span className="font-medium">{el.td_edu_name}</span>, {el.td_edu_dates}, {el.td_edu_degree}</p>
              ))}
            </div>
          </motion.div>


        </motion.div>
      </motion.div>
    </>
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
