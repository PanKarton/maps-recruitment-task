import styled from 'styled-components';

export const StyledForm = styled.form`
  position: relative;
  .inputs-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    @media screen and (min-width: 40.625rem) {
      flex-direction: row;
    }
    .swap-btn {
      rotate: 90deg;
      height: 2.875rem;
      width: 2.875rem;
    }
  }
  .submit-btn {
    position: absolute;
    right: 0.5rem;
    translate: 100% 0;
    @media screen and (min-width: 25rem) {
      right: 0rem;
    }
    @media screen and (min-width: 40.625rem) {
      right: -0.75rem;
    }
  }
`;
