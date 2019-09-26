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
  console.log(name);
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

export const saveMyPomodoroToDatabase = (title = 'programowanie') => {
  const userId = firebase.auth().currentUser.uid;

  const date = new Date();
  const currentDay = addZero(date.getDate());
  const currentMonth = addZero(date.getMonth() + 1);
  const currentYear = date.getFullYear();
  const fullDateToDatabase = `${currentDay}|${currentMonth}|${currentYear}`;
  console.log(fullDateToDatabase);

  const lists = [];
  const uidList = [];

  const query = firebase
    .database()
    .ref(`users/${userId}/hostoryOfPomdoro`)
    .orderByChild('dateSerch');

  const getData = new Promise((resolve, reject) => {
    query.once('value').then(snapshot => {
      snapshot.forEach(childSnapshot => {
        const thisName = childSnapshot.val().date;
        const thisUid = childSnapshot.key;
        console.log(thisName);
        lists.push(thisName);
        uidList.push(thisUid);
      });
      resolve(lists);
    });
  });

  getData.then(lists => {
    console.log(lists.length);
  });

  // const isIn = [];

  // firebase
  //   .database()
  //   .ref(`users/${userId}/hostoryOfPomdoro`)
  //   .orderByChild('dateSerch')
  //   // .equalTo(fullDateToDatabase)

  //   .on('child_added', async snap => {
  //     await console.log(snap);

  //     // console.log(snap.key);
  //     // if(snap.val().name === title){
  //     //   isIn = true;
  //     // }
  //     // if(isIn){
  //     //   console.log('dobra start')
  //     // } else if(isIn === false){
  //   });

  // przeanalizować które mają taką samą nazwę jak moj aktualny ten za pomoną filtera
};
