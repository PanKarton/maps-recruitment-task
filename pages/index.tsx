import { RoutePlannerDashboard } from '@/Components/Organisms/RoutePlannerDashboard/RoutePlannerDashboard';
import Head from 'next/head';

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
        <RoutePlannerDashboard />
      </main>
    </>
  );
}
