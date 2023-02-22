import { createContext, useContext, ReactNode } from 'react';

import { useJsApiLoader } from '@react-google-maps/api';
import { getEnvVariable } from '@/helpers/getEnvVariable';

type Props = {
  children: ReactNode;
};

type Context = {
  isLoaded: boolean;
};

const RoutePlannerContext = createContext<Context | null>(null);

const libraries: ('drawing' | 'geometry' | 'localContext' | 'places' | 'visualization')[] = [
  'places',
];

export const RoutePlannerProvider = ({ children }: Props) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: getEnvVariable(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY),
    libraries,
  });

  const context = { isLoaded };

  return <RoutePlannerContext.Provider value={context}>{children}</RoutePlannerContext.Provider>;
};

export const useRoutePlanner = () => {
  const data = useContext(RoutePlannerContext);

  if (!data) throw Error('useRoutePlanner must be used inside RoutePlannerProvider');

  return data;
};
