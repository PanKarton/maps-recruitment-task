import { useRoutePlanner } from '@/providers/RoutePlannerProvider';
import Head from 'next/head';
import Link from 'next/link';

export default function RouteDetails() {
  const data = useRoutePlanner();

  console.log('route', data);

  return (
    <>
      <Head>
        <title>Your route</title>
        <meta name="description" content="Check out your route" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Link href="/">Back to main page</Link>
        <h1>Route details</h1>
      </main>
    </>
  );
}
