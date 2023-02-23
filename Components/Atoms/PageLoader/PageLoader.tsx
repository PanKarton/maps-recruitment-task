import { usePageLoader } from './usePageLoader';
import { MagnifyingGlass } from 'react-loader-spinner';
import styles from './PageLoader.module.css';

export const PageLoader = () => {
  const { isLoading } = usePageLoader();

  return (
    <>
      {isLoading && (
        <div className={styles.loaderWrapper}>
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
          />
        </div>
      )}
    </>
  );
};
