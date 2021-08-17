import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      transition={{ duration: 0.75 }}
      exit={{ opacity: 0 }}
      className="text-gray-500 font-tdsans text-sm md:text-base px-4 sm:px-8 md:px-12 xl:px-24 w-full pb-2 md:py-4 text-center md:text-left xs:flex justify-between items-end">
        <a className="hover:text-gray-900 px-2 md:px-0" href="mailto:tushardate@gmail.com">tushardate@gmail.com</a>
        <p className="hidden md:inline mx-5">|</p>
        <a className="hover:text-gray-900 px-2 md:px-0" href="tel:+1-720-292-0384">720-292-0384</a>
        <p className="md:ml-auto px-2 md:px-0">{`©${new Date().getFullYear()} Tushar Date`}</p>
    </motion.div>
  );
}