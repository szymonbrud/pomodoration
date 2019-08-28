import React, { useState, useEffect } from 'react';
import TimerButton from 'components/Atoms/TimerButton/TimerButton';
import firebase from 'firebase';

const getNowTime = () => {
  const date = new Date();
  const dateMonth = date.getMonth();
  const dateDay = date.getDate();
  const dateYear = date.getFullYear();
  const dateHours = date.getHours();
  const dateMinutes = date.getMinutes();
  const dateSecound = date.getSeconds();

  return {
    dateMonth,
    dateDay,
    dateYear,
    dateHours,
    dateMinutes,
    dateSecound,
  };
};

const safeTodataBase = () => {
  const nowTime = getNowTime();

  const time = new Date(
    nowTime.dateYear,
    nowTime.dateMonth,
    nowTime.dateDay,
    nowTime.dateHours,
    nowTime.dateMinutes,
    nowTime.dateSecound + 1500,
  );

  return time.getTime();
};

const funcPrzypisz = () => {
  const willTime = safeTodataBase();

  const userId = firebase.auth().currentUser.uid;
  firebase
    .database()
    .ref(`/users/${userId}`)
    .set(
      {
        time: willTime,
      },
      error => {
        error ? console.log(error) : console.log('brawo działa :D');
      },
    );
};

const addZero = item => {
  return item < 10 ? `0${item}` : item;
};

const useTimer = startTime => {
  console.log(startTime);
  const [currentTimer, setCurrentTimer] = useState(startTime);
  // to też powinno być pobierane z bazy danych
  const [actionTimer, setActionsTimer] = useState('reset');

  useEffect(() => {
    console.log('xd');
    if (startTime && actionTimer !== 'pause' && actionTimer !== 'reset' && startTime > 0) {
      setActionsTimer('run');
    }

    let myInterval;
    if (actionTimer === 'run') {
      myInterval = setInterval(() => {
        setCurrentTimer(prev => prev - 1);
        console.log(currentTimer);
      }, 1000);
    } else if (actionTimer === 'reset') {
      setCurrentTimer(1500);
      clearInterval(myInterval);
    }
    return () => {
      clearInterval(myInterval);
    };
  }, [actionTimer, startTime]);

  // @TODO: review these
  let sec = currentTimer % 60;
  sec = addZero(sec);
  const minutes = Math.floor(currentTimer / 60);
  let min = minutes % 60;
  min = addZero(min);

  const runApp = () => {
    setActionsTimer('run');
    // addUserToFirebase();
    // safeTodataBase();
    funcPrzypisz();
  };

  let buttons;
  if (actionTimer === 'reset') {
    buttons = <TimerButton onClick={() => runApp()}>start</TimerButton>;
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
