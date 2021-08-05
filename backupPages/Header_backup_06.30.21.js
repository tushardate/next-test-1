import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  const leftRight = {
    initial: {
      scaleX: 0,
      originX: 0,
    },
    hover: {
      scaleX: 1,
      originX: 0,
      transition: {
        duration: 0.35,
      }
    }
  }
  const rightLeft = {
    initial: {
      scaleX: 0,
      originX: 1,
    },
    hover: {
      scaleX: 1,
      originX: 1,
      transition: {
        duration: 0.35,
      }
    }
  }
  const links = [
    { name: "Work", url: "/" },
    { name: "About", url: "/about" },
    // { name: "Test", url: "/test1" },
  ];
  return (
    <nav className="mx-auto font-tdsans font-medium text-gray-900 text-md px-4 md:px-8 fixed z-50 top-0 left-0 right-0 list-none w-full mt-4 md:mt-8 flex justify-between">
      <div className="">
        <Link href={"/"} scroll={false}>
          <a className="">
            <div className="flex justify-center items-end">
              <div className="w-6 h-6 md:w-7 md:h-7 mr-4">
                <svg viewBox="0 0 79.9 88.9">
                  <path d="M.7.02a.68.68 0 00-.7.7v21.7a.68.68 0 00.7.7h25.2a1.52 1.52 0 001.1-.6L39.6.72c.2-.3 0-.6-.4-.7zM40.7.02c-.4 0-.6.3-.4.6l12.6 21.8a1.52 1.52 0 001.1.6h25.2a.68.68 0 00.7-.7V.62a.56.56 0 00-.7-.6zM26.7 75.22a1.17 1.17 0 00.6 1l25.4 12.6c.4.2.6 0 .6-.4v-64.6a.68.68 0 00-.7-.7H27.4a.68.68 0 00-.7.7v51.4z" />
                </svg>
              </div>
              {/* <p className="text-xl leading-point-85 tracking-tight">
                Tushar Date
              </p> */}
            </div>
          </a>
        </Link>
      </div>
      <div className="flex justify-center items-center">
        {links.map((link) => (
          <motion.div initial="initial" whileHover="hover" key={link.name} className="relative ml-10vw lg:ml-24 text-lg md:text-xl">
            <motion.div variants={rightLeft} className="h-0.5 bg-gray-900 absolute w-full top-0 left-0"/>
            <li className="inline-block">
              <Link href={link.url} scroll={false}>
                <a>{link.name}</a>
              </Link>
            </li>
            <motion.div variants={leftRight} className="h-0.5 bg-gray-900 absolute w-full bottom-0 left-0"/>
          </motion.div>
        ))}
      </div>
    </nav>
  );
}
