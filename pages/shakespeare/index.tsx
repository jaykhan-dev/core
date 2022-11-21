import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

import { dehydrate, QueryClient, useQuery } from "react-query";

type ShakespeareData = {
  0: {
    title: String;
    lines: string;
    linecount: string;
    author: string;
  };
};

const getShakespeareData = async () => await (await fetch("")).json();

export default function Shakespeare() {
  const { data, isLoading, isFetching } = useQuery<ShakespeareData>(
    "shakespeare",
    getShakespeareData
  );
  console.log(data);
  if (isLoading)
    return <div className="h-screen grid place-items-center">Loading...</div>;

  if (!data)
    return (
      <div className="h-screen grid place-items-center">API not hooked up</div>
    );
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
        <div className="lg:w-2/3">
          <h1 className="lg:text-6xl text-2xl font-black my-8">Shakespeare</h1>
          <div>
            <p className="lg:text-2xl font-bold my-4">{data?.[0].title}</p>
            <p className="font-mono my-8">Line Count: {data?.[0].linecount}</p>
            <p className="lg:w-1/4">{data?.[0].lines}</p>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery<ShakespeareData>(
    "shakespeare",
    getShakespeareData
  );

  return {
    props: {
      dehydrate: dehydrate(queryClient),
    },
  };
}
