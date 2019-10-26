import { useEffect, useState } from 'react';
import firebase from 'firebase';
import { useDispatch, useSelector } from 'react-redux';
import { loadingDataStatus } from 'actions';
import { onlySetCurrentName } from 'actions/pomodoroNames';

const TimerWrapper = ({ children }) => {
  const database = firebase.database();
  const [timeBase, setTimeBase] = useState(false);
  const [ItsTime, setItsTime] = useState();
  const [status, setStatus] = useState();
  const [getNewState, setGetNewState] = useState(false);
  const dispatch = useDispatch();
  // nie wiem po co to ale jak by coś nie działało to mażna to odblokować
  // const pomodorosAllLast = useSelector(state => state.pomodoroNames.nameOfLastPomodoros);

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
        dispatch(onlySetCurrentName(snap.val().name));
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
