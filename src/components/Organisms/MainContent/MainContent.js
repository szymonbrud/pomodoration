import React from 'react';
import styled from 'styled-components';
import PomodoroSesions from 'components/Molecules/PomodoroSesions/PomodoroSesions';
import PomodoroSettings from 'components/Molecules/PomodoroSettings/PomodoroSettings';
import Timer from 'components/Molecules/Timer/Timer';

const StyledMainWrapper = styled.div`
  position: relative;
  background: white;
  border-radius: 30px 30px 0 0;
  display: flex;
  margin-top: -30px;
  flex-grow: 3;
  width: 100%;
`;

const MainContent = () => (
  <>
    <StyledMainWrapper>
      <PomodoroSesions />
      <PomodoroSettings />
      <Timer />
    </StyledMainWrapper>
  </>
);

export default MainContent;
