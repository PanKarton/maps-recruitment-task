import { StyledForm } from './RouteForm.styles';
import { Input } from '@/Components/Atoms/Input/Input';
import { Button } from '@/Components/Atoms/Button/Button';
import { ReverseAdressesButton } from '@/Components/Atoms/ReverseAdressesButton/ReverseAdressesButton';

export const RouteForm = () => {
  return (
    <StyledForm>
      <Input placeholderText="Choose a starting point" name="fromAdress" />
      <Input placeholderText="Choose a destination point" name="toAdress" />
      <div className="buttons-wrapper">
        <Button type="submit">Find route</Button>
        <ReverseAdressesButton />
      </div>
    </StyledForm>
  );
};
