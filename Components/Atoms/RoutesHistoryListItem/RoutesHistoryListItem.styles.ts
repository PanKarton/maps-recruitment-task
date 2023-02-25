import styled from 'styled-components';

export const StyledListItem = styled.li`
  transition: background-color 0.125s ease-in-out;

  & + li {
    border-top: 1px solid ${({ theme }) => theme.color.contrastBorder};
  }

  .flex-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    @media screen and (min-width: 40.625rem) {
      display: grid;
      grid-template-columns: 1fr 1.5rem 1fr 5rem;
      gap: 2rem;
    }
    .distance {
      text-align: center;
      font-size: 1.125rem;
      font-family: ${({ theme }) => theme.fontFamily.primary};
      color: ${({ theme }) => theme.color.contrast};
      font-weight: 500;
    }
  }
  a {
    text-decoration: none;
    display: block;
    height: 100%;
    padding-block: 2rem;
    padding-inline: 1.5rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.primaryDarker};
  }
`;

export const EdgePoint = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.5rem;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  color: ${({ theme }) => theme.color.contrast};
  font-weight: 500;
  @media screen and (min-width: 56.25rem) {
    font-size: 1.125rem;
  }
  span {
    display: block;
    font-weight: 600;
  }
`;

export const ArrowIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    color: ${({ theme }) => theme.color.contrast};
    font-size: 1.5rem;
    rotate: 90deg;
    @media screen and (min-width: 40.625rem) {
      rotate: 0deg;
    }
  }
`;
