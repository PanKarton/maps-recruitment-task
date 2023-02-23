import styled from 'styled-components';

export const StyledForm = styled.form`
  position: relative;
  .inputs-wrapper {
    display: flex;
    justify-content: center;
    gap: 0.75rem;
  }

  .buttons-wrapper {
    position: absolute;
    right: -1rem;
    top: 50%;
    translate: 100% -50%;
    display: flex;
    justify-content: center;
  }
`;
