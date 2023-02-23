import { createContext, useCallback, useContext, useState, ReactNode } from 'react';

type Context = {
  routesHistory: google.maps.DirectionsResult[];
  addRouteToHistory: (route: google.maps.DirectionsResult) => void;
};

type Props = {
  children: ReactNode;
};

export const RoutesHistoryContext = createContext<Context | null>(null);

export const RoutesHistoryProvider = ({ children }: Props) => {
  const [routesHistory, setRoutesHistory] = useState<google.maps.DirectionsResult[]>([]);

  const addRouteToHistory = useCallback((route: google.maps.DirectionsResult) => {
    setRoutesHistory(prevState => [route, ...prevState]);
  }, []);

  const context = { routesHistory, addRouteToHistory };

  return <RoutesHistoryContext.Provider value={context}>{children}</RoutesHistoryContext.Provider>;
};

export const useRoutesHistory = () => {
  const data = useContext(RoutesHistoryContext);

  if (!data) throw Error('useRoutePlanner must be used inside RoutePlannerProvider');

  return data;
};
