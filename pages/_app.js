import "../styles/index.css";
import Layout from "../components/Layout";
import { AnimatePresence } from "framer-motion";
import Store, { Context } from "../components/stores/Store";

function MyApp({ Component, pageProps, router }) {
  return (
    <Store>
      {/* <Layout> */}
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      {/* </Layout> */}
    </Store>
  );
}

export default MyApp;
