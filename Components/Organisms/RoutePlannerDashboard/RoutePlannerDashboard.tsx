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

  .flex-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }
  .form-wrapper {
    flex-basis: 5rem;
  }
  .history-wrapper {
    width: 100%;
    flex-grow: 1;
  }
`;

export const RoutePlannerDashboard = () => {
  return (
    <StyledSection>
      <Paper>
        <div className="flex-wrapper">
          <div className="form-wrapper">
            <RouteForm />
          </div>
          <div className="history-wrapper"></div>
        </div>
      </Paper>
    </StyledSection>
  );
};
