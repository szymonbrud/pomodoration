import React, { useState, useEffect } from 'react';
import { addZero } from 'functions';
import { useSelector, useDispatch } from 'react-redux';
import InterfaceSwitchButtonsRender from 'components/Molecules/Timer/InterfaceSwitchButtonsRender';
import { changeLoadingDataStatus } from 'actions/changeDataLoadingStatus';

import {
  SendRunAction,
  SendPauseAction,
  SendResetAction,
  saveMyPomodoroToDatabase,
} from './Requests';

const useTimer = (startTime, status) => {
  const [currentTime, setcurrentTime] = useState();
  const [actionTimer, setActionsTimer] = useState();
  const dispatch = useDispatch();
  const nameOfPomodoroState = useSelector(state => state.pomodoroNames.currentPomodoroName);

  if (status === 'reset' || status === 'pause') {
    dispatch(changeLoadingDataStatus(false));
  }

  useEffect(() => {
    if (status === 'reset') {
      setActionsTimer('reset');
    } else if (startTime !== undefined && status !== undefined) {
      if (status === 'run') {
        setActionsTimer(status);
        setcurrentTime(startTime);
      }
      if (status === 'pause') {
        setActionsTimer('pause');
        setcurrentTime(startTime);
      }
    }
  }, [startTime, status]);

  useEffect(() => {
    let myInterval;
    if (actionTimer === 'run') {
      myInterval = setInterval(() => {
        setcurrentTime(prev => prev - 1);
        dispatch(changeLoadingDataStatus(false));
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
    SendRunAction(currentTime, nameOfPomodoroState);
  };

  const pauseApp = () => {
    setActionsTimer('pause');
    SendPauseAction(currentTime, nameOfPomodoroState);
  };

  const resetApp = () => {
    setActionsTimer('reset');
    saveMyPomodoroToDatabase(1500 - currentTime, nameOfPomodoroState);
    SendResetAction();
  };

  const buttons = (
    <InterfaceSwitchButtonsRender
      pauseApp={pauseApp}
      runApp={runApp}
      resetApp={resetApp}
      currentAction={actionTimer}
      name={nameOfPomodoroState}
    />
  );

  return {
    buttons,
    secounds: sec,
    minutes: min,
  };
};

export default useTimer;
