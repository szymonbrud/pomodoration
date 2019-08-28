import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import firebase from 'firebase';
import { firebaseApp } from 'firebaseConfig';
import useTimer from './useTimer';

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

const Timer = () => {
  const database = firebase.database();
  const [timeBase, setTimeBase] = useState(false);
  const [ItsTime, setItsTime] = useState();

  useEffect(() => {
    // console.log('właśnie wszedłem');
    const usersObject = database.ref().child(`users/${firebase.auth().currentUser.uid}`);
    usersObject.on('value', snap => {
      if (snap.val()) {
        setTimeBase(snap.val().time);
      }
    });
  }, []);

  useEffect(() => {
    if (timeBase) {
      const myDate = new Date();
      const myNowTimer = myDate.getTime();
      const minusTime = timeBase - myNowTimer;
      const timeee = Math.floor(minusTime / 1000);
      console.log(timeee);
      console.log('szymon');
      setItsTime(timeee);
    }
  }, [timeBase]);
  // timeee %= 60;
  // console.log(timeee + 1500);
  // // const lastTime = timeee + 1500;
  // const lastTime = timeee;

  // // console.log(timeBase);
  console.log(ItsTime);
  console.log('xdfff');
  if (ItsTime < 0) {
    setItsTime(0);
  }
  const { minutes, secounds, buttons } = useTimer(ItsTime);

  return (
    <StyledTimerWarpper>
      <StyledTimer>
        {minutes} : {secounds}
      </StyledTimer>
      <WrapperButtons>{buttons}</WrapperButtons>
    </StyledTimerWarpper>
  );
};

export default Timer;
