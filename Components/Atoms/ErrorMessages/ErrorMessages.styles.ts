import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 1rem;
  height: calc(100vh - 1rem);
`;

export const StyledErrorWrapper = styled.div`
  width: 20rem;
  padding-block: 1rem;
  padding-inline: 1rem;
  background-color: ${({ theme }) => theme.color.errorLighter};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 0.25rem;
  margin-top: 1rem;

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
      font-weight: 500;
    }
  }
`;
