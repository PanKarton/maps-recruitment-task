import { Paper } from '@/Components/Atoms/Paper/Paper';
import { RouteForm } from '@/Components/Molecules/RouteForm/RouteForm';
import { RoutesHistoryList } from '@/Components/Molecules/RoutesHistoryList/RoutesHistoryList';
import { StyledSection } from './RoutePlannerDashboard.styles';

export const RoutePlannerDashboard = () => {
  return (
    <StyledSection>
      <Paper>
        <div className="flex-wrapper">
          <div className="form-wrapper">
            <RouteForm />
          </div>
          <div className="history-wrapper">
            <RoutesHistoryList />
          </div>
        </div>
      </Paper>
    </StyledSection>
  );
};
