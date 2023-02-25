import styled from 'styled-components';
import { RxDotsVertical } from 'react-icons/rx';
import Link from 'next/link';

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column-reverse;
  padding-top: 3.625rem;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  @media screen and (min-width: 50rem) {
    flex-direction: row;
  }
  .route-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-self: center;
    background-color: ${({ theme }) => theme.color.primary};
    max-width: 23rem;
    border-inline: 1px solid ${({ theme }) => theme.color.contrastBorder};

    @media screen and (min-width: 50rem) {
      align-self: auto;
      border-right: 2px solid ${({ theme }) => theme.color.contrastBorder};
    }
  }

  .map-wrapper {
    height: 40vh;
    flex-grow: 1;
    @media screen and (min-width: 50rem) {
      min-height: calc(100vh - 3.625rem);
    }
  }
`;

export const RouteDetailsWrapper = styled.div`
  position: relative;
  padding-block: 1.5rem 2rem;
  padding-inline: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  max-width: 23rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.contrastBorder};
  @media screen and (min-width: 50rem) {
    padding-block: 1.5rem;
  }
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
  max-width: 23rem;
  @media screen and (min-width: 50rem) {
    flex: 1 1 auto;
    overflow-y: auto;
    height: 0px;
  }
`;

export const DownloadButton = styled.button`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  height: 3.625rem;
  background-color: transparent;
  padding-inline: 1rem;
  border: none;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  border-bottom: 2px solid ${({ theme }) => theme.color.contrastBorder};
  font-weight: 500;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.primaryDarker};
  }
`;

export const ReturnAnchor = styled(Link)`
  position: fixed;
  top: 0;
  width: 100vw;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 0.5rem;
  text-decoration: none;
  font-weight: 500;
  color: ${({ theme }) => theme.color.contrast};
  background-color: ${({ theme }) => theme.color.primary};
  border-bottom: 1px solid ${({ theme }) => theme.color.contrastBorder};
  font-size: 1rem;
  z-index: 1;
  @media screen and (min-width: 50rem) {
    font-size: 1.25rem;
  }
  svg {
    font-size: 1.5rem;
  }
  &:hover {
    background-color: ${({ theme }) => theme.color.primaryDarker};
  }
`;
