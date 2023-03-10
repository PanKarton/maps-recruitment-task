import styled from 'styled-components';
import { GoogleMap, DirectionsRenderer } from '@react-google-maps/api';
import { useRoutePlanner } from '@/providers/RoutePlannerProvider';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';

export const StyledWrapper = styled.div`
  position: relative;
  height: 100%;
  background-color: #ccc;
`;

const center = {
  lat: 52.23,
  lng: 19,
};

export const Map = () => {
  const { isLoaded, routeData } = useRoutePlanner();

  if (!isLoaded || routeData === null) return <LoadingSpinner />;

  return (
    <StyledWrapper>
      <GoogleMap center={center} zoom={7} mapContainerStyle={{ width: '100%', height: '100%' }}>
        {routeData && <DirectionsRenderer directions={routeData} />}
      </GoogleMap>
    </StyledWrapper>
  );
};
