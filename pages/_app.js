import "../styles/index.css";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter>
      {/* <AnimateSharedLayout> */}
      <Component {...pageProps} key={router.route} />
      {/* </AnimateSharedLayout> */}
    </AnimatePresence>
  );
}

export default MyApp;
