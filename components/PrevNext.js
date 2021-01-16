import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PrevNext(props) {
  return (
    <div className="grid grid-cols-12 pt-32 pb-20 px-4 font-tdspace tracking-tight leading-tight xs:text-lg md:text-2xl lg:text-5xl">
      <div className="col-start-1 col-span-4">
        <Link
          as={`/projects/${props.prev.slug}`}
          href="/projects/[slug]"
          scroll={false}
        >
          <a className="ml-auto">
            <motion.div className="text-right">
              <div>
                <p className="font-medium">&#8598; Prev Project</p>
                <p className="font-light xs:text-medium md:text-2xl lg:text-4xl">
                  {props.prev.title}
                </p>
              </div>
            </motion.div>
          </a>
        </Link>
      </div>
      <div className="col-start-9 col-span-4">
        <Link
          as={`/projects/${props.next.slug}`}
          href="/projects/[slug]"
          scroll={false}
        >
          <a>
            <motion.div className="">
              <div>
                <p className="font-medium">Next Project &#8599;</p>
                <p className="font-light xs:text-medium md:text-2xl lg:text-4xl">
                  {props.next.title}
                </p>
              </div>
            </motion.div>
          </a>
        </Link>
      </div>
    </div>
  );
}
