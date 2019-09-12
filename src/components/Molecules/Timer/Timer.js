import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import useTimer from './useTimer';

const StyledTimerWarpper = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const StyledTimer = styled.h1`
  margin-top: 15vh;
  font-size: 3.6rem;
  color: ${({ theme }) => theme.blue};
`;

const WrapperButtons = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10vh;
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
