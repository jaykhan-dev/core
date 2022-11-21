import { motion } from "framer-motion";

export default function Animals() {
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
        <h1 className="text-6xl font-black">Animals</h1>
      </motion.div>
    </>
  );
}
