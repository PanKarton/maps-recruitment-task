import styled from 'styled-components';

export const StyledList = styled.ul`
  height: 100%;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  max-width: 23rem;
  list-style-type: none;
`;
export const EdgePoint = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 2rem 1rem;
  font-size: 1.125rem;
  line-height: 1.25rem;
  font-weight: 500;

  &.origin::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    left: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.color.contrastBorder};
  }

  svg {
    font-size: 1.75rem;
  }
`;
