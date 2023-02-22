import styled from 'styled-components';
import parse from 'html-react-parser';

export const StyledListItem = styled.li`
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.color.contrastBorder};
  padding: 2rem 1rem;
`;

export const Instructions = styled.div`
  font-size: 1rem;
  line-height: 1.25rem;
  font-weight: 500;
`;
export const Distance = styled.p`
  position: absolute;
  left: 0rem;
  bottom: -0.5rem;
  height: 1rem;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1rem;
  background-color: white;
  color: ${({ theme }) => theme.color.contrastBorder};
  padding-inline: 1rem 0.57rem;
`;

type Props = {
  instructions: string | undefined;
  distance: string | undefined;
};

export const RouteStep = ({ instructions, distance }: Props) => {
  return (
    <StyledListItem>
      <Instructions>{[parse(instructions || 'sd')]}</Instructions>
      <Distance>{distance}</Distance>
    </StyledListItem>
  );
};