import { motion } from "framer-motion";

export default function Shakespeare() {
  return (
    <>
      <motion.div
        className="grid place-items-center h-screen"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          },
        }}
      >
        <h1 className="lg:text-6xl font-black">Shakespeare</h1>
      </motion.div>
    </>
  );
}
