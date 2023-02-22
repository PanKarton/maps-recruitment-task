import { RoutesHistoryListItem } from '@/Components/Atoms/RoutesHistoryListItem/RoutesHistoryListItem';
import { useRoutesHistory } from '@/providers/RoutesHistoryProvider';
import styled from 'styled-components';

export const StyledList = styled.ul`
  list-style-type: none;
`;

export const RoutesHistoryList = () => {
  const { routesHistory } = useRoutesHistory();

  if (routesHistory.length === 0) return <p> History empty</p>;

  return (
    <StyledList>
      {routesHistory.map((route, index) => {
        return <RoutesHistoryListItem key={index} route={route} />;
      })}
    </StyledList>
  );
};
