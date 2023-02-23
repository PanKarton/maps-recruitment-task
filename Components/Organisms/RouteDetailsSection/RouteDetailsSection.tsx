import { Map } from '@/Components/Atoms/Map/Map';
import Link from 'next/link';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useRoutePlanner } from '@/providers/RoutePlannerProvider';
import { StyledSection } from './RouteDetailsSection.styles';
import { StyledInput } from '@/Components/Atoms/Input/Input';
import { RouteStepsList } from '@/Components/Molecules/RouteStepsList/RouteStepsList';

export const RouteDetailsSection = () => {
  const { clearRoute, distance, duration } = useRoutePlanner();

  return (
    <StyledSection>
      <div className="route-wrapper">
        <Link href="/" onClick={clearRoute}>
          <AiOutlineArrowLeft />
          Plan another route
        </Link>
        <div className="route-details-wrapper">
          <h1>Route details:</h1>
          <p>
            Distance: <strong>{distance}</strong>
          </p>
          <p>
            Duration: <strong>{duration}</strong>
          </p>
          <div>
            Summary price: $
            {false ? (
              '12'
            ) : (
              <p> Enter a cost per kilometer to approximate the total cost of your trip</p>
            )}
          </div>
          <StyledInput
            type="number"
            placeholder="Price in EUR per 1km"
            onKeyDown={e => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault()}
          />
        </div>
        <RouteStepsList />
      </div>
      <div className="map-wrapper">
        <Map />
      </div>
    </StyledSection>
  );
};
