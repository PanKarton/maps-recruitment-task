import { RoutesHistoryListItem } from '@/Components/Atoms/RoutesHistoryListItem/RoutesHistoryListItem';
import { useRoutesHistory } from '@/providers/RoutesHistoryProvider';
import { EmptyListMessage, StyledList } from './RoutesHistoryList.styles';

export const RoutesHistoryList = () => {
  const { routesHistory } = useRoutesHistory();

  if (routesHistory.length === 0)
    return (
      <EmptyListMessage>
        <p> History empty :(</p>
      </EmptyListMessage>
    );

  return (
    <StyledList>
      {routesHistory.map((route, index) => (
        <RoutesHistoryListItem key={index} route={route} />
      ))}
      {routesHistory.map((route, index) => (
        <RoutesHistoryListItem key={index} route={route} />
      ))}
      {routesHistory.map((route, index) => (
        <RoutesHistoryListItem key={index} route={route} />
      ))}
    </StyledList>
  );
};
