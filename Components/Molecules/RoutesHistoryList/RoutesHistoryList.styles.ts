import styled from 'styled-components';

export const StyledList = styled.ul`
  list-style-type: none;
`;

export const EmptyListMessage = styled.div`
  height: 100%;
  display: grid;
  place-items: center;

  p {
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-size: 1.5rem;
    font-weight: 500;
  }
`;
