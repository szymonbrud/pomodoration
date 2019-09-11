import React, { useState, useEffect } from 'react';
import TimerButton from 'components/Atoms/TimerButton/TimerButton';
import { addZero } from 'functions';
import SetName from 'components/Molecules/SetName/SetName';
import NameOfPomodoro from 'components/Molecules/NameOfPomodoro/NameOfPomodoro';
import { useSelector, useDispatch } from 'react-redux';
import { pomodoroName } from 'actions';
import { SendRunAction, SendPauseAction, SendResetAction } from './Requests';

const useTimer = (startTime, status, name) => {
  const dispatch = useDispatch();
  const [currentTime, setcurrentTime] = useState();
  const [actionTimer, setActionsTimer] = useState();
  const [off, setOff] = useState(false);
  const nameOfPomodoroState = useSelector(state => state.pomdoroName);
  // console.log(name);

  useEffect(() => {
    if (name && nameOfPomodoroState.name) {
      dispatch(pomodoroName(name));
    }
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
  }, [startTime, status, name]);

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
    SendRunAction(currentTime, nameOfPomodoroState.name || name);
  };

  const pauseApp = () => {
    setActionsTimer('pause');
    SendPauseAction(currentTime, name);
  };

  const resetApp = () => {
    setActionsTimer('reset');
    SendResetAction();
  };

  let buttons;
  if (actionTimer === 'reset') {
    buttons = (
      <>
        <SetName />
        <TimerButton onClick={() => runApp()}>start</TimerButton>
      </>
    );
  } else if (actionTimer === 'pause') {
    buttons = (
      <>
        <TimerButton red onClick={() => resetApp('reset')} data-test="pauseButton">
          reset
        </TimerButton>
        <TimerButton blue onClick={() => runApp()} data-test="pauseButton">
          wznow
        </TimerButton>
        <NameOfPomodoro name={name} />
      </>
    );
  } else {
    buttons = (
      <>
        <TimerButton blue onClick={() => pauseApp()} data-test="pauseButton">
          pause
        </TimerButton>
        <NameOfPomodoro name={name} />
      </>
    );
  }

  return {
    buttons,
    secounds: sec,
    minutes: min,
  };
};

export default useTimer;
