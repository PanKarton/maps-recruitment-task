import { useRef } from 'react';
import { Map } from '@/Components/Atoms/Map/Map';
import Link from 'next/link';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useRoutePlanner } from '@/providers/RoutePlannerProvider';
import {
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
import { jsPDF } from 'jspdf';

export const RouteDetailsSection = () => {
  const { distance, totalPrice, origin, destination, calculateTotalPrice } = useRoutePlanner();
  // ===================================

  const printRef = useRef<HTMLDivElement | null>(null);

  const documentTitle = `${origin} - to - ${destination}.pdf`;

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle,
    print: async (printIframe: HTMLIFrameElement) => {
      const pdf = new jsPDF('p', 'pt', 'a4');

      const document = printIframe.contentDocument;

      const print = document?.getElementById('pdf');

      if (!print) return;

      pdf.html(print, {
        callback: () => pdf.save(documentTitle),
      });
    },
  });

  // ===================================
  const kilometerCostRef = useRef<HTMLInputElement>(null);
  const accomodationCostRef = useRef<HTMLInputElement>(null);

  return (
    <StyledSection>
      <div className="route-wrapper">
        <Link href="/">
          <AiOutlineArrowLeft />
          Plan another route
        </Link>
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
        <div id="pdf" ref={printRef} className="steps-wrapper">
          <RouteStepsList />
        </div>
      </div>
      <div className="map-wrapper">
        <Map />
      </div>
      <button onClick={handlePrint}>Download PDF</button>
    </StyledSection>
  );
};
