import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import firebase from 'firebase';
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
  const [status, setStatus] = useState();

  useEffect(() => {
    const usersObject = database.ref().child(`users/${firebase.auth().currentUser.uid}/timer`);
    usersObject.on('value', snap => {
      if (snap.val()) {
        setTimeBase(snap.val().time);
        setStatus(snap.val().status);
      }
    });
  }, []);

  useEffect(() => {
    if (timeBase && status) {
      if (status === 'run') {
        const myDate = new Date();
        const myNowTimer = myDate.getTime();
        const minusTime = timeBase - myNowTimer;
        const timeee = Math.floor(minusTime / 1000);
        setItsTime(timeee);
      } else if (timeBase < 0 && status !== 'run') {
        setItsTime(0);
      } else {
        setItsTime(timeBase);
      }
    }
  }, [timeBase, status]);

  if (ItsTime < 0) {
    setItsTime(0);
  }

  const { minutes, secounds, buttons } = useTimer(ItsTime, status);
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
