import { Paper } from '@/Components/Atoms/Paper/Paper';
import { RouteForm } from '@/Components/Molecules/RouteForm/RouteForm';
import styled from 'styled-components';

export const StyledSection = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.primary};
`;

export const RoutePlannerDashboard = () => {
  return (
    <StyledSection>
      <Paper>
        <div className="form-wrapper">
          <RouteForm />
        </div>
        <div className="history-wrapper"></div>
      </Paper>
    </StyledSection>
  );
};
