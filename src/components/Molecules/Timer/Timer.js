import React from 'react';
import styled from 'styled-components';

const StyledTimer = styled.h1`
  font-size: 3.6rem;
  color: ${({ theme }) => theme.blue};
  margin: 20vh auto;
`;

const Timer = () => {
  const defaultTime = 150;
  let s = 150;
  let lol;
  const run = () => {
    lol = setInterval(() => {
      if (s === 0) {
        clearInterval(lol);
      } else {
        s -= 1;
      }
      let m = Math.floor(s / 60);
      m %= 60;
      console.log(`minuty: ${m}, sekundy: ${s % 60}`);
    }, 1000);
  };
  const pauseTimer = () => {
    clearInterval(lol);
  };
  const reset = () => {
    clearInterval(lol);
    s = defaultTime;
  };

  return (
    <>
      <StyledTimer>
        time
        {/* {minutes} : {secounds} */}
      </StyledTimer>
      <button onClick={() => run()}>frf</button>
      <button onClick={() => pauseTimer()}>pause</button>
      <buton onClick={() => reset()}>reset</buton>
    </>
  );
};

export default Timer;
