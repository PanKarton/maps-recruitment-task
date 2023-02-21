import { getEnvVariable } from '@/helpers/getEnvVariable';
import { replaceWhitespace } from '@/helpers/replaceWhitespace';
import { Item } from '@/types/geocodingResponse';
import axios, { AxiosError } from 'axios';
import { useCallback, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

type FormValues = {
  origin_adress: string;
  destination_adress: string;
};

type Coordinates = {
  latitude: number | null;
  longitude: number | null;
};

const emptyCoordinates = {
  latitude: null,
  longitude: null,
};

export const useRouteForm = () => {
  // Use hook form
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { isSubmitting, errors },
  } = useForm<FormValues>({
    reValidateMode: 'onSubmit',
  });

  // States
  const [originCoordinates, setOriginCoordinates] = useState<Coordinates>(emptyCoordinates);
  const [destinationCoordinates, setDestinationCoordinates] =
    useState<Coordinates>(emptyCoordinates);
  const [errorMessage, setErrorMessage] = useState('');

  // Functions
  const getCoordinates = useCallback(async (adress: string) => {
    try {
      const apiKey = getEnvVariable(process.env.NEXT_PUBLIC_HERE_API_KEY);

      const response = await axios(
        `https://geocode.search.hereapi.com/v1/geocode?q=${adress}&apiKey=${apiKey}`
      );

      if (response.data.items.length === 0) throw Error;

      const { position } = response.data.items[0] as Item;

      return position;
    } catch (error) {
      if (error instanceof AxiosError && error.code === 'ERR_NETWORK') {
        setErrorMessage(`No internet. Please check your connection.`);
      } else {
        setErrorMessage(
          `The specified address "${adress}" could not be found. Check that there are no typos in the query.`
        );
        setTimeout(() => {
          setErrorMessage('');
        }, 4000);
      }
    }
  }, []);

  const onSubmit: SubmitHandler<FormValues> = useCallback(
    async data => {
      try {
        setErrorMessage('');

        const originCoordinatesResponse = await getCoordinates(
          replaceWhitespace(data.origin_adress)
        );

        if (!originCoordinatesResponse) return;

        const destinationCoordinatesResponse = await getCoordinates(
          replaceWhitespace(data.destination_adress)
        );

        if (!destinationCoordinatesResponse) return;

        setOriginCoordinates(() => ({
          latitude: originCoordinatesResponse.lat,
          longitude: originCoordinatesResponse.lng,
        }));

        setDestinationCoordinates(() => ({
          latitude: destinationCoordinatesResponse.lat,
          longitude: destinationCoordinatesResponse.lng,
        }));
      } catch (err) {
        setErrorMessage(`Something went wrong with planning your route. Please try again! :)`);

        setTimeout(() => {
          setErrorMessage('');
        }, 4000);
      }
    },
    [getCoordinates]
  );

  return {
    isSubmitting,
    errorMessage,
    errors,
    onSubmit,
    register,
    handleSubmit,
    clearErrors,
  };
};
