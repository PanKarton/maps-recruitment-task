import styled from 'styled-components';

type Props = {
  message: string;
};

export const StyledWrapper = styled.div`
  position: absolute;
  right: 0%;
  top: 1rem;
  translate: 120% 0;
  width: 20rem;
  padding-block: 1rem;
  padding-inline: 1rem;
  background-color: ${({ theme }) => theme.color.errorLighter};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 0.25rem;
  &.visible {
    animation: slide-in-out 6s linear;
  }

  p {
    color: ${({ theme }) => theme.color.primary};
    font-family: ${({ theme }) => theme.fontFamily.primary};

    &.heading {
      font-size: 1.5rem;
      font-weight: 600;
      border-bottom: 1px solid white;
      padding-bottom: 0.5rem;
      margin-bottom: 1rem;
    }

    &.message {
      font-size: 1rem;
      letter-spacing: 1px;
      line-height: 1.5rem;
    }
  }

  @keyframes slide-in-out {
    0% {
      translate: 120% 0;
    }
    10% {
      translate: 0% 0;
    }
    90% {
      translate: 0% 0;
    }
    100% {
      translate: 120% 0;
    }
  }
`;

export const ErrorMessage = ({ message }: Props) => {
  return (
    <StyledWrapper className={message !== '' ? 'visible' : ''}>
      <p className="heading">Oh snap!</p>
      <p className="message"> {message}</p>
    </StyledWrapper>
  );
};
