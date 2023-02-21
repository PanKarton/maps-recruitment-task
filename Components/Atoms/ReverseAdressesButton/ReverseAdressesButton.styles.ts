import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  padding: 0.5rem;
  color: ${({ theme }) => theme.color.contrast};
  transition: background-color 0.125s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: #dedede;
  }
`;
