import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const usePageLoader = () => {
  const router = useRouter();

  // const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // App loading
  useEffect(() => {
    const onPageLoad = () => {
      setIsLoading(false);
    };
    // Check if the page has already loaded
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);

  // Page to page loading
  useEffect(() => {
    const handleStart = (url: string) => url !== router.asPath && setIsLoading(true);
    const handleComplete = (url: string) =>
      url === router.asPath &&
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router.asPath, router.events]);

  return { isLoading };
};
