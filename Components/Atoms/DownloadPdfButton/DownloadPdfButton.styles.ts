import styled from 'styled-components';

export const StyledButton = styled.button`
  position: fixed;
  bottom: 0;
  left: 23rem;
  background-color: ${({ theme }) => theme.color.primary};
  padding: 0.75rem 0.75rem;
  text-decoration: none;
  font-weight: 500;
  color: ${({ theme }) => theme.color.contrast};
  border: 1px solid ${({ theme }) => theme.color.contrastBorder};
  font-size: 1.125rem;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.primaryDarker};
  }
`;
