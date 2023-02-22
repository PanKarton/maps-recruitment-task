import { createContext, useContext, ReactNode, useState, useCallback } from 'react';
import { useJsApiLoader } from '@react-google-maps/api';
import { getEnvVariable } from '@/helpers/getEnvVariable';
import { SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useRoutesHistory } from './RoutesHistoryProvider';

type Props = {
  children: ReactNode;
};

type Context = {
  routeData: google.maps.DirectionsResult | null;
  distance: string | undefined;
  duration: string | undefined;
  isLoaded: boolean;
  onSubmit: SubmitHandler<FormValues>;
  clearRoute: () => void;
  handleUpdateCurrentRoute: (route: google.maps.DirectionsResult) => void;
};

type FormValues = {
  origin_adress: string;
  destination_adress: string;
};

const RoutePlannerContext = createContext<Context | null>(null);

const libraries: ('drawing' | 'geometry' | 'localContext' | 'places' | 'visualization')[] = [
  'places',
];

export const RoutePlannerProvider = ({ children }: Props) => {
  const [routeData, setRouteData] = useState<google.maps.DirectionsResult | null>(null);
  const [price, setPrice] = useState(0);
  const router = useRouter();

  const { addRouteToHistory } = useRoutesHistory();

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: getEnvVariable(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY),
    libraries,
    language: 'en',
  });

  const onSubmit: SubmitHandler<FormValues> = useCallback(
    async data => {
      try {
        const directionsService = new google.maps.DirectionsService();
        const response = await directionsService.route({
          origin: data.origin_adress,
          destination: data.destination_adress,
          travelMode: google.maps.TravelMode.DRIVING,
        });

        const { distance, duration } = response.routes[0].legs[0];

        if (!distance || !duration) throw Error();

        setRouteData(response);

        router.push('/route');

        addRouteToHistory(response);
      } catch (error) {
        console.log('RoutePlannerProvider onSubmit', { error });
      }
    },
    [router, addRouteToHistory]
  );

  const clearRoute = useCallback(() => {
    setRouteData(null);
  }, []);

  const handleUpdateCurrentRoute = useCallback((route: google.maps.DirectionsResult) => {
    setRouteData(route);
  }, []);

  const context = {
    routeData,
    distance: routeData?.routes[0].legs[0].distance?.text,
    duration: routeData?.routes[0].legs[0].duration?.text,
    isLoaded,
    price,
    onSubmit,
    clearRoute,
    setPrice,
    handleUpdateCurrentRoute,
  };

  return <RoutePlannerContext.Provider value={context}>{children}</RoutePlannerContext.Provider>;
};

export const useRoutePlanner = () => {
  const data = useContext(RoutePlannerContext);

  if (!data) throw Error('useRoutePlanner must be used inside RoutePlannerProvider');

  return data;
};
