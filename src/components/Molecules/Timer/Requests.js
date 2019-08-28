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

const safeTodataBase = currentTime => {
  const nowTime = getNowTime();

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

export const SendRunAction = currentTime => {
  const willTime = safeTodataBase(currentTime);

  const userId = firebase.auth().currentUser.uid;
  firebase
    .database()
    .ref(`/users/${userId}/timer`)
    .set(
      {
        time: willTime,
        status: 'run',
      },
      error => {
        error && console.log(error);
      },
    );
};

export const SendPauseAction = time => {
  const userId = firebase.auth().currentUser.uid;
  firebase
    .database()
    .ref(`/users/${userId}/timer`)
    .set({ time, status: 'pause' }, err => {
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
