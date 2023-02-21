import { StyledForm } from './RouteForm.styles';
import { Button } from '@/Components/Atoms/Button/Button';
import { ReverseAdressesButton } from '@/Components/Atoms/ReverseAdressesButton/ReverseAdressesButton';
import { useRouteForm } from './useRouteForm';
import { StyledInput } from '../../Atoms/Input/Input';

export const RouteForm = () => {
  const { onSubmit, handleSubmit, register, clearErrors, errorMessage, isSubmitting, errors } =
    useRouteForm();

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledInput
          {...register('origin_adress', {
            required: 'Field is required.',
          })}
          placeholder="Choose origin point"
          className={errors.origin_adress ? 'invalid' : ''}
          onChange={() => clearErrors(['origin_adress'])}
        />
        <StyledInput
          {...register('destination_adress', {
            required: 'Field is required.',
          })}
          placeholder="Choose destination point"
          className={errors.destination_adress ? 'invalid' : ''}
          onChange={() => clearErrors(['destination_adress'])}
        />
        <div className="buttons-wrapper">
          <Button type="submit">{isSubmitting ? 'Loading' : 'Find route'}</Button>
          <ReverseAdressesButton />
        </div>
      </StyledForm>
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
};
