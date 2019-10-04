import { useEffect, useState } from 'react';
import firebase from 'firebase';
import { useDispatch } from 'react-redux';
import { pomodoroName, loadingDataStatus } from 'actions';

const TimerWrapper = ({ children }) => {
  const database = firebase.database();
  const [timeBase, setTimeBase] = useState(false);
  const [ItsTime, setItsTime] = useState();
  const [status, setStatus] = useState();
  const [getNewState, setGetNewState] = useState(false);
  const dispatch = useDispatch();
  // to daje nam to że jeżeli wyłączymy i włączymy aplikacje to mamy pewność przeładowania

  let loading = false;

  document.addEventListener(
    'visibilitychange',
    () => {
      if (document.hidden) {
        loading = false;
      }
      if (!document.hidden && !loading) {
        loading = true;
        dispatch(loadingDataStatus(true));
      }
      setGetNewState(document.hidden);
    },
    false,
  );

  useEffect(() => {
    const usersObject = database.ref().child(`users/${firebase.auth().currentUser.uid}/timer`);
    usersObject.on('value', snap => {
      if (snap.val()) {
        setTimeBase(snap.val().time);
        setStatus(snap.val().status);
        dispatch(pomodoroName(snap.val().name));
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
      } else {
        setItsTime(timeBase);
      }
    }
  }, [timeBase, status, getNewState]);

  return children({ ItsTime, status });
};

export default TimerWrapper;
