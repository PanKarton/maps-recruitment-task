import Head from 'next/head';
import { RouteForm } from '@/Components/Molecules/RouteForm/RouteForm';


export default function Home() {
  return (
    <>
      <Head>
        <title>Route planner</title>
        <meta name="description" content="Find route between points and calculate price" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <RouteForm />
      </main>
    </>
  );
}
