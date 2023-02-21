import Head from 'next/head';
import { Inter } from '@next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function RouteDetails() {
  return (
    <>
      <Head>
        <title>Route planner</title>
        <meta name="description" content="Find " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>route details</p>
        <Link href="/"></Link>
      </main>
    </>
  );
}
