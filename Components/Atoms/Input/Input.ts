import styled from 'styled-components';

export const StyledInput = styled.input`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  border: 1px solid ${({ theme }) => theme.color.contrastBorder};
  border-radius: 0.25rem;
  font-size: 0.875rem;
  padding: 0.75rem 0.75rem;
  font-weight: 500;
`;
