import { ReactNode } from 'react';
import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: transparent;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  border: 1px solid ${({ theme }) => theme.color.contrastBorder};
  border-radius: 0.25rem;
  font-size: 1rem;
  padding: 0.5rem 0.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color.contrast};

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.contrastLightHover};
  }
`;

type Props = {
  children: string | ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
};

export const Button = ({ children, type, onClick }: Props) => {
  return (
    <StyledButton onClick={onClick} type={type}>
      {children}
    </StyledButton>
  );
};
