import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function PasswordForm({ submitPass, wrongPass }) {
  const ref = useRef();
  const shake = useAnimation();

  useEffect(() => {
      ref.current.focus()
    if (wrongPass > 0) {
      shake.stop();
      shake.start({
        x: [0, 5, -5, 0],
        transition: {
          duration: 0.15,
          repeat: 1,
        },
      });
    }
  }, [wrongPass]);

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
        when: "beforeChildren",
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

  const handleSubmit = () => {
    submitPass(ref.current.value);
    ref.current.value = "";
  };
  return (
    <motion.div
      variants={fadeInUp}
      className="font-tdsans mt-20 md:mt-32 min-h-60vh w-full flex justify-center items-center"
    >
      <div className="w-full px-4 xs:w-10/12 sm:w-8/12 md:w-7/12 lg:w-5/12 xl:w-4/12">
        <motion.h1 animate={shake} className="text-center pb-10 text-xl ">
          {wrongPass > 0
            ? `Nice try, Sherlock. Try again.`
            : "This project requires a password."}
        </motion.h1>
        <motion.div className="w-full flex justify-center" animate={shake}>
          <input
            ref={ref}
            className="w-8/12 px-3 h-10 text-xl focus:outline-none"
            placeholder=""
            type="text"
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          ></input>
          <button
            className="w-4/12 px-4 bg-gray-900 h-10 text-white rounded-none focus:outline-none "
            onClick={() => handleSubmit()}
          >
            Submit
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
