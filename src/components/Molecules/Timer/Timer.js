import React from 'react';
import styled from 'styled-components';
import { firebaseApp } from 'firebaseConfig';
import useTimer from './useTimer';

const StyledTimerWarpper = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

const StyledTimer = styled.h1`
  font-size: 3.6rem;
  color: ${({ theme }) => theme.blue};
`;

const WrapperButtons = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Timer = ({ ItsTime, status }) => {
  const { minutes, secounds, buttons } = useTimer(ItsTime, status);
  return (
    <StyledTimerWarpper data-test="timerWrapper">
      <StyledTimer data-testid="counter">
        {minutes} : {secounds}
      </StyledTimer>
      <WrapperButtons>{buttons}</WrapperButtons>
    </StyledTimerWarpper>
  );
};

export default Timer;
