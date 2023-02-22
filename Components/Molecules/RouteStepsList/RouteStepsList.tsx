import { useRoutePlanner } from '@/providers/RoutePlannerProvider';
import { RouteStep } from '@/Components/Atoms/RouteStep/RouteStep';
import styled from 'styled-components';
import { HiOutlineLocationMarker, HiLocationMarker } from 'react-icons/hi';

export const StyledList = styled.ul`
  flex: 1 1 auto;
  overflow-y: auto;
  height: 0px;
`;
export const EdgePoint = styled.li`
  position: relative;
  font-size: 1.125rem;
  line-height: 1.25rem;
  font-weight: 500;
  padding: 2rem 1rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  &.origin::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    left: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.color.contrastBorder};
  }

  svg {
    font-size: 1.75rem;
  }
`;

export const RouteStepsList = () => {
  const { directionData } = useRoutePlanner();

  const steps = directionData?.routes[0].legs[0].steps;
  const { start_address, end_address } = directionData?.routes[0].legs[0] || {};

  return (
    <StyledList>
      <EdgePoint className="origin">
        <HiOutlineLocationMarker />
        {start_address}
      </EdgePoint>
      {steps ? (
        steps.map(({ distance, instructions }, index) => (
          <RouteStep key={index} distance={distance?.text} instructions={instructions} />
        ))
      ) : (
        <p>Loading...</p>
      )}
      <EdgePoint>
        <HiLocationMarker />
        {end_address}
      </EdgePoint>
    </StyledList>
  );
};
