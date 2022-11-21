import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Api() {
  return (
    <div className="flex justify-center h-screen">
      <div className="w-full lg:w-2/3 my-20 p-4">
        <motion.div
          className="grid lg:grid-cols-4 md:grid-cols-2 gap-4"
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
          <Link href="/spacex" className="">
            <div className="border border-white/10 rounded hover:scale-95 duration-300">
              <Image
                src="/images/spacex-750x421.png"
                width={750}
                height={420}
                alt="Space X Thumbnail"
              />
              <p className="py-2 bg-blue-700 text-center hover:bg-blue-600 duration-300">
                Space X
              </p>
            </div>
          </Link>
          {/* BITCOIN */}
          <Link href="/bitcoin" className="">
            <div className="border border-white/10 rounded hover:scale-95 duration-300">
              <Image
                src="/images/bitcoin-750x422.png"
                width={750}
                height={420}
                alt="Space X Thumbnail"
              />
              <p className="py-2 bg-blue-700 text-center hover:bg-blue-600 duration-300">
                Bitcoin
              </p>
            </div>
          </Link>
          {/* CHUCK */}
          <Link href="/chuck" className="">
            <div className="border border-white/10 rounded hover:scale-95 duration-300">
              <Image
                src="/images/chuck-750x422.png"
                width={750}
                height={420}
                alt="Space X Thumbnail"
              />
              <p className="py-2 bg-blue-700 text-center hover:bg-blue-600 duration-300">
                Chuck Norris
              </p>
            </div>
          </Link>
          {/* Animals */}
          <Link href="/animals" className="">
            <div className="border border-white/10 rounded hover:scale-95 duration-300">
              <Image
                src="/images/chuck-750x422.png"
                width={750}
                height={420}
                alt="Space X Thumbnail"
              />
              <p className="py-2 bg-blue-700 text-center hover:bg-blue-600 duration-300">
                Animals
              </p>
            </div>
          </Link>
          {/* Shakespeare */}
          <Link href="/shakespeare" className="">
            <div className="border border-white/10 rounded hover:scale-95 duration-300">
              <Image
                src="/images/shakespeare-750x420.png"
                width={750}
                height={420}
                alt="Space X Thumbnail"
              />
              <p className="py-2 bg-blue-700 text-center hover:bg-blue-600 duration-300">
                Shakespeare
              </p>
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
