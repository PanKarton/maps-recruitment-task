import { useRef } from 'react';
import { Map } from '@/Components/Atoms/Map/Map';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useRoutePlanner } from '@/providers/RoutePlannerProvider';
import {
  DownloadPfdButton,
  ReturnButton,
  RouteDetail,
  RouteEdgePoint,
  StyledDivider,
  StyledSection,
} from './RouteDetailsSection.styles';
import { StyledInput } from '@/Components/Atoms/Input/Input';
import { RouteStepsList } from '@/Components/Molecules/RouteStepsList/RouteStepsList';
import { GiPathDistance } from 'react-icons/gi';
import { BiDollar } from 'react-icons/bi';
import { useReactToPrint } from 'react-to-print';

export const RouteDetailsSection = () => {
  const { distance, totalPrice, origin, destination, calculateTotalPrice } = useRoutePlanner();
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });
  const printRef = useRef<HTMLElement | null>(null);

  const kilometerCostRef = useRef<HTMLInputElement>(null);
  const accomodationCostRef = useRef<HTMLInputElement>(null);

  return (
    <StyledSection ref={printRef}>
      <div className="route-wrapper">
        <RouteStepsList />
        <ReturnButton href="/">
          <AiOutlineArrowLeft />
          Plan another route
        </ReturnButton>

        <div className="route-details-wrapper">
          <div className="route-edge-points">
            <RouteEdgePoint>
              <span>{origin}</span>
            </RouteEdgePoint>
            <StyledDivider />
            <RouteEdgePoint>
              <span>{destination}</span>
            </RouteEdgePoint>
          </div>
          <div className="price-and-distance">
            <RouteDetail className="distance">
              <GiPathDistance />
              <span>{distance}</span>
            </RouteDetail>
            <RouteDetail>
              <BiDollar />
              <span>{totalPrice}</span>
            </RouteDetail>
          </div>

          <div className="inputs">
            <StyledInput
              type="number"
              placeholder="Price in EUR per 1km"
              onKeyDown={e => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault()}
              onChange={() => calculateTotalPrice(kilometerCostRef, accomodationCostRef)}
              ref={kilometerCostRef}
            />
            <StyledInput
              type="number"
              placeholder="Average accomodation price per night"
              onKeyDown={e => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault()}
              onChange={() => calculateTotalPrice(kilometerCostRef, accomodationCostRef)}
              ref={accomodationCostRef}
            />
          </div>
        </div>
      </div>
      <div className="map-wrapper">
        <Map />
      </div>
      <DownloadPfdButton type="button" onClick={handlePrint}>
        Download PDF
      </DownloadPfdButton>
    </StyledSection>
  );
};
