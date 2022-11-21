import "../styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import Nav from "./components/nav";
import { motion, AnimatePresence } from "framer-motion";
import router from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = React.useRef(new QueryClient());

  return (
    <AnimatePresence>
      <motion.div
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
          pageExit: {
            opacity: 0,
          },
        }}
      >
        <QueryClientProvider client={queryClient.current}>
          <Hydrate state={pageProps.dehydratedState}>
            <Nav />
            <Component {...pageProps} />
          </Hydrate>
        </QueryClientProvider>
      </motion.div>
    </AnimatePresence>
  );
}
