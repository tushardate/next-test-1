import React from "react";
import Header from "../components/Header";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto flex h-screen bg-red-100 justify-center items-center"
      >
        <motion.p
          exit={{
            opacity: 0,
            y: 25,
            transition: {
              duration: 0.65,
              ease: [0.36, 0, 0.66, -0.56],
            },
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.65,
              ease: [0, 0.55, 0.45, 1],
            },
          }}
          layoutId={"Contact"}
          className="text-6xl"
        >
          Contact
        </motion.p>
      </motion.div>
    </>
  );
}
