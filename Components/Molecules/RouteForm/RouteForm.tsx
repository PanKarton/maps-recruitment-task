import { StyledForm } from './RouteForm.styles';
import { Button } from '@/Components/Atoms/Button/Button';
import { ReverseAdressesButton } from '@/Components/Atoms/ReverseAdressesButton/ReverseAdressesButton';
import { useRouteForm } from './useRouteForm';
import { StyledInput } from '../../Atoms/Input/Input';
import { Autocomplete } from '@react-google-maps/api';
import { useRoutePlanner } from '@/providers/RoutePlannerProvider';

export const RouteForm = () => {
  const { onSubmit, handleSubmit, register, clearErrors, errorMessage, isSubmitting, errors } =
    useRouteForm();

  const { isLoaded } = useRoutePlanner();

  if (!isLoaded) return <p>Loading...</p>;

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
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
        <div className="buttons-wrapper">
          <Button type="submit">{isSubmitting ? 'Loading' : 'Find route'}</Button>
          <ReverseAdressesButton />
        </div>
      </StyledForm>
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
};
