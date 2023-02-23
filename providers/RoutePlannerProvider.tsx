import { createContext, useContext, ReactNode, useState, useCallback, RefObject } from 'react';
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
  totalPrice: number;
  origin: string | undefined;
  destination: string | undefined;
  isLoaded: boolean;
  errors: string[];
  onSubmit: SubmitHandler<FormValues>;
  handleUpdateCurrentRoute: (route: google.maps.DirectionsResult) => void;
  calculateTotalPrice: (
    kilometerCost: RefObject<HTMLInputElement>,
    accomodationCos: RefObject<HTMLInputElement>
  ) => void;
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
  const [totalPrice, setTotalPrice] = useState(0);

  const [errors, setErrors] = useState<string[]>([]);
  const router = useRouter();
  const { addRouteToHistory } = useRoutesHistory();

  const distance = routeData?.routes[0].legs[0].distance?.text;
  const origin = routeData?.routes[0].legs[0].start_address;
  const destination = routeData?.routes[0].legs[0].end_address;

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
        setTotalPrice(0);
      } catch (err) {
        if (err instanceof Error) {
          // Extract readable message from string
          const prunedError = err.message.split(': ')[2];
          setErrors(prevState => [prunedError, ...prevState]);
          setTimeout(() => {
            // Remove first element after 6s
            setErrors(prevState => {
              const [_, ...array] = prevState;
              return array;
            });
          }, 6001);
        }
      }
    },
    [router, addRouteToHistory]
  );

  const handleUpdateCurrentRoute = useCallback((route: google.maps.DirectionsResult) => {
    setRouteData(route);
  }, []);

  const calculateTotalPrice = useCallback(
    (
      kilometerCostRef: RefObject<HTMLInputElement>,
      accomodationCostRef: RefObject<HTMLInputElement>
    ) => {
      const distance = routeData?.routes[0].legs[0].distance?.value;

      if (
        !distance ||
        !routeData ||
        kilometerCostRef.current === null ||
        accomodationCostRef.current === null
      )
        return;

      // Empty input's value is empty string, so treat as 0
      const kilometerCost =
        kilometerCostRef.current.value === '' ? 0 : parseInt(kilometerCostRef.current.value);

      const accomodationCost =
        accomodationCostRef.current.value === '' ? 0 : parseInt(accomodationCostRef.current.value);

      const distanceKm = distance / 1000;

      const fullDays = Math.floor(distanceKm / 800);

      let newPrice = 1.1 * kilometerCost * distanceKm + fullDays * accomodationCost;

      // Cut to two decilam places
      newPrice = parseInt(newPrice.toFixed(2));

      setTotalPrice(newPrice);
    },
    [routeData]
  );

  const context = {
    routeData,
    distance,
    origin,
    destination,
    isLoaded,
    totalPrice,
    errors,
    calculateTotalPrice,
    onSubmit,
    handleUpdateCurrentRoute,
  };

  return <RoutePlannerContext.Provider value={context}>{children}</RoutePlannerContext.Provider>;
};

export const useRoutePlanner = () => {
  const data = useContext(RoutePlannerContext);

  if (!data) throw Error('useRoutePlanner must be used inside RoutePlannerProvider');

  return data;
};
