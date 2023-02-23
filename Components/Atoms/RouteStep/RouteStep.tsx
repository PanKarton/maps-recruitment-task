import parse from 'html-react-parser';
import { Distance, Instructions, StyledListItem } from './RouteStep.styles';

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
