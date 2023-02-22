import styled from 'styled-components';

export const StyledForm = styled.form`
  position: relative;
  .inputs-wrapper {
    display: flex;
    justify-content: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
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

export const StyledSubmit = styled.button`
  background-color: ${({ theme }) => theme.color.primary};
  border: none;
  height: 3rem;
  aspect-ratio: 1;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.125s ease-in-out;
  svg {
    font-size: 1.5rem;
  }

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.primaryDarkHover};
  }
`;
