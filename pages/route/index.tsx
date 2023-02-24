import { RouteDetailsSection } from '@/Components/Organisms/RouteDetailsSection/RouteDetailsSection';
import Head from 'next/head';

export default function RouteDetails() {
  return (
    <>
      <Head>
        <title>Your route</title>
        <meta name="description" content="Check out your route" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src="https://cdn.jsdelivr.net/npm/pdfmake@latest/build/pdfmake.min.js"
        ></script>
        <script
          async
          src="https://cdn.jsdelivr.net/npm/pdfmake@latest/build/vfs_fonts.min.js"
        ></script>
      </Head>
      <main>
        <RouteDetailsSection />
      </main>
    </>
  );
}
