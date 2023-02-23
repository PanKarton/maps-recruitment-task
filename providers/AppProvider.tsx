import { theme } from '@/assets/styles/theme';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { RoutePlannerProvider } from './RoutePlannerProvider';
import { RoutesHistoryProvider } from './RoutesHistoryProvider';

type Props = {
  children: ReactNode;
};

export const AppProvider = ({ children }: Props) => {
  return (
    <RoutesHistoryProvider>
      <RoutePlannerProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </RoutePlannerProvider>
    </RoutesHistoryProvider>
  );
};
