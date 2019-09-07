import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
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
    <StyledTimerWarpper>
      {status === undefined ? (
        <h1>ładowanie...</h1>
      ) : (
        <>
          <StyledTimer>
            {minutes} : {secounds}
          </StyledTimer>
          <WrapperButtons>{buttons}</WrapperButtons>
        </>
      )}
    </StyledTimerWarpper>
  );
};

Timer.propTypes = {
  ItsTime: propTypes.number,
  status: propTypes.string,
};

Timer.defaultProps = {
  ItsTime: undefined,
  status: undefined,
};

export default Timer;
