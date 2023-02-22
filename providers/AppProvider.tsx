import { theme } from '@/assets/styles/theme';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { RoutePlannerProvider } from './RoutePlannerProvider';

type Props = {
  children: ReactNode;
};

export const AppProvider = ({ children }: Props) => {
  return (
    <RoutePlannerProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>;
    </RoutePlannerProvider>
  );
};
