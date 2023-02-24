import styled from 'styled-components';
import { RxDotsHorizontal } from 'react-icons/rx';
import Link from 'next/link';

export const StyledSection = styled.section`
  display: flex;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  position: relative;
  .route-steps-wrapper {
    flex-basis: 23rem;
    .price-and-distance {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 2rem;
      padding-inline: 1rem;
      padding-block: 1rem;
      border-bottom: 2px solid ${({ theme }) => theme.color.contrastBorder};
    }
  }
  .route-details-wrapper {
    position: fixed;
    top: 0;
    right: 0;
    width: calc(100vw - 23rem);
    height: 100vh;
    display: flex;
    flex-direction: column;
    border-left: 2px solid ${({ theme }) => theme.color.contrastBorder};
    background-color: ${({ theme }) => theme.color.primary};
  }

  .map-wrapper {
    height: 100vh;
    width: 100%;
  }
`;

export const ReturnButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: ${({ theme }) => theme.color.contrast};
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 2rem;
  height: 100%;
  padding-inline: 1rem;

  svg {
    font-size: 1.5rem;
  }
  &:hover {
    background-color: ${({ theme }) => theme.color.primaryDarker};
  }
`;

export const RouteDetails = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.color.contrastBorder};

  .route-edge-points {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-inline: 1rem;
    padding-block: 1rem;
    border-left: 1px solid ${({ theme }) => theme.color.contrastBorder};
  }

  .inputs {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-inline: 1rem;
    margin-left: auto;
  }
`;

export const RouteEdgePoint = styled.div`
  span {
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 2rem;
  }
`;

export const StyledDivider = styled(RxDotsHorizontal)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.color.contrast};
`;

export const RouteDetail = styled.div`
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-content: center;
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
