import { useRoutePlanner } from '@/providers/RoutePlannerProvider';
import { RouteStep } from '@/Components/Atoms/RouteStep/RouteStep';
import { HiOutlineLocationMarker, HiLocationMarker } from 'react-icons/hi';
import { EdgePoint, StyledList } from './RouteStepsList.styles';
import { LoadingSpinner } from '@/Components/Atoms/LoadingSpinner/LoadingSpinner';

export const RouteStepsList = () => {
  const { routeData } = useRoutePlanner();

  const steps = routeData?.routes[0].legs[0].steps;
  const { start_address, end_address } = routeData?.routes[0].legs[0] || {};

  if (!steps) return <LoadingSpinner />;

  return (
    <StyledList>
      <EdgePoint className="origin">
        <HiOutlineLocationMarker />
        {start_address}
      </EdgePoint>
      {steps.map(({ distance, instructions }, index) => (
        <RouteStep key={index} distance={distance?.text} instructions={instructions} />
      ))}
      <EdgePoint>
        <HiLocationMarker />
        {end_address}
      </EdgePoint>
    </StyledList>
  );
};
