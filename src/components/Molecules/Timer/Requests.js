import firebase from 'firebase';
import { getCurrentTime, addZero } from 'functions';

const safeTodataBase = currentTime => {
  const nowTime = getCurrentTime();

  const time = new Date(
    nowTime.dateYear,
    nowTime.dateMonth,
    nowTime.dateDay,
    nowTime.dateHours,
    nowTime.dateMinutes,
    nowTime.dateSecound + currentTime,
  );
  return time.getTime();
};

export const SendRunAction = (currentTime, name = '') => {
  const willTime = safeTodataBase(currentTime);

  const userId = firebase.auth().currentUser.uid;
  firebase
    .database()
    .ref(`/users/${userId}/timer`)
    .set(
      {
        time: willTime,
        status: 'run',
        name,
      },
      error => {
        error && console.log(error);
      },
    );
};

export const SendPauseAction = (time, name = '') => {
  const userId = firebase.auth().currentUser.uid;
  firebase
    .database()
    .ref(`/users/${userId}/timer`)
    .set({ time, status: 'pause', name }, err => {
      err && console.log(err);
    });
};

export const SendResetAction = () => {
  const userId = firebase.auth().currentUser.uid;
  firebase
    .database()
    .ref(`/users/${userId}/timer`)
    .set({
      status: 'reset',
    });
};

export const saveMyPomodoroToDatabase = (time, title = 'programowanie') => {
  const userId = firebase.auth().currentUser.uid;

  const date = new Date();
  const currentDay = addZero(date.getDate());
  const currentMonth = addZero(date.getMonth() + 1);
  const currentYear = date.getFullYear();
  const fullDateToDatabase = `${currentDay}|${currentMonth}|${currentYear}`;

  let elementWas;
  let elementObj;

  const query = firebase
    .database()
    .ref(`users/${userId}/hostoryOfPomdoro`)
    .orderByChild('dateSerch')
    .equalTo(fullDateToDatabase);

  const getData = new Promise(resolve => {
    query.once('value').then(snapshot => {
      snapshot.forEach(childSnapshot => {
        if (childSnapshot.val().title === title) {
          elementWas = childSnapshot.key;
          elementObj = childSnapshot.val();
        }
      });
      resolve();
    });
  });

  getData.then(() => {
    if (elementWas) {
      firebase
        .database()
        .ref(`users/${userId}/hostoryOfPomdoro/${elementWas}`)
        .update({
          title,
          dateSerch: fullDateToDatabase,
          date: new Date().getTime(),
          time: elementObj.time + time, // będzie trzeba przekazywać czas
          pomodoro: elementObj.pomodoro + 1,
        });
    } else {
      // co jeżeli go jeszcze NIE było tego dnia w bazie danych
      const newPomodoroKay = firebase
        .database()
        .ref()
        .child(`users/${userId}/hostoryOfPomdoro`)
        .push().key;

      firebase
        .database()
        .ref(`users/${userId}/hostoryOfPomdoro/${newPomodoroKay}`)
        .set({
          title,
          dateSerch: fullDateToDatabase,
          date: new Date().getTime(),
          time, // będzie trzeba przekazywać czas
          pomodoro: 1,
        });
    }
  });
};
