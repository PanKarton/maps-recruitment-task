import { useRef } from 'react';
import { Map } from '@/Components/Atoms/Map/Map';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useRoutePlanner } from '@/providers/RoutePlannerProvider';
import {
  RouteDetail,
  RouteEdgePoint,
  StyledDivider,
  StyledSection,
  DownloadButton,
  RouteDetailsWrapper,
  RouteStepsListWrapper,
  ReturnAnchor,
} from './RouteDetailsSection.styles';
import { StyledInput } from '@/Components/Atoms/Input/Input';
import { RouteStepsList } from '@/Components/Molecules/RouteStepsList/RouteStepsList';
import { GiPathDistance } from 'react-icons/gi';
import { BiDollar } from 'react-icons/bi';
import { usePrintPdf } from './usePrintPdf';

export const RouteDetailsSection = () => {
  const { distance, totalPrice, origin, destination, calculateTotalPrice } = useRoutePlanner();
  const documentTitle = `${origin} - to - ${destination}.pdf`;
  const { handlePrint, stepsRef, detailsRef } = usePrintPdf(documentTitle);

  const kilometerCostRef = useRef<HTMLInputElement>(null);
  const accomodationCostRef = useRef<HTMLInputElement>(null);

  return (
    <StyledSection>
      <ReturnAnchor href="/">
        <AiOutlineArrowLeft />
        Plan another route
      </ReturnAnchor>
      <div className="route-wrapper">
        <RouteDetailsWrapper id="details-print" ref={detailsRef}>
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
        </RouteDetailsWrapper>
        <RouteStepsListWrapper>
          <RouteStepsList id="steps-print" ref={stepsRef} />
          <DownloadButton onClick={handlePrint}>Download PDF</DownloadButton>
        </RouteStepsListWrapper>
      </div>
      <div className="map-wrapper">
        <Map />
      </div>
    </StyledSection>
  );
};
