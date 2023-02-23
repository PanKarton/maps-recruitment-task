import { StyledErrorWrapper, StyledWrapper } from './ErrorMessages.styles';

type Props = {
  errors: string[];
};

export const ErrorMessages = ({ errors = [] }: Props) => {
  return (
    <StyledWrapper>
      {errors.map((error, index) => (
        <StyledErrorWrapper key={index}>
          <p className="heading">Oh snap!</p>
          <p className="message"> {error}</p>
        </StyledErrorWrapper>
      ))}
    </StyledWrapper>
  );
};
