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
      {routesHistory.map((route, index) => {
        return <RoutesHistoryListItem key={index} route={route} />;
      })}
    </StyledList>
  );
};
