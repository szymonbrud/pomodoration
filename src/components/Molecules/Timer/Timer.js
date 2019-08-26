import React, { useState } from 'react';
import styled from 'styled-components';

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
  justify-content: space-between;
`;

const Timer = () => {
  const [secounds, setSecounds] = useState('00');
  const [minutes, setMinutes] = useState(25);
  const [myInterval, setMyInterval] = useState();
  const [currentSecounds, setCurrentSecounds] = useState(1500);

  const addZero = item => {
    return item < 10 ? `0${item}` : item;
  };

  const defaultTime = 1500;

  const run = () => {
    setMyInterval(
      setInterval(() => {
        if (currentSecounds === 0) {
          clearInterval(myInterval);
        } else {
          setCurrentSecounds(currentSecounds - 1);
        }
        let min = Math.floor(currentSecounds / 60);
        min %= 60;
        const sec = currentSecounds % 60;

        setSecounds(addZero(sec));
        setMinutes(addZero(min));
      }, 1000),
    );
  };

  const pauseTimer = () => {
    clearInterval(myInterval);
    console.log(currentSecounds);
  };

  const reset = () => {
    setSecounds('00');
    setMinutes(25);
    setCurrentSecounds(defaultTime);
    clearInterval(myInterval);
  };

  return (
    <StyledTimerWarpper>
      <StyledTimer>
        {minutes} : {secounds}
      </StyledTimer>
      <WrapperButtons>
        <button onClick={() => run()}>frf</button>
        <button onClick={() => pauseTimer()}>pause</button>
        <button onClick={() => reset()}>reset</button>
      </WrapperButtons>
    </StyledTimerWarpper>
  );
};

export default Timer;
