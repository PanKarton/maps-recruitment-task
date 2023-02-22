import styled from 'styled-components';
import { GoogleMap, DirectionsRenderer, Marker } from '@react-google-maps/api';
import { useRoutePlanner } from '@/providers/RoutePlannerProvider';

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
  const { isLoaded, directionData } = useRoutePlanner();

  console.log('map', directionData);

  if (!isLoaded || directionData === null) return <p>Loading...</p>;

  return (
    <StyledWrapper>
      <GoogleMap center={center} zoom={7} mapContainerStyle={{ width: '100%', height: '100%' }}>
        {directionData && <DirectionsRenderer directions={directionData} />}
      </GoogleMap>
    </StyledWrapper>
  );
};
