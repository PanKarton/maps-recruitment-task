import { StyledForm } from './RouteForm.styles';
import { RoundButton } from '@/Components/Atoms/RoundButton/RoundButton.styles';
import { StyledInput } from '../../Atoms/Input/Input';
import { Autocomplete } from '@react-google-maps/api';
import { useRoutePlanner } from '@/providers/RoutePlannerProvider';
import { useForm } from 'react-hook-form';
import { TbArrowBigRightLines, TbArrowsRightLeft } from 'react-icons/tb';
import { LoadingSpinner } from '@/Components/Atoms/LoadingSpinner/LoadingSpinner';
import { RotatingLines } from 'react-loader-spinner';
import { useCallback } from 'react';

type FormValues = {
  origin_adress: string;
  destination_adress: string;
};

export const RouteForm = () => {
  const {
    handleSubmit,
    register,
    getValues,
    setValue,
    formState: { isSubmitting },
  } = useForm<FormValues>();

  const { isLoaded, onSubmit } = useRoutePlanner();

  const swapInputValues = useCallback(() => {
    const { destination_adress, origin_adress } = getValues();
    setValue('origin_adress', destination_adress);
    setValue('destination_adress', origin_adress);
  }, [getValues, setValue]);

  if (!isLoaded) return <LoadingSpinner />;

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <div className="inputs-wrapper">
          <Autocomplete>
            <StyledInput
              {...register('origin_adress', {
                required: 'Field is required.',
              })}
              placeholder="Origin"
            />
          </Autocomplete>
          <RoundButton onClick={swapInputValues} type="button">
            <TbArrowsRightLeft />
          </RoundButton>
          <Autocomplete>
            <StyledInput
              {...register('destination_adress', {
                required: 'Field is required.',
              })}
              placeholder="Destination"
            />
          </Autocomplete>
        </div>
        <div className="buttons-wrapper">
          <RoundButton type="submit">
            {isSubmitting ? (
              <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="1"
                width="24"
                visible={true}
              />
            ) : (
              <TbArrowBigRightLines />
            )}
          </RoundButton>
        </div>
      </StyledForm>
    </>
  );
};
