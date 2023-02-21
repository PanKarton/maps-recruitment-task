import Head from 'next/head';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import { Input } from '@/Components/Atoms/Input/Input';
import { RouteForm } from '@/Components/Molecules/RouteForm/RouteForm';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Route planner</title>
        <meta name="description" content="Find " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <RouteForm>
          <Input placeholderText="Choose a starting point" name="fromAdress" />
          <Input placeholderText="Choose a destination point" name="toAdress" />
          <button type="submit">Find route</button>
        </RouteForm>
      </main>
    </>
  );
}
