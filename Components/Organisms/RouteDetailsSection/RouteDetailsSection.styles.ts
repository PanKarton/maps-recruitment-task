import styled from 'styled-components';

export const StyledSection = styled.section`
  display: flex;
  justify-content: flex-end;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  .route-wrapper {
    position: relative;
    flex-basis: 23rem;
    display: flex;
    flex-direction: column;
    border-right: 1px solid ${({ theme }) => theme.color.contrastBorder};
    background-color: ${({ theme }) => theme.color.primary};

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem 0.5rem;
      text-decoration: none;
      font-weight: 500;
      color: ${({ theme }) => theme.color.contrast};
      border-bottom: 1px solid ${({ theme }) => theme.color.contrastBorder};
      font-size: 1.25rem;
      svg {
        font-size: 1.5rem;
      }
      &:hover {
        background-color: ${({ theme }) => theme.color.primaryDarkHover};
      }
    }

    .route-details-wrapper {
      padding-block: 1rem 2rem;
      padding-inline: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      border-bottom: 1px solid ${({ theme }) => theme.color.contrastBorder};
      h1 {
        font-weight: 600;
        color: ${({ theme }) => theme.color.contrast};
        font-size: 1.5rem;
        line-height: 1.5rem;
      }
      p {
        font-weight: 500;
        font-size: 1.125rem;
      }
      input {
        margin-top: 0.5rem;
      }
    }
  }

  .map-wrapper {
    min-height: 100vh;
    flex-grow: 1;
  }
`;
