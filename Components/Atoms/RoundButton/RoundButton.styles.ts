import styled from 'styled-components';

export const RoundButton = styled.button`
  background-color: ${({ theme }) => theme.color.primary};
  border: none;
  height: 2.8125rem;
  aspect-ratio: 1;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.125s ease-in-out;
  svg {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.color.contrastLighter};
  }

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.primaryDarker};
    svg {
      color: ${({ theme }) => theme.color.contrast};
    }
  }
`;
