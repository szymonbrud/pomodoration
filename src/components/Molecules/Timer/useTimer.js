import React, { useState, useEffect } from 'react';
import TimerButton from 'components/Atoms/TimerButton/TimerButton';
import { SendRunAction, SendPauseAction, SendResetAction } from './Requests';

const addZero = item => {
  return item < 10 ? `0${item}` : item;
};

const useTimer = (startTime, status) => {
  const [currentTimer, setCurrentTimer] = useState();
  const [actionTimer, setActionsTimer] = useState();
  const [off, setOff] = useState(false);
  useEffect(() => {
    if (startTime !== undefined && status !== undefined) {
      if (status === 'run' && startTime > 0 && !off) {
        setActionsTimer(status);
        setCurrentTimer(startTime);
        setOff(true);
      }

      if ((status === 'pause' && !off) || (startTime === 0 && !off)) {
        setActionsTimer('pause');
        setCurrentTimer(startTime);
        setOff(true);
      }
    }
    if (status === 'reset' && !off) {
      setActionsTimer('reset');
      setOff(true);
    }
    let myInterval;
    if (actionTimer === 'run') {
      myInterval = setInterval(() => {
        setCurrentTimer(prev => prev - 1);
      }, 1000);
    } else if (actionTimer === 'reset') {
      setCurrentTimer(1500);
      clearInterval(myInterval);
    }
    return () => {
      clearInterval(myInterval);
    };
  }, [actionTimer, startTime, status]);

  let sec = currentTimer % 60;
  sec = addZero(sec);
  const minutes = Math.floor(currentTimer / 60);
  let min = minutes % 60;
  min = addZero(min);

  const runApp = () => {
    setActionsTimer('run');
    SendRunAction(currentTimer);
  };

  const pauseApp = () => {
    setActionsTimer('pause');
    SendPauseAction(currentTimer);
  };

  const resetApp = () => {
    setActionsTimer('reset');
    SendResetAction();
  };

  let buttons;
  if (actionTimer === 'reset') {
    buttons = <TimerButton onClick={() => runApp()}>start</TimerButton>;
  } else if (actionTimer === 'pause') {
    buttons = (
      <>
        <TimerButton red onClick={() => resetApp('reset')}>
          reset
        </TimerButton>
        <TimerButton blue onClick={() => runApp()}>
          wznow
        </TimerButton>
      </>
    );
  } else {
    buttons = (
      <TimerButton blue onClick={() => pauseApp()}>
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
