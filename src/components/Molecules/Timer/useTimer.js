import React, { useState, useEffect } from 'react';
import { addZero } from 'functions';
import { useSelector, useDispatch } from 'react-redux';
import { pomodoroName } from 'actions';
import InterfaceSwitchButtonsRender from 'components/Molecules/Timer/InterfaceSwitchButtonsRender';
import { SendRunAction, SendPauseAction, SendResetAction } from './Requests';

const useTimer = (startTime, status) => {
  const [currentTime, setcurrentTime] = useState();
  const [actionTimer, setActionsTimer] = useState();
  const [off, setOff] = useState(false);
  const nameOfPomodoroState = useSelector(state => state.pomdoroName);

  useEffect(() => {
    if (startTime !== undefined && status !== undefined) {
      if (status === 'run' && startTime > 0 && !off) {
        setActionsTimer(status);
        setcurrentTime(startTime);
        setOff(true);
      }

      if ((status === 'pause' && !off) || (startTime === 0 && !off)) {
        setActionsTimer('pause');
        setcurrentTime(startTime);
        setOff(true);
      }
    }
    if (status === 'reset' && !off) {
      setActionsTimer('reset');
      setOff(true);
    }
  }, [startTime, status]);

  useEffect(() => {
    let myInterval;
    if (actionTimer === 'run') {
      myInterval = setInterval(() => {
        setcurrentTime(prev => prev - 1);
      }, 1000);
    } else if (actionTimer === 'reset') {
      setcurrentTime(1500);
      clearInterval(myInterval);
    }
    return () => {
      clearInterval(myInterval);
    };
  }, [actionTimer]);

  let sec = currentTime % 60;
  sec = addZero(sec);
  const minutes = Math.floor(currentTime / 60);
  let min = minutes % 60;
  min = addZero(min);

  const runApp = () => {
    setActionsTimer('run');
    SendRunAction(currentTime, nameOfPomodoroState.name);
  };

  const pauseApp = () => {
    setActionsTimer('pause');
    SendPauseAction(currentTime, nameOfPomodoroState.name);
  };

  const resetApp = () => {
    setActionsTimer('reset');
    SendResetAction();
  };

  const buttons = (
    <InterfaceSwitchButtonsRender
      pauseApp={pauseApp}
      runApp={runApp}
      resetApp={resetApp}
      currentAction={actionTimer}
      name={nameOfPomodoroState.name}
    />
  );

  return {
    buttons,
    secounds: sec,
    minutes: min,
  };
};

export default useTimer;
