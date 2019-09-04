import { useEffect, useState } from 'react';
import firebase from 'firebase';

const TimerWrapper = ({ children }) => {
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

  return children({ ItsTime, status });
};

export default TimerWrapper;
