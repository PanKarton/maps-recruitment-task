import styled from 'styled-components';
import { RxDotsVertical } from 'react-icons/rx';

export const StyledSection = styled.section`
  display: flex;
  justify-content: flex-end;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  .route-wrapper {
    position: relative;
    flex-basis: 23rem;
    display: flex;
    flex-direction: column;
    border-right: 2px solid ${({ theme }) => theme.color.contrastBorder};
    background-color: ${({ theme }) => theme.color.primary};

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem 0.5rem;
      text-decoration: none;
      font-weight: 500;
      color: ${({ theme }) => theme.color.contrast};
      border-bottom: 2px solid ${({ theme }) => theme.color.contrastBorder};
      font-size: 1.25rem;
      svg {
        font-size: 1.5rem;
      }
      &:hover {
        background-color: ${({ theme }) => theme.color.primaryDarker};
      }
    }
  }

  .map-wrapper {
    min-height: 100vh;
    flex-grow: 1;
  }
`;

export const RouteDetailsWrapper = styled.div`
  padding-block: 1rem 2rem;
  padding-inline: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-bottom: 2px solid ${({ theme }) => theme.color.contrastBorder};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  max-width: 23rem;

  .route-edge-points {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .price-and-distance {
    display: flex;
  }

  .inputs {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }
`;

export const RouteDetail = styled.div`
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-content: center;
  flex-basis: 50%;
  color: ${({ theme }) => theme.color.contrast};

  &.distance {
    gap: 0.5rem;
  }
  span {
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 2rem;
  }
  svg {
    font-size: 2rem;
  }
`;

export const RouteEdgePoint = styled.div`
  span {
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 2rem;
  }
`;

export const StyledDivider = styled(RxDotsVertical)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.color.contrast};
`;

export const RouteStepsListWrapper = styled.div`
  flex: 1 1 auto;
  overflow-y: auto;
  height: 0px;
`;

export const DownloadButton = styled.button`
  position: absolute;
  bottom: 0;
  right: -1rem;
  translate: 100% 0;
  z-index: 1;
  background-color: ${({ theme }) => theme.color.primary};
  padding: 1rem 2rem;
  border: none;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-weight: 600;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.primaryDarker};
  }
`;
