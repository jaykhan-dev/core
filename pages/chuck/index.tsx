import Head from "next/head";
import Image from "next/image";

import { dehydrate, QueryClient, useQuery } from "react-query";

type ChuckFacts = {
  id: string;
  value: string;
  created_at: string;
};

const getChuckFacts = async () =>
  await (await fetch("https://api.chucknorris.io/jokes/random")).json();

export default function Chuck() {
  const { data, isLoading, isFetching } = useQuery<ChuckFacts>(
    "chuck",
    getChuckFacts
  );
  console.log(data);
  return (
    <>
      <Head>
        <title>Chuck Norris Facts</title>
        <meta name="Chuck Norris Facts" content="Using the Free API" />
      </Head>
      <div className="grid place-items-center mt-10 p-4">
        <h1 className="lg:text-4xl font-bold border-b border-white/10 py-8 w-full text-center">
          Chuck Norris Facts
        </h1>
        <div className="my-8 lg:w-1/2 text-center">
          <p className="lg:text-6xl text-2xl my-8 font-bold">{data?.value}</p>
          <p className="text-sm font-mono text-green-500">{data?.created_at}</p>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery<ChuckFacts>("chuck", getChuckFacts);

  return {
    props: {
      dehydrate: dehydrate(queryClient),
    },
  };
}
