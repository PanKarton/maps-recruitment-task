import { StyledInput } from './Input.styles';

type Props = {
  placeholderText: string;
  name: string;
};

export const Input = ({ name, placeholderText }: Props) => {
  return <StyledInput name={name} placeholder={placeholderText} />;
};
