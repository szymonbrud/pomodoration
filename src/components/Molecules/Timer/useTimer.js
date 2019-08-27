import React, { useState, useEffect } from 'react';
import TimerButton from 'components/Atoms/TimerButton/TimerButton';

const addZero = item => {
  return item < 10 ? `0${item}` : item;
};

const useTimer = startTime => {
  const [currentTimer, setCurrentTimer] = useState(startTime);
  const [actionTimer, setActionsTimer] = useState('reset');

  useEffect(() => {
    let myInterval;
    if (actionTimer === 'run') {
      myInterval = setInterval(() => {
        setCurrentTimer(prev => prev - 1);
      }, 100);
    } else if (actionTimer === 'reset') {
      setCurrentTimer(startTime);
    }
    return () => {
      clearInterval(myInterval);
    };
  }, [actionTimer]);

  // @TODO: review these
  let sec = currentTimer % 60;
  sec = addZero(sec);
  const minutes = Math.floor(currentTimer / 60);
  let min = minutes % 60;
  min = addZero(min);

  let buttons;
  if (actionTimer === 'reset') {
    buttons = <TimerButton onClick={() => setActionsTimer('run')}>start</TimerButton>;
  } else if (actionTimer === 'pause') {
    buttons = (
      <>
        <TimerButton red onClick={() => setActionsTimer('reset')}>
          reset
        </TimerButton>
        <TimerButton blue onClick={() => setActionsTimer('run')}>
          wznów
        </TimerButton>
      </>
    );
  } else {
    buttons = (
      <TimerButton blue onClick={() => setActionsTimer('pause')}>
        pause
      </TimerButton>
    );
  }

  return {
    buttons,
    secounds: sec,
    minutes: min,
  };
};

export default useTimer;
