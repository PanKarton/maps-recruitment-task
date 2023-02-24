import { useRef } from 'react';
import { Map } from '@/Components/Atoms/Map/Map';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useRoutePlanner } from '@/providers/RoutePlannerProvider';
import {
  ReturnButton,
  RouteDetails,
  RouteDetail,
  RouteEdgePoint,
  StyledDivider,
  StyledSection,
} from './RouteDetailsSection.styles';
import { StyledInput } from '@/Components/Atoms/Input/Input';
import { RouteStepsList } from '@/Components/Molecules/RouteStepsList/RouteStepsList';
import { GiPathDistance } from 'react-icons/gi';
import { BiDollar } from 'react-icons/bi';
import { DownloadPdfButton } from '@/Components/Atoms/DownloadPdfButton/DownloadPdfButton';

export const RouteDetailsSection = () => {
  const { distance, totalPrice, origin, destination, calculateTotalPrice } = useRoutePlanner();

  const printRef = useRef<HTMLDivElement | null>(null);
  const kilometerCostRef = useRef<HTMLInputElement>(null);
  const accomodationCostRef = useRef<HTMLInputElement>(null);

  const fileTitle = `${origin} - to - ${destination}.pdf`;

  return (
    <StyledSection>
      <div className="route-details-wrapper">
        <RouteDetails>
          <ReturnButton href="/">
            <AiOutlineArrowLeft />
            Plan another route
          </ReturnButton>
          <div className="route-edge-points">
            <RouteEdgePoint>
              <span>{origin}</span>
            </RouteEdgePoint>
            <StyledDivider />
            <RouteEdgePoint>
              <span>{destination}</span>
            </RouteEdgePoint>
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
        </RouteDetails>

        <div className="map-wrapper">
          <Map />
        </div>

        <DownloadPdfButton printRef={printRef} fileTitle={fileTitle} />
      </div>
      <div ref={printRef} className="route-steps-wrapper">
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
        <RouteStepsList />
      </div>
    </StyledSection>
  );
};
