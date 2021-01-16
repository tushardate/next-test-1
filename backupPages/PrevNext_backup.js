import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PrevNext(props) {
  return (
    <div className="w-full flex justify-between pt-32 pb-20 px-10 font-tdspace tracking-tight leading-none xs:text-lg md:text-2xl lg:text-5xl">
      <Link
        as={`/projects/${props.prev.slug}`}
        href="/projects/[slug]"
        scroll={false}
      >
        <a>
          <motion.div
                        className="flex items-center text-right pr-2"
          >
            <div>
              <p className="font-medium pb-2">&#8598; Prev Project</p>
              <p className="font-light xs:text-medium md:text-2xl lg:text-4xl">
                {props.prev.title}
              </p>
            </div>
          </motion.div>
        </a>
      </Link>
      <Link
        as={`/projects/${props.next.slug}`}
        href="/projects/[slug]"
        scroll={false}
      >
        <a>
          <motion.div className="flex items-center pl-2">
            <div>
              <p className="font-medium pb-2">Next Project &#8599;</p>
              <p className="font-light xs:text-medium md:text-2xl lg:text-4xl">
                {props.next.title}
              </p>
            </div>
          </motion.div>
        </a>
      </Link>
    </div>
  );
}
