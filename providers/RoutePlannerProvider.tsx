import { createContext, useContext, ReactNode, useState, useCallback } from 'react';
import { useJsApiLoader } from '@react-google-maps/api';
import { getEnvVariable } from '@/helpers/getEnvVariable';
import { SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';

type Props = {
  children: ReactNode;
};

type Context = {
  directionData: google.maps.DirectionsResult | null;
  distance: google.maps.Distance | null;
  duration: google.maps.Duration | null;
  isLoaded: boolean;
  onSubmit: SubmitHandler<FormValues>;
  clearRoute: () => void;
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
  const [directionData, setDirectionData] = useState<google.maps.DirectionsResult | null>(null);
  const [distance, setDistance] = useState<google.maps.Distance | null>(null);
  const [duration, setDuration] = useState<google.maps.Duration | null>(null);
  const router = useRouter();

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: getEnvVariable(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY),
    libraries,
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

        console.log(response);

        setDirectionData(response);
        setDistance(distance);
        setDuration(duration);

        router.push('/route');
      } catch (error) {
        console.log('RoutePlannerProvider onSubmit', { error });
      }
    },
    [router]
  );

  const clearRoute = useCallback(() => {
    setDirectionData(null);
    setDistance(null);
    setDuration(null);
  }, []);

  const context = { directionData, distance, duration, isLoaded, onSubmit, clearRoute };

  return <RoutePlannerContext.Provider value={context}>{children}</RoutePlannerContext.Provider>;
};

export const useRoutePlanner = () => {
  const data = useContext(RoutePlannerContext);

  if (!data) throw Error('useRoutePlanner must be used inside RoutePlannerProvider');

  return data;
};
