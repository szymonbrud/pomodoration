import { useEffect, useState } from 'react';
import firebase from 'firebase';
import { useDispatch } from 'react-redux';
import { pomodoroName } from 'actions';

const TimerWrapper = ({ children }) => {
  // //@TODO: here
  // const database = firebase.database();
  // const [timeBase, setTimeBase] = useState(false);
  // const [ItsTime, setItsTime] = useState();
  // const [status, setStatus] = useState();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const usersObject = database.ref().child(`users/${firebase.auth().currentUser.uid}/timer`);
  //   usersObject.on('value', snap => {
  //     if (snap.val()) {
  //       setTimeBase(snap.val().time);
  //       setStatus(snap.val().status);
  //       dispatch(pomodoroName(snap.val().name));
  //     }
  //   });
  // }, []);

  // useEffect(() => {
  //   if (timeBase && status) {
  //     if (status === 'run') {
  //       const myDate = new Date();
  //       const myNowTimer = myDate.getTime();
  //       const minusTime = timeBase - myNowTimer;
  //       const timeee = Math.floor(minusTime / 1000);
  //       setItsTime(timeee);
  //     } else if (timeBase < 0 && status !== 'run') {
  //       setItsTime(0);
  //     } else {
  //       setItsTime(timeBase);
  //     }
  //   }
  // }, [timeBase, status]);

  // if (ItsTime < 0) {
  //   setItsTime(0);
  // }

  // return children({ ItsTime, status });

  // to całe do wyjebania
  const ItsTime = 1000;
  const status = 'pause';

  return children({ ItsTime, status });
};

export default TimerWrapper;
