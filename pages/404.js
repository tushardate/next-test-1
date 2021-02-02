import {useEffect} from 'react'
import Link from 'next/link';
import {useRouter} from "next/router"
import {motion} from "framer-motion"

export default function Custom404() {
    let router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push("/")
        }, 3000)
        
    }, [])
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

  return (
    <motion.div initial="initial" animate='animate' exit='exit' variants={fadeInUp} className="w-full min-h-screen flex justify-center items-center flex-col">
      <div className="px-4 font-tdspace font-semibold fs-20">4OH!4</div>
      <div className="px-4 font-tdsans text-2xl sm:text-3xl text-center">You're in the wrong neighborhood homie. Let's&nbsp;go&nbsp;<Link href={"/"}><a className="font-medium">home.</a></Link></div>
    </motion.div>
  );
}
