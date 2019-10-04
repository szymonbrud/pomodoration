import React, { useState } from 'react';
import styled from 'styled-components';
import PomodoroSesions from 'components/Molecules/PomodoroSesions/PomodoroSesions';
import PomodoroSettings from 'components/Molecules/PomodoroSettings/PomodoroSettings';
import Timer from 'components/Molecules/Timer/Timer';
import TimerWrapper from 'components/Molecules/Timer/TimerWrapper';
import ShowHistoryOfTimeButton from 'components/Molecules/ShowHistoryOfTimeButton/ShowHistoryOfTimeButton';

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
      <TimerWrapper>
        {({ ItsTime, status }) => <Timer data-testid="timer" ItsTime={ItsTime} status={status} />}
      </TimerWrapper>
      <ShowHistoryOfTimeButton />
    </StyledMainWrapper>
  </>
);

export default MainContent;
