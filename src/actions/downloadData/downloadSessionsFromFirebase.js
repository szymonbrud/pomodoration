import firebase from 'firebase';
import {
  downloadPomodoroSessions,
  downloadData,
  getDateFromDataAndSort,
} from 'actions/downloadSessionsFromDatabase';

export default () => {
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
        return dispatch(downloadPomodoroSessions(pomodoroSessions));
      })
      .then(() => {
        return dispatch(getDateFromDataAndSort(pomodoroSessions));
      })
      .then(() => {
        return dispatch(downloadData(true));
      });
  };
};
