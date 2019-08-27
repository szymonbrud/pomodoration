import React, { useState, useEffect } from 'react';
import TimerButton from 'components/Atoms/TimerButton/TimerButton';

const addZero = item => {
  return item < 10 ? `0${item}` : item;
};

const useTimer = startTime => {
  const [test, setTest] = useState(startTime);
  const [timer, setTimer] = useState('reset');

  useEffect(() => {
    let myTimer;
    if (timer === 'run') {
      myTimer = setInterval(() => {
        setTest(prev => prev - 1);
      }, 100);
    } else if (timer === 'reset') {
      setTest(startTime);
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

  let buttons;
  if (timer === 'reset') {
    buttons = <TimerButton onClick={() => setTimer('run')}>start</TimerButton>;
  } else if (timer === 'pause') {
    buttons = (
      <>
        <TimerButton red onClick={() => setTimer('reset')}>
          reset
        </TimerButton>
        <TimerButton blue onClick={() => setTimer('run')}>
          wznów
        </TimerButton>
      </>
    );
  } else {
    buttons = (
      <TimerButton blue onClick={() => setTimer('pause')}>
        pause
      </TimerButton>
    );
  }

  return {
    buttons,
    sec,
    min,
  };
};

export default useTimer;
