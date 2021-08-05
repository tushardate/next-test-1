import { useEffect, useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectMenuItem7 from "../components/ProjectMenuItem7";
import { SplitText } from "../components/SplitText";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { Context } from "../components/stores/Store";

export default function Home(props) {
  // const projects = Object.keys(data).map((key) => data[key]);
  const projects = props.data;
  const route = useRouter();
  const [store, setStore] = useContext(Context);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setStore({ changeColor: Math.random() });
  }, [route.asPath]);

  const slideIn = {
    initial: {
      y: 20,
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
        staggerChildren: 0.08,
      },
    },
  };

  return (
    <div>
      <Header />
      <motion.div
        className="pt-24 md:pt-36 lg:pt-40 px-4 md:px-8 text-gray-900"
        exit="exit"
        initial="initial"
        animate="animate"
      >
        <motion.div variants={stagger} className="flex flex-wrap">
          <motion.div className="w-full pb-16 md:pb-24">
            <SplitText
              variants={slideIn}
              className="font-tdspace font-medium xl:text-7xl sm:text-6xl text-5xl tracking-tight leading-none"
            >
              Tushar Date is a creative&nbsp;director &amp; art&nbsp;director
              based in Los&nbsp;Angeles
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
                // variants={slideIn}
                style={{
                  originX: 0.5,
                  originY: 1,
                }}
              >
                <ProjectMenuItem7 key={project.id} data={project} />
                {/* <ProjectMenuItem key={project.id} data={project} /> */}
              </motion.div>
            ))}
        </motion.div>
      </motion.div>
      <Footer />
    </div>
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
