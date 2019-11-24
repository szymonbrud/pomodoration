import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import PomodoroSesions from 'components/Molecules/PomodoroSesions/PomodoroSesions';
import PomodoroSettings from 'components/Molecules/PomodoroSettings/PomodoroSettings';
import Timer from 'components/Molecules/Timer/Timer';
import TimerWrapper from 'components/Molecules/Timer/TimerWrapper';
import downloadNamesOfLastPomodoros from 'actions/downloadData/downloadNamesOfLastPomodoros';
import ShowHistoryOfTimeButton from 'components/Molecules/ShowHistoryOfTimeButton/ShowHistoryOfTimeButton';
import media from 'assets/styles/media';
import MenuDesktop from 'components/Molecules/MenuDesktop/MenuDesktop';
import HideTheSetNamePomodoro from 'components/Molecules/HideTheSetNamePomodoro/HideTheSetNamePomodoro';

const StyledMainWrapper = styled.div`
  position: relative;
  background: white;
  border-radius: 30px 30px 0 0;
  display: flex;
  margin-top: -30px;
  flex-grow: 3;
  width: 100%;

  ${media.desktop`
    width: 35vw;
    margin-left: 19.5vw;
    background: #EEEFFF;
    max-height: 25vw;
    margin-top: 10vh;
    border-radius: 20px;
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.25);
  `}
`;

const MainContent = () => {
  const dispatch = useDispatch();
  dispatch(downloadNamesOfLastPomodoros());

  return (
    <>
      <StyledMainWrapper>
        <PomodoroSesions />
        <PomodoroSettings />
        <TimerWrapper>
          {({ ItsTime, status }) => <Timer data-testid="timer" ItsTime={ItsTime} status={status} />}
        </TimerWrapper>
        <ShowHistoryOfTimeButton />
        <MenuDesktop />
        <HideTheSetNamePomodoro />
      </StyledMainWrapper>
    </>
  );
};

export default MainContent;
