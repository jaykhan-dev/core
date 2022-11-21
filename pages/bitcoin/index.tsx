import Head from "next/head";
import Image from "next/image";
import { dehydrate, QueryClient, useQuery } from "react-query";
import Link from "next/link";

type BitcoinData = {
  0: {
    id: string;
    symbol: string;
    name: string;
    rank: number;
    price_usd: string;
    tsupply: string;
    msupply: string;
    percent_change_24h: string;
  };
};

const getBitcoinData = async () =>
  await (await fetch("https://api.coinlore.net/api/ticker/?id=90")).json();

export default function Bitcoin() {
  const { data, isLoading, isFetching } = useQuery<BitcoinData>(
    "bitcoin",
    getBitcoinData
  );
  console.log(data);

  if (isLoading) return <div>Loading...</div>;

  if (!data) return <div>Error!</div>;

  return (
    <>
      <Head>
        <title>Bitcoin Data</title>
      </Head>
      <div className="flex justify-center h-screen text-white">
        <div className="lg:w-2/3 grid place-items-center">
          <div>
            <h1 className="text-center">Bitcoin</h1>
            <p className="lg:text-6xl font-black text-gray-600">
              {data?.[0].price_usd}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery<BitcoinData>("bitcoin", getBitcoinData);

  return {
    props: {
      dehydrateState: dehydrate(queryClient),
    },
  };
}
