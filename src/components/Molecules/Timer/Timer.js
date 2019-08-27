import React from 'react';
import styled from 'styled-components';
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

const Timer = () => {
  const { minutes, secounds, buttons } = useTimer(1500);

  return (
    <StyledTimerWarpper>
      <StyledTimer>
        {minutes} : {secounds}
      </StyledTimer>
      <WrapperButtons>{buttons}</WrapperButtons>
    </StyledTimerWarpper>
  );
};

export default Timer;
