import { useEffect, useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectMenuItem7 from "../components/ProjectMenuItem7";
import ProjectMenuItem7Mobile from "../components/ProjectMenuItem7_Mobile";
import { SplitText } from "../components/SplitText";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { Context } from "../components/stores/Store";
import useIsTouchDevice from '../components/hooks/useIsTouchDevice'

export default function Home(props) {
  // const projects = Object.keys(data).map((key) => data[key]);
  const projects = props.data;
  const route = useRouter();
  const [store, setStore] = useContext(Context);
  const isTouchDevice = useIsTouchDevice();

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(isTouchDevice)
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
        className="mx-4 sm:mx-8 md:mx-12 xl:mx-24 mt-20 md:mt-32 lg:mt-32 mb-20 text-gray-900"
        exit="exit"
        initial="initial"
        animate="animate"
      >
        <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project, i) => {
                return isTouchDevice ? <motion.div>
                    <ProjectMenuItem7Mobile key={project.id} data={project} />
                  </motion.div>
                : <ProjectMenuItem7 key={project.id} data={project} />
              } 
            )}
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
