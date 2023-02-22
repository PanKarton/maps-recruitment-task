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
    <RoutePlannerProvider>
      <RoutesHistoryProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </RoutesHistoryProvider>
    </RoutePlannerProvider>
  );
};
