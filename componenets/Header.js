import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  const links = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Contact", url: "/contact" },
  ];
  return (
    <nav className="list-none w-full h-12 sm:h-16 md:h-16 lg:h-24 flex justify-around items-center">
      {links.map((link) => (
        <div className="w-full h-full flex justify-center items-center">
          <li key={link.name} className="inline-block">
            <Link href={link.url}>
              <a>
                <motion.div
                  layoutId={link.name}
                  whileHover={{
                    color: "#ff0000",
                    scale: 1.2,
                  }}
                  animate={{ color: "#000", scale: 1 }}
                >
                  {link.name}
                </motion.div>
              </a>
            </Link>
          </li>
        </div>
      ))}
    </nav>
  );
}
