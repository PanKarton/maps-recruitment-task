import { AppProvider } from '@/providers/AppProvider';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { PageLoader } from './../Components/Atoms/PageLoader/PageLoader';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <PageLoader />
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
}
