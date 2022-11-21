import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex justify-center h-screen">
      <div className="lg:w-2/3">
        <motion.div
          className="my-20 grid place-items-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                delay: 0.5,
              },
            },
          }}
        >
          <h1 className="lg:text-8xl font-black">Home</h1>
        </motion.div>
      </div>
    </div>
  );
}
