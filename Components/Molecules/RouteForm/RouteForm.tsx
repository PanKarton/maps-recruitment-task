import { StyledForm, StyledSubmit } from './RouteForm.styles';
import { ReverseAdressesButton } from '@/Components/Atoms/ReverseAdressesButton/ReverseAdressesButton';
import { StyledInput } from '../../Atoms/Input/Input';
import { Autocomplete } from '@react-google-maps/api';
import { useRoutePlanner } from '@/providers/RoutePlannerProvider';
import { useForm } from 'react-hook-form';
import { TbArrowBigRightLines } from 'react-icons/tb';

type FormValues = {
  origin_adress: string;
  destination_adress: string;
};

export const RouteForm = () => {
  const {
    handleSubmit,
    register,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const { isLoaded, onSubmit } = useRoutePlanner();

  if (!isLoaded) return <p>Loading...</p>;

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
              className={errors.origin_adress ? 'invalid' : ''}
              onChange={() => clearErrors(['origin_adress'])}
            />
          </Autocomplete>
          <ReverseAdressesButton />
          <Autocomplete>
            <StyledInput
              {...register('destination_adress', {
                required: 'Field is required.',
              })}
              placeholder="Destination"
              className={errors.destination_adress ? 'invalid' : ''}
              onChange={() => clearErrors(['destination_adress'])}
            />
          </Autocomplete>
        </div>
        <div className="buttons-wrapper">
          <StyledSubmit type="submit">
            {isSubmitting ? 'Loading' : <TbArrowBigRightLines />}
          </StyledSubmit>
        </div>
      </StyledForm>
      {/* {errorMessage && <p>{errorMessage}</p>} */}
    </>
  );
};
