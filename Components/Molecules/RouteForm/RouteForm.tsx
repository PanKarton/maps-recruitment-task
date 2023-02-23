import { StyledForm } from './RouteForm.styles';
import { RoundButton } from '@/Components/Atoms/RoundButton/RoundButton.styles';
import { StyledInput } from '../../Atoms/Input/Input';
import { Autocomplete } from '@react-google-maps/api';
import { useRoutePlanner } from '@/providers/RoutePlannerProvider';
import { useForm } from 'react-hook-form';
import { TbArrowBigRightLines, TbArrowsRightLeft } from 'react-icons/tb';
import { LoadingSpinner } from '@/Components/Atoms/LoadingSpinner/LoadingSpinner';

type FormValues = {
  origin_adress: string;
  destination_adress: string;
};

export const RouteForm = () => {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm<FormValues>();

  const { isLoaded, onSubmit } = useRoutePlanner();

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
          <RoundButton>
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
            {isSubmitting ? 'Loading' : <TbArrowBigRightLines />}
          </RoundButton>
        </div>
      </StyledForm>
    </>
  );
};
