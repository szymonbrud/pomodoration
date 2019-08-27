/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

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

const StyledButton = styled.button`
  height: 48px;
  width: 30%;
  color: white;
  font-weight: 500;
  background: linear-gradient(90deg, #6762ff 0%, rgba(255, 255, 255, 0) 100%), #ff5362;
  border-radius: 10px;
  border: none;
  font-size: 2.5rem;

  ${({ red }) =>
    red &&
    css`
      background: ${({ theme }) => theme.red};
    `}

  ${({ blue }) =>
    blue &&
    css`
      background: ${({ theme }) => theme.blue};
    `}
`;

const Timer = () => {
  const addZero = item => {
    return item < 10 ? `0${item}` : item;
  };

  const [test, setTest] = useState(1500);
  const [timer, setTimer] = useState('reset');

  useEffect(() => {
    let myTimer;
    if (timer === 'run') {
      myTimer = setInterval(() => {
        setTest(prev => prev - 1);
      }, 100);
    } else if (timer === 'reset') {
      setTest(1500);
    }
    return () => {
      clearInterval(myTimer);
    };
  }, [timer]);

  let sec = test % 60;
  sec = addZero(sec);
  const minutes = Math.floor(test / 60);
  let min = minutes % 60;
  min = addZero(min);

  return (
    <StyledTimerWarpper>
      <StyledTimer>
        {min} : {sec}
      </StyledTimer>
      <WrapperButtons>
        {/* @TODO: przerobić, zrobić całe review */}
        {timer === 'reset' ? (
          <>
            <StyledButton onClick={() => setTimer('run')}>start</StyledButton>
          </>
        ) : timer === 'pause' ? (
          <>
            <StyledButton red onClick={() => setTimer('reset')}>
              reset
            </StyledButton>
            <StyledButton blue onClick={() => setTimer('run')}>
              wznów
            </StyledButton>
          </>
        ) : (
          <>
            <StyledButton blue onClick={() => setTimer('pause')}>
              pause
            </StyledButton>
          </>
        )}
      </WrapperButtons>
    </StyledTimerWarpper>
  );
};

export default Timer;
