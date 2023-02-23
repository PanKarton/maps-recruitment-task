import { useRoutePlanner } from '@/providers/RoutePlannerProvider';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { ArrowIcon, EdgePoint, StyledListItem } from './RoutesHistoryListItem.styles';

type Props = {
  route: google.maps.DirectionsResult;
};

export const RoutesHistoryListItem = ({ route }: Props) => {
  const { start_address, end_address, distance } = route?.routes[0].legs[0] || {};
  const { handleUpdateCurrentRoute } = useRoutePlanner();

  return (
    <StyledListItem onClick={() => handleUpdateCurrentRoute(route)}>
      <Link href={'/route'}>
        <div className="flex-wrapper">
          <EdgePoint>
            <p>From:</p> <span>{start_address}</span>
          </EdgePoint>

          <ArrowIcon>
            <BsArrowRight />
          </ArrowIcon>

          <EdgePoint>
            <p>To:</p> <span>{end_address}</span>
          </EdgePoint>

          <p className="distance">{distance?.text}</p>
        </div>
      </Link>
    </StyledListItem>
  );
};
