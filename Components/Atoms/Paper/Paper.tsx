import styled from 'styled-components';

export const Paper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: min(90%, 50rem);
  height: 40rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.color.primary};
`;
