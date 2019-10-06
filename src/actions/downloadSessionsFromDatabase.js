import firebase from 'firebase';
import { sortData } from 'functions';

export const DOWNLOAD_DATA_SUCCESSFULL = 'DOWNLOAD_DATA_SUCCESSFULL';
export const DOWNLOAD_DATA = 'DOWNLOAD_DATA';
export const GET_DATE_FROM_DATA_AND_SORT = 'GET_DATE_FROM_DATA_AND_SORT';

export const downloadDataSuccessfull = data => {
  return {
    type: DOWNLOAD_DATA_SUCCESSFULL,
    payload: {
      data,
    },
  };
};

export const downloadData = download => {
  return {
    type: DOWNLOAD_DATA,
    payload: {
      download,
    },
  };
};

export const getDateFromDataAndSort = data => {
  // TODO:  chenge the name of variable
  let allDate = [];

  let declarated = false;
  data.forEach(element => {
    allDate.forEach(elementDate => {
      if (elementDate === element.dateSerch) {
        declarated = true;
      }
    });
    if (!declarated) {
      allDate.push(element.dateSerch);
    }
    declarated = false;
  });

  allDate = sortData(allDate);

  return {
    type: GET_DATE_FROM_DATA_AND_SORT,
    payload: {
      date: allDate,
    },
  };
};

export const downloadSessions = () => {
  const userId = firebase.auth().currentUser.uid;
  const query = firebase
    .database()
    .ref(`users/${userId}/hostoryOfPomdoro`)
    .orderByChild('date');

  let pomodoroSessions = [];

  return dispatch => {
    const getData = new Promise(resolve => {
      query.once('value').then(snapshot => {
        snapshot.forEach(childSnapshot => {
          pomodoroSessions = [...pomodoroSessions, childSnapshot.val()];
        });
        resolve();
      });
    });

    getData
      .then(() => {
        return dispatch(downloadDataSuccessfull(pomodoroSessions));
      })
      .then(() => {
        return dispatch(getDateFromDataAndSort(pomodoroSessions));
      })
      .then(() => {
        return dispatch(downloadData(true));
      });
  };
};

// TODO: porozdzielać plikami oraz przetestować
