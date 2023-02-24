import styled from 'styled-components';
import { RxDotsVertical } from 'react-icons/rx';
import Link from 'next/link';

export const StyledSection = styled.section`
  display: flex;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  position: relative;
  .route-wrapper {
    position: relative;
    width: 23rem;
    display: flex;
    flex-direction: column;
    border-right: 2px solid ${({ theme }) => theme.color.contrastBorder};
    background-color: ${({ theme }) => theme.color.primary};
    padding-top: 24rem;

    .route-details-wrapper {
      position: fixed;
      top: 3.5rem;
      left: 0;
      background-color: ${({ theme }) => theme.color.primary};
      width: 22rem;
      padding-block: 1rem 2rem;
      padding-inline: 1rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      border-bottom: 2px solid ${({ theme }) => theme.color.contrastBorder};
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
    }
  }

  .map-wrapper {
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    width: calc(100vw - 23rem);
  }
`;

export const ReturnButton = styled(Link)`
  position: fixed;
  top: 0;
  left: 0;
  width: 23rem;
  height: 3.5rem;
  background-color: ${({ theme }) => theme.color.primary};
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

export const DownloadPfdButton = styled.button`
  position: fixed;
  bottom: 0;
  left: 23rem;
  background-color: ${({ theme }) => theme.color.primary};
  padding: 0.75rem 0.75rem;
  text-decoration: none;
  font-weight: 500;
  color: ${({ theme }) => theme.color.contrast};
  border: 1px solid ${({ theme }) => theme.color.contrastBorder};
  font-size: 1.125rem;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.primaryDarker};
  }
`;
