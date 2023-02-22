import styled from 'styled-components';
import { ReactNode } from 'react';
import { Map } from '@/Components/Atoms/Map/Map';
import Link from 'next/link';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useRoutePlanner } from '@/providers/RoutePlannerProvider';

export const StyledSection = styled.section`
  display: flex;
  justify-content: flex-end;
  font-family: ${({ theme }) => theme.fontFamily.primary};

  .route-details-wrapper {
    flex-basis: 20rem;
    display: flex;
    flex-direction: column;
    border-right: 1px solid ${({ theme }) => theme.color.contrastBorder};

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem 0.5rem;
      text-decoration: none;
      font-weight: 500;
      color: ${({ theme }) => theme.color.contrast};
      border-bottom: 1px solid ${({ theme }) => theme.color.contrastBorder};
      font-size: 1.25rem;
      svg {
        font-size: 1.5rem;
      }
      &:hover {
        background-color: ${({ theme }) => theme.color.primaryDarkHover};
      }
    }

    .route-details-list-wrapper {
      padding: 0.5rem;

      h1 {
        font-weight: 600;
        color: ${({ theme }) => theme.color.contrast};
        font-size: 1.5rem;
      }
    }
  }

  .map-wrapper {
    height: 100vh;
    flex-grow: 1;
  }
`;

export const RouteDetailsSection = () => {
  const { clearRoute } = useRoutePlanner();

  return (
    <StyledSection>
      <div className="route-details-wrapper">
        <Link href="/" onClick={clearRoute}>
          <AiOutlineArrowLeft />
          Plan another route
        </Link>
        <div className="route-details-list-wrapper">
          <h1>Route details:</h1>
        </div>
      </div>
      <div className="map-wrapper">
        <Map />
      </div>
    </StyledSection>
  );
};
