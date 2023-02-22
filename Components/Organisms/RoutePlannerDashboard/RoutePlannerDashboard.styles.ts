import styled from 'styled-components';

export const StyledSection = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.primary};

  div > .flex-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }
  .form-wrapper {
    padding: 1.5rem;
  }
  .history-wrapper {
    width: 100%;
    flex-grow: 1;
    position: relative;
    border-top: 1px solid ${({ theme }) => theme.color.contrastBorder};
  }
`;
