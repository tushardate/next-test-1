import "../styles/index.css";
import { AnimatePresence } from "framer-motion";
import Store from "../components/stores/Store";

function MyApp({ Component, pageProps, router }) {
  return (
    <Store>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </Store>
  );
}

export default MyApp;
